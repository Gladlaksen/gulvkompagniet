import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Våre Merkevarer | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av ledende merkevarer for profesjonell gulvbehandling og gulvsliping.",
}

// Define the brands data
const brands = [
  {
    name: "Bona",
    description:
      "Ledende produsent av gulvbehandlingsprodukter, inkludert lakker, oljer, primere og vedlikeholdsprodukter. Med over 100 års erfaring tilbyr Bona innovative og miljøvennlige løsninger for profesjonelle gulvleggere.",
    path: "/merker/bona",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bona-Logo.jpg-rl3FsgXJNsC1kLFu4mZuXHQHNnQPLF.jpeg",
    categories: ["Gulvbehandling", "Slipemaskiner", "Støvsugere", "Gulvlim"],
  },
  {
    name: "Osmo",
    description:
      "Ledende produsent av naturlige oljer og vokser for tregulv og andre treoverflater. Med over 140 års erfaring tilbyr Osmo miljøvennlige produkter som fremhever treets naturlige skjønnhet.",
    path: "/merker/osmo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osmo-logo.jpg-1g8WAH44NEQi0SZaF3zxInMaDTJkZ1.jpeg",
    categories: ["Gulvbehandling", "Vedlikehold"],
  },
  {
    name: "3M",
    description:
      "Global innovatør innen slipeprodukter, verneutstyr og industrielle løsninger. 3M tilbyr høykvalitets slipepapir, pusseskiver og personlig verneutstyr for profesjonelle gulvleggere.",
    path: "/merker/3m",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3M_wordmark.svg-bvXrFViPVXfO33yhs5Zl9DLS7MkI07.png",
    categories: ["Sliperekvisita", "Verneutstyr"],
  },
  {
    name: "Classic",
    description:
      "Vår egen serie med kvalitetsprodukter for gulvbehandling, inkludert hardvoksoljer, gulvoljer og vedlikeholdsprodukter. Classic-serien tilbyr god kvalitet til konkurransedyktige priser.",
    path: "/merker/classic",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic-uretan-etikett20.jpg-SakGUiF6U7eSVOPOnrGLaVgnekBMrU.jpeg",
    categories: ["Gulvbehandling", "Gulvlim"],
  },
  {
    name: "Rubio Monocoat",
    description:
      "Belgisk produsent av miljøvennlige oljebaserte gulvbehandlingsprodukter. Rubio Monocoat er kjent for sin unike teknologi som gir en holdbar beskyttelse med kun ett strøk.",
    path: "/merker/rubio-monocoat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rubio-alt-wPTasx7QlL5pI7RdDpSDNQ2UVzMcos.svg",
    categories: ["Gulvbehandling"],
  },
  {
    name: "Junckers",
    description:
      "Dansk produsent av høykvalitets gulvprodukter, inkludert lakker, oljer og vedlikeholdsprodukter. Junckers har over 90 års erfaring med produksjon av tregulv og gulvbehandlingsprodukter.",
    path: "/merker/junckers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junckers-logo-ynfzzgXbORsM15bgybqwI4U84WEno9.svg",
    categories: ["Gulvbehandling"],
  },
  {
    name: "GK Professional",
    description:
      "Vår egen profesjonelle produktlinje utviklet spesielt for krevende gulvfagfolk. GK Professional-serien inkluderer slipebånd, rondeller og andre sliperekvisita med optimal kombinasjon av pris og standtid.",
    path: "/merker/gk-professional",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GK%20Professional%20line%20blue.jpg-gJ8YKiw3LAtqvvguPzM3jwjlwOdVZB.jpeg",
    categories: ["Sliperekvisita"],
  },
]

export default function BrandsPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Våre Merkevarer</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet er stolt forhandler av ledende merkevarer innen gulvbehandling, sliperekvisita og maskiner. Vi
          velger våre leverandører med omhu for å sikre at våre kunder får tilgang til de beste produktene på markedet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="border rounded-lg overflow-hidden bg-background">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-32 mr-4">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">{brand.name}</h2>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">{brand.description}</p>

                {brand.categories && brand.categories.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Produktkategorier:</h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link href={brand.path} className="text-primary hover:underline flex items-center mt-2">
                  Se alle {brand.name} produkter
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

