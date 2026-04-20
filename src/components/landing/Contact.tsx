import { Reveal } from "./Reveal";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

const HELP_OPTIONS = [
  "Reduce denials & increase collections",
  "Insurance verification (VOB) support",
  "Faster claim submissions & payments",
  "Recover unpaid or aging claims",
  "Billing support within your current EHR",
  "Help scaling your clinic operations",
  "Not sure yet — just exploring",
];

const WEBHOOK_URL =
  "https://aismartlinx.app.n8n.cloud/webhook-test/c5dfec92-6292-4f94-9ed2-002f1779a8c6";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: String(formData.get("name") || ""),
        practice: String(formData.get("practice") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
        help: selected,
        submittedAt: new Date().toISOString(),
        source: typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[var(--cream)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow mb-6">Contact</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Let's improve your billing and{" "}
              <span className="italic text-gradient-gold">increase your revenue.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Tell us about your practice and we will reach out to discuss how we can help.
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
                    <Field label="Practice / Clinic Name" name="practice" />
                    <Field label="Email Address" name="email" type="email" required />
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="mt-8">
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      What can we help you with?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {HELP_OPTIONS.map((option) => {
                        const checked = selected.includes(option);
                        return (
                          <label
                            key={option}
                            className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
                              checked
                                ? "border-[var(--gold)]/60 bg-[var(--gold)]/5"
                                : "border-border hover:border-foreground/20"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="help[]"
                              value={option}
                              checked={checked}
                              onChange={() => toggle(option)}
                              className="mt-0.5 h-4 w-4 rounded border-border accent-[var(--gold)] cursor-pointer"
                            />
                            <span className="text-sm text-foreground/85 leading-snug">
                              {option}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell us a bit more about your practice and goals…"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto group">
                    Submit
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 focus:ring-4 focus:ring-[var(--gold)]/15 transition placeholder:text-muted-foreground/60"
      />
    </label>
  );
}
