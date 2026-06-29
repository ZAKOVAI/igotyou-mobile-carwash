import { Link } from 'react-router-dom'
import {
  Droplets, Sparkles, Shield, Car, Zap, Crown, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const overviewServices = [
  {
    icon: Droplets,
    name: 'I Got You Clean',
    desc: 'Foam bath hand wash, wheels, tires, interior vacuum, door jambs.',
    price: '$70',
    category: 'wash',
  },
  {
    icon: Sparkles,
    name: 'I Got You Plus',
    desc: 'Everything in Clean plus air blow-out, interior wipe-down, blow dry finish.',
    price: '$85',
    featured: true,
    badge: 'Most Popular',
    category: 'wash',
  },
  {
    icon: Shield,
    name: 'I Got You Gold',
    desc: 'Premium wash with spray wax, paint sealant, and showroom finish.',
    price: '$130',
    category: 'wash',
  },
  {
    icon: Car,
    name: 'I Got You Detail',
    desc: 'Deep interior vacuum, disinfect, UV protection, streak-free glass.',
    price: '$150',
    category: 'detail',
  },
  {
    icon: Zap,
    name: 'I Got You Full Detail',
    desc: 'Steam clean, carpet shampoo, stain removal, odor treatment.',
    price: '$250',
    featured: true,
    badge: 'Best Value',
    category: 'detail',
  },
  {
    icon: Crown,
    name: 'I Got You Gold Detail',
    desc: 'Clay bar, iron decon, paint sealant, engine bay, showroom finish.',
    price: '$350',
    category: 'detail',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">
            Six Packages. One Phone Number.
          </h2>
          <p className="text-brand-gray text-lg max-w-xl mx-auto">
            Wash packages from $70. Full detailing from $150. We come to you anywhere in the
            Aventura corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {overviewServices.map(({ icon: Icon, name, desc, price, featured, badge, category }) => (
            <div
              key={name}
              className={cn(
                'rounded-xl border overflow-hidden',
                featured
                  ? 'bg-brand-gold/10 border-brand-gold/40'
                  : 'bg-white/5 border-white/10'
              )}
            >
              {badge && (
                <div className={cn(
                  'px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-center',
                  featured ? 'bg-brand-gold text-brand-blue' : 'bg-white/10 text-white'
                )}>
                  {badge}
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <Icon className={cn(
                    'h-5 w-5',
                    featured ? 'text-brand-gold' : 'text-brand-gold/70'
                  )} />
                  <span className={cn(
                    'text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full',
                    category === 'wash'
                      ? 'bg-blue-500/10 text-blue-300'
                      : 'bg-purple-500/10 text-purple-300'
                  )}>
                    {category === 'wash' ? 'Wash' : 'Detail'}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{name}</h3>
                <p className="text-brand-gray text-xs leading-relaxed mb-3">{desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-brand-gold font-bold text-lg">{price}</div>
                  <span className="text-brand-gray text-xs">sedan base</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" variant="outline" className="gap-2">
              View Full Packages + Inclusions
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
