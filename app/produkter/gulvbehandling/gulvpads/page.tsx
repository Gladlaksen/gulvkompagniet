import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Gulvpads | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av 3M Scotch Brite gulvpads for polering, skuring og rubbing av gulvoverflater.",
}

export default function GulvpadsPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Gulvpads</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Vi tilbyr et bredt utvalg av 3M Scotch Brite™ gulvpads for polering, skuring og rubbing av gulvoverflater.
            </p>
          </div>
          <Link href="/produkter/gulvbehandling">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til Gulvbehandling
            </Button>
          </Link>
        </div>

        <div className="space-y-12">
          {/* 3M Scotch Brite™ Premium Gulvpads */}
          <div>
            <Card>
              <CardHeader className="bg-slate-50 dark:bg-slate-900">
                <CardTitle>3M Scotch Brite™ Premium Gulvpads</CardTitle>
                <CardDescription>
                  Gulvpads for polering, skuring og rubbing. Produsert av nylon tilsatt slipemineraler. Mørkere farge =
                  grovere.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Oppfunnet av 3M</li>
                    <li>Unik holdbarhet</li>
                    <li>Jevn spredning av slipemineraler</li>
                    <li>Jevn abrasjon</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Lagerstørrelser</h3>
                  <p className="text-sm">14", 16", 17"</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Farge</TableHead>
                          <TableHead>Slipemidler</TableHead>
                          <TableHead>Struktur</TableHead>
                          <TableHead>Bruksområde</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Hvit</TableCell>
                          <TableCell>Ingen slipemidler</TableCell>
                          <TableCell>Tett</TableCell>
                          <TableCell>Polering, påføring (voks, olje, hardvoksolje)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Rød</TableCell>
                          <TableCell>Lite slipemidler</TableCell>
                          <TableCell>Tett</TableCell>
                          <TableCell>Lettere skuring og renhold</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Blå</TableCell>
                          <TableCell>Middels slipemidler</TableCell>
                          <TableCell>Noe løsere</TableCell>
                          <TableCell>Skuring, fjerning av lettere smuss</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Grønn</TableCell>
                          <TableCell>Over middels slipemidler</TableCell>
                          <TableCell>Løsere</TableCell>
                          <TableCell>Oppskuring, fjerning av tyngre tilsmussing</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Brun</TableCell>
                          <TableCell>Høyt innhold slipemidler</TableCell>
                          <TableCell>Løs</TableCell>
                          <TableCell>Grov oppskuring, fjerning av tung tilsmussing</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Svart</TableCell>
                          <TableCell>Svært høyt innhold slipemidler</TableCell>
                          <TableCell>Løs</TableCell>
                          <TableCell>Grov oppskuring, fjerning av tung tilsmussing, slagg, støperester</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3M Standard Economy Gulvpads */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>3M Standard Economy Gulvpads</CardTitle>
                <CardDescription>Enklere produkt med mindre fyllstoff for kortvarig bruk.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Lagerstørrelser</h3>
                  <p className="text-sm">14", 16", 17"</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Farge</TableHead>
                          <TableHead>Bruksområde</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Hvit</TableCell>
                          <TableCell>Polering og påføring (ideell for olje etc der pad ikke kan gjenbrukes)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Rød</TableCell>
                          <TableCell>Lettere skuring og renhold</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3M Scotch-Brite™ 7300 Hi-Pro Gulvpad */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>3M Scotch-Brite™ 7300 Hi-Pro Gulvpad</CardTitle>
                <CardDescription>
                  Meget aggressiv pad med svært høyt innhold av slipemidler og meget åpen struktur.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Meget aggressiv</li>
                    <li>Svært høyt slipemiddelinnhold</li>
                    <li>Meget åpen struktur</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Grov oppskuring</li>
                    <li>Stripping</li>
                    <li>Rensing av harde flater med mye forurensning (støpeformer, betonggulv)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Farge</h3>
                  <p className="text-sm">Svart</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Lagerstørrelser</h3>
                  <p className="text-sm">16"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

