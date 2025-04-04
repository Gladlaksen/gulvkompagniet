"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MegaMenu } from "@/app/components/mega-menu"
import { BrandsMenu } from "@/app/components/brands-menu"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef, type FormEvent } from "react"
import { ThemeToggle } from "@/app/components/theme-toggle"

// Comprehensive search data including all categories, subcategories, and products
const searchData = [
  // Gulvbehandling - Bona
  {
    title: "Bona Traffic HD",
    category: "Gulvbehandling",
    subcategory: "Bona",
    url: "/produkter/gulvbehandling/bona/traffic-hd",
  },
  {
    title: "Bona Traffic HD Raw",
    category: "Gulvbehandling",
    subcategory: "Bona",
    url: "/produkter/gulvbehandling/bona/traffic-hd-raw",
  },
  {
    title: "Bona Traffic GO",
    category: "Gulvbehandling",
    subcategory: "Bona",
    url: "/produkter/gulvbehandling/bona/traffic-go",
  },
  {
    title: "Bona Domo",
    category: "Gulvbehandling",
    subcategory: "Bona",
    url: "/produkter/gulvbehandling/bona/domo",
  },
  {
    title: "Bona Mega EVO",
    category: "Gulvbehandling",
    subcategory: "Bona",
    url: "/produkter/gulvbehandling/bona/mega-evo",
  },
  {
    title: "Bona Prime Intense",
    category: "Gulvbehandling",
    subcategory: "Bona - Primer",
    url: "/produkter/gulvbehandling/bona/prime-intense",
  },
  {
    title: "Bona Prime Amber",
    category: "Gulvbehandling",
    subcategory: "Bona - Primer",
    url: "/produkter/gulvbehandling/bona/prime-amber",
  },
  {
    title: "Bona Prime Classic UX",
    category: "Gulvbehandling",
    subcategory: "Bona - Primer",
    url: "/produkter/gulvbehandling/bona/prime-classic-ux",
  },
  {
    title: "Bona Prime White",
    category: "Gulvbehandling",
    subcategory: "Bona - Primer",
    url: "/produkter/gulvbehandling/bona/prime-white",
  },
  {
    title: "Bona Prime Natural",
    category: "Gulvbehandling",
    subcategory: "Bona - Primer",
    url: "/produkter/gulvbehandling/bona/prime-natural",
  },
  {
    title: "Bona Craft Oil 2K",
    category: "Gulvbehandling",
    subcategory: "Bona - Oljesystem",
    url: "/produkter/gulvbehandling/bona/craft-oil-2k",
  },
  {
    title: "Bona Rich Tone",
    category: "Gulvbehandling",
    subcategory: "Bona - Oljesystem",
    url: "/produkter/gulvbehandling/bona/rich-tone",
  },
  {
    title: "Bona Nordic Tone",
    category: "Gulvbehandling",
    subcategory: "Bona - Oljesystem",
    url: "/produkter/gulvbehandling/bona/nordic-tone",
  },
  {
    title: "Bona Hard Wax Oil",
    category: "Gulvbehandling",
    subcategory: "Bona - Oljesystem",
    url: "/produkter/gulvbehandling/bona/hard-wax-oil",
  },
  {
    title: "Bona Cleaner",
    category: "Gulvbehandling",
    subcategory: "Bona - Vedlikehold",
    url: "/produkter/gulvbehandling/bona/cleaner",
  },
  {
    title: "Bona Freshen Up",
    category: "Gulvbehandling",
    subcategory: "Bona - Vedlikehold",
    url: "/produkter/gulvbehandling/bona/freshen-up",
  },
  {
    title: "Bona Oil Soap",
    category: "Gulvbehandling",
    subcategory: "Bona - Vedlikehold",
    url: "/produkter/gulvbehandling/bona/oil-soap",
  },
  {
    title: "Bona Deep Clean Solution",
    category: "Gulvbehandling",
    subcategory: "Bona - Vedlikehold",
    url: "/produkter/gulvbehandling/bona/deep-clean-solution",
  },
  {
    title: "Bona Wax Oil W",
    category: "Gulvbehandling",
    subcategory: "Bona - Vedlikehold",
    url: "/produkter/gulvbehandling/bona/wax-oil-w",
  },

  // Gulvbehandling - Osmo
  {
    title: "Osmo Hardvoksolje",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/hardvoksolje",
  },
  {
    title: "Osmo Hardvoksolje Rapid",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/hardvoksolje-rapid",
  },
  {
    title: "Osmo Hardvoksolje Pigmentert",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/hardvoksolje-pigmentert",
  },
  {
    title: "Osmo Dekorvoks",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/dekorvoks",
  },
  {
    title: "Osmo Dekorvoks Intensiv",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/dekorvoks-intensiv",
  },
  {
    title: "Osmo Dekorvoks Ekstra tynn",
    category: "Gulvbehandling",
    subcategory: "Osmo",
    url: "/produkter/gulvbehandling/osmo/dekorvoks-ekstra-tynn",
  },
  {
    title: "Osmo Oljebeis",
    category: "Gulvbehandling",
    subcategory: "Osmo - Oljebeis",
    url: "/produkter/gulvbehandling/osmo/oljebeis",
  },
  {
    title: "Osmo Vask og Pleiemiddel 8016",
    category: "Gulvbehandling",
    subcategory: "Osmo - Renhold",
    url: "/produkter/gulvbehandling/osmo/vask-og-pleiemiddel",
  },
  {
    title: "Osmo Grovrengjøringsmiddel 8019",
    category: "Gulvbehandling",
    subcategory: "Osmo - Renhold",
    url: "/produkter/gulvbehandling/osmo/grovrengjoringsmiddel",
  },
  {
    title: "Osmo Rens og Vedlikeholdsvoks",
    category: "Gulvbehandling",
    subcategory: "Osmo - Vedlikehold",
    url: "/produkter/gulvbehandling/osmo/rens-og-vedlikeholdsvoks",
  },
  {
    title: "Osmo Hardvoks Vedlikeholdsolje",
    category: "Gulvbehandling",
    subcategory: "Osmo - Vedlikehold",
    url: "/produkter/gulvbehandling/osmo/hardvoks-vedlikeholdsolje",
  },
  {
    title: "Osmo Vedlikeholdssett",
    category: "Gulvbehandling",
    subcategory: "Osmo - Vedlikehold",
    url: "/produkter/gulvbehandling/osmo/vedlikeholdssett",
  },
  {
    title: "Osmo Gulvbørster",
    category: "Gulvbehandling",
    subcategory: "Osmo - Påføringsrekvisita",
    url: "/produkter/gulvbehandling/osmo/gulvborster",
  },
  {
    title: "Osmo Rullesett for gulv",
    category: "Gulvbehandling",
    subcategory: "Osmo - Påføringsrekvisita",
    url: "/produkter/gulvbehandling/osmo/rullesett",
  },
  {
    title: "Osmo Profesjonell Stålsparkel",
    category: "Gulvbehandling",
    subcategory: "Osmo - Påføringsrekvisita",
    url: "/produkter/gulvbehandling/osmo/stalsparkel",
  },

  // Gulvbehandling - Rubio Monocoat
  {
    title: "Rubio Monocoat Oil Plus 2C",
    category: "Gulvbehandling",
    subcategory: "Rubio Monocoat",
    url: "/produkter/gulvbehandling/rubio-monocoat/oil-plus-2c",
  },
  {
    title: "Rubio Monocoat Cleaner",
    category: "Gulvbehandling",
    subcategory: "Rubio Monocoat",
    url: "/produkter/gulvbehandling/rubio-monocoat/cleaner",
  },
  {
    title: "Rubio Monocoat Maintenance Oil",
    category: "Gulvbehandling",
    subcategory: "Rubio Monocoat",
    url: "/produkter/gulvbehandling/rubio-monocoat/maintenance-oil",
  },

  // Gulvbehandling - Classic
  {
    title: "Classic Hardvoksolje",
    category: "Gulvbehandling",
    subcategory: "Classic",
    url: "/produkter/gulvbehandling/classic/hardvoksolje",
  },
  {
    title: "Classic Gulvolje",
    category: "Gulvbehandling",
    subcategory: "Classic",
    url: "/produkter/gulvbehandling/classic/gulvolje",
  },

  // Gulvbehandling - Junckers
  {
    title: "Junckers GulvLak",
    category: "Gulvbehandling",
    subcategory: "Junckers",
    url: "/produkter/gulvbehandling/junckers/gulvlak",
  },
  {
    title: "Junckers GulvOlje",
    category: "Gulvbehandling",
    subcategory: "Junckers",
    url: "/produkter/gulvbehandling/junckers/gulvolje",
  },

  // Gulvbehandling - Timberex
  {
    title: "Timberex Natural",
    category: "Gulvbehandling",
    subcategory: "Timberex",
    url: "/produkter/gulvbehandling/timberex/natural",
  },
  {
    title: "Timberex Heavy Duty",
    category: "Gulvbehandling",
    subcategory: "Timberex",
    url: "/produkter/gulvbehandling/timberex/heavy-duty",
  },

  // Gulvbehandling - Woca
  {
    title: "Woca Oljelakk",
    category: "Gulvbehandling",
    subcategory: "Woca",
    url: "/produkter/gulvbehandling/woca/oljelakk",
  },
  {
    title: "Woca Vedlikeholdsolje",
    category: "Gulvbehandling",
    subcategory: "Woca",
    url: "/produkter/gulvbehandling/woca/vedlikeholdsolje",
  },

  // Sliperekvisita
  {
    title: "Slipebånd 200x750mm K60",
    category: "Sliperekvisita",
    subcategory: "Slipebånd",
    url: "/produkter/sliperekvisita/slipeband",
  },
  {
    title: "Slipebånd 200x750mm K80",
    category: "Sliperekvisita",
    subcategory: "Slipebånd",
    url: "/produkter/sliperekvisita/slipeband",
  },
  {
    title: "Slipebånd 200x750mm K100",
    category: "Sliperekvisita",
    subcategory: "Slipebånd",
    url: "/produkter/sliperekvisita/slipeband",
  },
  {
    title: "Slipebånd 200x750mm K120",
    category: "Sliperekvisita",
    subcategory: "Slipebånd",
    url: "/produkter/sliperekvisita/slipeband",
  },
  {
    title: "Rondeller 150mm K60",
    category: "Sliperekvisita",
    subcategory: "Rondeller",
    url: "/produkter/sliperekvisita/rondeller",
  },
  {
    title: "Rondeller 150mm K80",
    category: "Sliperekvisita",
    subcategory: "Rondeller",
    url: "/produkter/sliperekvisita/rondeller",
  },
  {
    title: "Rondeller 150mm K100",
    category: "Sliperekvisita",
    subcategory: "Rondeller",
    url: "/produkter/sliperekvisita/rondeller",
  },
  {
    title: "Rondeller 150mm K120",
    category: "Sliperekvisita",
    subcategory: "Rondeller",
    url: "/produkter/sliperekvisita/rondeller",
  },
  {
    title: "Slipenetting 150mm K80",
    category: "Sliperekvisita",
    subcategory: "Slipenetting",
    url: "/produkter/sliperekvisita/slipenetting",
  },
  {
    title: "Slipenetting 150mm K100",
    category: "Sliperekvisita",
    subcategory: "Slipenetting",
    url: "/produkter/sliperekvisita/slipenetting",
  },
  {
    title: "Slipenetting 150mm K120",
    category: "Sliperekvisita",
    subcategory: "Slipenetting",
    url: "/produkter/sliperekvisita/slipenetting",
  },
  {
    title: "Håndslipekloss",
    category: "Sliperekvisita",
    subcategory: "Håndsliping",
    url: "/produkter/sliperekvisita/handsliping",
  },
  {
    title: "Slipepapir ark K80",
    category: "Sliperekvisita",
    subcategory: "Håndsliping",
    url: "/produkter/sliperekvisita/handsliping",
  },
  {
    title: "Slipepapir ark K120",
    category: "Sliperekvisita",
    subcategory: "Håndsliping",
    url: "/produkter/sliperekvisita/handsliping",
  },
  {
    title: "Stålbørste",
    category: "Sliperekvisita",
    subcategory: "Børsting",
    url: "/produkter/sliperekvisita/borsting",
  },
  {
    title: "Messingbørste",
    category: "Sliperekvisita",
    subcategory: "Børsting",
    url: "/produkter/sliperekvisita/borsting",
  },
  {
    title: "Nylonbørste",
    category: "Sliperekvisita",
    subcategory: "Børsting",
    url: "/produkter/sliperekvisita/borsting",
  },
  {
    title: "Diamantslipeskive K50",
    category: "Sliperekvisita",
    subcategory: "Diamantsliping",
    url: "/produkter/sliperekvisita/diamantsliping",
  },
  {
    title: "Diamantslipeskive K100",
    category: "Sliperekvisita",
    subcategory: "Diamantsliping",
    url: "/produkter/sliperekvisita/diamantsliping",
  },
  {
    title: "Diamantslipeskive K200",
    category: "Sliperekvisita",
    subcategory: "Diamantsliping",
    url: "/produkter/sliperekvisita/diamantsliping",
  },

  // Slipemaskiner
  {
    title: "Bona Båndslipemaskin",
    category: "Slipemaskiner",
    subcategory: "Bona",
    url: "/produkter/slipemaskiner/bona/bandslipemaskin",
  },
  {
    title: "Bona Edge",
    category: "Slipemaskiner",
    subcategory: "Bona",
    url: "/produkter/slipemaskiner/bona/edge",
  },
  {
    title: "Bona FlexiSand",
    category: "Slipemaskiner",
    subcategory: "Bona",
    url: "/produkter/slipemaskiner/bona/flexisand",
  },
  {
    title: "Bona Power Drive",
    category: "Slipemaskiner",
    subcategory: "Bona - Tilbehør",
    url: "/produkter/slipemaskiner/bona/power-drive",
  },
  {
    title: "Festool Rotex RO 150",
    category: "Slipemaskiner",
    subcategory: "Festool",
    url: "/produkter/slipemaskiner/festool/rotex-ro-150",
  },
  {
    title: "Festool ETS EC 150",
    category: "Slipemaskiner",
    subcategory: "Festool",
    url: "/produkter/slipemaskiner/festool/ets-ec-150",
  },
  {
    title: "Flex Giraff",
    category: "Slipemaskiner",
    subcategory: "Flex",
    url: "/produkter/slipemaskiner/flex/giraff",
  },
  {
    title: "Künzle & Tasin Omega",
    category: "Slipemaskiner",
    subcategory: "Künzle & Tasin",
    url: "/produkter/slipemaskiner/kunzle-tasin/omega",
  },
  {
    title: "Mirka DEROS 650CV",
    category: "Slipemaskiner",
    subcategory: "Mirka",
    url: "/produkter/slipemaskiner/mirka/deros-650cv",
  },

  // Verneutstyr
  {
    title: "3M Støvmaske P2",
    category: "Verneutstyr",
    subcategory: "Støvmasker",
    url: "/produkter/verneutstyr/stovmasker",
  },
  {
    title: "3M Støvmaske P3",
    category: "Verneutstyr",
    subcategory: "Støvmasker",
    url: "/produkter/verneutstyr/stovmasker",
  },
  {
    title: "3M Gassmaske A1",
    category: "Verneutstyr",
    subcategory: "Gassmasker",
    url: "/produkter/verneutstyr/gassmasker",
  },
  {
    title: "3M Gassmaske A2",
    category: "Verneutstyr",
    subcategory: "Gassmasker",
    url: "/produkter/verneutstyr/gassmasker",
  },
  {
    title: "3M Friskluftsmaske",
    category: "Verneutstyr",
    subcategory: "Friskluftsmasker",
    url: "/produkter/verneutstyr/friskluftsmasker",
  },
  {
    title: "3M Peltor Hørselvern",
    category: "Verneutstyr",
    subcategory: "Hørselvern",
    url: "/produkter/verneutstyr/horselvern",
  },
  {
    title: "3M Vernebriller",
    category: "Verneutstyr",
    subcategory: "Vernebriller",
    url: "/produkter/verneutstyr/vernebriller",
  },
  {
    title: "Arbeidshansker",
    category: "Verneutstyr",
    subcategory: "Hansker",
    url: "/produkter/verneutstyr/hansker",
  },
  {
    title: "Nitrilhansker",
    category: "Verneutstyr",
    subcategory: "Hansker",
    url: "/produkter/verneutstyr/hansker",
  },
  {
    title: "Kneputer",
    category: "Verneutstyr",
    subcategory: "Kneputer",
    url: "/produkter/verneutstyr/kneputer",
  },
  {
    title: "Skotrekk",
    category: "Verneutstyr",
    subcategory: "Skotrekk",
    url: "/produkter/verneutstyr/skotrekk",
  },

  // Verktøy / tilbehør
  {
    title: "Sparkel",
    category: "Verktøy / tilbehør",
    url: "/produkter/verktoy-tilbehor",
  },
  {
    title: "Gulvskrape",
    category: "Verktøy / tilbehør",
    url: "/produkter/verktoy-tilbehor",
  },
  {
    title: "Rulle",
    category: "Verktøy / tilbehør",
    url: "/produkter/verktoy-tilbehor",
  },
  {
    title: "Pensler",
    category: "Verktøy / tilbehør",
    url: "/produkter/verktoy-tilbehor",
  },

  // Gulvlim
  {
    title: "Bona Gulvlim",
    category: "Gulvlim",
    subcategory: "Bona",
    url: "/produkter/gulvlim/bona",
  },
  {
    title: "Bona D750",
    category: "Gulvlim",
    subcategory: "Bona",
    url: "/produkter/gulvlim/bona/d750",
  },
  {
    title: "Bona R850",
    category: "Gulvlim",
    subcategory: "Bona",
    url: "/produkter/gulvlim/bona/r850",
  },
  {
    title: "Classic Elastic SIMP",
    category: "Gulvlim",
    subcategory: "Classic",
    url: "/produkter/gulvlim/classic-elastic-simp",
  },

  // Proff renhold
  {
    title: "Gulvvaskemiddel",
    category: "Proff renhold",
    url: "/produkter/proff-renhold",
  },
  {
    title: "Flekkfjerner",
    category: "Proff renhold",
    url: "/produkter/proff-renhold",
  },
  {
    title: "Polishfjerner",
    category: "Proff renhold",
    url: "/produkter/proff-renhold",
  },

  // Støvsugere
  {
    title: "Bona DCS 70",
    category: "Støvsugere",
    subcategory: "Bona",
    url: "/produkter/stovsugere/bona/dcs-70",
  },
  {
    title: "Nilfisk AERO 26",
    category: "Støvsugere",
    subcategory: "Nilfisk",
    url: "/produkter/stovsugere/nilfisk/aero-26",
  },
  {
    title: "Nilfisk ATTIX 33",
    category: "Støvsugere",
    subcategory: "Nilfisk",
    url: "/produkter/stovsugere/nilfisk/attix-33",
  },

  // Elektromateriell
  {
    title: "Skjøteledning",
    category: "Elektromateriell",
    url: "/produkter/elektromateriell",
  },
  {
    title: "Adapter",
    category: "Elektromateriell",
    url: "/produkter/elektromateriell",
  },
  {
    title: "Strømfordeler",
    category: "Elektromateriell",
    url: "/produkter/elektromateriell",
  },

  // Sparkling, fuging rep.sett
  {
    title: "Tresparkel",
    category: "Sparkling, fuging rep.sett",
    url: "/produkter/sparkling-fuging-repsett",
  },
  {
    title: "Fugemasse",
    category: "Sparkling, fuging rep.sett",
    url: "/produkter/sparkling-fuging-repsett",
  },
  {
    title: "Reparasjonssett",
    category: "Sparkling, fuging rep.sett",
    url: "/produkter/sparkling-fuging-repsett",
  },

  // Verksted og reservedeler
  {
    title: "Reservedeler til slipemaskiner",
    category: "Verksted og reservedeler",
    url: "/produkter/verksted-reservedeler",
  },
  {
    title: "Reparasjonstjenester",
    category: "Verksted og reservedeler",
    url: "/produkter/verksted-reservedeler",
  },

  // Fleksible gulv
  {
    title: "Dyprengjøring for vinyl",
    category: "Fleksible gulv",
    subcategory: "Dyprengjøring",
    url: "/produkter/fleksible-gulv/dyprengjoring",
  },
  {
    title: "Dyprengjøring for linoleum",
    category: "Fleksible gulv",
    subcategory: "Dyprengjøring",
    url: "/produkter/fleksible-gulv/dyprengjoring",
  },
  {
    title: "Rehabilitering av vinyl",
    category: "Fleksible gulv",
    subcategory: "Rehabilitering",
    url: "/produkter/fleksible-gulv/rehabilitering",
  },
  {
    title: "Rehabilitering av linoleum",
    category: "Fleksible gulv",
    subcategory: "Rehabilitering",
    url: "/produkter/fleksible-gulv/rehabilitering",
  },
  {
    title: "Idrettsgulv behandling",
    category: "Fleksible gulv",
    subcategory: "Idrettsgulv",
    url: "/produkter/fleksible-gulv/idrettsgulv",
  },
  {
    title: "Renhold av vinyl",
    category: "Fleksible gulv",
    subcategory: "Renhold",
    url: "/produkter/fleksible-gulv/renhold",
  },
  {
    title: "Renhold av linoleum",
    category: "Fleksible gulv",
    subcategory: "Renhold",
    url: "/produkter/fleksible-gulv/renhold",
  },
  {
    title: "Produktoversikt fleksible gulv",
    category: "Fleksible gulv",
    subcategory: "Produktoversikt",
    url: "/produkter/fleksible-gulv/produktoversikt",
  },
  {
    title: "Beskyttelse av vinyl",
    category: "Fleksible gulv",
    subcategory: "Beskyttelse",
    url: "/produkter/fleksible-gulv/beskyttelse",
  },
  {
    title: "Beskyttelse av linoleum",
    category: "Fleksible gulv",
    subcategory: "Beskyttelse",
    url: "/produkter/fleksible-gulv/beskyttelse",
  },

  // Brukte maskiner
  {
    title: "Brukt båndsliper",
    category: "Brukte maskiner",
    url: "/produkter/brukte-maskiner",
  },
  {
    title: "Brukt kantsliper",
    category: "Brukte maskiner",
    url: "/produkter/brukte-maskiner",
  },
  {
    title: "Brukt poleringsmaskin",
    category: "Brukte maskiner",
    url: "/produkter/brukte-maskiner",
  },

  // Main categories
  {
    title: "Gulvbehandling",
    category: "Produktkategori",
    url: "/produkter/gulvbehandling",
  },
  {
    title: "Sliperekvisita",
    category: "Produktkategori",
    url: "/produkter/sliperekvisita",
  },
  {
    title: "Slipemaskiner",
    category: "Produktkategori",
    url: "/produkter/slipemaskiner",
  },
  {
    title: "Verneutstyr",
    category: "Produktkategori",
    url: "/produkter/verneutstyr",
  },
  {
    title: "Verktøy / tilbehør",
    category: "Produktkategori",
    url: "/produkter/verktoy-tilbehor",
  },
  {
    title: "Gulvlim",
    category: "Produktkategori",
    url: "/produkter/gulvlim",
  },
  {
    title: "Proff renhold",
    category: "Produktkategori",
    url: "/produkter/proff-renhold",
  },
  {
    title: "Støvsugere",
    category: "Produktkategori",
    url: "/produkter/stovsugere",
  },
  {
    title: "Elektromateriell",
    category: "Produktkategori",
    url: "/produkter/elektromateriell",
  },
  {
    title: "Sparkling, fuging rep.sett",
    category: "Produktkategori",
    url: "/produkter/sparkling-fuging-repsett",
  },
  {
    title: "Verksted og reservedeler",
    category: "Produktkategori",
    url: "/produkter/verksted-reservedeler",
  },
  {
    title: "Fleksible gulv",
    category: "Produktkategori",
    url: "/produkter/fleksible-gulv",
  },
  {
    title: "Brukte maskiner",
    category: "Produktkategori",
    url: "/produkter/brukte-maskiner",
  },
]

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchResults, setSearchResults] = useState<typeof searchData>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter search results based on query
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filteredResults = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.subcategory && item.subcategory.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setSearchResults(filteredResults)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }, [searchQuery])

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/sok?q=${encodeURIComponent(searchQuery.trim())}`)
      setShowDropdown(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" title="Hjem - Gulvkompagniet AS">
            <Image
              src="/images/gulvkompagniet-logo.png"
              alt="Gulvkompagniet AS Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Hjem
          </Link>
          <MegaMenu />
          <BrandsMenu />
          <Link href="/kunnskap-ressurser" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Kunnskap/Ressurser
          </Link>
          <Link href="/om-oss" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Om Oss
          </Link>
          <Link href="/kontakt" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="relative hidden md:block" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Søk produkter..."
                className="rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim().length > 1 && setShowDropdown(true)}
              />
              <button type="submit" className="sr-only">
                Søk
              </button>
            </form>

            {/* Search Dropdown */}
            {showDropdown && (
              <div className="absolute left-0 right-0 top-full mt-1 rounded-md border bg-background shadow-lg z-50">
                {searchResults.length > 0 ? (
                  <>
                    <ul className="max-h-[300px] overflow-y-auto py-2">
                      {searchResults.slice(0, 5).map((result, index) => (
                        <li key={index}>
                          <Link
                            href={result.url}
                            className="flex items-start px-4 py-2 hover:bg-muted"
                            onClick={() => setShowDropdown(false)}
                          >
                            <div>
                              <div className="font-medium">{result.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {result.subcategory ? `${result.category} - ${result.subcategory}` : result.category}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t p-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        onClick={() => {
                          router.push(`/sok?q=${encodeURIComponent(searchQuery.trim())}`)
                          setShowDropdown(false)
                        }}
                      >
                        <span>Se alle resultater</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="p-4 text-center text-sm text-muted-foreground">Ingen resultater funnet</div>
                )}
              </div>
            )}
          </div>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => router.push("/sok")}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Søk</span>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
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
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

