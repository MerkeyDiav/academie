import Reveal from "./Reveal";

const THUMBS = [
  "/images/people/p3.jpg",
  "/images/people/p5.jpg",
  "/images/people/p6.jpg",
  "/images/people/p11.jpg",
  "/images/people/p4.jpg",
  "/images/people/p8.jpg",
];

const CLUSTER = [
  "/images/people/p1.jpg",
  "/images/people/p12.jpg",
  "/images/people/p9.jpg",
];

const STACK = ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"];

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-5 sm:px-8 sm:pb-14">
        <div
          className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 sm:rounded-[2.25rem] sm:px-12 sm:py-12 lg:px-14"
          style={{
            background:
              "linear-gradient(120deg,#eae6fb 0%,#f1e8fb 42%,#fbe8ef 100%)",
          }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="relative z-10 max-w-lg">
              <Reveal>
                <h1 className="text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.35rem]">
                  Deviens l&apos;
                  <span className="text-indigo">ingénieur Cloud</span> que tu
                  veux être
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-slate sm:text-lg">
                  Apprends le Cloud avec AWS depuis chez toi. Un format flexible,
                  à ton rythme, encadré par des ingénieurs qui ont fait leurs
                  preuves en production.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-7">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-base font-semibold text-paper shadow-[0_16px_38px_-12px_rgba(79,70,229,0.8)] transition-colors hover:bg-indigo-deep"
                  >
                    Rejoins la prochaine cohorte
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={210}>
                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate">
                  {["Bilingue FR / EN", "100% pratique", "1-on-1 ou en classe"].map(
                    (t) => (
                      <li key={t} className="inline-flex items-center gap-2">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" className="text-indigo">
                          <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>

      </div>

      {/* full-bleed stack band */}
      <div className="w-full bg-mist py-12 sm:py-16">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-mute">
          Le stack que tu vas réellement maîtriser
        </p>
        <div className="mx-auto mt-9 flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-7 px-8 sm:justify-between sm:gap-x-8">
          {STACK.map((s) => (
            <span
              key={s}
              className="font-display text-3xl font-bold text-ink/45 transition-colors hover:text-ink/70 sm:text-4xl lg:text-5xl"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="flex items-stretch gap-3 sm:gap-4">
      {/* main person */}
      <div className="relative min-w-0 flex-1">
        <div className="overflow-hidden rounded-[1.5rem] shadow-[0_40px_70px_-32px_rgba(15,27,45,0.5)]">
          <img
            src="/images/hero-person.jpg"
            alt="Ingénieure Cloud souriante"
            className="h-72 w-full object-cover sm:h-80 lg:h-[360px]"
            loading="eager"
          />
        </div>

        {/* progress ring card */}
        <div className="absolute -left-3 top-6 hidden items-center gap-2.5 rounded-2xl bg-paper px-3.5 py-2.5 shadow-xl sm:flex">
          <ProgressRing />
          <div>
            <p className="text-sm font-bold leading-none text-ink">8 / 8</p>
            <p className="mt-1 text-[11px] text-slate-mute">semaines</p>
          </div>
        </div>

        {/* mentors card */}
        <div className="absolute -left-2 bottom-4 hidden w-48 rounded-2xl bg-paper p-3 shadow-xl md:block">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-mute">
            Tes mentors
          </p>
          <div className="mt-2 space-y-2">
            {[
              { img: "/images/people/p8.jpg", name: "Joel N.", loc: "Tokyo, JP" },
              { img: "/images/people/p1.jpg", name: "Beki T.", loc: "Londres, UK" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-2">
                <img src={m.img} alt={m.name} className="h-7 w-7 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-ink">{m.name}</p>
                  <p className="text-[9px] text-slate-mute">{m.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* coach grid */}
      <div className="hidden w-[124px] shrink-0 flex-col justify-center sm:flex lg:w-[150px]">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e11d48] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            <span className="h-1 w-1 rounded-full bg-white" />
            Live
          </span>
          <span className="text-[11px] font-semibold text-ink">Sessions live</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {THUMBS.map((t) => (
            <div key={t} className="relative overflow-hidden rounded-xl shadow-sm">
              <img src={t} alt="" className="aspect-square w-full object-cover" loading="lazy" />
              <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full bg-[#22c55e] ring-2 ring-paper" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex -space-x-2">
            {CLUSTER.map((a) => (
              <img key={a} src={a} alt="" className="h-6 w-6 rounded-full border-2 border-paper object-cover" />
            ))}
          </div>
          <span className="text-xs font-semibold text-ink">+1 200</span>
        </div>
      </div>
    </div>
  );
}

function ProgressRing() {
  const r = 15;
  const c = 2 * Math.PI * r;
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className="shrink-0">
      <circle cx="18" cy="18" r={r} fill="none" stroke="#e6e9f0" strokeWidth="4" />
      <circle
        cx="18"
        cy="18"
        r={r}
        fill="none"
        stroke="#4f46e5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={0}
        transform="rotate(-90 18 18)"
      />
    </svg>
  );
}
