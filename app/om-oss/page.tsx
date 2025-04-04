import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Om Oss | Gulvkompagniet AS",
  description:
    "Lær mer om Gulvkompagniet AS, Norges ledende leverandør av utstyr og rekvisita til profesjonell gulvbehandling siden 1988.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Om Gulvkompagniet AS</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Norges ledende leverandør med over 30 års erfaring innen utstyr og rekvisita for profesjonelle gulvfagfolk.
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
                TOTALLEVERANDØR TIL GULVSLIPEBRANSJEN
              </h2>
              <p className="mb-4">
                Gulvkompagniet ble etablert i 1988 som totalleverandør til gulvslipere. Vår forretningsidé er å være en
                service-bedrift for profesjonelle utøvere i bransjen, og vi arbeider fortløpende med utvikling og
                forbedring av produkter og metoder som kommer våre kunder til gode i form av en enklere og mer effektiv
                hverdag. Etter hvert har produktspekteret blitt utvidet til også å omfatte maskiner og rekvisita
                spesialisert for utleievirksomheter, samt til sliping og behandling av fleksible gulv som linoleum,
                vinyl, gummi etc.
              </p>
              <p className="mb-4">
                Gulvkompagniet er Norges ledende leverandør til profesjonelle gulvslipere. Vi markedsfører kun
                kvalitetsvarer som foruten våre egne varemerker, omfatter produkter fra 3M, SIA, Bona, Osmo m.fl. Vi
                besitter videre en unik kompetanse på gulvsliping og gulvbehandling i sin alminnelighet, noe som er til
                uvurderlig støtte for våre kunder og deres oppdragsgivere. Vi har normalt alle varer på lager til enhver
                tid og opplever kun unntaksvis utsolgt-situasjoner. Våre kunder behøver derfor kun i beskjeden grad ha
                eget lager. Stort sett alle ordre leveres påfølgende virkedag i hele Sør-Norge opp til Trondheim.
                Østlandsområdet dekkes samme dag med budbiler.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Considerations */}
        <section className="mb-16" id="bærekraft">
          <h2 className="text-2xl font-bold mb-6">Miljøhensyn</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="mb-4">
                Miljøhensyn er viktige bestanddeler i våre beslutningsprosesser. Våre produkter, service, metoder og
                lokaler velges og vedlikeholdes ut fra det beste for miljøet. LIkeledes har våre høykvalitets produkter
                svært lavt innhold av løsemidler og giftstoffer samt lang holdbarhet, noe som genererer mindre avfall og
                avgasser.
              </p>
              <p className="mb-4">
                Sliping, rebehandling og vedlikehold av gulv er noe av det beste du kan gjøre for miljøet. Faktisk kan
                du ved sliping og behandling av et tregulv spare 79% CO² og 95% energi i forhold til å legge et nytt.
                For et fleksibelt gulv som linolueum, PVC eller vinyl etc er besparelsen hele 90% CO² og 90% energi i
                forhold til å legge et nytt*. Gjenbruk generer også svært lite avfall.
              </p>
              <p className="mb-4">
                Gulvkompagniet har som målsetning å være en smidig aktør som på kort tid fanger opp trender i tiden -
                alltid med våre kunders ønsker og behov for øye. Allikevel setter vi vår ære i å opprettholde knowhow og
                produkter med rot i tradisjonelle, norske håndverkstradisjoner.
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

        {/* Value Proposition */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Velger du Gulvkompagniet får du:</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li className="text-lg">Profesjonelle produkter tilpasset profesjonelle brukere</li>
              <li className="text-lg">Alt en gulvsliper trenger på ett sted</li>
              <li className="text-lg">Alltid veiledning av fagfolk</li>
              <li className="text-lg">Gode priser</li>
              <li className="text-lg">Rask levering og rask service</li>
              <li className="text-lg">Miljøtilpassede produktalternativer til de fleste gulvoppgaver</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-8">
              * I følge undersøkelse utført av IVL Swedish Environmental Research Institute 2020.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

