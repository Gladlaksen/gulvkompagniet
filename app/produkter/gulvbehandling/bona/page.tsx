import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Download } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Bona Gulvbehandling | Gulvkompagniet AS",
  description:
    "Utforsk vårt utvalg av Bona produkter for profesjonell gulvbehandling, inkludert lakk, oljer, primere og vedlikeholdsprodukter.",
}

// Define the product categories
const productCategories = [
  {
    title: "Lakk",
    description: "Profesjonelle lakker for tregulv",
    products: [
      {
        name: "Bona Traffic HD",
        description:
          "Anerkjent som verdens kanskje sterkeste lakk. Nylansert i 2013 med enda lavere løsemiddelinnhold. Det selvsagte valg for gulv med høy trafikk.",
        features: ["Gjennomherdet på 12 timer", "Suveren slitestyrke", "Lavt løsemiddelinnhold"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Traffic HD Raw",
        description:
          "Tilbyr et høyt beskyttelsesnivå samtidig som utseendet og følelsen av ubehandlet tre opprettholdes. Et førsteklasses produkt for et førsteklasses utseende.",
        features: ["Opprettholder utseendet/følelsen av ubehandlet tre", "Unik overflatestruktur", "Høy sklisikkerhet"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Traffic GO",
        description:
          "Et kvantesprang innen lakkteknologien hvor man har lykkes med å skape en en-komponent lakk med styrken til en to-komponent. Herderen er ferdig blandet i lakken.",
        features: [
          "1-komponent lakk med 2-komponent styrke",
          "Innebygget herder",
          "Eliminerer behovet for isocyanat-herder",
        ],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Domo",
        description: "En lakk for bruk i hjemmemiljø og andre steder med normal trafikk.",
        features: ["Lett å påføre", "Lett å pusse ned", "Fin viskositet", "Klar ikke-gulnende lakkfilm"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Mega EVO",
        description:
          "Neste generasjons lakk for tregulv med en helt unik tverrbindingsteknologi som aktiveres når produktet påføres gulvet. Bruker oksygenet i luften som herder.",
        features: ["Unik tverrbindingsteknologi", "Ikke-gulende formel", "Hurtig tørking"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Primer",
    description: "Grunningslakker for tregulv",
    products: [
      {
        name: "Bona Prime Intense",
        description:
          "1-komponent vannbasert 100% polyuretan grunningslakk. Gir overflaten et fyldig utseende med dyp innfarging.",
        features: ["Enkel å bruke", "Forhindrer sideliming", "Framhever treets naturlige farge og struktur"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Prime Amber",
        description:
          "Forgyller tregulv med en varm glød lik tradisjonelle, løsemiddelbaserte lakker, men uten løsemidler.",
        features: ["Enkel utlegging", "Rask tørk", "Naturlig og trygt valg"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Prime Classic UX",
        description: "Vannbasert grunning for ubehandlede, nyslipte tregulv. Gir en middels lys farge.",
        features: ["Lett å påføre", "Kan mellompusses", "Gir godt grunnlag for Bonas topplakker"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Prime White",
        description: "Perfekt for å oppnå hvite gulv på en enkel og varig måte.",
        features: ["Kan bestemme hvithet med antall strøk", "Unngår grønnskjær"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Prime Natural",
        description: "Grunningslakk laget særskilt for å gjenskape fargen og inntrykket av ubehandlet treverk.",
        features: ["Bevarer utseendet av nyslipt, ubehandlet tregulv", "Lett å mellomslipe", "Lett å påføre med rulle"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Oljesystem",
    description: "Oljebaserte produkter for tregulv",
    products: [
      {
        name: "Bona Craft Oil 2K",
        description:
          "Gulvolje basert på modifiserte plantebaserte oljer, med kortere tørketid og forsterket slitestyrke. Gir en vakker og sterk vann- og flekkavvisende overflate.",
        features: ["Kan forsterkes med Bona 2K lakker/hardvoksolje", "Kortere tørketid", "Forsterket slitestyrke"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Rich Tone",
        description: "Forbehandling for eikeparkett som skaper en dyp, mørk brun farge (inntrykk av røkt eik).",
        features: ["Lett å påføre", "Tørker fort", "Vannbasert", "Uten lukt"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Nordic Tone",
        description: "Forbehandling for Bona Craft Oil for et intensivt hvitt gulv.",
        features: ["Hemmer gulning", "Tørker fort", "Lett å påføre"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Hard Wax Oil",
        description:
          "Balansert blanding av naturlige oljer og vokser for overflatebehandling av ubehandlede tregulv og interiørtreverk. Impregnerer og skaper holdbar overflatefilm.",
        features: ["Meget god motstand mot vann", "Lavt løsemiddelinnhold", "Lite lukt"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Vedlikehold/Renhold",
    description: "Produkter for vedlikehold og rengjøring av gulv",
    products: [
      {
        name: "Bona Cleaner",
        description:
          "Konsentrert, svakt alkalisk rengjøringsmiddel spesielt utviklet for rengjøring av tre- og korkgulv.",
        features: ["Effektiv, lavtskummende", "Etterlater ingen merker/rester"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Freshen Up",
        description:
          "'Klar til bruk' vannbasert vedlikeholdslakk for de fleste lakkerte og fabrikklakkerte tregulv. Gir ny glans og liv til slitt overflate.",
        features: ["Kamuflerer småriper", "Gir ny glans", "Bedret beskyttelse mot slitasje"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Oil Soap",
        description: "Renholdsmiddel laget av olje for regelmessig rengjøring og vedlikehold av oljede tregulv.",
        features: ["Gir næring til overflaten", "Etterlater tynn film som kan poleres for mer glans"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Deep Clean Solution",
        description:
          "Konsentrert rengjøringsmiddel for grundig, dyp rengjøring av lakkerte og oljede tregulv. Fjerner gjenstridige skomerker og klister.",
        features: ["Optimal rengjøringseffektivitet", "Fjerner skomerker/klister uten risiko for skjolder"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
      {
        name: "Bona Wax Oil W",
        description:
          "Vedlikeholdsprodukt for Bona Hard Wax Oil, kan også brukes på Bona Craft Oil og andre hardvoksoljer for økt beskyttelse. Konsentrat av naturlige oljer og vokser.",
        features: ["Rask tørk", "Lett å påføre", "Lavt innhold av løsemidler"],
        image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
]

export default function BonaPage() {
  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/produkter" className="hover:text-primary">
            Produkter
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/produkter/gulvbehandling" className="hover:text-primary">
            Gulvbehandling
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Bona</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"
              alt="Bona Gulvbehandling"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Bona Gulvbehandling</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Bona er en ledende produsent av produkter for behandling og vedlikehold av tregulv. Med over 100 års
              erfaring tilbyr Bona innovative og miljøvennlige løsninger for profesjonelle gulvleggere og private
              forbrukere.
            </p>
            <p className="text-muted-foreground mb-6">
              Vårt utvalg av Bona-produkter inkluderer lakker, oljer, primere og vedlikeholdsprodukter av høyeste
              kvalitet. Bona er kjent for sin sterke fokus på miljø og bærekraft, og mange av deres produkter har lavt
              VOC-innhold og er sertifisert med miljømerker som Greenguard og EC1.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                Greenguard
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                EC1
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                BREEAM
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                A+
              </span>
            </div>
          </div>
        </div>

        {productCategories.map((category, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <p className="text-muted-foreground mb-8">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="border rounded-lg overflow-hidden bg-background">
                  <div className="relative h-48">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/produkter/gulvbehandling/bona/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary hover:underline text-sm flex items-center"
                    >
                      Se detaljer <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Tekniske Datablader</h2>
          <p className="text-muted-foreground mb-6">
            Her finner du tekniske datablader for Bona produkter. Disse inneholder detaljert informasjon om
            produktegenskaper, bruksområder, påføringsmetoder og sikkerhetsinformasjon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Bona Lakker</h3>
                <p className="text-sm text-muted-foreground">Datablader for Traffic HD, Traffic GO, Mega EVO m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Bona Primere</h3>
                <p className="text-sm text-muted-foreground">Datablader for Prime Intense, Prime Amber m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Bona Oljesystem</h3>
                <p className="text-sm text-muted-foreground">Datablader for Craft Oil 2K, Hard Wax Oil m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-background rounded-lg border">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Bona Vedlikehold</h3>
                <p className="text-sm text-muted-foreground">Datablader for Cleaner, Freshen Up, Oil Soap m.fl.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

