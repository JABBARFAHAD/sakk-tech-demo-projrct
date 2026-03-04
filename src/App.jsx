import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Process      from './components/Process'
import WhyUs        from './components/WhyUs'
import CaseStudies  from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import GoldDivider  from './components/GoldDivider'

export default function App() {
  return (
    <>
      {/* Fixed noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <GoldDivider />
        <Services />
        <GoldDivider />
        <Process />
        <GoldDivider />
        <WhyUs />
        <GoldDivider />
        <CaseStudies />
        <GoldDivider />
        <Testimonials />
        <GoldDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
