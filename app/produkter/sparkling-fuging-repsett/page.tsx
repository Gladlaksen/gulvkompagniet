import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText, Check } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sparkling, fuging, reparasjonssett | Gulvkompagniet AS",
  description:
    "Produkter for sparkling, fuging og reparasjon av tregulv - fugemasser, sparkelmasser og reparasjonssett.",
}

// Define the product data
const products = [
  {
    name: "Bona Mix&Fill Plus",
    brand: "Bona",
    description:
      "Vanntynnbar fugemasse basert på polyakrylatdispersjon. Blandes med slipestøv for å lage en fugemasse tilpasset tregulvets farge.",
    features: [
      "Fyller fuger opp til 3mm bredde",
      "Meget lavt VOC innhold",
      "Hurtigtørkende",
      "Lett å slipe",
      "Kan brukes med alle Bona lakk- og oljesystemer",
      "Antikorrosiv (ingen rustflekker)",
      "Passer både til lyse og mørke treslag",
    ],
    application: ["Fylling av fuger og sprekker i tregulv"],
    instructions: ["Anbefalt blandingsforhold: 1 del Mix&Fill Plus : 4 deler slipestøv"],
    notes: ["Erstatter den tidligere Bona Mix&Fill."],
    related_docs: [
      {
        type: "Teknisk datablad",
        link: "https://gulvkompagniet.com/Datablader%20Bona/datablad%20Bona%20Mix&Fill%20Plus%20Norsk.pdf",
      },
      {
        type: "Sikkerhetsdatablad",
        link: "https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Mix&Fill%20Plus%20-%20Norway%20%28Norwegian%20%28Bokm%C3%A5l%29%20%28NO%29%29.pdf",
      },
    ],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Bona Gap Master",
    brand: "Bona",
    description: "Silikonfri akrylbasert fugemasse for tetting av fuger og sprekker.",
    features: [
      "Kan overlakkeres og oljes",
      "Permanent fleksibel (+/- 15 % bevegelse)",
      "Løsemiddelfri",
      "Luktfri",
      "Høy initial og endelig festeevne",
    ],
    application: ["Tetting av fuger mot fotlister, terskler etc."],
    colors: ["Leveres i 15 ulike farger"],
    related_docs: [
      {
        type: "Teknisk datablad",
        link: "https://gulvkompagniet.com/Datablader%20Bona/Datablad%20Bona%20Gapmaster%20norsk.pdf",
      },
      {
        type: "Sikkerhetsdatablad",
        link: "https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Gap%20Master%20-%20Norway%20%20%28Norwegian%20%28Bokm%C3%A5l%29%20%28NO%29%29.pdf",
      },
    ],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Classic Fugemasse",
    brand: "Classic",
    description: "Tynnerbasert sparkelmasse for iblanding av slipestøv.",
    features: ["Lett brunlig egenfarge"],
    application: ["Fylling av fuger og sprekker"],
    instructions: ["Bør kun brukes på gulv som skal lakkeres med tynnerbasert lakk."],
    notes: ["Kan virke noe mørkere enn vannbaserte alternativer."],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Mastic 2000 Reparasjonsmasse",
    brand: "Mastic",
    description: "To-komponent polyesterbasert reparasjonsmasse for utbedring av større skader i treverk.",
    features: [
      "To-komponent polyestermasse",
      "Hurtig herdende (15-20 min)",
      "Stor fyllevne",
      "Krymper ikke",
      "Kan slipes og overlakkeres/oljes",
    ],
    application: ["Utbedring av større skader/hull i treverk"],
    colors: ["Eik", "Furu"],
    related_docs: [
      { type: "Sikkerhetsdatablad", link: "https://gulvkompagniet.com/Sikkerhetsdatablad%20Mastic%202000%202018.pdf" },
    ],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
]

// Group products by brand
const productsByBrand = products.reduce(
  (acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = []
    }
    acc[product.brand].push(product)
    return acc
  },
  {} as Record<string, typeof products>,
)

export default function SparklingFugingRepPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Sparkling, fuging, reparasjonssett</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet tilbyr et bredt utvalg av produkter for sparkling, fuging og reparasjon av tregulv. Vi fører
          ledende merker som Bona, Classic og Mastic, med produkter som er spesielt utviklet for profesjonell
          gulvbehandling.
        </p>

        {/* Product Categories Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Produktkategorier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Fugemasser</h3>
              <p className="text-muted-foreground mb-4">
                Produkter for fylling av fuger og sprekker i tregulv. Blandes ofte med slipestøv for å matche gulvets
                farge.
              </p>
              <div className="flex items-center text-primary">
                <span className="text-sm">Bona Mix&Fill Plus, Classic Fugemasse</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Tetningsmasser</h3>
              <p className="text-muted-foreground mb-4">
                Elastiske masser for tetting av fuger mot fotlister, terskler og andre faste installasjoner.
              </p>
              <div className="flex items-center text-primary">
                <span className="text-sm">Bona Gap Master</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Reparasjonsmasser</h3>
              <p className="text-muted-foreground mb-4">
                Spesialmasser for reparasjon av større skader og hull i treverk.
              </p>
              <div className="flex items-center text-primary">
                <span className="text-sm">Mastic 2000 Reparasjonsmasse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products by Brand */}
        <Tabs defaultValue="Bona" className="mb-12">
          <TabsList className="mb-8">
            {Object.keys(productsByBrand).map((brand) => (
              <TabsTrigger key={brand} value={brand}>
                {brand}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(productsByBrand).map(([brand, brandProducts]) => (
            <TabsContent key={brand} value={brand}>
              <div className="space-y-8">
                {brandProducts.map((product, index) => (
                  <div key={index} className="bg-background rounded-lg border p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="relative h-48 w-full overflow-hidden rounded-lg">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-muted-foreground mb-4">{product.description}</p>

                        {product.features && product.features.length > 0 && (
                          <div className="mb-4">
                            <h3 className="font-medium mb-2">Egenskaper</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.application && product.application.length > 0 && (
                          <div className="mb-4">
                            <h3 className="font-medium mb-2">Bruksområder</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              {product.application.map((app, i) => (
                                <li key={i}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.instructions && product.instructions.length > 0 && (
                          <div className="mb-4">
                            <h3 className="font-medium mb-2">Bruksanvisning</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              {product.instructions.map((instruction, i) => (
                                <li key={i}>{instruction}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.colors && (
                          <div className="mb-4">
                            <h3 className="font-medium mb-2">Farger</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.colors.map((color, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                                >
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {product.notes && product.notes.length > 0 && (
                          <div className="mb-4">
                            <h3 className="font-medium mb-2">Merknader</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              {product.notes.map((note, i) => (
                                <li key={i} className="text-muted-foreground">
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.related_docs && product.related_docs.length > 0 && (
                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Dokumenter</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.related_docs.map((doc, i) => (
                                <a
                                  key={i}
                                  href={doc.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-primary hover:underline"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  {doc.type}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Application Tips */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips for bruk av fugemasser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Forberedelse</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Sørg for at gulvet er rent og støvfritt før påføring</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Samle slipestøv fra samme gulv for best fargetilpasning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Bruk fint slipestøv (120-150 korn) for best resultat</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Bland små mengder om gangen for å unngå at massen tørker ut</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Påføring</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Påfør massen med en sparkel på tvers av fugene</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Fyll fugene godt og press massen ned i sprekken</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>La massen tørke i henhold til produktets anvisninger</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Slip lett over fugene før videre behandling av gulvet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-background rounded-lg border p-8">
          <h2 className="text-xl font-semibold mb-4">Trenger du hjelp til å velge riktig produkt?</h2>
          <p className="text-muted-foreground mb-6">
            Vårt team har lang erfaring med sparkling og fuging av tregulv og kan hjelpe deg med å finne de riktige
            produktene for dine behov. Kontakt oss for priser og tilgjengelighet.
          </p>
          <Link href="/kontakt">
            <Button className="bg-primary hover:bg-primary/90">Kontakt oss</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

