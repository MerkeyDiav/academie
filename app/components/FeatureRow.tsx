import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Bullet = { title: string; text: string };

export default function FeatureRow({
  id,
  title,
  children,
  image,
  alt,
  imageSide = "right",
  bullets,
  cta,
  tone = "paper",
}: {
  id?: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  alt: string;
  imageSide?: "left" | "right";
  bullets?: Bullet[];
  cta?: { label: string; href: string };
  tone?: "paper" | "mist";
}) {
  const imageFirst = imageSide === "left";

  return (
    <section
      id={id}
      className={tone === "mist" ? "bg-mist" : "bg-paper"}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal
          className={imageFirst ? "lg:order-1" : "lg:order-2"}
        >
          <div className="relative">
            <div
              className={`absolute -z-0 hidden h-32 w-32 rounded-3xl bg-cloud sm:block ${
                imageFirst ? "-left-6 -top-6" : "-right-6 -top-6"
              }`}
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line shadow-[0_30px_70px_-45px_rgba(15,27,45,0.45)]">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
          <Reveal>
            <h2 className="text-[2rem] font-bold leading-[1.12] text-ink sm:text-[2.6rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-slate">
              {children}
            </div>
          </Reveal>

          {bullets && (
            <ul className="mt-7 space-y-4">
              {bullets.map((b, i) => (
                <Reveal as="li" key={b.title} delay={160 + i * 70}>
                  <div className="flex gap-3.5">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 shrink-0 text-indigo"
                    >
                      <path
                        d="M4 10.5l3.5 3.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[16px] leading-relaxed text-slate">
                      <span className="font-semibold text-ink">{b.title}. </span>
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}

          {cta && (
            <Reveal delay={220}>
              <a
                href={cta.href}
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo"
              >
                {cta.label}
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
