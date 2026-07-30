export default function CommentCaMarche() {
  const steps = [
    {
      num: '1',
      title: 'Envoyez-nous le dossier',
      desc: "Par email ou via votre logiciel de gestion. On s'occupe de tout : prise de RDV, confirmations, rappels.",
    },
    {
      num: '2',
      title: "On réalise l'état des lieux",
      desc: "Notre expert se déplace, réalise un relevé exhaustif avec 200-300 photos HD et fait signer numériquement.",
    },
    {
      num: '3',
      title: 'Recevez le rapport complet',
      desc: "Sous 48h, vous recevez un rapport juridiquement opposable avec comparatif et chiffrage des travaux.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-navy/60 text-lg">Simple, rapide, sans engagement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="animate-section text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-gold font-heading text-2xl font-bold">{step.num}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
