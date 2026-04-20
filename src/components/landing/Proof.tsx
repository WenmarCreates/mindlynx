import { Reveal } from "./Reveal";
import { ShieldCheck, Lock, BadgeCheck, Award } from "lucide-react";

const testimonials = [
  {
    quote:
      "Within four months our denial rate dropped by more than half. The MindLynx team feels like an extension of our front office.",
    name: "Dr. Elena Marsh",
    role: "Clinical Director, Outpatient Psychiatry",
  },
  {
    quote:
      "We finally have predictable monthly revenue. They understand behavioral health codes in a way no general billing company ever did.",
    name: "Jordan Pierce, LCSW",
    role: "Founder, Therapy Group Practice",
  },
  {
    quote:
      "Cash flow is steady, our staff is no longer drowning in claims, and we can focus on patients again.",
    name: "Marcus Whitfield",
    role: "Operations Lead, Substance Abuse Center",
  },
];

const reasons = [
  "Behavioral health billing specialists — not generalists",
  "Consistent, persistent follow-up on unpaid claims",
  "Clear weekly reporting and full transparency",
  "HIPAA-compliant, audit-ready processes",
  "Reliable, detail-focused billing support team",
];

export function Proof() {
  return (
    <section id="proof" className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Why Practices Choose MindLynx</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Trusted by behavioral health teams who can't afford{" "}
              <span className="italic">guesswork.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <svg className="h-7 w-7 text-[var(--gold)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 7h4v4H7v4H3v-4a4 4 0 0 1 4-4Zm10 0h4v4h-4v4h-4v-4a4 4 0 0 1 4-4Z" />
                </svg>
                <blockquote className="mt-6 font-serif text-xl md:text-[1.35rem] leading-relaxed font-light">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                Every reason your practice should switch.
              </h3>
            </div>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-4 py-4 border-b border-border group"
                >
                  <BadgeCheck className="h-5 w-5 text-[var(--gold)] mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="text-foreground/90">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground">
            {[
              { icon: ShieldCheck, label: "HIPAA Compliant" },
              { icon: Lock, label: "256-bit Encryption" },
              { icon: Award, label: "Behavioral Health Certified" },
              { icon: BadgeCheck, label: "Insurance Network Verified" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm">
                <b.icon className="h-4 w-4" />
                <span className="uppercase tracking-widest text-xs">{b.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
