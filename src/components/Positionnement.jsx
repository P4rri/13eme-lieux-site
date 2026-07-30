export default function Positionnement() {
  const bullets = [
    "Des rapports tellement complets qu'ils résistent à n'importe quel tribunal",
    "Un interlocuteur unique qui connaît vos process et votre parc",
    "Zéro friction : planning partagé, rapport livré sous 48h, facturation mensuelle",
  ]

  const services = [
    "État des lieux d'entrée",
    "État des lieux de sortie",
    "Comparatif entrée/sortie",
    "Chiffrage des travaux",
    "Photos HD (200-300 par rapport)",
    "Pré-état des lieux",
  ]

  return (
    <section id="agences" className="py-24 px-6 bg-navy/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8">
              Déléguer, oui.<br />
              <span className="text-gold">Perdre le contrôle, non.</span>
            </h2>
            <p className="text-navy/60 text-lg mb-8 leading-relaxed">
              Vous confiez les états des lieux à un prestataire qui travaille comme s'il faisait partie de votre équipe.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold text-xl mt-0.5">✓</span>
                  <span className="text-navy/70 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-section bg-white rounded-2xl p-8 shadow-lg border border-navy/5">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-6">Nos services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-offwhite hover:bg-gold/5 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span className="text-navy/80 text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
