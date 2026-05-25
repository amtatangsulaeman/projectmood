import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Benefits · Project Mood",
  description:
    "What you actually get — beyond a class and a clean towel.",
};

const BENEFITS = [
  {
    title: "Everything under one roof",
    body: "Bathhouse, reformer, strength & conditioning, gym, and PT. Move between them without rebooking your day.",
  },
  {
    title: "Programmed thoughtfully",
    body: "150+ classes a month, structured around how a real week of training should feel — not how a marketing plan reads.",
  },
  {
    title: "Recovery built in",
    body: "Heat, cold, steam, magnesium. Recovery isn't an add-on here — it's part of the building.",
  },
  {
    title: "Considered spaces",
    body: "No flashing screens. No oversold playlists. Lighting, materials, and pace built around how you actually want to feel.",
  },
  {
    title: "Real coaching",
    body: "Small classes. Coaches who know your name and what you're working through. Help when you want it.",
  },
  {
    title: "Yours when you need it",
    body: "Open seven days, 06:00 — 22:00. Show up before work, between meetings, or to close out the day.",
  },
];

export default function BenefitsPage() {
  return (
    <PageShell>
      <PageHero
        title="What you get."
        intro="A space built around how you want to feel — considered, calm, and ready when you are."
        image="/images/Hero.webp"
      />

      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8 border-b border-ink/15 pb-16">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                  The whole picture.
                  <br />
                  Not a feature list.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 md:flex md:items-end">
              <Reveal delay={0.1}>
                <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                  We're not trying to be the loudest gym in Southbank. We're
                  trying to be the one you actually come back to.
                </p>
              </Reveal>
            </div>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 md:mt-20 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.06}>
                <li className="flex flex-col gap-4 border-t border-ink/15 pt-8">
                  <h3 className="font-display text-[clamp(24px,2.2vw,32px)] uppercase leading-[1] tracking-tightish">
                    {b.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.6] text-ink/80">
                    {b.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(48px,8vw,140px)] uppercase leading-[0.92] tracking-tightish">
              One space.
              <br />
              Every mood.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link href="/pricing" className="btn-pill on-dark">
                See Pricing
              </Link>
              <Link href="/first-timer" className="font-display text-[16px] uppercase link-underline" style={{ letterSpacing: "0.3px" }}>
                First-timer guide →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
