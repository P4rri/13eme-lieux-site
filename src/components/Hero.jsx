import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const titleRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const words = titleRef.current.querySelectorAll('.word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 40, rotateX: -20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      }
    )

    const counters = statsRef.current.querySelectorAll('.counter')
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target)
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          },
        }
      )
    })
  }, [])

  const titleWords = "Externalisez vos états des lieux. Sans jamais récupérer les problèmes derrière.".split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Appartement moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 ref={titleRef} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          {titleWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] opacity-0">
              {word}
            </span>
          ))}
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
          Prestataire d'états des lieux d'entrée et de sortie à Marseille, Aix-en-Provence et dans tout le département 13. Rapports juridiquement opposables : 200 à 300 photos HD, comparatif entrée/sortie, chiffrage des travaux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1">
            Confier un premier état des lieux
          </a>
          <a href="#methode" className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1">
            Découvrir le fonctionnement
          </a>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-heading">
              <span className="counter" data-target="500">0</span>+
            </div>
            <p className="text-white/70 text-sm mt-1">états des lieux</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-heading">✓</div>
            <p className="text-white/70 text-sm mt-1">Chiffrage inclus</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-heading">🛡️</div>
            <p className="text-white/70 text-sm mt-1">Garantie anti-litige</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-heading">📍</div>
            <p className="text-white/70 text-sm mt-1">Marseille & PACA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
