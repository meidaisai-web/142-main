import Image from "next/image"
import Button from "../buttons/Button"

const MeichamSection = () => {
    return (
        <div className="mt-10 relative">
            <div className="relative rounded-3xl border-accent border-4 bg-white flex flex-col items-center gap-5 w-full max-w-4xl mx-auto p-4">
                <Image src='/images/meicham/meicham.jpg' alt='明大祭チャンピオンシップロゴ' width={160} height={160} className="w-40" />
                <div className="text-black font-medium text-center text-sm sm:text-base">
                    <div>明大祭のチャンピオンに輝くのは誰だ！</div>
                    <div>企画詳細ページからの投票お待ちしています！！</div>
                </div>
                <Button href="/champ" className="mb-5 max-w-xs w-full">詳しくはこちら</Button>
            </div>
        </div>
    )
}

export default MeichamSection