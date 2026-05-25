import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Pricing · Project Mood",
  description: "Memberships, packs, and the intro offer — straight pricing.",
};

const INTRO = {
  title: "Set the Mood",
  price: "$50",
  unit: "for 2 sessions",
  body: "Two sessions — bathhouse, reformer, or strength & conditioning. Try the space before you commit. No catch.",
  cta: "Claim the offer",
};

const PACKS = [
  {
    name: "Casual",
    price: "$45",
    unit: "per session",
    body: "Pay as you go. Use across any class or the bathhouse.",
  },
  {
    name: "10 Pack",
    price: "$390",
    unit: "10 sessions",
    body: "$39 / session. Six-month expiry. Share-able within memberships.",
  },
  {
    name: "20 Pack",
    price: "$720",
    unit: "20 sessions",
    body: "$36 / session. Twelve-month expiry. Most-used by regulars.",
  },
];

const MEMBERSHIPS = [
  {
    name: "Bathhouse Unlimited",
    price: "$179",
    unit: "/ month",
    perks: [
      "Unlimited bathhouse access",
      "Bring a guest twice a month",
      "Member-only opening hours",
    ],
  },
  {
    name: "Studio Unlimited",
    price: "$269",
    unit: "/ month",
    perks: [
      "Unlimited reformer + strength classes",
      "Two bathhouse visits per week",
      "Priority booking",
    ],
    feature: true,
  },
  {
    name: "Full Mood",
    price: "$329",
    unit: "/ month",
    perks: [
      "Unlimited everything — classes, gym, bathhouse",
      "One PT session per month included",
      "10% off retail & guest passes",
    ],
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        title="Pricing."
        intro="Straight pricing. No tiers built to confuse. Pick what fits how you'll actually use the space."
        image="/images/membership.jpg"
      />

      {/* Intro offer — featured */}
      <section className="bg-paper on-light text-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="grid grid-cols-12 items-end gap-y-8 gap-x-8 border-b border-ink/15 pb-12">
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-display text-[clamp(48px,8vw,140px)] uppercase leading-[0.9] tracking-tightish">
                  {INTRO.title}.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-3">
                <p className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-none tracking-tightish">
                  {INTRO.price}
                </p>
                <p className="mt-2 font-body text-[13px] uppercase tracking-widest2 text-ink/55">
                  {INTRO.unit}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <p className="font-body text-[15px] leading-[1.55] text-ink/85">
                  {INTRO.body}
                </p>
                <Link href="#book" className="btn-pill on-light mt-6">
                  {INTRO.cta}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Packs */}
          <div className="mt-20 md:mt-24">
            <Reveal>
              <h3 className="font-display text-[clamp(32px,4.5vw,64px)] uppercase leading-[0.95] tracking-tightish">
                Casual & packs.
              </h3>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {PACKS.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div className="flex h-full flex-col gap-4 border border-ink/15 p-8">
                    <p className="font-display text-[20px] uppercase tracking-wider2">
                      {p.name}
                    </p>
                    <div>
                      <p className="font-display text-[48px] leading-none tracking-tightish">
                        {p.price}
                      </p>
                      <p className="mt-1 font-body text-[12px] uppercase tracking-widest2 text-ink/55">
                        {p.unit}
                      </p>
                    </div>
                    <p className="mt-2 font-body text-[15px] leading-[1.55] text-ink/80">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="font-display text-[clamp(48px,8vw,140px)] uppercase leading-[0.9] tracking-tightish">
              Memberships.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[52ch] font-body text-[16px] leading-[1.6] text-paper/80 md:text-[17px]">
              No lock-in. Pause anytime. All memberships include access to
              member-only hours, priority booking, and 10% off guest passes.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-20">
            {MEMBERSHIPS.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col gap-5 border p-8 ${
                    m.feature
                      ? "border-paper bg-paper text-ink"
                      : "border-paper/25"
                  }`}
                >
                  <p className="font-display text-[20px] uppercase tracking-wider2">
                    {m.name}
                  </p>
                  <div>
                    <p className="font-display text-[56px] leading-none tracking-tightish">
                      {m.price}
                    </p>
                    <p
                      className={`mt-1 font-body text-[12px] uppercase tracking-widest2 ${
                        m.feature ? "text-ink/55" : "text-paper/55"
                      }`}
                    >
                      {m.unit}
                    </p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-3">
                    {m.perks.map((perk) => (
                      <li
                        key={perk}
                        className={`font-body text-[15px] leading-[1.5] ${
                          m.feature ? "text-ink/85" : "text-paper/85"
                        }`}
                      >
                        — {perk}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#join"
                    className={`mt-auto pt-6 ${
                      m.feature ? "btn-pill on-light" : "btn-pill on-dark"
                    }`}
                    style={{ alignSelf: "flex-start" }}
                  >
                    Join
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
