import { Reveal } from "./Reveal";
import { Zap, RefreshCcw, Workflow, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Rapid VOBs",
    body: "Quick benefit verification to prevent delays, denials, and billing surprises.",
  },
  {
    icon: RefreshCcw,
    title: "Aggressive Denial Management",
    body: "We follow up, correct, and resubmit claims so you do not lose revenue.",
  },
  {
    icon: Workflow,
    title: "EHR Integration",
    body: "Seamless integration with your current EHR for a more efficient billing workflow.",
  },
  {
    icon: ClipboardCheck,
    title: "Aged AR Recovery (60+ Days)",
    body: "We recover unpaid claims that have been sitting too long, turning lost revenue back into cash flow.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Our Services</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Built to recover revenue,{" "}
              <span className="italic text-gradient-gold">end&nbsp;to&nbsp;end.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group h-full relative rounded-2xl bg-card border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant hover:border-foreground/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/8 group-hover:to-transparent transition-all duration-500 -z-0" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-6 transition-transform duration-500 group-hover:rotate-[-4deg]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
