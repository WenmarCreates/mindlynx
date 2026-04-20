import { motion } from "framer-motion";
import logo from "@/assets/mindlynx-logo.png";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-px mx-auto max-w-7xl pt-5">
        <div className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2 shadow-soft">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="MindLynx" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#solution" className="hover:text-foreground transition">Services</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#proof" className="hover:text-foreground transition">Why Us</a>
            <a href="#offer" className="hover:text-foreground transition">Review</a>
          </nav>
          <a href="#offer" className="btn-primary !py-2.5 !px-5 text-xs">Book Consultation</a>
        </div>
      </div>
    </motion.header>
  );
}
