import Image from "next/image";

interface MapItemImageProps {
    src: string;
    alt: string;
}

// 画像の左上に雲をくっつけて表示する（CSSピクセル401以下のみ。402以上は MapItem 側で箱の左上に雲を置く）。雲の大きさと位置は画像の大きさに対する割合で決める
export default function MapItemImage({ src, alt }: MapItemImageProps) {
    return (
        <div className="relative shrink-0 self-center w-1/3 max-w-40 mr-3 sm:mr-4">
            <Image
                src="/images/campusmap/boxcloud.svg"
                alt=""
                aria-hidden
                width={435}
                height={328}
                className="pointer-events-none min-[402px]:hidden absolute left-0 top-0 w-4/5 h-auto -translate-x-1/4 -translate-y-1/5"
            />
            <Image src={src} alt={alt} width={200} height={200} className="relative w-full aspect-square object-cover rounded-lg" />
        </div>
    )
}
