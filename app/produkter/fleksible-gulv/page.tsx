import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText, Check, ArrowRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Fleksible gulv | Gulvkompagniet AS",
  description:
    "Komplette systemer for renhold, beskyttelse, dyprengjøring og rehabilitering av fleksible gulv som vinyl, linoleum, PVC og gummi.",
}

export default function FleksibleGulvPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Fleksible gulv</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Gulvkompagniet tilbyr komplette systemer for renhold, beskyttelse, dyprengjøring og rehabilitering av
          fleksible gulv som vinyl, linoleum, PVC og gummi. Våre løsninger gir nytt liv til slitte gulv til en brøkdel
          av kostnaden ved utskifting.
        </p>

        {/* System Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Bona System for Fleksible Gulv</h2>
              <p className="mb-4">
                Bona System for Fleksible Gulv tilbyr en komplett løsning for renhold, beskyttelse, dyprengjøring og
                rehabilitering av fleksible gulv som et kostnadseffektivt alternativ til utskifting. Systemet kan
                gjenopprette utseendet, endre farge og legge til dekorative elementer.
              </p>
              <p className="mb-6">
                Ved å bruke Bona PowerScrubber, Diamond Abrasives og spesifikke belegg/rengjøringsmidler, kan vi tilby
                en løsning som er både raskere (~50%) og rimeligere enn utskifting, samtidig som det gir betydelige
                miljøfordeler.
              </p>

              <h3 className="font-semibold mb-3">Fordeler</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {["Lavere kostnad enn utskifting", "Mindre nedetid", "Miljøvennlig", "Tilpasning (farge, dekor)"].map(
                  (benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                <h3 className="font-semibold mb-4">Prosesser</h3>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Renhold",
                      description: "Regelmessig rengjøring for å bevare kvalitet og forlenge levetiden",
                      link: "/produkter/fleksible-gulv/renhold",
                    },
                    {
                      name: "Beskyttelse",
                      description: "Gjenoppretting og beskyttelse av gulvflater",
                      link: "/produkter/fleksible-gulv/beskyttelse",
                    },
                    {
                      name: "Dyprengjøring",
                      description: "Fjerning av gjenstridige flekker og rengjøringsmiddelrester",
                      link: "/produkter/fleksible-gulv/dyprengjoring",
                    },
                    {
                      name: "Rehabilitering",
                      description: "Gi nytt liv til skadede og svært slitte gulv",
                      link: "/produkter/fleksible-gulv/rehabilitering",
                    },
                  ].map((process, i) => (
                    <li key={i}>
                      <Link href={process.link} className="flex items-start group">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <span className="font-medium group-hover:text-primary transition-colors">{process.name}</span>
                          <p className="text-sm text-muted-foreground">{process.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="processes" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="processes">Prosesser</TabsTrigger>
            <TabsTrigger value="products">Produkter</TabsTrigger>
            <TabsTrigger value="sports">Idrettsgulv</TabsTrigger>
          </TabsList>

          {/* Processes Tab */}
          <TabsContent value="processes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Renhold Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Renhold</CardTitle>
                  <CardDescription>
                    Regelmessig rengjøring for å bevare kvalitet, holdbarhet og forlenge levetiden til elastiske gulv.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-3">Produkter og verktøy</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Clean R50 (daglig/intensiv rengjøring)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Clean R60 (rutinemessig rengjøring + pleie)</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mb-3">Fordeler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Opprettholder rent og sunt innemiljø</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Effektiv rengjøring</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/produkter/fleksible-gulv/renhold">
                    <Button variant="outline" className="flex items-center gap-2">
                      Les mer
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Beskyttelse Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Beskyttelse</CardTitle>
                  <CardDescription>
                    Gjenoppretter elastiske gulvflater ved skuring/rensing etterfulgt av et beskyttende lag.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-3">Produkter og verktøy</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Remove R</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona FlexiSand / Bona PowerScrubber</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Shield R</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mb-3">Fordeler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Forbedrer glans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Forlenger overflatens levetid</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/produkter/fleksible-gulv/beskyttelse">
                    <Button variant="outline" className="flex items-center gap-2">
                      Les mer
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Dyprengjøring Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Dyprengjøring</CardTitle>
                  <CardDescription>
                    Prosess for å fjerne gjenstridige flekker og rengjøringsmiddelrester for å gjenopprette friskhet og
                    utseende.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-3">Produkter og verktøy</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona PowerScrubber</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Remove R</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mb-3">Bruksområder</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>PVC, Linoleum og andre elastiske gulv</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Gulv med gjenstridige flekker og smuss</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/produkter/fleksible-gulv/dyprengjoring">
                    <Button variant="outline" className="flex items-center gap-2">
                      Les mer
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Rehabilitering Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Rehabilitering</CardTitle>
                  <CardDescription>Prosess for å gi skadede og svært slitte elastiske gulv nytt liv.</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-3">Produkter og verktøy</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Diamond Abrasives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona PowerScrubber</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Pure</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona Pure Colour (valgfritt)</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mb-3">Fordeler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Raskere (ca 50%) og billigere enn utskifting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Mer miljøvennlig</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Mulighet for helt ny gulvopplevelse</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/produkter/fleksible-gulv/rehabilitering">
                    <Button variant="outline" className="flex items-center gap-2">
                      Les mer
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <div className="space-y-8">
              {/* Bona Pure HD */}
              <div className="bg-background rounded-lg border p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop"
                        alt="Bona Pure HD"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <h2 className="text-2xl font-semibold mb-2">Bona Pure HD</h2>
                    <p className="text-muted-foreground mb-4">
                      Hard, elastisk og slitesterk PU coating for behandling av elastiske gulvbelegg. Vannbasert, klar,
                      ikke-gulnende formel.
                    </p>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          "100% Polyurethane (PU)",
                          "Hard-elastisk",
                          "Slitesterk",
                          "Ny HD versjon: Bedre slitestyrke, raskere herding",
                          "Vannbasert",
                          "Klar",
                          "Ikke-gulnende",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Sertifiseringer</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">ST1 godkjenning (bedre inne-/arbeidsmiljø)</Badge>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Dokumenter</h3>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="https://gulvkompagniet.com/Datablader%20Bona/Bona%20Pure%20HD.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Datablad
                        </a>
                        <a
                          href="https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Pure%20HD%20-%20Norway%20%28Norwegian%20%28Bokm%C3%A5l%29%20%28NO%29%29.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Sikkerhetsdatablad
                        </a>
                        <a
                          href="https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Pure%20HD%20Hardener%20-%20Norway%20%28Norwegian%20%28Bokm%C3%A5l%29%20%28NO%29%29.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Sikkerhetsdatablad Herder
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bona Pure Colour */}
              <div className="bg-background rounded-lg border p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=500&auto=format&fit=crop"
                        alt="Bona Pure Colour"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <h2 className="text-2xl font-semibold mb-2">Bona Pure Colour</h2>
                    <p className="text-muted-foreground mb-4">
                      Hard-elastisk og slitesterk PU-basert maling for maling av elastiske gulvbelegg.
                    </p>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          "Rask påføring",
                          "Akselererte tørkeegenskaper",
                          "Tungt pigmentert (dekker ofte i ett lag)",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tungt trafikkerte kommersielle og industrielle områder</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Farger</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">8 standardfarger</Badge>
                        <Badge variant="outline">Kan bestilles i hele RAL og NCS fargepalett</Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Merknader</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-muted-foreground">Krever Bona R Hardener</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Dokumenter</h3>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="https://gulvkompagniet.com/Datablader%20Bona/Bona%20Pure%20Colour%20NO.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Datablad
                        </a>
                        <a
                          href="https://gulvkompagniet.com/Sikkerhet%20Bona/SDS%20Bona%20Pure%20Colour%20-%20NO.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Sikkerhetsdatablad
                        </a>
                        <a
                          href="https://gulvkompagniet.com/Resilient/SDS%20Bona%20R%20Hardener%20-%20NO.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Sikkerhetsdatablad Herder
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bona LinoPrime */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona LinoPrime</CardTitle>
                    <CardDescription>
                      Hurtigtørking PU-basert primer for porefylling av dyprengjorte og slipte linoleumgulv.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Hurtigtørkende</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Forbedrer utjevning og glatthet for PU coating</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Linoleumsgulv (etter dyprengjøring/sliping)</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksanvisning</h3>
                      <p className="text-sm">Påfølgende PU coating kan vanligvis påføres etter 1 time</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Merknader</h3>
                      <p className="text-sm text-muted-foreground">Krever Bona LinoPrime Herder</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20LinoPrime%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                      <a
                        href="https://gulvkompagniet.com/Resilient/SDS%20Bona%20LinoPrime%20Herder%20-%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad Herder
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bona Remove R */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Remove R</CardTitle>
                    <CardDescription>
                      Rengjøringsmiddel for å fjerne polish, smuss og rester etter gammel såpe fra elastiske gulvbelegg.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Elastiske gulv (PVC, Linoleum, LVT, Elastomer)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Fjerning av polish og forurensninger (vedlikehold eller før Bona Pure behandling)</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Remove%20R%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Remove%20R%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bona PowerRemove R */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona PowerRemove R</CardTitle>
                    <CardDescription>
                      Meget aggressivt rengjøringsmiddel for å fjerne voks, smuss og gamle rester av
                      behandlingsrekvisita.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Meget aggressivt</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Raskt og effektivt</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Elastiske gulvbelegg (PVC, Linoleum, Vinyl, Gummi)</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksanvisning</h3>
                      <p className="text-sm">Bruk hvis Bona Remove R ikke er tilstrekkelig.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20PowerRemove%20R%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20PowerRemove%20R%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bona Clean R50 */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Clean R50</CardTitle>
                    <CardDescription>
                      Høykonsentrert, lett alkalisk rengjøringsmiddel for daglig renhold og fjerning av intensivt smuss.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Daglig renhold av elastiske gulv behandlet med Bona Fleksibelt System</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksanvisning</h3>
                      <p className="text-sm">Passer for manuell bruk og automatiske rengjøringsmaskiner.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Clean%20R50%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Clean%20R50%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              {/* More Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bona Clean R60 */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Clean R60</CardTitle>
                    <CardDescription>
                      Mildt, vannløselig vedlikeholdsprodukt for rutinemessig rengjøring og pleie.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Rengjør og etterlater tynn, beskyttende film</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Gir økt glans og holdbarhet</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Kompatibel med Bona Pure system</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Rutinemessig rengjøring og pleie av elastiske gulv</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Clean%20R60%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                      <a
                        href="https://gulvkompagniet.com/Resilient/Bona%20Clean%20R60%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Sikkerhetsdatablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bona Shield R */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Shield R</CardTitle>
                    <CardDescription>
                      Klart-til-bruk, vannbasert produkt som danner et beskyttende lag på elastiske gulv.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Klar til bruk</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Vannbasert</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Forbedrer glans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Forlenger overflatens levetid</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Beskyttelse av elastiske gulv (etter rensing med Bona Remove R)</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Merknader</h3>
                      <p className="text-sm text-muted-foreground">
                        Voksbasert produkt. Anbefales IKKE på gulv som senere skal behandles med Bona Pure eller Bona
                        Pure Paint pga. mulig vedheftsproblem.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Bona Creative Chips */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Creative Chips</CardTitle>
                    <CardDescription>
                      Dekorative flak for å skape unike designeffekter på elastiske gulv.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Skaper levende overflate</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Skjuler slitasje og smuss</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Skjuler ujevnheter og reparasjoner</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Brukes sammen med Bona Pure systemet</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Varianter</h3>
                      <p className="text-sm">Tre ulike fargekombinasjoner tilgjengelig</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Bona PU Filler */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona PU Filler</CardTitle>
                    <CardDescription>
                      2-komponent sparkelmasse for reparasjon av sprekker og hull i gulvbelegg.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>2-komponent polyestermasse</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Herder på 30 minutter</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Tilnærmet luktfri</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>God fyllevne</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <p className="text-sm">Reparasjon av sprekker/hull i gulvbelegg</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Merknader</h3>
                      <p className="text-sm text-muted-foreground">
                        Unikt blandemunnstykke gir automatisk korrekt blandingsforhold.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Datablader%20Bona/Bona%20Resilient%20PU%20Filler%20Sales%20Sheet%20-%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bona Fiber Pad */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bona Fiber Pad</CardTitle>
                    <CardDescription>Kraftige nylon pads med høyt innhold av slipemiddel.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Egenskaper</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Effektiv men skånsom</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Borrelåsfeste</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Meget holdbar</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Bruksområder</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Fjerning av voks og skitt på fleksible gulv</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>Kan brukes tørr eller med kjemiprodukter (Bona Remover/Power Remover)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Størrelser</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">150mm</Badge>
                        <Badge variant="outline">178mm</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://gulvkompagniet.com/Datablader%20Bona/Bona_Fiber_Pads_Sales_Sheet%20NO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Datablad
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Sports Floors Tab */}
          <TabsContent value="sports">
            <div className="bg-background rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Bona Idrettsgulv System</h2>
              <p className="text-muted-foreground mb-6">
                Metode for å rehabilitere syntetiske idrettsgulv i stedet for å skifte dem ut. Inkluderer sliping,
                reparasjon, farging (valgfritt) og ny PU toppstrøk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-medium mb-3">Produkter og verktøy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona SuperSport Pure HD (PU lakk)</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mt-4 mb-3">Fordeler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Halv pris vs utskifting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Halve tiden vs utskifting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Miljøvennlig</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Forbedrer friksjon/sikkerhet</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Standarder og godkjenninger</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Bona SuperSport Pure HD er godkjent for idrettsgulv</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Anbefalt av FIBA</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Greenguard sertifisert</span>
                    </li>
                  </ul>

                  <h3 className="font-medium mb-3">Dokumenter</h3>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://gulvkompagniet.com/Resilient/Bona_supersport_HD_Sales_Sheet%20NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Brosjyre - Bona SuperSport Pure Sport
                    </a>
                    <a
                      href="https://gulvkompagniet.com/Sportive%20Brochure%204%20page%20NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Brosjyre - Sportive
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop"
                  alt="Idrettsgulv"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Prosessen</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Grundig rengjøring av gulvet</li>
                  <li>Sliping med Bona Diamond Abrasives</li>
                  <li>Reparasjon av skader med Bona PU Filler</li>
                  <li>Påføring av Bona Pure Colour (valgfritt)</li>
                  <li>Påføring av Bona SuperSport Pure HD toppstrøk</li>
                  <li>Opptegning av banemerking</li>
                </ol>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="bg-background rounded-lg border p-8">
          <h2 className="text-xl font-semibold mb-4">Trenger du hjelp med fleksible gulv?</h2>
          <p className="text-muted-foreground mb-6">
            Vårt team har lang erfaring med behandling og rehabilitering av fleksible gulv. Vi kan hjelpe deg med å
            finne den beste løsningen for dine behov, enten det gjelder renhold, beskyttelse, dyprengjøring eller full
            rehabilitering. Kontakt oss for priser og tilgjengelighet.
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

