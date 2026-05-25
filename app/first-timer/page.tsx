import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "First Timer · Project Mood",
  description:
    "What to expect on your first visit — and how to make the most of it.",
};

const STEPS = [
  {
    title: "Check in",
    body: "Our front desk team will welcome you, give you a full rundown of the facilities, and answer anything. New places can be intimidating — we're aware.",
  },
  {
    title: "Get settled",
    body: "Use the private, gendered changing rooms, or the lobby lockers if you're in a rush. No padlock needed — set a 4-digit code and you're done.",
  },
  {
    title: "Arrive early",
    body: "Aim for 10 minutes before class. Your trainer will introduce themselves, run through the session, and field any questions.",
  },
  {
    title: "Move how you want",
    body: "There's no prescribed way to use the bathhouse. Start with the beginner routine, stay hydrated, and listen to your body.",
  },
];

const BRING = [
  { label: "For Pilates", value: "Grip socks (required). Available at the front desk." },
  { label: "For the Bathhouse", value: "Bathers. Towel & water provided." },
  { label: "For the Gym", value: "Comfortable training clothes. Shoes that move with you." },
  { label: "Session length", value: "Bathhouse — up to 90 minutes. No minimum." },
];

export default function FirstTimerPage() {
  return (
    <PageShell>
      <PageHero
        title="First time here."
        intro="A walkthrough of what to expect — so the only thing on your mind when you arrive is showing up."
        image="/images/membership.jpg"
      />

      {/* Steps */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8 border-b border-ink/15 pb-16">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                  Walk in.
                  <br />
                  We'll handle the rest.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 md:flex md:items-end">
              <Reveal delay={0.1}>
                <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                  Got questions before you visit? Reach out anytime —
                  moodcrew@projectmood.com.au or (03) 9967 2446.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 md:mt-20">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="flex flex-col gap-5 border-t border-ink/15 pt-8">
                  <span className="font-display text-[40px] uppercase leading-none tracking-tightish text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(28px,3.5vw,48px)] uppercase leading-[0.95] tracking-tightish">
                    {s.title}
                  </h3>
                  <p className="max-w-reading font-body text-[16px] leading-[1.6] text-ink/85">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-y-10 gap-x-8 px-6 py-24 md:px-10 md:py-32">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                What to bring.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10">
                {BRING.map((b) => (
                  <div key={b.label}>
                    <dt className="font-body text-[11px] uppercase tracking-widest2 text-paper/55">
                      {b.label}
                    </dt>
                    <dd className="mt-3 font-body text-[16px] leading-[1.55] text-paper/95">
                      {b.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/pricing" className="btn-pill on-dark">
                  Set the Mood — 2 for $50
                </Link>
                <Link href="/schedule" className="font-display text-[16px] uppercase link-underline" style={{ letterSpacing: "0.3px" }}>
                  See timetable →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
