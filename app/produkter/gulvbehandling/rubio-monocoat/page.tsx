import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, FileText } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Rubio Monocoat Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Rubio Monocoat miljøvennlige trebeskyttelsesprodukter basert på avansert molekylbindingsteknologi.",
}

export default function RubioMonocoatPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Rubio Monocoat</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ledende merke innen miljøvennlig trebeskyttelse av høy kvalitet. Basert på avansert
              molekylbindingsteknologi som binder til øverste fibre, uten film eller metning.
            </p>
          </div>
          <Link href="/produkter/gulvbehandling">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til Gulvbehandling
            </Button>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Produktfordeler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
            <li>Holdbar farge og beskyttelse i ett enkelt strøk</li>
            <li>Brukervennlig uten skjøter/startmerker</li>
            <li>Enkelt å vedlikeholde</li>
            <li>Mindre riper/skader enkle å reparere</li>
            <li>100 % naturlige ingredienser, 0 % VOC</li>
            <li>Inneholder ikke vann eller løsemidler</li>
            <li>Stort fargeutvalg (40+ standardfarger)</li>
            <li>Kan brukes på nesten alle tretyper (massivt, finer, MDF)</li>
            <li>Slitesterk</li>
          </ul>
        </div>

        <Tabs defaultValue="products" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="products">Produkter</TabsTrigger>
            <TabsTrigger value="maintenance">Vask og vedlikehold</TabsTrigger>
            <TabsTrigger value="stain-removal">Flekkfjerning</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* RMC Oil Plus 2C */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-slate-50 dark:bg-slate-900">
                  <CardTitle>RMC Oil Plus 2C</CardTitle>
                  <CardDescription>
                    Nyeste generasjon oljebehandling som farger og beskytter i ett enkelt lag. Kombinasjon av olje (A)
                    og akselerator (B).
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Farger og beskytter i ett lag</li>
                      <li>40 standardfarger</li>
                      <li>Fremhever treets naturlige utseende/uttrykk</li>
                      <li>Miljøvennlig: 0 % VOC</li>
                      <li>Inneholder ikke vann eller løsemidler</li>
                      <li>Enkelt å vedlikeholde</li>
                      <li>Ingen skjøter eller startmerker</li>
                      <li>Minimalt forbruk: 30–50 m²/liter</li>
                      <li>Kan brukes på nesten alle tretyper (møbler/gulv)</li>
                      <li>Svært slitesterk</li>
                      <li>Vann- og varmefast</li>
                      <li>Herder svært raskt (80 % på to dager)</li>
                      <li>Kort 'tørr' vedlikeholdsperiode (rengjøring etter 5 dager)</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Nesten alle tretyper</Badge>
                      <Badge variant="outline">Møbler</Badge>
                      <Badge variant="outline">Gulv</Badge>
                      <Badge variant="outline">Kjøkken</Badge>
                      <Badge variant="outline">Bad</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/instruksjon_op2c.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Brukerveiledning
                      </Button>
                    </a>
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/TDS_RMC_OilPlus2C_CompA_NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Teknisk datablad
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>

              {/* RMC Precolor Easy */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-slate-50 dark:bg-slate-900">
                  <CardTitle>RMC Precolor Easy</CardTitle>
                  <CardDescription>
                    Forbehandling for innfarging av tre for å skape unike effekter og kontraster.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>14 farger (kan blandes individuelt)</li>
                      <li>Enkel å bruke</li>
                      <li>Gir jevnt resultat</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <p className="text-sm">Forbehandling før Rubio Monocoat oljebehandling</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/TDS_RMC_Precolor_Easy_NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Teknisk datablad
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="maintenance">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* RMC Universal Maintenance Oil */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Universal Maintenance Oil</CardTitle>
                  <CardDescription>
                    Vedlikeholdsprodukt til oppfrisking av tre behandlet med RMC Oil, samt oppgradering av andre oljede
                    overflater.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Universell bruk (alle oljebehandlede overflater, visse lakkerte)</li>
                      <li>Frisker opp overflaten</li>
                      <li>Øker motstandsdyktighet mot væske</li>
                      <li>Tilfører silkematt glans</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Vedlikehold av oljede overflater</li>
                      <li>Områder med mye trafikk (offentlige steder, kontorer, restauranter, hoteller etc.)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Farger</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Pure</Badge>
                      <Badge variant="outline">White</Badge>
                      <Badge variant="outline">Black</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RMC Refresh Eco */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Refresh Eco</CardTitle>
                  <CardDescription>
                    Bruksklart, spraybart produkt som frisker opp og gjenoppretter alle treoverflater behandlet med
                    olje.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bruksklar spray</li>
                      <li>Omgående oppfrisking</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Når overflaten føles tørr</li>
                      <li>Kan påføres flere ganger årlig på visse områder (avhengig av slitasje)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* RMC Soap */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Soap</CardTitle>
                  <CardDescription>
                    Vedlikeholdssåpe for regelmessig rengjøring av oljebehandlede treoverflater.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Fjerner effektivt smuss og fett</li>
                      <li>Bevarer treets matte, naturlige utseende</li>
                      <li>Konsentrert (økonomisk i bruk)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <p className="text-sm">Regelmessig rengjøring av oljebehandlede overflater</p>
                  </div>
                </CardContent>
              </Card>

              {/* RMC Surface Care */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Surface Care</CardTitle>
                  <CardDescription>Praktisk, bruksklar variant av RMC Soap.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bruksklar spray</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <p className="text-sm">Rask rengjøring av mindre gulvarealer og flekker (tregulv, bord etc.)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stain-removal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* RMC Grease Remover */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Grease Remover</CardTitle>
                  <CardDescription>Flekkerfjerner for fettflekker.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Fettflekker (olivenolje, frityrolje, chips, olje etc.)</li>
                      <li>Hælmerker</li>
                      <li>Gulvpolish</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/TDS_RMC_GreaseRemover_NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Teknisk datablad
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>

              {/* RMC Limespot Remover */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Limespot Remover</CardTitle>
                  <CardDescription>Flekkerfjerner for kalkflekker og andre basiske flekker.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Kalkflekker</li>
                      <li>Basiske flekker (urin, gjødsel, rust, kjølevæske etc.)</li>
                      <li>Hvite ringer</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/TDS_RMC_LimeSpotRemover_NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Teknisk datablad
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>

              {/* RMC Tannin Remover */}
              <Card>
                <CardHeader>
                  <CardTitle>RMC Tannin Remover</CardTitle>
                  <CardDescription>Flekkerfjerner for svarte flekker / garvesyreflekker.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Svarte flekker/garvesyreflekker (ringer fra bokser, potter etc.)</li>
                      <li>Vannflekker på parkett</li>
                      <li>Forvitret treverk (porter, dører, vegger etc.)</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://gulvkompagniet.com/Datablader%20Rubio/TDS_RMC_Tannin%20Remover_NO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Teknisk datablad
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  )
}

