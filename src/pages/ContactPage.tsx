import { useState } from 'react'
import { Phone, MessageSquare, Instagram, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FormState {
  name: string
  phone: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  service: string
  zip: string
  preferredDate: string
  message: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  service: '',
  zip: '',
  preferredDate: '',
  message: '',
}

const serviceOptions = [
  'Express Hand Wash',
  'Wash + Wax',
  'Full Interior + Exterior Detail',
  'Paint Polish / Correction',
  'Ceramic Coating',
  'Headlight Restoration',
  'Engine Bay Cleaning',
  'Pressure Washing',
  'Not sure — recommend for me',
]

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build SMS body with form data and open native SMS app
    const body = encodeURIComponent(
      `New quote request from website:\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Vehicle: ${form.vehicleYear} ${form.vehicleMake} ${form.vehicleModel}\n` +
        `Service: ${form.service}\n` +
        `Location (zip): ${form.zip}\n` +
        `Preferred date: ${form.preferredDate}\n` +
        `Message: ${form.message}`
    )
    window.location.href = `sms:3055821444?body=${body}`
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-brand-blue min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <CheckCircle className="h-16 w-16 text-brand-gold mx-auto mb-4" />
          <h1 className="font-display font-black text-3xl text-white mb-3">
            Your SMS is ready to send.
          </h1>
          <p className="text-brand-gray mb-6">
            Your message has been pre-filled in your SMS app. Hit send and we will get back to you
            the same day.
          </p>
          <a href="tel:3055821444">
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="h-5 w-5" />
              Or call us now
            </Button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-brand-blue min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            Book an Appointment
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl">
            Fill out the form below or text us directly at (305) 582-1444. We will confirm your
            appointment the same day.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Contact info */}
            <div className="space-y-5">
              <div>
                <h2 className="font-display font-black text-2xl text-white mb-5">
                  Reach Us Directly
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:3055821444"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">
                        Call Now
                      </div>
                      <div className="text-brand-gray text-sm">(305) 582-1444</div>
                    </div>
                  </a>
                  <a
                    href="sms:3055821444"
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/15 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-brand-gold font-semibold text-sm">
                        Text to Book
                      </div>
                      <div className="text-brand-gray text-sm">Fastest response</div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/igotyoumobilecarwash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">
                        Instagram DM
                      </div>
                      <div className="text-brand-gray text-sm">@igotyoumobilecarwash</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-navy border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-brand-gold" />
                  <span className="text-white font-semibold text-sm">Hours</span>
                </div>
                <div className="space-y-1.5 text-sm text-brand-gray">
                  <div className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span className="text-white">7:00am - 9:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">8:00am - 9:00pm</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20">
                <div className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">
                  10% Off First Detail
                </div>
                <div className="text-brand-gray text-xs">
                  Mention when booking. New customers only.
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="(305) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="vehicleYear" className="block text-sm font-medium text-white/80 mb-1.5">
                      Year
                    </label>
                    <input
                      id="vehicleYear"
                      name="vehicleYear"
                      type="text"
                      value={form.vehicleYear}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="2022"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleMake" className="block text-sm font-medium text-white/80 mb-1.5">
                      Make
                    </label>
                    <input
                      id="vehicleMake"
                      name="vehicleMake"
                      type="text"
                      value={form.vehicleMake}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="BMW"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleModel" className="block text-sm font-medium text-white/80 mb-1.5">
                      Model
                    </label>
                    <input
                      id="vehicleModel"
                      name="vehicleModel"
                      type="text"
                      value={form.vehicleModel}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="X5"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-brand-navy border border-white/20 text-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-white/80 mb-1.5">
                      Your Zip Code / Address *
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      value={form.zip}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="33160 or Williams Island Blvd"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-white/80 mb-1.5">
                    Preferred Date / Time
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="text"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="e.g. Saturday morning, ASAP, weekday afternoons"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    placeholder="Building name, special requests, questions..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 text-base font-bold">
                  <Send className="h-5 w-5" />
                  Send Quote Request
                </Button>

                <p className="text-brand-gray text-xs text-center">
                  Submitting opens your SMS app with your details pre-filled. We respond same day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
