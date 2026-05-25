import { Reveal } from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="bg-paper on-light text-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
        {/* Left: info block */}
        <div className="md:col-span-5 md:flex md:flex-col md:justify-between">
          <Reveal>
            <h2 className="font-display text-[clamp(56px,9vw,160px)] uppercase leading-[0.9] tracking-tightish">
              Southbank.
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-0">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-8 border-t border-ink/15 pt-8">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-widest2 text-ink/55">
                    Address
                  </p>
                  <p className="mt-3 font-body text-[16px] leading-[1.55]">
                    95 Coventry St,
                    <br />
                    Southbank VIC 3006
                  </p>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-widest2 text-ink/55">
                    Hours
                  </p>
                  <p className="mt-3 font-body text-[16px] leading-[1.55]">
                    Open seven days
                    <br />
                    06:00 — 22:00
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.google.com/?q=95+Coventry+St+Southbank+VIC+3006"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill on-light"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+61399672446"
                  className="font-display text-[16px] uppercase tracking-[0.3px] link-underline"
                  style={{ letterSpacing: "0.3px" }}
                >
                  (03) 9967 2446
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: map */}
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/15 md:aspect-[5/4]">
              <iframe
                title="Project Mood — 95 Coventry St, Southbank"
                src="https://www.google.com/maps?q=95+Coventry+St+Southbank+VIC+3006&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.05]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
