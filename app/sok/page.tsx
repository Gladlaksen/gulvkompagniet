import type { Metadata } from "next"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Søkeresultater | Gulvkompagniet AS",
  description: "Søk i vårt utvalg av profesjonelle gulvprodukter og utstyr for fagfolk.",
}

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  // This would be replaced with actual search functionality in a real implementation
  const mockSearchResults = query
    ? [
        // Gulvbehandling - Bona
        {
          title: "Bona Traffic HD",
          category: "Gulvbehandling",
          subcategory: "Bona",
          description:
            "Anerkjent som verdens kanskje sterkeste lakk. Nylansert i 2013 med enda lavere løsemiddelinnhold.",
          url: "/produkter/gulvbehandling/bona/traffic-hd",
        },
        {
          title: "Bona Traffic HD Raw",
          category: "Gulvbehandling",
          subcategory: "Bona",
          description:
            "Tilbyr et høyt beskyttelsesnivå samtidig som utseendet og følelsen av ubehandlet tre opprettholdes.",
          url: "/produkter/gulvbehandling/bona/traffic-hd-raw",
        },
        {
          title: "Bona Traffic GO",
          category: "Gulvbehandling",
          subcategory: "Bona",
          description:
            "Et kvantesprang innen lakkteknologien hvor man har lykkes med å skape en en-komponent lakk med styrken til en to-komponent.",
          url: "/produkter/gulvbehandling/bona/traffic-go",
        },
        {
          title: "Bona Domo",
          category: "Gulvbehandling",
          subcategory: "Bona",
          description: "En lakk for bruk i hjemmemiljø og andre steder med normal trafikk.",
          url: "/produkter/gulvbehandling/bona/domo",
        },
        {
          title: "Bona Mega EVO",
          category: "Gulvbehandling",
          subcategory: "Bona",
          description:
            "Neste generasjons lakk for tregulv med en helt unik tverrbindingsteknologi som aktiveres når produktet påføres gulvet.",
          url: "/produkter/gulvbehandling/bona/mega-evo",
        },
        {
          title: "Bona Prime Intense",
          category: "Gulvbehandling",
          subcategory: "Bona - Primer",
          description:
            "1-komponent vannbasert 100% polyuretan grunningslakk. Gir overflaten et fyldig utseende med dyp innfarging.",
          url: "/produkter/gulvbehandling/bona/prime-intense",
        },

        // Gulvbehandling - Osmo
        {
          title: "Osmo Hardvoksolje",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description:
            "Perfekt tilpasset til tregulv - slitesterk og enkelt vedlikehold! Beholder treets karakter og utseende.",
          url: "/produkter/gulvbehandling/osmo/hardvoksolje",
        },
        {
          title: "Osmo Hardvoksolje Rapid",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description: "Den hurtigtørkende versjonen av Hardvoks-Olje, påfør to strøk samme dag!",
          url: "/produkter/gulvbehandling/osmo/hardvoksolje-rapid",
        },
        {
          title: "Osmo Hardvoksolje Pigmentert",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description: "Alle egenskapene til Hardvoks-Olje, tilsatt farge for personlig utseende.",
          url: "/produkter/gulvbehandling/osmo/hardvoksolje-pigmentert",
        },
        {
          title: "Osmo Dekorvoks",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description: "Transparent behandling for innendørs bruk. Gir en glatt overflate uten fiberreisning.",
          url: "/produkter/gulvbehandling/osmo/dekorvoks",
        },
        {
          title: "Osmo Dekorvoks Intensiv",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description:
            "Transparent eller dekkende moderne farger. Fra transparent til dekkende og matt til lett glanset overflate.",
          url: "/produkter/gulvbehandling/osmo/dekorvoks-intensiv",
        },
        {
          title: "Osmo Dekorvoks Ekstra tynn",
          category: "Gulvbehandling",
          subcategory: "Osmo",
          description: "Fargeløs Klarvoks for tropiske treslag, kan benyttes både som grunningsolje og toppstrøk!",
          url: "/produkter/gulvbehandling/osmo/dekorvoks-ekstra-tynn",
        },
        {
          title: "Osmo Oljebeis",
          category: "Gulvbehandling",
          subcategory: "Osmo - Oljebeis",
          description:
            "Produkt hvor man kan velge graden av innfarging på treverket. 1 gang = fargetone, 2 ganger = dyp, transparent innfarging.",
          url: "/produkter/gulvbehandling/osmo/oljebeis",
        },
        {
          title: "Osmo Vask og Pleiemiddel 8016",
          category: "Gulvbehandling",
          subcategory: "Osmo - Renhold",
          description:
            "Konsentrert rengjøringsmiddel. Rengjør uten å skade Osmo Hardvoksolje, tilfører glans og friskhet.",
          url: "/produkter/gulvbehandling/osmo/vask-og-pleiemiddel",
        },

        // Sliperekvisita
        {
          title: "Slipebånd 200x750mm K60",
          category: "Sliperekvisita",
          subcategory: "Slipebånd",
          description: "Slipebånd for profesjonell gulvsliping, passer til de fleste båndslipemaskiner.",
          url: "/produkter/sliperekvisita/slipeband",
        },
        {
          title: "Rondeller 150mm K60",
          category: "Sliperekvisita",
          subcategory: "Rondeller",
          description: "Slipeskiver for eksenterslipere og poleringsmaskiner.",
          url: "/produkter/sliperekvisita/rondeller",
        },

        // Slipemaskiner
        {
          title: "Bona Båndslipemaskin",
          category: "Slipemaskiner",
          subcategory: "Bona",
          description: "Profesjonell båndslipemaskin for effektiv sliping av tregulv.",
          url: "/produkter/slipemaskiner/bona/bandslipemaskin",
        },
        {
          title: "Bona Edge",
          category: "Slipemaskiner",
          subcategory: "Bona",
          description: "Kantslipemaskin for presis sliping langs vegger og i hjørner.",
          url: "/produkter/slipemaskiner/bona/edge",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          (item.subcategory && item.subcategory.toLowerCase().includes(query.toLowerCase())),
      )
    : []

  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Søkeresultater</h1>
          <div className="relative max-w-xl">
            <form action="/sok" method="get">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                name="q"
                placeholder="Søk produkter..."
                defaultValue={query}
                className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button type="submit" className="sr-only">
                Søk
              </button>
            </form>
          </div>
        </div>

        {query ? (
          <>
            <p className="text-muted-foreground mb-6">
              {mockSearchResults.length} resultater for "{query}"
            </p>

            {mockSearchResults.length > 0 ? (
              <div className="space-y-6">
                {mockSearchResults.map((result, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-background">
                    <div className="text-sm text-muted-foreground mb-1">
                      {result.subcategory ? `${result.category} - ${result.subcategory}` : result.category}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      <a href={result.url} className="hover:text-primary hover:underline">
                        {result.title}
                      </a>
                    </h2>
                    <p className="text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">Ingen resultater funnet</h2>
                <p className="text-muted-foreground mb-6">
                  Vi kunne ikke finne noen resultater for "{query}". Prøv andre søkeord eller se våre produktkategorier.
                </p>
                <a href="/produkter" className="text-primary hover:underline">
                  Se alle produktkategorier
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Søk i vårt produktutvalg</h2>
            <p className="text-muted-foreground mb-6">
              Skriv inn søkeord for å finne produkter, eller bla gjennom våre kategorier.
            </p>
            <a href="/produkter" className="text-primary hover:underline">
              Se alle produktkategorier
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

