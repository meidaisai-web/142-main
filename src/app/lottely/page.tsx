import { List,ListItem,ListText } from '@/components/texts/List'
import PageContainer from '@/components/base/PageContainer'
import SectionTitle from '@/components/texts/SectionTitle'
import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import AccentText from '@/components/texts/AccentText'
import { ClassNames } from '@emotion/react'
import { Transform } from 'stream'
export default function Page() {
    return (
        <div>
            <PageTitle>明大祭大抽選会とは</PageTitle>
            <PageContainer>
                <div className='mt-10 '>
                    <Text>明大祭実行委員会が実施している様々な企画に参加することで「明大祭大抽選会」の抽選券がもらえます！<br />皆さんが欲しかったあんなものやこんなものが当たるかも…？
第141回明大祭の思い出と一緒に、豪華景品をゲットして帰りましょう!</Text>
                </div>
                <div className='ml-2 ml-4 mt-10'>
                  <SectionTitle>実施場所</SectionTitle>
                </div>
                <List mark="・">
                    <div className='translate-x-4 mb-2 mt-14'>
                    <ListItem>メディア棟前明大祭大抽選会受付</ListItem>
                    <ListItem>※2つの抽選企画の会場が隣接しているためご注意ください。</ListItem>
                    </div>
                </List>
            
            <div className='mt-10 ml-5'>
                <SectionTitle>実施日時</SectionTitle>
            </div>
            <div className='mt-14 ml-5'>
                <List mark="・">
                    <ListItem>11月1日(土) 11：00～18：00</ListItem>
                    <div className='translate-x-13 mb-2'>
                        <ListText >2日(日) 11：00～18：00</ListText>
                    </div>
                    <div className='translate-x-13'>
                        <ListText>3日(月・祝) 11：00～17：20</ListText> 
                    </div>
                    <List mark="・" className="px-3 py-2 rounded">
  <ListItem>
    <AccentText className="inline [&>h1]:inline [&>h1]:pt-0 [&>h1]:align-baseline [&>h1]:leading-tight">
      ※景品がなくなり次第、受付終了とさせていただきます。
    </AccentText>
  </ListItem>
</List>
</List>
            </div>
            </PageContainer>
        </div>
    );
}