import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Produkter | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av profesjonelle gulvprodukter og utstyr for fagfolk.",
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Våre Produkter</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet AS er Norges ledende leverandør av utstyr og rekvisita til profesjonell sliping, legging og
          behandling av tregulv og parkett.
        </p>

        {/* Gulvbehandling Section */}
        <section id="gulvbehandling" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"
                alt="Gulvbehandling"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Gulvbehandling</h2>
              <p className="mb-4">
                Naturlig overflate, den beste beskyttelse. Når tre brukes innendørs (feks gulv, møbler og leker) kan det
                bli utsatt for stor slitasje. Treet behøver beskyttelse samtidig som man beskytter treets naturlige
                egenskaper.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Bona Primere</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Primer er et fantastisk verktøy når vannbaserte lakker benyttes. Med en primer kan du forandre det
                    ferdige inntrykk til å bli lysere, mørkere, jevnere eller framheve strukturen i treverket.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Osmo Hardvoks-Olje</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Osmo Hardvoks-Olje kombinerer fordelene med tradisjonelle oljer og vokser i ett unikt produkt. Den
                    beskytter treet innenfra og gir en slitesterk overflate.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Rubio Monocoat</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    RMC Oil Plus 2C er en miljøvennlig trebehandling uten VOC som beskytter og farger treet i ett enkelt
                    strøk. Kombinasjonen av olje og herder sikrer rask tørking.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Vask og Vedlikehold</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Alle gulv har behov for vedlikehold. For å holde dine gulv rene og pene, tilbyr vi et omfattende
                    utvalg av produkter som rengjør, pleier og vedlikeholder dem.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <Button className="mt-6 bg-primary hover:bg-primary/90">Se alle gulvbehandlingsprodukter</Button>
            </div>
          </div>
        </section>

        {/* Sliperekvisita Section */}
        <section id="sliperekvisita" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
                alt="Sliperekvisita"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Sliperekvisita</h2>
              <p className="mb-4">
                Gulvkompagniet har et bredt utvalg av slipebånd og rondeller til alle typer gulvslipemaskiner. Vi har
                egen produksjon av slipeartikler for å oppnå den aller beste kvalitet til gulvsliping. Vi vet hva
                profesjonelle fagfolk ønsker og trenger.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Slipebånd</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vi tilbyr slipebånd i alle størrelser og kornstørrelser til alle typer gulvslipemaskiner. Våre
                    slipebånd er av høyeste kvalitet for optimal slipeeffekt.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Rondeller</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Rondeller i ulike størrelser og kornstørrelser for poleringsmaskiner og kantslipere. Optimalisert
                    for profesjonell bruk.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Nett og Pads</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Slipepads og nett for mellomslip og finpuss av overflater. Gir perfekt resultat før påføring av olje
                    eller lakk.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Spesialprodukter</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Spesialiserte slipeprodukter for unike behov og utfordrende overflater. Løsninger for alle typer
                    gulvprosjekter.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <Button className="mt-6 bg-primary hover:bg-primary/90">Se alle sliperekvisita</Button>
            </div>
          </div>
        </section>

        {/* Maskiner Section */}
        <section id="maskiner" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop"
                alt="Maskiner"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Maskiner</h2>
              <p className="mb-4">
                Vi tilbyr et bredt utvalg av profesjonelle maskiner for gulvsliping, polering og støvsuging. Våre
                maskiner er valgt ut for å gi best mulig resultat og effektivitet for profesjonelle gulvleggere.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Gulvslipemaskiner</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Profesjonelle gulvslipemaskiner for effektiv sliping av alle typer tregulv. Robuste og driftssikre
                    maskiner for daglig bruk.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Kantslipere</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Spesialiserte maskiner for sliping langs vegger og i hjørner. Gir perfekt resultat der vanlige
                    slipemaskiner ikke kommer til.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Poleringsmaskiner</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Maskiner for polering og påføring av olje og voks. Gir jevnt og profesjonelt resultat på alle
                    flater.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Støvsugere</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Kraftige industristøvsugere spesielt tilpasset gulvarbeid. Effektiv støvhåndtering for et sunnere
                    arbeidsmiljø.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <Button className="mt-6 bg-primary hover:bg-primary/90">Se alle maskiner</Button>
            </div>
          </div>
        </section>

        {/* Verneutstyr Section */}
        <section id="verneutstyr" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=800&auto=format&fit=crop"
                alt="Verneutstyr"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Verneutstyr</h2>
              <p className="mb-4">
                Ved langvarig eksponering for løsningsmidler kan det oppstå problemer som ikke ivaretas av vanlige
                halvmasker. Som en løsning på dette tilbyr Gulvkompagniet i samarbeide med 3M Norge heldekningsmasker og
                annet verneutstyr for profesjonelle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Friskluftsmasker</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Heldekningsmasker av typen Versflo og Jupiter. En batteriturbo filtrerer luften rundt brukeren og er
                    enkel å justere og bruke.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Støvmasker</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Effektive støvmasker for beskyttelse mot trestøv og partikler. Komfortable masker for langvarig
                    bruk.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Hansker</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Beskyttelseshansker for arbeid med kjemikalier og oljer. Gir god beskyttelse og fingerfølelse.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Hørselsvern</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Beskyttelse mot støy fra maskiner. Komfortable hørselsvern for langvarig bruk i støyende miljøer.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <Button className="mt-6 bg-primary hover:bg-primary/90">Se alt verneutstyr</Button>
            </div>
          </div>
        </section>

        {/* Tilbehør Section */}
        <section id="tilbehør" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1541533848490-bc8115cd6522?q=80&w=800&auto=format&fit=crop"
                alt="Tilbehør"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Tilbehør og Sparkling</h2>
              <p className="mb-4">
                Har du sprekker og hull i gulvet, eller kanskje du vil lage et klassisk skipsgulv med nater har vi en
                løsning til deg. Våre sparkel og fugeprodukter tetter og forsegler sprekker og hull på en enkel måte.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Bona Gap Master</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Akrylbasert fugemasse til fylling av sprekker og huller i tregulv og parkett. Kan slipes og
                    behandles med alle typer olje og lakk.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Bona Mix & Fill Pluss</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vannbasert sparkelmasse med høyt tørrstoffinnhold for rask og effektiv fylling av sprekker og hulrom
                    i tregulvet.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Classic Natemasse</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Brukes til produksjon av klassiske skipsgulv med nater. MS-polymerbasert med unik strekkevne som
                    ikke slipper selv ved større bevegelser.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Reparasjonssett for parkett</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Omfattende sett for reparasjon av skader, hakk og merker i alle typer treverk og
                    overflatebehandlinger.
                  </p>
                  <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                    Se produkter <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <Button className="mt-6 bg-primary hover:bg-primary/90">Se alt tilbehør</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

