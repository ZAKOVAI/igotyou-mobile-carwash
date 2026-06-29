import { Phone, MessageSquare } from 'lucide-react'

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/10 bg-brand-blue shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      <a
        href="tel:3055821444"
        className="flex-1 flex items-center justify-center gap-2 h-14 bg-brand-navy text-white font-semibold text-sm active:bg-white/10 transition-colors"
        aria-label="Call I Got You Mobile Car Wash"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <div className="w-px bg-white/10" />
      <a
        href="sms:3055821444"
        className="flex-1 flex items-center justify-center gap-2 h-14 bg-brand-gold text-brand-blue font-bold text-sm active:bg-brand-gold-light transition-colors"
        aria-label="Text to book I Got You Mobile Car Wash"
      >
        <MessageSquare className="h-5 w-5" />
        Book a Wash
      </a>
    </div>
  )
}
