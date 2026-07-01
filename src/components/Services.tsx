"use client";
import { useEffect, useRef, useState } from "react";
import { openAuth } from "./AuthModal";

const services = [
  {
    id: 1,
    title: 'Property Sales',
    description: 'Expert guidance through every step of your property purchase or sale, ensuring the best possible outcome.',
    color: 'blue',
    gradient: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100/50',
    features: ['Market analysis & pricing', 'Professional photography', 'Negotiation expertise', 'Paperwork management'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Property Management',
    description: 'Comprehensive management services to maximize your rental income while minimizing stress.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-emerald-50 to-emerald-100/50',
    features: ['Tenant screening', 'Maintenance coordination', 'Rent collection', 'Periodic inspections'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Home Valuation',
    description: 'Accurate, data-driven property valuations to help you make informed real estate decisions.',
    color: 'violet',
    gradient: 'from-violet-600 to-violet-700',
    bgGradient: 'from-violet-50 to-violet-100/50',
    features: ['Comparable market analysis', 'CMA reports', 'Investment analysis', 'Price trend forecasting'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Interior Design',
    description: 'Professional staging and interior design services to showcase your property at its best.',
    color: 'rose',
    gradient: 'from-rose-600 to-rose-700',
    bgGradient: 'from-rose-50 to-rose-100/50',
    features: ['Space planning', 'Color consultation', 'Furniture selection', 'Staging expertise'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Mortgage Assistance',
    description: 'Connect with trusted lenders and navigate the mortgage process with confidence.',
    color: 'amber',
    gradient: 'from-amber-500 to-amber-600',
    bgGradient: 'from-amber-50 to-amber-100/50',
    features: ['Pre-approval guidance', 'Rate comparison', 'Document preparation', 'Closing coordination'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M17.25 6v6m0-10.5v.75A.75.75 0 0016.5 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M3.75 6H19.5m0 0v1.5m0-1.5h.75m-1.5 0h-15" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Legal Support',
    description: 'Access to experienced real estate attorneys for smooth, legally sound transactions.',
    color: 'cyan',
    gradient: 'from-cyan-600 to-cyan-700',
    bgGradient: 'from-cyan-50 to-cyan-100/50',
    features: ['Contract review', 'Due diligence', 'Title search', 'Closing representation'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
]

const colorMap: Record<string, { border: string; light: string; text: string; ring: string }> = {
  blue: { border: 'border-blue-200', light: 'bg-blue-50', text: 'text-blue-600', ring: 'ring-blue-200' },
  emerald: { border: 'border-emerald-200', light: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-200' },
  violet: { border: 'border-violet-200', light: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-200' },
  rose: { border: 'border-rose-200', light: 'bg-rose-50', text: 'text-rose-600', ring: 'ring-rose-200' },
  amber: { border: 'border-amber-200', light: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-200' },
  cyan: { border: 'border-cyan-200', light: 'bg-cyan-50', text: 'text-cyan-600', ring: 'ring-cyan-200' },
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/40 via-amber-50/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100/40 via-blue-50/10 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed text-lg">
            From first viewing to final signature, our full suite of services ensures a seamless real estate experience.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const c = colorMap[service.color]
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/10 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative h-full bg-white border border-gray-100 rounded-2xl group-hover:border-transparent transition-colors duration-500">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />

                  <div className="p-7 lg:p-8">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 ${c.light} ${c.text} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shrink-0`}>
                        <div className={`absolute inset-0 ${c.light} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className="relative">{service.icon}</div>
                      </div>
                      <span className="text-6xl lg:text-7xl font-bold text-gray-50 select-none leading-none -mt-2 -mr-1">
                        {String(service.id).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 group-hover:text-gray-600 transition-colors">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.features.map((f) => (
                        <span key={f} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${c.light} ${c.text} border ${c.border}`}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className={`text-sm font-semibold ${c.text} flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}>
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openAuth('signup')}
                          className={`px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r ${service.gradient} rounded-xl hover:shadow-lg hover:shadow-${service.color}-500/25 transition-all hover:scale-105`}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="/consultation" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all group text-sm font-semibold">
            <span>Schedule a Free Consultation</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
