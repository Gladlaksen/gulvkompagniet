import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Timberex Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Timberex gulvbehandlingsprodukter, inkludert klassiske oljer for gulv og andre treoverflater.",
}

export default function TimberexPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Timberex Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Timberex tilbyr et klassisk sortiment av pigmenterte og upigmenterte oljer for gulv og andre
              treoverflater.
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
              <CardTitle>Timberex Gulvolje</CardTitle>
              <CardDescription>Klassisk sortiment av pigmenterte og upigmenterte oljer.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bruksområder</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gulv og andre treoverflater</li>
                  <li>Privat og offentlig miljø</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Påføring</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kan være alternativ til lakk</li>
                  <li>Kan kombineres med lakk</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Farger</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Naturell</Badge>
                  <Badge variant="outline">Flere farger tilgjengelig</Badge>
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

