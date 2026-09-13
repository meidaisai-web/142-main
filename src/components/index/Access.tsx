import Frame from "./Frame"
import Text from "../texts/Text"
import ShadowText from "../texts/ShadowText"
const Access = () => {
  return (
    <div>
      <ShadowText>アクセス</ShadowText>
        <Frame>
         <div className="py-7">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full aspect-square md:w-2/3 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1620.646167114116!2d139.64811683886393!3d35.66980322215147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x6018f3078a4992df%3A0xc09fbf5d8c170111!2z5piO5aSn5YmN6aeF44CB44CSMTU2LTAwNDMg5p2x5Lqs6YO95LiW55Sw6LC35Yy65p2-5Y6f77yS5LiB55uu77yU77yV!3m2!1d35.6684407!2d139.6504908!4m5!1s0x6018f3aa28f1e167%3A0x390585765d39611c!2z5p2x5Lqs6YO95p2J5Lim5Yy65rC456aP77yR5LiB55uu77yZ4oiS77yRIOaYjuayu-Wkp-WtpiDlkozms4njgq3jg6Pjg7Pjg5Hjgrk!3m2!1d35.671161399999995!2d139.6483178!5e0!3m2!1sja!2sjp!4v1730416884844!5m2!1sja!2sjp"
                loading="lazy"
                title="明大前駅から和泉キャンパスまでの地図"
              ></iframe>
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-5">
              <div>
                <Text className="text-lg whitespace-nowrap">
                  明治大学　和泉キャンパス
                </Text>
              </div>
              <div className="text-sm">
                <Text>
                  〒168-8555 <br />
                  東京都杉並区永福1-9-1
                </Text>
              </div>
              <div className="whitespace-nowrap text-sm">
                <Text>
                  京王線・京王井の頭線
                  <br/>
                  「明大前駅」より徒歩5分
                </Text>
              </div>
            </div>

          </div>
          </div>
        </Frame>
    </div>
  )
}

export default Access
