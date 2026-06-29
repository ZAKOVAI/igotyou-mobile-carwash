export interface Review {
  name: string
  rating: number
  text: string
  date: string
}

export interface Service {
  id: string
  name: string
  description: string
  startingPrice: string
  priceNote?: string
  inclusions: string[]
  duration: string
  icon: string
  featured?: boolean
  addOn?: boolean
  badge?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: 'before-after' | 'service' | 'customer'
  serviceName?: string
}
