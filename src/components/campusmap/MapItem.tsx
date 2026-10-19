import { MapDataType } from "@/utils/models/MapDataType";
import Image from "next/image";

// 改行してよい位置: 空白、「（」の前、「）」の後、施設・設備名の前
const BREAK_POINTS = /\s+|(?<=）)|(?=（)|(?=インフォメーションブース|休憩所|トイレ|自動販売機|公衆電話|喫煙所|診療所|AED|ATM|GS)/;

// 説明文が長く箱が縦に伸びてしまうため、タイトルと本文の間隔を詰めて他の箱の高さにそろえる箱
const COMPACT_TITLES = ["第一校舎休憩所", "体育館ブリッジ横 喫煙所"];

export default function MapItem({ name, description, src }: MapDataType) {
    const segments = name.split(BREAK_POINTS).filter(Boolean);
    const isCompact = COMPACT_TITLES.includes(name);
    return (
        <div className="relative border-[#9A8EC0] border-4 rounded-3xl bg-white text-black p-4 w-full aspect-[3/1]">
            <Image
                src="/images/campusmap/boxcloud.svg"
                alt=""
                aria-hidden
                width={435}
                height={328}
                className="pointer-events-none absolute left-0 top-0 w-1/4 h-auto translate-x-[calc(-20%+0.5rem)] -translate-y-1/8"
            />
            <div className="flex items-start h-full text-xs">
                <Image src={src} alt={name} width={200} height={200} className="relative self-center w-1/3 max-w-40 aspect-square object-cover mr-3 sm:mr-4 rounded-lg" />
                <div className="flex-1">
                    <h3 className={`text-[10px] font-black text-center [text-wrap:balance] ${isCompact ? "mb-0" : "mb-3"}`}><span
                            className="text-base font-bold"
                            style={{
                                backgroundImage: 'linear-gradient(transparent 60%, #FBE1E5 50%)',
                                backgroundSize: '100% 1.2em',
                                backgroundRepeat: 'repeat',
                                backgroundPosition: '0 0',
                            }}     
                        >
                            {segments.map((segment, i) => (
                                <span key={i} className="inline-block">{segment}</span>
                            ))}
                        </span></h3>
                    <p className={isCompact ? "leading-snug" : ""}>{description}</p>
                </div>
            </div>
        </div>
    )
}
