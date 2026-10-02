import CloudPageContainer from "@/components/base/CloudPageContainer";
import { ScheduleTable } from "@/components/ScheduleTable";
import ContactView from "@/components/texts/ContactView";
import Emphasis from "@/components/texts/Emphasis";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

const schedule = [
    {
        date: '10月30日(金)',
        hours: [
            { hour: '11時', minutes: [{minute: '-'}, {minute: '-'}, {minute: '30'}, {minute: '45'}] },
            { hour: '12時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '13時', minutes: [{minute: '00', emphasized: true}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '14時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '-'}] },
            { hour: '15時', minutes: [{minute: '00', emphasized: true}, {minute: '-'}, {minute: '30'}, {minute: '-'}] },
            { hour: '16時', minutes: [{minute: '-'}, {minute: '-'}, {minute: '-'}, {minute: '-'}] }
        ]
    },
    {
        date: '10月31日(土)',
        hours: [
            { hour: '11時', minutes: [{minute: '-'}, {minute: '15'}, {minute: '30', emphasized: true}, {minute: '45'}] },
            { hour: '12時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '13時', minutes: [{minute: '00', emphasized: true}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '14時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '15時', minutes: [{minute: '00', emphasized: true}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '16時', minutes: [{minute: '00'}, {minute: '-'}, {minute: '-'}, {minute: '-'}] }
        ]
    },
    {
        date: '11月1日(日)',
        hours: [
            { hour: '11時', minutes: [{minute: '-'}, {minute: '15'}, {minute: '30', emphasized: true}, {minute: '45'}] },
            { hour: '12時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '13時', minutes: [{minute: '00', emphasized: true}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '14時', minutes: [{minute: '00'}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '15時', minutes: [{minute: '00', emphasized: true}, {minute: '15'}, {minute: '30'}, {minute: '45'}] },
            { hour: '16時', minutes: [{minute: '00'}, {minute: '-'}, {minute: '-'}, {minute: '-'}] }
        ]
    }

]

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>明治大解剖ツアー</PageTitle>
            <SectionTitle>企画概要</SectionTitle>
            <Text>今年もやります！大人気企画の<Emphasis>和泉キャンパスツアー！</Emphasis></Text>
            <Text>このツアーでは明大生がツアーガイドを務めます！</Text>
            <Text>
                和泉キャンパスや明大生の秘密を知れるチャンスかも?!<br/>
                このツアーでしか知ることのできない情報をたくさんご紹介します！
            </Text>
            <Text>なんとツアー参加者には<Emphasis>オリジナル特典</Emphasis>もご用意！</Text>
            <Text>ツアーに参加してあなたの知らない”明治”を見つけに行こう！</Text>
            <SectionTitle>企画実施日時・場所</SectionTitle>
            <SmallTitle>日時</SmallTitle>
            <Text>10月30日(金).31日(土).11月1日(日) 11:00〜16:00</Text>
            <SmallTitle>参加方法</SmallTitle>
            <Text>明治大解剖ツアーは<Emphasis>完全予約制</Emphasis>です。</Text>
            <Text><Emphasis>和泉図書館前開発局企画受付</Emphasis>にて予約を承っております。全日程<Emphasis>11:00</Emphasis>に受付を開始いたします。</Text>
            <Text>予約を済ませたツアー参加者のみなさまは、出発時間までに和泉図書館前に集合してください。</Text>
            <SmallTitle>時刻表</SmallTitle>
            <ScheduleTable schedule={schedule} />
            <SectionTitle>注意事項</SectionTitle>
            <List mark="・">
                <ListItem>予約は<Emphasis>先着順</Emphasis>となっております。</ListItem>
                <ListItem>時刻表の紫色になっている<Emphasis>11:30（10月30日を除く）、13:00、15:00</Emphasis>の便は明治大学連合父母会の方を優先とさせていただきます。</ListItem>
                <ListItem>1便あたり15名を定員としてご案内させていただきます。参加者が少ない場合は該当の便を欠航し、次便にご参加いただくようご案内することがございます。あらかじめご了承ください。</ListItem>
            </List>
            <ContactView department="開発局" mail="142nd-kaihatsu@meidaisai.jp" showPhone showAddress />
        </CloudPageContainer>
    )
}