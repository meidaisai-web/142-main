"use client";

import { supabase } from "@/utils/supabase/fight-vote";
import React from "react";
import { useState } from "react";

const FightVote = () => {
  const [selectedVote1, setSelectedVote1] = useState<number | null>(null);
  const [selectedVote2, setSelectedVote2] = useState<number | null>(null);
  const [selectedVote3, setSelectedVote3] = useState<number | null>(null);

  //企画一覧
  type FightVoteType = {
    label: string;
    king: FightGroupType;
    queen: FightGroupType;
  };

  type FightGroupType = {
    name: string;
    url: string;
  };

  const fightVoteData: FightVoteType[] = [
    {
      label: "first",
      king: {
        name: "企画k-1",
        url: "https://adskjvna",
      },
      queen: {
        name: "企画q-1",
        url: "https://akjdnvlkajd",
      },
    },
    {
      label: "second",
      king: {
        name: "企画k-2",
        url: "https://adskjvsddsna",
      },
      queen: {
        name: "企画q-2",
        url: "https://akjddghtnvlkajd",
      },
    },
    {
      label: "last",
      king: {
        name: "企画k-3",
        url: "https://nnnfnnfn",
      },
      queen: {
        name: "企画q-3",
        url: "https://cniniefo",
      },
    },
  ];

  //送信できたか
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log("送信ボタンが押されました");
    console.log("selectedVote1:", selectedVote1);
    console.log("selectedVote2:", selectedVote2);
    console.log("selectedVote3:", selectedVote3);

    if (selectedVote1 === null || selectedVote2 === null || selectedVote3 === null) {
      alert("投票を選択してください");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("FightVote")
        .insert([
          { first: selectedVote1, second: selectedVote2, last: selectedVote3 },
        ]);

      if (error) {
        throw error;
      }

      alert("投票が送信されました！");
      //送信後初期化
      setSelectedVote1(null);
      setSelectedVote2(null);
      setSelectedVote3(null);
    } catch (error) {
      console.error("投票の送信中にエラーが発生しました:", error);
      alert("投票の送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/*　投票タイトル */}
      <div className="flex justify-center">
        <p className="text-3xl mx-auto pt-8">どっちに投票する？</p>
      </div>

      {/* 投票対象を並べる */}
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          {fightVoteData.map((data, index) => (
            <div key={data.label} className="grid grid-cols-2 m-5 gap-8">
              <button
                type="button"
                className={`p-3 rounded ${
                  (index === 0 && selectedVote1 === 0) ||
                  (index === 1 && selectedVote2 === 0) ||
                  (index === 2 && selectedVote3 === 0)
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-500/50'
                }`}
                onClick={() => {
                  if (index === 0) setSelectedVote1(0);
                  if (index === 1) setSelectedVote2(0);
                  if (index === 2) setSelectedVote3(0);
                }}
              >
                {data.king.name}
              </button>
              <button
                type="button"
                className={`p-3 rounded ${
                  (index === 0 && selectedVote1 === 1) ||
                  (index === 1 && selectedVote2 === 1) ||
                  (index === 2 && selectedVote3 === 1)
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-500/50'
                }`}
                onClick={() => {
                  if (index === 0) setSelectedVote1(1);
                  if (index === 1) setSelectedVote2(1);
                  if (index === 2) setSelectedVote3(1);
                }}
              >
                {data.queen.name}
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`px-8 py-4 rounded-lg bg-green-500`}
            disabled={
              selectedVote1 === null || selectedVote2 === null || selectedVote3 === null || isSubmitting
            }
          >
            {isSubmitting ? "送信中..." : "投票を送信"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FightVote;
