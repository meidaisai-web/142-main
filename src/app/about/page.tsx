import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import ImageText from "@/components/texts/ImageText"
import PageContainer from "@/components/base/PageContainer"
import Movie from "@/components/movie"

export default function About() {
  return (
    <div>
      <PageTitle>明大祭とは</PageTitle>      
      <PageContainer>
        <SectionTitle>明大祭について</SectionTitle>
        <div className="mmoreTopPadding">
          <Text>
            明大祭とは、例年150以上の団体が参加し、約40,000人の来場者数を誇る明治大学の学園祭です。第141回明大祭は2025年11月1日(土).2日(日).3日(月・祝)に和泉キャンパスにて開催されます。ステージでのパフォーマンスや教室での展示・発表、そして模擬店の出店などを通して明大生が自由に自己を表現し、輝く場となっています！明大生、来場者など明大祭に関わるすべての人々に感動を与える場所であり、明治大学と社会を結ぶ役割も果たしています。今年も、学生たちが自らの手で明大祭を創り上げます。
          </Text>
        </div>
        
        <SectionTitle>委員長挨拶</SectionTitle>
        <Text>第141回明大祭実行委員会 委員長</Text>
        <ImageText src="/images/Mariko.png" alt="第141回明大祭委員会委員長 鞠子 輝"> </ImageText>
        <div className="moreTopPadding">
          <Text>
            第141回明大祭公式サイトをご覧いただきありがとうございます。明大祭は、長い歴史のなかで先輩方から受け継がれてきた学生の情熱と努力の結晶です。その想いが脈々と紡がれてきたからこそ、今、私たちはこの場に立ち、みなさまと共に祭を創り上げることができています。
          </Text>
          <Text className="moreTopPadding">
            本年度のコンセプトは「熱狂の、その先へ。」です。祭の喧騒や歓声に包まれる瞬間はかけがえのないものですが、私たちが目指すのはそこにとどまらないこと。その熱狂が終わったあとも心に残り続け、日々の生活のなかでふと蘇るような感動を届けたい。それが第141回明大祭に込めた想いです。
          </Text>
          <Text className="moreTopPadding">
            その想いを形にする原動力は、学生一人ひとりの主体的な挑戦です。ステージで声を響かせる者、模擬店で汗を流す者、研究の成果を伝える者、すべてが学生の力によって成り立っています。そしてその力は、大学という場があり、地域のみなさまに見守られ、来場してくださる一人ひとりがいて初めて輝きを増すのです。学生、大学、地域、来場者がつながり合い、互いに響き合うとき、明大祭はただの祭ではなく、特別な価値を持つ場へと昇華します。
          </Text>
          <Text className="moreTopPadding">
            この祭を実現できるのは、多くの方々の支えがあってこそです。地域のみなさま、応援してくださる企業・校友のみなさま、大学関係者のみなさま、そして日頃から温かく見守ってくださる保護者のみなさまに、明大生および第141回明大祭実行委員会を代表して心より御礼申し上げます。そしてなにより、この祭に足を運び、共に時間を過ごしてくださる来場者のみなさまの存在が、私たちの最大の力となっています。
          </Text>
          <Text className="moreTopPadding">
            ぜひこの3日間を存分に味わってください。歓声や笑顔、そして数えきれない出会いが、みなさまの心を揺さぶり、これからの人生を照らす原動力となることを信じています。
          </Text>
          <Text className="moreTopPadding !text-right">第141回明大祭実行委員会<br/>委員長  鞠子 輝</Text> 
        </div>

        <div className="mx-10 moreTopPadding">
          <SectionTitle>昨年の明大祭の様子</SectionTitle>
        </div>
        <Text className="mt-10 !text-center">昨年度行われた第140回明大祭のEndingステージにて放映されたスライドショーです｡</Text>
        <div className="mt-5 mx-10">
          <Movie href="https://www.youtube.com/embed/yZS7Xf1UkoU?si=OaNyIaVhTOGUFQun" />
        </div>  
      </PageContainer>
      
    </div>
  )
}