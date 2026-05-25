"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const NAV_OFFSET = 80;

    const lenis = !reduce
      ? new Lenis({
          duration: 1.1,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
        })
      : null;

    let raf = 0;
    if (lenis) {
      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -NAV_OFFSET });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
