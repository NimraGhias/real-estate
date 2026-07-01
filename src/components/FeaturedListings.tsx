"use client";
import { useState, useEffect, useMemo } from "react";
import { getFilters, subscribe } from "@/store/search";

const allListings = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    type: 'Villa',
    price: '$4,800,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=85',
    tag: 'Featured',
    agent: 'Sarah Mitchell',
    yearBuilt: 2021,
    garage: 3,
    lotSize: '0.8 acres',
    description: 'Perched on the cliffs of Malibu, this stunning modern villa offers panoramic ocean views from every room. Floor-to-ceiling windows, a private infinity pool, and Italian marble finishes throughout.',
    amenities: ['Infinity Pool', 'Wine Cellar', 'Home Theater', 'Smart Home System', 'Ocean View Deck', 'Outdoor Kitchen'],
  },
  {
    id: 2,
    title: 'Luxury Downtown Penthouse',
    location: 'New York, NY',
    type: 'Apartment',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
    tag: 'New',
    agent: 'James Wilson',
    yearBuilt: 2020,
    garage: 1,
    lotSize: 'N/A',
    description: 'A rare triple-mint condition penthouse in the heart of Manhattan. Soaring 14-foot ceilings, a private terrace with skyline views, and custom finishes by a renowned interior architect.',
    amenities: ['Private Terrace', 'Concierge Service', 'Fitness Center', 'Rooftop Lounge', 'Valet Parking', 'Pet Spa'],
  },
  {
    id: 3,
    title: 'Elegant Suburban Estate',
    location: 'Greenwich, CT',
    type: 'House',
    price: '$6,500,000',
    beds: 7,
    baths: 6,
    sqft: '6,800',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85',
    tag: 'Premium',
    agent: 'Emily Carter',
    yearBuilt: 2019,
    garage: 4,
    lotSize: '2.3 acres',
    description: 'A magnificent estate set on over two acres of manicured gardens. Featuring a chef\'s kitchen, heated marble floors, a library with custom millwork, and a resort-style pool house.',
    amenities: ['Pool House', 'Tennis Court', 'Wine Grotto', 'Library', 'Guest House', 'Spa Bathroom'],
  },
  {
    id: 4,
    title: 'Waterfront Family Home',
    location: 'Miami Beach, FL',
    type: 'House',
    price: '$2,950,000',
    beds: 4,
    baths: 3,
    sqft: '3,400',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=85',
    tag: 'Reduced',
    agent: 'Michael Chen',
    yearBuilt: 2017,
    garage: 2,
    lotSize: '0.4 acres',
    description: 'Direct waterfront living with private dock access. Open-plan layout with impact windows and doors, a gourmet kitchen, and a lush tropical backyard perfect for entertaining.',
    amenities: ['Private Dock', 'Boat Lift', 'Hurricane Shutters', 'Outdoor Bar', 'Fire Pit', 'Kayak Launch'],
  },
  {
    id: 5,
    title: 'Contemporary City Apartment',
    location: 'San Francisco, CA',
    type: 'Apartment',
    price: '$1,850,000',
    beds: 2,
    baths: 2,
    sqft: '1,600',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=85',
    tag: 'Featured',
    agent: 'Lisa Park',
    yearBuilt: 2022,
    garage: 1,
    lotSize: 'N/A',
    description: 'Sleek contemporary living in the heart of SoMa. Floor-to-ceiling windows frame iconic Bay Bridge views. European cabinetry, wide-plank white oak floors, and state-of-the-art integrated appliances.',
    amenities: ['Bay View', 'Bike Storage', 'Co-Working Lounge', 'Rooftop Garden', 'EV Charging', 'Package Room'],
  },
  {
    id: 6,
    title: 'Historic Brownstone',
    location: 'Boston, MA',
    type: 'House',
    price: '$5,100,000',
    beds: 6,
    baths: 4,
    sqft: '5,200',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=85',
    tag: 'New',
    agent: 'David Kim',
    yearBuilt: 1895,
    garage: 0,
    lotSize: '0.15 acres',
    description: 'A meticulously restored Back Bay brownstone blending historic charm with modern luxury. Original exposed brick, a private rear garden, and a newly finished lower level with a wine cellar.',
    amenities: ['Private Garden', 'Wine Cellar', 'Exposed Brick', 'Marble Fireplace', 'Roof Deck', 'Original Moldings'],
  },
  {
    id: 7,
    title: 'Mountain Retreat Cabin',
    location: 'Aspen, CO',
    type: 'House',
    price: '$3,600,000',
    beds: 4,
    baths: 3,
    sqft: '3,100',
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=600&q=85',
    tag: 'Featured',
    agent: 'Rachel Green',
    yearBuilt: 2018,
    garage: 2,
    lotSize: '1.8 acres',
    description: 'A luxury mountain retreat with breathtaking views of the Elk Mountains. Featuring a great room with a towering stone fireplace, a chef\'s kitchen, and direct access to world-class ski trails.',
    amenities: ['Ski Access', 'Hot Tub', 'Stone Fireplace', 'Mud Room', 'Deck with Views', 'Radiant Heating'],
  },
  {
    id: 8,
    title: 'Minimalist Urban Loft',
    location: 'Chicago, IL',
    type: 'Apartment',
    price: '$1,200,000',
    beds: 2,
    baths: 2,
    sqft: '1,400',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=85',
    tag: 'Reduced',
    agent: 'Tom Brooks',
    yearBuilt: 2023,
    garage: 1,
    lotSize: 'N/A',
    description: 'A minimalist\'s dream in the West Loop. Polished concrete floors, exposed ductwork, and a wall of southern-facing windows. Custom Italian kitchen and a spa-like bath with a soaking tub.',
    amenities: ['Soaking Tub', 'Dog Run', 'Rooftop Pool', 'Concierge', 'Storage Unit', 'Business Center'],
  },
  {
    id: 9,
    title: 'Mediterranean Villa',
    location: 'Santa Barbara, CA',
    type: 'Villa',
    price: '$7,800,000',
    beds: 6,
    baths: 5,
    sqft: '6,500',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=85',
    tag: 'Premium',
    agent: 'Sophia Lee',
    yearBuilt: 2016,
    garage: 4,
    lotSize: '1.5 acres',
    description: 'A stunning Mediterranean-inspired estate overlooking the Pacific. Hand-painted tiles, a central courtyard with a fountain, and terraced gardens with olive trees and a lap pool.',
    amenities: ['Lap Pool', 'Terraced Gardens', 'Courtyard Fountain', 'Outdoor Fireplace', 'Pizza Oven', 'Casita'],
  },
]

function parsePrice(p: string) {
  const num = parseFloat(p.replace(/[$,]/g, ''))
  if (num >= 1000000) return '1M+'
  if (num >= 500000) return '500k-1M'
  if (num >= 300000) return '300k-500k'
  if (num >= 100000) return '100k-300k'
  return 'any'
}

export default function FeaturedListings() {
  const [showAll, setShowAll] = useState(false)
  const [filters, setFilters] = useState(() => getFilters())
  const [selected, setSelected] = useState<typeof allListings[number] | null>(null)

  useEffect(() => subscribe((f) => setFilters(f)), [])

  const filtered = useMemo(() => {
    return allListings.filter((p) => {
      if (filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false
      if (filters.type && p.type !== filters.type) return false
      if (filters.price && filters.price !== 'any') {
        const range = filters.price
        const num = parseFloat(p.price.replace(/[$,]/g, ''))
        if (range === '100k-300k' && (num < 100000 || num >= 300000)) return false
        if (range === '300k-500k' && (num < 300000 || num >= 500000)) return false
        if (range === '500k-1M' && (num < 500000 || num >= 1000000)) return false
        if (range === '1M+' && num < 1000000) return false
      }
      return true
    })
  }, [filters])

  const hasFilters = filters.location || filters.type || filters.price
  const displayed = showAll ? filtered : hasFilters ? filtered.slice(0, 4) : filtered.slice(0, 6)

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

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No properties match your search</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your filters or browsing all listings.</p>
            <button
              onClick={() => {
                window.history.pushState(null, '', window.location.pathname)
                setFilters({ location: '', type: '', price: '' })
              }}
              className="mt-6 px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((property) => (
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
                  <button onClick={() => setSelected(property)} className="px-5 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/25">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {filtered.length > 0 && filtered.length > (hasFilters ? 4 : 6) && (
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-xl hover:shadow-gray-900/25 inline-flex items-center gap-2"
          >
            {showAll ? 'Show Less' : 'View All Properties'}
            <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-sm">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-72 overflow-hidden">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                  selected.tag === 'Featured' ? 'bg-amber-400/90 text-gray-900' :
                  selected.tag === 'New' ? 'bg-emerald-400/90 text-gray-900' :
                  selected.tag === 'Premium' ? 'bg-violet-400/90 text-gray-900' :
                  'bg-red-400/90 text-gray-900'
                }`}>
                  {selected.tag}
                </span>
                <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                <p className="text-sm text-white/70 mt-1">{selected.location}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span className="font-semibold text-gray-900">{selected.beds}</span> Beds
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M3 10v11M21 10v11" /></svg>
                  <span className="font-semibold text-gray-900">{selected.baths}</span> Baths
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  <span className="font-semibold text-gray-900">{selected.sqft}</span> ft²
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="font-semibold text-gray-900">${selected.price.replace(/[$,]/g, '')}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Description</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{selected.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">Year Built</p>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">{selected.yearBuilt}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">Garage</p>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">{selected.garage} Car</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">Lot Size</p>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">{selected.lotSize}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Amenities</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.amenities.map((a) => (
                    <span key={a} className="px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Listed by</p>
                  <p className="text-sm font-semibold text-gray-900">{selected.agent}</p>
                </div>
                <span className="text-3xl font-bold text-gray-900 tracking-tight">{selected.price}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => { setSelected(null); window.location.href = '/consultation' }}
                  className="flex-1 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/25"
                >
                  Inquire About This Property
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 rounded-xl transition-all hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
