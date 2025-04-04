import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { AlertTriangle, Phone, Mail } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Brukte maskiner | Gulvkompagniet AS",
  description:
    "Brukte gulvslipemaskiner til salgs. Finn gode tilbud på kvalitetsmaskiner fra pensjonerte fagfolk eller bedrifter som nedskalerer.",
}

export default function BrukteMaskinerPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1280&auto=format&fit=crop"
          alt="Brukte gulvslipemaskiner"
          fill
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 flex items-center h-full">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Brukte maskiner</h1>
            <p className="text-lg max-w-3xl">
              Finn kvalitetsmaskiner til gode priser fra pensjonerte fagfolk eller bedrifter som nedskalerer.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            Gulvslipemaskiner er svært holdbare og varer ofte en hel karriere. Brukte maskiner blir tilgjengelige når
            eiere pensjonerer seg, forlater bransjen eller nedskalerer, noe som kan gi potensielt gode tilbud for deg
            som kjøper.
          </p>

          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            Gulvkompagniet tilbyr våre kunder tjenesten å liste deres brukte maskiner for salg på denne siden, helt
            gratis. Dette gir selgere en plattform for å nå potensielle kjøpere, og kjøpere får muligheten til å finne
            kvalitetsmaskiner til en rimeligere pris.
          </p>
        </div>

        {/* Disclaimer */}
        <Alert className="mb-12 bg-amber-50 border-amber-200">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Informasjon om kjøp/salg</AlertTitle>
          <AlertDescription className="text-amber-700">
            Gulvkompagniet er ikke part i et eventuelt kjøp/salg som følge av disse oppføringene. Alle henvendelser må
            rettes direkte til selger. Betaling håndteres direkte mellom partene. Gulvkompagniet påtar seg intet ansvar
            for betaling, feil, mangler, levering osv. Oppføringer forblir på siden til vi får beskjed om at maskinen er
            solgt.
          </AlertDescription>
        </Alert>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>For selgere</CardTitle>
              <CardDescription>Slik lister du din brukte maskin</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Kontakt oss med informasjon om maskinen du ønsker å selge</li>
                <li>Inkluder bilder, tekniske detaljer, tilstand og prisforslag</li>
                <li>Vi lister maskinen på denne siden uten kostnad</li>
                <li>Interesserte kjøpere kontakter deg direkte</li>
                <li>Gi oss beskjed når maskinen er solgt, så fjerner vi annonsen</li>
              </ol>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send oss informasjon
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For kjøpere</CardTitle>
              <CardDescription>Slik kjøper du en brukt maskin</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Bla gjennom tilgjengelige maskiner på denne siden</li>
                <li>Kontakt selgeren direkte via oppgitt kontaktinformasjon</li>
                <li>Avtal visning, test og eventuelt kjøp direkte med selger</li>
                <li>Betaling og levering avtales mellom kjøper og selger</li>
                <li>Vær oppmerksom på at Gulvkompagniet ikke er involvert i transaksjonen</li>
              </ol>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Kontakt oss for spørsmål
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Fordeler med brukte maskiner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Prisfordel</h3>
              <p className="text-muted-foreground">
                Brukte maskiner koster betydelig mindre enn nye, noe som gir en lavere terskel for å komme i gang eller
                utvide maskinparken.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Kvalitet</h3>
              <p className="text-muted-foreground">
                Profesjonelle gulvslipemaskiner er bygget for å vare, og mange brukte maskiner har fortsatt mange års
                levetid igjen.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Miljøvennlig</h3>
              <p className="text-muted-foreground">
                Gjenbruk av maskiner er bærekraftig og reduserer behovet for produksjon av nye maskiner.
              </p>
            </div>
          </div>
        </div>

        {/* Available Machines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tilgjengelige maskiner</h2>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4">Ingen maskiner tilgjengelig for øyeblikket</h3>
            <p className="text-muted-foreground mb-6">
              Det er for tiden ingen brukte maskiner til salgs. Sjekk igjen senere eller kontakt oss hvis du leter etter
              noe spesifikt.
            </p>
            <Link href="/kontakt">
              <Button variant="outline">Kontakt oss</Button>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-background rounded-lg border p-8">
          <h2 className="text-xl font-semibold mb-4">Har du spørsmål om brukte maskiner?</h2>
          <p className="text-muted-foreground mb-6">
            Vårt team har lang erfaring med gulvslipemaskiner og kan hjelpe deg med å finne riktig maskin for dine
            behov. Vi kan også gi råd om hva du bør se etter når du kjøper brukt utstyr.
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

