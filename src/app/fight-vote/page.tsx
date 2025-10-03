"use client";

import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import { supabase } from "@/utils/supabase/fight-vote";
import React from "react";
import { useState } from "react";

const FightVote = () => {
  const [selectedVote1, setSelectedVote1] = useState<number | null>(null);
  const [selectedVote2, setSelectedVote2] = useState<number | null>(null);
  const [selectedVote3, setSelectedVote3] = useState<number | null>(null);
  const [isFlaming, setIsFlaming] = useState(false);
  const [flamingButtons, setFlamingButtons] = useState<{ [key: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'submitting' | 'success' | 'error'>('submitting');


  //企画一覧
  type FightVoteType = {
    label: string;
    king: FightGroupType;
    queen: FightGroupType;
  };

  type FightGroupType = {
    name: string;
  };

  const fightVoteData: FightVoteType[] = [
    {
      label: "first",
      king: {
        name: "企画k-1",
      },
      queen: {
        name: "企画q-1",
      },
    },
    {
      label: "second",
      king: {
        name: "企画k-2",
      },
      queen: {
        name: "企画q-2",
      },
    },
    {
      label: "last",
      king: {
        name: "企画k-3",
      },
      queen: {
        name: "企画q-3",
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
      // 10秒後に自動で閉じる（長めに設定）
      setTimeout(() => setShowModal(false), 10000);
      return;
    }

    // 燃えるアニメーションを開始
    setIsFlaming(true);
    setTimeout(() => setIsFlaming(false), 300);

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
      <style>{`
        @keyframes flame {
          0%, 100% {
            transform: rotate(-1deg) scale(1);
            box-shadow: 0 0 20px #B5364A, 0 0 40px #3571B8, 0 0 60px #D8CE48;
          }
          25% {
            transform: rotate(1deg) scale(1.05);
            box-shadow: 0 0 25px #3571B8, 0 0 50px #D8CE48, 0 0 80px #B5364A;
          }
          50% {
            transform: rotate(-0.5deg) scale(1.1);
            box-shadow: 0 0 30px #D8CE48, 0 0 60px #B5364A, 0 0 100px #3571B8;
          }
          75% {
            transform: rotate(0.5deg) scale(1.05);
            box-shadow: 0 0 25px #B5364A, 0 0 50px #3571B8, 0 0 80px #D8CE48;
          }
        }
        .flame-animation {
          animation: flame 0.3s ease-in-out;
        }
        @keyframes modalSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px #B5364A;
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px #3571B8, 0 0 60px #D8CE48;
          }
        }
        @keyframes success {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .modal-animation {
          animation: modalSlideIn 0.5s ease-out;
        }
        .pulse-animation {
          animation: pulse 1.5s ease-in-out infinite;
        }
        .success-animation {
          animation: success 0.6s ease-out;
        }
      `}</style>
      <PageTitle>Meiji United Clash</PageTitle>
      <PageContainer>
        <SectionTitle>投票フォーム</SectionTitle>

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
                  <div className="flex-1 text-left" style={{ transform: 'translateX(min(1.5rem, 4vw))' }}>
                    <span className="text-3xl font-bold text-white">QUEEN</span>
                  </div>
                  <div className="flex-1 text-right" style={{ transform: 'translateX(max(-1.5rem, -4vw))' }}>
                    <span className="text-3xl font-bold text-white">KING</span>
                  </div>
                </div>
                <div className="flex m-5 h-64 mb-6">
                  <button
                    type="button"
                    className={`flex-1 p-3 relative transition-all duration-300 transform ${flamingButtons[`queen-${index}`] ? 'flame-animation' : ''} ${(index === 0 && selectedVote1 === 1) ||
                      (index === 1 && selectedVote2 === 1) ||
                      (index === 2 && selectedVote3 === 1)
                      ? 'bg-gray-700 text-white scale-110 shadow-2xl shadow-primary/50'
                      : 'bg-gray-500 hover:bg-accent hover:scale-105 hover:shadow-xl hover:shadow-primary/30 hover:-skew-x-1 hover:opacity-80 active:scale-125 active:bg-secondary active:shadow-2xl active:shadow-accent/70 active:-skew-x-2 active:opacity-100'
                      }`}
                    style={{
                      clipPath: 'polygon(0 0, 80% 0, 90% 100%, 0 100%)',
                      transform: 'translateX(min(1.5rem, 4vw))'
                    }}
                    onClick={() => {
                      // 燃えるアニメーションを開始
                      const buttonKey = `queen-${index}`;
                      setFlamingButtons(prev => ({ ...prev, [buttonKey]: true }));
                      setTimeout(() => setFlamingButtons(prev => ({ ...prev, [buttonKey]: false })), 300);

                      if (index === 0) setSelectedVote1(1);
                      if (index === 1) setSelectedVote2(1);
                      if (index === 2) setSelectedVote3(1);
                    }}
                  >
                    <span className="relative z-10">{data.queen.name}</span>
                  </button>
                  <button
                    type="button"
                    className={`flex-1 p-3 relative transition-all duration-300 transform ${flamingButtons[`king-${index}`] ? 'flame-animation' : ''} ${(index === 0 && selectedVote1 === 0) ||
                      (index === 1 && selectedVote2 === 0) ||
                      (index === 2 && selectedVote3 === 0)
                      ? 'bg-gray-700 text-white scale-110 shadow-2xl shadow-secondary/50'
                      : 'bg-gray-500 hover:bg-secondary hover:scale-105 hover:shadow-xl hover:shadow-secondary/30 hover:skew-x-1 hover:opacity-80 active:scale-125 active:bg-accent active:shadow-2xl active:shadow-primary/70 active:skew-x-2 active:opacity-100'
                      }`}
                    style={{
                      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 20% 100%)',
                      transform: 'translateX(max(-1.5rem, -4vw))'
                    }}
                    onClick={() => {
                      // 燃えるアニメーションを開始
                      const buttonKey = `king-${index}`;
                      setFlamingButtons(prev => ({ ...prev, [buttonKey]: true }));
                      setTimeout(() => setFlamingButtons(prev => ({ ...prev, [buttonKey]: false })), 300);

                      if (index === 0) setSelectedVote1(0);
                      if (index === 1) setSelectedVote2(0);
                      if (index === 2) setSelectedVote3(0);
                    }}
                  >
                    <span className="relative z-10">{data.king.name}</span>
                  </button>
                </div>
                <div className="flex m-5 mt-4">
                  <div className="flex-1 text-left" style={{ transform: 'translateX(min(1.5rem, 4vw))' }}>
                    <span className="text-xl text-white">{data.queen.name}</span>
                  </div>
                  <div className="flex-1 text-right" style={{ transform: 'translateX(max(-1.5rem, -4vw))' }}>
                    <span className="text-xl text-white">{data.king.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className={`relative p-5 h-24 ${isFlaming ? 'flame-animation' : ''}`}>
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
      </PageContainer>

      {/* カッコいいモーダル */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(to bottom right, #B5364A, #8B2635)',
              padding: '32px',
              borderRadius: '16px',
              border: `4px solid ${modalType === 'success' ? '#D8CE48' : modalType === 'error' ? '#3571B8' : '#D8CE48'}`,
              boxShadow: '0 25px 50px -12px rgba(181, 54, 74, 0.5)',
              maxWidth: '400px',
              width: '100%',
              margin: '16px',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                color: '#D8CE48',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              ×
            </button>

            {modalType === 'submitting' && (
              <div>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #B5364A, #3571B8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: '4px solid white',
                    borderTop: '4px solid transparent',
                    borderRadius: '50%'
                  }}></div>
                </div>
                <h2 style={{ color: '#D8CE48', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                  ⚔️ BATTLE VOTE ⚔️
                </h2>
                <p style={{ color: '#fff', fontSize: '20px' }}>投票を送信中...</p>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '4px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#B5364A', borderRadius: '50%' }}></div>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#3571B8', borderRadius: '50%' }}></div>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#D8CE48', borderRadius: '50%' }}></div>
                </div>
              </div>
            )}

            {modalType === 'success' && (
              <div>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #B5364A, #D8CE48)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '32px', color: 'white' }}>✓</span>
                </div>
                <h2 style={{ color: '#D8CE48', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                  Meiji United Clash
                </h2>
                <p style={{ color: '#fff', fontSize: '20px' }}>投票が送信されました</p>
              </div>
            )}

            {modalType === 'error' && (
              <div>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #B5364A, #3571B8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '32px', color: 'white' }}>⚠️</span>
                </div>
                <h2 style={{ color: '#D8CE48', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                  ⚠️ ERROR ⚠️
                </h2>
                <p style={{ color: '#fff', fontSize: '20px' }}>
                  {selectedVote1 === null || selectedVote2 === null || selectedVote3 === null
                    ? "すべての投票を選択してください！"
                    : "投票の送信に失敗しました"}
                </p>
                <p style={{ color: '#D8CE48', fontSize: '14px', marginTop: '8px' }}>もう一度お試しください</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FightVote;
