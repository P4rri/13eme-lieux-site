import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold text-navy">
          13<span className="text-gold">ème</span> Lieux
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-navy/70 hover:text-navy transition-colors duration-300 text-sm font-medium">Services</a>
          <a href="#agences" className="text-navy/70 hover:text-navy transition-colors duration-300 text-sm font-medium">Pour les agences</a>
          <a href="#zones" className="text-navy/70 hover:text-navy transition-colors duration-300 text-sm font-medium">Zones</a>
          <a href="#contact" className="bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
            Confier un état des lieux
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-offwhite border-t border-navy/5 px-6 py-4 space-y-4">
          <a href="#services" className="block text-navy/70 hover:text-navy text-sm font-medium">Services</a>
          <a href="#agences" className="block text-navy/70 hover:text-navy text-sm font-medium">Pour les agences</a>
          <a href="#zones" className="block text-navy/70 hover:text-navy text-sm font-medium">Zones</a>
          <a href="#contact" className="block bg-gold text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center">
            Confier un état des lieux
          </a>
        </div>
      )}
    </nav>
  )
}
