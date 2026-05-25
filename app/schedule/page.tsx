import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Schedule · Project Mood",
  description: "A typical week. Book in advance — classes fill quickly.",
};

const DAYS = [
  {
    day: "Monday",
    sessions: [
      { time: "06:30", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "07:30", name: "S&C — Lower Push", coach: "Coach Theo" },
      { time: "09:00", name: "Bathhouse opens", coach: "—" },
      { time: "17:30", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "18:30", name: "S&C — Lower Push", coach: "Coach Theo" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "06:30", name: "S&C — Upper Pull", coach: "Coach Theo" },
      { time: "07:30", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "12:15", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "17:30", name: "S&C — Upper Pull", coach: "Coach Theo" },
      { time: "18:30", name: "Reformer — Flow", coach: "Coach Mia" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:30", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "07:30", name: "S&C — Conditioning", coach: "Coach Theo" },
      { time: "12:15", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "18:00", name: "S&C — Conditioning", coach: "Coach Theo" },
      { time: "19:00", name: "Reformer — Ignite", coach: "Coach Jade" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "06:30", name: "S&C — Lower Pull", coach: "Coach Theo" },
      { time: "07:30", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "12:15", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "17:30", name: "S&C — Lower Pull", coach: "Coach Theo" },
      { time: "18:30", name: "Reformer — Flow", coach: "Coach Mia" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "06:30", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "07:30", name: "S&C — Upper Push", coach: "Coach Theo" },
      { time: "12:15", name: "Runner Activation", coach: "Coach Mia" },
      { time: "17:30", name: "Reformer — Flow", coach: "Coach Jade" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "08:00", name: "S&C — Full Body", coach: "Coach Theo" },
      { time: "09:00", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "10:00", name: "Reformer — Ignite", coach: "Coach Jade" },
      { time: "11:00", name: "Mobility + Stretch", coach: "Coach Mia" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { time: "08:30", name: "Reformer — Flow", coach: "Coach Mia" },
      { time: "09:30", name: "S&C — Steady State", coach: "Coach Theo" },
      { time: "10:30", name: "Reformer — Flow", coach: "Coach Jade" },
    ],
  },
];

export default function SchedulePage() {
  return (
    <PageShell>
      <PageHero
        title="Schedule."
        intro="A typical week at Project Mood. Classes fill quickly — book ahead through the app or front desk."
        image="/images/training.jpg"
      />

      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          {/* Hours bar */}
          <Reveal>
            <div className="grid grid-cols-12 gap-y-6 gap-x-8 border-b border-ink/15 pb-10">
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.95] tracking-tightish">
                  Open seven days.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-3">
                <dt className="font-body text-[11px] uppercase tracking-widest2 text-ink/55">
                  Bathhouse
                </dt>
                <dd className="mt-2 font-body text-[16px] leading-[1.55]">
                  06:00 — 22:00
                </dd>
              </div>
              <div className="col-span-12 md:col-span-3">
                <dt className="font-body text-[11px] uppercase tracking-widest2 text-ink/55">
                  Studio
                </dt>
                <dd className="mt-2 font-body text-[16px] leading-[1.55]">
                  Class times listed below
                </dd>
              </div>
            </div>
          </Reveal>

          {/* Days */}
          <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
            {DAYS.map((d, di) => (
              <Reveal key={d.day} delay={(di % 3) * 0.05}>
                <div className="grid grid-cols-12 gap-y-6 gap-x-8">
                  <div className="col-span-12 md:col-span-3">
                    <h3 className="font-display text-[clamp(36px,4.5vw,64px)] uppercase leading-[0.95] tracking-tightish">
                      {d.day}
                    </h3>
                  </div>
                  <ul className="col-span-12 divide-y divide-ink/15 border-t border-ink/15 md:col-span-9">
                    {d.sessions.map((s) => (
                      <li
                        key={s.time + s.name}
                        className="grid grid-cols-12 items-baseline gap-4 py-5"
                      >
                        <span className="col-span-3 font-display text-[18px] tabular-nums tracking-wider2 md:col-span-2">
                          {s.time}
                        </span>
                        <span className="col-span-9 font-body text-[16px] leading-[1.4] md:col-span-7 md:text-[17px]">
                          {s.name}
                        </span>
                        <span className="col-span-12 font-body text-[13px] text-ink/60 md:col-span-3 md:text-right">
                          {s.coach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center md:px-10 md:py-28">
          <Reveal>
            <p className="font-body text-[16px] leading-[1.6] text-paper/85 md:text-[18px]">
              Booking opens 14 days in advance. Members get priority access to
              every release.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/pricing" className="btn-pill on-dark">
                Join
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
