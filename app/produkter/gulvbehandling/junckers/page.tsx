import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Junckers Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Junckers gulvbehandlingsprodukter, inkludert den populære polyuretanbaserte gulvoljen.",
}

export default function JunckersPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Junckers Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Junckers er en ledende produsent av høykvalitets gulvbehandlingsprodukter, kjent for sin holdbarhet og
              pålitelighet.
            </p>
          </div>
          <Link href="/produkter/gulvbehandling">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til Gulvbehandling
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl">
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900">
              <CardTitle>Junckers Gulvolje</CardTitle>
              <CardDescription>
                Polyuretanbasert, hurtigtørkende olje for grunnbehandling og vedlikehold av alle typer treverk.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Egenskaper</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Polyuretanbasert</li>
                  <li>Hurtigtørkende (pussetørr 8t, ny påføring 16t)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Alle typer treverk</Badge>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Påføring</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kan brukes som den er</li>
                  <li>Kan overlakkeres med vann-/oljebasert lakk</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Farger</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Naturell</Badge>
                  <Badge variant="outline">Hvit</Badge>
                  <Badge variant="outline">Antrasit</Badge>
                  <Badge variant="outline">Cherry</Badge>
                  <Badge variant="outline">Svart</Badge>
                  <Badge variant="outline">Valnøtt</Badge>
                  <Badge variant="outline">Mahogny</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}

