import Button from "../buttons/Button";
import OnlyImage from "../OnlyImage";
import IndexTitle from "../texts/IndexTitle"

const Access = () => {
    return (
        <div className="px-8">
            <IndexTitle>アクセス</IndexTitle>
            <div className="flex flex-wrap justify-center px-5 mt-10 text-center text-xl font-bold">
                <p>京王線・京王井の頭線</p><p>「明大前駅」より徒歩5分</p>
            </div>
            <OnlyImage src="/images/map/accessmap.jpg" alt="アクセスマップ" className="mt-8" />
            <Button href="/access" className="mt-8">詳しく見る</Button>
        </div>
    )
}

export default Access
