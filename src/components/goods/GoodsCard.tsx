import Image from "next/image";

type GoodsCardProps = {
  image: string | string[];
  name: string;
  price: string;
  type?: string;
  typeImage?: string;
  wide?: boolean;
};

export default function GoodsCard({
  image,
  name,
  price,
  type,
  typeImage,
  wide = false,
}: GoodsCardProps) {
  return (
    <div
      className={`relative rounded-[26px] md:rounded-[36px] border-[6px] md:border-[7px] border-accent bg-white ${
        wide
          ? "h-[600px] md:col-span-2 md:h-[280px] md:w-[85%] md:justify-self-center"
          : "h-[280px]"
      }`}
    >
      {/* 種類タグ */}
        {type && (
          <div className="absolute right-[20px] top-[20px] z-20">
            <div className="relative">
              <Image
                src="/images/goods/goodstypecloud.svg"
                alt=""
                width={80}
                height={50}
              />
              <p className="absolute inset-0 flex items-center justify-center text-[15px]">
                {type}
              </p>
            </div>
          </div>
        )}
      {/* グッズ画像 */}
      <div
        className={`relative flex h-full items-center justify-center pb-10 ${
          type || typeImage ? "translate-y-7" : ""
        }`}
      >
        {Array.isArray(image) ? (
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
            {image.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`${name}${index + 1}`}
                width={200}
                height={200}
                className={`w-[90%] max-w-[200px] object-contain md:w-[28%] ${
                  name === "クリアファイル" ? "-translate-y-1" : ""
                }`}
              />
            ))}
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className={`object-contain ${
              name === "ボールペン" ? "w-[280px] h-auto translate-y-5" : ""
            }`}
          />
        )}

        {/* ボールペンだけ：デザイン拡大の吹き出し */}
        {name === "ボールペン" && (
          <div className="absolute left-1/2 top-[40px] -translate-x-1/2">
            <div className="relative border-2 border-accent bg-white p-2">
              <Image
                src="/images/goods/ballpen-logo.jpg"
                alt="ボールペンのデザイン拡大"
                width={200}
                height={60}
                className="h-auto w-[160px] object-contain"
              />

              {/* 吹き出し
              <div className="absolute -bottom-[15px] right-3 h-0 w-0 border-l-[15px] border-r-[5px] border-t-[15px] border-l-transparent border-r-transparent border-t-accent" />
            </div> */}
              {/* 吹き出しの尻尾：外枠 */}
              <div className="absolute -bottom-[18px] right-3 h-0 w-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-accent" />

              {/* 吹き出しの尻尾：内側 */}
              <div className="absolute -bottom-[14px] right-[14px] h-0 w-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-white" />
            </div>
          </div>
        )}

      
        {typeImage && (
          <Image
            src={typeImage}
            alt=""
            width={100}
            height={100}
            className="..."
          />
        )}

        {/* 商品名・価格 */}
        <div className="absolute bottom-[-56px] left-1/2 -translate-x-1/2">
          <div className="relative w-[220px]">
            {/* 雲 */}
            <Image
              src="/images/goods/goodscloud.svg"
              alt=""
              width={220}
              height={86}
              className="w-full"
            />

            {/* 商品名 */}
            <p className="absolute left-0 top-[32px] w-full text-center text-[15px]">
              {name}
            </p>

            {/* 値段 */}
            <p className="absolute top-[70px] w-full translate-x-37 text-[12px]">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}