import { Reveal } from "./Reveal";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow mb-6">Contact</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Let's talk about your{" "}
              <span className="italic text-gradient-gold">billing.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Tell us about your practice and we'll be in touch shortly.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:404-517-7041"
                className="flex items-center gap-3 text-foreground/85 hover:text-foreground transition"
              >
                <span className="h-10 w-10 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] grid place-items-center">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-serif text-lg">404-517-7041</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/85">
                <span className="h-10 w-10 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] grid place-items-center">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="font-serif text-lg">HIPAA Compliant</span>
              </div>
            </div>
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
                    We received your message and will reach out shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" required />
                    <Field label="Practice Name" name="practice" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div className="mt-5">
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      maxLength={1000}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto group">
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
        {required && <span className="text-[var(--gold)] ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition"
      />
    </label>
  );
}
