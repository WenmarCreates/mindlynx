import { Reveal } from "./Reveal";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export function Offer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="offer" className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow mb-6">Complimentary Billing Review</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              See exactly where your practice is{" "}
              <span className="italic text-gradient-gold">losing revenue.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              In a 30-minute review we'll identify denial patterns, A/R leaks, and
              recoverable revenue you didn't know existed — yours, no obligation.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-foreground/80">
              <Clock className="h-4 w-4 text-[var(--gold)]" />
              Limited reviews accepted each month — first come, first served.
            </div>
            <ul className="mt-10 space-y-3 text-foreground/80">
              {[
                "Full denial-pattern analysis",
                "A/R aging breakdown",
                "Estimated recoverable revenue",
                "Custom action plan delivered to you",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl bg-card border border-border p-8 md:p-12 shadow-elegant"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="font-serif text-3xl">Thank you.</div>
                  <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                    We'll reach out within one business day to schedule your billing review.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" />
                    <Field label="Practice Name" name="practice" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Practice Type" name="type" />
                    <Field label="Current Billing Software" name="software" />
                  </div>
                  <div className="mt-5">
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Biggest Billing Challenge
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto group">
                    Request my billing review
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Your information is confidential and HIPAA-compliant. We never share data.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition"
      />
    </label>
  );
}
