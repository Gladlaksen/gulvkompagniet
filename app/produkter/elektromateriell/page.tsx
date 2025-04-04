import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Zap, Cable, Power, Lightbulb, Flame, Shield } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Elektromateriell | Gulvkompagniet AS",
  description: "Elektromateriell for profesjonelle gulvslipere - skjøteledninger, grenuttak, overganger og mer.",
}

// Define the product types
const productTypes = [
  {
    name: "Skjøteledninger",
    description: "Gummikabel godkjent for utendørs bruk.",
    icon: <Cable className="h-10 w-10 text-primary" />,
    details: [
      { label: "Varianter", value: "1-fase (230V) og 3-fase (400V)" },
      { label: "Tykkelse", value: "1.5mm² og 2.5mm²" },
      { label: "Lengder", value: "10m, 15m, 25m" },
    ],
    variants: [
      { thickness: "1.5mm²", phases: "1-fase (230V, blå plugg)", lengths: ["10m", "15m", "25m"] },
      { thickness: "2.5mm²", phases: "1-fase (230V, blå plugg)", lengths: ["10m", "15m", "25m"] },
      { thickness: "1.5mm²", phases: "3-fase (400V, rød plugg)", lengths: ["10m", "15m", "25m"] },
      { thickness: "2.5mm²", phases: "3-fase (400V, rød plugg)", lengths: ["10m", "15m", "25m"] },
    ],
  },
  {
    name: "Grenuttak",
    description: "Tillater drift av flere maskiner på en kurs. Robust konstruksjon for hardhendt behandling.",
    icon: <Power className="h-10 w-10 text-primary" />,
    details: [
      { label: "Varianter", value: "1-fase og 3-fase" },
      { label: "Egenskaper", value: "Robust konstruksjon for profesjonell bruk" },
    ],
    variants: ["1-fase", "3-fase"],
  },
  {
    name: "Overganger",
    description: "For tilkobling mellom ulike typer støpsler/uttak.",
    icon: <Zap className="h-10 w-10 text-primary" />,
    details: [{ label: "Varianter", value: "3-fase til 1-fase og andre typer" }],
    variants: ["3-fase til 1-fase", "Andre typer"],
  },
  {
    name: "Sikringer",
    description: "Diverse sikringer for elektrisk utstyr.",
    icon: <Shield className="h-10 w-10 text-primary" />,
    details: [{ label: "Typer", value: "Ulike sikringer for profesjonelt utstyr" }],
  },
  {
    name: "Lyspærer",
    description: "Lyspærer for arbeidslamper og annet belysningsutstyr.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    details: [{ label: "Bruksområde", value: "Arbeidslamper og annet belysningsutstyr" }],
  },
  {
    name: "Varmeovner",
    description: "For å fremskynde tørketiden for lakk og olje.",
    icon: <Flame className="h-10 w-10 text-primary" />,
    details: [
      { label: "Egenskaper", value: "Modeller med termostat sikrer korrekt temperatur" },
      { label: "Bruksområde", value: "Fremskynde tørketid for lakk og olje" },
    ],
  },
]

export default function ElektromateriellPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-4">Elektromateriell</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Gulvkompagniet tilbyr et komplett utvalg av elektromateriell en gulvsliper har behov for. Alle produkter er
          hentet fra anerkjente leverandører som f.eks EL-Björn. Vi legger stor vekt på sikkerhet og at produktene skal
          tåle profesjonell behandling.
        </p>

        {/* Product Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productTypes.map((product, index) => (
            <div key={index} className="bg-background rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {product.icon}
                <h2 className="text-xl font-semibold ml-3">{product.name}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{product.description}</p>

              <div className="space-y-2 mb-4">
                {product.details.map((detail, i) => (
                  <div key={i} className="grid grid-cols-2 gap-2">
                    <span className="text-sm font-medium">{detail.label}:</span>
                    <span className="text-sm text-muted-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>

              {product.variants && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Tilgjengelige varianter:</h3>
                  {Array.isArray(product.variants[0]) ? (
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 py-1 text-left">Tykkelse</th>
                          <th className="px-2 py-1 text-left">Type</th>
                          <th className="px-2 py-1 text-left">Lengder</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(product.variants as any[]).map((variant, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-2 py-1">{variant.thickness}</td>
                            <td className="px-2 py-1">{variant.phases}</td>
                            <td className="px-2 py-1">{variant.lengths.join(", ")}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {(product.variants as string[]).map((variant, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Safety Information */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Sikkerhet først</h2>
          <p className="text-muted-foreground mb-4">
            Ved arbeid med elektrisk utstyr er sikkerhet alltid førsteprioritet. Vårt elektromateriell er valgt med
            tanke på profesjonell bruk i krevende miljøer, og oppfyller alle nødvendige sikkerhetskrav og standarder.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Alltid inspiser kabler og utstyr før bruk for å unngå skader</span>
            </div>
            <div className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Bruk riktig dimensjonert kabel for strømbehovet</span>
            </div>
            <div className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Unngå overbelastning av kurser ved bruk av flere maskiner</span>
            </div>
            <div className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>Beskytt kabler mot skader under arbeid</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-background rounded-lg border p-8">
          <h2 className="text-xl font-semibold mb-4">Trenger du hjelp til å velge riktig elektromateriell?</h2>
          <p className="text-muted-foreground mb-6">
            Vårt team har lang erfaring med elektromateriell for gulvslipere og kan hjelpe deg med å finne de riktige
            produktene for dine behov. Kontakt oss for priser og tilgjengelighet.
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

