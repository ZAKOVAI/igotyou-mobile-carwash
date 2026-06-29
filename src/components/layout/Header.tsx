import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Service Area', to: '/service-area' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-blue/98 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-10 md:h-11 w-10 md:w-11 rounded-full overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="I Got You Car Wash & Detailing"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === link.to
                    ? 'text-brand-gold'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:3055821444">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                (305) 582-1444
              </Button>
            </a>
            <a href="sms:3055821444">
              <Button size="sm">Book / Text</Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'py-3 px-2 text-base font-medium border-b border-white/5 transition-colors',
                  location.pathname === link.to
                    ? 'text-brand-gold'
                    : 'text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href="tel:3055821444" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href="sms:3055821444" className="flex-1">
              <Button className="w-full">Book / Text</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
