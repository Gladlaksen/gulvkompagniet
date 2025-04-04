"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Define types for our menu structure
interface MenuChild {
  name: string
  path: string
}

interface MenuSubcategory {
  name: string
  path: string
  children?: MenuChild[]
}

interface MenuCategory {
  category: string
  path: string
  subcategories: MenuSubcategory[]
}

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [sortedCategories, setSortedCategories] = useState<MenuCategory[]>([])

  // Define main product categories
  const mainCategories: MenuCategory[] = [
    {
      category: "Sliperekvisita",
      path: "/produkter/sliperekvisita",
      subcategories: [
        { name: "Slipebånd", path: "/produkter/sliperekvisita/slipeband" },
        { name: "Rondeller", path: "/produkter/sliperekvisita/rondeller" },
        { name: "Slipenetting", path: "/produkter/sliperekvisita/slipenetting" },
        { name: "Håndsliping", path: "/produkter/sliperekvisita/handsliping" },
        { name: "Børsting", path: "/produkter/sliperekvisita/borsting" },
        { name: "Diamantsliping", path: "/produkter/sliperekvisita/diamantsliping" },
      ],
    },
    {
      category: "Gulvbehandling",
      path: "/produkter/gulvbehandling",
      subcategories: [
        { name: "Bona", path: "/produkter/gulvbehandling/bona" },
        { name: "Osmo", path: "/produkter/gulvbehandling/osmo" },
        { name: "Rubio Monocoat", path: "/produkter/gulvbehandling/rubio-monocoat" },
        { name: "Classic", path: "/produkter/gulvbehandling/classic" },
        { name: "Junckers", path: "/produkter/gulvbehandling/junckers" },
        { name: "Timberex", path: "/produkter/gulvbehandling/timberex" },
        { name: "Woca", path: "/produkter/gulvbehandling/woca" },
        { name: "Gulvpads", path: "/produkter/gulvbehandling/gulvpads" },
        { name: "Steingulvbehandling", path: "/produkter/gulvbehandling/steingulvbehandling" },
      ],
    },
    {
      category: "Slipemaskiner",
      path: "/produkter/slipemaskiner",
      subcategories: [
        { name: "Bona", path: "/produkter/slipemaskiner/bona" },
        { name: "Festool", path: "/produkter/slipemaskiner/festool" },
        { name: "Flex", path: "/produkter/slipemaskiner/flex" },
        { name: "Künzle & Tasin", path: "/produkter/slipemaskiner/kunzle-tasin" },
        { name: "Mirka", path: "/produkter/slipemaskiner/mirka" },
      ],
    },
    {
      category: "Verneutstyr",
      path: "/produkter/verneutstyr",
      subcategories: [
        { name: "Støvmasker", path: "/produkter/verneutstyr/stovmasker" },
        { name: "Gassmasker", path: "/produkter/verneutstyr/gassmasker" },
        { name: "Friskluftsmasker", path: "/produkter/verneutstyr/friskluftsmasker" },
        { name: "Hørselvern", path: "/produkter/verneutstyr/horselvern" },
        { name: "Vernebriller", path: "/produkter/verneutstyr/vernebriller" },
        { name: "Hansker", path: "/produkter/verneutstyr/hansker" },
        { name: "Kneputer", path: "/produkter/verneutstyr/kneputer" },
        { name: "Skotrekk", path: "/produkter/verneutstyr/skotrekk" },
      ],
    },
    {
      category: "Verktøy / tilbehør",
      path: "/produkter/verktoy-tilbehor",
      subcategories: [],
    },
    {
      category: "Gulvlim",
      path: "/produkter/gulvlim",
      subcategories: [
        { name: "Bona", path: "/produkter/gulvlim/bona" },
        { name: "Classic Elastic SIMP", path: "/produkter/gulvlim/classic-elastic-simp" },
      ],
    },
    {
      category: "Proff renhold",
      path: "/produkter/proff-renhold",
      subcategories: [],
    },
    {
      category: "Støvsugere",
      path: "/produkter/stovsugere",
      subcategories: [
        { name: "Bona", path: "/produkter/stovsugere/bona" },
        { name: "Nilfisk", path: "/produkter/stovsugere/nilfisk" },
      ],
    },
    {
      category: "Elektromateriell",
      path: "/produkter/elektromateriell",
      subcategories: [],
    },
    {
      category: "Sparkling, fuging rep.sett",
      path: "/produkter/sparkling-fuging-repsett",
      subcategories: [],
    },
    {
      category: "Verksted og reservedeler",
      path: "/produkter/verksted-reservedeler",
      subcategories: [],
    },
    {
      category: "Fleksible gulv",
      path: "/produkter/fleksible-gulv",
      subcategories: [
        { name: "Dyprengjøring", path: "/produkter/fleksible-gulv/dyprengjoring" },
        { name: "Rehabilitering", path: "/produkter/fleksible-gulv/rehabilitering" },
        { name: "Idrettsgulv", path: "/produkter/fleksible-gulv/idrettsgulv" },
        { name: "Renhold", path: "/produkter/fleksible-gulv/renhold" },
        { name: "Produktoversikt", path: "/produkter/fleksible-gulv/produktoversikt" },
        { name: "Beskyttelse", path: "/produkter/fleksible-gulv/beskyttelse" },
      ],
    },
    {
      category: "Brukte maskiner",
      path: "/produkter/brukte-maskiner",
      subcategories: [],
    },
  ]

  // Sort categories - those with subcategories first
  useEffect(() => {
    const sorted = [...mainCategories].sort((a, b) => {
      if (a.subcategories.length > 0 && b.subcategories.length === 0) return -1
      if (a.subcategories.length === 0 && b.subcategories.length > 0) return 1
      return 0
    })
    setSortedCategories(sorted)
  }, [])

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
    setActiveCategory(null)
  }

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
  }

  // Find the active category object
  const activeCategoryObj = activeCategory ? sortedCategories.find((cat) => cat.category === activeCategory) : null

  // Check if the active category has subcategories
  const hasSubcategories = activeCategoryObj?.subcategories.length ? true : false

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href="/produkter"
        className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
      >
        Produkter
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Link>

      {isOpen && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-1 rounded-md border bg-popover shadow-lg",
            hasSubcategories ? "w-[800px] max-w-[95vw]" : "w-[300px]",
          )}
        >
          <div className="flex">
            {/* Categories list */}
            <div className={cn("p-4", hasSubcategories ? "w-1/3 border-r" : "w-full")}>
              <h3 className="font-bold text-sm mb-3 text-muted-foreground">Produktkategorier</h3>
              <div className="max-h-[400px] overflow-y-auto">
                <ul className="space-y-1">
                  {sortedCategories.map((category) => (
                    <li key={category.category}>
                      <Link
                        href={category.path}
                        className={cn(
                          "block px-3 py-2 text-sm rounded-md transition-colors",
                          activeCategory === category.category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted",
                          category.subcategories.length === 0 && "flex items-center justify-between",
                        )}
                        onMouseEnter={() => handleCategoryHover(category.category)}
                        onClick={() => setIsOpen(false)}
                      >
                        {category.category}
                        {category.subcategories.length === 0 && (
                          <span className="text-xs text-muted-foreground">→</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subcategories panel - only shown when there are subcategories */}
            {hasSubcategories && (
              <div className="w-2/3 p-4">
                <h3 className="font-bold text-lg mb-4 text-primary border-b pb-2">{activeCategory}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {activeCategoryObj?.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.name}
                      href={subcategory.path}
                      className="text-sm hover:text-primary hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

