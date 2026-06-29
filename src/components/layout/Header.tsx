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
      <div className="relative flex w-full items-center h-16 md:h-20 pl-3 pr-3 sm:pl-4 sm:pr-4 lg:pl-5 lg:pr-5">
        {/* Logo — flush left */}
        <Link to="/" className="relative z-10 shrink-0">
          <div className="h-10 md:h-11 w-10 md:w-11 rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="I Got You Car Wash & Detailing"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Desktop nav — viewport-centered */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'whitespace-nowrap text-sm font-medium transition-colors lg:text-[15px]',
                location.pathname === link.to
                  ? 'text-brand-gold'
                  : 'text-white/80 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs — flush right */}
        <div className="relative z-10 ml-auto hidden md:flex items-center gap-2 lg:gap-3">
          <a href="tel:3055821444">
            <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap">
              <Phone className="h-4 w-4" />
              (305) 582-1444
            </Button>
          </a>
          <a href="sms:3055821444">
            <Button size="sm" className="whitespace-nowrap">
              Book / Text
            </Button>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="relative z-10 ml-auto md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
