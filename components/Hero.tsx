"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "./Reveal";

export default function Hero() {
  const r = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", r ? "0%" : "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", r ? "0%" : "12%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-paper"
    >
      {/* Parallax image layer */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        aria-hidden
      >
        <Image
          src="/images/Hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="mono object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      {/* Content layer */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-20"
      >
        <h1 className="font-display uppercase leading-[0.88] tracking-tightish text-paper">
          <WordReveal
            text="Build Your Mood."
            className="block text-[clamp(52px,11vw,184px)]"
            stagger={0.08}
            delay={0.9}
          />
        </h1>

        <div className="mt-8 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
              className="h-px bg-paper"
            />
            <motion.p
              initial={{ opacity: 0, y: r ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-6 max-w-[480px] font-body text-[15px] leading-[1.55] text-paper/90 md:text-[18px]"
            >
              A bathhouse, a training club, and a space to feel better — all
              under one roof in Southbank.
            </motion.p>
          </div>

          <div className="md:col-span-6 md:flex md:justify-end">
            <motion.a
              href="#membership"
              initial={{ opacity: 0, y: r ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.95 }}
              className="btn-pill on-dark"
            >
              Set the Mood — 2 for $50
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — pinned to left edge so it never collides */}
      <div className="pointer-events-none absolute bottom-8 left-6 z-10 hidden flex-col items-center gap-3 md:left-10 md:flex">
        <span className="font-body text-[11px] uppercase tracking-widest2 text-paper/80 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="block h-10 w-px origin-top bg-paper/70 scroll-line" />
      </div>
    </section>
  );
}
