import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata = {
  title: "Støvsugere | Gulvkompagniet AS",
  description: "Profesjonelle støvsugere for effektiv støvhåndtering ved gulvsliping og gulvbehandling",
}

export default function StovsugereCategory() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Støvsugere</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Støvsugere er en forutsetning for virksomheten. Viktig for kunders helse, inneklima, og finish. Moderne
          støvsugende maskiner fjerner det meste av støvet. Bona DCS 70 gir helt støvfritt resultat med HEPA-filtrering.
          Vi tilbyr også støvsugere fra Wirbel, Nilfisk og Foma tilpasset profesjonell bruk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/produkter/stovsugere/bona"
            className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Bona</h2>
              <p className="text-muted-foreground mb-6">
                Profesjonelle støvsugere med HEPA-filtrering for helt støvfri sliping.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                <ChevronRight className="ml-1 h-4 w-4 text-primary" />
              </div>
            </div>
          </Link>

          <Link
            href="/produkter/stovsugere/nilfisk"
            className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Nilfisk</h2>
              <p className="text-muted-foreground mb-6">
                Norges mest solgte støvsugere til håndverkere, perfekt for gulvslipere.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                <ChevronRight className="ml-1 h-4 w-4 text-primary" />
              </div>
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6">Utvalgte produkter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bona DCS 70</h3>
              <p className="text-muted-foreground mb-4">
                Et kraftig verktøy for helt støvfri sliping. Maskinens to-trinns syklonutskilling og unike
                filterutforming holder på en effektiv måte alt støv inne i maskinen.
              </p>
              <h4 className="font-medium mb-2">Egenskaper:</h4>
              <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
                <li>Helt støvfri sliping</li>
                <li>2-trinns syklonutskilling</li>
                <li>Unikt filter</li>
                <li>HEPA filtrering</li>
                <li>Helt lukket system</li>
              </ul>
              <Link
                href="https://gulvkompagniet.com/Datablader%20Bona/datablad%20Bona_DCS70%20Norsk.pdf"
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                Last ned datablad
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bona DCS 25</h3>
              <p className="text-muted-foreground mb-4">
                Oppfyller de høyeste kravene til støvinnsamling og filtrering. H Classified industriell støvsuger.
              </p>
              <h4 className="font-medium mb-2">Egenskaper:</h4>
              <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
                <li>H Klassifisert (helsefarlig støv EN 60335-2-69)</li>
                <li>Sterk sugemotor</li>
                <li>Tofiltersystem (Teflon-belagt forfilter/membran + HEPA-filter)</li>
                <li>Filterrengjøring under drift</li>
                <li>Akustisk og LED alarm ved for lav luftstrøm</li>
              </ul>
              <Link
                href="https://gulvkompagniet.com/Datablader%20Bona/Teknisk%20datablad%20-%20Bona%20DCS%2025%20NO.pdf"
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                Last ned datablad
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nilfisk 930 UZ</h3>
              <p className="text-muted-foreground mb-4">
                Sannsynligvis Norges mest solgte støvsuger til håndverkere. Perfekt finstøvsuger for en gulvsliper.
              </p>
              <h4 className="font-medium mb-2">Egenskaper:</h4>
              <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
                <li>Meget god oppsugingsevne</li>
                <li>Kraftig og robust motor</li>
                <li>Store støvposer (15 liter)</li>
                <li>Kompakt design (velter ikke lett)</li>
                <li>Tilgjengelig med HEPA filter eller tradisjonell filterløsning</li>
              </ul>
              <Link
                href="https://gulvkompagniet.com/Nilfisk-GD930-brosjyre.pdf"
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                Last ned brosjyre
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

