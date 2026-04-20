import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.13_70/0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="container-px mx-auto max-w-5xl relative text-center">
        <Reveal>
          <div className="eyebrow mb-8 justify-center inline-flex !text-primary-foreground/60 [&::before]:bg-[var(--gold)]">
            Stop the leak
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-light">
            Stop losing revenue
            <br />
            <span className="italic text-gradient-gold">to billing issues.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Let's fix your billing, recover what you're owed, and build the predictable
            cash flow your practice deserves.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#offer" className="btn-primary !bg-[var(--gold)] !text-primary group !px-9 !py-4 text-base">
              Book your consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:info@mindlynxbilling.com"
              className="btn-ghost !border-primary-foreground/20 !bg-primary-foreground/5 !text-primary-foreground hover:!bg-primary-foreground/10"
            >
              info@mindlynxbilling.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
