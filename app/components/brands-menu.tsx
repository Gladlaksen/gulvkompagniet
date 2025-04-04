"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the brands data
const brands = [
  {
    name: "Bona",
    description: "Ledende produsent av gulvbehandlingsprodukter",
    path: "/merker/bona",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bona-Logo.jpg-rl3FsgXJNsC1kLFu4mZuXHQHNnQPLF.jpeg",
  },
  {
    name: "Osmo",
    description: "Naturlige oljer og vokser for tregulv",
    path: "/merker/osmo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osmo-logo.jpg-1g8WAH44NEQi0SZaF3zxInMaDTJkZ1.jpeg",
  },
  {
    name: "3M",
    description: "Innovativ produsent av slipeprodukter og verneutstyr",
    path: "/merker/3m",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3M_wordmark.svg-bvXrFViPVXfO33yhs5Zl9DLS7MkI07.png",
  },
  {
    name: "Classic",
    description: "Kvalitetsprodukter for gulvbehandling",
    path: "/merker/classic",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic-uretan-etikett20.jpg-SakGUiF6U7eSVOPOnrGLaVgnekBMrU.jpeg",
  },
  {
    name: "Rubio Monocoat",
    description: "Miljøvennlige oljebaserte gulvbehandlingsprodukter",
    path: "/merker/rubio-monocoat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rubio-alt-wPTasx7QlL5pI7RdDpSDNQ2UVzMcos.svg",
  },
  {
    name: "Junckers",
    description: "Dansk produsent av gulvprodukter",
    path: "/merker/junckers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junckers-logo-ynfzzgXbORsM15bgybqwI4U84WEno9.svg",
  },
  {
    name: "GK Professional",
    description: "Vår egen profesjonelle produktlinje",
    path: "/merker/gk-professional",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GK%20Professional%20line%20blue.jpg-gJ8YKiw3LAtqvvguPzM3jwjlwOdVZB.jpeg",
  },
]

export function BrandsMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href="/merker"
        className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
      >
        Merker
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Link>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-[800px] max-w-[95vw] rounded-md border bg-popover shadow-lg">
          <div className="p-4">
            <h3 className="font-bold text-sm mb-3 text-muted-foreground">Våre Merkevarer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {brands.map((brand) => (
                <Link
                  key={brand.name}
                  href={brand.path}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative h-10 w-16 flex-shrink-0">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{brand.name}</h4>
                    <p className="text-xs text-muted-foreground">{brand.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t">
              <Link
                href="/merker"
                className="text-sm text-primary hover:underline flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Se alle merkevarer
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

