export interface ProductFeature {
  name: string
  description?: string
  grits?: string[]
  sizes?: string[]
  features?: string[]
}

export interface ProductVariant {
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

