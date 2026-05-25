"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadCurtain() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setProgress(100);
      setDone(true);
      return;
    }

    const start = performance.now();
    const MIN_DURATION = 1600; // ms — feels intentional, not instant
    let raf = 0;

    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((res) =>
            window.addEventListener("load", () => res(), { once: true })
          );

    const tick = (t: number) => {
      const elapsed = t - start;
      // ease-out toward 92% while waiting for load
      const synthetic = Math.min(0.92, 1 - Math.pow(1 - elapsed / MIN_DURATION, 3));
      setProgress((p) => Math.max(p, Math.round(synthetic * 100)));
      if (elapsed < MIN_DURATION || !readyHit.value) {
        raf = requestAnimationFrame(tick);
      }
    };

    const readyHit = { value: false };
    loaded.then(() => {
      readyHit.value = true;
    });

    raf = requestAnimationFrame(tick);

    const minTimer = window.setTimeout(() => {
      loaded.then(() => {
        cancelAnimationFrame(raf);
        // sprint to 100, then close
        let v = 0;
        const closeRaf = setInterval(() => {
          v += 6;
          setProgress((p) => {
            const next = Math.min(100, p + 6);
            if (next >= 100) {
              clearInterval(closeRaf);
              setTimeout(() => setDone(true), 280);
            }
            return next;
          });
          if (v >= 100) clearInterval(closeRaf);
        }, 16);
      });
    }, MIN_DURATION);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(minTimer);
    };
  }, [reduce]);

  return (
    <motion.div
      aria-hidden
      initial={{ y: 0 }}
      animate={done ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink text-paper"
    >
      {/* Lifter SVG */}
      <Lifter />

      {/* Counter */}
      <div
        className="mt-12 font-display text-[40px] leading-none tabular-nums"
        style={{ letterSpacing: "0.04em" }}
      >
        {String(progress).padStart(2, "0")}%
      </div>

      {/* Progress line */}
      <div className="mt-6 h-px w-[180px] overflow-hidden bg-paper/15">
        <div
          className="h-full bg-paper transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

function Lifter() {
  // Pure-SVG figure performing an overhead press.
  // The arms + barbell translate up and down on a loop.
  return (
    <div className="relative h-[140px] w-[120px]">
      <svg
        viewBox="0 0 120 160"
        width="120"
        height="160"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-paper"
      >
        {/* Body (static) */}
        {/* Head */}
        <circle cx="60" cy="58" r="9" />
        {/* Torso */}
        <line x1="60" y1="67" x2="60" y2="105" />
        {/* Legs — squat stance */}
        <line x1="60" y1="105" x2="46" y2="138" />
        <line x1="60" y1="105" x2="74" y2="138" />
        {/* Feet */}
        <line x1="40" y1="138" x2="52" y2="138" strokeWidth="3.5" />
        <line x1="68" y1="138" x2="80" y2="138" strokeWidth="3.5" />

        {/* Arms + barbell (animated) */}
        <g className="lifter-arms">
          {/* Left arm */}
          <line x1="60" y1="72" x2="42" y2="42" />
          {/* Right arm */}
          <line x1="60" y1="72" x2="78" y2="42" />
          {/* Barbell bar */}
          <line x1="22" y1="42" x2="98" y2="42" strokeWidth="3.5" />
          {/* Plates */}
          <rect x="14" y="32" width="8" height="20" rx="1.5" fill="currentColor" />
          <rect x="98" y="32" width="8" height="20" rx="1.5" fill="currentColor" />
          <rect x="6" y="36" width="6" height="12" rx="1.5" fill="currentColor" />
          <rect x="108" y="36" width="6" height="12" rx="1.5" fill="currentColor" />
        </g>
      </svg>

      <style jsx>{`
        :global(.lifter-arms) {
          transform-origin: 60px 72px;
          animation: press 1.1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }
        @keyframes press {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.lifter-arms) {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
