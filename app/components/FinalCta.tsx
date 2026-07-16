import Reveal from "./Reveal";

const SCATTER = [
  { src: "/images/people/p12.jpg", top: "14%", left: "7%", size: 66 },
  { src: "/images/people/p1.jpg", top: "34%", left: "15%", size: 46 },
  { src: "/images/people/p10.jpg", top: "64%", left: "9%", size: 56 },
  { src: "/images/people/p7.jpg", top: "82%", left: "19%", size: 42 },
  { src: "/images/people/p3.jpg", top: "12%", left: "85%", size: 56 },
  { src: "/images/people/p9.jpg", top: "36%", left: "91%", size: 46 },
  { src: "/images/people/p6.jpg", top: "64%", left: "86%", size: 66 },
  { src: "/images/people/p8.jpg", top: "84%", left: "82%", size: 44 },
  { src: "/images/people/p4.jpg", top: "8%", left: "38%", size: 40 },
  { src: "/images/people/p2.jpg", top: "88%", left: "50%", size: 40 },
];

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper">
      {/* scattered region avatars */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {SCATTER.map((a) => (
          <img
            key={a.src + a.top}
            src={a.src}
            alt=""
            loading="lazy"
            className="absolute rounded-full object-cover shadow-[0_10px_30px_-12px_rgba(15,27,45,0.5)] ring-4 ring-paper"
            style={{
              top: a.top,
              left: a.left,
              width: a.size,
              height: a.size,
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}
        <Glyph className="left-[30%] top-[26%]" name="cloud" />
        <Glyph className="left-[72%] top-[22%]" name="bell" />
        <Glyph className="left-[26%] top-[72%]" name="terminal" />
        <Glyph className="left-[75%] top-[74%]" name="cloud" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <h2 className="text-[2.2rem] font-extrabold leading-[1.06] text-ink sm:text-5xl">
            Passe de la théorie à la production, où que tu sois
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate">
            Du continent à la diaspora, des apprenants construisent déjà de
            vraies infrastructures avec des mentors qualifiés. À ton tour.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@honora.academy?subject=Candidature%20au%20mentorat"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-8 py-4 text-base font-semibold text-paper shadow-[0_16px_38px_-12px_rgba(79,70,229,0.8)] transition-colors hover:bg-indigo-deep"
            >
              Postuler au mentorat
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="mailto:hello@honora.academy?subject=Question"
              className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-ink"
            >
              Poser une question
            </a>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-sm text-slate-mute">
            Places limitées, réponse sous 48h, bilingue FR / EN.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Glyph({
  className,
  name,
}: {
  className: string;
  name: "cloud" | "bell" | "terminal";
}) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 text-slate-mute/40 ${className}`}
    >
      {name === "cloud" && (
        <svg {...common}>
          <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 11 3.5 3.5 0 0 0 7 18h10.5Z" />
        </svg>
      )}
      {name === "bell" && (
        <svg {...common}>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
      )}
      {name === "terminal" && (
        <svg {...common}>
          <path d="M4 6h16v12H4zM7 10l2.5 2L7 14M12.5 14H16" />
        </svg>
      )}
    </span>
  );
}
