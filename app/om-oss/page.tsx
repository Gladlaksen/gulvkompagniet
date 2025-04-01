import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Om Oss | Gulvkompagniet AS",
  description:
    "Lær mer om Gulvkompagniet AS, Norges ledende leverandør av utstyr og rekvisita til profesjonell gulvbehandling.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Om Gulvkompagniet AS</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet AS er Norges ledende leverandør med over 30 års erfaring innen utstyr og rekvisita for
          profesjonelle gulvfagfolk.
        </p>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=800&auto=format&fit=crop"
                alt="Gulvkompagniet butikk"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4" id="historie">
                Vår Historie
              </h2>
              <p className="mb-4">
                Siden etableringen har Gulvkompagniet AS vokst til å bli Norges ledende leverandør av utstyr og
                rekvisita til profesjonell sliping, legging og behandling av tregulv og parkett.
              </p>
              <p className="mb-4">
                Med over 30 års erfaring i bransjen har vi opparbeidet en unik kompetanse og forståelse for hva
                profesjonelle gulvfagfolk trenger for å levere kvalitetsarbeid.
              </p>
              <p>
                Vi tilbyr kvalitetsprodukter fra ledende merkevarer og egenutviklede løsninger, kombinert med solid
                fagkunnskap og pålitelig service.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Våre Verdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
              <p className="text-muted-foreground">
                Vi fører kun produkter av høyeste kvalitet som vi selv kan stå inne for. Våre egenproduserte
                slipeartikler gjennomgår strenge kvalitetskontroller.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kunnskap</h3>
              <p className="text-muted-foreground">
                Vi har over 30 års erfaring i bransjen og deler gjerne vår kunnskap. Våre medarbeidere er fagfolk som
                forstår dine behov og utfordringer.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pålitelighet</h3>
              <p className="text-muted-foreground">
                Vi leverer når vi sier vi skal levere. Våre kunder kan stole på at vi er der når de trenger oss, med
                produkter som holder det vi lover.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16" id="team">
          <h2 className="text-2xl font-bold mb-6 text-center">Vårt Team</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vårt dedikerte team består av erfarne fagfolk med solid kunnskap om gulvbransjen. Vi er her for å hjelpe deg
            med å finne de beste løsningene for dine prosjekter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((person) => (
              <div key={person} className="bg-background rounded-lg p-4 border text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=Team+${person}`}
                    alt={`Teammedlem ${person}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">Navn Navnesen</h3>
                <p className="text-sm text-muted-foreground">Stillingstittel</p>
              </div>
            ))}
          </div>
        </section>

        {/* Careers */}
        <section className="mb-16" id="karriere">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Karriere hos Gulvkompagniet</h2>
            <p className="mb-4">
              Vi er alltid på utkikk etter dyktige medarbeidere som deler vår lidenskap for kvalitet og kundeservice.
              Hos Gulvkompagniet får du jobbe i et faglig sterkt miljø med gode utviklingsmuligheter.
            </p>
            <p className="mb-6">
              For tiden har vi ingen ledige stillinger, men vi tar gjerne imot åpne søknader. Send din CV og søknad til
              info@gulvkompagniet.no.
            </p>
          </div>
        </section>

        {/* Sustainability */}
        <section id="bærekraft">
          <h2 className="text-2xl font-bold mb-6">Bærekraft</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="mb-4">
                Hos Gulvkompagniet tar vi miljøansvar på alvor. Vi jobber kontinuerlig med å finne og tilby produkter
                som er mer miljøvennlige, samtidig som de oppfyller de høye kvalitetskravene våre kunder forventer.
              </p>
              <p className="mb-4">
                Vi fokuserer på produkter med lavt VOC-innhold og miljøsertifiseringer. Vårt mål er å bidra til en mer
                bærekraftig gulvbransje gjennom bevisste produktvalg og god rådgivning.
              </p>
              <p>
                Gjennom vårt samarbeid med ledende leverandører som Bona, Osmo og Rubio Monocoat, kan vi tilby
                miljøvennlige alternativer som ikke går på kompromiss med kvalitet eller holdbarhet.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
                alt="Bærekraftig gulvbehandling"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full aspect-4/3"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

