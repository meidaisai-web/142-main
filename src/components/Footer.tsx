import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer w-screen bg-secondary pb-10">
      <div className="flex flex-col items-center">
        <div className="flex justify-center mt-10 mx-10">
          <Image src="/images/svg/logo-title-concept-white.svg" alt="Logo" width={190} height={45} />
        </div>
        <div className="flex justify-between my-8 w-full px-15 max-w-96">
          <Image src="/images/svg/Instagram_White.svg" alt="instagram" width={26} height={23}  />
          <Image src="/images/svg/X-white.svg" alt="x" width={25} height={20} />
          <Image src="/images/svg/youtube-white.svg" alt="youtube" width={27} height={20}/>
          <Image src="/images/svg/TikTok.svg" alt="TikTok" width={25} height={20} />
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 text-white text-xs px-5">
          <div>
            <a className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              お問い合わせ
            </a>
          </div>
          <div>
            <a className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              リンク
            </a>
          </div>
          <div>
            <a className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              サイトマップ
            </a>
          </div>
          <div>
            <a className="border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
              プライバシーポリシー
            </a>
          </div>
        </div>
        <div className="justify-center flex-col text-white text-sm font-copyright font-bold pt-8">
          <p>©第141回明大祭実行委員会</p>
        </div>
      </div>
    </footer>
  );
}