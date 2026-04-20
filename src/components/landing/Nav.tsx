import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mindlynx-logo.png";

const NAV_LINKS = [
  { href: "#solution", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#proof", label: "Why VeriFlow" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        animate={{
          maxWidth: scrolled ? 880 : 1280,
          paddingTop: scrolled ? 12 : 24,
          paddingLeft: scrolled ? 16 : 24,
          paddingRight: scrolled ? 16 : 24,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto"
      >
        <motion.div
          animate={{
            paddingLeft: scrolled ? 16 : 8,
            paddingRight: scrolled ? 8 : 8,
            paddingTop: scrolled ? 6 : 4,
            paddingBottom: scrolled ? 6 : 4,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between rounded-full transition-[background,box-shadow,backdrop-filter,border-color] duration-500 ${
            scrolled || open
              ? "glass shadow-soft border border-white/40"
              : "bg-transparent shadow-none border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <motion.img
              src={logo}
              alt="MindLynx"
              animate={{ height: scrolled ? 56 : 80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-xs">
            Book a Consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground hover:bg-foreground/5 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-3 glass shadow-soft border border-white/40 rounded-3xl p-5"
            >
              <nav className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base text-foreground/80 hover:text-foreground border-b border-foreground/5 last:border-b-0 transition"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-4 text-center !py-3 text-sm"
                >
                  Book a Consultation
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
