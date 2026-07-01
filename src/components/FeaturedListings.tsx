const listings = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: '$4,800,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=85',
    tag: 'Featured',
    agent: 'Sarah Mitchell',
  },
  {
    id: 2,
    title: 'Luxury Downtown Penthouse',
    location: 'New York, NY',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
    tag: 'New',
    agent: 'James Wilson',
  },
  {
    id: 3,
    title: 'Elegant Suburban Estate',
    location: 'Greenwich, CT',
    price: '$6,500,000',
    beds: 7,
    baths: 6,
    sqft: '6,800',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85',
    tag: 'Premium',
    agent: 'Emily Carter',
  },
  {
    id: 4,
    title: 'Waterfront Family Home',
    location: 'Miami Beach, FL',
    price: '$2,950,000',
    beds: 4,
    baths: 3,
    sqft: '3,400',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=85',
    tag: 'Reduced',
    agent: 'Michael Chen',
  },
  {
    id: 5,
    title: 'Contemporary City Apartment',
    location: 'San Francisco, CA',
    price: '$1,850,000',
    beds: 2,
    baths: 2,
    sqft: '1,600',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=85',
    tag: 'Featured',
    agent: 'Lisa Park',
  },
  {
    id: 6,
    title: 'Historic Brownstone',
    location: 'Boston, MA',
    price: '$5,100,000',
    beds: 6,
    baths: 4,
    sqft: '5,200',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=85',
    tag: 'New',
    agent: 'David Kim',
  },
]

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.2em]">Featured Properties</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Discover Our Top Picks
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed text-lg">
            Explore our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                  property.tag === 'Featured'
                    ? 'bg-amber-400/90 text-gray-900'
                    : property.tag === 'New'
                    ? 'bg-emerald-400/90 text-gray-900'
                    : property.tag === 'Premium'
                    ? 'bg-violet-400/90 text-gray-900'
                    : 'bg-red-400/90 text-gray-900'
                }`}>
                  {property.tag}
                </span>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110">
                  <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{property.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400">{property.agent}</span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M3 10v11M21 10v11" />
                    </svg>
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.sqft} ft²
                  </span>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">{property.price}</span>
                  <button className="px-5 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/25">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="px-10 py-3.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-xl hover:shadow-gray-900/25 inline-flex items-center gap-2">
            View All Properties
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
