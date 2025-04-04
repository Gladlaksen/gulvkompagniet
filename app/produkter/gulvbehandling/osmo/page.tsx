import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Download } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Osmo Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Osmo produkter for naturlig og holdbar gulvbehandling, inkludert hardvoksoljer, dekorvoks og vedlikeholdsprodukter.",
}

// Define the product categories
const productCategories = [
  {
    title: "Hardvoksolje",
    description: "Naturlige oljer og vokser for tregulv",
    products: [
      {
        name: "Osmo Hardvoksolje",
        description:
          "Perfekt tilpasset til tregulv - slitesterk og enkelt vedlikehold! Beholder treets karakter og utseende.",
        features: ["Tørker på 8-12 timer per strøk", "Vann- og smussavvisende", "Ekstremt slitesterk"],
        variants: ["Klar, matt (3062)", "Klar, silkematt (3032)"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Hardvoksolje Rapid",
        description: "Den hurtigtørkende versjonen av Hardvoks-Olje, påfør to strøk samme dag!",
        features: ["Tørker på 4-6 timer per strøk", "Kort åpningstid 5-7 minutter", "Vann- og smussavvisende"],
        variants: ["Klar, matt (3262)", "Klar, silkematt (3232)"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Hardvoksolje Pigmentert",
        description: "Alle egenskapene til Hardvoks-Olje, tilsatt farge for personlig utseende.",
        features: [
          "Transparent, silkematt",
          "Vannavvisende",
          "Smussavvisende",
          "Svært holdbar",
          "Glatt uttrykk",
          "Harmonisk utseende",
        ],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Dekorvoks",
        description: "Transparent behandling for innendørs bruk. Gir en glatt overflate uten fiberreisning.",
        features: ["Silkematt overflate", "Enkel å vedlikeholde"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Dekorvoks Intensiv",
        description:
          "Transparent eller dekkende moderne farger. Fra transparent til dekkende og matt til lett glanset overflate.",
        features: ["Vannavvisende", "Smussavvisende", "Lett å holde ren"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Dekorvoks Ekstra tynn (Klarvoks)",
        description: "Fargeløs Klarvoks for tropiske treslag, kan benyttes både som grunningsolje og toppstrøk!",
        features: ["Fargeløs, silkematt", "Trenger dypt inn i treet", "Gir gyllent utseende"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Oljebeis",
    description: "Oljebasert beis for tregulv",
    products: [
      {
        name: "Osmo Oljebeis",
        description:
          "Produkt hvor man kan velge graden av innfarging på treverket. 1 gang = fargetone, 2 ganger = dyp, transparent innfarging.",
        features: ["Lett å påføre", "Basert på naturlige oljer"],
        colors: ["3501 Hvit", "3512 Sølvgråt", "3514 Grafitt", "3564 Tobakk", "3500 Svart"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Renhold",
    description: "Produkter for rengjøring av gulv",
    products: [
      {
        name: "Osmo Vask og Pleiemiddel 8016",
        description:
          "Konsentrert rengjøringsmiddel. Rengjør uten å skade Osmo Hardvoksolje, tilfører glans og friskhet.",
        features: ["Inneholder kokosolje (vasker og pleier)", "Løsemiddelfri", "Biologisk nedbrytbar"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Grovrengjøringsmiddel 8019 (Intensiv Cleaner)",
        description:
          "Svært effektivt, alkaliebasert intensivt rengjøringskonsentrat for fjerning av organisk/uorganisk smuss.",
        features: ["Inneholder ingen aggressive/etsende alkalier"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Vedlikehold",
    description: "Produkter for vedlikehold av gulv",
    products: [
      {
        name: "Osmo Rens og Vedlikeholdsvoks",
        description: "For rens og vedlikehold av Hardvoksoljede, naturoljede og lakkerte overflater.",
        features: ["Effektiv flekkfjerner (spesielt gummiflekker)", "Enkel påføring", "Meget vannavvisende"],
        variants: ["Fargeløs (3029)", "Hvitpigmentert (3087)"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Hardvoks Vedlikeholdsolje",
        description: "Vedlikeholdsolje for periodisk vedlikehold mellom hovedvedlikehold.",
        features: ["Periodisk vedlikehold av tidligere hardvoksoljede flater"],
        variants: ["Matt (3079)", "Silkematt (3081)"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Vedlikeholdssett",
        description: "Komplett sett for vedlikehold av alle typer gulv (oljet, hardvoksoljet, lakkert).",
        features: ["Inneholder Vask og Pleiemiddel, Rens og Rengjøringsvoks, kluter og instruksjoner"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Påføringsrekvisita",
    description: "Verktøy for påføring av Osmo produkter",
    products: [
      {
        name: "Osmo Gulvbørster",
        description: "Sikrer påføring av rett mengde Hardvoks-Olje.",
        features: ["Enkel å bruke", "Kan påmonteres langskaft", "Bust spesialtilpasset Osmo oljer/vokser"],
        variants: ["150mm", "220mm", "400mm"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Rullesett for gulv",
        description: "Spesialrulle for påføring av Osmo Hardvoksolje og vedlikeholdsolje.",
        features: ["Uvurderlig på større gulvflater"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Osmo Profesjonell Stålsparkel",
        description: "For enkel utlegging av fargeløse og pigmenterte oljer.",
        features: ["Bred aluminiumsparkel", "Avrundede kanter", "Lett å jobbe med"],
        variants: ["500mm"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
]

export default function OsmoPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/produkter" className="hover:text-primary">
            Produkter
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/produkter/gulvbehandling" className="hover:text-primary">
            Gulvbehandling
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Osmo</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"
              alt="Osmo Gulvbehandling"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Osmo Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Osmo er en ledende produsent av naturlige oljer og vokser for tregulv og andre treoverflater. Med over 140
              års erfaring tilbyr Osmo miljøvennlige produkter som fremhever treets naturlige skjønnhet og beskytter det
              mot slitasje.
            </p>
            <p className="text-muted-foreground mb-6">
              Vårt utvalg av Osmo-produkter inkluderer hardvoksoljer, dekorvoks, oljebeis og vedlikeholdsprodukter av
              høyeste kvalitet. Osmo er kjent for sine produkter basert på naturlige oljer og vokser, som gir en vakker
              og slitesterk overflate som er enkel å vedlikeholde.
            </p>
          </div>
        </div>

        {productCategories.map((category, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <p className="text-muted-foreground mb-8">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="border rounded-lg overflow-hidden bg-background">
                  <div className="relative h-48">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {product.variants && (
                      <div className="mb-4">
                        <p className="text-xs font-medium mb-1">Varianter:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.variants.map((variant, variantIndex) => (
                            <span key={variantIndex} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {variant}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {product.colors && (
                      <div className="mb-4">
                        <p className="text-xs font-medium mb-1">Farger:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.colors.slice(0, 3).map((color, colorIndex) => (
                            <span key={colorIndex} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {color}
                            </span>
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              +{product.colors.length - 3} flere
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <Link
                      href={`/produkter/gulvbehandling/osmo/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary hover:underline text-sm flex items-center"
                    >
                      Se detaljer <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Tekniske Datablader</h2>
          <p className="text-muted-foreground mb-6">
            Her finner du tekniske datablader for Osmo produkter. Disse inneholder detaljert informasjon om
            produktegenskaper, bruksområder, påføringsmetoder og sikkerhetsinformasjon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Osmo Hardvoksolje</h3>
                <p className="text-sm text-muted-foreground">Datablader for Hardvoksolje, Hardvoksolje Rapid m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Osmo Dekorvoks</h3>
                <p className="text-sm text-muted-foreground">Datablader for Dekorvoks, Dekorvoks Intensiv m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Osmo Oljebeis</h3>
                <p className="text-sm text-muted-foreground">Datablader for Oljebeis og fargekart</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Osmo Vedlikehold</h3>
                <p className="text-sm text-muted-foreground">
                  Datablader for Vask og Pleiemiddel, Rens og Vedlikeholdsvoks m.fl.
                </p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

