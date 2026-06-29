import { Link } from 'react-router-dom'
import { Phone, Instagram, Clock, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-blue border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img
                  src="/logo.png"
                  alt="I Got You Car Wash & Detailing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-4">
              Premium mobile detailing. We bring everything to you. No hose, no outlet required.
            </p>
            <a
              href="https://www.instagram.com/igotyoumobilecarwash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-brand-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @igotyoumobilecarwash
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              {[
                'Express Hand Wash',
                'Wash + Wax',
                'Full Interior + Exterior Detail',
                'Paint Polish / Correction',
                'Ceramic Coating',
                'Headlight Restoration',
                'Engine Bay Cleaning',
                'Pressure Washing',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-brand-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Area
            </h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              {[
                'Aventura',
                'Sunny Isles Beach',
                'Golden Beach',
                'Hallandale Beach',
                'Hollywood, FL',
                'North Miami Beach',
                'North Miami',
                'Bal Harbour / Surfside',
              ].map((area) => (
                <li key={area}>
                  <Link to="/service-area" className="hover:text-brand-gold transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:3055821444"
                  className="flex items-center gap-2 text-brand-gray hover:text-brand-gold transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (305) 582-1444
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-brand-gray">
                  <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <div>Mon-Sat: 7am - 9pm</div>
                    <div>Sunday: 8am - 9pm</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-brand-gray">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>Aventura + coastal Miami corridor</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-brand-gold/10 rounded-lg border border-brand-gold/20">
              <div className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-1">
                10% Off Your First Detail
              </div>
              <div className="text-brand-gray text-xs">
                Mention this offer when you book. New customers only.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <div>
            &copy; {new Date().getFullYear()} I Got You Mobile Car Wash. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-brand-gold transition-colors">
              Book an Appointment
            </Link>
            <Link to="/services" className="hover:text-brand-gold transition-colors">
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
