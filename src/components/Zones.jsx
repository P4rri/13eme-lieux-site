export default function Zones() {
  const cities = [
    { name: 'Marseille', desc: 'Tous arrondissements' },
    { name: 'Aix-en-Provence', desc: 'Centre et périphérie' },
    { name: 'Aubagne', desc: 'Et communes voisines' },
    { name: 'La Ciotat', desc: 'Et littoral' },
    { name: 'Martigues', desc: "Et étang de Berre" },
    { name: 'Istres', desc: 'Et Fos-sur-Mer' },
    { name: 'Salon-de-Provence', desc: 'Et environs' },
    { name: 'Vitrolles', desc: "Et zone de l'aéroport" },
  ]

  return (
    <section id="zones" className="py-24 px-6 bg-navy/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
            Zones d'intervention
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Nous intervenons dans tout le département des Bouches-du-Rhône et la région PACA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <div
              key={i}
              className="animate-section bg-white rounded-xl p-6 text-center shadow-sm border border-navy/5 hover:shadow-lg hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
              <h3 className="font-heading text-lg font-semibold text-navy">{city.name}</h3>
              <p className="text-navy/50 text-xs mt-1">{city.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
