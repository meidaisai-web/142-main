"use client";

import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import { addVoteData } from "@/utils/supabase/fightVoteAction";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Photoframe from "@/components/Photoframe";
import Button from "@/components/buttons/Button";

const FightVote = () => {
  const [selectedVote1, setSelectedVote1] = useState<number | null>(null);
  const [selectedVote2, setSelectedVote2] = useState<number | null>(null);
  const [selectedVote3, setSelectedVote3] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'submitting' | 'success' | 'error'>('submitting');
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ページ読み込み時に投票済みかチェック
  React.useEffect(() => {
    const voted = localStorage.getItem('fight-vote-submitted');
    if (voted === 'true') {
      setHasVoted(true);
    }
  }, []);

  // モーダル表示中はスクロールを無効化
  React.useEffect(() => {
    if (showModal) {
      // モーダル表示時にbodyのスクロールを無効化
      document.body.style.overflow = 'hidden';
    } else {
      // モーダル非表示時にスクロールを有効化
      document.body.style.overflow = 'unset';
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  //企画一覧
  type FightVoteType = {
    label: string;
    queen: FightGroupType;
    king: FightGroupType;
  };

  type FightGroupType = {
    name: string;
    imagePath?: string;
  };

  const fightVoteData: FightVoteType[] = [
    {
      label: "1st BATTLE",
      queen: {
        name: "chocolat lumière",
        imagePath: "/images/fight-vote/chocolat.jpg",
      },
      king: {
        name: "SHINE",
        imagePath: "/images/fight-vote/shine.jpg",
      },
    },
    {
      label: "2nd BATTLE",
      queen: {
        name: "アカペラサークル Sound Arts",
        imagePath: "/images/fight-vote/soundarts.jpg",
      },
      king: {
        name: "アカペラサークル amour",
        imagePath: "/images/fight-vote/amour.jpg",
      },
    },
    {
      label: "Final BATTLE",
      queen: {
        name: "中野ダンスサークル SIGN",
        imagePath: "/images/fight-vote/sign.jpg",
      },
      king: {
        name: "K-POPカバーダンスサークル Mercie",
        imagePath: "/images/fight-vote/mercie.jpg",
      },
    },
  ];

  const handleSubmit = async () => {
    console.log("handleSubmit called");
    console.log("Votes:", selectedVote1, selectedVote2, selectedVote3);

    if (selectedVote1 === null || selectedVote2 === null || selectedVote3 === null) {
      console.log("Some votes are null, showing error modal");
      setModalType('error');
      setShowModal(true);
      // 10秒後に自動で閉じる
      setTimeout(() => setShowModal(false), 10000);
      return;
    }

    console.log("送信ボタンが押されました");
    console.log("selectedVote1:", selectedVote1);
    console.log("selectedVote2:", selectedVote2);
    console.log("selectedVote3:", selectedVote3);

    setIsSubmitting(true);
    setModalType('submitting');
    setShowModal(true);
    console.log("Modal should be showing now");
    const success = await addVoteData(selectedVote1, selectedVote2, selectedVote3);
    if (success) {
      // 成功モーダルを表示
      setModalType('success');
      // localStorageに投票済みフラグを保存
      localStorage.setItem('fight-vote-submitted', 'true');
      setHasVoted(true);
      // ページトップまでスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setShowModal(false), 10000);
    } else {
      setModalType('error');
      setTimeout(() => setShowModal(false), 10000);
    }
    setIsSubmitting(false);
  };

  function handleLeftClick(index: number) {
    console.log('onLeftClick called', index);
    if (index === 0) setSelectedVote1(1);
    if (index === 1) setSelectedVote2(1);
    if (index === 2) setSelectedVote3(1);
  }

  function handleRightClick(index: number) {
    console.log('onRightClick called', index);
    if (index === 0) setSelectedVote1(0);
    if (index === 1) setSelectedVote2(0);
    if (index === 2) setSelectedVote3(0);
  }

  return (
    <div>
      <PageTitle>Meiji United Clash</PageTitle>
      <PageContainer>
        {/* ========== 開発用: 投票状態切り替えボタン (リリース時にコメントアウト) ========== */}
        {/* <div className="mb-8 p-4 bg-yellow-500/20 border-2 border-yellow-500 rounded-lg">
          <p className="text-yellow-300 text-sm mb-2">【開発用】投票状態切り替え</p>
          <button
            onClick={() => {
              const newState = !hasVoted;
              setHasVoted(newState);
              localStorage.setItem('fight-vote-submitted', String(newState));
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
          >
            {hasVoted ? '投票前の画面に戻す' : '投票済みの画面にする'}
          </button>
        </div> */}
        {/* ========== 開発用ボタンここまで ========== */}

        {/* 投票ずみページ */}
        {hasVoted ? (
          <div className="text-center py-12">
            <div className="mb-8">
              <Image
                src="/images/ensyutsu/clash-logo.png"
                alt="Meiji United Clash Logo"
                width={200}
                height={200}
                className="object-contain mx-auto rounded-2xl"
              />
            </div>
            <p className="text-xl text-accent font-bold mb-4">投票ありがとうございました！</p>
          </div>
        ) : (
          <div>
            {/* 投票ページ */}
            <SectionTitle>投票フォーム</SectionTitle>
            <div className="mt-8">
              {fightVoteData.map((data, index) => (
                <div key={data.label} className="mb-16">
                  <SmallTitle>{data.label}</SmallTitle>
                  <div className="flex justify-between mt-4 text-2xl font-bold">
                    <p>QUEEN</p>
                    <p>KING</p>
                  </div>
                  <p className="text-end mr-[3%] pl-14 leading-4 py-5">{data.king.name}</p>
                  <Photoframe
                    leftName={data.queen.name}
                    leftImagePath={data.queen.imagePath}
                    rightName={data.king.name}
                    rightImagePath={data.king.imagePath}
                    leftSelected={(index === 0 && selectedVote1 === 1) || (index === 1 && selectedVote2 === 1) || (index === 2 && selectedVote3 === 1)}
                    rightSelected={(index === 0 && selectedVote1 === 0) || (index === 1 && selectedVote2 === 0) || (index === 2 && selectedVote3 === 0)}
                    onLeftClick={() => handleLeftClick(index)}
                    onRightClick={() => handleRightClick(index)}
                  />
                  <p className="ml-[3%] pr-14 leading-4 py-5">{data.queen.name}</p>
                </div>
              ))}
            </div>
            <Button
              onClick={handleSubmit}
              disabled={selectedVote1 === null || selectedVote2 === null || selectedVote3 === null || isSubmitting}
              className="mx-auto mb-16"
            >
              {isSubmitting ? "送信中..." : "投票を送信"}
            </Button>
          </div>
        )}
      </PageContainer>

      {/* モーダル表示 */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/80 flex items-center justify-center z-50"
            onClick={() => {
              if (modalType === 'submitting') return
              setShowModal(false)
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                scale: { type: "spring", damping: 15, stiffness: 200 }
              }}
              className={`relative bg-primary p-8 rounded-2xl border-4 max-w-[400px] w-full m-4 text-center ${modalType === 'success' ? 'border-accent' : modalType === 'error' ? 'border-secondary' : 'border-accent'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 閉じるボタン */}
              {modalType !== 'submitting' && (
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-5 bg-none border-none text-accent text-2xl cursor-pointer"
                >
                  <Image
                    src="/images/svg/batsu.svg"
                    alt="Close"
                    width={24}
                    height={24}
                  />
                </button>
              )}

              {modalType === 'submitting' && (
                <div>
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary-400 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 40px #3571B8, 0 0 60px #D8CE48',
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <p className="text-white text-xl font-semibold">投票を送信中</p>
                  <div className="mt-4 flex justify-center gap-1">
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-secondary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}

              {modalType === 'success' && (
                <div className="static">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", type: "spring", damping: 10 }}
                  >
                    <motion.span
                      className="text-[32px] text-white font-black"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                      <Image
                        src="/images/svg/check.svg"
                        alt="Check"
                        width={32}
                        height={32}
                      />
                    </motion.span>
                  </motion.div>
                  <Image
                    src="/images/ensyutsu/clash-logo.png"
                    alt="Meiji United Clash Logo"
                    width={200}
                    height={200}
                    className="object-contain rounded-2xl w-48 mx-auto mb-4"
                  />
                  <p className="text-white text-xl font-semibold">投票ありがとうございます！</p>
                </div>
              )}

              {modalType === 'error' && (
                <div>
                  <h2 className="text-accent text-2xl font-bold mb-4">
                    ERROR
                  </h2>
                  <p className="text-white text-xl font-semibold">
                    {selectedVote1 && selectedVote2 && selectedVote3
                      ? "投票の送信に失敗しました"
                      : "すべての投票を選択してください"
                    }
                  </p>
                  <p className="text-sm mt-2">もう一度お試しください</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FightVote;