export default function Probleme() {
  const painPoints = [
    {
      icon: '⏰',
      title: 'Chronophage',
      desc: "2h sur place, 1h de rédaction. Pour un rapport que personne ne relit… jusqu'au litige.",
    },
    {
      icon: '⚖️',
      title: 'Risque juridique',
      desc: "Un oubli, une photo manquante, et c'est votre agence qui paye les travaux contestés.",
    },
    {
      icon: '😤',
      title: 'Conflits locataires',
      desc: "États des lieux bâclés = contestations, retenues sur caution mal justifiées, avis négatifs.",
    },
    {
      icon: '📉',
      title: 'Perte de rentabilité',
      desc: "Vos gestionnaires passent 30% de leur temps sur des tâches terrain à faible valeur ajoutée.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Personne n'aime les états des lieux.<br />
            <span className="text-gold">Mais tout le monde vous juge dessus.</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Les agences immobilières font face aux mêmes problèmes récurrents avec les états des lieux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="animate-section bg-white rounded-2xl p-8 shadow-sm border border-navy/5 hover:shadow-xl hover:border-gold/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {point.title}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
