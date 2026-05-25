"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const r = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: r ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({
  text,
  className,
  stagger = 0.06,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const r = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-top leading-[0.88]"
          style={{ paddingBottom: "0.14em", paddingTop: "0.02em" }}
        >
          <motion.span
            className="inline-block leading-[0.88]"
            initial={{ y: r ? 0 : "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.65, 0, 0.35, 1],
              delay: delay + i * stagger,
            }}
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const r = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={r ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
