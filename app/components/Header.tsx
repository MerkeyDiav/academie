"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "La méthode", href: "#methode" },
  { label: "Le programme", href: "#programme" },
  { label: "Formats", href: "#formats" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Témoignages", href: "#temoignages" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Honora <span className="font-medium text-slate-mute">Cloud Academy</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center rounded-full border border-line p-0.5 sm:inline-flex"
            role="group"
            aria-label="Changer de langue"
          >
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  lang === l
                    ? "bg-ink text-paper"
                    : "text-slate-mute hover:text-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-indigo px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-indigo-deep sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`h-0.5 w-5 rounded bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 rounded bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[15px] font-medium text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
