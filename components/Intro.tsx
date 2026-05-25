import { Reveal } from "./Reveal";

export default function Intro() {
  return (
    <section id="first-timer" className="bg-paper on-light text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: oversized statement */}
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[clamp(44px,8.5vw,148px)] uppercase leading-[0.92] tracking-tightish">
                A space built
                <br />
                around how
                <br />
                <span className="italic font-normal">you</span>  want to feel.
              </h2>
            </Reveal>
          </div>

          {/* Right: supporting copy, aligned to baseline of heading */}
          <div className="md:col-span-4 md:flex md:flex-col md:justify-end md:pb-3">
            <Reveal delay={0.15}>
              <div className="h-px w-12 bg-ink/40" />
              <p className="mt-6 max-w-reading font-body text-[16px] md:text-[17px] leading-[1.6] text-ink/85">
                Heat. Cold. Strength. Stillness. Movement. Everything under one
                roof — designed to move with your day, not dictate it. No noise.
                No intimidation. Just considered spaces and people here for the
                same reason you are: to feel better.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
