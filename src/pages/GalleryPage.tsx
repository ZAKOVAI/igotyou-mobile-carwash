import { Instagram } from 'lucide-react'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { galleryImages } from '@/data/gallery'

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-square rounded-xl overflow-hidden bg-brand-navy border border-white/10 relative group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export function GalleryPage() {
  const serviceImages = galleryImages.filter((img) => img.category === 'service')
  const beforeAfterImages = galleryImages.filter((img) => img.category === 'before-after')
  const brandImages = galleryImages.filter((img) => img.category === 'customer')

  return (
    <div className="bg-brand-blue min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">Gallery</h1>
          <p className="text-brand-gray text-lg max-w-2xl">
            Real results from real cars across Aventura, Sunny Isles, and the Miami coastal
            corridor. Every photo from an actual I Got You service.
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-brand-gray">
            <Instagram className="h-4 w-4 text-brand-gold" />
            Photos from{' '}
            <a
              href="https://www.instagram.com/igotyoumobilecarwash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              @igotyoumobilecarwash
            </a>
          </div>
        </div>
      </section>

      {/* Before / After */}
      {beforeAfterImages.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-2xl text-white mb-6">Before + After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beforeAfterImages.map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-navy border border-white/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service work gallery */}
      <section className="py-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-white mb-6">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {serviceImages.map((img) => (
              <GalleryImage key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand / team photos */}
      {brandImages.length > 0 && (
        <section className="py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-2xl text-white mb-6">The Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {brandImages.map((img) => (
                <GalleryImage key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Want results like this?"
        subtitle="Book your appointment today. We come to you anywhere in the Aventura corridor."
      />
    </div>
  )
}
