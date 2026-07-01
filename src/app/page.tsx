import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedListings from '@/components/FeaturedListings'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <Stats />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
