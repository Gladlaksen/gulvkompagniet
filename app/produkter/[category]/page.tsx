import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

// Define the product categories and subcategories structure
const productData = {
  sliperekvisita: {
    title: "Sliperekvisita",
    description: "Kvalitetsprodukter for profesjonell sliping av gulv",
    subcategories: [
      {
        name: "Slipebånd",
        path: "/produkter/sliperekvisita/slipeband",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Rondeller",
        path: "/produkter/sliperekvisita/rondeller",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Slipenetting",
        path: "/produkter/sliperekvisita/slipenetting",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Håndsliping",
        path: "/produkter/sliperekvisita/handsliping",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Børsting",
        path: "/produkter/sliperekvisita/borsting",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Diamantsliping",
        path: "/produkter/sliperekvisita/diamantsliping",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  gulvbehandling: {
    title: "Gulvbehandling",
    description: "Produkter for behandling og vedlikehold av gulv",
    subcategories: [
      {
        name: "Bona",
        path: "/produkter/gulvbehandling/bona",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo",
        path: "/produkter/gulvbehandling/osmo",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Rubio Monocoat",
        path: "/produkter/gulvbehandling/rubio-monocoat",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Classic",
        path: "/produkter/gulvbehandling/classic",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Junckers",
        path: "/produkter/gulvbehandling/junckers",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Timberex",
        path: "/produkter/gulvbehandling/timberex",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Woca",
        path: "/produkter/gulvbehandling/woca",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Gulvpads",
        path: "/produkter/gulvbehandling/gulvpads",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Steingulvbehandling",
        path: "/produkter/gulvbehandling/steingulvbehandling",
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  slipemaskiner: {
    title: "Slipemaskiner",
    description: "Profesjonelle maskiner for gulvsliping",
    subcategories: [
      {
        name: "Bona",
        path: "/produkter/slipemaskiner/bona",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Festool",
        path: "/produkter/slipemaskiner/festool",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Flex",
        path: "/produkter/slipemaskiner/flex",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Künzle & Tasin",
        path: "/produkter/slipemaskiner/kunzle-tasin",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Mirka",
        path: "/produkter/slipemaskiner/mirka",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  verneutstyr: {
    title: "Verneutstyr",
    description: "Sikkerhetsutstyr for profesjonelle gulvleggere",
    subcategories: [
      {
        name: "Støvmasker",
        path: "/produkter/verneutstyr/stovmasker",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Gassmasker",
        path: "/produkter/verneutstyr/gassmasker",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Friskluftsmasker",
        path: "/produkter/verneutstyr/friskluftsmasker",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Hørselvern",
        path: "/produkter/verneutstyr/horselvern",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Vernebriller",
        path: "/produkter/verneutstyr/vernebriller",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Hansker",
        path: "/produkter/verneutstyr/hansker",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Kneputer",
        path: "/produkter/verneutstyr/kneputer",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Skotrekk",
        path: "/produkter/verneutstyr/skotrekk",
        image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  "verktoy-tilbehor": {
    title: "Verktøy / tilbehør",
    description: "Verktøy og tilbehør for gulvlegging og gulvbehandling",
    subcategories: [],
  },
  gulvlim: {
    title: "Gulvlim",
    description: "Lim for parkett, tregulv og andre gulvtyper",
    subcategories: [
      {
        name: "Bona",
        path: "/produkter/gulvlim/bona",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Classic Elastic SIMP",
        path: "/produkter/gulvlim/classic-elastic-simp",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  "proff-renhold": {
    title: "Proff renhold",
    description: "Profesjonelle rengjøringsprodukter for gulv",
    subcategories: [],
  },
  stovsugere: {
    title: "Støvsugere",
    description: "Industristøvsugere for effektiv støvhåndtering",
    subcategories: [
      {
        name: "Bona",
        path: "/produkter/stovsugere/bona",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Nilfisk",
        path: "/produkter/stovsugere/nilfisk",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  elektromateriell: {
    title: "Elektromateriell",
    description: "Elektrisk utstyr og tilbehør",
    subcategories: [],
  },
  "sparkling-fuging-repsett": {
    title: "Sparkling, fuging rep.sett",
    description: "Produkter for sparkling, fuging og reparasjon av gulv",
    subcategories: [],
  },
  "verksted-reservedeler": {
    title: "Verksted og reservedeler",
    description: "Reservedeler og verkstedtjenester for maskiner",
    subcategories: [],
  },
  "fleksible-gulv": {
    title: "Fleksible gulv",
    description: "Produkter for linoleum, vinyl, gummi og andre fleksible gulv",
    subcategories: [
      {
        name: "Dyprengjøring",
        path: "/produkter/fleksible-gulv/dyprengjoring",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Rehabilitering",
        path: "/produkter/fleksible-gulv/rehabilitering",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Idrettsgulv",
        path: "/produkter/fleksible-gulv/idrettsgulv",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Renhold",
        path: "/produkter/fleksible-gulv/renhold",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Produktoversikt",
        path: "/produkter/fleksible-gulv/produktoversikt",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Beskyttelse",
        path: "/produkter/fleksible-gulv/beskyttelse",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  "brukte-maskiner": {
    title: "Brukte maskiner",
    description: "Brukte og renoverte gulvslipemaskiner",
    subcategories: [],
  },
}

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category
  const categoryData = productData[category as keyof typeof productData]

  if (!categoryData) {
    return {
      title: "Kategori ikke funnet | Gulvkompagniet AS",
      description: "Denne produktkategorien finnes ikke.",
    }
  }

  return {
    title: `${categoryData.title} | Gulvkompagniet AS`,
    description: categoryData.description,
  }
}

export default function CategoryPage({ params }: Props) {
  const { category } = params
  const categoryData = productData[category as keyof typeof productData]

  if (!categoryData) {
    notFound()
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
        <Image
          src="/placeholder.svg?height=384&width=1280"
          alt={categoryData.title}
          fill
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 flex items-center h-full">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{categoryData.title}</h1>
            <p className="text-lg max-w-3xl">{categoryData.description}</p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        {categoryData.subcategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.subcategories.map((subcategory, index) => (
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
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                    <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Produkter kommer snart</h2>
            <p className="text-muted-foreground">
              Vi jobber med å legge til produkter i denne kategorien. Vennligst kontakt oss for mer informasjon.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

