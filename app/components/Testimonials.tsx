import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "J'avais la certification depuis un an sans oser postuler. En 8 semaines j'ai enfin construit une vraie infra et décroché mon premier poste Cloud.",
    name: "Beki Tuli",
    role: "Cloud Engineer",
    location: "Londres, UK",
    photo: "/images/people/p1.jpg",
  },
  {
    quote:
      "Le format bilingue m'a débloqué. On code, on casse, on répare. Rien à voir avec les QCM que je révisais avant sans jamais toucher à la production.",
    name: "Joel Ntumba",
    role: "DevOps Engineer",
    location: "Tokyo, Japon",
    photo: "/images/people/p8.jpg",
  },
  {
    quote:
      "Les mentors sont des ingénieurs en poste. Ils m'ont appris à réfléchir face à de vrais cas d'entreprise, pas juste à réussir un examen.",
    name: "Moise Mboyo",
    role: "Ingénieur Cloud",
    location: "Tunis, Tunisie",
    photo: "/images/people/p2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.12] text-ink sm:text-[2.6rem]">
              Des parcours, pas seulement des badges
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl bg-mist p-7">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-indigo/25"
                  fill="currentColor"
                >
                  <path d="M9.5 6C6.5 6 4 8.6 4 12v6h6v-6H7c0-1.9 1.1-3 2.5-3V6Zm10 0c-3 0-5.5 2.6-5.5 6v6h6v-6h-3c0-1.9 1.1-3 2.5-3V6Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-[13px] text-slate-mute">
                      {t.role}, {t.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
