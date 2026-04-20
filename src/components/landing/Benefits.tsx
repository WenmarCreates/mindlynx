import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

const benefits = [
  "Faster payments from insurance companies",
  "Fewer denied or rejected claims",
  "Improved monthly cash flow",
  "Less stress on your team",
  "More time focused on patient care",
];

export function Benefits() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">What You Can Expect</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              The transformation,
              <br />
              <span className="italic">in plain terms.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <div className="bg-background h-full p-10 transition-colors duration-500 hover:bg-[var(--cream)]">
                <div className="h-10 w-10 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] grid place-items-center">
                  <Check className="h-5 w-5" />
                </div>
                <p className="mt-6 font-serif text-2xl md:text-[1.6rem] font-light leading-snug text-foreground">
                  {b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
