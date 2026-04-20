import { Reveal } from "./Reveal";
import problemImg from "@/assets/problem-visual.jpg";
import { AlertCircle } from "lucide-react";

const points = [
  "Claims sitting unpaid for weeks or months",
  "Insurance denials slowing down cash flow",
  "Staff spending hours on billing instead of patients",
  "Revenue slipping through the cracks",
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="eyebrow mb-6">The Hidden Leak</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Billing Issues Are Costing You{" "}
              <span className="italic">More Than You Think.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
              If your billing isn't handled correctly, your practice is losing money
              every single month.
            </p>

            <ul className="mt-10 space-y-4">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <li className="flex items-start gap-4 group">
                    <span className="mt-1 h-8 w-8 grid place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-transform group-hover:scale-110">
                      <AlertCircle className="h-4 w-4" />
                    </span>
                    <span className="text-foreground/90 text-base md:text-lg">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <p className="mt-10 font-serif text-2xl italic">We fix that.</p>
            </Reveal>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded-[2rem] blur-2xl -z-10" />
              <div className="rounded-[1.75rem] overflow-hidden shadow-elegant">
                <img
                  src={problemImg}
                  alt="Calm therapy office desk"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
