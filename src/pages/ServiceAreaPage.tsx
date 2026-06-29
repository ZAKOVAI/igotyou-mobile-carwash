import { MapPin, Droplets, Building2, CheckCircle } from 'lucide-react'
import { CtaBanner } from '@/components/sections/CtaBanner'

const areas = [
  { name: 'Aventura', zips: ['33160', '33180'], primary: true },
  { name: 'Sunny Isles Beach', zips: ['33160'], primary: true },
  { name: 'Golden Beach', zips: ['33160'], primary: true },
  { name: 'Hallandale Beach', zips: ['33009'], primary: true },
  { name: 'Hollywood, FL', zips: ['33019', '33020', '33021'], primary: true },
  { name: 'North Miami Beach', zips: ['33162', '33179'], primary: true },
  { name: 'North Miami', zips: ['33161', '33181'], primary: true },
  { name: 'Bal Harbour', zips: ['33154'], primary: true },
  { name: 'Bay Harbor Islands', zips: ['33154'], primary: true },
  { name: 'Surfside', zips: ['33154'], primary: true },
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
  'Pinnacle',
  'Hamptons at Boca',
]

const condoFaqs = [
  {
    q: 'Does your building require advance notice?',
    a: 'Let us know when booking. We contact building management directly.',
  },
  {
    q: 'Do you need a parking spot?',
    a: 'We need access to the vehicle. Guest parking, valet drop, or a visitor spot all work.',
  },
  {
    q: 'What about water runoff?',
    a: "We're mindful of building policies. Our water usage is minimal and controlled.",
  },
  {
    q: "My building's valet has my keys. Is that OK?",
    a: "Yes. We work with valet staff all the time. Just coordinate the key handoff and we handle the rest.",
  },
]

export function ServiceAreaPage() {
  return (
    <div className="bg-brand-blue min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
              Where We Serve
            </span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            Aventura and the Coastal Miami Corridor
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            We cover the full stretch of the Aventura and Sunny Isles coastal corridor down to
            Surfside. No drive-through required. We come to your building, driveway, or parking
            garage.
          </p>
        </div>
      </section>

      {/* Area grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-6">
                Cities + Neighborhoods We Serve
              </h2>
              <div className="space-y-3">
                {areas.map(({ name, zips }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0" />
                      <span className="text-white font-medium">{name}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {zips.map((z) => (
                        <span
                          key={z}
                          className="text-xs text-brand-gray bg-white/5 border border-white/10 rounded px-2 py-0.5"
                        >
                          {z}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-brand-gray text-sm">
                Not on this list? Text us your zip code at{' '}
                <a href="sms:3055821444" className="text-brand-gold underline">
                  (305) 582-1444
                </a>{' '}
                and we will let you know.
              </p>
            </div>

            {/* Map embed */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                <iframe
                  title="I Got You Mobile Car Wash Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57861.22067838097!2d-80.17059124499996!3d25.960553199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b1ad8f05362b%3A0x61b39304531bc9f6!2sAventura%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Condo note */}
              <div className="p-5 rounded-xl bg-brand-navy border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-5 w-5 text-brand-gold" />
                  <h3 className="text-white font-semibold text-sm">Condo + HOA Clients</h3>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <Droplets className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-brand-gray text-sm">
                    We bring our own water tank and generator. No access to your building's water or
                    power is required.
                  </p>
                </div>
                <p className="text-brand-gray text-sm leading-relaxed">
                  We coordinate directly with building security and valet staff. Just let us know
                  your building name and unit when you book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-12 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-2">
            Condo Communities We Serve
          </h2>
          <p className="text-brand-gray mb-6 text-sm">
            Residents at these communities and many others trust I Got You for regular mobile
            detailing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {communities.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condo FAQ */}
      <section className="py-12 bg-brand-blue border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-2xl text-white mb-6">
            Condo + Building Questions
          </h2>
          <div className="space-y-4">
            {condoFaqs.map(({ q, a }) => (
              <div key={q} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold text-sm mb-2">{q}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Serve your area?"
        subtitle="Text us your zip code and we will confirm. Same-day appointments often available."
      />
    </div>
  )
}
