import { Star, Shield, Sun, Droplets, Award } from 'lucide-react'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { GOOGLE_MAPS_URL, GOOGLE_REVIEW_COUNT } from '@/data/reviews'

const values = [
  {
    icon: Star,
    title: 'Every detail matters',
    desc: 'The stain Gina thought was permanent. The swirl marks Morgan noticed in direct sunlight. The engine bay nobody thinks to look at. These are the things that separate a rushed wash from a real detail.',
  },
  {
    icon: Shield,
    title: 'Owner-operated quality',
    desc: "You're not getting a revolving crew of part-timers. The same person who earns your trust at booking is the person doing the work. That's how we hold a 5.0 rating and earn the repeat business.",
  },
  {
    icon: Droplets,
    title: 'Self-contained and condo-ready',
    desc: 'We invest in the right equipment so clients never have to provide access to their building\'s utilities. A water tank and a generator travel with us to every job.',
  },
  {
    icon: Sun,
    title: 'Built for Miami',
    desc: "Salt air, intense UV, and daily heat cycles require a different standard of care than inland markets. We know what Miami does to a car's paint over time. We know how to fight it.",
  },
]

export function AboutPage() {
  return (
    <div className="bg-brand-blue min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              About I Got You
            </h1>
            <p className="text-brand-gray text-lg leading-relaxed">
              A one-person operation that earns a 5.0 rating one car at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-6">
                The I Got You Story
              </h2>

              {/* OWNER PLACEHOLDER: Replace name and year below */}
              {/* Owner photo */}
            <div className="mb-6 rounded-xl overflow-hidden aspect-video md:aspect-[4/3]">
              <img
                src="/gallery/ig_004_vip_luxury_detail.jpg"
                alt="Founder of I Got You Mobile Car Wash in front of service van"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  {/* TODO: Owner to fill in name and founding year */}
                  [Owner name], founder of I Got You, has been detailing cars across the Aventura
                  coast since [year]. What started as a word-of-mouth operation in the buildings
                  along Biscayne Bay grew into one of the most trusted mobile detailing services
                  in the coastal Miami corridor.
                </p>
                <p>
                  The model is simple: bring a full professional setup directly to the client,
                  deliver results that hold up to the Miami climate, and make the booking process
                  as frictionless as a text message.
                </p>
                <p>
                  We work with residents at Williams Island, Turnberry Isle, Marina Palms, Porto
                  Vita, and dozens of other buildings from Hollywood to Surfside. Every client
                  gets the same attention whether it's a sedan or a luxury SUV.
                </p>
                <p>
                  Seven Google reviews. Five stars on every one. That's the standard we hold
                  ourselves to.
                </p>
              </div>

              <div className="mt-8 p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-xl">
                <p className="text-brand-gray text-xs italic">
                  Owner: Replace the paragraph above with your real story. How long have you been
                  detailing? Where did you grow up? What made you start I Got You? This is where
                  potential customers decide whether they trust you.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Google rating highlight */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6 text-brand-gold" />
                  <span className="text-white font-semibold">Google Rating</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-black text-5xl text-brand-gold">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-brand-gray text-sm">
                  {GOOGLE_REVIEW_COUNT} verified reviews on Google. Tap to see them.
                </p>
              </a>

              {/* Condo note */}
              <div className="p-6 rounded-xl bg-brand-navy border border-white/10">
                <h3 className="text-white font-semibold mb-3">Hours</h3>
                <div className="space-y-2 text-sm text-brand-gray">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-white">7:00am - 9:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">8:00am - 9:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-8">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-brand-gold" />
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

      <CtaBanner />
    </div>
  )
}
