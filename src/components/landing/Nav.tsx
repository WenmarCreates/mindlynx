import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/mindlynx-logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
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
            scrolled
              ? "glass shadow-soft border border-white/40"
              : "bg-transparent shadow-none border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <motion.img
              src={logo}
              alt="MindLynx"
              animate={{ height: scrolled ? 56 : 80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#solution" className="hover:text-foreground transition">Services</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#proof" className="hover:text-foreground transition">Why Us</a>
            <a href="#offer" className="hover:text-foreground transition">Review</a>
          </nav>
          <a href="#offer" className="btn-primary !py-2.5 !px-5 text-xs">Book Consultation</a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
