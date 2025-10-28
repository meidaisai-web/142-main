import { MapDataType } from "../models/MapDataType";

export const mapData: MapDataType[] = [
    {
        name: "第一校舎インフォメーションブース",
        legend: "インフォメーションブース",
        location: ["第一校舎"],
        src: "/images/campusmap/info_first.jpg",
        description: "第一校舎1階に設置されているインフォメーションブースです。第一校舎での企画をお探しの際などにご利用ください。"
    },
    {
        name: '総合インフォメーション',
        legend: 'インフォメーションブース',
        location: ['メディア棟', '和泉図書館'],
        src: '/images/campusmap/info_main.jpg',
        description: 'エントランスを入ってすぐ、和泉図書館前にある一番大きなインフォメーションブースです。落としものや迷子の対応もここで承っております。'
    },
    {
        name: 'LSインフォメーションブース',
        legend: 'インフォメーションブース',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/info_ls.jpg',
        description: '和泉ラーニングスクエア（LS）1階に設置されているインフォメーションブースです。和泉ラーニングスクエア（LS）での企画をお探しの際などにご利用ください。'
    },
    {
        name: '食堂横階段下インフォメーションブース',
        legend: 'インフォメーションブース',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/info_cafe.jpg',
        description: '食堂横の階段の下に設置されているインフォメーションブースです。メインステージに最も近いインフォメーションブースです。',
    },
    {
        name: '守衛所 AED',
        legend: 'AED',
        location: [],
        src: '/images/campusmap/aed_guard.jpg',
        description: '正門横の守衛所内にございます。ご利用の際は、守衛所内の警備員にお声かけください。'
    },
    {
        name: "第一校舎1階 AED",
        legend: "AED",
        location: ["第一校舎"],
        src: "/images/campusmap/aed_first.jpg",
        description: "正面から入って左側のATM横にございます。"
    },
    {
        name: "第一校舎2階診療所 AED",
        legend: "AED",
        location: ["第一校舎"],
        src: "/images/campusmap/aed_first_2.jpg",
        description: "診療所内の事務室にございます。中にいる職員の方にお声がけください。明大祭期間の開室時間は9:00〜19:00となっております。"
    },
    {
        name: 'メディア棟1階 AED',
        legend: 'AED',
        location: ['メディア棟', '和泉図書館'],
        src: '/images/campusmap/aed_media.jpg',
        description: 'メディア棟1階、エスカレーターの側面にございます。'
    },
    {
        name: '和泉ラーニングスクエア（LS）AED',
        legend: 'AED',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/aed_ls.jpg',
        description: '和泉ラーニングスクエア（LS）1階、エントランス入ってすぐ左にございます。',
    },
    {
        name: '食堂前 AED',
        legend: 'AED',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/aed_cafe.jpg',
        description: '食堂の扉の外、左の壁にございます。'
    },
    {
        name: '体育館西棟2階 AED',
        legend: 'AED',
        location: [],
        src: '/images/campusmap/aed_gym_west.jpg',
        description: '正面玄関を入って右手にございます。'
    },
    {
        name: '体育館東棟1階 AED',
        legend: 'AED',
        location: [],
        src: '/images/campusmap/aed_gym_east.jpg',
        description: 'グラウンド前にございます。',
    },
    {
        name: '研究棟 AED',
        legend: 'AED',
        location: [],
        src: '/images/campusmap/aed_lab.jpg',
        description: '研究棟への出入りは基本的に教職員と大学院生のみとなっております。緊急の際にだけご利用いただけます。'
    },
    {
        name: '第一校舎休憩所',
        legend: '休憩所',
        location: ['第一校舎'],
        src: '/images/campusmap/rest_first.jpg',
        description: '1階ラウンジ、2階エレベーター前、3階エレベーター前、214教室の横、317教室の横、3階リフレッシュルーム、4階エレベーター前（企画実施日のみ）、4階リフレッシュルーム（企画実施日のみ）の8箇所に休憩所がございます。'
    },
    {
        name: 'メディア棟 休憩所',
        legend: '休憩所',
        location: ['メディア棟'],
        src: '/images/campusmap/rest_media.jpg',
        description: '1階ラウンジ、4階Bラウンジの2箇所に休憩所がございます。'
    },
    {
        name: '和泉ラーニングスクエア（LS）休憩所',
        legend: '休憩所',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/rest_ls.jpg',
        description: '1階〜5階の椅子やベンチのあるスペースは休憩所となっております。ただし2階アゴラ、2階階段横カウンターは企画実施中は休憩所でなくなります。',
    },
    {
        name: '和泉図書館 休憩所',
        legend: '休憩所',
        location: ['和泉図書館'],
        src: '/images/campusmap/rest_library.jpg',
        description: '図書館入って左手にある和泉図書館サロンを休憩所として開放しております。'
    },
    {
        name: '和泉図書館横（屋外）休憩所',
        legend: '休憩所',
        location: ['和泉図書館', 'メディア棟', '和泉図書館'],
        src: '/images/campusmap/rest_library_out.jpg',
        description: '和泉図書館横の芝生の周辺一帯が屋外休憩所となっております。広々としたスペースです。'
    },
    {
        name: '食堂',
        legend: '休憩所',
        location: ['食堂'],
        src: '/images/campusmap/rest_cafe.jpg',
        description: '食堂内のテーブル席は休憩所として開放しております。'
    },
    {
        name: '第二学生会館2階 休憩所',
        legend: '休憩所',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/rest_second.jpg',
        description: '第二学生会館2階のラウンジが休憩所となっております。'
    },
    {
        name: '第二学生会館前（屋外）休憩所',
        legend: '休憩所',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/rest_second_out.jpg',
        description: '第二学生会館の入口付近に設置されている屋外休憩所です。'
    },
    {
        name: '創造の泉付近（屋外）休憩所',
        legend: '休憩所',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/rest_izumi.jpg',
        description: '創造の泉付近にあり、メインステージに近い屋外休憩所です。模擬店にも近いため、ぜひ飲食の際にもご利用ください。',
    },
    {
        name: '和泉ラーニングスクエア前（屋外）休憩所',
        legend: '休憩所',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/rest_ls_front.jpg',
        description: '和泉ラーニングスクエア前に設置されている屋外休憩所です。'
    },
    {
        name: '和泉のへそ（第四校舎跡地）休憩所',
        legend: '休憩所',
        location: [],
        src: '/images/campusmap/rest_heso.jpg',
        description: '第四校舎跡地にある「和泉のへそ」付近に設置されている屋外休憩所です。'
    },
    {
        name: '第一校舎前 GS',
        legend: 'ごみステーション',
        location: ['第一校舎'],
        src: '/images/campusmap/gs_first.jpg',
        description: '第一校舎前に設置されています。建物間やステージ間を移動する道中にございます。'
    },
    {
        name: 'メディア棟横 GS',
        legend: 'ごみステーション',
        location: ['メディア棟'],
        src: '/images/campusmap/gs_media.jpg',
        description: 'メディア棟横に設置されています。正門に最も近いごみステーションです。お帰りの際に寄りやすい場所となっております。',
    },
    {
        name: 'LS・メディア棟間 GS',
        legend: 'ごみステーション',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/gs_ls.jpg',
        description: '和泉ラーニングスクエア（LS）とメディア棟の間に設置されています。模擬店に近いごみステーションです。飲食後のごみを捨てる際などにご活用ください。',
    },
    {
        name: '和泉図書館横屋外休憩所付近 GS',
        legend: 'ごみステーション',
        location: ['和泉図書館'],
        src: '/images/campusmap/gs_library.jpg',
        description: '和泉図書館横の屋外休憩所付近に設置されています。屋外休憩所で飲食された場合などにご活用ください。'
    },
    {
        name: '明大マート横 GS',
        legend: 'ごみステーション',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/gs_mart.jpg',
        description: '明大マートの横に設置されています。こちらも模擬店に近いごみステーションです。飲食後のごみを捨てる際などにご活用ください。'
    },
    {
        name: "第一校舎 トイレ",
        legend: "バリアフリートイレ",
        location: ["第一校舎"],
        src: "/images/campusmap/toilet_first.jpg",
        description: "1階、4階にございます。4階は女子トイレの方にございます。トイレの場所は各階に設置されているフロアマップをご確認ください。"
    },
    {
        name: 'メディア棟 トイレ',
        legend: 'バリアフリートイレ',
        location: ['メディア棟'],
        src: '/images/campusmap/toilet_media.jpg',
        description: '1階、2階、3階にございます。トイレの場所は各階に設置されているフロアマップをご確認ください。'
    },
    {
        name: '和泉ラーニングスクエア（LS）トイレ',
        legend: 'バリアフリートイレ',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/toilet_ls.jpg',
        description: '1階、4階、6階にございます。トイレの場所は各階に設置されているフロアマップをご確認ください。'
    },
    {
        name: '食堂1階 トイレ',
        legend: 'バリアフリートイレ',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/toilet_cafe.jpg',
        description: '1階にございます。入ってそのまま正面にお進みください。また、男子トイレは1階、女子トイレは2階にございます。'
    },
    {
        name: '和泉図書館 トイレ',
        legend: 'バリアフリートイレ',
        location: ['和泉図書館'],
        src: '/images/campusmap/toilet_library.jpg',
        description: '1階、入って右手にございます。'
    },
    {
        name: '第一校舎1階 自動販売機',
        legend: '自動販売機',
        location: ['第一校舎'],
        src: '/images/campusmap/vending_first.jpg',
        description: '1階入口横、1階ラウンジ、1階E階段横に飲料販売機がございます。また、1階ラウンジには菓子販売機もございます。'
    },
    {
        name: 'メディア棟 自動販売機',
        legend: '自動販売機',
        location: ['メディア棟'],
        src: '/images/campusmap/vending_media.jpg',
        description: '1階ラウンジ奥、階A・Bラウンジ、5階ラウンジに飲料販売機がございます。また、5階ラウンジには菓子販売機、1階ラウンジ奥にはアイス販売機もございます。'
    },
    {
        name: '和泉ラーニングスクエア（LS）自動販売機',
        legend: '自動販売機',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/vending_ls.jpg',
        description: '1階ラウンジ、3階食堂連絡通路前、4階渡り廊下に飲料販売機がございます。'
    },
    {
        name: '和泉図書館 自動販売機',
        legend: '自動販売機',
        location: ['和泉図書館'],
        src: '/images/campusmap/vending_library.jpg',
        description: 'サロン内にカップ式飲料販売機がございます。'
    },
    {
        name: '第二学生会館 自動販売機',
        legend: '自動販売機',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/vending_second.jpg',
        description: '1階ラウンジ、2階ラウンジに飲料販売機がございます。'
    },
    {
        name: '明大マート横 自動販売機',
        legend: '自動販売機',
        location: ['食堂', '第二学生会館'],
        src: '/images/campusmap/vending_mart.jpg',
        description: '明大マートの横にアイス販売機がございます。'
    },
    {
        name: 'リエゾン棟前 喫煙所',
        legend: '喫煙所',
        location: ['第一校舎', '和泉図書館'],
        src: '/images/campusmap/smoking.jpg',
        description: 'リエゾン棟前に設置しております。今年度の明大祭は、指定場所以外での喫煙を禁止しております。必ずこちらの喫煙所を利用するようにお願いします。'
    },
    {
        name: '第一校舎 ATM',
        legend: 'ATM',
        location: ['第一校舎'],
        src: '/images/campusmap/atm_first.jpg',
        description: '三井住友銀行のATMです。三菱UFJ銀行もご利用可能です。第一校舎1階、入口すぐ左にございます。明大祭期間中は11月1日（土）の9：00〜13：00のみ稼働しております。'
    },
    {
        name: 'メディア棟 ATM',
        legend: 'ATM',
        location: ['メディア棟'],
        src: '/images/campusmap/atm_media.jpg',
        description: 'ゆうちょ銀行のATMです。メディア棟1階ラウンジの奥にございます。明大祭期間中は11月1日（土）の9：00〜17：00のみ稼働しております。'
    },
    {
        name: '第一校舎1階 公衆電話',
        legend: '公衆電話',
        location: ['第一校舎'],
        src: '/images/campusmap/phone_first.jpg',
        description: '第一校舎1階、エントランス入ってエレベーターを通過してすぐ右側にございます。'
    },
    {
        name: 'メディア棟1階 公衆電話',
        legend: '公衆電話',
        location: ['メディア棟', '和泉図書館'],
        src: '/images/campusmap/phone_media.jpg',
        description: 'メディア棟1階、エスカレーターの側面にございます。'
    },
    {
        name: '明大マート前 公衆電話',
        legend: '公衆電話',
        location: ['和泉ラーニングスクエア', '食堂'],
        src: '/images/campusmap/phone_mart.jpg',
        description: '明大マートの正面に設置されています。'
    },
    {
        name: '第二学生会館前 公衆電話',
        legend: '公衆電話',
        location: ['第二学生会館'],
        src: '/images/campusmap/phone_second.jpg',
        description: '第二学生会館に向かって左側に設置されています。'
    },
    {
        name: '第一校舎 診療所',
        legend: '診療所',
        location: ['第一校舎'],
        src: '/images/campusmap/infirmary_first.jpg',
        description: '第一校舎202教室の前にございます。明大祭期間中は10:00〜19:00まで解放しております。体調がすぐれない場合、けがをした場合はご利用ください。'
    },
    {
        name: 'メインステージ',
        legend: 'ステージ',
        location: [],
        src: '/images/campusmap/main_stage.jpg',
        description: '食堂と和泉ラーニングスクエア間の広場にあるステージです。音楽・ダンス・その他エンターテイメント性を有する多様な企画を実施しています。'
    },
    {
        name: 'パフォーマンスエリア',
        legend: 'ステージ',
        location: [],
        src: '/images/campusmap/performance_area.jpg',
        description: 'メディア棟横にある最も広いエリアであり、大人数でのパフォーマンスが行われます。観覧スペースとの距離が近く、みなさまにも一体感を感じていただけます。'
    },
    {
        name: 'エントランスエリア',
        legend: 'ステージ',
        location: [],
        src: '/images/campusmap/entrance_area.jpg',
        description: '正門前にあり、目に留まりやすいエリアとなっております。入場後、すぐにご覧いただけます。'
    },
    {
        name: '和泉ラーニングスクエア LS101教室',
        legend: 'ステージ',
        location: ['和泉ラーニングスクエア'],
        src: '/images/campusmap/ls101.jpg',
        description: '和泉ラーニングスクエア（LS）1階にある屋内ステージです。'
    }
]