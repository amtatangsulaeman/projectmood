"use client";
import { useEffect, useState } from "react";

const LINKS: { label: string; href: string; hasCaret?: boolean }[] = [
  { label: "Services", href: "#services", hasCaret: true },
  { label: "First Timer", href: "#first-timer" },
  { label: "Benefits", href: "#membership" },
  { label: "Pricing", href: "#membership" },
  { label: "Schedule", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 text-paper">
        {/* Left dark slab with diagonal cut */}
        <div
          aria-hidden
          className={`absolute inset-y-0 left-0 transition-all duration-500 ${
            scrolled ? "w-full bg-ink/95 backdrop-blur-md" : "w-[62%] md:w-[58%] lg:w-[55%] bg-ink"
          }`}
          style={
            scrolled
              ? undefined
              : { clipPath: "polygon(0 0, 100% 0, calc(100% - 56px) 100%, 0 100%)" }
          }
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10">
          {/* Left: logo + primary links */}
          <div className="flex h-full items-center gap-8 md:gap-12">
            <a
              href="#top"
              className="font-display text-[18px] uppercase tracking-wideish leading-none whitespace-nowrap"
            >
              Project Mood
            </a>

            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 font-display text-[14px] uppercase tracking-wider2 link-underline whitespace-nowrap"
                >
                  {l.label}
                  {l.hasCaret && (
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden
                      className="opacity-80"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="square"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: account + CTA pill */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#account"
              aria-label="Account"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                scrolled
                  ? "border-paper/40 text-paper hover:border-paper"
                  : "border-paper/60 bg-paper/10 text-paper backdrop-blur-sm hover:bg-paper/20"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4.5 20c1.5-3.5 4.5-5 7.5-5s6 1.5 7.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="#book"
              className="btn-pill on-dark"
            >
              Book a Class
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="block h-px w-7 bg-paper" />
            <span className="block h-px w-7 bg-paper" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="font-display text-[18px] uppercase tracking-wideish">
            Project Mood
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="font-display text-lg uppercase tracking-wider2"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6 pt-10">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl uppercase tracking-tightish"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 400ms ease ${i * 50}ms, transform 400ms ease ${i * 50}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-pill on-dark mt-10"
          >
            Book a Class
          </a>
        </nav>
      </div>
    </>
  );
}
