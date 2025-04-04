import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Define the product data structure
interface ProductFeature {
  name: string
  description?: string
  grits?: string[]
  sizes?: string[]
  features?: string[]
}

interface ProductVariant {
  dimension: string
  holes?: string | number
  velcro?: boolean
  grits?: string[]
  machines?: string[]
  type?: string
}

interface Product {
  product_name: string
  category: string
  description: string
  features?: string[]
  application?: string[]
  available_grits?: string[]
  dimensions?: string[]
  variants?: ProductVariant[]
  brand_line?: string
  components?: ProductFeature[]
  instructions?: string[]
  benefits?: string[]
  compatible_abrasives?: string
  tools?: ProductFeature[]
  brands?: string[]
  related_docs?: { type: string; link: string }[]
}

// Product data
const products: Product[] = [
  {
    product_name: "Blå Zirkonium Slipebånd (GK Professional Line Blue)",
    category: "Sliperekvisita > Slipebånd",
    description:
      "Gulvkompagniets bestselger til profesjonelle. Optimal kombinasjon av pris og standtid. Produsert med zirkonium/korund belegning på bomulls/polyester backing.",
    features: [
      "Lang standtid",
      "Presist kutt",
      "Raskt resultat",
      "Kraftig polyester/bomull backing",
      "Ekstra bred skjøt (tåler høy varme, motvirker slag)",
      "Skjøt toleranse +/- 1 mm",
    ],
    application: ["Profesjonell gulvsliping", "Tøffeste slipejobber", "Maksimal effekt og avvirkning"],
    available_grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
    dimensions: ["200x750mm", "250x750mm"],
    brand_line: "GK Professional Line Blue",
  },
  {
    product_name: "Røde Aluminiumoksid Slipebånd",
    category: "Sliperekvisita > Slipebånd",
    description: "Slipebånd for den som ikke sliper hver dag eller for utleie. Medium standtid og hyggelig pris.",
    features: ["Medium standtid", "Hyggelig pris"],
    application: ["Utleiemaskiner", "Ikke-daglig sliping"],
    available_grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
    dimensions: [
      "200x750mm",
      "250x750mm",
      "200x480mm",
      "200x551mm",
      "100x620mm",
      "40x305mm (Grits P40, P60, P80 only)",
    ],
  },
  {
    product_name: "Keramiske Slipebånd",
    category: "Sliperekvisita > Slipebånd",
    description: "Det nyeste og tøffeste innen gulvsliping. Uovertruffen standtid og skarphet.",
    features: [
      "Keramiske slipemineraler",
      "Uovertruffen standtid (20-60% lengre enn blå bånd)",
      "Uovertruffen skarphet",
    ],
    application: ["Store flater", "Tung sliping"],
    available_grits: ["P36", "P40", "P50", "P60", "P80"],
    dimensions: ["200x750mm", "250x750mm"],
  },
  {
    product_name: "Blå Zirkonium Sliperondeller / Deltaskiver (GK Professional Line Blue)",
    category: "Sliperekvisita > Rondeller/Deltaskiver",
    description:
      "Bestselger til profesjonelle. Optimal kombinasjon av pris og standtid. Zirkonium/korund belegg på bomulls/polyester backing (rondeller) eller fiberforsterket/polyester-bomull rygg med kraftig borrelås (deltaskiver).",
    features: ["Lang standtid", "Presist kutt", "Kraftig backing", "Sterk borrelås (der relevant)"],
    application: ["Profesjonell kantsliping", "Detaljsliping (delta)"],
    variants: [
      {
        dimension: "200mm",
        holes: 0,
        velcro: true,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
      },
      {
        dimension: "178mm",
        holes: 0,
        velcro: true,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
      },
      {
        dimension: "150mm",
        holes: 0,
        velcro: true,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
      },
      {
        dimension: "150mm",
        holes: 9,
        velcro: true,
        grits: ["P36", "P40", "P50", "P60", "P80", "P100", "P120", "P150"],
      },
      { dimension: "115mm", holes: 0, velcro: true, grits: ["P60", "P80", "P100", "P150"] },
      { dimension: "90mm", holes: 6, velcro: true, grits: ["P40", "P60", "P80", "P100", "P120"] },
      {
        dimension: "400mm",
        holes: "Senterhull",
        velcro: false,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
      },
      { dimension: "Festool deltaskive", holes: 6, velcro: true, grits: ["P40", "P60", "P80", "P100", "P120"] },
      { dimension: "FEIN Deltaskive (Blå)", holes: 0, velcro: true, grits: ["P40", "P60", "P80", "P100", "P120"] },
    ],
    brand_line: "GK Professional Line Blue",
  },
  {
    product_name: "Røde Aluminiumoksid Sliperondeller",
    category: "Sliperekvisita > Rondeller/Deltaskiver",
    description: "Sliperondell for ikke-daglig sliping eller utleie. Medium standtid, hyggelig pris.",
    features: ["Medium standtid", "Hyggelig pris"],
    application: ["Utleiemaskiner", "Ikke-daglig sliping"],
    variants: [
      {
        dimension: "407mm (Dobbeltsidig)",
        holes: "Senterhull",
        velcro: false,
        grits: ["P16", "P24", "P36", "P40", "P60", "P80", "P100", "P120"],
        machines: ["Golia", "RT", "Columbus", "Wirbel", "Numatic"],
      },
      {
        dimension: "225mm",
        holes: "Perforert",
        velcro: true,
        grits: ["P80", "P100", "P120", "P150", "P180"],
        machines: ["Flex Giraff"],
      },
      {
        dimension: "200mm",
        holes: 0,
        velcro: true,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
        machines: ["Lägler Trio"],
      },
      {
        dimension: "178mm",
        holes: "Senterhull",
        velcro: false,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
        machines: ["Bona Edge", "Lägler Unico", "Vega"],
      },
      {
        dimension: "150mm",
        holes: "Senterhull",
        velcro: false,
        grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100", "P120"],
        machines: ["Bona CombiEdge", "Lägler Elan"],
      },
      {
        dimension: "150mm",
        holes: 9,
        velcro: true,
        grits: ["P40", "P60", "P80", "P100", "P120"],
        machines: ["Festool 150 FEQ", "Mirka Deros"],
      },
      {
        dimension: "150mm",
        holes: 6,
        velcro: true,
        grits: ["P40", "P60", "P80", "P100", "P120"],
        machines: ["Bosch", "FEIN"],
      },
      {
        dimension: "150mm",
        holes: 15,
        velcro: true,
        grits: ["P40", "P60", "P80", "P100", "P120"],
        machines: ["Festool 150 FEQ", "Mirka Deros"],
      },
      {
        dimension: "125mm",
        holes: 6,
        velcro: true,
        grits: ["P40", "P60", "P80", "P100", "P120"],
        machines: ["Mirka Deros"],
      },
    ],
  },
  {
    product_name: "Fiberrondeller for vinkelsliper",
    category: "Sliperekvisita > Rondeller/Deltaskiver",
    description: "Meget kraftige og tykke sliperondeller for bruk på vinkelsliper.",
    features: ["Tåler høye hastigheter", "Langvarig bruk uten å sprekke"],
    application: ["Vinkelsliper"],
    variants: [
      { dimension: "125mm", holes: 1, velcro: false, grits: ["P16", "P36", "P50", "P80"] },
      { dimension: "180mm", holes: 1, velcro: false, grits: ["P16", "P24", "P36", "P40", "P50", "P60", "P80", "P100"] },
    ],
  },
  {
    product_name: "FEIN Deltaskiver",
    category: "Sliperekvisita > Rondeller/Deltaskiver",
    description: "Originale deltaskiver fra FEIN for bruk på FEIN Multimaster.",
    features: ["Medium kvalitet"],
    application: ["FEIN Multimaster"],
    variants: [
      { dimension: "FEIN Deltaskive", holes: 0, velcro: true, grits: ["P40", "P60", "P80", "P100", "P120"] },
      { dimension: "FEIN Deltaskive", holes: 6, velcro: true, grits: ["P40", "P60", "P80", "P100", "P120"] },
    ],
  },
  {
    product_name: "Wolframcarbide Slipeskiver",
    category: "Sliperekvisita > Rondeller/Deltaskiver",
    description: "Stålskiver påloddet wolframcarbide slipemineraler.",
    features: ["Utrolig holdbarhet", "Jevne, stabile skiver", "Minimerer vibrasjoner"],
    application: ["Tung sliping"],
    variants: [{ dimension: "400mm", holes: "Senterhull", velcro: false, grits: ["P10", "P14", "P24", "P36"] }],
  },
  {
    product_name: "Slipenetting (Norton/SIA/Mirka)",
    category: "Sliperekvisita > Slipenetting/Scrad System",
    description: "Benyttes primært til å pusse ned fiber-reisning ved lakkering samt finsliping.",
    features: ["Kan fås med borrelåsbakside"],
    application: [
      "Finsliping av tre-/steingulv",
      "Nedpussing av vedreisning etter lakk",
      "Fjerne bonevoks (opprinnelig bruk)",
      "Nedpussing av gips/sparkel (med borrelås)",
    ],
    variants: [
      { dimension: '407mm (16")', type: "Nett", velcro: false, grits: ["P80", "P100", "P120", "P150", "P180", "P220"] },
      { dimension: '380mm (14")', type: "Nett", velcro: false, grits: ["P60", "P80", "P100", "P120", "P150"] },
      { dimension: "200mm", type: "Nett", velcro: true, grits: ["P180", "P220"] },
      { dimension: "225mm", type: "Nett", velcro: true, grits: ["P80", "P100", "P120", "P150", "P180"] },
    ],
    brands: ["Norton", "SIA", "Mirka"],
  },
  {
    product_name: "Abranet ACE (Mirka)",
    category: "Sliperekvisita > Slipenetting/Scrad System",
    description: "Utviklet for krevende slipeoperasjoner. Optimert nettkonstruksjon med keramiske slipekorn.",
    features: [
      "Meget god holdbarhet",
      "Overlegen aggressivitet",
      "Avvirker raskt og effektivt",
      "Minimalt med riper",
      "Meget bra støvavsug (åpen nettkonstruksjon)",
    ],
    application: ["Hårdt tre", "Primer", "Kompositt", "Lakk"],
    variants: [
      { dimension: "150mm", holes: "-", velcro: true, grits: ["P80", "P100", "P120", "P150"] },
      { dimension: "178mm", holes: "-", velcro: true, grits: ["P80", "P100", "P120"] },
    ],
  },
  {
    product_name: "Abranet ACE HD (Mirka)",
    category: "Sliperekvisita > Slipenetting/Scrad System",
    description: "Ytterligere forsterket produkt for tung sliping.",
    features: [
      "Tykkere struktur",
      "Kraftigere borrelås",
      "Takler stort trykk og høy temperatur",
      "Suveren finish tross grov korning",
    ],
    application: ["Tung sliping", "Passer meget godt til Bona FlexiSand med PowerDrive (+ ekstra vekter)"],
    variants: [{ dimension: "150mm", holes: "-", velcro: true, grits: ["P40", "P60", "P80"] }],
  },
  {
    product_name: "Bona Scrad System",
    category: "Sliperekvisita > Slipenetting/Scrad System",
    description:
      "System for å oppnå helt enestående og ripefri overflate, spesielt før mørk olje eller mellom strøk med vannbasert lakk.",
    components: [
      {
        name: "Bona Scrad Pad",
        description:
          "Slipepad med svært finfordelte slipemineraler. Aggressiv men skånsom. Absorberer fremmedlegemer for å unngå ringer.",
      },
      {
        name: "Bona Scrad Wings",
        description: "Forsterker slipeffekten. Festes under Scrad Pad (2 eller 4 vinger).",
        grits: ["P150", "P180"],
      },
    ],
    application: [
      "Situasjoner der slipenetting kan lage striper",
      "Mellomsliping før siste lakkstrøk",
      "Før mørk olje",
    ],
    instructions: ["Etter bruk av Wings må gulvet gåes over med kun Scrad Pad for å fjerne ringer."],
  },
  {
    product_name: "SIA Slipekloss",
    category: "Sliperekvisita > Håndsliping",
    description: "Slipekloss for håndpussing av siste finish, krevende profiler eller vanskelig tilgjengelige steder.",
    features: ["Myk og hard side", "God å holde i", "Fleksibel konsistens", "Borrelåsfeste for slipeark"],
    dimensions: ["198x70mm"],
    compatible_abrasives: "Slipeark (P80, P120, P150, P180, P220) med borrelås",
  },
  {
    product_name: "Bona Diamond Abrasives",
    category: "Sliperekvisita > Diamantsliping",
    description:
      "Diamant sliperondeller for opprubbing av harde lakker (keramisk forsterket UV-lakk) der tradisjonell slipenetting blir sløv.",
    features: [
      "Sikker opprubbing av hardeste lakker",
      "Varer minst 100m²",
      "Etterlater ingen synlige striper/ringer",
      "Brukes med fleksibel mellomleggspad for å komme ned i ujevnheter",
    ],
    application: ["Idrettsgulv", "Offentlige gulv", "Fabrikklakkerte gulv", "Relakkering"],
    benefits: ["Raskere, sikrere og billigere enn slipenett for harde lakker"],
    related_docs: [
      { type: "Datablad", link: "https://gulvkompagniet.com/Datablader%20Bona/Bona%20Diamond%20Abrasives%20norsk.pdf" },
      {
        type: "Instruks Relakkering",
        link: "https://gulvkompagniet.com/Datablader%20Bona/relakkering%20med%20Bona%20Traffic%20HD.pdf",
      },
    ],
  },
  {
    product_name: "Børsting av gulv (Bona System)",
    category: "Sliperekvisita > Børsting",
    description:
      "Teknikk for å gi tregulv (spesielt eik) en tredimensjonell, børstet effekt ved å grave ut sommerveden. Kan forsterkes med fargede oljer/lakker.",
    tools: [
      {
        name: "Bona PowerDrive Connect",
        description: "Modifisert utgave av PowerDrive skive for FlexiSand, med utskiftbare sektorer for børster.",
      },
      { name: "Stålbørster", description: "For bruk med PowerDrive Connect for børsting." },
      { name: "Tynexbørster", description: "For bruk med PowerDrive Connect for børsting." },
      {
        name: "Bona SupraFlex",
        description:
          "Alt-i-ett kantverktøy for børsting og sliping av kanter og vanskelig tilgjengelige steder. Bruker stål-/tynexbørster eller diamantskiver. Hastighetsregulering, støvavsug kompatibel.",
      },
      {
        name: "Bona Fiber pads",
        description:
          "Kraftige nylon pads med slipemiddel. Kan brukes til børsting av mykere treslag (furu, gran) eller kanter på hardere (ask, eik). Også for rens/voksfjerning på fleksible gulv.",
        sizes: ["150mm", "178mm"],
        features: ["Borrelåsfeste"],
        related_docs: [
          {
            type: "Datablad",
            link: "https://gulvkompagniet.com/Datablader%20Bona/Bona_Fiber_Pads_Sales_Sheet%20NO.pdf",
          },
        ],
      },
    ],
    application: ["Gamle laminerte parkettgulv", "Eik", "Andre treslag (med forsiktighet/riktig børste)"],
    benefits: [
      "Moderne, kostbart utseende på eksisterende gulv",
      "Fremhever trestruktur",
      "Mulighet for kreativ fargesetting",
    ],
  },
]

// Map of subcategory slugs to display names
const subcategoryMap: Record<string, string> = {
  slipeband: "Slipebånd",
  rondeller: "Rondeller/Deltaskiver",
  slipenetting: "Slipenetting/Scrad System",
  handsliping: "Håndsliping",
  diamantsliping: "Diamantsliping",
  borsting: "Børsting",
}

// Map of subcategory slugs to category paths in the product data
const categoryPathMap: Record<string, string> = {
  slipeband: "Sliperekvisita > Slipebånd",
  rondeller: "Sliperekvisita > Rondeller/Deltaskiver",
  slipenetting: "Sliperekvisita > Slipenetting/Scrad System",
  handsliping: "Sliperekvisita > Håndsliping",
  diamantsliping: "Sliperekvisita > Diamantsliping",
  borsting: "Sliperekvisita > Børsting",
}

// Get subcategory image based on slug
const getSubcategoryImage = (slug: string): string => {
  switch (slug) {
    case "slipeband":
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slipeba%CC%8And-YnMQ6Qx8Z2X24ay6PF6GDa3nGopTR3.png"
    case "rondeller":
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
    case "slipenetting":
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
    case "handsliping":
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
    case "diamantsliping":
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
    case "borsting":
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
    default:
      return "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
  }
}

// Get subcategory description based on slug
const getSubcategoryDescription = (slug: string): string => {
  switch (slug) {
    case "slipeband":
      return "Kvalitetsslipebånd for profesjonell gulvsliping i ulike dimensjoner og kornstørrelser."
    case "rondeller":
      return "Sliperondeller og deltaskiver for kantsliping og detaljsliping av gulv."
    case "slipenetting":
      return "Slipenetting og Scrad System for finsliping og mellomsliping av gulv."
    case "handsliping":
      return "Verktøy og rekvisita for manuell sliping av detaljer og vanskelig tilgjengelige områder."
    case "diamantsliping":
      return "Diamantslipeprodukter for opprubbing av harde lakker og spesielle overflater."
    case "borsting":
      return "Verktøy og systemer for børsting av tregulv for å skape en tredimensjonal effekt."
    default:
      return "Kvalitetsprodukter for profesjonell sliping av gulv."
  }
}

type Props = {
  params: { subcategory: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategory } = params

  if (!subcategoryMap[subcategory]) {
    return {
      title: "Underkategori ikke funnet | Gulvkompagniet AS",
      description: "Denne underkategorien finnes ikke.",
    }
  }

  return {
    title: `${subcategoryMap[subcategory]} | Sliperekvisita | Gulvkompagniet AS`,
    description: getSubcategoryDescription(subcategory),
  }
}

export default function SubcategoryPage({ params }: Props) {
  const { subcategory } = params

  // Check if subcategory exists
  if (!subcategoryMap[subcategory]) {
    notFound()
  }

  const subcategoryDisplayName = subcategoryMap[subcategory]
  const categoryPath = categoryPathMap[subcategory]

  // Filter products for this subcategory
  const subcategoryProducts = products.filter((product) => product.category === categoryPath)

  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/produkter" className="hover:text-primary">
            Produkter
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/produkter/sliperekvisita" className="hover:text-primary">
            Sliperekvisita
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{subcategoryDisplayName}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="md:w-1/3">
            <Image
              src={getSubcategoryImage(subcategory) || "/placeholder.svg"}
              alt={subcategoryDisplayName}
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{subcategoryDisplayName}</h1>
            <p className="text-lg text-muted-foreground mb-6">{getSubcategoryDescription(subcategory)}</p>
          </div>
        </div>

        <div className="space-y-8">
          {subcategoryProducts.map((product, index) => (
            <div key={index} className="bg-background rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>

              <p className="text-muted-foreground mb-4">{product.description}</p>

              {product.brand_line && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {product.brand_line}
                  </span>
                </div>
              )}

              {product.features && product.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Egenskaper</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.application && product.application.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Bruksområder</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.application.map((app, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.available_grits && product.available_grits.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Tilgjengelige kornstørrelser</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.available_grits.map((grit, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {grit}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.dimensions && product.dimensions.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Dimensjoner</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.dimensions.map((dim, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {dim}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.variants && product.variants.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Varianter</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Dimensjon
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Hull
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Borrelås
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Kornstørrelser
                          </th>
                          {product.variants[0].machines && (
                            <th
                              scope="col"
                              className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Maskiner
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {product.variants.map((variant, i) => (
                          <tr key={i}>
                            <td className="px-3 py-2 whitespace-nowrap text-sm">{variant.dimension}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm">{variant.holes}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm">{variant.velcro ? "Ja" : "Nei"}</td>
                            <td className="px-3 py-2 text-sm">
                              {variant.grits && (
                                <div className="flex flex-wrap gap-1">
                                  {variant.grits.map((grit, j) => (
                                    <span
                                      key={j}
                                      className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs"
                                    >
                                      {grit}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </td>
                            {variant.machines && <td className="px-3 py-2 text-sm">{variant.machines.join(", ")}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {product.components && product.components.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Komponenter</h4>
                  <ul className="space-y-2">
                    {product.components.map((component, i) => (
                      <li key={i} className="bg-gray-50 p-3 rounded">
                        <div className="font-medium">{component.name}</div>
                        {component.description && (
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                        )}
                        {component.grits && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {component.grits.map((grit, j) => (
                              <span
                                key={j}
                                className="inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs"
                              >
                                {grit}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.tools && product.tools.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Verktøy</h4>
                  <ul className="space-y-2">
                    {product.tools.map((tool, i) => (
                      <li key={i} className="bg-gray-50 p-3 rounded">
                        <div className="font-medium">{tool.name}</div>
                        {tool.description && <p className="text-sm text-muted-foreground">{tool.description}</p>}
                        {tool.sizes && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {tool.sizes.map((size, j) => (
                              <span
                                key={j}
                                className="inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs"
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        )}
                        {tool.features && (
                          <div className="mt-1">
                            <span className="text-xs text-muted-foreground">{tool.features.join(", ")}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.instructions && product.instructions.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Instruksjoner</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.instructions.map((instruction, i) => (
                      <li key={i} className="text-sm">
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Fordeler</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.related_docs && product.related_docs.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Dokumenter</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.related_docs.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
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

