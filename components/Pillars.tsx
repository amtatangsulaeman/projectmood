import Image from "next/image";
import { Reveal, ImageReveal } from "./Reveal";

type Pillar = {
  id: string;
  title: string;
  body: string;
  cta: string;
  image: string;
};

const PILLARS: Pillar[] = [
  {
    id: "bathhouse",
    title: "Bathhouse",
    body: "Slow down. Reconnect. Move between dry sauna, steam room, magnesium hot pool, and cold plunge. Stay five minutes or two hours. There's no right way to do this.",
    cta: "Enter the Bathhouse",
    image: "/images/bathhouse.png",
  },
  {
    id: "reformer",
    title: "Reformer Pilates",
    body: "Two styles, one focus — strength through movement. Flow for control and breath. Ignite for heat and pace. Over 150 classes a month, so you can shift gears whenever you need.",
    cta: "See the Timetable",
    image: "/images/reformer.jpg",
  },
  {
    id: "training",
    title: "Strength + Conditioning",
    body: "A clear program. Every day targets a different muscle group. Build strength, improve movement, support long-term progress. Structure when you want it, freedom when you don't.",
    cta: "Join the Club",
    image: "/images/training.jpg",
  },
  {
    id: "gym",
    title: "Gym & PT",
    body: "Train your way. Follow your own plan, move intuitively, or work with one of our trainers. The space is here when you need it.",
    cta: "Book a Session",
    image: "/images/gym.jpg",
  },
];

export default function Pillars() {
  return (
    <section id="services" className="bg-paper on-light text-ink">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section masthead */}
        <div className="border-b border-ink/15 pt-24 pb-10 md:pt-36 md:pb-12">
          <Reveal>
            <h2 className="font-display text-[clamp(40px,6vw,96px)] uppercase leading-[0.95] tracking-tightish">
              Four spaces,
              <br />
              one roof.
            </h2>
          </Reveal>
        </div>

        <PillarRow1 p={PILLARS[0]} />
        <PillarRow2 p={PILLARS[1]} />
        <PillarRow3 p={PILLARS[2]} />
        <PillarRow4 p={PILLARS[3]} />
      </div>
    </section>
  );
}

/* ---------- Shared bits ---------- */

function PillarTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h3 className="font-display text-[clamp(44px,7vw,120px)] uppercase leading-[0.92] tracking-tightish">
        {children}
      </h3>
    </Reveal>
  );
}

function PillarBody({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={0.12}>
      <p className="max-w-reading font-body text-[16px] leading-[1.6] text-ink/85 md:text-[17px]">
        {children}
      </p>
    </Reveal>
  );
}

function PillarCTA({ p }: { p: Pillar }) {
  return (
    <Reveal delay={0.18}>
      <a
        href={`#${p.id}`}
        className="group inline-flex items-center gap-3 font-display text-[15px] uppercase tracking-wider2"
      >
        <span className="link-underline">{p.cta}</span>
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-2"
        >
          →
        </span>
      </a>
    </Reveal>
  );
}

/* ---------- Row 1 — Asymmetric split, image left big ---------- */
function PillarRow1({ p }: { p: Pillar }) {
  return (
    <div id={p.id} className="grid grid-cols-12 gap-y-10 gap-x-8 py-20 md:py-32">
      <ImageReveal className="col-span-12 md:col-span-7">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="mono object-cover"
          />
        </div>
      </ImageReveal>
      <div className="col-span-12 flex flex-col gap-6 md:col-span-4 md:col-start-9 md:justify-end md:pb-2">
        <PillarTitle>{p.title}</PillarTitle>
        <PillarBody>{p.body}</PillarBody>
        <PillarCTA p={p} />
      </div>
    </div>
  );
}

/* ---------- Row 2 — Full-bleed image with text underneath ---------- */
function PillarRow2({ p }: { p: Pillar }) {
  return (
    <div id={p.id} className="py-20 md:py-32">
      <ImageReveal>
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="100vw"
            className="mono object-cover"
          />
        </div>
      </ImageReveal>
      <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-6 md:mt-12">
        <div className="col-span-12 md:col-span-5">
          <PillarTitle>{p.title}</PillarTitle>
        </div>
        <div className="col-span-12 flex flex-col gap-6 md:col-span-5 md:col-start-8 md:pt-4">
          <PillarBody>{p.body}</PillarBody>
          <PillarCTA p={p} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Row 3 — Text-led, portrait image to the right ---------- */
function PillarRow3({ p }: { p: Pillar }) {
  return (
    <div
      id={p.id}
      className="grid grid-cols-12 items-end gap-y-10 gap-x-8 py-20 md:py-32"
    >
      <div className="col-span-12 flex flex-col gap-6 md:col-span-7">
        <PillarTitle>{p.title}</PillarTitle>
        <PillarBody>{p.body}</PillarBody>
        <PillarCTA p={p} />
      </div>
      <ImageReveal className="col-span-12 md:col-span-4 md:col-start-9">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="mono object-cover"
          />
        </div>
      </ImageReveal>
    </div>
  );
}

/* ---------- Row 4 — Image right, text left, info strip below ---------- */
function PillarRow4({ p }: { p: Pillar }) {
  return (
    <div id={p.id} className="py-20 md:py-32">
      <div className="grid grid-cols-12 items-center gap-y-10 gap-x-8">
        <div className="col-span-12 md:col-span-5">
          <PillarTitle>{p.title}</PillarTitle>
        </div>
        <ImageReveal className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="relative aspect-[16/11] w-full">
            <Image
              src={p.image}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="mono object-cover"
            />
          </div>
        </ImageReveal>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-6 border-t border-ink/15 pt-8">
        <div className="col-span-12 md:col-span-7">
          <PillarBody>{p.body}</PillarBody>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:justify-self-end">
          <PillarCTA p={p} />
        </div>
      </div>
    </div>
  );
}
