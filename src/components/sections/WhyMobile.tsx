import { MapPin, Droplets, Clock, ShieldCheck, Building2, Sun } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: 'We come to your location',
    desc: 'Your condo, office, or driveway. No need to drive anywhere or wait in a line.',
  },
  {
    icon: Droplets,
    title: 'We bring our own water and power',
    desc: 'Self-contained setup. We do not need a hose connection or outlet from you or your building.',
  },
  {
    icon: Building2,
    title: 'Condo and HOA friendly',
    desc: 'We coordinate with building security and valet. Residents at Williams Island, Turnberry, Porto Vita, Marina Palms, and more trust us.',
  },
  {
    icon: Clock,
    title: 'You get your time back',
    desc: 'Book for when your car is parked. We take care of it while you work, rest, or go about your day.',
  },
  {
    icon: Sun,
    title: "Miami's climate demands it",
    desc: "Salt air, UV exposure, and daily heat cycles break down paint faster here than almost anywhere. Regular professional care protects your investment.",
  },
  {
    icon: ShieldCheck,
    title: 'Owner-operated quality',
    desc: 'Not a franchise. The same person who earns your trust does the work. That is how we hold a 5.0 rating.',
  },
]

export function WhyMobile() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">
            Why Mobile. Why I Got You.
          </h2>
          <p className="text-brand-gray text-lg max-w-xl mx-auto">
            A different approach to car care. Built for how coastal Miami residents actually live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-brand-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
