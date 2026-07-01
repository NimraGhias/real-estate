import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import AuthModal from '@/components/AuthModal'

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <AuthModal />
      <main className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-[0.2em]">Get Started</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Schedule a Free Consultation
            </h1>
            <p className="mt-4 text-gray-500 leading-relaxed text-lg max-w-xl mx-auto">
              Tell us about your real estate needs and our experts will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                <input type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm appearance-none cursor-pointer">
                  <option>Property Sales</option>
                  <option>Property Management</option>
                  <option>Home Valuation</option>
                  <option>Interior Design</option>
                  <option>Mortgage Assistance</option>
                  <option>Legal Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 text-sm resize-none" placeholder="Tell us about what you're looking for..." />
              </div>

              <button type="submit" className="w-full py-3.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/25">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
