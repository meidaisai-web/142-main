import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  href: string
}

export default function CarouselCard({ title, src, href }: Props) {
  return (
    <Link href={href} className="block">
      {/* 外枠 */}
      <div className="rounded-3xl border-4 border-white p-2 md:p-4">
        {/* 中のカード（画像とタイトルを縦に並べる） */}
        <div className="flex flex-col gap-2">
          {/* 画像の箱 */}
          <div className="relative aspect-square bg-white rounded-t-2xl overflow-hidden">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
          {/* タイトルの箱 */}
          <div className="bg-white rounded-b-2xl py-4">
            <p className="text-center text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
