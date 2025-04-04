import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Check } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Classic Elastic SIMP | Gulvkompagniet AS",
  description:
    "En-komponent, luftfuktighetstørrende, elastisk lim med 100% tørrstoffinnhold basert på modifisert silyl polymer (MS).",
}

export default function ClassicElasticSIMPPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/produkter" className="hover:text-primary">
            Produkter
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/produkter/gulvlim" className="hover:text-primary">
            Gulvlim
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Classic Elastic SIMP</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=800&auto=format&fit=crop"
              alt="Classic Elastic SIMP"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Classic Elastic SIMP</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Et en-komponent, luftfuktighetstørrende, elastisk lim med 100% tørrstoffinnhold basert på modifisert silyl
              polymer (MS). Gir svært holdbart, men fleksibelt feste.
            </p>
            <p className="text-muted-foreground mb-6">
              Classic Elastic SIMP er utviklet spesielt for profesjonell liming av tregulv og parkett. Produktet er
              løsemiddelfritt, luktfritt og isocyanatfritt, noe som gjør det til et miljøvennlig valg for gulvleggere.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                Emicode EC1 Plus
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                BREAM Godkjent
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                M1
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                Eurofins IAC Gold
              </span>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Produktinformasjon</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3">Type</h3>
              <p className="text-muted-foreground mb-4">Modifisert silyl polymer (MS), 1-komponent, elastisk</p>

              <h3 className="font-medium mb-3">Egenskaper</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Løsemiddelfri",
                  "Permanent fleksibel",
                  "Luktfri",
                  "Isocyanatfri",
                  "Enkel å bruke (ingen blanding)",
                  "Optimal viskositet, lett å legge ut",
                  "Enkel rengjøring av redskaper",
                  "Gir sikkert feste mellom de fleste materialer",
                  "Tåler bevegelse (temp, vibrasjon, krymping) uten å slippe",
                  "Gode utjevningsegenskaper",
                  "Meget gode lyddempingsegenskaper",
                  "Tåler frost under lagring",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium mb-3">Bruksområder</h3>
              <ul className="space-y-2 mb-4">
                {["Liming av alle typer tre- og parkettgulv", "Velegnet for liming på varmekabel/vannbåren varme"].map(
                  (app, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Emballasje</h3>
              <p className="text-muted-foreground mb-2">Pappkartong med 2 stk folieposer</p>
              <h4 className="font-medium text-sm mb-2">Fordeler med foliepose:</h4>
              <ul className="list-disc pl-5 mb-4">
                {[
                  "Mindre avfall (papp gjenvinnes, lite folieavfall)",
                  "Lettere transport",
                  "Mindre svinn (100% utnyttelse mulig, lufttett forsegling av ubrukt pose)",
                  "Lengre holdbarhet (min. 24 måneder)",
                  "Ingen snerkdannelse",
                  "Bedre plassutnyttelse ved transport",
                ].map((benefit, i) => (
                  <li key={i} className="text-muted-foreground">
                    {benefit}
                  </li>
                ))}
              </ul>

              <h3 className="font-medium mb-3">Sertifiseringer</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Emicode EC 1 plus",
                  "BREAM Godkjent",
                  "M1",
                  "Eurofins IAC Gold",
                  "EN 14293",
                  "CARB VOC",
                  "ISO 16283 (Akustisk støyreduksjon)",
                ].map((cert, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Dokumenter</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://gulvkompagniet.com/Datablader%20lim/datablad%20classic%20elastic%20SIMP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <FileText className="h-4 w-4 mr-2" />
                Teknisk datablad
              </a>
              <a
                href="https://gulvkompagniet.com/Sikkerhet%20Classic/Classic%20Elastic%20SIMP%20NO%202021.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <FileText className="h-4 w-4 mr-2" />
                Sikkerhetsdatablad
              </a>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
              Kontakt for pris og tilgjengelighet
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Bruksveiledning</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              For best resultat, følg disse anbefalingene ved bruk av Classic Elastic SIMP:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-muted-foreground">
                Underlaget må være rent, tørt og jevnt. Relativ fuktighet i betong bør ikke overstige 85%.
              </li>
              <li className="text-muted-foreground">
                Påfør limet med en tannsparkel tilpasset gulvtypen. Vanligvis anbefales B11 eller B15 tannsparkel.
              </li>
              <li className="text-muted-foreground">
                Legg parketten/tregulvet i det våte limet innen 40 minutter etter påføring.
              </li>
              <li className="text-muted-foreground">
                Belast ikke gulvet før limet er fullstendig herdet (24-48 timer avhengig av temperatur og
                luftfuktighet).
              </li>
              <li className="text-muted-foreground">Sliping og overflatebehandling kan utføres etter 24-48 timer.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

