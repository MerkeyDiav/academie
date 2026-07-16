import Reveal from "./Reveal";

const FORMATS = [
  {
    image: "/images/img3.jpg",
    alt: "Un mentor pointe l'écran d'un ordinateur portable pour expliquer un concept",
    tag: "1-on-1",
    title: "Mentorat ultra-personnalisé",
    text: "Un suivi individuel et adaptatif avec un ingénieur senior dédié, aligné sur tes horaires et ton niveau.",
  },
  {
    image: "/images/img8.jpg",
    alt: "Un petit groupe de personnes échange autour d'une table",
    tag: "Collectif",
    title: "Format « Classe de Prod »",
    text: "Apprends en petit comité, en simulant la collaboration d'une vraie équipe DevOps en entreprise.",
  },
  {
    image: "/images/img9.jpg",
    alt: "Deux personnes en pleine discussion de coaching près d'une fenêtre",
    tag: "FR / EN",
    title: "Une académie bilingue",
    text: "Parce que la production et les meilleures opportunités internationales parlent les deux langues.",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.12] text-ink sm:text-[2.6rem]">
              Un cadre qui s&apos;adapte à toi, pas l&apos;inverse
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-5 text-[17px] leading-relaxed text-slate">
              Choisis la manière d&apos;apprendre qui colle à ta vie. Le même
              exigence de terrain, trois expériences différentes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="group h-full">
                <div className="overflow-hidden rounded-[1.25rem] border border-line">
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-5 inline-block rounded-full bg-indigo-soft px-3 py-1 text-xs font-semibold text-indigo-deep">
                  {f.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
