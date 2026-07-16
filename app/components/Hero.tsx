import Reveal from "./Reveal";

const AVATARS = [
  "/images/people/p1.jpg",
  "/images/people/p12.jpg",
  "/images/people/p7.jpg",
  "/images/people/p9.jpg",
  "/images/people/p10.jpg",
  "/images/people/p3.jpg",
];

const STACK = ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"];

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-5 sm:px-8 sm:pb-16">
        <div
          className="relative overflow-hidden rounded-[1.75rem] px-6 py-12 sm:rounded-[2.25rem] sm:px-12 sm:py-14 lg:py-16"
          style={{
            background:
              "linear-gradient(120deg,#eae6fb 0%,#f1e8fb 42%,#fbe8ef 100%)",
          }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 max-w-xl">
              <Reveal>
                <h1 className="text-[2.6rem] font-extrabold leading-[1.03] text-ink sm:text-[3.6rem]">
                  Deviens l&apos;
                  <span className="text-indigo">ingénieur Cloud</span> que tu
                  veux être
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                  Apprends le Cloud avec AWS depuis chez toi. Un format flexible,
                  à ton rythme, encadré par des ingénieurs qui ont fait leurs
                  preuves en production.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-7 py-3.5 text-[15px] font-semibold text-paper shadow-[0_14px_34px_-12px_rgba(79,70,229,0.8)] transition-colors hover:bg-indigo-deep"
                  >
                    Rejoins la prochaine cohorte
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={210}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate">
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

        {/* Stack strip */}
        <div className="mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-mute">
            Le stack que tu vas maîtriser
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {STACK.map((s) => (
              <span
                key={s}
                className="font-display text-lg font-bold text-ink/35 sm:text-xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/5]">
        {/* main person */}
        <div className="absolute inset-x-6 bottom-0 top-6 overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-30px_rgba(15,27,45,0.45)]">
          <img
            src="/images/hero-person.jpg"
            alt="Ingénieure Cloud souriante"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* LIVE badge */}
        <div className="absolute left-0 top-2 flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 shadow-lg">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e11d48] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Live
          </span>
          <span className="text-xs font-semibold text-ink">Session Cloud</span>
        </div>

        {/* progress ring card */}
        <div className="absolute -left-2 top-1/3 hidden items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-xl sm:flex">
          <ProgressRing />
          <div>
            <p className="text-sm font-bold leading-none text-ink">8 / 8</p>
            <p className="mt-1 text-[11px] text-slate-mute">semaines validées</p>
          </div>
        </div>

        {/* mentors card */}
        <div className="absolute -right-1 bottom-24 hidden w-52 rounded-2xl bg-paper p-3.5 shadow-xl sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-mute">
            Tes mentors
          </p>
          <div className="mt-2.5 space-y-2.5">
            {[
              { img: "/images/people/p8.jpg", name: "Joel N.", loc: "Tokyo, JP" },
              { img: "/images/people/p1.jpg", name: "Beki T.", loc: "Londres, UK" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-2.5">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-ink">{m.name}</p>
                  <p className="text-[10px] text-slate-mute">{m.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* avatar cluster */}
        <div className="absolute -bottom-3 left-2 flex items-center gap-2 rounded-full bg-paper px-3 py-2 shadow-lg">
          <div className="flex -space-x-2.5">
            {AVATARS.slice(0, 4).map((a) => (
              <img
                key={a}
                src={a}
                alt=""
                className="h-7 w-7 rounded-full border-2 border-paper object-cover"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-ink">+1 200 apprenants</span>
        </div>
      </div>
    </div>
  );
}

function ProgressRing() {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
      <circle cx="20" cy="20" r={r} fill="none" stroke="#e6e9f0" strokeWidth="4" />
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="#4f46e5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={0}
        transform="rotate(-90 20 20)"
      />
    </svg>
  );
}
