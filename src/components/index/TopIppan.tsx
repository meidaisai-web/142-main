'use client'

import Frame from '@/components/index/Frame';
import Button from '@/components/buttons/Button';
import Image from 'next/image';
import Text from '@/components/texts/Text';
import ShadowText from '@/components/texts/ShadowText';


export default function TopIppan() {
  return (
    <>
      <ShadowText> 明大生のリアルを大募集！「NO iMeiji, NO LIFE？」</ShadowText>
      <Frame className="w-full max-w-120 sm:max-w-140">
        <Image src="/images/svg/camera.svg" width={100} height={100} alt="カメラ" className="w-20 sm:w-25 mx-auto" />

        <Text className="text-xl sm:text-2xl mt-4 mb-10 px-2 sm:px-10 !text-center">
          お題の写真を募集中！
        </Text>

        <div className="flex flex-row justify-center items-center gap-7 sm:gap-10">

          {/* Googleフォーム */}
          <div className=" flex flex-col items-center justify-center text-center min-w-0">
            <Image src="/images/svg/form1.svg" width={100} height={100} alt="フォーム" className="w-25 h-25 sm:w-30 sm:h-30" />
            {/* <Text className="my-2 !text-center text-sm sm:text-base">
              Googleフォームは
            </Text> */}
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSem4wZZRlwB0u4jZBZ6Pe-s73-R9t7Uxk-qRYOJqEoN15o97A/viewform" target="_blank" className="mt-5">
              応募はこちら
            </Button>
          </div>

          {/* 区切り線 */}
          <div className="w-0 h-32 sm:h-50 border-l-2 sm:border-l-4 border-dashed border-white shrink-0" />

          {/* 企画詳細 */}
          <div className="flex flex-col items-center justify-center text-center min-w-0">
            <Image src="/images/svg/mushimegane1.svg" width={100} height={100} alt="虫眼鏡" className="w-25 h-25 sm:w-30 sm:h-30" />
            {/* <Text className="my-2 !text-center text-sm sm:text-base">
              
            </Text> */}
            <Button href="/ippan" className="mt-5">
              詳細はこちら
            </Button>
          </div>
        </div>
      </Frame>
    </>
  );
}