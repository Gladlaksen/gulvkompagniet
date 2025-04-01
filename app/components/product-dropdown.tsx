"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface ProductCategory {
  title: string
  description: string
  href: string
}

export function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const categories: ProductCategory[] = [
    {
      title: "Gulvbehandling",
      description: "Lakk, olje og vedlikeholdsprodukter",
      href: "/produkter#gulvbehandling",
    },
    {
      title: "Sliperekvisita",
      description: "Slipepapir, pusseskiver og tilbehør",
      href: "/produkter#sliperekvisita",
    },
    {
      title: "Maskiner",
      description: "Slipemaskiner, poleringsmaskiner og støvsugere",
      href: "/produkter#maskiner",
    },
    {
      title: "Verneutstyr",
      description: "Masker, hansker og beskyttelsesklær",
      href: "/produkter#verneutstyr",
    },
    {
      title: "Tilbehør",
      description: "Verktøy, lim og monteringsmateriell",
      href: "/produkter#tilbehør",
    },
    {
      title: "Sparkling",
      description: "Fugemasse, sparkelmasse og reparasjonssett",
      href: "/produkter#sparkling",
    },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link
        href="/produkter"
        className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
      >
        Produkter
        <ChevronDown className="h-4 w-4" />
      </Link>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-auto min-w-[600px] rounded-md border bg-background p-4 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="flex flex-col space-y-1 rounded-md p-2 hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{category.title}</span>
                <span className="text-xs text-muted-foreground">{category.description}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

