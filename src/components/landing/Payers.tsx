import { Reveal } from "./Reveal";

const payers = [
  "Medicare",
  "Medicaid",
  "Aetna",
  "Blue Cross Blue Shield",
  "UnitedHealthcare",
  "Cigna",
  "Humana",
  "And more",
];

export function Payers() {
  return (
    <section className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">We Work With</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Major payers{" "}
              <span className="italic text-gradient-gold">covered.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We handle Medicare, Medicaid, and all major commercial insurance
              plans so your clinic gets paid no matter the payer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {payers.map((p) => (
              <div
                key={p}
                className="bg-background px-6 py-8 text-center font-serif text-lg md:text-xl font-light text-foreground transition-colors duration-500 hover:bg-[var(--cream)]"
              >
                {p}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
