import { Reveal } from "./Reveal";
import { ShieldCheck } from "lucide-react";

export function Offer() {
  return (
    <section id="offer" className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow mb-6">HIPAA Compliant</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Your patient data,{" "}
              <span className="italic text-gradient-gold">protected.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl bg-card border border-border p-10 md:p-14 shadow-elegant">
              <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center mb-8">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="font-serif text-2xl md:text-3xl font-light leading-snug text-foreground">
                We use secure systems and strict protocols to protect patient data.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
