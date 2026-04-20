import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

const benefits = [
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

export function Benefits() {
  return (
    <section className="py-28 md:py-36">
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

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="bg-background h-full p-10 transition-colors duration-500 hover:bg-[var(--cream)]">
                <div className="h-10 w-10 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] grid place-items-center">
                  <Check className="h-5 w-5" />
                </div>
                <p className="mt-6 font-serif text-2xl md:text-[1.6rem] font-light leading-snug text-foreground">
                  {b.title}
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
