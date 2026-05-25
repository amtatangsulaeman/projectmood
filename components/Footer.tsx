const EXPLORE = [
  { label: "Bathhouse", href: "#bathhouse" },
  { label: "Training Club", href: "#training" },
  { label: "Gym & PT", href: "#gym" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#membership" },
];

const ABOUT = [
  { label: "First Timers", href: "#first-timer" },
  { label: "Etiquette", href: "#etiquette" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WORK = [
  { label: "Join the team", href: "#careers" },
  { label: "Corporate partnerships", href: "#partnerships" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-10 md:px-10 md:pt-28">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-12 md:gap-x-10">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4">
            <p className="font-display text-[32px] uppercase leading-none tracking-wideish">
              Project Mood
            </p>
            <p className="mt-5 max-w-[260px] font-body text-[14px] leading-[1.55] text-paper/85">
              Melbourne's home for movement, recovery, and reset
            </p>

            <address className="mt-12 not-italic font-body text-[13px] leading-[1.7] text-paper/90">
              95 Coventry St, Southbank, VIC 3006
              <br />
              <a
                href="mailto:moodcrew@projectmood.com.au"
                className="link-underline"
              >
                moodcrew@projectmood.com.au
              </a>{" "}
              ·{" "}
              <a href="tel:+61399672446" className="link-underline">
                (03) 9967 2446
              </a>
            </address>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore" items={EXPLORE} />

          {/* About */}
          <FooterColumn title="About" items={ABOUT} />

          {/* Work With Us */}
          <FooterColumn title="Work With Us" items={WORK} />

          {/* Follow */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-display text-[13px] uppercase tracking-wider2 text-paper">
              Follow
            </p>
            <ul className="mt-5 flex flex-col gap-2">
              <li>
                <a
                  href="https://instagram.com/projectmoodau"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-[13px] text-paper/90 link-underline"
                >
                  @projectmoodau
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-24 flex flex-col items-center justify-center gap-2 text-center font-body text-[12px] text-paper/70 md:mt-28">
          <p>
            © Project Mood 2026 ·{" "}
            <a href="#terms" className="link-underline">
              Terms &amp; Conditions
            </a>{" "}
            ·{" "}
            <a href="#privacy" className="link-underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="col-span-1 md:col-span-2">
      <p className="font-display text-[13px] uppercase tracking-wider2 text-paper">
        {title}
      </p>
      <ul className="mt-5 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-body text-[13px] text-paper/90 link-underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
