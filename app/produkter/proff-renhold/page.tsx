import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Download } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Proff renhold | Gulvkompagniet AS",
  description:
    "Profesjonelle rengjørings- og vedlikeholdsprodukter for ulike gulvtyper. Riktig vedlikehold forlenger gulvets levetid og bevarer dets utseende.",
}

export default function ProffRenholdPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Proff renhold</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Moderne gulvbehandlinger som olje og hardvoksolje krever spesifikke rengjørings- og vedlikeholdsmetoder.
          Gulvkompagniet tilbyr et komplett utvalg av maskiner og produkter for profesjonelt renhold, med fokus på
          miljøvennlige løsninger fra ledende leverandører som Bona.
        </p>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Riktig vedlikehold er avgjørende</h2>
            <p className="mb-4">
              Moderne gulvbehandlinger som olje og hardvoksolje krever andre rengjørings- og vedlikeholdsmetoder enn
              eldre lakkerte gulv. Feil vedlikehold kan føre til skader på gulvet og misfornøyde kunder.
            </p>
            <p className="mb-4">
              Gulvkompagniet samarbeider tett med Bona, som er ledende innen miljøvennlige rengjørings- og
              vedlikeholdsprodukter for gulv. Vi tilbyr et komplett utvalg av maskiner og produkter for profesjonelt
              renhold, tilpasset ulike gulvtyper og behov.
            </p>
            <p className="mb-4">
              Kompetanse er nøkkelen til vellykket gulvvedlikehold. Vårt team har lang erfaring og kan gi råd om riktige
              metoder og produkter for dine spesifikke gulv.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
              alt="Profesjonelt gulvrenhold av tregulv"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Maintenance Guides Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Vedlikeholdsinstrukser</h2>
          <p className="mb-6">
            Vi har utarbeidet detaljerte vedlikeholdsinstrukser for ulike gulvtyper. Disse kan lastes ned som PDF-filer
            og inneholder viktig informasjon om riktig rengjøring og vedlikehold.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lakkerte gulv */}
            <Card>
              <CardHeader>
                <CardTitle>Lakkerte gulv</CardTitle>
                <CardDescription>Vedlikeholdsinstruks for gulv behandlet med lakk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Innhold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Daglig rengjøring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Periodisk vedlikehold</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Anbefalte produkter</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="https://gulvkompagniet.com/Renhold/Vedlikholdsinstruks%20lakkertegulv_16_NO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Last ned PDF
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Hardvoksoljet gulv */}
            <Card>
              <CardHeader>
                <CardTitle>Hardvoksoljet gulv</CardTitle>
                <CardDescription>Vedlikeholdsinstruks for gulv behandlet med hardvoksolje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Innhold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Daglig rengjøring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Periodisk vedlikehold</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Anbefalte produkter</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="https://gulvkompagniet.com/Renhold/Vedlikholdsinstruks%20hardvoksoljetgulv_16_NO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Last ned PDF
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Oljet gulv */}
            <Card>
              <CardHeader>
                <CardTitle>Oljet gulv</CardTitle>
                <CardDescription>Vedlikeholdsinstruks for gulv behandlet med olje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Innhold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Daglig rengjøring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Periodisk vedlikehold</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Anbefalte produkter</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="https://gulvkompagniet.com/Renhold/Vedlikholdsinstruks%20oljetgulv_16_NO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Last ned PDF
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Idrettsgulv */}
            <Card>
              <CardHeader>
                <CardTitle>Idrettsgulv</CardTitle>
                <CardDescription>Vedlikeholdsinstruks for idrettsgulv</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Innhold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Daglig rengjøring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Periodisk vedlikehold</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Spesielle hensyn for idrettsgulv</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="https://gulvkompagniet.com/Renhold/Vedlikholdsinstruks%20sportsgulv_16_NO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Last ned PDF
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Terrasser */}
            <Card>
              <CardHeader>
                <CardTitle>Terrasser</CardTitle>
                <CardDescription>Vedlikeholdsinstruks for utendørs terrasser</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Innhold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Sesongmessig rengjøring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Vedlikehold av oljebehandlede terrasser</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Beskyttelse mot vær og vind</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="https://gulvkompagniet.com/Renhold/Vedlikholdsinstruks%20terrasser_16%20NO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Last ned PDF
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Bona Maintenance Program */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Bona Vedlikeholdsprogram</h2>
              <p className="mb-4">
                Bona har utviklet et komplett vedlikeholdsprogram for ulike gulvtyper. Programmet inkluderer produkter
                for daglig rengjøring, periodisk vedlikehold og oppfriskning av slitte gulv.
              </p>
              <p className="mb-6">
                Bona fokuserer på miljøvennlige produkter som er skånsomme mot både gulvet og miljøet. Deres produkter
                er spesielt utviklet for å bevare gulvets utseende og forlenge dets levetid.
              </p>

              <Link href="https://gulvkompagniet.com/Gulvbehandling/Bona/vedlikholdprogram%20bona/">
                <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                  Se Bona Vedlikeholdsprogram
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=500&auto=format&fit=crop"
                  alt="Bona vedlikeholdsprodukter for tregulv"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cleaning Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips for profesjonelt renhold</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Daglig rengjøring</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>
                    Bruk tørre rengjøringsmetoder som støvsuging eller tørrmopping for å fjerne løst smuss og støv
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Ved våtrengjøring, bruk så lite vann som mulig og tørk opp umiddelbart</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Bruk pH-nøytrale rengjøringsmidler spesielt utviklet for gulvtypen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Unngå universalrengjøringsmidler som kan skade gulvoverflaten</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Periodisk vedlikehold</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Utfør periodisk vedlikehold i henhold til produsentens anbefalinger</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>For oljebehandlede gulv, påfør vedlikeholdsolje når gulvet begynner å se tørt ut</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>For lakkerte gulv, bruk polish eller refresher for å fornye overflaten</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Vurder profesjonell dyprengjøring for sterkt tilsmussede gulv</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-background rounded-lg border p-8">
          <h2 className="text-xl font-semibold mb-4">Trenger du hjelp med gulvrenhold?</h2>
          <p className="text-muted-foreground mb-6">
            Vårt team har lang erfaring med profesjonelt gulvrenhold og kan hjelpe deg med å finne de riktige produktene
            og metodene for dine gulv. Kontakt oss for råd, priser og tilgjengelighet.
          </p>
          <Link href="/kontakt">
            <Button className="bg-primary hover:bg-primary/90">Kontakt oss</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

