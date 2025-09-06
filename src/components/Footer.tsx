import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer w-full bg-secondary pt-15 pb-10">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex justify-center mx-10">
          <Image src="/images/svg/logo-title-concept-white.svg" alt="Logo" width={240} height={55} className="w-45 md:w-60 h-auto" />
        </div>
        <div className="flex my-11 px-15 max-w-96 gap-10 md:gap-15 justify-center">
          <a
            href="https://www.instagram.com/meidaisai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-8 h-8 md:w-11 md:h-11">
              <Image
                src="/images/svg/Instagram_White.svg"
                alt="instagram"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://x.com/meidaisai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-8 h-8 md:w-11 md:h-11">
              <Image
                src="/images/svg/X-white.svg"
                alt="x"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.youtube.com/@meidaisainetpr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-8 h-8 md:w-11 md:h-11">
              <Image
                src="/images/svg/youtube-white.svg"
                alt="youtube"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@meidaisai_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-8 h-8 md:w-11 md:h-11">
              <Image
                src="/images/svg/TikTok.svg"
                alt="TikTok"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 text-white text-xs px-5 list-none">
          <div>
            <li className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              お問い合わせ
            </li>
          </div>
          <div>
            <li className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              リンク
            </li>
          </div>
          <div>
            <li className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              サイトマップ
            </li>
          </div>
          <div>
            <li className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              プライバシーポリシー
            </li>
          </div>
        </div>
        <div className="justify-center flex-col text-white text-sm font-copyright font-bold pt-9">
          <p>©第141回明大祭実行委員会</p>
        </div>
      </div>
    </footer>
  );
}