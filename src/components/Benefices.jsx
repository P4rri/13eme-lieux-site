export default function Benefices() {
  const benefits = [
    {
      icon: '📋',
      title: 'Rapports opposables',
      desc: "200 à 300 photos HD, descriptions détaillées, conformes aux exigences légales. Vos rapports résistent en cas de litige.",
    },
    {
      icon: '💰',
      title: 'Chiffrage intégré',
      desc: "Estimation des travaux directement dans le rapport. Plus besoin de courir après les devis pour justifier les retenues.",
    },
    {
      icon: '🕐',
      title: 'Gain de temps immédiat',
      desc: "Vos gestionnaires récupèrent 30% de leur emploi du temps. Plus de terrain, plus de rédaction, plus de litiges à gérer.",
    },
    {
      icon: '🤝',
      title: 'Relation locataire préservée',
      desc: "Un tiers professionnel et neutre évite les conflits directs entre votre agence et les locataires.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-navy/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
            Ce que vous gagnez<br />
            <span className="text-gold">en travaillant avec nous.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="animate-section flex gap-6 bg-white rounded-2xl p-8 shadow-sm border border-navy/5 hover:shadow-xl hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
