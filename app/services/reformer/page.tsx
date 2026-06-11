import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, ImageReveal } from "@/components/Reveal";

export const metadata = {
  title: "Reformer Pilates · Project Mood",
  description: "Strength through movement. Two styles, one focus.",
};

export default function ReformerPage() {
  return (
    <PageShell>
      <PageHero
        title="Reformer."
        intro="Strength through movement. Two styles, one focus — adjust the intensity to the day you're having."
        image="/images/reformer.jpg"
      />

      {/* Opening statement */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(40px,6.5vw,104px)] uppercase leading-[0.9] tracking-tightish">
                  Two styles.
                  <br />
                  One studio.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 md:flex md:items-end">
              <Reveal delay={0.1}>
                <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                  150+ classes a month, so you can shift gears whenever you
                  need — without overthinking it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW — text dominant, small portrait image right */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-32">
          <div className="grid grid-cols-12 items-start gap-y-10 gap-x-8 border-t border-ink/15 pt-16 md:pt-20">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h3 className="font-display text-[clamp(64px,11vw,200px)] uppercase leading-[0.88] tracking-tightish">
                  Flow.
                </h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-[48ch] font-body text-[17px] leading-[1.6] text-ink/85 md:text-[19px]">
                  Slower. Controlled. Form-first. Sequences that prioritise
                  breath, alignment, and stability — building a foundation you
                  can return to on any day, in any mood.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-[48ch] font-body text-[15px] leading-[1.6] text-ink/65">
                  Best for: anyone new to reformer, recovery days, or when
                  you'd rather move than sweat.
                </p>
              </Reveal>
            </div>
            <ImageReveal className="col-span-12 md:col-span-4 md:col-start-9 md:mt-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/reformer.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* IGNITE — dark inverse, image left bleed, text right */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-12 items-end gap-y-10 gap-x-8">
            <ImageReveal className="col-span-12 md:col-span-7">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/images/reformer.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>
            <div className="col-span-12 md:col-span-5 md:pb-4">
              <Reveal>
                <h3 className="font-display text-[clamp(64px,11vw,200px)] uppercase leading-[0.88] tracking-tightish">
                  Ignite.
                </h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-[42ch] font-body text-[17px] leading-[1.6] text-paper/85 md:text-[19px]">
                  Faster pace. More challenge. More intensity. Built for heat,
                  output, and the clean reset you get afterwards.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-[42ch] font-body text-[15px] leading-[1.6] text-paper/60">
                  Best for: regulars who want to push, days you want to sweat,
                  or anyone chasing the post-class quiet.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Before you arrive */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-y-10 gap-x-8 px-6 py-24 md:px-10 md:py-32">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                Before you arrive.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10">
                <Detail label="Arrival" value="10 minutes before class. Your trainer will run through the session." />
                <Detail label="Grip socks" value="Required. Available at the front desk if you need a pair." />
                <Detail label="Class size" value="Small. Personal attention is the default." />
                <Detail label="Level" value="All levels welcome. New to reformer? Start with Flow." />
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/schedule" className="btn-pill on-light">
                  See Timetable
                </Link>
                <Link
                  href="/pricing"
                  className="font-display text-[16px] uppercase link-underline"
                  style={{ letterSpacing: "0.3px" }}
                >
                  Memberships →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-body text-[11px] uppercase tracking-widest2 text-ink/55">
        {label}
      </dt>
      <dd className="mt-3 font-body text-[16px] leading-[1.55] text-ink/90">
        {value}
      </dd>
    </div>
  );
}
