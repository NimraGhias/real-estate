const footerLinks = {
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Properties: [
    { label: 'Houses', href: '#' },
    { label: 'Apartments', href: '#' },
    { label: 'Villas', href: '#' },
    { label: 'Commercial', href: '#' },
  ],
  Support: [
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M6 21V7a2 2 0 012-2h8a2 2 0 012 2v14M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4M10 3h4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">EstateHub</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Your trusted partner in real estate. We help you find, buy, and sell properties with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { name: 'facebook', path: 'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' },
                { name: 'twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'instagram', path: 'M12 2.25c-2.452 0-2.758.011-3.72.054-1.03.046-1.732.21-2.347.448-.636.247-1.174.576-1.71 1.112s-.865 1.074-1.112 1.71c-.238.615-.402 1.317-.448 2.347C2.261 9.242 2.25 9.548 2.25 12s.011 2.758.054 3.72c.046 1.03.21 1.732.448 2.347.247.636.576 1.174 1.112 1.71s1.074.865 1.71 1.112c.615.238 1.317.402 2.347.448.961.043 1.268.054 3.72.054s2.758-.011 3.72-.054c1.03-.046 1.732-.21 2.347-.448.636-.247 1.174-.576 1.71-1.112s.865-1.074 1.112-1.71c.238-.615.402-1.317.448-2.347.043-.961.054-1.268.054-3.72s-.011-2.758-.054-3.72c-.046-1.03-.21-1.732-.448-2.347-.247-.636-.576-1.174-1.112-1.71s-1.074-.865-1.71-1.112c-.615-.238-1.317-.402-2.347-.448-.961-.043-1.268-.054-3.72-.054zM12 4.35c2.408 0 2.693.009 3.645.053.877.04 1.353.187 1.67.31.419.163.718.358 1.032.672.314.314.509.613.672 1.032.123.317.27.793.31 1.67.044.952.053 1.237.053 3.645s-.009 2.693-.053 3.645c-.04.877-.187 1.353-.31 1.67-.163.419-.358.718-.672 1.032-.314.314-.613.509-1.032.672-.317.123-.793.27-1.67.31-.952.044-1.237.053-3.645.53s-2.693-.009-3.645-.053c-.877-.04-1.353-.187-1.67-.31-.419-.163-.718-.358-1.032-.672-.314-.314-.509-.613-.672-1.032-.123-.317-.27-.793-.31-1.67-.044-.952-.053-1.237-.053-3.645s.009-2.693.053-3.645c.04-.877.187-1.353.31-1.67.163-.419.358-.718.672-1.032.314-.314.613-.509 1.032-.672.317-.123.793-.27 1.67-.31.952-.044 1.237-.053 3.645-.053zm0 2.673a4.977 4.977 0 100 9.954 4.977 4.977 0 000-9.954zM12 15a3 3 0 110-6 3 3 0 010 6zm5.872-6.534a1.163 1.163 0 11-2.326 0 1.163 1.163 0 012.326 0z' },
                { name: 'linkedin', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 text-gray-400 hover:text-gray-950 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} EstateHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
