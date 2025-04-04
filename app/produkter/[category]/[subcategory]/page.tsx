import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

// This is a placeholder component for subcategory pages
// In a real implementation, you would fetch actual product data

type Props = {
  params: { category: string; subcategory: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory } = params

  // Convert kebab-case to readable format
  const readableSubcategory = subcategory
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const readableCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${readableSubcategory} | ${readableCategory} | Gulvkompagniet AS`,
    description: `Utforsk vårt utvalg av ${readableSubcategory.toLowerCase()} produkter i kategorien ${readableCategory.toLowerCase()}.`,
  }
}

export default function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = params

  // Convert kebab-case to readable format
  const readableSubcategory = subcategory
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const readableCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Placeholder image based on category
  let placeholderImage = "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=800&auto=format&fit=crop"

  if (category === "sliperekvisita") {
    placeholderImage = "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop"
  } else if (category === "slipemaskiner") {
    placeholderImage = "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop"
  } else if (category === "verneutstyr") {
    placeholderImage = "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=800&auto=format&fit=crop"
  }

  return (
    <>
      <Header />
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <Image
              src={placeholderImage || "/placeholder.svg"}
              alt={readableSubcategory}
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-4/3"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{readableSubcategory}</h1>
            <p className="text-muted-foreground mb-6">Kategori: {readableCategory}</p>

            <div className="prose max-w-none">
              <p>
                Dette er en oversiktsside for {readableSubcategory.toLowerCase()} i kategorien{" "}
                {readableCategory.toLowerCase()}. Her vil du finne informasjon om våre produkter, spesifikasjoner og
                bruksområder.
              </p>

              <p>
                Gulvkompagniet AS er Norges ledende leverandør av utstyr og rekvisita til profesjonell sliping, legging
                og behandling av tregulv og parkett. Vi tilbyr kun kvalitetsprodukter fra ledende produsenter og har et
                bredt utvalg av {readableSubcategory.toLowerCase()}.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Produkter</h2>

              <div className="bg-gray-50 rounded-lg p-8 text-center mt-4">
                <h3 className="text-lg font-semibold mb-4">Produktliste kommer snart</h3>
                <p className="text-muted-foreground">
                  Vi jobber med å legge til produkter i denne kategorien. Vennligst kontakt oss for mer informasjon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

