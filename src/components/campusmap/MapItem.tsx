import { MapDataType } from "@/utils/models/MapDataType";
import Image from "next/image";
import MapItemImage from "./MapItemImage";

// 改行してよい位置: 空白、「（」の前、「）」の後、施設・設備名の前
const BREAK_POINTS = /\s+|(?<=）)|(?=（)|(?=インフォメーション|休憩所|トイレ|自動販売機|公衆電話|喫煙所|診療所|AED|ATM|GS)/;

// 説明文が長く箱が縦に伸びてしまうため、タイトルと本文の間隔を詰めて他の箱の高さにそろえる箱
const COMPACT_TITLES = ["第一校舎休憩所", "体育館ブリッジ横 喫煙所"];

// 狭い画面で、長いタイトルは箱の上辺いっぱいに置き、その下に画像（左）と説明文（右）を並べる
// 「第一校舎」以上はCSSピクセル320〜402、「総合インフォメーション」以上はCSSピクセル320〜370
const LONG_TITLE_LENGTH = "第一校舎".length;
// 文字数にかかわらず、タイトルを1行で表示するためにCSSピクセル320〜402で並べ替えるタイトル
const ONE_LINE_TITLES = ["LS"];
const MIDDLE_TITLE_LENGTH = "総合インフォメーション".length;

const STACKED = {
    wide: {
        wrap: "min-[320px]:max-[402px]:flex-wrap",
        text: "min-[320px]:max-[402px]:contents",
        title: "min-[320px]:max-[402px]:relative min-[320px]:max-[402px]:order-first min-[320px]:max-[402px]:basis-full",
        description: "min-[320px]:max-[402px]:flex-1 min-[320px]:max-[402px]:min-w-0",
    },
    small: {
        wrap: "min-[320px]:max-[360px]:flex-wrap",
        text: "min-[320px]:max-[360px]:contents",
        title: "min-[320px]:max-[360px]:relative min-[320px]:max-[360px]:order-first min-[320px]:max-[360px]:basis-full",
        description: "min-[320px]:max-[360px]:flex-1 min-[320px]:max-[360px]:min-w-0",
    },
    narrow: {
        wrap: "min-[320px]:max-[370px]:flex-wrap",
        text: "min-[320px]:max-[370px]:contents",
        title: "min-[320px]:max-[370px]:relative min-[320px]:max-[370px]:order-first min-[320px]:max-[370px]:basis-full",
        description: "min-[320px]:max-[370px]:flex-1 min-[320px]:max-[370px]:min-w-0",
    },
};

export default function MapItem({ name, description, src }: MapDataType) {
    const segments = name.split(BREAK_POINTS).filter(Boolean);
    const isCompact = COMPACT_TITLES.includes(name);
    const stacked = name.length >= LONG_TITLE_LENGTH || ONE_LINE_TITLES.includes(name) ? STACKED.wide : name.length >= MIDDLE_TITLE_LENGTH ? STACKED.narrow : null;
    return (
        <div className="relative border-[#9A8EC0] border-4 rounded-3xl bg-white text-black p-4 w-full aspect-[3/1] flex items-center">
            <Image
                src="/images/campusmap/boxcloud.svg"
                alt=""
                aria-hidden
                width={435}
                height={328}
                className="pointer-events-none hidden min-[402px]:block absolute left-0 top-0 w-1/4 h-auto translate-x-[calc(-20%+0.5rem)] -translate-y-1/8"
            />
            <div className={`flex items-start w-full text-xs ${stacked?.wrap ?? ""}`}>
                <MapItemImage src={src} alt={name} />
                <div className={`flex-1 ${stacked?.text ?? ""}`}>
                    <h3 className={`text-[10px] font-black text-center [text-wrap:balance] ${isCompact ? "mb-0" : "mb-3"} ${stacked?.title ?? ""}`}><span
                            className="text-base font-bold box-decoration-clone"
                            style={{
                                backgroundImage: 'linear-gradient(transparent 60%, #FBE1E5 50%), linear-gradient(transparent 40%, #FFFFFF 40%)',
                                backgroundSize: '100% 1.2em, 100% 1.2em',
                                backgroundRepeat: 'repeat, repeat',
                                backgroundPosition: '0 0, 0 0',
                            }}     
                        >
                            {segments.map((segment, i) => (
                                <span key={i} className="whitespace-nowrap">{segment}</span>
                            ))}
                        </span></h3>
                    <p className={`${isCompact ? "leading-snug" : ""} ${stacked?.description ?? ""}`}>{description}</p>
                </div>
            </div>
        </div>
    )
}
