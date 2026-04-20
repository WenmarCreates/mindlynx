import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";

const reasons = [
  {
    title: "Performance Based Pricing aligned with collections",
    desc: "Our success is tied directly to yours, so we focus on results that matter.",
  },
  {
    title: "No Long Term Contracts",
    desc: "Stay because it works, not because you are locked in.",
  },
  {
    title: "Work Inside Your EHR",
    desc: "No disruption, no transitions, just immediate impact within your system.",
  },
  {
    title: "Dedicated Account Manager",
    desc: "A focused expert managing your billing and driving performance.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Why VeriFlow</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              A billing partner built around{" "}
              <span className="italic">your&nbsp;revenue.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-16 grid md:grid-cols-2 gap-x-12">
            {reasons.map((r) => (
              <li
                key={r.title}
                className="flex items-start gap-4 py-6 border-b border-border group"
              >
                <BadgeCheck className="h-6 w-6 text-[var(--gold)] mt-1 transition-transform group-hover:scale-110 shrink-0" />
                <div>
                  <p className="text-foreground text-lg md:text-xl font-serif font-light leading-snug">
                    {r.title}
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
