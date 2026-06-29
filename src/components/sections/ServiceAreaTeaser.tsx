import { Link } from 'react-router-dom'
import { MapPin, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const primaryAreas = [
  'Aventura',
  'Sunny Isles Beach',
  'Golden Beach',
  'Hallandale Beach',
  'Hollywood, FL',
  'North Miami Beach',
  'North Miami',
  'Bal Harbour',
  'Bay Harbor Islands',
  'Surfside',
]

const communities = [
  'Williams Island',
  'Turnberry Isle',
  'Porto Vita',
  'The Waterways',
  'Aventura Park Square',
  'Eastern Shores',
  "Admiral's Port",
  'Marina Palms',
  'Hidden Bay',
  'Mystique',
]

export function ServiceAreaTeaser() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                Service Area
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
              Serving the Aventura and Coastal Miami Corridor
            </h2>
            <p className="text-brand-gray leading-relaxed mb-6">
              We cover the full stretch from Hollywood to Surfside. If your zip code is below, we
              come to you. We bring our own water and power and work directly with building security
              for condo and high-rise clients.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {primaryAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-sm text-white/80"
                >
                  <MapPin className="h-3 w-3 text-brand-gold" />
                  {area}
                </span>
              ))}
            </div>

            <Link to="/service-area">
              <Button variant="outline" className="gap-2">
                View Full Service Area
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-brand-navy border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Condo Communities We Serve
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5">
              {communities.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-brand-gray">
                  <div className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-brand-gray text-sm">
                We coordinate with building security and valet staff. No hose or outlet required from
                you or your building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
