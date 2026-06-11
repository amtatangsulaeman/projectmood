"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function Membership() {
  const r = useReducedMotion();
  return (
    <section
      id="membership"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ink text-paper"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: r ? 1 : 1.05 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
        style={{ opacity: 0.2 }}
      >
        <Image
          src="/images/membership.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-32 text-center md:px-10 md:py-48">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(56px,10vw,180px)] uppercase leading-[0.9] tracking-tightish">
            One Space. Every Mood.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-[52ch] font-body text-[17px] leading-[1.6] text-paper/85">
            One membership. Bathhouse, classes, gym, and recovery — all of it.
            Built for people who don't want to choose.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a href="#pricing" className="btn-pill on-dark">
              View Pricing
            </a>
            <a
              href="#tour"
              className="group inline-flex items-center gap-3 font-display text-[15px] uppercase tracking-wider2"
            >
              <span className="link-underline">Book a Tour</span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
