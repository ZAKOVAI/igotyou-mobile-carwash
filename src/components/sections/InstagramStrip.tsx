import { Instagram } from 'lucide-react'
import { instagramImages } from '@/data/gallery'

export function InstagramStrip() {
  return (
    <section className="py-14 bg-brand-blue border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Instagram className="h-5 w-5 text-brand-gold" />
            <span className="text-white font-semibold text-sm">
              @igotyoumobilecarwash on Instagram
            </span>
          </div>
          <a
            href="https://www.instagram.com/igotyoumobilecarwash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold border border-brand-gold/40 rounded-full px-4 py-2 hover:bg-brand-gold/10 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Follow Us
          </a>
        </div>

        {/* Scrollable strip on mobile, grid on desktop */}
        <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 md:grid-cols-8 sm:overflow-visible">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/igotyoumobilecarwash"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 snap-start w-32 sm:w-auto aspect-square rounded-lg overflow-hidden bg-brand-navy border border-white/10 hover:border-brand-gold/50 transition-all group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        {/* Live feed note for future */}
        {/* TODO: Replace with Behold (behold.so) or Curator embed for live Instagram feed */}
      </div>
    </section>
  )
}
