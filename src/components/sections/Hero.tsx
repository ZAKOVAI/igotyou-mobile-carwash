import { Phone, MessageSquare, Star, ShieldCheck, Droplets, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { GOOGLE_REVIEW_COUNT } from '@/data/reviews'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background: owner detailing a Porsche at a luxury Miami home */}
      <div className="absolute inset-0">
        <img
          src="/gallery/ig_008_doorstep_detail.jpg"
          alt="I Got You Mobile Car Wash — professional detailing at your doorstep"
          className="w-full h-full object-cover object-[center_40%]"
        />
        {/* Strong left-to-right gradient covers text overlays and makes copy readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
      </div>

      {/* 10% off banner */}
      <div className="absolute top-16 md:top-20 left-0 right-0 bg-brand-gold text-black text-center text-sm font-bold py-2 px-4 z-10">
        10% off your first detail. Book today — (305) 582-1444
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-16 md:pt-40">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-6">
            <div className="h-20 md:h-24 w-20 md:w-24 rounded-full overflow-hidden ring-2 ring-brand-gold/40">
              <img
                src="/logo.png"
                alt="I Got You Car Wash & Detailing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-black/50 border border-brand-gold/40 rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-white text-sm font-medium">5.0 on Google</span>
            <span className="text-white/60 text-sm">{GOOGLE_REVIEW_COUNT} reviews</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none tracking-tight mb-4">
            Professional Care.
            <br />
            <span className="text-brand-gold">We Come To You.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
            Premium mobile car wash and detailing serving Aventura, Sunny Isles, Hollywood, and
            the Miami coastal corridor. We bring our own water and power.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="sms:3055821444">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base font-bold shadow-lg shadow-brand-gold/20">
                <MessageSquare className="h-5 w-5" />
                Book / Text Us
              </Button>
            </a>
            <a href="tel:3055821444">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-base backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                (305) 582-1444
              </Button>
            </a>
            <Link to="/services">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white/70 hover:text-white">
                View Packages
              </Button>
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: Star, text: '5.0 Google Rating' },
              { icon: ShieldCheck, text: 'Insured' },
              { icon: Droplets, text: 'Own Water + Power' },
              { icon: Zap, text: 'Same-Day Available' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 border border-white/15"
              >
                <Icon className="h-4 w-4 text-brand-gold" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue to-transparent pointer-events-none" />
    </section>
  )
}
