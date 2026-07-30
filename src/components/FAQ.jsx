import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Combien coûte un état des lieux ?",
      a: "Nos tarifs dépendent de la surface du bien et de sa localisation. Contactez-nous pour un devis personnalisé. Nous proposons des tarifs dégressifs selon le volume.",
    },
    {
      q: "Quel est le délai de livraison du rapport ?",
      a: "Le rapport complet est livré sous 48h maximum après la réalisation de l'état des lieux. En cas d'urgence, nous pouvons livrer sous 24h.",
    },
    {
      q: "Vos rapports sont-ils juridiquement opposables ?",
      a: "Oui, absolument. Nos rapports sont conformes à la loi ALUR et au décret du 30 mars 2016. Ils comportent toutes les mentions obligatoires et sont signés numériquement.",
    },
    {
      q: "Comment se passe la prise de rendez-vous ?",
      a: "Vous nous envoyez le dossier, nous prenons directement contact avec le locataire pour fixer le RDV. Vous n'avez rien à gérer.",
    },
    {
      q: "Intervenez-vous le week-end ?",
      a: "Oui, nous intervenons du lundi au samedi, et le dimanche sur demande pour les cas urgents.",
    },
    {
      q: "Que comprend le chiffrage des travaux ?",
      a: "Pour chaque dégradation constatée, nous estimons le coût de remise en état basé sur les prix du marché local. Cela vous permet de justifier les retenues sur le dépôt de garantie.",
    },
    {
      q: "Faut-il un volume minimum ?",
      a: "Non, aucun engagement de volume. Vous pouvez commencer par un seul dossier pour tester notre service.",
    },
    {
      q: "Comment recevons-nous les rapports ?",
      a: "Par email au format PDF, ou directement intégré dans votre logiciel de gestion si vous utilisez un outil compatible. Nous nous adaptons à vos process.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="animate-section text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-section bg-white rounded-xl border border-navy/5 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium text-navy pr-4">{faq.q}</span>
                <span className={`text-gold text-2xl transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-navy/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
