"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WordReveal } from "./Reveal";

export default function PageHero({
  title,
  intro,
  image,
}: {
  title: string;
  intro?: string;
  image: string;
}) {
  const r = useReducedMotion();
  return (
    <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="mono object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <h1 className="font-display uppercase leading-[0.9] tracking-tightish text-paper">
          <WordReveal
            text={title}
            className="block text-[clamp(48px,9vw,160px)]"
            stagger={0.07}
            delay={0.7}
          />
        </h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: r ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-6 max-w-[560px] font-body text-[16px] leading-[1.55] text-paper/90 md:text-[18px]"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
