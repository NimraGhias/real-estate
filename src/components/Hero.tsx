"use client";
export default function Hero() {
  const handleSearch = () => {
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Luxury home"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/60 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Premium Real Estate Services
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Dream Home
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
            Discover exceptional properties in prime locations. We help you find the perfect place to call home.
          </p>

          <div className="mt-10">
            <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">Location</label>
                  <select className="w-full text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400/40 appearance-none cursor-pointer">
                    <option className="text-gray-900">New York, NY</option>
                    <option className="text-gray-900">Los Angeles, CA</option>
                    <option className="text-gray-900">Miami, FL</option>
                    <option className="text-gray-900">Chicago, IL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">Property Type</label>
                  <select className="w-full text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400/40 appearance-none cursor-pointer">
                    <option className="text-gray-900">All Types</option>
                    <option className="text-gray-900">House</option>
                    <option className="text-gray-900">Apartment</option>
                    <option className="text-gray-900">Villa</option>
                    <option className="text-gray-900">Condo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">Price Range</label>
                  <select className="w-full text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400/40 appearance-none cursor-pointer">
                    <option className="text-gray-900">Any Price</option>
                    <option className="text-gray-900">$100k — $300k</option>
                    <option className="text-gray-900">$300k — $500k</option>
                    <option className="text-gray-900">$500k — $1M</option>
                    <option className="text-gray-900">$1M+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button onClick={handleSearch} className="w-full py-2.5 text-sm font-semibold text-gray-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            <div className="animate-fade-in-up">
              <span className="text-3xl lg:text-4xl font-bold text-white">500+</span>
              <p className="text-sm text-white/50 mt-1">Properties Listed</p>
            </div>
            <div className="animate-fade-in-up-delayed">
              <span className="text-3xl lg:text-4xl font-bold text-white">200+</span>
              <p className="text-sm text-white/50 mt-1">Happy Clients</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-3xl lg:text-4xl font-bold text-white">50+</span>
              <p className="text-sm text-white/50 mt-1">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
