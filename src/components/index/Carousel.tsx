'use client'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import ShadowText from '@/components/texts/ShadowText';
import CarouselCard from '@/components/index/CarouselCard';

const slides = [
  { title: '明大祭とは', src: '/images/carousel/logo.svg', href: '/about' },
  { title: '第142回明大祭テーマ', src: '/images/carousel/catch.svg', href: '/theme' },
  { title: '実行委員会企画まとめ', src: '/images/carousel/boad.svg', href: '/official-projects' },
  { title: '明大祭・募金企画', src: '/images/donation/donation.png', href: '/donation' },
  { title: 'Opening', src: '/images/carousel/opening-logo.png', href: '/opening' },
  { title: '受験生コレクション\n～わくわく明大生活～', src: '/images/carousel/wakuwaku-logo.png', href: '/wakuwaku' },
  { title: '明大祭公式グッズ', src: '/images/carousel/goods-logo.png', href: '/goods' },
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true, align: 'center', skipSnaps: true },
  [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
  if (!emblaApi) return;
  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };
  const onSettle = () => {
    emblaApi.plugins().autoplay?.play();
  };

  onSelect();
  emblaApi.on('select', onSelect);
  emblaApi.on('settle', onSettle);

  return () => {
    emblaApi.off('select', onSelect);
    emblaApi.off('settle', onSettle);
  };
}, [emblaApi]);


  return (
    <div>
      <ShadowText>特集</ShadowText>
      <div className="overflow-hidden py-30" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.title} className="w-60 md:w-100 shrink-0 px-8 md:px-12">
              <div className={`transition-transform duration-300 ${index === selectedIndex ? 'scale-125' : 'scale-100'}`}>
                <CarouselCard title={slide.title} src={slide.src} href={slide.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
