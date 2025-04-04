import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export const metadata = {
  title: "Nilfisk Støvsugere | Gulvkompagniet AS",
  description: "Profesjonelle Nilfisk støvsugere for håndverkere og gulvslipere",
}

export default function NilfiskStovsugere() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <Link href="/produkter/stovsugere" className="flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tilbake til støvsugere
        </Link>

        <h1 className="text-3xl font-bold mb-4">Nilfisk Støvsugere</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Nilfisk tilbyr robuste og pålitelige støvsugere som er spesielt populære blant håndverkere og gulvslipere.
        </p>

        <div className="rounded-lg border bg-background shadow-sm overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Nilfisk 930 UZ</h2>
            <p className="text-muted-foreground mb-6">
              Sannsynligvis Norges mest solgte støvsuger til håndverkere. Perfekt finstøvsuger for en gulvsliper.
            </p>

            <h3 className="font-medium mb-3">Egenskaper:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Meget god oppsugingsevne</li>
              <li>Kraftig og robust motor</li>
              <li>Store støvposer (15 liter)</li>
              <li>Kompakt design (velter ikke lett)</li>
              <li>Tilgjengelig med HEPA filter eller tradisjonell filterløsning</li>
              <li>Enkelt pose- og filterbytte</li>
              <li>Lett å transportere (lav vekt 7.5 kg)</li>
            </ul>

            <h3 className="font-medium mb-3">Bruksområder:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Håndverkere</li>
              <li>Gulvslipere (finstøvsuging)</li>
            </ul>

            <Link
              href="https://gulvkompagniet.com/Nilfisk-GD930-brosjyre.pdf"
              target="_blank"
              className="inline-flex items-center text-primary hover:underline"
            >
              <FileText className="mr-2 h-4 w-4" />
              Last ned brosjyre
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Kontakt oss for mer informasjon</h2>
          <p className="text-muted-foreground mb-4">
            Ønsker du mer informasjon om våre Nilfisk støvsugere eller vil du bestille? Kontakt oss for priser og
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

