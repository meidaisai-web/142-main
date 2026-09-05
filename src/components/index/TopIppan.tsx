import Frame from '@/components/index/Frame';
import Button from '@/components/buttons/Button';
import Image from 'next/image';
import Text from '@/components/texts/Text';
import ShadowText from '@/components/texts/ShadowText';


export default function TopIppan() {
    return (
        <>
        <ShadowText> 明大生のリアルを大募集！「NO iMeiji, NO LIFE？」</ShadowText>
    <Frame>

      <div className="flex justify-center">
        <Image src="/images/svg/camera.svg" width={100} height={100} alt="カメラ" />
      </div>
      <Text className="text-2xl mt-5 mb-10 sm:px-15">お題に沿った写真を募集中！</Text>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">

        <div className="sm:mr-5 flex flex-col items-center justify-center text-center">
          <Image src="/images/svg/form.svg" width={100} height={100} alt="フォーム" />
          <Text className="!text-center my-3">Googleフォームは</Text>
          <Button href="/">こちら</Button>
      </div>

      <div className="w-full sm:w-0 h-0 sm:h-50 border-b-2 sm:border-b-0 sm:border-l-2 border-dashed border-white" />

      <div className="sm:ml-5 flex flex-col items-center justify-center text-center">
        <Image src="/images/svg/mushimegane.svg" width={100} height={100} alt="虫眼鏡" />
        <Text className="my-3 !text-center">企画の詳細は</Text>
        <Button href="/ippan">こちら</Button>
      </div>

    </div>
            

            




        </Frame>
        </>
    );
}