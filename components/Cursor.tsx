"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
    };

    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) {
        ringRef.current?.classList.add("is-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) {
        ringRef.current?.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-ink"
        style={{ mixBlendMode: "difference", backgroundColor: "#fff" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-white transition-[opacity,scale] duration-200"
        style={{ mixBlendMode: "difference", opacity: 0, scale: "0.6" }}
      />
      <style jsx global>{`
        .is-hover { opacity: 1 !important; scale: 1 !important; }
      `}</style>
    </>
  );
}
