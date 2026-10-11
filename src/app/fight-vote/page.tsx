"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import TransitionLink from "@/components/buttons/TransitionLink";
import detectIncognito from "detectincognitojs";
import PageTitle from "@/components/texts/PageTitle";
import { addVoteData } from "@/utils/supabase/fightVoteAction";
import styles from "./page.module.css";

// このブラウザに142回の投票済み状態を保存するキー。別端末や保存情報の削除をまたぐ制限ではない。
const STORAGE_KEY = "142-fight-vote-submitted";
const PRIVATE_MESSAGE = "プライベートモード（シークレットモード）では投票できません。お使いのブラウザの通常モードで開き直してください。";
// 日本語や空白を含むファイル名をURL用に変換し、public/images/fight-vote内の画像を参照する。
const asset = (name: string) => `/images/fight-vote/${encodeURIComponent(name)}`;

// 昨年と同じ保存値: 左 = 1、右 = 0。部門順は first / second / last に対応。
// nullは未選択。votesの配列順はAmazing、Sweet、Starで固定する。
type Vote = 0 | 1 | null;
type Votes = [Vote, Vote, Vote];
type Modal = { type: "submitting" | "success" | "error"; message: string };
// 表示内容はここで管理する。groupsの先頭が左、次が右。
// frameは団体名の枠と選択中ラベルのファイル名、photoは軽量化済みSVGを指定する。
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

// このページ専用の部門見出し。共通SmallTitleは使わず、飾りのSVGと文字を組み合わせる。
// idをsectionのaria-labelledbyと対応させ、読み上げ時にも部門名を伝える。
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
  // 画面の状態: 選択内容、初期確認の完了、投票済み、プライベートモード、送信中、ダイアログ。
  const [votes, setVotes] = useState<Votes>([null, null, null]);
  const [ready, setReady] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<Modal | null>(null);
  // stateの描画更新を待たずに送信をロックし、同じ画面での連打による多重送信を防ぐ。
  const submitting = useRef(false);
  // HTMLのdialog要素を保持し、showModal / closeで開閉する。
  const dialog = useRef<HTMLDialogElement>(null);
  const allSelected = votes.every((vote) => vote !== null);

  // 初回表示時に投票済み状態とブラウザを確認する。完了するまでは選択・送信を無効にする。
  useEffect(() => {
    // ページを離れた後に非同期処理が終わっても、stateを更新しないためのフラグ。
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
    // 同じサイトの別タブで投票した場合も、このタブを投票済み画面に切り替える。
    const syncVote = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue === "true") setHasVoted(true);
    };
    window.addEventListener("storage", syncVote);
    return () => { active = false; window.removeEventListener("storage", syncVote); };
  }, []);

  // ダイアログを表示中は背面のスクロールを止め、閉じると元の設定に戻す。
  useEffect(() => {
    if (!modal) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, [modal]);

  // 押された部門だけ選択を更新する。配列をコピーし、ほかの部門の選択は維持する。
  function selectVote(index: number, value: 0 | 1) {
    if (!ready || hasVoted || isPrivate || submitting.current) return;
    setVotes((current) => {
      const next: Votes = [...current];
      next[index] = value;
      return next;
    });
  }

  // 3部門をまとめて送信する。未選択・確認前・投票済み・送信中の場合は送信しない。
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
      // 画面を開いた後に別タブで投票された可能性があるので、送信直前にも確認する。
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
      // 有効化フラグが文字列の"true"で、URL・公開キーが揃っているときだけ送信する。
      // NEXT_PUBLIC_*はビルド時に埋め込まれる。公開先の設定変更後は再ビルドが必要。
      // 投票期間の日時を判定する処理ではない。
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
      // FightVoteテーブルのfirst / second / last列に、各部門の左=1・右=0を保存する。
      const success = await addVoteData(first, second, last);
      if (!success) throw new Error("Vote submission failed");
      // DBへの保存成功後にだけ完了画面へ進み、ブラウザにも投票済みを記録する。
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
      // 成功・失敗・途中のreturnのいずれでも送信ロックを解除する。
      submitting.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeading}>
        <PageTitle>Fight on the Stage投票フォーム</PageTitle>
      </div>
      {/* 投票済みなら完了画面、それ以外は説明・3部門の選択肢・送信ボタンを表示する。 */}
      {hasVoted ? (
        <div className={styles.thankYou}>
          {/* SVG自体の透明余白をCSSの表示枠で隠し、ロゴ本体を中央に揃える。 */}
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
              <p>Fight on the stageの企画については<TransitionLink href="/fight" targetBlank>こちら</TransitionLink>からご覧いただけます。</p>
            </div>
          </div>
          {/* 3部門を同じ構成で描画する。見た目のサイズ・位置・拡縮はpage.module.cssで管理。 */}
          {battles.map((battle, index) => (
            <section className={styles.battle} key={battle.frame} aria-labelledby={`battle-${index}`}>
              <BattleTitle id={`battle-${index}`}>{battle.title}</BattleTitle>
              {battle.groups.map((group, sideIndex) => {
                const side = sideIndex === 0 ? styles.left : styles.right;
                // 選択側と反対側の状態を、写真と団体名の両方のCSSクラスに反映する。
                const selected = votes[index] === group.value;
                const dimmed = votes[index] !== null && !selected;
                return (
                  <Fragment key={group.name}>
                    <div className={`${styles.name} ${side} ${selected ? styles.chosen : ""} ${dimmed ? styles.unselected : ""}`}>
                      <Image src={asset(`${battle.frame}frame-left.svg`)} alt="" width={242} height={409} />
                      <span className={group.name === "K-POPカバーダンスサークル Mercie" ? styles.mercieName : undefined}>{group.name}</span>
                      <Image src={asset(`${battle.frame}frame-right.svg`)} alt="" width={242} height={409} />
                    </div>
                    <button type="button" className={`${styles.photo} ${side} ${selected ? styles.selected : ""} ${dimmed ? styles.dimmed : ""}`}
                      aria-label={`${group.name}に投票`} aria-pressed={selected}
                      disabled={!ready || isPrivate || isSubmitting}
                      onClick={() => selectVote(index, group.value)}>
                      <Image src={asset(group.photo)} alt="" width={1700} height={1700} />
                      {/* 初めからSVGを読み込み、選択時は待たずにラベルを表示する。 */}
                      <span className={`${styles.selectedLabel} ${selected ? styles.labelVisible : ""}`} aria-hidden="true">
                        <Image src={asset(`${battle.frame}selected.svg`)} alt="" width={160} height={50} loading="eager" />
                        選択中
                      </span>
                    </button>
                  </Fragment>
                );
              })}
              <Image className={styles.vs} src={asset(battle.vs)} alt="VS" width={315} height={705} />
            </section>
          ))}
          <p className={styles.status} role="status">
            {!ready ? "投票状態を確認しています。" : isPrivate ? PRIVATE_MESSAGE : `${votes.filter((vote) => vote !== null).length}/3部門を選択済み`}
          </p>
          {/* 全部門を選択し、ブラウザ確認が済んだときだけ送信可能にする。 */}
          <button type="button" className={styles.submit} onClick={handleSubmit}
            disabled={!ready || !allSelected || isPrivate || isSubmitting}
            aria-label={isSubmitting ? "投票を送信中" : "投票を送信する"} aria-busy={isSubmitting}>
            <Image src={asset("投票ボタン.svg")} alt="" width={2400} height={400} />
          </button>
        </>
      )}
      {/* 送信中・成功・エラーの共通ダイアログ。送信中は閉じる操作を無効にする。 */}
      {modal && <dialog ref={dialog} className={styles.dialog} aria-labelledby="vote-message"
        onCancel={(event) => { if (isSubmitting) event.preventDefault(); else setModal(null); }}>
        <p id="vote-message" role="status">{modal.message}</p>
        {modal.type !== "submitting" && <button type="button" onClick={() => setModal(null)}>閉じる</button>}
      </dialog>}
    </div>
  );
}
