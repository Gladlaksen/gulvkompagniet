import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, FileText } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Woca Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Woca gulvbehandlingsprodukter, inkludert oljer, lut og vedlikeholdsprodukter for tregulv.",
}

export default function WocaPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Woca Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Woca er et dansk kvalitetsmerke som tilbyr et bredt spekter av produkter for behandling og vedlikehold av
              tregulv, med fokus på naturlige ingredienser og miljøvennlige løsninger.
            </p>
          </div>
          <Link href="/produkter/gulvbehandling">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til Gulvbehandling
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Woca Tregulvolje */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Woca Tregulvolje</CardTitle>
              <CardDescription>For grunnbehandling og vedlikehold av tregulv.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Naturell</Badge>
                  <Badge variant="outline">Ekstra Hvit</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/datablad%20Woca%20Tregulvolje.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Datablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/Woca%20oljebehandling.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Brukerveiledning
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Woca Lut */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Woca Lut</CardTitle>
              <CardDescription>For lutbehandling av tre.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Løvtrelut</Badge>
                  <Badge variant="outline">Nåletreslut</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/datablad%20Woca%20Naaletreslut.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Datablad
                  </Button>
                </a>
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/Lutbehandling.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Brukerveiledning
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Woca Natursåpe */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Woca Natursåpe</CardTitle>
              <CardDescription>Vedlikeholdssåpe for regelmessig rengjøring.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Varianter</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Naturell</Badge>
                  <Badge variant="outline">Hvit</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/Woca%20saapebehandling.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Brukerveiledning
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Woca Coloroil */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Woca Coloroil</CardTitle>
              <CardDescription>Pigmentert olje.</CardDescription>
            </CardHeader>
            <CardContent>{/* No specific content for this product */}</CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Dokumentasjon</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gulvkompagniet.com/Datablader%20Woca/datablad%20Woca%20Colour%20Oil.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Brukerveiledning og fargekart
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}

