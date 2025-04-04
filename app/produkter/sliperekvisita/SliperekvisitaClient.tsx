"use client"

import type { Product } from "./types"
import { useState } from "react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"

interface SliperekvisitaClientProps {
  products: Product[]
}

export default function SliperekvisitaClient({ products }: SliperekvisitaClientProps) {
  // State to track which products are expanded
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({})

  // Toggle function to expand/collapse product details
  const toggleProductExpand = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  // Group products by subcategory
  const groupedProducts = products.reduce(
    (acc, product) => {
      const subcategory = product.category.split(" > ")[1]
      if (!acc[subcategory]) {
        acc[subcategory] = []
      }
      acc[subcategory].push(product)
      return acc
    },
    {} as Record<string, Product[]>,
  )

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sliperekvisita%20stack-ce5sSJO7cne50OAdrM5PhYZClzdQzi.png"
          alt="Sliperekvisita - ulike typer slipebånd og slipematerialer"
          fill
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 flex items-center h-full">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Sliperekvisita</h1>
            <p className="text-lg max-w-3xl">
              Kvalitetsprodukter for profesjonell sliping av gulv - slipebånd, rondeller, slipenetting og annet
              slipeutstyr.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 border-b">
        <div className="container py-8 md:py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Vår ekspertise innen sliperekvisita</h2>
            <div className="prose max-w-none">
              <p>
                Gulvkompagniet har et bredt utvalg av slipebånd og rondeller til alle typer gulvslipemaskiner. Vi lager
                også bånd på bestilling der dette er nødvendig. I tillegg har vi ulike kvaliteter og sammensetninger på
                båndene slik at alle skal kunne finne sin favoritt.
              </p>
              <p>
                Vi har egen produksjon av slipeartikler for å oppnå den aller beste kvalitet til gulvsliping. Det meste
                på markedet er laget for mekanisk industri og karroseriindustrien og derfor ubrukelig eller i beste fall
                dårlig egnet til vårt bruk. For å få optimale produkter tilpasset bransjen, lager vi derfor egne
                produkter hvor vi tilpasser backing, slipemineral, feste av kornene og åpenhet særskilt til gulvsliping.
              </p>
              <p>
                Våre slipeartikler i GK Professional Blue serien har kraftig polyester/bomull backing som er pålagt en
                zirkonium/korund blanding eller keramiske slipemineraler i et forhold spesielt utviklet for sliping av
                tregulv.{" "}
                <span className="italic">
                  Finner du ikke fram i katalogen bistår vi deg gjerne på vår ordretelefon.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-6">Våre produkter</h2>

        {/* Subcategory Navigation Tiles */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {Object.keys(groupedProducts).map((subcategory) => {
              const subcategoryId = subcategory.toLowerCase().replace(/\//g, "-")
              return (
                <button
                  key={subcategory}
                  onClick={() => {
                    const element = document.getElementById(subcategoryId)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="bg-white hover:bg-primary/5 border border-gray-200 rounded px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  {subcategory}
                </button>
              )
            })}
          </div>
        </div>

        {/* Subcategory sections */}
        {Object.entries(groupedProducts).map(([subcategory, subcategoryProducts]) => (
          <section key={subcategory} className="mb-16" id={subcategory.toLowerCase().replace(/\//g, "-")}>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">{subcategory}</h2>

            <div className="space-y-6">
              {subcategoryProducts.map((product, index) => {
                const productId = `${subcategory}-${index}`
                const isExpanded = expandedProducts[productId] || false

                return (
                  <div key={index} className="bg-background rounded-lg border overflow-hidden">
                    {/* Minimized view (always visible) */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4 lg:w-1/5">
                          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.product_name.substring(0, 20))}`}
                              alt={product.product_name}
                              width={200}
                              height={200}
                              className="object-contain p-4"
                            />
                          </div>
                        </div>

                        <div className="md:w-3/4 lg:w-4/5">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
                              <p className="text-muted-foreground mb-2 line-clamp-2">{product.description}</p>

                              {product.brand_line && (
                                <div className="mb-2">
                                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                    {product.brand_line}
                                  </span>
                                </div>
                              )}

                              {/* Show a few key details in minimized view */}
                              {product.available_grits && product.available_grits.length > 0 && (
                                <div className="mb-2">
                                  <span className="text-sm font-medium">Kornstørrelser: </span>
                                  <span className="text-sm text-muted-foreground">
                                    {product.available_grits.join(", ")}
                                  </span>
                                </div>
                              )}

                              {product.dimensions && product.dimensions.length > 0 && (
                                <div className="mb-2">
                                  <span className="text-sm font-medium">Dimensjoner: </span>
                                  <span className="text-sm text-muted-foreground">{product.dimensions.join(", ")}</span>
                                </div>
                              )}
                            </div>

                            <Button
                              variant="outline"
                              onClick={() => toggleProductExpand(productId)}
                              className="self-start whitespace-nowrap"
                            >
                              {isExpanded ? "Vis mindre" : "Vis mer"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded view (only visible when expanded) */}
                    {isExpanded && (
                      <div className="border-t p-6 bg-gray-50">
                        <div className="space-y-6">
                          {product.features && product.features.length > 0 && (
                            <div>
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
                            <div>
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

                          {product.variants && product.variants.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">Varianter</h4>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead className="bg-gray-100">
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
                                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                                          {variant.velcro ? "Ja" : "Nei"}
                                        </td>
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
                                        {variant.machines && (
                                          <td className="px-3 py-2 text-sm">{variant.machines.join(", ")}</td>
                                        )}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {product.components && product.components.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">Komponenter</h4>
                              <ul className="space-y-2">
                                {product.components.map((component, i) => (
                                  <li key={i} className="bg-white p-3 rounded border">
                                    <div className="font-medium">{component.name}</div>
                                    {component.description && (
                                      <p className="text-sm text-muted-foreground">{component.description}</p>
                                    )}
                                    {component.grits && (
                                      <div className="mt-1 flex flex-wrap gap-1">
                                        {component.grits.map((grit, j) => (
                                          <span
                                            key={j}
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs"
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
                            <div>
                              <h4 className="font-medium mb-2">Verktøy</h4>
                              <ul className="space-y-2">
                                {product.tools.map((tool, i) => (
                                  <li key={i} className="bg-white p-3 rounded border">
                                    <div className="font-medium">{tool.name}</div>
                                    {tool.description && (
                                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                                    )}
                                    {tool.sizes && (
                                      <div className="mt-1 flex flex-wrap gap-1">
                                        {tool.sizes.map((size, j) => (
                                          <span
                                            key={j}
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs"
                                          >
                                            {size}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                    {tool.features && (
                                      <div className="mt-1">
                                        <span className="text-xs text-muted-foreground">
                                          {tool.features.join(", ")}
                                        </span>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {product.instructions && product.instructions.length > 0 && (
                            <div>
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
                            <div>
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
                            <div>
                              <h4 className="font-medium mb-2">Dokumenter</h4>
                              <div className="flex flex-wrap gap-2">
                                {product.related_docs.map((doc, i) => (
                                  <a
                                    key={i}
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary hover:underline"
                                  >
                                    <ChevronRight className="h-4 w-4 mr-1" />
                                    {doc.type}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-4 pt-4 border-t flex justify-between">
                            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                              Kontakt for pris og tilgjengelighet
                            </Button>

                            <Button variant="ghost" onClick={() => toggleProductExpand(productId)}>
                              Vis mindre
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  )
}

