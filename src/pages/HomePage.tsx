import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyMobile } from '@/components/sections/WhyMobile'
import { GalleryPreview } from '@/components/sections/GalleryPreview'
import { ServiceAreaTeaser } from '@/components/sections/ServiceAreaTeaser'
import { ReviewsCarousel } from '@/components/sections/ReviewsCarousel'
import { InstagramStrip } from '@/components/sections/InstagramStrip'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaBanner } from '@/components/sections/CtaBanner'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyMobile />
      <GalleryPreview />
      <ServiceAreaTeaser />
      <ReviewsCarousel />
      <FaqSection />
      <CtaBanner />
      <InstagramStrip />
    </>
  )
}
