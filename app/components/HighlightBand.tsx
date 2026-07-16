import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Depuis chez toi",
    text: "100% en ligne. Pas de déménagement, pas de salle de classe. Ton environnement de travail, ton IDE, ton terminal.",
  },
  {
    title: "À ton rythme",
    text: "Un format flexible qui s'aligne sur ta vie et tes horaires, que tu sois en poste, étudiant ou en reconversion.",
  },
  {
    title: "Des mentors qui ont fait leurs preuves",
    text: "Des ingénieurs seniors certifiés et en poste, qui déploient de la vraie production au quotidien.",
  },
];

export default function HighlightBand() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-3xl bg-indigo/30 sm:block" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
              <img
                src="/images/img6.jpg"
                alt="Poste de travail à domicile avec du code sur l'écran d'un ordinateur portable"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.12] sm:text-[2.7rem]">
              Apprends le Cloud Computing avec AWS,{" "}
              <span className="text-indigo-soft">depuis chez toi</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cloud/80">
              Pas de slides interminables. Une simulation d&apos;entreprise où
              chaque concept est immédiatement codé, déployé et testé, encadré de
              près.
            </p>
          </Reveal>

          <dl className="mt-9 space-y-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={160 + i * 80}>
                <div className="border-t border-white/12 pt-5">
                  <dt className="text-lg font-semibold text-paper">{p.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-cloud/70">
                    {p.text}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
