'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'EstateHub made finding our dream home effortless. Their team guided us through every step and found the perfect property within our budget. The attention to detail and personal touch made all the difference.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    content: 'As a real estate investor, I appreciate their market expertise. They helped me build a diversified portfolio of income-generating properties. Their market analysis is consistently accurate and insightful.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'First-time Buyer',
    content: 'I was nervous about buying my first home, but the team made it simple and stress-free. They answered all 100+ of my questions with patience and found me the perfect starter home. Could not recommend them enough.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'David Thompson',
    role: 'Property Developer',
    content: 'The valuation and market insights provided by EstateHub were instrumental in our latest development project. Their data-driven approach gave us the confidence to move forward with precision and clarity.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Lisa Park',
    role: 'Luxury Home Seller',
    content: 'Selling my luxury property required a special touch, and EstateHub delivered beyond expectations. Their staging expertise, photography, and network of qualified buyers resulted in a sale above asking price.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed text-lg">
            Real stories from real clients who trusted us with their real estate journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

            <div className="relative">
              <svg className="w-12 h-12 text-amber-400/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <div className="relative min-h-[180px]">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ${
                      i === active
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                    <div className="mt-8 flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/50" />
                      <div>
                        <p className="text-base font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-amber-400/80">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === active ? 'w-8 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActive(active === 0 ? testimonials.length - 1 : active - 1)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-white/60 hover:text-white"
                    aria-label="Previous"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActive(active === testimonials.length - 1 ? 0 : active + 1)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-white/60 hover:text-white"
                    aria-label="Next"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
