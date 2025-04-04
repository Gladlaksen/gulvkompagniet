import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { BrandCarousel } from "@/app/components/brand-carousel"

export default function Home() {
  const brands = [
    {
      name: "Bona",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bona-Logo.jpg-rl3FsgXJNsC1kLFu4mZuXHQHNnQPLF.jpeg",
    },
    {
      name: "Osmo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osmo-logo.jpg-1g8WAH44NEQi0SZaF3zxInMaDTJkZ1.jpeg",
    },
    {
      name: "3M",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3M_wordmark.svg-bvXrFViPVXfO33yhs5Zl9DLS7MkI07.png",
    },
    {
      name: "Classic",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic-uretan-etikett20.jpg-SakGUiF6U7eSVOPOnrGLaVgnekBMrU.jpeg",
    },
    {
      name: "Rubio Monocoat",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rubio-alt-wPTasx7QlL5pI7RdDpSDNQ2UVzMcos.svg",
    },
    {
      name: "Junckers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junckers-logo-ynfzzgXbORsM15bgybqwI4U84WEno9.svg",
    },
    {
      name: "GK Professional",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GK%20Professional%20line%20blue.jpg-gJ8YKiw3LAtqvvguPzM3jwjlwOdVZB.jpeg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative h-[600px] w-full">
            <Image
              src="/images/sapling.png"
              alt="Oak sapling growing from wooden floor in modern interior"
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
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-black/60 text-white border-white hover:bg-white hover:text-black"
                >
                  Finn Riktig Løsning
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Populære kategorier</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Gulvbehandling",
                  description: "Lakk, olje og vedlikeholdsprodukter fra ledende merker som Bona og Osmo",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gulvbehandling-TEMP-YuMywjyda04lFREuVwgi6cjyJLv7Go.png",
                },
                {
                  title: "",
                  description: "Kvalitets slipepapir, pusseskiver og tilbehør for profesjonelle",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZFMBEJwnQ1TOqD2J5E5hkppe4RFGfQ.png",
                },
                {
                  title: "Maskiner",
                  description: "Profesjonelle slipemaskiner, poleringsmaskiner og støvsugere",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maskiner-UdXmGoxqXLhmeFeXrM1Gj9AWuP5KsI.png",
                },
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/produkter#${category.title.toLowerCase() || "sliperekvisita"}`}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title || "Sliperekvisita"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-primary group-hover:underline">Se produkter</span>
                      <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/produkter"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Se alle kategorier
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
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

