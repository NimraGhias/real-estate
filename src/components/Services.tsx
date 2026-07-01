const services = [
  {
    title: 'Property Sales',
    description: 'Expert guidance through every step of your property purchase or sale, ensuring the best possible outcome.',
    gradient: 'from-blue-600 to-blue-800',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    description: 'Comprehensive management services to maximize your rental income while minimizing stress.',
    gradient: 'from-emerald-600 to-emerald-800',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Home Valuation',
    description: 'Accurate, data-driven property valuations to help you make informed real estate decisions.',
    gradient: 'from-violet-600 to-violet-800',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: 'Interior Design',
    description: 'Professional staging and interior design services to showcase your property at its best.',
    gradient: 'from-rose-600 to-rose-800',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Mortgage Assistance',
    description: 'Connect with trusted lenders and navigate the mortgage process with confidence.',
    gradient: 'from-amber-600 to-amber-700',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M17.25 6v6m0-10.5v.75A.75.75 0 0016.5 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M3.75 6H19.5m0 0v1.5m0-1.5h.75m-1.5 0h-15" />
      </svg>
    ),
  },
  {
    title: 'Legal Support',
    description: 'Access to experienced real estate attorneys for smooth, legally sound transactions.',
    gradient: 'from-cyan-600 to-cyan-800',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed text-lg">
            From first viewing to final signature, we provide comprehensive real estate services tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/10 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6 lg:p-8 bg-white rounded-2xl h-full group-hover:bg-white/95 transition-colors duration-500">
                <div className={`w-14 h-14 ${service.lightBg} ${service.lightText} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <div className="relative">
                    <div className={`absolute inset-0 ${service.lightBg} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">{service.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
