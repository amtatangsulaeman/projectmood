import Image from "next/image";
import { Reveal, ImageReveal } from "./Reveal";

type Pillar = {
  id: string;
  title: string;
  body: string;
  cta: string;
  image: string;
  flip?: boolean;
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
    flip: true,
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
    flip: true,
  },
];

export default function Pillars() {
  return (
    <section id="services" className="bg-paper on-light text-ink">
      {PILLARS.map((p) => (
        <div
          key={p.id}
          id={p.id}
          className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-12 md:gap-12 md:px-10 md:py-40"
        >
          <ImageReveal
            className={`md:col-span-7 ${p.flip ? "md:order-2" : ""}`}
          >
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

          <div
            className={`md:col-span-5 ${p.flip ? "md:order-1 md:pr-8" : "md:pl-4"}`}
          >
            <Reveal>
              <h3 className="font-display text-[clamp(48px,8vw,140px)] uppercase leading-[0.9] tracking-tightish">
                {p.title}
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-reading font-body text-[17px] leading-[1.6] text-ink/85">
                {p.body}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <a
                href={`#${p.id}`}
                className="group mt-8 inline-flex items-center gap-3 font-display text-[15px] uppercase tracking-wider2"
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
          </div>
        </div>
      ))}
    </section>
  );
}
