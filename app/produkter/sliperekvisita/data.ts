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

export interface Product {
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
export const products: Product[] = [
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

