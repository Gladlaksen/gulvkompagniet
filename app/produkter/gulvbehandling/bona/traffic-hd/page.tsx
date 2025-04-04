import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Check } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Bona Traffic HD | Gulvkompagniet AS",
  description:
    "Anerkjent som verdens kanskje sterkeste lakk. Nylansert i 2013 med enda lavere løsemiddelinnhold. Det selvsagte valg for gulv med høy trafikk.",
}

export default function BonaTrafficHDPage() {
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
          <Link href="/produkter/gulvbehandling/bona" className="hover:text-primary">
            Bona
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Traffic HD</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden border mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"
                  alt="Bona Traffic HD"
                  width={800}
                  height={600}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Greenguard
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    EC1
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    BREEAM
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    A+
                  </span>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Dokumenter</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://gulvkompagniet.com/Datablader%20Bona/datablad%20Bona%20Traffic%20HD1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Teknisk datablad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Traffic%20HD%20-%20Norway%20%28Norwegian%20%28Bokm%C3%A5l%29%20%28NO%29%29.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gulvkompagniet.com/Datablader%20Bona/FDV%20datablad%20Traffic%20HD%20Norsk.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        FDV datablad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gulvkompagniet.com/Datablader%20Bona/Brosjyre%20Traffic%20HD%20-%20Beating%20Time%202015%20Norsk.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Brosjyre: Traffic HD - Beating Time 2015 Norsk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Bona Traffic HD</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Anerkjent som verdens kanskje sterkeste lakk. Nylansert i 2013 med enda lavere løsemiddelinnhold. Det
              selvsagte valg for gulv med høy trafikk.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Egenskaper</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Gjennomherdet på 12 timer ('Klar til bruk etter kun 12 timer')",
                    "Suveren slitestyrke",
                    "Lavt løsemiddelinnhold",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Bruksområder</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {["Gulv med høy trafikk", "Offentlig miljø", "Kontorer", "Butikker", "Der det er tidspress"].map(
                    (application, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{application}</span>
                      </li>
                    ),
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Produktinformasjon</h2>
                <div className="prose max-w-none">
                  <p>
                    Bona Traffic HD er en profesjonell, to-komponent vannbasert gulvlakk spesielt utviklet for tregulv i
                    miljøer med ekstremt høy trafikk. Den har en eksepsjonell slitestyrke og er gjennomherdet på bare 12
                    timer, noe som gjør den ideell for miljøer der nedetid må minimeres.
                  </p>
                  <p>
                    Lakken har et svært lavt løsemiddelinnhold og er sertifisert med flere miljømerker, inkludert
                    Greenguard, EC1, BREEAM og A+. Dette gjør den til et miljøvennlig valg for profesjonelle
                    gulvleggere.
                  </p>
                  <p>
                    Bona Traffic HD kan brukes for overlakkering av tidligere lakkerte/fabrikklakkerte gulv med Bona
                    Diamant sliperondeller. Se brukerveiledning for relakkering.
                  </p>
                </div>
              </section>

              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Tekniske spesifikasjoner</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm mb-2">Type</h3>
                    <p className="text-sm text-muted-foreground">2-komponent vannbasert polyuretan topplakk</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Tørketid</h3>
                    <p className="text-sm text-muted-foreground">Gjennomherdet på 12 timer</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Forbruk</h3>
                    <p className="text-sm text-muted-foreground">8-10 m²/liter (100-120 g/m²) per strøk</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Verktøy</h3>
                    <p className="text-sm text-muted-foreground">Bona Rulle</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Sikkerhet</h3>
                    <p className="text-sm text-muted-foreground">
                      Lakk: Ikke klassifisert
                      <br />
                      Herder: Klassifisert (se sikkerhetsdatablad)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Rengjøring</h3>
                    <p className="text-sm text-muted-foreground">
                      Fjern mest mulig materiale fra verktøy før rengjøring med vann
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Holdbarhet</h3>
                    <p className="text-sm text-muted-foreground">
                      1 år fra produksjonsdato i uåpnet originalemballasje
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-2">Lagring/transport</h3>
                    <p className="text-sm text-muted-foreground">
                      Temperaturen må ikke falle under +5°C eller overstige +25°C under lagring og transport
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Relaterte produkter</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Link
                    href="/produkter/gulvbehandling/bona/traffic-hd-raw"
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium mb-2">Bona Traffic HD Raw</h3>
                    <p className="text-sm text-muted-foreground">
                      Opprettholder utseendet og følelsen av ubehandlet tre
                    </p>
                  </Link>
                  <Link
                    href="/produkter/gulvbehandling/bona/traffic-go"
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium mb-2">Bona Traffic GO</h3>
                    <p className="text-sm text-muted-foreground">1-komponent lakk med 2-komponent styrke</p>
                  </Link>
                  <Link
                    href="/produkter/gulvbehandling/bona/prime-classic-ux"
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium mb-2">Bona Prime Classic UX</h3>
                    <p className="text-sm text-muted-foreground">
                      Vannbasert grunning for ubehandlede, nyslipte tregulv
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

