import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";

const benefits = [
  { stat: "38", suffix: "%", label: "Faster payments from insurance companies" },
  { stat: "62", suffix: "%", label: "Fewer denied or rejected claims" },
  { stat: "21", suffix: "d", label: "Average reduction in days-in-A/R" },
  { stat: "100", suffix: "%", label: "HIPAA-compliant, audit-ready processes" },
  { stat: "9", suffix: "/10", label: "Clients renew after the first year" },
  { stat: "0", suffix: "", label: "Disruption to your existing EHR workflow" },
];

function Counter({ to, suffix }: { to: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  const target = parseInt(to, 10);

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {isNaN(target) ? to : val}
      {suffix}
    </span>
  );
}

export function Benefits() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">What You Can Expect</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Measurable results,
              <br />
              <span className="italic">month after month.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.05}>
              <div className="bg-background h-full p-10 transition-colors duration-500 hover:bg-[var(--cream)]">
                <div className="font-serif text-6xl md:text-7xl font-light text-foreground tracking-tight">
                  <Counter to={b.stat} suffix={b.suffix} />
                </div>
                <p className="mt-6 text-muted-foreground max-w-xs">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
