import {
  Droplets, Sparkles, Car, Zap, Shield, Sun, Waves, Check,
  MessageSquare, Crown, ChevronRight, Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { cn } from '@/lib/utils'
import { washPackages, detailPackages, addOns, type Package } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  sparkles: Sparkles,
  car: Car,
  zap: Zap,
  shield: Shield,
  sun: Sun,
  waves: Waves,
  crown: Crown,
}

// Gold Detail inclusions have section groupings
const goldDetailSections = [
  {
    label: 'Exterior Enhancement & Protection',
    items: [
      'Exterior Hand Wash',
      'Iron Decontamination Treatment',
      'Clay Bar Paint Decontamination',
      'Bug & Tar Removal',
      'Premium Paint Sealant Protection',
      'Plastic & Trim Restoration',
      'Wheels Deep Cleaned & Protected',
      'Tire Dressing Applied',
    ],
  },
  {
    label: 'Interior Enhancement',
    items: [
      'Engine Bay Detail',
      'Interior Protection Treatment',
      'Leather Conditioning & Protection (when applicable)',
      'Premium Air Freshener Application',
    ],
  },
  {
    label: 'Finishing Touches',
    items: ['Showroom Finish Inspection'],
  },
]

function PackageCard({ pkg, isDetail }: { pkg: Package; isDetail?: boolean }) {
  const Icon = iconMap[pkg.icon] ?? Droplets
  const isGoldDetail = pkg.id === 'gold-detail'

  return (
    <div
      className={cn(
        'rounded-2xl border flex flex-col h-full',
        pkg.featured
          ? 'bg-gradient-to-b from-brand-gold/15 to-brand-gold/5 border-brand-gold/50 ring-2 ring-brand-gold/30'
          : 'bg-white/5 border-white/10'
      )}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className={cn(
          'rounded-t-2xl px-4 py-2 text-center text-xs font-bold uppercase tracking-widest',
          pkg.featured ? 'bg-brand-gold text-brand-blue' : 'bg-white/10 text-white'
        )}>
          {pkg.badge}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-5">
          <div className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
            pkg.featured ? 'bg-brand-gold/20' : 'bg-white/8'
          )}>
            <Icon className="h-5 w-5 text-brand-gold" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{pkg.name}</h3>
            <p className="text-brand-gray text-sm mt-0.5">{pkg.tagline}</p>
          </div>
        </div>

        {/* Price */}
        <div className={cn(
          'rounded-xl p-4 mb-5 text-center',
          pkg.featured ? 'bg-brand-gold/20' : 'bg-white/5'
        )}>
          <div className={cn(
            'font-display font-black text-4xl',
            pkg.featured ? 'text-brand-gold' : 'text-white'
          )}>
            {pkg.priceDisplay}
          </div>
          <div className="text-brand-gray text-xs mt-1">Sedan / Coupe base price</div>
        </div>

        {/* Vehicle surcharges */}
        <div className="flex gap-2 mb-5">
          <div className="flex-1 flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 text-xs">
            <Truck className="h-3.5 w-3.5 text-brand-gold shrink-0" />
            <span className="text-brand-gray">SUV</span>
            <span className="text-white font-semibold ml-auto">{pkg.suvSurcharge}</span>
          </div>
          <div className="flex-1 flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 text-xs">
            <Truck className="h-3.5 w-3.5 text-brand-gold shrink-0" />
            <span className="text-brand-gray truncate">{isDetail ? 'Large SUV' : 'Truck'}</span>
            <span className="text-white font-semibold ml-auto">{pkg.truckSurcharge.split(' ')[0]}</span>
          </div>
        </div>

        {/* Inclusions */}
        <div className="flex-1 mb-5">
          {isGoldDetail ? (
            <div className="space-y-4">
              {goldDetailSections.map(({ label, items }) => (
                <div key={label}>
                  <div className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-2">
                    {label}
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-2">
              {pkg.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <a href="sms:3055821444" className="mt-auto">
          <Button
            className="w-full gap-2"
            variant={pkg.featured ? 'default' : 'outline'}
          >
            <MessageSquare className="h-4 w-4" />
            Book {pkg.name.split(' ').slice(-1)[0]}
          </Button>
        </a>
      </div>
    </div>
  )
}

export function ServicesPage() {
  return (
    <div className="bg-brand-blue min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              Services + Packages
            </h1>
            <p className="text-brand-gray text-lg leading-relaxed">
              Every service is performed at your location. We bring our own water and power. No
              hookups needed from you or your building.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-brand-gray">
              <Truck className="h-4 w-4 text-brand-gold" />
              SUV surcharges apply. Prices shown are for sedans / coupes.
            </div>
            <a href="#detailing" className="inline-flex items-center gap-2 text-brand-gold border border-brand-gold/30 rounded-full px-4 py-2 hover:bg-brand-gold/10 transition-colors">
              Jump to Detailing Packages
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Wash Packages */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="h-5 w-5 text-brand-gold" />
              <h2 className="font-display font-black text-2xl md:text-3xl text-white">
                Car Wash Packages
              </h2>
            </div>
            <p className="text-brand-gray text-sm ml-8">
              Sedan / Coupe base price. SUV +$10 / Pick-up & Large Truck +$20.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {washPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailing Packages */}
      <section id="detailing" className="py-14 md:py-20 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="h-5 w-5 text-brand-gold" />
              <h2 className="font-display font-black text-2xl md:text-3xl text-white">
                Detailing Packages
              </h2>
            </div>
            <p className="text-brand-gray text-sm ml-8">
              Sedan / Coupe base price. SUV & Pick-up Truck +$30 / Large SUV (3rd row) +$50.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} isDetail />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 bg-brand-blue border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-2">
            Additional Services
          </h2>
          <p className="text-brand-gray text-sm mb-8">
            Ceramic coating, headlight restoration, and pressure washing. Contact us for custom quotes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {addOns.map(({ icon, name, startingPrice, description: desc }) => {
              const Icon = iconMap[icon] ?? Droplets
              return (
                <div key={name} className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
                  <div>
                    <Icon className="h-5 w-5 text-brand-gold mb-2" />
                    <h3 className="text-white font-semibold text-sm mb-1">{name}</h3>
                    <p className="text-brand-gray text-xs leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                    <span className="text-brand-gold font-bold text-sm">{startingPrice}</span>
                    <a href="sms:3055821444">
                      <Button size="sm" variant="ghost" className="text-brand-gold text-xs gap-1">
                        Get Quote <ChevronRight className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which package is right for you?"
        subtitle="Text us and we will recommend the best service for your vehicle and budget."
      />
    </div>
  )
}
