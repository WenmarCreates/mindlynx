export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <span className="h-7 w-7 rounded-full bg-primary-foreground/10 grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
            </span>
            <span className="font-serif text-xl">MindLynx Billing Solutions</span>
          </div>
          <p className="mt-4 text-sm max-w-xs">
            Behavioral Health Billing Specialists. Built to help your practice get paid.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-primary-foreground/40 uppercase tracking-widest text-xs mb-4">Contact</div>
          <div>info@mindlynxbilling.com</div>
          <div className="mt-1">(Your Number)</div>
        </div>
        <div className="text-sm">
          <div className="text-primary-foreground/40 uppercase tracking-widest text-xs mb-4">Compliance</div>
          <div>HIPAA-compliant systems</div>
          <div className="mt-1">256-bit encrypted data handling</div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} MindLynx Billing Solutions. All rights reserved.
      </div>
    </footer>
  );
}
