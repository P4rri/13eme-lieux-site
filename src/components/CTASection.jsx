export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-section bg-navy rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Testez-nous sur un seul dossier.
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Pas d'engagement, pas de volume minimum. Confiez-nous un état des lieux et jugez par vous-même la qualité de nos rapports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@13emelieux.fr"
                className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
              >
                Confier un état des lieux
              </a>
              <a
                href="tel:+33600000000"
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
