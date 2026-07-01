export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Premium Real Estate Services
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find Your Dream
            <span className="block text-amber-400">Home Today</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed">
            Discover exceptional properties in prime locations. We help you find the perfect place to call home.
          </p>

          <div className="mt-10">
            <div className="bg-white p-4 rounded-xl shadow-2xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Location</label>
                  <select className="w-full text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900/20">
                    <option>New York, NY</option>
                    <option>Los Angeles, CA</option>
                    <option>Miami, FL</option>
                    <option>Chicago, IL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Property Type</label>
                  <select className="w-full text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900/20">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Condo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Price Range</label>
                  <select className="w-full text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900/20">
                    <option>Any Price</option>
                    <option>$100k - $300k</option>
                    <option>$300k - $500k</option>
                    <option>$500k - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full py-2.5 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <span className="text-3xl font-bold text-white">500+</span>
              <p className="text-sm text-white/60">Properties Listed</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">200+</span>
              <p className="text-sm text-white/60">Happy Clients</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">50+</span>
              <p className="text-sm text-white/60">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
