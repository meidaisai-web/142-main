import Frame from "./Frame"
import Text from "../texts/Text"
import ShadowText from "../texts/ShadowText"
import Image from "next/image"
const Thx = () => {
  return (
    <div>
    <ShadowText>総来場者数</ShadowText>
    {/* Frame既定のmax-w-4xlと同じ要素に付くため、!で優先させて上書きする */}
    <Frame className="!max-w-3xl">
        <div className="relative overflow-hidden rounded-lg aspect-[2/1]">
            <Image
                src="/images/ending.jpg"
                alt="明大祭の来場者"
                fill
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <Text center className="text-[clamp(1.25rem,6vw,3rem)] sm:mb-5 text-white font-bold underline decoration-2 underline-offset-4 sm:underline-offset-8">43,970人</Text>
                <Text center className="text-[clamp(0.875rem,3.75vw,1.875rem)] text-white">たくさんの方のご来場、</Text>
                <Text center noTopPadding className="text-[clamp(0.875rem,3.75vw,1.875rem)] sm:pt-2 text-white">誠にありがとうございました。</Text>
            </div>
        </div>
    </Frame>
</div>
    )
}

export default Thx
