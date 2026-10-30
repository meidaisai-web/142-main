import Text from "@/components/texts/Text";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import TransitionLink from "@/components/buttons/TransitionLink";
import LotteryTicketProjectList from "@/components/LotteryTicketProjectList";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
export default function page() {
    return (
        <CloudPageContainer>
            <div>
                <PageTitle>アンケート対象企画一覧</PageTitle>
                <SmallTitle>企画効果測定</SmallTitle>
                <Text>
                    明大祭をより魅力的にするため、アンケートを実施中！<br />
                    各企画のQRコードからWeb回答、またはアンケート用紙への記入のいずれか一方でご回答ください。<br />
                    同じ企画に複数回回答しても、抽選券は1枚までです。
                </Text>

                <AccentText>抽選券受取方法</AccentText>
                <Text>
                    Web：回答完了画面を提示<br />
                    用紙：記入済み用紙を提出
                </Text>
                <AccentText>抽選券受取場所</AccentText>
                <Text>和泉図書館前アンケート受付</Text>
                <AccentText>アンケート対象企画</AccentText>
                <LotteryTicketProjectList />
                <Text center className="mt-10">明大祭大抽選会企画詳細ページは<TransitionLink href="/bigLottery">こちら</TransitionLink></Text>
            </div>
        </CloudPageContainer>
    )
}