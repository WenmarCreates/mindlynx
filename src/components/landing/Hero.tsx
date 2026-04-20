import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const yReverse = useTransform(scrollY, [0, 600], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <motion.div
        style={{ y }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full -z-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.74_0.13_70/0.18),transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ y: yReverse }}
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full -z-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.22_0.04_255/0.10),transparent_60%)]" />
      </motion.div>

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-10 items-center">
          <div className="xl:col-span-7">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex"
            >
              <div className="brand-badge">
                <div className="brand-badge-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-teal)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  </span>
                  <span className="brand-badge-text">
                    VeriFlow Billing Solutions
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-foreground"
            >
              <span className="block whitespace-nowrap text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
                Stop Losing Revenue.
              </span>
              <span className="mt-2 block whitespace-nowrap text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight italic font-normal text-gradient-gold">
                Get Paid Faster.
              </span>
              <span className="mt-6 block text-[clamp(1.25rem,2.2vw,1.875rem)] leading-snug tracking-tight text-muted-foreground font-sans font-light max-w-2xl">
                Reduce Denials and Recover Unpaid Claims.
              </span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              VeriFlow Billing Solutions helps behavioral health clinics reduce
              denials, recover unpaid claims, and improve cash flow without
              changing your current&nbsp;EHR.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary group">
                Contact&nbsp;Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:404-517-7041" className="btn-ghost">
                Call:&nbsp;404-517-7041
              </a>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> HIPAA&nbsp;Compliant
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--gold)]" /> Works Inside Your&nbsp;EHR
              </span>
              <span className="hidden md:inline-flex items-center gap-2">
                No Long-Term&nbsp;Contracts
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="xl:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroMockup}
                alt="Behavioral health billing workspace"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

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
