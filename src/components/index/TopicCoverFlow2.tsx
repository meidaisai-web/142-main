'use client'

import React, { useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useState, useEffect } from 'react'
import IndexTitle from '../texts/IndexTitle'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<PropType> = ({ slides, options: userOptions }) => {
  const options: EmblaOptionsType = {
    loop: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    align: 'center',
    ...userOptions,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const tweenfactor = useRef(0.52)
  const tweenNodes = useRef<HTMLElement[]>([])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  const tweenscale = useCallback(( emblaApi: EmblaCarouselType) => {
    const scrollProgress = emblaApi.scrollProgress()
    const slideInView = emblaApi.slidesInView()

    emblaApi.scrollSnapList().forEach((snap, snapIndex) => {
      let diffToTarget = snap - scrollProgress
      const slideInSnap = emblaApi.internalEngine().slideRegistry[snapIndex]

      slideInSnap.forEach((slideIndex) => {
        if (!slideInView.includes(slideIndex)) return
        const tweenValue = 1 - Math.abs(diffToTarget * tweenfactor.current)
        // const maxscale = 1
        // const minscale = 0.75
        // const scale = Math.max(Math.min(tweenValue * maxscale, maxscale) , minscale)
        const tweenNode = tweenNodes.current[slideIndex]
        // tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    tweenNodes.current = emblaApi.slideNodes().map(
      (slide) => slide.querySelector('.embla__slide__inner') as HTMLElement
    )

    emblaApi.on('scroll', tweenscale).on('reInit', tweenscale)
  }, [emblaApi, tweenscale])


  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div>
      <IndexTitle>特集</IndexTitle>
      <div className="h-6" />
    <section className="w-full mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[-2rem] touch-pan-y ">
            {slides.map((index) => (
              <div
                key={index}
                className="flex-[0_0_25%] min-w-0 pl-8 transition-z-0"
              >
                <div className="flex items-center justify-center h-72 rounded-2xl shadow-inner bg-white/10 text-white select-none">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      {/*<div className="grid grid-cols-[auto_1fr] justify-between gap-4 mt-6">
        <div className="flex justify-end flex-wrap mr-[-0.6rem]">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition
              ${
                index === selectedIndex
                  ? 'border-white'
                  : 'border-white/40 hover:border-white/70'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>*/}
    </section>
    </div>
  )
}

export default EmblaCarousel