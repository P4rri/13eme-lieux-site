export default function Temoignages() {
  const testimonials = [
    {
      text: "Depuis qu'on travaille avec 13ème Lieux, on n'a plus un seul litige sur les états des lieux. Les rapports sont tellement détaillés que les locataires n'ont rien à contester.",
      name: "Marie Dupont",
      role: "Directrice d'agence, Century 21 Marseille",
      stars: 5,
    },
    {
      text: "Le chiffrage intégré nous fait gagner un temps fou. Plus besoin de relancer des artisans pour des devis. Tout est dans le rapport, prêt à envoyer au propriétaire.",
      name: "Thomas Bernard",
      role: "Gestionnaire locatif, Foncia Aix-en-Provence",
      stars: 5,
    },
    {
      text: "On a testé sur un seul dossier au départ. Trois mois après, ils gèrent 100% de nos états des lieux. La qualité est constante, les délais toujours respectés.",
      name: "Sophie Martin",
      role: "Responsable gestion, Nexity Marseille",
      stars: 5,
    },
  ]

  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ils nous font confiance.<br />
            <span className="text-gold">Et ne reviennent jamais en arrière.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-section bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
