import { Star, ShieldCheck, Droplets, MapPin, Clock } from 'lucide-react'
import { GOOGLE_MAPS_URL, GOOGLE_REVIEW_COUNT } from '@/data/reviews'

const trustItems = [
  {
    icon: Star,
    title: '5.0 on Google',
    subtitle: `${GOOGLE_REVIEW_COUNT} verified reviews`,
    href: GOOGLE_MAPS_URL,
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    subtitle: 'Peace of mind on every visit',
  },
  {
    icon: Droplets,
    title: 'Own Water + Power',
    subtitle: 'No hookups needed from you',
  },
  {
    icon: MapPin,
    title: 'Aventura + Coastal Miami',
    subtitle: 'Condo and HOA friendly',
  },
  {
    icon: Clock,
    title: 'Mon-Sat 7am-9pm',
    subtitle: 'Sun 8am-9pm',
  },
]

export function TrustBar() {
  return (
    <section className="bg-brand-navy border-y border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/10">
          {trustItems.map(({ icon: Icon, title, subtitle, href }) => {
            const content = (
              <div className="flex flex-col items-center text-center px-4 py-2 gap-1">
                <Icon className="h-5 w-5 text-brand-gold mb-1" />
                <span className="text-white text-sm font-semibold">{title}</span>
                <span className="text-brand-gray text-xs">{subtitle}</span>
              </div>
            )

            return href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white/5 rounded-lg transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={title}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
