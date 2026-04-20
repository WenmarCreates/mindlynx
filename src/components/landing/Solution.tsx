import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { ClipboardCheck, FileCheck2, RefreshCcw, Search, Workflow } from "lucide-react";

const specialties = [
  "Mental health billing",
  "Substance abuse billing",
  "Insurance verification workflows",
  "Denial recovery strategies",
];

const services = [
  {
    icon: Search,
    title: "Verification of Benefits (VOB)",
    body: "We verify coverage before appointments so you avoid surprises and delays.",
  },
  {
    icon: FileCheck2,
    title: "Clean Claim Submission",
    body: "Accurate claims submitted the first time to reduce rejections.",
  },
  {
    icon: RefreshCcw,
    title: "Denial Management",
    body: "We follow up, fix, and resubmit claims so you don't lose revenue.",
  },
  {
    icon: ClipboardCheck,
    title: "Accounts Receivable Follow-Up",
    body: "We stay on top of unpaid claims until you get paid.",
  },
  {
    icon: Workflow,
    title: "EHR Integration Support",
    body: "We work inside your existing system with no disruption to your workflow.",
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
            <div className="eyebrow mb-6">Built for Behavioral Health Billing</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              You don't need a generic billing company.
              <br />
              <span className="italic text-gradient-gold">You need a specialist.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
              Behavioral health billing is different, and most billing companies don't
              understand it. At MindLynx Billing Solutions, we specialize in:
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 mb-12">
            <div className="eyebrow mb-4">What We Handle For You</div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <TiltCard className="h-full">
                <div className="group h-full relative rounded-2xl bg-card border border-border p-7 overflow-hidden transition-[box-shadow,border-color] duration-500 hover:shadow-elegant hover:border-[var(--brand-teal)]/40">
                  <div className="absolute -inset-px rounded-2xl bg-[linear-gradient(120deg,transparent,oklch(0.72_0.12_210/0.25),transparent)] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2.5s_linear_infinite] -z-0" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--brand-indigo)] to-[var(--brand-teal)] text-primary-foreground grid place-items-center mb-6 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 shadow-[0_8px_24px_-8px_oklch(0.32_0.15_280/0.5)]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 rounded-3xl border border-border bg-card/60 backdrop-blur p-10 md:p-14">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="eyebrow mb-3">Who We Help</div>
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
