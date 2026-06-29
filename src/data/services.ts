import type { Service } from '@/types'

export interface Package {
  id: string
  name: string
  tagline: string
  price: number
  priceDisplay: string
  suvSurcharge: string
  truckSurcharge: string
  featured?: boolean
  icon: string
  inclusions: string[]
  badge?: string
}

// ============================================================
// WASH PACKAGES (Page 1)
// SUV: +$10 | Pick-up / Large Truck: +$20
// ============================================================
export const washPackages: Package[] = [
  {
    id: 'clean',
    name: 'I Got You Clean',
    tagline: 'A complete hand wash from top to bottom.',
    price: 70,
    priceDisplay: '$70',
    suvSurcharge: '+$10',
    truckSurcharge: '+$20',
    icon: 'droplets',
    inclusions: [
      'Foam Bath Hand Wash',
      'Front Face Wheels Cleaned',
      'Tires Cleaned',
      'Tire Shine Applied',
      'Exterior Windows Cleaned',
      'Interior Windows Cleaned',
      'Quick Interior Vacuum',
      'Light Dust Removal',
      'Door Jambs Wiped Down',
      'Quality Inspection',
    ],
  },
  {
    id: 'plus',
    name: 'I Got You Plus',
    tagline: 'Everything in Clean, plus a full interior refresh.',
    price: 85,
    priceDisplay: '$85',
    suvSurcharge: '+$10',
    truckSurcharge: '+$20',
    featured: true,
    badge: 'Most Popular',
    icon: 'sparkles',
    inclusions: [
      'Everything in I Got You Clean',
      'Air Compressor Blow-Out',
      'Dashboard & Center Console Wiped Down',
      'Door Panels Wiped Down',
      'Floor Mats Cleaned',
      'Cup Holders Cleaned',
      'Light Trash Removal',
      'Blow Dry Finish',
    ],
  },
  {
    id: 'gold',
    name: 'I Got You Gold',
    tagline: 'The premium wash. Wax, protection, and a showroom finish.',
    price: 130,
    priceDisplay: '$130',
    suvSurcharge: '+$10',
    truckSurcharge: '+$20',
    icon: 'shield',
    inclusions: [
      'Everything in I Got You Plus',
      'Premium Spray Wax / Paint Sealant',
      'Plastic Trim Dressing',
      'Leather Seat Conditioning (when applicable)',
      'Bug Removal',
      'Deep Clean Door Jambs',
      'Enhanced Tire Dressing',
      'Streak-Free Glass Finish',
      'Air Freshener Application',
      'Final Showroom Inspection',
    ],
  },
]

// ============================================================
// DETAILING PACKAGES (Page 2)
// SUV & Pick-up Truck: +$30 | Large SUV (3rd row): +$50
// ============================================================
export const detailPackages: Package[] = [
  {
    id: 'detail',
    name: 'I Got You Detail',
    tagline: 'A deep interior clean with UV protection and disinfecting.',
    price: 150,
    priceDisplay: '$150',
    suvSurcharge: '+$30',
    truckSurcharge: '+$50 (Large SUV, 3rd row)',
    icon: 'car',
    inclusions: [
      'Removal of Personal Items & Disposal of Obvious Trash',
      'Air Compressor Blow-Out',
      'Deep Interior Vacuuming (Seats, Carpets, Floor Mats, Trunk & Hard-to-Reach Areas)',
      'Clean & Disinfect Interior Surfaces (Dashboard, Center Console, Door Panels, Plastic & Leather Surfaces)',
      'UV Protection Applied to Interior Surfaces',
      'Streak-Free Windows & Mirrors',
      'Air Freshener Application',
      'Final Quality Inspection',
    ],
  },
  {
    id: 'full-detail',
    name: 'I Got You Full Detail',
    tagline: 'Steam cleaning, shampoo, stain removal, and odor treatment.',
    price: 250,
    priceDisplay: '$250',
    suvSurcharge: '+$30',
    truckSurcharge: '+$50 (Large SUV, 3rd row)',
    featured: true,
    badge: 'Best Value',
    icon: 'zap',
    inclusions: [
      'High-Temperature Steam Cleaning & Sanitization',
      'Carpet Shampoo & Extraction',
      'Floor Mat Shampoo & Extraction',
      'Cloth Seat Shampoo & Extraction (when applicable)',
      'Leather Deep Cleaning & Conditioning (when applicable)',
      'Stain Treatment & Spot Removal',
      'Deep Cleaning of Crevices & Hard-to-Reach Areas',
      'Odor Reduction Treatment',
      'Premium Air Freshener Application',
      'Final Quality Inspection',
    ],
  },
  {
    id: 'gold-detail',
    name: 'I Got You Gold Detail',
    tagline: 'The complete treatment. Full exterior protection plus interior enhancement.',
    price: 350,
    priceDisplay: '$350',
    suvSurcharge: '+$30',
    truckSurcharge: '+$50 (Large SUV, 3rd row)',
    icon: 'crown',
    inclusions: [
      // Exterior
      'Exterior Hand Wash',
      'Iron Decontamination Treatment',
      'Clay Bar Paint Decontamination',
      'Bug & Tar Removal',
      'Premium Paint Sealant Protection',
      'Plastic & Trim Restoration',
      'Wheels Deep Cleaned & Protected',
      'Tire Dressing Applied',
      // Interior
      'Engine Bay Detail',
      'Interior Protection Treatment',
      'Leather Conditioning & Protection (when applicable)',
      'Premium Air Freshener Application',
      // Finishing
      'Showroom Finish Inspection',
    ],
    badge: 'Top Tier',
  },
]

// Legacy export for components that iterate all services
export const services: Service[] = [
  {
    id: 'clean',
    name: 'I Got You Clean',
    description: 'A complete foam bath hand wash. Clean from tires to glass.',
    startingPrice: '$70',
    priceNote: 'SUV +$10 | Pick-up/Large Truck +$20',
    inclusions: washPackages[0].inclusions,
    duration: '45-60 min',
    icon: 'droplets',
  },
  {
    id: 'plus',
    name: 'I Got You Plus',
    description: 'Everything in Clean plus interior blow-out, wipe-down, and blow dry finish.',
    startingPrice: '$85',
    priceNote: 'SUV +$10 | Pick-up/Large Truck +$20',
    inclusions: washPackages[1].inclusions,
    duration: '60-75 min',
    icon: 'sparkles',
    featured: true,
  },
  {
    id: 'gold',
    name: 'I Got You Gold',
    description: 'Premium wash with spray wax, paint sealant, and full interior/exterior showroom finish.',
    startingPrice: '$130',
    priceNote: 'SUV +$10 | Pick-up/Large Truck +$20',
    inclusions: washPackages[2].inclusions,
    duration: '90-120 min',
    icon: 'shield',
  },
  {
    id: 'detail',
    name: 'I Got You Detail',
    description: 'Deep interior detail with vacuuming, UV protection, and disinfection.',
    startingPrice: '$150',
    priceNote: 'SUV/Truck +$30 | Large SUV (3rd row) +$50',
    inclusions: detailPackages[0].inclusions,
    duration: '2-3 hrs',
    icon: 'car',
  },
  {
    id: 'full-detail',
    name: 'I Got You Full Detail',
    description: 'Steam cleaning, carpet shampoo, stain removal, and odor treatment.',
    startingPrice: '$250',
    priceNote: 'SUV/Truck +$30 | Large SUV (3rd row) +$50',
    inclusions: detailPackages[1].inclusions,
    duration: '3-4 hrs',
    icon: 'zap',
    featured: true,
  },
  {
    id: 'gold-detail',
    name: 'I Got You Gold Detail',
    description: 'The full treatment. Clay bar, paint sealant, full exterior protection, and premium interior restoration.',
    startingPrice: '$350',
    priceNote: 'SUV/Truck +$30 | Large SUV (3rd row) +$50',
    inclusions: detailPackages[2].inclusions,
    duration: '4-6 hrs',
    icon: 'crown',
  },
]

export const addOns: Service[] = [
  {
    id: 'headlight-restoration',
    name: 'Headlight Restoration',
    description: 'Yellowed or cloudy headlights restored to crystal-clear.',
    startingPrice: 'Ask for quote',
    priceNote: 'Per pair',
    inclusions: ['Wet sanding', 'Polish', 'UV sealant coat'],
    duration: '45-60 min',
    icon: 'sun',
    addOn: true,
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Long-term professional paint protection. Ideal for Miami salt air and UV.',
    startingPrice: 'Ask for quote',
    priceNote: 'Price varies by vehicle and coating tier',
    inclusions: ['Paint decontamination', 'Ceramic application', 'Curing'],
    duration: '1-2 days',
    icon: 'shield',
    addOn: true,
  },
  {
    id: 'pressure-washing',
    name: 'Pressure Washing',
    description: 'Home driveways, garage floors, and building exteriors.',
    startingPrice: 'Ask for quote',
    priceNote: 'Residential from $75-$150',
    inclusions: ['Pre-treat', 'Pressure wash', 'Rinse'],
    duration: 'Varies',
    icon: 'waves',
    addOn: true,
  },
]
