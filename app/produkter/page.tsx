import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Produkter | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av profesjonelle gulvprodukter og utstyr for fagfolk.",
}

// Define the product categories structure
const productCategories = [
  {
    category: "Sliperekvisita",
    path: "/produkter/sliperekvisita",
    description: "Slipebånd, rondeller, slipenetting og annet slipeutstyr",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sliperekvisita-kvOpa6f6e3aBELPUDuz8aECECbF2k8.png",
  },
  {
    category: "Gulvbehandling",
    path: "/produkter/gulvbehandling",
    description: "Lakk, olje, hardvoksolje og vedlikeholdsprodukter",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gulvbehandling-TEMP-5xytErJeVFe0o4ZHz6hbFQLsNGDb6H.png",
  },
  {
    category: "Slipemaskiner",
    path: "/produkter/slipemaskiner",
    description: "Båndslipere, kantslipere, valseslipemaskiner og poleringsmaskiner",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maskiner-gqXEpkC8kMgeiSqjClLnNhRnbc5dPs.png",
  },
  {
    category: "Verneutstyr",
    path: "/produkter/verneutstyr",
    description: "Støvmasker, gassmasker, hørselvern og annet verneutstyr",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/verneutstyr-C05Jr3GizVVIGFooGc2oWAg8oyYU1G.png",
  },
  {
    category: "Verktøy / tilbehør",
    path: "/produkter/verktoy-tilbehor",
    description: "Verktøy og tilbehør for gulvlegging og gulvbehandling",
    image: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Gulvlim",
    path: "/produkter/gulvlim",
    description: "Lim for parkett, tregulv og andre gulvtyper",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Proff renhold",
    path: "/produkter/proff-renhold",
    description: "Profesjonelle rengjøringsprodukter for gulv",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Støvsugere",
    path: "/produkter/stovsugere",
    description: "Industristøvsugere for effektiv støvhåndtering",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Elektromateriell",
    path: "/produkter/elektromateriell",
    description: "Elektrisk utstyr og tilbehør",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Sparkling, fuging rep.sett",
    path: "/produkter/sparkling-fuging-repsett",
    description: "Produkter for sparkling, fuging og reparasjon av gulv",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Verksted og reservedeler",
    path: "/produkter/verksted-reservedeler",
    description: "Reservedeler og verkstedtjenester for maskiner",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Fleksible gulv",
    path: "/produkter/fleksible-gulv",
    description: "Produkter for linoleum, vinyl, gummi og andre fleksible gulv",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
  },
  {
    category: "Brukte maskiner",
    path: "/produkter/brukte-maskiner",
    description: "Brukte og renoverte gulvslipemaskiner",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Våre Produkter</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet AS er Norges ledende leverandør av utstyr og rekvisita til profesjonell sliping, legging og
          behandling av tregulv og parkett.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              href={category.path}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.category}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{category.category}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
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

