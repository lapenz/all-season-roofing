"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

type HeroProps = {
  src?: string
  sources?: string[]
  alt: string
  overlayClassName?: string
  children: React.ReactNode
}

export default function Hero({ src, sources, alt, overlayClassName, children }: HeroProps) {
  const candidateSources = (sources && sources.length > 0)
    ? sources
    : (src ? [src] : [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [resolvedSrc, setResolvedSrc] = useState<string>(candidateSources[0] ?? 'https://placehold.co/1920x1080?text=Roofing+Photo')

  useEffect(() => {
    let isMounted = true
    let index = 0

    const tryNext = () => {
      if (!isMounted) return
      const nextSrc = candidateSources[index]
      if (!nextSrc) {
        setResolvedSrc('https://placehold.co/1920x1080?text=Roofing+Photo')
        return
      }
      const test = new window.Image()
      test.onload = () => {
        if (!isMounted) return
        setResolvedSrc(nextSrc)
        setCurrentIndex(index)
      }
      test.onerror = () => {
        index += 1
        tryNext()
      }
      test.src = nextSrc
    }

    tryNext()
    return () => {
      isMounted = false
    }
  }, [sources, src])

  return (
    <section className="relative text-white overflow-hidden py-20">
      <Image src={resolvedSrc} alt={alt} fill className="object-cover" priority unoptimized />
      <div className={"absolute inset-0 " + (overlayClassName ?? 'bg-blue-900/70 mix-blend-multiply')} />
      <div className="relative">
        {children}
      </div>
    </section>
  )
}


