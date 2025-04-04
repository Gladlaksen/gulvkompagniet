import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Check } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Bona Gulvlim | Gulvkompagniet AS",
  description: "Utforsk vårt utvalg av Bona gulvlim for profesjonell liming av tregulv og parkett.",
}

// Define the product data
const products = [
  {
    name: "Bona Quantum / Bona Quantum T",
    description:
      "Et 1-komponent silylbasert lim for liming av alle typer tregulv. Produktet inneholder en unik, Titan tverrbindingsteknologi, som betyr en sikker og rask herding med høy initial klebestyrke.",
    type: "Silyl modifisert polymer (hard-elastisk)",
    features: [
      "Kraftig tverrbindingsteknologi i titan",
      "Sikker og rask herding",
      "Høy initial klebestyrke",
      "Høy skjærestyrke",
      "Kan brukes uten fuktsperre (opptil 85 % RF på betong)",
      "Enkel å bruke",
      "God ribbestabilitet",
      "Fri for vann og løsemidler",
      "Kan også brukes på metall",
    ],
    application: ["Alle typer tre- og parkettgulv (massive, laminat)", "Godt egnet for gulv med undervarme"],
    variants: [
      { name: "Bona Quantum", viscosity: "Standard" },
      { name: "Bona Quantum T", viscosity: "Høyere (for Bona Optispread maskin)" },
    ],
    specifications: {
      Farge: "Beige/brun",
      Åpentid: "ca 40 minutter",
      Tørkemetode: "Ved hjelp av luftens fuktighet",
      Egenvekt: "1.5 kg/l",
      "Tørketid (Sliping/Behandling)": "1-2 døgn (avhengig av temp/fuktighet)",
      "Holdbarhet (uåpnet)": "Min. 12 måneder",
      Oppbevaring: "5 - 25ºC",
    },
    cleaning: "Bona Hand & Tool Cleaner, aceton, etanol. Herdet produkt fjernes mekanisk.",
    packaging: ["9,94l plastspann (44 stk/pall)", "5,4l foliepølse"],
    certifications: ["Emicode", "Affset", "EC1", "Indoor Air Comfort Gold"],
    related_docs: [
      {
        type: "Teknisk datablad",
        link: "https://gulvkompagniet.com/Datablader%20Bona/teknisk-datablad-bona-quantum-NO.pdf",
      },
    ],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Bona R850",
    description:
      "Elastisk, 1-komponent silanlim for liming av parkett og tregulv. Spesielt egnet for problematiske treslag og prefabrikkert parkett.",
    type: "Silyl modifisert polymer (elastisk)",
    features: [
      "Elastisk - reduserer skjærspenninger",
      "Meget god vedheft til de fleste underlag",
      "Vannfri - ingen svelling av treet",
      "Løsemiddelfri - GISCODE RS 10",
      "Lett å fjerne fra overflaten",
    ],
    application: ["Prefabrikkert parkett", "Problematiske treslag", "Gulv med undervarme"],
    specifications: {
      Farge: "Beige",
      Åpentid: "ca 30 minutter",
      Tørkemetode: "Ved hjelp av luftens fuktighet",
      "Tørketid (Sliping/Behandling)": "24-48 timer",
      "Holdbarhet (uåpnet)": "12 måneder",
    },
    certifications: ["Emicode EC1 Plus", "DIBt godkjent"],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Bona D750",
    description:
      "Vannbasert dispersjonslim for liming av parkett på absorberende underlag. Spesielt egnet for mosaikkparkett og mindre dimensjoner.",
    type: "Vannbasert dispersjonslim",
    features: ["Meget god vedheft", "Lett å påføre", "Miljøvennlig", "Vannbasert"],
    application: ["Mosaikkparkett", "Mindre dimensjoner", "Absorberende underlag"],
    specifications: {
      Farge: "Kremhvit",
      Åpentid: "ca 15 minutter",
      "Tørketid (Sliping/Behandling)": "3-4 dager",
      "Holdbarhet (uåpnet)": "12 måneder",
    },
    certifications: ["Emicode EC1 Plus"],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=500&auto=format&fit=crop",
  },
]

export default function BonaGulvlimPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/produkter" className="hover:text-primary">
            Produkter
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/produkter/gulvlim" className="hover:text-primary">
            Gulvlim
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Bona</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=800&auto=format&fit=crop"
              alt="Bona Gulvlim"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Bona Gulvlim</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Bona er en ledende produsent av gulvlim for profesjonell liming av tregulv og parkett. Med over 100 års
              erfaring tilbyr Bona innovative og miljøvennlige løsninger for profesjonelle gulvleggere.
            </p>
            <p className="text-muted-foreground mb-6">
              Vårt utvalg av Bona gulvlim inkluderer silylbaserte lim, elastiske lim og dispersjonslim for ulike
              bruksområder og gulvtyper. Bona er kjent for sin sterke fokus på miljø og bærekraft, og mange av deres
              produkter har lavt VOC-innhold og er sertifisert med miljømerker.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                Emicode EC1 Plus
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                Indoor Air Comfort Gold
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                DIBt godkjent
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div key={index} className="bg-background rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-3">Type</h3>
                  <p className="text-muted-foreground mb-4">{product.type}</p>

                  {product.features && (
                    <>
                      <h3 className="font-medium mb-3">Egenskaper</h3>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.application && (
                    <>
                      <h3 className="font-medium mb-3">Bruksområder</h3>
                      <ul className="space-y-2 mb-4">
                        {product.application.map((app, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.variants && (
                    <>
                      <h3 className="font-medium mb-3">Varianter</h3>
                      <ul className="space-y-2 mb-4">
                        {product.variants.map((variant, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              {variant.name} - {variant.viscosity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div>
                  {product.specifications && (
                    <>
                      <h3 className="font-medium mb-3">Tekniske spesifikasjoner</h3>
                      <div className="space-y-2 mb-4">
                        {Object.entries(product.specifications).map(([key, value], i) => (
                          <div key={i} className="grid grid-cols-2 gap-2">
                            <span className="font-medium">{key}:</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {product.cleaning && (
                    <>
                      <h3 className="font-medium mb-3">Rengjøring</h3>
                      <p className="text-muted-foreground mb-4">{product.cleaning}</p>
                    </>
                  )}

                  {product.packaging && (
                    <>
                      <h3 className="font-medium mb-3">Emballasje</h3>
                      <ul className="list-disc pl-5 mb-4">
                        {product.packaging.map((pkg, i) => (
                          <li key={i} className="text-muted-foreground">
                            {pkg}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.certifications && (
                    <>
                      <h3 className="font-medium mb-3">Sertifiseringer</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {product.related_docs && (
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Dokumenter</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.related_docs.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        {doc.type}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                  Kontakt for pris og tilgjengelighet
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

