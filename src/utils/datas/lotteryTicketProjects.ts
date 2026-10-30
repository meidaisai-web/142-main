// 抽選券配付（アンケート対象）企画の一覧。idはLotteryTicketテーブルのidと同じ
export type LotteryTicketProject = {
    id: string;
    name: string;
    // 企画ページがない企画はundefined
    href?: string;
};

export type LotteryTicketDepartment = {
    department: string;
    projects: LotteryTicketProject[];
};

export const lotteryTicketDepartments: LotteryTicketDepartment[] = [
    {
        department: "演出局",
        projects: [
            { id: "mv", name: "第142回明大祭公式テーマソングMV", href: "/mv" },
            { id: "champ", name: "Meidaisai Championship", href: "/champ" },
            { id: "opening", name: "Opening", href: "/opening" },
            { id: "fight", name: "Fight on the Stage", href: "/fight" },
            { id: "meijic", name: "Meijic Station", href: "/meijic" },
            { id: "midnight", name: "中夜祭", href: "/midnight" },
            { id: "king", name: "明大王", href: "/king" },
        ],
    },
    {
        department: "開発局",
        projects: [
            { id: "tour", name: "明治大解剖ツアー", href: "/tour" },
            { id: "jet", name: "JET GACHA STREAM〜カプセルがひらく、次の目的地〜", href: "/jet" },
            { id: "noimage", name: "NO iMeiji, NO LIFE？", href: "/noimage" },
            { id: "dream", name: "Dream Canvas－夜空を描こう－", href: "/dream" },
            { id: "ilumi", name: "明大祭イルミネーション", href: "/ilumi" },
            { id: "mage", name: "Meiji de Mage～見習い魔法使いの修行録～", href: "/mage" },
            { id: "memory", name: "記憶探し～未来からのメッセージ～", href: "/memory" },
            { id: "wakuwaku", name: "受験生コレクション～わくわく明大生活～", href: "/wakuwaku" },
            { id: "sports", name: "熱闘!!明治スポーツ", href: "/sports" },
            { id: "omoi", name: "おもいで工房", href: "/omoi" },
            { id: "mtype", name: "M-TYPE", href: "/mtype" },
            { id: "experiment", name: "めいじっけん", href: "/experiment" },
            { id: "limit", name: "LIMIT∞BREAK", href: "/limit" },
            { id: "senden", name: "超めいだい♡宣伝部" },
            { id: "halloween", name: "ハロウィンナイトin明大祭", href: "/halloween" },
        ],
    },
    {
        department: "広報局",
        projects: [
            { id: "ameijing", name: "Ameijing Photo", href: "/ameijing" },
        ],
    },
    {
        department: "渉外局",
        projects: [
            { id: "booth", name: "企業ブース", href: "/booth" },
            { id: "alumni", name: "校友・父母歓迎スペース", href: "/stakeholders/alumni" },
            { id: "matsubara", name: "松原小学校×明大祭", href: "/matsubara" },
            { id: "lottely-shop", name: "明大前商店街×明大祭〜明大祭で当てよう！豪華景品〜", href: "/lottely-shop" },
            { id: "keio", name: "KEIO×第142回明大祭〜いつも駅からだった　明大前編～", href: "/keio" },
        ],
    },
    {
        department: "制作局",
        projects: [
            { id: "goods", name: "明大祭公式グッズ企画", href: "/goods" },
            { id: "sticker", name: "第142回明大祭公式ステッカー", href: "/sticker" },
        ],
    },
];
