import Button from "../buttons/Button";
import IndexTitle from "../texts/IndexTitle";
import OnlyImage from "../OnlyImage"

const Campusmap = () => {
    return (
        <div>
            <IndexTitle>キャンパスマップ</IndexTitle>
            <div className="mt-10 w-3/4 lg:w-5/12 mx-auto rounded-3xl overflow-hidden">
                <OnlyImage src="/images/map/campusmap.jpg" alt="キャンパスマップ" className="w-full h-full" />
                <Button href="/map" className="mt-8">詳しく見る</Button>
            </div>
        </div>
    )
}
export default Campusmap