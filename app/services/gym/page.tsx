import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, ImageReveal } from "@/components/Reveal";

export const metadata = {
  title: "Gym & PT · Project Mood",
  description: "Train on your terms. Open daily, with or without a coach.",
};

const WAYS = [
  {
    name: "Independent",
    body: "Full access to the floor — run your own program, lift on your schedule, train how you like. Free weights, racks, machines, and space to move without being in someone's way.",
    forYou: "You already know what you're doing, or you want the freedom to figure it out.",
  },
  {
    name: "With a coach",
    body: "Pair up with a personal trainer. Programming built around your goals, your body, and how you actually want to feel — not a generic plan stitched together from somebody else's progress.",
    forYou: "You want accountability, sharper progress, or to fix something specific.",
  },
];

export default function GymPage() {
  return (
    <PageShell>
      <PageHero
        title="Gym + PT."
        intro="Train on your terms. Open daily for independent sessions or with a personal trainer."
        image="/images/gym.jpg"
      />

      {/* Opening — image right small, statement left */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-12 items-end gap-y-12 gap-x-8">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(48px,8vw,140px)] uppercase leading-[0.88] tracking-tightish">
                  Your floor.
                  <br />
                  Your pace.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 max-w-[48ch] font-body text-[17px] leading-[1.6] text-ink/85 md:text-[19px]">
                  Follow your own plan, move intuitively, or work with a coach.
                  The space is here when you need it.
                </p>
              </Reveal>
            </div>
            <ImageReveal className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/gym.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="mono object-cover"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Two ways — vertical row stack on dark */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <ul className="flex flex-col">
            {WAYS.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.05}>
                <li className="grid grid-cols-12 items-start gap-x-8 gap-y-6 border-t border-paper/15 py-16 last:border-b md:py-24">
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.9] tracking-tightish">
                      {w.name}.
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <p className="font-body text-[16px] leading-[1.6] text-paper/85 md:text-[18px]">
                      {w.body}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:pl-6 md:border-l md:border-paper/15">
                    <p className="font-body text-[14px] italic leading-[1.55] text-paper/70 md:text-[15px]">
                      {w.forYou}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Renovation note + CTAs */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-y-10 gap-x-8 px-6 py-24 md:px-10 md:py-32">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.92] tracking-tightish">
                A full renovation
                <br />
                is underway.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:flex md:flex-col md:justify-end md:gap-8">
            <Reveal delay={0.1}>
              <p className="font-body text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                The gym floor is getting a refresh — better equipment, better
                flow, same considered space. Members get first access when it
                reopens.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/pricing" className="btn-pill on-light">
                  See Pricing
                </Link>
                <Link
                  href="/first-timer"
                  className="font-display text-[16px] uppercase link-underline"
                  style={{ letterSpacing: "0.3px" }}
                >
                  First-timer guide →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
