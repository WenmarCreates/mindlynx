import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";

const reasons = [
  "Behavioral health billing specialists, not general billing",
  "Consistent follow-up on unpaid claims",
  "Clear communication and transparency",
  "HIPAA-compliant processes",
  "Reliable, detail-focused billing support",
];

export function Proof() {
  return (
    <section id="proof" className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Why Practices Choose MindLynx</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Built for behavioral health teams who can't afford{" "}
              <span className="italic">guesswork.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-16 grid md:grid-cols-2 gap-x-12">
            {reasons.map((r, i) => (
              <li
                key={r}
                className="flex items-start gap-4 py-6 border-b border-border group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <BadgeCheck className="h-6 w-6 text-[var(--gold)] mt-0.5 transition-transform group-hover:scale-110 shrink-0" />
                <span className="text-foreground/90 text-lg font-serif font-light">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
