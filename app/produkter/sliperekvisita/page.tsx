import type { Metadata } from "next"
import SliperekvisitaClient from "./SliperekvisitaClient"
import { products } from "./data"

export const metadata: Metadata = {
  title: "Sliperekvisita | Gulvkompagniet AS",
  description:
    "Kvalitetsprodukter for profesjonell sliping av gulv - slipebånd, rondeller, slipenetting og annet slipeutstyr.",
}

export default function SliperekvisitaPage() {
  return <SliperekvisitaClient products={products} />
}

