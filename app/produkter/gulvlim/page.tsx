import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Gulvlim | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av kvalitetslim for parkett, tregulv og andre gulvtyper.",
}

// Define the subcategories
const subcategories = [
  {
    name: "Bona",
    path: "/produkter/gulvlim/bona",
    description: "Kvalitetslim fra Bona for profesjonell liming av tregulv",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Classic Elastic SIMP",
    path: "/produkter/gulvlim/classic-elastic-simp",
    description: "En-komponent, luftfuktighetstørrende, elastisk lim med 100% tørrstoffinnhold",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
]

export default function GulvlimPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Gulvlim</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Gulvkompagniet tilbyr et bredt utvalg av kvalitetslim for parkett, tregulv og andre gulvtyper. Vi fører
          ledende merker som Bona og vår egen Classic-serie, med produkter som er spesielt utviklet for profesjonell
          gulvlegging.
        </p>

        {/* Benefits of Gluing Floors */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Fordeler med liming av gulv</h2>
          <p className="mb-4">Liming av gulv fremfor skruing/spikring gir flere fordeler:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>100% utnyttelse av tretykkelse ved sliping (vs. spiker-/skruehoder)</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Permanent elastisk underlag (godt å gå på, demper skrittlyd)</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Tillater individuell oppsprekking (ingen større sprekker)</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Kan fungere som membran/fuktsperre</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Fungerer meget bra med gulvvarme</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Raskt (feste, membran, trinnlyddemping i ett)</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {subcategories.map((subcategory, index) => (
            <Link
              key={index}
              href={subcategory.path}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={subcategory.image || "/placeholder.svg"}
                  alt={subcategory.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{subcategory.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{subcategory.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                  <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

