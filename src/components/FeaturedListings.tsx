const listings = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: '$4,800,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Luxury Downtown Penthouse',
    location: 'New York, NY',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    tag: 'New',
  },
  {
    id: 3,
    title: 'Elegant Suburban Estate',
    location: 'Greenwich, CT',
    price: '$6,500,000',
    beds: 7,
    baths: 6,
    sqft: '6,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    tag: 'Premium',
  },
  {
    id: 4,
    title: 'Waterfront Family Home',
    location: 'Miami Beach, FL',
    price: '$2,950,000',
    beds: 4,
    baths: 3,
    sqft: '3,400',
    image: 'https://images.unsplash.com/photo-1600607687644-c94bfe08650b?w=600&q=80',
    tag: 'Reduced',
  },
  {
    id: 5,
    title: 'Contemporary City Apartment',
    location: 'San Francisco, CA',
    price: '$1,850,000',
    beds: 2,
    baths: 2,
    sqft: '1,600',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    tag: 'Featured',
  },
  {
    id: 6,
    title: 'Historic Brownstone',
    location: 'Boston, MA',
    price: '$5,100,000',
    beds: 6,
    baths: 4,
    sqft: '5,200',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18f4b1b2a?w=600&q=80',
    tag: 'New',
  },
]

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Featured Properties</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Discover Our Top Picks
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Explore our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-blue-900/80 backdrop-blur-sm rounded-full">
                  {property.tag}
                </span>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                <p className="mt-1 text-sm text-gray-500 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M3 10v11M21 10v11" />
                    </svg>
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.sqft} sqft
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-900">{property.price}</span>
                  <button className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
