'use client'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import ShadowText from '@/components/texts/ShadowText';
import CarouselCard from '@/components/index/CarouselCard';

const slides = [
  { title: 'カード1', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード2', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード3', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード4', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード5', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード6', src: '/images/〇〇.png', href: '/xxx' },
  { title: 'カード7', src: '/images/〇〇.png', href: '/xxx' },
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      <ShadowText>特集</ShadowText>
      <div className="overflow-hidden py-16" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.title} className="w-1/2 md:w-1/4 shrink-0 px-8 md:px-12">
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
