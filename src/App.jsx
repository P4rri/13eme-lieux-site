import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Probleme from './components/Probleme'
import Positionnement from './components/Positionnement'
import Methode from './components/Methode'
import Benefices from './components/Benefices'
import Temoignages from './components/Temoignages'
import CommentCaMarche from './components/CommentCaMarche'
import Zones from './components/Zones'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-offwhite min-h-screen">
      <Navbar />
      <Hero />
      <Probleme />
      <Positionnement />
      <Methode />
      <Benefices />
      <Temoignages />
      <CommentCaMarche />
      <Zones />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
