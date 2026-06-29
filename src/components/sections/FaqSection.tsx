import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqItems } from '@/data/faq'

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">
            Common Questions
          </h2>
          <p className="text-brand-gray">
            Everything you need to know before booking.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
