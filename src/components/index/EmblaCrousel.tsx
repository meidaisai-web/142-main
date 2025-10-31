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
const TWEEN_FACTOR_BASE = 0.52
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const slides = [
  {
    name: '企画名',
    src: '/images',
    href: '/'
  },
  {
    name: '企画名',
    src: '/images',
    href: '/'
  },
  {
    name: '企画名',
    src: '/images',
    href: '/'
  },
  {
    name: '企画名',
    src: '/images',
    href: '/'
  },
  {
    name: '企画名',
    src: '/images',
    href: '/'
  },
  {
    name: '企画名',
    src: '/images',
    href: '/'
  }
]

type PropType = {
  options?: EmblaOptionsType
}
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
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
      <div className="overflow-hidden" ref={emblaRef}>
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
      <div className=''>
        <div className="bg-secondary size-50 rounded-2xl overflow-hidden border-4 border-black">
        <div className='bg-white size-35 '>
        <h1 className="font-bold text-xs h-10">京王スタンプラリー</h1>
        </div>
        </div>
      </div>

    </Link>
  )
}