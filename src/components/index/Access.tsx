import IndexTitle from "../texts/IndexTitle"
import Image from 'next/image';

const Access = () => {
    return (
        <div>
            <IndexTitle>アクセス</IndexTitle>
            <div className="mt-10 text-center text-xl font-bold">京王線・京王井の頭線「明大前駅」より徒歩5分</div>
            <div className="mt-10 w-3/4 lg:w-5/12 mx-auto rounded-4xl overflow-hidden">
                <Image src="/images/ad/accessmap.jpg" alt="アクセスマップ" width={400} height={400} className="w-full h-full" />
            </div>
        </div>
    )
}

export default Access
