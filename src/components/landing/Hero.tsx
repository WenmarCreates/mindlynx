import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* ambient backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <motion.div
        style={{ y }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full -z-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.74_0.13_70/0.18),transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 600], [0, -100]) }}
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full -z-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.22_0.04_255/0.10),transparent_60%)]" />
      </motion.div>

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="eyebrow mb-6"
            >
              Behavioral Health Billing Specialists
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] font-light text-foreground"
            >
              Get paid faster.
              <br />
              <span className="italic font-normal text-gradient-gold">Reduce denials.</span>
              <br />
              Grow monthly revenue.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              MindLynx helps behavioral health clinics increase collections, recover
              unpaid claims, and stabilize cash flow — without adding another task to
              your team's day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#offer" className="btn-primary group">
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#problem" className="btn-ghost">
                See where you're losing revenue
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> HIPAA-Compliant & Secure
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--gold)]" /> Works with your current EHR
              </span>
              <span className="hidden md:inline-flex items-center gap-2">
                Built for Mental Health & Substance Abuse Practices
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroMockup}
                alt="Behavioral health billing dashboard preview"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
            </div>
            {/* floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-soft hidden md:block"
            >
              <div className="text-xs text-muted-foreground">Average client lift</div>
              <div className="font-serif text-3xl font-medium mt-1">+38%</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">monthly collections</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-soft hidden md:block"
            >
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Denials</div>
              <div className="font-serif text-xl">−62%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
