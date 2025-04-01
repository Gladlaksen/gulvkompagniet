import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Kunnskap og Ressurser | Gulvkompagniet AS",
  description: "Fagkunnskap, guider og ressurser for profesjonelle gulvfagfolk.",
}

export default function KnowledgeResourcesPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Kunnskap og Ressurser</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Her finner du nyttig informasjon, guider og ressurser for profesjonelle gulvfagfolk. Vi deler vår kunnskap for
          å hjelpe deg å oppnå best mulig resultat i dine prosjekter.
        </p>

        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Faglige Guider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"
                  alt="Guide til oljing av gulv"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Guide til oljing av gulv</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  En komplett guide til oljing av tregulv. Lær om forberedelser, påføringsteknikker og etterbehandling.
                </p>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Last ned PDF
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
                  alt="Slipeguide for profesjonelle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Slipeguide for profesjonelle</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detaljert guide om sliping av ulike gulvtyper. Inkluderer valg av slipemidler, teknikker og
                  feilsøking.
                </p>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Last ned PDF
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop"
                  alt="Vedlikeholdsguide for tregulv"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Vedlikeholdsguide for tregulv</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Alt du trenger å vite om vedlikehold av oljebehandlede og lakkerte tregulv for optimal levetid.
                </p>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Last ned PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Sheets */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tekniske Datablader</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="mb-6">
              Her finner du tekniske datablader for våre produkter. Disse inneholder detaljert informasjon om
              produktegenskaper, bruksområder, påføringsmetoder og sikkerhetsinformasjon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-background rounded-lg border">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Bona Produkter</h3>
                  <p className="text-sm text-muted-foreground">
                    Datablader for lakker, oljer, primere og vedlikeholdsprodukter
                  </p>
                </div>
                <Link href="#" className="ml-auto text-primary hover:underline">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex items-center p-4 bg-background rounded-lg border">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Osmo Produkter</h3>
                  <p className="text-sm text-muted-foreground">Datablader for hardvoksoljer og vedlikeholdsprodukter</p>
                </div>
                <Link href="#" className="ml-auto text-primary hover:underline">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex items-center p-4 bg-background rounded-lg border">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Rubio Monocoat</h3>
                  <p className="text-sm text-muted-foreground">Datablader for oljer og vedlikeholdsprodukter</p>
                </div>
                <Link href="#" className="ml-auto text-primary hover:underline">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex items-center p-4 bg-background rounded-lg border">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Sliperekvisita</h3>
                  <p className="text-sm text-muted-foreground">Datablader for slipepapir, rondeller og nett</p>
                </div>
                <Link href="#" className="ml-auto text-primary hover:underline">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16" id="faq">
          <h2 className="text-2xl font-bold mb-6">Ofte Stilte Spørsmål</h2>
          <div className="space-y-4">
            <div className="bg-background rounded-lg border p-6">
              <h3 className="font-semibold mb-2">Hvilken olje er best for eikegulv?</h3>
              <p className="text-muted-foreground">
                For eikegulv anbefaler vi ofte Osmo Hardvoksolje eller Rubio Monocoat Oil Plus 2C. Begge gir en naturlig
                finish som fremhever eikens vakre struktur, samtidig som de gir god beskyttelse. Valget avhenger av
                ønsket utseende og bruksområde.
              </p>
            </div>

            <div className="bg-background rounded-lg border p-6">
              <h3 className="font-semibold mb-2">Hvor ofte bør et oljet gulv vedlikeholdes?</h3>
              <p className="text-muted-foreground">
                Et oljet gulv bør vedlikeholdes med vedlikeholdsolje 1-2 ganger i året, avhengig av slitasje. I områder
                med høy trafikk kan det være nødvendig med hyppigere vedlikehold. Regelmessig rengjøring med riktige
                produkter er også viktig for å bevare gulvets utseende.
              </p>
            </div>

            <div className="bg-background rounded-lg border p-6">
              <h3 className="font-semibold mb-2">Hvilken kornstørrelse bør jeg bruke ved sliping av gulv?</h3>
              <p className="text-muted-foreground">
                Ved sliping av tregulv anbefaler vi å starte med korn 40-60 for grovere sliping, deretter 80-100 for
                mellomslip, og avslutte med 120-150 for finslip. Rekkefølgen kan variere avhengig av gulvets tilstand og
                treslag.
              </p>
            </div>

            <div className="bg-background rounded-lg border p-6">
              <h3 className="font-semibold mb-2">Hvordan fjerner jeg flekker på oljet gulv?</h3>
              <p className="text-muted-foreground">
                For flekker på oljet gulv anbefaler vi spesifikke flekkfjernere som Rubio Monocoat Grease Remover for
                fettflekker, Tannin Remover for vannflekker og Limespot Remover for kalkflekker. Etter flekkfjerning bør
                området behandles med vedlikeholdsolje.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section id="levering">
          <h2 className="text-2xl font-bold mb-6">Leveringsinformasjon</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="mb-4">
              Vi tilbyr rask og pålitelig levering av alle våre produkter. For bestillinger mottatt før kl. 14:00 på
              hverdager, sender vi normalt samme dag.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-semibold mb-3">Leveringstider</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Oslo-området: 1-2 virkedager</li>
                  <li>Østlandet forøvrig: 2-3 virkedager</li>
                  <li>Resten av Norge: 3-5 virkedager</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Fraktkostnader</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Ordre under 2000 kr: 195 kr</li>
                  <li>Ordre mellom 2000-5000 kr: 145 kr</li>
                  <li>Ordre over 5000 kr: Fri frakt</li>
                  <li>Henting i butikk: Gratis</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm">
              Merk at spesielle produkter og større maskiner kan ha avvikende leveringstider. Kontakt oss for mer
              informasjon om spesifikke produkter.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

