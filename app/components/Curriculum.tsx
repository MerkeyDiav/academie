import Reveal from "./Reveal";

type IconName = "cloud" | "shield" | "code" | "box" | "pipeline" | "chart";

const CARDS: {
  color: string;
  icon: IconName;
  title: string;
  text: string;
  tags: string[];
}[] = [
  {
    color: "#4f46e5",
    icon: "cloud",
    title: "Fondations AWS",
    text: "Les briques de base du cloud : comptes, régions, calcul et stockage, utilisés comme en production.",
    tags: ["IAM", "EC2", "S3"],
  },
  {
    color: "#0ea5e9",
    icon: "shield",
    title: "Réseau & Sécurité",
    text: "Conçois des réseaux isolés et sécurise chaque accès, sans laisser de porte ouverte.",
    tags: ["VPC", "Subnets", "Security Groups"],
  },
  {
    color: "#7c3aed",
    icon: "code",
    title: "Infrastructure as Code",
    text: "Déploie des architectures reproductibles en une commande. Fini le clic manuel.",
    tags: ["Terraform", "IaC"],
  },
  {
    color: "#0d9488",
    icon: "box",
    title: "Conteneurs",
    text: "Conteneurise de vraies applications et orchestre la résilience d'un cluster.",
    tags: ["Docker", "Kubernetes"],
  },
  {
    color: "#f59e0b",
    icon: "pipeline",
    title: "CI/CD",
    text: "Automatise tests et déploiements continus, du commit à la mise en production.",
    tags: ["GitHub Actions", "Pipelines"],
  },
  {
    color: "#e11d48",
    icon: "chart",
    title: "Observabilité",
    text: "Surveille, alerte et diagnostique. Réagis à un incident avant tes utilisateurs.",
    tags: ["CloudWatch", "Monitoring"],
  },
];

export default function Curriculum() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.12] text-ink sm:text-[2.6rem]">
              Tout ce que tu vas{" "}
              <span className="text-indigo">réellement maîtriser</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-[17px] leading-relaxed text-slate">
              Un programme couvrant toute la chaîne, des fondations AWS à la
              production, avec les outils exacts utilisés en entreprise.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col rounded-3xl bg-mist p-8 transition-shadow hover:shadow-[0_28px_60px_-30px_rgba(15,27,45,0.45)] sm:p-10">
                <span
                  className="grid h-16 w-16 place-items-center rounded-2xl text-paper"
                  style={{ backgroundColor: c.color }}
                >
                  <Icon name={c.icon} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[17px] leading-relaxed text-slate">
                  {c.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-indigo/25 px-3 py-1.5 text-sm font-medium text-indigo-deep"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "cloud":
      return (
        <svg {...common}>
          <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 11 3.5 3.5 0 0 0 7 18h10.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
        </svg>
      );
    case "box":
      return (
        <svg {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="M4 7.5 12 12l8-4.5M12 12v9" />
        </svg>
      );
    case "pipeline":
      return (
        <svg {...common}>
          <path d="M4 7h9a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h1" />
          <circle cx="4" cy="7" r="2" />
          <circle cx="20" cy="17" r="2" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5M4 15l4-4 3 3 5-6 4 4M20 19H4" />
        </svg>
      );
  }
}
