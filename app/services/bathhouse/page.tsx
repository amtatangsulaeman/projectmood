import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, ImageReveal } from "@/components/Reveal";

export const metadata = {
  title: "Bathhouse · Project Mood",
  description:
    "An ancient tradition, reimagined. Sauna, steam, magnesium hot pool, cold plunge.",
};

const ELEMENTS = [
  {
    name: "Sauna",
    body: "Dry heat that envelops you — encouraging detoxification and circulation. Sit long enough for your shoulders to drop.",
  },
  {
    name: "Steam Room",
    body: "A tranquil, humid environment that soothes the senses and rehydrates the skin. Breathe slower than usual.",
  },
  {
    name: "Magnesium Pool",
    body: "Immerse yourself in our magnesium-infused hot pool — heated to a restorative 38°C. Easy on the muscles, easier on the mind.",
  },
  {
    name: "Cold Plunge",
    body: "Take the plunge. Icy water that resets the system and clears the head. Brief by design.",
  },
];

export default function BathhousePage() {
  return (
    <PageShell>
      <PageHero
        title="Bathhouse."
        intro="An ancient tradition, reimagined. A place to slow down, reconnect, and feel good again."
        image="/images/bathhouse.png"
      />

      {/* Opening paragraph */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1100px] px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="font-body text-[20px] leading-[1.55] text-ink/90 md:text-[26px] md:leading-[1.45]">
              Bathhouses have been a cornerstone of wellness and connection for
              thousands of years. A place to slow down, reconnect, and feel good
              again. Stay five minutes or two hours — there's no prescribed way
              to use it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Four elements — simple stacked list */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[960px] px-6 pb-28 md:px-10 md:pb-36">
          <ul className="border-t border-ink/15">
            {ELEMENTS.map((el, i) => (
              <Reveal key={el.name} delay={i * 0.04}>
                <li className="grid grid-cols-12 gap-x-8 gap-y-4 border-b border-ink/15 py-12 md:py-16">
                  <h3 className="col-span-12 font-display text-[clamp(32px,4vw,56px)] uppercase leading-[1] tracking-tightish md:col-span-4">
                    {el.name}
                  </h3>
                  <p className="col-span-12 max-w-reading font-body text-[16px] leading-[1.6] text-ink/85 md:col-span-7 md:col-start-6 md:text-[17px]">
                    {el.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Quiet image break */}
      <ImageReveal>
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="/images/bathhouse.png"
            alt=""
            fill
            sizes="100vw"
            className="mono object-cover"
          />
        </div>
      </ImageReveal>

      {/* Visit info */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto grid max-w-[1100px] grid-cols-12 gap-y-10 gap-x-8 px-6 py-24 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(40px,6vw,80px)] uppercase leading-[0.95] tracking-tightish">
                Plan your visit.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10">
                <Detail label="Session length" value="Up to 90 minutes. No minimum." />
                <Detail label="Bring" value="Bathers. Towel & water provided." />
                <Detail label="Hydration" value="Water is available throughout." />
                <Detail label="First time" value="Start with the beginner routine." />
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4">
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
