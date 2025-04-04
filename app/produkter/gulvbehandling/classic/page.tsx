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
  title: "Classic Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Classic gulvbehandlingsprodukter, inkludert den populære Uretan Lakk og vannbaserte alternativer.",
}

export default function ClassicPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Classic Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Classic er en av Norges mest populære merker for gulvbehandling, kjent for sin høykvalitets Uretan Lakk
              som har vært Norges mest solgte lakk gjennom tidene.
            </p>
          </div>
          <Link href="/produkter/gulvbehandling">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til Gulvbehandling
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Classic Uretan Lakk (Oljebasert) */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900">
              <CardTitle>Classic Uretan Lakk (Oljebasert)</CardTitle>
              <CardDescription>
                Lys polyuretanbasert oljelakk for alle typer treverk. Norges mest solgte lakk gjennom tidene.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Inneholder lysfilter (hindrer UV-nedbryting)</li>
                  <li>Optimal beskyttelse mot fuktinntrenging</li>
                  <li>Høyt tørrstoffinnhold</li>
                  <li>Høy slitestyrke (Testet best av Teknologisk Institutt)</li>
                  <li>Fremhever treverkets spill og struktur</li>
                  <li>Gir oljens vakre glans og dybdevirkning</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Alle typer treverk</Badge>
                  <Badge variant="outline">Innendørs</Badge>
                  <Badge variant="outline">Utendørs</Badge>
                  <Badge variant="outline">Maritim bruk</Badge>
                </div>
              </div>

              <Tabs defaultValue="blank">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Glansgrader</h3>
                <TabsList className="mb-4">
                  <TabsTrigger value="blank">Blank</TabsTrigger>
                  <TabsTrigger value="halvblank">Halvblank</TabsTrigger>
                  <TabsTrigger value="boneglans">Boneglans</TabsTrigger>
                </TabsList>
                <TabsContent value="blank">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm mb-2">
                      <strong>Glansgrad:</strong> 90
                    </p>
                    <p className="text-sm">
                      Utrolig dybdevirkning og glans med få strøk. Spesielt velegnet på mørkere tresorter.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="halvblank">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm mb-2">
                      <strong>Glansgrad:</strong> 40
                    </p>
                    <p className="text-sm">
                      Mellomting med svak dreining mot det matte. Kombinerer oljens dybde med reflekterende glans.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="boneglans">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm mb-2">
                      <strong>Glansgrad:</strong> 15
                    </p>
                    <p className="text-sm">
                      Unik matthet gir nær ubehandlet inntrykk. Fremhever treverkets karakter. Foretrekkes av malere for
                      marmorering/lasering.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Classic/teknisk%20datablad%20classic%20uretan%20norsk.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Teknisk datablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/Sikkerhet%20Classic/Classic%20Uretanlakk%20Boneglans%202018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Sikkerhetsdatablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/FDV%20datablader/FDV%20datablad%20Classic.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    FDV datablad
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Classic Uretan Lakk Aqua (Vannbasert) */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900">
              <CardTitle>Classic Uretan Lakk Aqua (Vannbasert)</CardTitle>
              <CardDescription>
                Vannbasert, hurtigtørkende og luktsvak polyuretan-akryl lakk for innendørs bruk.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Polyuretan akrylat dispersjon</li>
                  <li>Svak ferskennyanse (gir varmere lød)</li>
                  <li>Bedre overflatestyrke enn oljelakk</li>
                  <li>God fyldighet og utfylling</li>
                  <li>Kompatibel med oljebasert Classic Uretan Lakk</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Innendørs bruk på tregulv</Badge>
                  <Badge variant="outline">Parkett</Badge>
                  <Badge variant="outline">Dører</Badge>
                  <Badge variant="outline">Listverk</Badge>
                  <Badge variant="outline">Nåletre og løvtre</Badge>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Glansgrader</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm font-medium">ULTRAMATT</p>
                    <p className="text-xs text-muted-foreground">Glansgrad: 6-7</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm font-medium">MATT</p>
                    <p className="text-xs text-muted-foreground">Glansgrad: 15-20</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <p className="text-sm font-medium">HALVBLANK</p>
                    <p className="text-xs text-muted-foreground">Glansgrad: 40</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Påføring</h3>
                <p className="text-sm">Påføres best med microfiberrulle (også vanlig filtrulle brukbar)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Emballasje</h3>
                <p className="text-sm">5 liters kanner</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Classic/teknisk%20datablad%20classic%20aqua%20norsk.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Teknisk datablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/Sikkerhet%20Classic/Classic%20Uretanlakk%20Aqua%202018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Sikkerhetsdatablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/FDV%20datablader/FDV%20datablad%20Classic%20Aqua.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    FDV datablad
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Classic Uretan Lakk Aqua Hvitlakk */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900">
              <CardTitle>Classic Uretan Lakk Aqua Hvitlakk</CardTitle>
              <CardDescription>
                Samme som Aqua Boneglans, men tilsatt hvittone. Utfører lakkering og hvitting i ett.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                <ul className="list-disc pl-5">
                  <li>Tilsatt hvittone</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Som primer (1 strøk for lett hvittone)</li>
                  <li>Flere strøk for kraftigere innfarging</li>
                  <li>Over gulv som skal hvitoljes for å forsterke hvithet</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Påføring</h3>
                <p className="text-sm">Bør ha et strøk klarlakk på toppen (anbefaler Classic Aqua Ultra Matt)</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Classic/teknisk%20datablad%20classic%20aqua%20hvit%20norsk.pdf"
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

          {/* Classic Candido Bonevoks */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900">
              <CardTitle>Classic Candido Bonevoks</CardTitle>
              <CardDescription>God, gammeldags bonevoks i fast form.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Høyt tørrstoffinnhold</li>
                  <li>Lang brukstid</li>
                  <li>Produsert av naturlig bivoks</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Påføring</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Påføres med maskin med varme, eller med stålsparkel og bonemaskin (hvit pad)</li>
                  <li>Tørker til hvit overflate, etterpoleres med hvit pad</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}

