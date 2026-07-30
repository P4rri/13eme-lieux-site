export default function Methode() {
  const steps = [
    {
      phase: 'Avant',
      num: '01',
      items: [
        'Réception du dossier via votre outil ou par email',
        'Prise de RDV directe avec le locataire',
        'Confirmation de créneau sous 24h',
      ],
    },
    {
      phase: 'Pendant',
      num: '02',
      items: [
        '200 à 300 photos HD de chaque pièce',
        'Relevé méthodique pièce par pièce',
        'Vérification des équipements et compteurs',
        'Signature numérique sur tablette',
      ],
    },
    {
      phase: 'Après',
      num: '03',
      items: [
        'Rapport livré sous 48h maximum',
        'Comparatif entrée/sortie intégré',
        'Chiffrage des réparations détaillé',
        'Archivage sécurisé du dossier',
      ],
    },
  ]

  return (
    <section id="methode" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
            Notre méthode.<br />
            <span className="text-gold">Rigoureuse, transparente, efficace.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-section relative bg-white rounded-2xl p-8 shadow-sm border border-navy/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-6xl font-heading font-bold text-gold/20 absolute top-4 right-6">
                {step.num}
              </div>
              <div className="relative">
                <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  {step.phase}
                </span>
                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gold mt-1.5 text-xs">●</span>
                      <span className="text-navy/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
