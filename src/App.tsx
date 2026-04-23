import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Process } from "@/components/landing/Process";
import { Proof } from "@/components/landing/Proof";
import { Offer } from "@/components/landing/Offer";
import { Contact } from "@/components/landing/Contact";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Proof />
      <Offer />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
