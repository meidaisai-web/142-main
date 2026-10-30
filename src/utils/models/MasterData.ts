export type MasterData = {
    id: number;
    groupId: string;
    projectId: number;
    imageUrl: string;
    eventName: string;
    groupName: string;
    catchphrase: string;
    eventContent: string;
    genre: string;
    icons: string[];
    location: string;
    eventDate: string;
    xAccount: string;
    instagramAccount: string;
    tiktokAccount: string;
    youtubeAccount: string;
    homepageUrl: string;
    searchKeywords: string;
    createdAt: Date;
    updatedAt: Date;
    type: string;
    enableShooting: boolean;
    ticket: string;
    foodIcons: string[];
    otherIcons: string[];
    menuItems: string[];
    qrcode: string;
    championshipJoin?: boolean;
    congestion?: CongestionData;
}

export type CongestionData = {
    id: number;
    time: string;
    timestamp: string;
}
// 企画一覧のカードで使う項目だけ。一覧では説明文など長い項目を取得しないことで、Supabase との通信量を減らす
// ※項目を増やすときは masterDataAction.ts の LIST_COLUMNS も同じに変えること
export type MasterDataListItem = Pick<MasterData, 'id' | 'eventName' | 'groupName' | 'imageUrl' | 'icons' | 'genre' | 'eventDate' | 'location' | 'catchphrase'>;
