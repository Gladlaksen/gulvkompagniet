import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av produkter for behandling og vedlikehold av gulv, inkludert lakk, oljer og vedlikeholdsprodukter.",
}

// Define the subcategories
const subcategories = [
  {
    name: "Bona",
    path: "/produkter/gulvbehandling/bona",
    description: "Kvalitetsprodukter for profesjonell gulvbehandling fra Bona",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Osmo",
    path: "/produkter/gulvbehandling/osmo",
    description: "Naturlige oljer og vokser for vakre og holdbare tregulv",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Rubio Monocoat",
    path: "/produkter/gulvbehandling/rubio-monocoat",
    description: "Miljøvennlig trebehandling som beskytter og farger treet i ett strøk",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Classic",
    path: "/produkter/gulvbehandling/classic",
    description: "Tradisjonelle produkter for gulvbehandling",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Junckers",
    path: "/produkter/gulvbehandling/junckers",
    description: "Profesjonelle gulvbehandlingsprodukter fra Junckers",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Timberex",
    path: "/produkter/gulvbehandling/timberex",
    description: "Oljebaserte produkter for tregulv",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Woca",
    path: "/produkter/gulvbehandling/woca",
    description: "Danske kvalitetsprodukter for gulvbehandling",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Gulvpads",
    path: "/produkter/gulvbehandling/gulvpads",
    description: "Pads for rengjøring og vedlikehold av gulv",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Steingulvbehandling",
    path: "/produkter/gulvbehandling/steingulvbehandling",
    description: "Produkter for behandling og vedlikehold av steingulv",
    image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
  },
]

export default function GulvbehandlingPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Gulvbehandling</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet tilbyr et bredt utvalg av produkter for behandling og vedlikehold av gulv. Vi fører ledende
          merker som Bona, Osmo, Rubio Monocoat og flere, med produkter som lakk, oljer, hardvoksoljer og
          vedlikeholdsprodukter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

