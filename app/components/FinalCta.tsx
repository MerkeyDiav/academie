import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 sm:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[2.1rem] font-bold leading-[1.1] text-paper sm:text-5xl">
              Prêt à franchir le pas vers la{" "}
              <span className="text-indigo-soft">production</span> ?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cloud/75">
              Ne perds plus ton temps à mémoriser des théories. Rejoins un
              programme pensé pour ta réussite professionnelle, à un tarif adapté
              à tes ambitions.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@honora.academy?subject=Candidature%20au%20mentorat"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-8 py-4 text-base font-semibold text-paper transition-colors hover:bg-indigo-deep"
              >
                Postuler au mentorat
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="mailto:hello@honora.academy?subject=Question"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-paper transition-colors hover:bg-white/5"
              >
                Poser une question
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-cloud/60">
              Places limitées · Réponse sous 48h · FR / EN
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
