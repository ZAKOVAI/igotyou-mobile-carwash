import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { googleReviews, GOOGLE_MAPS_URL, GOOGLE_REVIEW_COUNT } from '@/data/reviews'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
      ))}
    </div>
  )
}

export function ReviewsCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    [autoplay.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const resetAutoplay = useCallback(() => {
    autoplay.current?.reset()
  }, [])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section className="py-16 md:py-24 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-2 hover:opacity-90 transition-opacity"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-white font-display font-black text-3xl">5.0</span>
              <span className="text-brand-gray text-sm">on Google</span>
              <ExternalLink className="h-4 w-4 text-brand-gray" />
            </a>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white">
              What Our Customers Say
            </h2>
            <p className="text-brand-gray mt-1 text-sm">
              {GOOGLE_REVIEW_COUNT} verified Google reviews. Tap any review to verify.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {googleReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(33.333%-11px)] min-w-0"
              >
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{review.name}</div>
                      <div className="text-brand-gray text-xs">{review.date}</div>
                    </div>
                    <div className="flex items-center gap-1 bg-brand-gold/10 px-2 py-1 rounded-md border border-brand-gold/20">
                      <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                      <span className="text-brand-gold text-xs font-bold">5.0</span>
                    </div>
                  </div>

                  <StarRating count={review.rating} />

                  <p className="mt-3 text-white/80 text-sm leading-relaxed">{review.text}</p>

                  <div className="mt-4 flex items-center gap-1.5 text-brand-gray text-xs group-hover:text-brand-gold transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Verified on Google
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Position indicator */}
        <div className="flex justify-center mt-6">
          <span className="text-brand-gray text-sm">
            Review {selectedIndex + 1} of {GOOGLE_REVIEW_COUNT}
          </span>
        </div>
      </div>
    </section>
  )
}
