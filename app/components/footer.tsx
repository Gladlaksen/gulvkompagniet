import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white dark:bg-gray-950">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Gulvkompagniet AS</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Smestadveien 5, 0376 Oslo</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Tlf: 22 92 45 45</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>E-post: info@gulvkompagniet.no</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Mandag - fredag 08.00 - 16.00</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Produkter</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/produkter#gulvbehandling" className="hover:text-primary hover:underline">
                  Gulvbehandling
                </Link>
              </li>
              <li>
                <Link href="/produkter#sliperekvisita" className="hover:text-primary hover:underline">
                  Sliperekvisita
                </Link>
              </li>
              <li>
                <Link href="/produkter#maskiner" className="hover:text-primary hover:underline">
                  Maskiner
                </Link>
              </li>
              <li>
                <Link href="/produkter#verneutstyr" className="hover:text-primary hover:underline">
                  Verneutstyr
                </Link>
              </li>
              <li>
                <Link href="/produkter#tilbehør" className="hover:text-primary hover:underline">
                  Tilbehør
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Om Oss</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/om-oss#historie" className="hover:text-primary hover:underline">
                  Vår Historie
                </Link>
              </li>
              <li>
                <Link href="/om-oss#team" className="hover:text-primary hover:underline">
                  Vårt Team
                </Link>
              </li>
              <li>
                <Link href="/om-oss#karriere" className="hover:text-primary hover:underline">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/om-oss#bærekraft" className="hover:text-primary hover:underline">
                  Bærekraft
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kundeservice</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/kontakt" className="hover:text-primary hover:underline">
                  Kontakt Oss
                </Link>
              </li>
              <li>
                <Link href="/kunnskap-ressurser#levering" className="hover:text-primary hover:underline">
                  Leveringsinformasjon
                </Link>
              </li>
              <li>
                <Link href="/personvern" className="hover:text-primary hover:underline">
                  Personvern
                </Link>
              </li>
              <li>
                <Link href="/vilkar" className="hover:text-primary hover:underline">
                  Vilkår og Betingelser
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gulvkompagniet AS. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}

