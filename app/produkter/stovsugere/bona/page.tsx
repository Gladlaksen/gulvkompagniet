import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata = {
  title: "Bona Støvsugere | Gulvkompagniet AS",
  description: "Profesjonelle støvsugere fra Bona for helt støvfri sliping med HEPA-filtrering",
}

export default function BonaStovsugere() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <Link href="/produkter/stovsugere" className="flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tilbake til støvsugere
        </Link>

        <h1 className="text-3xl font-bold mb-4">Bona Støvsugere</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Bona tilbyr profesjonelle støvsugere med HEPA-filtrering for helt støvfri sliping, som gir et sunnere
          arbeidsmiljø og bedre sluttresultat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Bona DCS 70</h2>
              <p className="text-muted-foreground mb-6">
                Et kraftig verktøy for helt støvfri sliping. Maskinens to-trinns syklonutskilling og unike
                filterutforming holder på en effektiv måte alt støv inne i maskinen. Luften som blåses ut er renere enn
                den som suges inn, tilfredsstiller krav tilsvarende operasjonsstuer.
              </p>

              <h3 className="font-medium mb-3">Egenskaper:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Helt støvfri sliping</li>
                <li>2-trinns syklonutskilling</li>
                <li>Unikt filter</li>
                <li>Portabel</li>
                <li>Enkel kobling til slipemaskin</li>
                <li>Helt lukket system</li>
                <li>Unikt endeløst støvposesystem (intet støv slipper ut ved posebytte)</li>
                <li>HEPA filtrering</li>
                <li>Robust, høykvalitets maskin</li>
                <li>Ergonomisk designet for enkel bruk og transport</li>
              </ul>

              <h3 className="font-medium mb-3">Fordeler:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Sunnere arbeidsmiljø</li>
                <li>Større kundetilfredshet (støvfri sliping, redusert lukt)</li>
                <li>Bedre sluttresultat (intet støv igjen på overflaten)</li>
              </ul>

              <Link
                href="https://gulvkompagniet.com/Datablader%20Bona/datablad%20Bona_DCS70%20Norsk.pdf"
                target="_blank"
                className="inline-flex items-center text-primary hover:underline"
              >
                <FileText className="mr-2 h-4 w-4" />
                Last ned datablad
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Bona DCS 25</h2>
              <p className="text-muted-foreground mb-6">
                Oppfyller de høyeste kravene til støvinnsamling og filtrering. H Classified industriell støvsuger.
              </p>

              <h3 className="font-medium mb-3">Egenskaper:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>H Klassifisert (helsefarlig støv EN 60335-2-69)</li>
                <li>Sterk sugemotor</li>
                <li>Automatisk innebygd start/stopp (for tilkoblet verktøy)</li>
                <li>Tofiltersystem (Teflon-belagt forfilter/membran + HEPA-filter)</li>
                <li>Filterrengjøring under drift ('støtdemper')</li>
                <li>Akustisk og LED alarm ved for lav luftstrøm</li>
                <li>Mykstartsmotor</li>
                <li>Automatisk ettersuging etter bruk</li>
              </ul>

              <h3 className="font-medium mb-3">Fordeler:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Sunnere arbeidsforhold</li>
                <li>Større kundetilfredshet (støvfri sliping, redusert lukt)</li>
              </ul>

              <Link
                href="https://gulvkompagniet.com/Datablader%20Bona/Teknisk%20datablad%20-%20Bona%20DCS%2025%20NO.pdf"
                target="_blank"
                className="inline-flex items-center text-primary hover:underline"
              >
                <FileText className="mr-2 h-4 w-4" />
                Last ned datablad
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Kontakt oss for mer informasjon</h2>
          <p className="text-muted-foreground mb-4">
            Ønsker du mer informasjon om våre Bona støvsugere eller vil du bestille? Kontakt oss for priser og
            tilgjengelighet.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

