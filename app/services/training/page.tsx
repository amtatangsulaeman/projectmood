import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, ImageReveal } from "@/components/Reveal";

export const metadata = {
  title: "Strength + Conditioning · Project Mood",
  description: "Smart, balanced training. Coach-led, programmed by the day.",
};

const SPLIT = [
  { day: "Mon", focus: "Lower body — Push", note: "Squat-pattern dominant. Quads, glutes, core finishers." },
  { day: "Tue", focus: "Upper body — Pull", note: "Back day. Rows, pull variations, biceps to close." },
  { day: "Wed", focus: "Conditioning + Core", note: "Mixed-modal pieces. Heart rate up, ego down." },
  { day: "Thu", focus: "Lower body — Pull", note: "Hinge-pattern dominant. Deadlifts, hamstrings, posterior chain." },
  { day: "Fri", focus: "Upper body — Push", note: "Press day. Bench variations, shoulders, triceps." },
  { day: "Sat", focus: "Full body + Mobility", note: "A complete loop. Light, intentional, restorative." },
  { day: "Sun", focus: "Conditioning — Steady", note: "Long, even pace. Build a base, leave room to recover." },
];

export default function TrainingPage() {
  return (
    <PageShell>
      <PageHero
        title="Strength + Conditioning."
        intro="A clear program. Each day targets a different muscle group — helping you build strength, improve movement, and support long-term progress."
        image="/images/training.jpg"
      />

      {/* Statement */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(40px,6.5vw,104px)] uppercase leading-[0.9] tracking-tightish">
                  Structure when
                  <br />
                  you want it.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 md:flex md:items-end">
              <Reveal delay={0.1}>
                <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                  150 classes a month, coach-led, programmed thoughtfully. Show
                  up, follow the day, and let the work compound.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed banner image */}
      <ImageReveal>
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="/images/training.jpg"
            alt=""
            fill
            sizes="100vw"
            className="mono object-cover"
          />
        </div>
      </ImageReveal>

      {/* Weekly split — wide rows on dark, with hover note */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h3 className="font-display text-[clamp(32px,4.5vw,64px)] uppercase leading-[0.95] tracking-tightish">
              A typical week.
            </h3>
          </Reveal>

          <ul className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
            {SPLIT.map((s, i) => (
              <Reveal key={s.day} delay={(i % 3) * 0.04}>
                <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-7 md:py-8">
                  <span className="col-span-2 font-display text-[20px] uppercase tracking-wider2 text-paper/60 md:col-span-1 md:text-[18px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-3 font-display text-[22px] uppercase tracking-wider2 md:col-span-2 md:text-[26px]">
                    {s.day}
                  </span>
                  <span className="col-span-7 font-display text-[20px] uppercase leading-[1.05] tracking-tightish md:col-span-5 md:text-[28px]">
                    {s.focus}
                  </span>
                  <span className="col-span-12 font-body text-[14px] leading-[1.5] text-paper/60 md:col-span-4 md:text-right md:text-[15px]">
                    {s.note}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-y-10 gap-x-8 px-6 py-24 md:px-10 md:py-32">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                Train with intent.
                <br />
                Not ego.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:flex md:flex-col md:justify-end md:gap-8">
            <Reveal delay={0.1}>
              <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                Small classes. Real coaching. Movement that supports the rest
                of your life — not just the hour you're in the room.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/schedule" className="btn-pill on-light">
                  See Timetable
                </Link>
                <Link
                  href="/pricing"
                  className="font-display text-[16px] uppercase link-underline"
                  style={{ letterSpacing: "0.3px" }}
                >
                  Join the Club →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
