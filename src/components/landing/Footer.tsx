import logo from "@/assets/nexprime-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-primary-foreground/5 rounded-2xl p-4 inline-block">
            <img src={logo} alt="NexPrime RCM" className="h-20 w-auto" />
          </div>
          <p className="mt-4 text-sm max-w-xs">
            NexPrime RCM
          </p>
        </div>
        <div className="text-sm">
          <div className="text-primary-foreground/40 uppercase tracking-widest text-xs mb-4">Contact</div>
          <div>Call: 404-517-7041</div>
        </div>
        <div className="text-sm">
          <div className="text-primary-foreground/40 uppercase tracking-widest text-xs mb-4">Compliance</div>
          <div>HIPAA Compliant</div>
          <div className="mt-1">Works Inside Your EHR</div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} NexPrime RCM
      </div>
    </footer>
  );
}
