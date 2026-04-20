import { Reveal } from "./Reveal";
import { Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.13_70/0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="container-px mx-auto max-w-5xl relative text-center">
        <Reveal>
          <div className="eyebrow mb-6 [&::before]:bg-[var(--gold)] !text-primary-foreground/60 justify-center inline-flex">
            Contact
          </div>
          <h2 className="font-serif text-[clamp(1.5rem,4vw,3.25rem)] leading-[1.1] font-light whitespace-nowrap">
            Stop Losing Revenue to <span className="italic text-gradient-gold">Denied Claims.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:404-517-7041" className="btn-primary !bg-[var(--gold)] !text-primary group !px-9 !py-4 text-base">
              <Phone className="h-4 w-4" />
              Call: 404-517-7041
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
