import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "We review your current billing process and surface the leaks costing you revenue today.",
  },
  {
    n: "02",
    title: "Setup & Integration",
    body: "We plug into your existing workflow and EHR with zero disruption to your team.",
  },
  {
    n: "03",
    title: "We Handle Billing",
    body: "Claims, follow-ups, denials, and A/R — all managed by behavioral health specialists.",
  },
  {
    n: "04",
    title: "You Get Paid",
    body: "Improved collections, fewer denials, and predictable monthly cash flow.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.13_70/0.18),transparent_60%)]" />
      <div className="container-px mx-auto max-w-7xl relative">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6 [&::before]:bg-[var(--gold)] !text-primary-foreground/60">
              How It Works
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Four steps from{" "}
              <span className="italic text-gradient-gold">leaking revenue</span> to
              predictable cash flow.
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="mt-20 relative">
          {/* timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-primary-foreground/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-[var(--gold)] to-transparent"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.n} delay={0.05}>
                  <div className="relative grid md:grid-cols-2 gap-8 items-center">
                    {/* dot */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="h-4 w-4 rounded-full bg-[var(--gold)] ring-8 ring-primary" />
                    </div>

                    <div className={`pl-20 md:pl-0 ${right ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"}`}>
                      <div className="font-serif text-5xl md:text-6xl text-[var(--gold)] font-light">
                        {s.n}
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl font-light mt-3">
                        {s.title}
                      </h3>
                    </div>
                    <div className={`pl-20 md:pl-0 ${right ? "md:order-1 md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md md:inline-block">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
