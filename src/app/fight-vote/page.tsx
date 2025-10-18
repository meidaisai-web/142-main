"use client";

import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import { supabase } from "@/utils/supabase/fightVoteAction";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Photoframe from "@/components/Photoframe";

const FightVote = () => {
  const [selectedVote1, setSelectedVote1] = useState<number | null>(null);
  const [selectedVote2, setSelectedVote2] = useState<number | null>(null);
  const [selectedVote3, setSelectedVote3] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'submitting' | 'success' | 'error'>('submitting');
  const [hasVoted, setHasVoted] = useState(false);

  // ページ読み込み時に投票済みかチェック
  React.useEffect(() => {
    const voted = localStorage.getItem('fight-vote-submitted');
    if (voted === 'true') {
      setHasVoted(true);
    }
  }, []);

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
      label: "first",
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
      label: "second",
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
      label: "last",
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

  //送信できたか
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const { error } = await supabase
        .from("FightVote")
        .insert([
          { first: selectedVote1, second: selectedVote2, last: selectedVote3 },
        ]);

      if (error) {
        throw error;
      }

      // 成功モーダルを表示
      setModalType('success');
      // localStorageに投票済みフラグを保存
      localStorage.setItem('fight-vote-submitted', 'true');
      setHasVoted(true);
      setTimeout(() => {
        setShowModal(false);
        //送信後初期化
        setSelectedVote1(null);
        setSelectedVote2(null);
        setSelectedVote3(null);
      }, 10000);
    } catch (error) {
      console.error("投票の送信中にエラーが発生しました:", error);
      setModalType('error');
      setTimeout(() => setShowModal(false), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageTitle>Meiji United Clash</PageTitle>
      <PageContainer>
        <SectionTitle>投票フォーム</SectionTitle>

        {/* ========== 開発用: 投票状態切り替えボタン (リリース時にコメントアウト) ========== */}
        <div className="mb-8 p-4 bg-yellow-500/20 border-2 border-yellow-500 rounded-lg">
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
        </div>
        {/* ========== 開発用ボタンここまで ========== */}

        {/* 投票されてたらページ遷移 */}
        {hasVoted ? (
          <div className="text-center py-12">
            <div className="mb-8">
              <div className="mx-auto w-[300px] h-[180px] relative">
                <Image
                  src="/images/ad/fight-logo.jpg"
                  alt="Meiji United Clash Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-2xl text-accent font-bold mb-4">投票ありがとうございました！</p>
            <p className="text-white">既に投票済みです。</p>
          </div>
        ) : (
          <>
            {/* 投票対象を並べる */}
            <div>
              <div className="mt-8">
                {fightVoteData.map((data, index) => (
                  <div key={data.label} className="mb-16">
                    <SmallTitle>
                      {(() => {
                        if (index === 0) return "1st BATTLE";
                        if (index === 1) return "2nd BATTLE";
                        if (index === 2) return "3rd BATTLE";
                      })()}
                    </SmallTitle>
                    <div className="flex m-5 mb-4">
                      <div className="flex-1 text-left translate-x-10">
                        <span className="text-3xl font-bold text-white">QUEEN</span>
                      </div>
                      <div className="flex-1 text-right -translate-x-10">
                        <span className="text-3xl font-bold text-white">KING</span>
                      </div>
                    </div>
                    <Photoframe
                      leftName={data.queen.name}
                      leftImagePath={data.queen.imagePath}
                      rightName={data.king.name}
                      rightImagePath={data.king.imagePath}
                      leftSelected={(index === 0 && selectedVote1 === 1) || (index === 1 && selectedVote2 === 1) || (index === 2 && selectedVote3 === 1)}
                      rightSelected={(index === 0 && selectedVote1 === 0) || (index === 1 && selectedVote2 === 0) || (index === 2 && selectedVote3 === 0)}
                      onLeftClick={() => {
                        console.log('onLeftClick called', index);
                        if (index === 0) setSelectedVote1(1);
                        if (index === 1) setSelectedVote2(1);
                        if (index === 2) setSelectedVote3(1);
                      }}
                      onRightClick={() => {
                        console.log('onRightClick called', index);
                        if (index === 0) setSelectedVote1(0);
                        if (index === 1) setSelectedVote2(0);
                        if (index === 2) setSelectedVote3(0);
                      }}
                    />
                    <div className="flex m-5 mt-4">
                      <div className="flex-1 text-left">
                        <span className="text-xl text-white">{data.queen.name}</span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-xl text-white">{data.king.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="relative p-5 h-24">
                  <button
                    onClick={handleSubmit}
                    disabled={selectedVote1 === null || selectedVote2 === null || selectedVote3 === null || isSubmitting}
                    className="absolute -translate-x-1/2 left-1/2 whitespace-nowrap"
                  >
                    <div className='-rotate-3 rounded-full border-4 border-secondary py-3 px-20 sm:px-30 text-center absolute -translate-x-1/2 left-1/2'>
                      <p className='opacity-0'>{isSubmitting ? "送信中..." : "投票を送信"}</p>
                    </div>
                    <div className={`font-bold rounded-full transition duration-100 text-black py-3 px-20 sm:px-30 absolute z-10 -translate-x-1/2 left-1/2 ${selectedVote1 === null || selectedVote2 === null || selectedVote3 === null || isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent hover:bg-accent-700 cursor-pointer'
                      }`}>
                      {isSubmitting ? "送信中..." : "投票を送信"}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </PageContainer>

      {/* モーダル表示 */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/80 flex items-center justify-center z-[99999]"
            onClick={() => setShowModal(false)}
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
              className={`relative bg-gradient-to-br from-[#B5364A] to-[#8B2635] p-8 rounded-2xl border-4 shadow-[0_25px_50px_-12px_rgba(181,54,74,0.5)] max-w-[400px] w-full m-4 text-center ${modalType === 'success' ? 'border-[#D8CE48]' : modalType === 'error' ? 'border-[#3571B8]' : 'border-[#D8CE48]'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 閉じるボタン */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-[10px] right-[10px] bg-none border-none text-[#D8CE48] text-2xl cursor-pointer p-[5px]"
              >
                ×
              </button>

              {modalType === 'submitting' && (
                <div>
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#B5364A] to-[#3571B8] flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 20px #B5364A',
                        '0 0 40px #3571B8, 0 0 60px #D8CE48',
                        '0 0 20px #B5364A'
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
                  <div className="mx-auto mb-4 w-[300px] h-[180px] relative">
                    <Image
                      src="/images/ad/fight-logo.jpg"
                      alt="Meiji United Clash Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white text-xl">投票を送信中...</p>
                  <div className="mt-4 flex justify-center gap-1">
                    <motion.div
                      className="w-2 h-2 bg-[#B5364A] rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-[#3571B8] rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-[#D8CE48] rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}

              {modalType === 'success' && (
                <div>
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#B5364A] to-[#D8CE48] flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", type: "spring", damping: 10 }}
                  >
                    <motion.span
                      className="text-[32px] text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                      ✓
                    </motion.span>
                  </motion.div>
                  <div className="mx-auto mb-4 w-[300px] h-[180px] relative">
                    <Image
                      src="/images/ad/fight-logo.jpg"
                      alt="Meiji United Clash Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white text-xl">投票が送信されました</p>
                </div>
              )}

              {modalType === 'error' && (
                <div>
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#B5364A] to-[#3571B8] flex items-center justify-center"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0],
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <span className="text-[32px] text-white">⚠️</span>
                  </motion.div>
                  <h2 className="text-[#D8CE48] text-2xl font-bold mb-4">
                    ⚠️ ERROR ⚠️
                  </h2>
                  <p className="text-white text-xl">
                    {selectedVote1 === null || selectedVote2 === null || selectedVote3 === null
                      ? "すべての投票を選択してください！"
                      : "投票の送信に失敗しました"}
                  </p>
                  <p className="text-[#D8CE48] text-sm mt-2">もう一度お試しください</p>
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