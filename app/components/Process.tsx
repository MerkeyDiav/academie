import Reveal from "./Reveal";

const STEPS = [
  {
    range: "Semaines 1 & 2",
    title: "Les fondations réelles (AWS & Réseau)",
    text: "On ne clique pas au hasard. Tu conçois des VPC hautement disponibles et tu sécurises les accès comme en entreprise.",
  },
  {
    range: "Semaines 3 & 4",
    title: "L'automatisation professionnelle (Terraform)",
    text: "Tu écris de l'Infrastructure as Code pour déployer des architectures reproductibles en une seule commande.",
  },
  {
    range: "Semaines 5 & 6",
    title: "La révolution des conteneurs (Docker & Kubernetes)",
    text: "Tu conteneurises des applications réelles et tu orchestres la résilience d'un cluster.",
  },
  {
    range: "Semaines 7 & 8",
    title: "CI/CD & Incident Management (La Prod)",
    text: "Simulation de pannes réelles. Tu réagis sous pression et tu automatises les déploiements continus.",
  },
];

export default function Process() {
  return (
    <section id="programme" className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.1] text-ink sm:text-[2.6rem]">
              Penser, designer et automatiser comme un{" "}
              <span className="text-indigo">Senior</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-slate">
              Un parcours progressif, du réseau à la production, où chaque phase
              se termine par du concret déployé.
            </p>
          </Reveal>
          <Reveal delay={190}>
            <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-line">
              <img
                src="/images/img12.jpg"
                alt="Feuille de route de projet composée d'écrans d'application épinglés sur un mur"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ol className="space-y-2">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.range} delay={i * 70}>
              <div className="flex gap-5 rounded-2xl border border-transparent p-4 transition-colors hover:border-line hover:bg-paper sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-lg font-bold text-paper">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo">
                    {s.range}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate">
                    {s.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
