"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import detectIncognito from "detectincognitojs";
import { addVoteData } from "@/utils/supabase/fightVoteAction";

// このブラウザに142回の投票済み状態を保存するキー。別端末や保存情報の削除をまたぐ制限ではない。
const STORAGE_KEY = "142-fight-vote-submitted";
const PRIVATE_MESSAGE = "プライベートモード（シークレットモード）では投票できません。お使いのブラウザの通常モードで開き直してください。";
const CHECK_FAILED_MESSAGE = "ブラウザの投票状態を確認できませんでした。通常モードでページを再読み込みしてください。";
const IMAGE_DIR = "/images/fight-vote";
// ロゴSVGは日本語のファイル名なので、URL用に変換して参照する。
const LOGO_SRC = `${IMAGE_DIR}/${encodeURIComponent("ロゴ.svg")}`;

// 六角形はclip-pathで切り抜いて作る。色付きと白のdivを入れ子にすると二重線の枠になる。
// HEX: 写真用の縦長の正六角形。
const HEX = "[clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]";
// LONG_HEX: ボタン・ラベル・ダイアログ用の横長の六角形。左右の角の深さは--cで指定する。
// 入れ子の内側ほど高さが減るので、--cも少しずつ小さくすると線の太さがそろう。
const LONG_HEX = "[clip-path:polygon(0_50%,var(--c)_0,calc(100%_-_var(--c))_0,100%_50%,calc(100%_-_var(--c))_100%,var(--c)_100%)]";

// 昨年と同じ保存値: 左 = 1、右 = 0。部門順は first / second / last に対応。
// nullは未選択。votesの配列順はAmazing、Sweet、Starで固定する。
type Vote = 0 | 1 | null;
type Votes = [Vote, Vote, Vote];
type Modal = { type: "submitting" | "success" | "error"; message: string };
// 表示内容はここで管理する。groupsの先頭が左、次が右。
// Tailwindは組み立てたクラス名を読み取れないため、部門色は完成したクラス名で書く。
const battles = [
  { title: "Amazing dream", bg: "bg-primary", text: "text-primary", groups: [
    { name: "アカペラサークル amour", photo: "amour.webp", value: 1 },
    { name: "ミュージカル研究会", photo: "musical.webp", value: 0 },
  ] },
  { title: "Sweet dream", bg: "bg-secondary", text: "text-secondary", groups: [
    { name: "アカペラサークル Sound Arts", photo: "sound-arts.webp", value: 1 },
    { name: "Copia", photo: "copia.webp", value: 0 },
  ] },
  { title: "Star dream", bg: "bg-accent", text: "text-accent", groups: [
    { name: "K-POPカバーダンスサークル Mercie", photo: "mercie.webp", value: 1 },
    { name: "中野ダンスサークル SIGN", photo: "sign.webp", value: 0 },
  ] },
] as const;

// 団体名の左右につける「〈 〉」形の二重線（外側が太線、内側が細線）。デザインの座標をそのまま使う。
// 色は親のtextクラス（部門色）を使う。文字側に9px重ねて、デザインと同じ間隔にする。
function NameBracket({ side }: { side: "left" | "right" }) {
  const outer = side === "left" ? "M237.656 9.211L10.156 114.836V293.586L237.656 399.211" : "M4.277 9.211L231.777 114.836V293.586L4.277 399.211";
  const inner = side === "left" ? "M237.656 45.773L42.656 136.309V272.113L237.656 362.648" : "M4.277 45.773L199.277 136.309V272.113L4.277 362.648";
  return (
    <svg className={`h-[32px] w-auto shrink-0 ${side === "left" ? "-mr-[9px]" : "-ml-[9px]"}`}
      width="242" height="409" viewBox="0 0 242 409" fill="none" stroke="currentColor" aria-hidden="true">
      <path d={outer} strokeWidth="20.3125" />
      <path d={inner} strokeWidth="8.125" />
    </svg>
  );
}

// 写真2枚の間に置く「VS」と上下の斜め線。デザインの座標をそのまま使い、文字はサイトのフォントで描く。
// 写真と一緒に画面幅に合わせて伸縮する。
function Versus({ className }: { className: string }) {
  return (
    <svg className={`pointer-events-none absolute left-1/2 top-1/2 h-auto w-[6.59%] -translate-1/2 ${className}`}
      width="315" height="705" viewBox="0 0 315 705" fill="currentColor" aria-hidden="true">
      <path d="M30 150L285 30M30 675L285 555" stroke="currentColor" strokeWidth="20" opacity="0.7" />
      <text x="155" y="412" fontSize="142" fontWeight="700" textAnchor="middle">VS</text>
    </svg>
  );
}

type Battle = (typeof battles)[number];
type Group = Battle["groups"][number];
type GroupProps = {
  battle: Battle;
  group: Group;
  selected: boolean;
  dimmed: boolean;
};

// 団体名。左の団体は写真の上に左寄せ、右の団体は写真の下に右寄せで表示する。
// 長い団体名は折り返し、文字は小さくしない。
function GroupName({ battle, group, selected, dimmed, side }: GroupProps & { side: "left" | "right" }) {
  return (
    <div className={`flex px-[6%] ${side === "left" ? "mt-4 justify-start" : "mt-2 justify-end"}`}>
      <p className={`flex max-w-[91%] items-center text-[12px] leading-normal transition duration-200 motion-reduce:transition-none ${battle.text} ${selected ? "scale-110 font-bold" : ""} ${dimmed ? "scale-90 opacity-55" : ""}`}>
        <NameBracket side="left" />
        <span className="min-w-0 text-center text-[#191919]">{group.name}</span>
        <NameBracket side="right" />
      </p>
    </div>
  );
}

// 写真の選択ボタン。外側から「太線→白→細線→白→写真」の順に六角形を重ねる。
function GroupPhoto({ battle, group, selected, dimmed, lower, disabled, onSelect }: GroupProps & {
  lower: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <button type="button"
      className={`relative aspect-square w-[45.9%] cursor-pointer transition duration-200 motion-reduce:transition-none disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#469b9c] ${lower ? "mt-[7.75%]" : ""} ${selected ? "z-10 scale-[1.16]" : ""} ${dimmed ? "scale-90 brightness-[.48]" : ""}`}
      aria-label={`${group.name}に投票`} aria-pressed={selected}
      disabled={disabled} onClick={onSelect}>
      <span className={`absolute inset-y-0 left-[6.7%] right-[6.7%] ${HEX} ${battle.bg} p-[2%]`}>
        <span className={`block size-full ${HEX} bg-white p-[3%]`}>
          <span className={`block size-full ${HEX} ${battle.bg} p-px`}>
            <span className={`block size-full ${HEX} bg-white p-[3%]`}>
              {/* 写真は軽量化済みのWebPなので、Next.jsで再圧縮せずそのまま配信する。 */}
              <Image className={`size-full object-cover ${HEX}`}
                src={`${IMAGE_DIR}/${group.photo}`} alt="" width={300} height={300} unoptimized />
            </span>
          </span>
        </span>
      </span>
      {/* 選択中ラベル。選択前から描画しておき、表示の切り替えだけで出す。 */}
      <span className={`absolute bottom-[6%] left-1/2 -translate-x-1/2 ${LONG_HEX} ${battle.bg} p-[2px] [--c:9px] ${selected ? "" : "invisible"}`} aria-hidden="true">
        <span className={`block ${LONG_HEX} bg-white p-[2px] [--c:8px]`}>
          <span className={`block ${LONG_HEX} ${battle.bg} p-px [--c:7px]`}>
            <span className={`block ${LONG_HEX} bg-white px-4 py-0.5 text-[12px] leading-normal tracking-[.16em] whitespace-nowrap [--c:6px]`}>選択中</span>
          </span>
        </span>
      </span>
    </button>
  );
}

export default function FightVote() {
  // 画面の状態: 選択内容、初期確認の完了・失敗、投票済み、プライベートモード、送信中、ダイアログ。
  const [votes, setVotes] = useState<Votes>([null, null, null]);
  const [ready, setReady] = useState(false);
  const [checkFailed, setCheckFailed] = useState(false);
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
        // 確認できない場合は投票させない。ダイアログを閉じた後も分かるよう、状態表示も切り替える。
        if (!active) return;
        setCheckFailed(true);
        setModal({ type: "error", message: CHECK_FAILED_MESSAGE });
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
      // 保存できないブラウザでは、投票済み記録を残せないため送信前に止める。
      const probe = `${STORAGE_KEY}-check`;
      localStorage.setItem(probe, "true");
      localStorage.removeItem(probe);
      const [first, second, last] = votes;
      // 上の確認で全部門選択済みのため通常は起きないが、万一のときは送信中のまま止めずにエラーを表示する。
      if (first === null || second === null || last === null) throw new Error("Vote is incomplete");
      // FightVoteテーブルのfirst / second / last列に、各部門の左=1・右=0を保存する。
      // Supabaseの設定漏れなどで保存できない場合もここで失敗し、下のcatchでエラーを表示する。
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

  // ロゴSVGには透明な余白があるため、枠で切り抜いて六角形部分が中央に来るようにする。
  const logo = (
    <div className="relative aspect-[814/768] w-full overflow-hidden">
      <Image className="absolute -left-[58.97%] -top-[59.5%] h-auto w-[154.79%] max-w-none"
        src={LOGO_SRC} alt="Fight on the Stage" width={1260} height={1225} priority />
    </div>
  );

  // 下の余白は、フッターの雲が上にはみ出す分（約14vw）に、見える余白を足したもの。
  return (
    <div className="mx-auto mt-[56px] w-full max-w-[880px] bg-white pt-[22px] pb-[calc(14vw+50px)] text-[#191919]">
      {/* 改行文字で「Fight on the Stage」と「投票フォーム」を2行に分ける。 */}
      <PageTitle className="whitespace-pre-line">{"Fight on the Stage\n投票フォーム"}</PageTitle>
      {/* 投票済みなら完了画面、それ以外は説明・3部門の選択肢・送信ボタンを表示する。 */}
      {hasVoted ? (
        <div className="flex flex-col items-center gap-4 px-5 pt-4 pb-6 text-center">
          <div className="w-52">{logo}</div>
          <p className="text-[16px] leading-relaxed">投票ありがとうございました！</p>
        </div>
      ) : (
        <>
          <div className="mt-2 mb-12 grid grid-cols-[96px_minmax(0,1fr)] items-center gap-4 px-[6%] sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
            {logo}
            <div className="space-y-1 text-[14px] leading-normal">
              <p>Amazing dream、Sweet dream、Star dreamの各々でよりテーマを表現していると感じた方の団体を選んで投票してください。</p>
              <p>Fight on the Stageの企画については<TransitionLink href="/fight" targetBlank>こちら</TransitionLink>からご覧いただけます。</p>
            </div>
          </div>
          {/* 3部門を同じ構成で描画する。上から「左の団体名」「写真2枚とVS」「右の団体名」の3段。 */}
          {battles.map((battle, index) => {
            // 選択側と反対側の状態を、写真と団体名の両方に反映する。
            const states = battle.groups.map((group) => ({
              battle, group,
              selected: votes[index] === group.value,
              dimmed: votes[index] !== null && votes[index] !== group.value,
            }));
            return (
              <section className="mb-10" key={battle.title} aria-labelledby={`battle-${index}`}>
                <SmallTitle id={`battle-${index}`} center>{battle.title}</SmallTitle>
                <GroupName {...states[0]} side="left" />
                <div className="relative flex items-start justify-between px-[11.29%]">
                  {states.map((state, sideIndex) => (
                    <GroupPhoto key={state.group.name} {...state} lower={sideIndex === 0}
                      disabled={!ready || isPrivate || isSubmitting}
                      onSelect={() => selectVote(index, state.group.value)} />
                  ))}
                  <Versus className={battle.text} />
                </div>
                <GroupName {...states[1]} side="right" />
              </section>
            );
          })}
          <p className="mt-4 px-[6%] text-center text-[16px] leading-relaxed font-bold text-[#666]" role="status">
            {checkFailed ? CHECK_FAILED_MESSAGE : !ready ? "投票状態を確認しています。" : isPrivate ? PRIVATE_MESSAGE : `${votes.filter((vote) => vote !== null).length}/3部門を選択済み`}
          </p>
          {/* 全部門を選択し、ブラウザ確認が済んだときだけ送信可能にする。 */}
          {/* 枠の形はspanで切り抜き、button自体は切り抜かずにフォーカス枠を見せる。 */}
          <button type="button"
            className="mx-auto mt-3 block h-16 w-[85%] max-w-[420px] cursor-pointer enabled:active:scale-[.96] enabled:active:opacity-75 disabled:cursor-default disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#469b9c]"
            onClick={handleSubmit}
            disabled={!ready || !allSelected || isPrivate || isSubmitting}
            aria-label={isSubmitting ? "投票を送信中" : "投票を送信する"} aria-busy={isSubmitting}>
            <span className={`block size-full ${LONG_HEX} bg-primary p-[3px] [--c:18px]`}>
              <span className={`block size-full ${LONG_HEX} bg-white p-[3px] [--c:16px]`}>
                <span className={`flex size-full items-center justify-center ${LONG_HEX} bg-primary-900 text-[20px] font-bold tracking-[.3em] text-white [--c:15px]`}>投票する</span>
              </span>
            </span>
          </button>
        </>
      )}
      {/* 送信中・成功・エラーの共通ダイアログ。送信中は閉じる操作を無効にする。
          枠は写真と同じ「太線→白→細線」の横長六角形で、色はprimary（薄緑）だけを使う。 */}
      {modal && <dialog ref={dialog} aria-labelledby="vote-message"
        className="m-auto w-[340px] max-w-[calc(100%-32px)] overflow-visible bg-transparent p-0 text-[#191919] backdrop:bg-black/45"
        onCancel={(event) => { if (isSubmitting) event.preventDefault(); }}
        // Escキーや戻る操作でダイアログが閉じたら、表示状態も合わせる。ブラウザによっては送信中でも閉じるため。
        // 表示内容の切り替えで閉じて開き直した場合は、開いたままなので何もしない。
        onClose={() => { if (!dialog.current?.open) setModal(null); }}>
        <div className={`${LONG_HEX} bg-primary p-[6px] [--c:34px]`}>
          <div className={`${LONG_HEX} bg-white p-[4px] [--c:32px]`}>
            <div className={`${LONG_HEX} bg-primary p-[1.5px] [--c:31px]`}>
              <div className={`flex flex-col items-center ${LONG_HEX} bg-white px-[44px] pt-[26px] pb-[24px] text-center [--c:30px]`}>
                {/* 状態を表す小さな六角形のアイコン。送信中は回転、成功は✓、エラーは!を表示する。 */}
                <span className={`block h-[46px] w-[40px] ${HEX} bg-primary p-[3px]`} aria-hidden="true">
                  <span className={`block size-full ${HEX} bg-white p-[2px]`}>
                    <span className={`flex size-full items-center justify-center ${HEX} bg-primary text-[20px] leading-none font-bold text-white`}>
                      {modal.type === "submitting"
                        ? <span className="block size-[16px] animate-spin rounded-full border-2 border-white border-t-transparent motion-reduce:animate-none" />
                        : modal.type === "success" ? "✓" : "!"}
                    </span>
                  </span>
                </span>
                <p id="vote-message" role="status" className="mt-[14px] text-[14px] leading-relaxed [word-break:auto-phrase]">{modal.message}</p>
                {modal.type !== "submitting" && (
                  // 枠の形はspanで切り抜き、button自体は切り抜かずにフォーカス枠を見せる。
                  <button type="button" onClick={() => setModal(null)}
                    className="mt-[20px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#469b9c] active:scale-[.96]">
                    <span className={`block ${LONG_HEX} bg-primary p-[2px] [--c:14px]`}>
                      <span className={`block ${LONG_HEX} bg-white p-[2px] [--c:13px]`}>
                        <span className={`flex h-[38px] items-center ${LONG_HEX} bg-primary px-[36px] text-[14px] font-bold tracking-[.2em] [--c:12px]`}>閉じる</span>
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </dialog>}
    </div>
  );
}
