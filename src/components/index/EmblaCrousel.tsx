'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import IndexTitle from '../texts/IndexTitle'
const TWEEN_FACTOR_BASE = 0.52
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const slides = [
  {
    name: '実行委員企画',
    src: '/images/ensyutsu/opening.png',
    href: '/official-project'
  },
  {
    name: '明大祭テーマ',
    src: '/images/theme-logo.jpg',
    href: '/theme'
  },
  {
    name: 'クラウドファンディング',
    src: '/images/topic/crowdfunding.png',
    href: '/crowdfunding'
  },
  {
    name: 'Meidaisai Championship',
    src: '/images/topic/meichan.png',
    href: '/champ'
  },
  {
    name: '明大祭公式グッズ',
    src: '/images/goods/acrylic.jpg',
    href: '/goods',
  },
  {
    name: '明大祭イルミネーション',
    src: '/images/topic/illumination.png',
    href: '/illumination',
  },
  {
    name: 'Luminous Stage',
    src: '/images/ensyutsu/luminous-logo.jpg',
    href: '/luminous',
  },
  {
    name: 'Uni Rock Fes',
    src: '/images/ensyutsu/fes-logo.jpg',
    href: '/fes',
  },
  {
    name: '中夜祭',
    src: '/images/ensyutsu/midnight-logo.png',
    href: '/midnight',
  }
]

function EmblaCarousel() {
  const options: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  }
  const autoplayRef = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false
    })
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayRef.current])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])
  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])
  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'
      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]
        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }
          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const minScale = 0.75
          const maxScale = 1.0
          const scale = minScale + (tweenValue * (maxScale - minScale))
          const clampedScale = numberWithinRange(scale, minScale, maxScale)
          const tweenNode = tweenNodes.current[slideIndex]
          if (tweenNode) {
            tweenNode.style.transform = `scale(${clampedScale})`
          }
        })
      })
    },
    []
  )
  useEffect(() => {
    if (!emblaApi) return
    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)
    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
    return () => {
      emblaApi
        .off('reInit', setTweenNodes)
        .off('reInit', setTweenFactor)
        .off('reInit', tweenScale)
        .off('scroll', tweenScale)
        .off('slideFocus', tweenScale)
    }
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale])
  return (
    <div className="w-full max-w-full mx-auto">
      <IndexTitle>特集</IndexTitle>
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 cursor-grab active:cursor-grabbing">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_50%] min-w-0 pl-4 lg:flex-[0_0_25%] md:flex-[0_0_33.33%] sm:flex-[0_0_50%]"
            >
              <div className="embla__slide__number aspect-[3/4] rounded-2xl text-6xl font-semibold flex items-center justify-center select-none text-white transition-transform duration-200 ease-out">
                <Item key={index} name={slide.name} src={slide.src} href={slide.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel

interface ItemProps {
  name: string
  src: string
  href: string
}

function Item({ name, src, href }: ItemProps) {
  return (
    <Link href={href}>
      <div className='relative mb-20'>
        <div className='absolute -z-10 top-3 left-3 sm:top-4 sm:left-4 w-[47vw] md:w-[30vw] lg:w-[23vw] rounded-4xl sm:rounded-[3.0rem] overflow-hidden border-4 border-black'>
          <div className='bg-secondary-700 w-full aspect-square'>
            
          </div>
          <div className="bg-secondary-700 py-6 md:py-4">
          <h1 className="font-bold text-sm md:text-md lg:text-xl text-center text-secondary-700">{name}</h1>
          </div>
        </div>
        <div className='active:translate-1 w-[47vw] md:w-[30vw] lg:w-[23vw] rounded-[1.6rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-black'>
          <div className='bg-white w-full aspect-square'>
            <img src={src} alt={name} className="w-full h-full object-cover"/>
          </div>
          <div className="bg-secondary py-6 md:py-4">
            <h1 className="font-bold text-sm md:text-md lg:text-xl text-center">{name}</h1>
          </div>
        </div>
      </div>

    </Link>
  )
}