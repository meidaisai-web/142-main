'use client'

import Frame from '@/components/index/Frame';
import Button from '@/components/buttons/Button';
import Image from 'next/image';
import Text from '@/components/texts/Text';
import ShadowText from '@/components/texts/ShadowText';

export default function TopIppan() {
  return (
    <>
      <ShadowText>NO iMeiji, NO LIFE？</ShadowText>
      <Frame className="w-full max-w-100 sm:max-w-120">
        <Text className="text-xl sm:text-xl mb-5 px-2 sm:px-10 text-center flex flex-wrap justify-center">
          <span>明大生のリアルを写真で</span>
          <span>大募集！</span>
        </Text>
        <div className="flex justify-center items-center gap-7 sm:gap-10">
          <Image src="/images/svg/camera-sub.svg" width={100} height={100} alt="カメラ" className="w-20 sm:w-28" />
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="my-2 text-center text-base sm:text-lg">
              企画の詳細は
            </Text>
            <Button href="/ippan">
              こちら
            </Button>
          </div>
        </div>
      </Frame>
    </>
  );
}