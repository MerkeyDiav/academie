import Reveal from "./Reveal";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  featured: boolean;
  cta: string;
  bullets: string[];
};

const PLANS: Plan[] = [
  {
    name: "Classe de Prod",
    tagline: "En petit comité, comme une vraie équipe.",
    price: "250",
    featured: false,
    cta: "Rejoindre la cohorte",
    bullets: [
      "Apprentissage en petit comité",
      "Simulation d'une vraie équipe DevOps",
      "8 semaines, 100% pratique",
      "Bilingue FR / EN",
      "Projets déployés en production",
    ],
  },
  {
    name: "Mentorat 1-on-1",
    tagline: "Un ingénieur senior rien que pour toi.",
    price: "450",
    featured: true,
    cta: "Postuler au mentorat",
    bullets: [
      "Tout ce qui est inclus dans la cohorte",
      "Suivi individuel adaptatif, mentor dédié",
      "Horaires 100% flexibles, à ton rythme",
      "Revue de code personnalisée",
      "Accompagnement vers l'emploi",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <h2 className="text-[2.1rem] font-bold leading-[1.1] text-ink sm:text-[2.9rem]">
                Un prix juste, pensé pour la{" "}
                <span className="text-indigo">diaspora et le continent</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-slate">
                Une formation d&apos;élite ne devrait pas coûter une fortune.
                Arrête de payer plus de 500 $ pour un bootcamp occidental
                déconnecté du terrain.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-2">
                <span className="font-display text-4xl font-bold text-slate-mute line-through decoration-2 sm:text-5xl">
                  500 $+
                </span>
                <span className="text-[15px] font-medium text-slate">
                  le prix d&apos;un bootcamp classique
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-indigo">
                Chez nous, dès 250 $.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-cloud sm:block" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line shadow-[0_40px_80px_-45px_rgba(15,27,45,0.5)]">
                <img
                  src="/images/img5.jpg"
                  alt="Deux professionnels se félicitent après une réussite devant leur ordinateur"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover lg:h-[420px]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-slate-mute">
            Paiement en plusieurs fois possible. Places limitées par cohorte.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
        featured
          ? "bg-ink text-paper shadow-[0_40px_80px_-40px_rgba(15,27,45,0.6)]"
          : "border border-line bg-paper text-ink"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-8 rounded-full bg-indigo px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-paper shadow-lg">
          Le plus populaire
        </span>
      )}

      <h3 className="text-2xl font-bold">{plan.name}</h3>
      <p
        className={`mt-1.5 text-[15px] ${featured ? "text-cloud/70" : "text-slate"}`}
      >
        {plan.tagline}
      </p>

      <div className="mt-7 flex items-end gap-3">
        <span className="font-display text-6xl font-extrabold leading-none">
          {plan.price} $
        </span>
        <span
          className={`mb-1.5 text-lg font-semibold line-through decoration-2 ${
            featured ? "text-cloud/50" : "text-slate-mute"
          }`}
        >
          500 $
        </span>
      </div>
      <p
        className={`mt-2 text-sm ${featured ? "text-cloud/60" : "text-slate-mute"}`}
      >
        Programme complet de 8 semaines
      </p>

      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              className={`mt-0.5 shrink-0 ${featured ? "text-indigo-soft" : "text-indigo"}`}
            >
              <path
                d="M4 10.5l3.5 3.5L16 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`text-[16px] leading-snug ${featured ? "text-cloud/90" : "text-slate"}`}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-colors ${
          featured
            ? "bg-indigo text-paper hover:bg-indigo-deep"
            : "border border-ink text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        {plan.cta}
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  );
}
