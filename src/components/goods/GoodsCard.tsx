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
      className={`relative rounded-[30px] md:rounded-[36px] border-[6px] border-accent bg-white md:border-[7px] ${wide
        ? `${name === "ガチャガチャ缶バッジ" ? "h-[465px] w-full" : "h-[600px]"} md:col-span-2 md:h-[280px] md:w-[85%] md:justify-self-center`
        : "h-[280px]"
        }`}
    >
      {typeImage ? (
        <div className="absolute overflow-hidden right-4 top-5 pb-6 z-20 w-[65px] md:right-4 md:top-4 md:w-[100px]">         
         <div className="relative">
          <Image
            src={typeImage}
            alt=""
            width={100}
            height={100}
            className="h-auto w-full"
          />

          {/* 上の文字 */}
          <p className="absolute top-[37%] w-full -translate-y-1/2 text-center text-[10px] md:text-[13px] leading-tight ">
            シークレット<br />1種入り！
          </p>

          {/* 下の文字 */}
          <p className="absolute top-[76%] w-full -translate-y-1/2 text-center text-[12px] md:text-[15px]">
            {type}
          </p>
        </div>
        </div>
      ) : (
        type && (
          <div className="absolute right-[20px] top-[20px] z-20">
            <div className="relative w-[65px] md:w-[80px]">
              <Image
                src="/images/goods/goodstypecloud.svg"
                alt=""
                width={80}
                height={50}
              />
              <p className="absolute inset-0 flex items-center justify-center text-[12px] md:text-[15px]">
                {type}
              </p>
            </div>
          </div>
        )
      )}

      <div
        className={`relative flex h-full items-center justify-center pb-10 ${type || typeImage ? "translate-y-7" : ""
          }`}
      >
        {Array.isArray(image) ? (
          name === "ガチャガチャ缶バッジ" ? (
            <>
              <div className="grid w-full grid-cols-2 justify-items-center gap-y-3 gap-x-0 pt-6 pb-14 sm:pb-16 px-8 sm:hidden">
                {image.map((src, index) => (
                  <div
                    key={src}
                    className={`flex w-full justify-center ${index % 2 === 1 ? "translate-y-6" : "-translate-y-2"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`${name}${index + 1}`}
                      width={100}
                      height={100}
                      className="h-auto w-[clamp(72px,23vw,115px)] object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* PC：上下2段を左右にずらす */}
              <div className="hidden w-full flex-col items-center gap-y-0 pt-10 pb-18 sm:flex">
                <div className="flex justify-center gap-x-6 sm:-translate-x-1/10">
                  {image.slice(0, 3).map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${name}${index + 1}`}
                      width={200}
                      height={200}
                      className="h-auto w-[102px] object-contain"
                    />
                  ))}
                </div>

                <div className="flex justify-center gap-x-6 sm:translate-x-1/9">
                  {image.slice(3, 6).map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${name}${index + 4}`}
                      width={200}
                      height={200}
                      className="h-auto w-[102px] object-contain"
                    />
                  ))}
                </div>
              </div>
            </>

          ) : (
            <div className="grid w-full grid-cols-1 justify-items-center gap-y-4 md:grid-cols-3">
              {image.map((src, index) => (
                <div key={src} className="flex w-full justify-center">
                  <Image
                    src={src}
                    alt={`${name}${index + 1}`}
                    width={200}
                    height={160}
                    className={`h-auto w-[90%] max-w-[200px] object-contain `}
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <Image
            src={image}
            alt={name}
            width={260}
            height={200}
            className={`h-auto object-contain ${name === "明大祭ボールペン"
              ? "w-[280px] translate-y-5"
              : name === "アクリルキーホルダー"
                ? "w-[180px] md:w-[210px] translate-y-4"
                : name === "タトゥーシール"
                  ? "w-[200px] md:w-[260px] border border-black translate-y-3"
                  : "w-[200px] md:w-[260px]"
              }`}
          />
        )}

        {name === "明大祭ボールペン" && (
          <div className="absolute left-1/2 top-[40px] -translate-x-1/2">
            <div className="relative border-2 border-accent bg-white p-2">
              <Image
                src="/images/goods/ballpen-logo.jpg"
                alt="ボールペンのデザイン拡大"
                width={200}
                height={60}
                className="h-auto w-[160px] object-contain"
              />

              <div className="absolute -bottom-[18px] right-3 h-0 w-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-accent" />
              <div className="absolute -bottom-[14px] right-[14px] h-0 w-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-white" />
            </div>
          </div>
        )}

      </div>

      <div className="absolute bottom-[-50px] md:bottom-[-68px] left-1/2 z-10 -translate-x-1/2">
        <div className="relative w-[200px] md:w-[220px]">
          <Image
            src="/images/goods/goodscloud.svg"
            alt=""
            width={220}
            height={86}
            className="w-full"
          />

          <p className="absolute right-1 top-[27px] w-full text-center text-[14px] md:top-[32px] md:text-[15px]">
            {name}
          </p>

          <p className="absolute top-[61px] w-full translate-x-35 md:translate-x-35 text-[12px] md:top-[67px] md:text-[12px]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
