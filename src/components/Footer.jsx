export default function Footer() {
  return (
    <footer className="bg-navy py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              13<span className="text-gold">ème</span> Lieux
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Prestataire d'états des lieux professionnels pour les agences immobilières à Marseille, Aix-en-Provence et dans toute la région PACA.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">État des lieux d'entrée</a></li>
              <li><a href="#" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">État des lieux de sortie</a></li>
              <li><a href="#" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">Comparatif entrée/sortie</a></li>
              <li><a href="#" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">Chiffrage des travaux</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@13emelieux.fr" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">contact@13emelieux.fr</a></li>
              <li><a href="tel:+33600000000" className="text-white/50 hover:text-gold text-sm transition-colors duration-300">06 00 00 00 00</a></li>
              <li><span className="text-white/50 text-sm">Marseille, France</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 13ème Lieux. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">Mentions légales</a>
            <a href="#" className="text-white/30 hover:text-gold text-sm transition-colors duration-300">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
