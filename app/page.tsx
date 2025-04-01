import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { BrandCarousel } from "@/app/components/brand-carousel"

export default function Home() {
  const brands = [
    { name: "Bona", logo: "/placeholder.svg?height=80&width=160&text=Bona" },
    { name: "Osmo", logo: "/placeholder.svg?height=80&width=160&text=Osmo" },
    { name: "3M", logo: "/placeholder.svg?height=80&width=160&text=3M" },
    { name: "Classic", logo: "/placeholder.svg?height=80&width=160&text=Classic" },
    { name: "Rubio Monocoat", logo: "/placeholder.svg?height=80&width=160&text=Rubio" },
    { name: "Vermeister", logo: "/placeholder.svg?height=80&width=160&text=Vermeister" },
    { name: "Loba", logo: "/placeholder.svg?height=80&width=160&text=Loba" },
    { name: "Pallmann", logo: "/placeholder.svg?height=80&width=160&text=Pallmann" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=1920&auto=format&fit=crop"
              alt="Elegant parquet flooring"
              fill
              priority
              className="object-cover"
            />
            <div className="container relative z-20 flex h-full flex-col items-start justify-center gap-4 text-white">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Norges ledende leverandør til profesjonell sliping, behandling og legging av gulv
              </h1>
              <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
                Kvalitetsprodukter, ekspertise og pålitelig service for gulvfagfolk siden 1990.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Se Våre Produkter
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Finn Riktig Løsning
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Produktkategorier</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  title: "Gulvbehandling",
                  description: "Lakk, olje og vedlikeholdsprodukter",
                  image: "https://images.unsplash.com/photo-1594844532765-0c89a0714d0c?q=80&w=500&auto=format&fit=crop",
                },
                {
                  title: "Sliperekvisita",
                  description: "Slipepapir, pusseskiver og tilbehør",
                  image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=500&auto=format&fit=crop",
                },
                {
                  title: "Maskiner",
                  description: "Slipemaskiner, poleringsmaskiner og støvsugere",
                  image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=500&auto=format&fit=crop",
                },
                {
                  title: "Verneutstyr",
                  description: "Masker, hansker og beskyttelsesklær",
                  image: "https://images.unsplash.com/photo-1618516976405-127685b3e4f2?q=80&w=500&auto=format&fit=crop",
                },
                {
                  title: "Tilbehør",
                  description: "Verktøy, lim og monteringsmateriell",
                  image: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?q=80&w=500&auto=format&fit=crop",
                },
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/produkter#${category.title.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                      <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Hvorfor velge oss</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Over 30 års erfaring",
                  description: "Lang erfaring i bransjen sikrer kvalitet og pålitelighet",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  title: "Ledende Merkevarer",
                  description: "Offisiell forhandler av Bona, Osmo og andre toppmerker",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  title: "Ekspertrådgivning",
                  description: "Faglig veiledning fra erfarne gulvspesialister",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: "Rask Levering",
                  description: "Effektiv levering i Oslo-området og hele Norge",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <BrandCarousel brands={brands} />
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Våre Kunder Sier</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "Gulvkompagniet har vært vår faste leverandør i over 10 år. Alltid pålitelige og med topp kvalitet på produktene.",
                  author: "Anders Johansen",
                  company: "Johansen Gulvservice AS",
                },
                {
                  quote:
                    "Rask levering og god faglig veiledning. Deres ekspertise har hjulpet oss med flere utfordrende prosjekter.",
                  author: "Maria Olsen",
                  company: "Olsen & Sønn Gulvlegging",
                },
                {
                  quote: "Et bredt utvalg av kvalitetsprodukter og alltid god service. Anbefales på det sterkeste!",
                  author: "Thomas Berg",
                  company: "Bergs Gulvmontering",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Highlight */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight">Ressurser for fagfolk</h2>
                  <p className="mt-2 text-muted-foreground">
                    Last ned vår guide til valg av riktig lakk for ulike gulvtyper og bruksområder.
                  </p>
                  <Button className="mt-4 bg-primary hover:bg-primary/90">Last ned guide</Button>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=150&auto=format&fit=crop"
                    alt="Guide PDF"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

