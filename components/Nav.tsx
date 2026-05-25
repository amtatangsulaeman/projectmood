"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { label: "Bathhouse", href: "/services/bathhouse" },
  { label: "Reformer Pilates", href: "/services/reformer" },
  { label: "Strength + Conditioning", href: "/services/training" },
  { label: "Gym & PT", href: "/services/gym" },
];

const LINKS: { label: string; href: string; children?: typeof SERVICES }[] = [
  { label: "Services", href: "/services/bathhouse", children: SERVICES },
  { label: "First Timer", href: "/first-timer" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 text-paper">
        <div
          aria-hidden
          className={`absolute inset-y-0 left-0 transition-all duration-500 ${
            scrolled
              ? "w-full bg-ink/95 backdrop-blur-md"
              : "w-[62%] md:w-[58%] lg:w-[55%] bg-ink"
          }`}
          style={
            scrolled
              ? undefined
              : { clipPath: "polygon(0 0, 100% 0, calc(100% - 56px) 100%, 0 100%)" }
          }
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10">
          <div className="flex h-full items-center gap-8 md:gap-12">
            <Link href="/" aria-label="Project Mood" className="block">
              <Image
                src="/images/logo.png"
                alt="Project Mood"
                width={140}
                height={36}
                priority
                className="h-7 w-auto md:h-8"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {LINKS.map((l) =>
                l.children ? (
                  <div
                    key={l.label}
                    className="relative h-20 flex items-center"
                    onMouseEnter={openMenu}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-1.5 font-display text-[14px] uppercase tracking-wider2 link-underline whitespace-nowrap"
                    >
                      {l.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden
                        className={`opacity-80 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="square"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full min-w-[260px] origin-top bg-ink border border-paper/15 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                    >
                      <ul className="flex flex-col py-2">
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block px-5 py-3 font-display text-[14px] uppercase tracking-wider2 text-paper/85 hover:bg-paper hover:text-ink transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="font-display text-[14px] uppercase tracking-wider2 link-underline whitespace-nowrap"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>
          </div>

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

            <Link href="/pricing" className="btn-pill on-dark">
              Book a Class
            </Link>
          </div>

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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Project Mood"
            className="block"
          >
            <Image
              src="/images/logo.png"
              alt="Project Mood"
              width={140}
              height={36}
              className="h-7 w-auto"
            />
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="font-display text-lg uppercase tracking-wider2"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-2 overflow-y-auto px-6 pt-6 pb-12">
          {LINKS.map((l, i) => (
            <div
              key={l.label}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 400ms ease ${i * 50}ms, transform 400ms ease ${i * 50}ms`,
              }}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-display text-5xl uppercase tracking-tightish"
              >
                {l.label}
              </Link>
              {l.children && (
                <ul className="mt-2 flex flex-col gap-1 pl-4">
                  {l.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 font-body text-[16px] text-paper/70"
                      >
                        — {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="btn-pill on-dark mt-10 self-start"
          >
            Book a Class
          </Link>
        </nav>
      </div>
    </>
  );
}
