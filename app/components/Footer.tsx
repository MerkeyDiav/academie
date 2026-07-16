export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-lg font-bold tracking-tight text-ink">
              Honora <span className="font-medium text-slate-mute">Cloud Academy</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Le mentorat Cloud &amp; DevOps qui transforme des candidats en
              ingénieurs opérationnels dès le premier jour.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-mute">
                Programme
              </p>
              <ul className="space-y-2.5 text-slate">
                <li>
                  <a href="#methode" className="transition-colors hover:text-ink">
                    La méthode
                  </a>
                </li>
                <li>
                  <a href="#programme" className="transition-colors hover:text-ink">
                    Les 8 semaines
                  </a>
                </li>
                <li>
                  <a href="#formats" className="transition-colors hover:text-ink">
                    Les formats
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-mute">
                Contact
              </p>
              <ul className="space-y-2.5 text-slate">
                <li>
                  <a
                    href="mailto:hello@honora.academy"
                    className="transition-colors hover:text-ink"
                  >
                    hello@honora.academy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-ink">
                    Postuler
                  </a>
                </li>
                <li className="text-slate-mute">Bilingue FR / EN</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Honora Cloud Academy. Tous droits réservés.</p>
          <p>Apprends depuis chez toi. Deviens opérationnel en production.</p>
        </div>
      </div>
    </footer>
  );
}
