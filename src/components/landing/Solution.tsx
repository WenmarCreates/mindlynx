import { Reveal } from "./Reveal";
import { ClipboardCheck, FileCheck2, RefreshCcw, Search, Workflow } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Verification of Benefits",
    body: "Coverage verified before appointments — no surprises, no last-minute delays.",
  },
  {
    icon: FileCheck2,
    title: "Clean Claim Submission",
    body: "Accurate claims submitted right the first time to minimize rejections.",
  },
  {
    icon: RefreshCcw,
    title: "Denial Management",
    body: "We follow up, correct, and resubmit so revenue is never left on the table.",
  },
  {
    icon: ClipboardCheck,
    title: "A/R Follow-Up",
    body: "Persistent follow-up on unpaid claims until your practice gets paid.",
  },
  {
    icon: Workflow,
    title: "EHR Integration Support",
    body: "We work inside your existing systems — zero disruption to your workflow.",
  },
];

const audience = [
  "Mental Health Clinics",
  "Therapy Practices",
  "Substance Abuse Centers",
  "Psychiatry Clinics",
  "Group Practices",
  "Outpatient Programs",
];

export function Solution() {
  return (
    <section id="solution" className="relative py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Built for Behavioral Health</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              You don't need a generic billing company.
              <br />
              <span className="italic text-gradient-gold">You need a specialist.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
              Behavioral health billing is uniquely complex — different codes, different
              payer rules, different documentation. We are built for exactly this work.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

        <Reveal delay={0.2}>
          <div className="mt-20 rounded-3xl border border-border bg-card/60 backdrop-blur p-10 md:p-14">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="eyebrow mb-3">Who We Help</div>
                <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                  Practices like yours.
                </h3>
              </div>
              <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {audience.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-3 text-foreground/85 border-b border-border/60 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                    <span className="text-sm md:text-base">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
