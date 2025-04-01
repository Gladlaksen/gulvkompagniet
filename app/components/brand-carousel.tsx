"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Brand {
  name: string
  logo: string
}

export function BrandCarousel({ brands }: { brands: Brand[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleBrands, setVisibleBrands] = useState(4)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Determine how many brands to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBrands(1)
      } else if (window.innerWidth < 768) {
        setVisibleBrands(2)
      } else if (window.innerWidth < 1024) {
        setVisibleBrands(3)
      } else {
        setVisibleBrands(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.max(0, brands.length - visibleBrands + 1)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (brands.length > visibleBrands) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, visibleBrands, brands.length])

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Våre Merkevarer</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={brands.length <= visibleBrands}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={brands.length <= visibleBrands}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleBrands)}%)` }}
      >
        {brands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / visibleBrands}%` }}>
            <div className="flex flex-col items-center justify-center p-6 h-40 bg-white rounded-lg border hover:shadow-md transition-shadow">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={160}
                height={80}
                className="h-20 w-auto grayscale transition-all hover:grayscale-0"
              />
              <p className="mt-4 text-sm font-medium text-center">{brand.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

