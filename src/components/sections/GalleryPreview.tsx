import { Link } from 'react-router-dom'
import { ChevronRight, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { galleryImages } from '@/data/gallery'

// Show the 6 best gallery images on the home page
const previewImages = [
  galleryImages[0], // before/after Lincoln
  galleryImages[1], // BMW luxury
  galleryImages[6], // branded van
  galleryImages[8], // owner + van
  galleryImages[10], // pressure washing
  galleryImages[5], // equipment shot
]

export function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-2">
              The Work Speaks for Itself
            </h2>
            <p className="text-brand-gray">
              Real results. Real customers. Every photo from a real I Got You service.
            </p>
          </div>
          <Link to="/gallery">
            <Button variant="outline" className="gap-2 shrink-0">
              View Full Gallery
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewImages.map((img, i) => (
            <Link
              key={img.src}
              to="/gallery"
              className={`relative overflow-hidden rounded-xl bg-brand-blue group ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`${i === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {img.serviceName && (
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs font-semibold bg-brand-gold/90 px-2 py-1 rounded">
                    {img.serviceName}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm text-brand-gray">
          <Instagram className="h-4 w-4 text-brand-gold" />
          <span>All photos from</span>
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
  )
}
