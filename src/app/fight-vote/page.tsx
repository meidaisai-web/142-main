"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import detectIncognito from "detectincognitojs";
import PageTitle from "@/components/texts/PageTitle";
import { addVoteData } from "@/utils/supabase/fightVoteAction";
import styles from "./page.module.css";

const STORAGE_KEY = "142-fight-vote-submitted";
const PRIVATE_MESSAGE = "プライベートモードでは投票できません。SafariまたはChromeの通常モードでアクセスしてください。";
const asset = (name: string) => `/images/fight-vote/${encodeURIComponent(name)}`;

// 昨年と同じ保存値: 左 = 1、右 = 0。部門順は first / second / last に対応。
type Vote = 0 | 1 | null;
type Votes = [Vote, Vote, Vote];
type Modal = { type: "submitting" | "success" | "error"; message: string };
const battles = [
  { title: "Amazing dream", frame: "Amazing", vs: "VS Amazing.svg", groups: [
    { name: "アカペラサークル amour", photo: "amour六角形_軽量版.svg", value: 1 },
    { name: "ミュージカル研究会", photo: "ミュージカル研究会六角形_軽量版.svg", value: 0 },
  ] },
  { title: "Sweet dream", frame: "Sweet", vs: "VS Sweet.svg", groups: [
    { name: "アカペラサークル Sound Arts", photo: "Sound Arts六角形_軽量版.svg", value: 1 },
    { name: "Copia", photo: "Copia六角形_軽量版.svg", value: 0 },
  ] },
  { title: "Star dream", frame: "Star", vs: "VS dream.svg", groups: [
    { name: "K-POPカバーダンスサークル Mercie", photo: "Mercie六角形_軽量版.svg", value: 1 },
    { name: "中野ダンスサークル SIGN", photo: "SIGN六角形_軽量版.svg", value: 0 },
  ] },
] as const;

type BattleTitleProps = {
  id: string;
  children: string;
};

function BattleTitle({ id, children }: BattleTitleProps) {
  return (
    <div className={styles.battleHeading}>
      <h2 id={id} className={styles.battleTitle}>
        <Image
          src="/images/svg/titles/smallTitle.svg"
          alt=""
          width={177}
          height={162}
          className={styles.battleTitleDecoration}
          aria-hidden="true"
        />
        {children}
      </h2>
    </div>
  );
}

export default function FightVote() {
  const [votes, setVotes] = useState<Votes>([null, null, null]);
  const [ready, setReady] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<Modal | null>(null);
  const submitting = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const allSelected = votes.every((vote) => vote !== null);

  useEffect(() => {
    let active = true;
    async function checkVote() {
      try {
        const voted = localStorage.getItem(STORAGE_KEY) === "true";
        if (active) setHasVoted(voted);
        const result = await detectIncognito();
        if (!active) return;
        setIsPrivate(result.isPrivate);
        if (result.isPrivate) setModal({ type: "error", message: PRIVATE_MESSAGE });
        setReady(true);
      } catch {
        if (active) setModal({ type: "error", message: "ブラウザの投票状態を確認できませんでした。通常モードでページを再読み込みしてください。" });
      }
    }
    void checkVote();
    const syncVote = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue === "true") setHasVoted(true);
    };
    window.addEventListener("storage", syncVote);
    return () => { active = false; window.removeEventListener("storage", syncVote); };
  }, []);

  useEffect(() => {
    if (!modal) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, [modal]);

  function selectVote(index: number, value: 0 | 1) {
    if (!ready || hasVoted || isPrivate || submitting.current) return;
    setVotes((current) => {
      const next: Votes = [...current];
      next[index] = value;
      return next;
    });
  }

  async function handleSubmit() {
    if (submitting.current || !ready || hasVoted) return;
    if (!allSelected) {
      setModal({ type: "error", message: "すべての部門を選択してください。" });
      return;
    }
    submitting.current = true;
    setIsSubmitting(true);
    setModal({ type: "submitting", message: "投票を送信中です。" });
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        setHasVoted(true);
        setModal({ type: "success", message: "投票ありがとうございました！" });
        return;
      }
      const result = await detectIncognito();
      if (result.isPrivate) {
        setIsPrivate(true);
        setModal({ type: "error", message: PRIVATE_MESSAGE });
        return;
      }
      // 今年の接続先が確定するまでは送信しない。期間の制限ではなく接続設定の確認。
      if (process.env.NEXT_PUBLIC_FIGHT_VOTE_ENABLED !== "true" ||
          !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        setModal({ type: "error", message: "現在、投票の受付準備中です。しばらくしてからお試しください。" });
        return;
      }
      // 保存できないブラウザでは、投票済み記録を残せないため送信前に止める。
      const probe = `${STORAGE_KEY}-check`;
      localStorage.setItem(probe, "true");
      localStorage.removeItem(probe);
      const [first, second, last] = votes;
      if (first === null || second === null || last === null) return;
      const success = await addVoteData(first, second, last);
      if (!success) throw new Error("Vote submission failed");
      setHasVoted(true);
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // サーバーで受理済みなら再送させず、この画面の投票済み状態を維持する。
      }
      setModal({ type: "success", message: "投票ありがとうございました！" });
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      setModal({ type: "error", message: "投票の送信に失敗しました。通信環境とブラウザの保存設定を確認して、もう一度お試しください。" });
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeading}>
        <PageTitle>Fight on the Stage投票フォーム</PageTitle>
      </div>
      {hasVoted ? (
        <div className={styles.thankYou}>
          <div className={`${styles.logoFrame} ${styles.thankYouLogo}`}>
            <Image className={styles.logo} src={asset("ロゴ.svg")} alt="Fight on the Stage" width={1260} height={1225} priority />
          </div>
          <p>投票ありがとうございました！</p>
        </div>
      ) : (
        <>
          <div className={styles.intro}>
            <div className={styles.logoFrame}>
              <Image className={styles.logo} src={asset("ロゴ.svg")} alt="Fight on the Stage" width={1260} height={1225} priority />
            </div>
            <div className={styles.introText}>
              <p>Amazing dream、Sweet dream、Star dreamの各々でよりテーマを表現していると感じた方の団体を選んで投票してください。</p>
              <p>Fight on the stageの企画については<Link href="/fight" target="_blank" rel="noopener noreferrer">こちら</Link>からご覧いただけます。</p>
            </div>
          </div>
          {battles.map((battle, index) => (
            <section className={styles.battle} key={battle.frame} aria-labelledby={`battle-${index}`}>
              <BattleTitle id={`battle-${index}`}>{battle.title}</BattleTitle>
              {battle.groups.map((group, sideIndex) => {
                const side = sideIndex === 0 ? styles.left : styles.right;
                const selected = votes[index] === group.value;
                const dimmed = votes[index] !== null && !selected;
                return (
                  <Fragment key={group.name}>
                    <div className={`${styles.name} ${side} ${selected ? styles.chosen : ""} ${dimmed ? styles.unselected : ""}`}>
                      <Image src={asset(`${battle.frame}frame-left.svg`)} alt="" width={242} height={409} />
                      {group.name}
                      <Image src={asset(`${battle.frame}frame-right.svg`)} alt="" width={242} height={409} />
                    </div>
                    <button type="button" className={`${styles.photo} ${side} ${selected ? styles.selected : ""} ${dimmed ? styles.dimmed : ""}`}
                      aria-label={`${group.name}に投票`} aria-pressed={selected}
                      disabled={!ready || isPrivate || isSubmitting}
                      onClick={() => selectVote(index, group.value)}>
                      <Image src={asset(group.photo)} alt="" width={1700} height={1700} />
                      {selected && <span className={styles.selectedLabel} aria-hidden="true">
                        <Image src={asset(`${battle.frame}selected.svg`)} alt="" width={160} height={50} />
                        選択中
                      </span>}
                    </button>
                  </Fragment>
                );
              })}
              <Image className={styles.vs} src={asset(battle.vs)} alt="VS" width={315} height={705} />
            </section>
          ))}
          <button type="button" className={styles.submit} onClick={handleSubmit}
            disabled={!ready || !allSelected || isPrivate || isSubmitting}
            aria-label={isSubmitting ? "投票を送信中" : "投票を送信する"} aria-busy={isSubmitting}>
            <Image src={asset("投票ボタン.svg")} alt="" width={2400} height={400} />
          </button>
          <p className={styles.status} role="status">
            {!ready ? "投票状態を確認しています。" : isPrivate ? PRIVATE_MESSAGE : `${votes.filter((vote) => vote !== null).length}/3部門を選択済み`}
          </p>
        </>
      )}
      {modal && <dialog ref={dialog} className={styles.dialog} aria-labelledby="vote-message"
        onCancel={(event) => { if (isSubmitting) event.preventDefault(); else setModal(null); }}>
        <p id="vote-message" role="status">{modal.message}</p>
        {modal.type !== "submitting" && <button type="button" onClick={() => setModal(null)}>閉じる</button>}
      </dialog>}
    </div>
  );
}
