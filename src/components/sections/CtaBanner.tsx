import { Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CtaBannerProps {
  title?: string
  subtitle?: string
}

export function CtaBanner({
  title = 'Ready for a cleaner car?',
  subtitle = 'Book today. We come to you. No hose or outlet needed.',
}: CtaBannerProps) {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-brand-gold/20 via-brand-navy to-brand-blue border-y border-brand-gold/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">{title}</h2>
        <p className="text-brand-gray text-lg mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href="sms:3055821444">
            <Button size="xl" className="w-full sm:w-auto gap-2 font-bold text-base">
              <MessageSquare className="h-5 w-5" />
              Book / Text Now
            </Button>
          </a>
          <a href="tel:3055821444">
            <Button variant="outline" size="xl" className="w-full sm:w-auto gap-2 text-base">
              <Phone className="h-5 w-5" />
              Call (305) 582-1444
            </Button>
          </a>
        </div>

        <p className="mt-6 text-brand-gray text-sm">
          Mon-Sat 7am-9pm, Sun 8am-9pm. Same-day bookings available.
        </p>
      </div>
    </section>
  )
}
