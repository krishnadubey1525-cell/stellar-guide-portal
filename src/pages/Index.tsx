import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingParticles />
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        
        <footer className="py-12 px-4 border-t border-accent/20 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-accent text-3xl mb-4">✦</div>
            <p className="text-muted-foreground font-light text-sm tracking-wide">© 2025 Mystical Tarot. Your journey into the unknown begins here.</p>
            <a 
              href="/admin/login" 
              className="text-muted-foreground/50 text-xs mt-4 inline-block hover:text-accent transition-colors"
            >
              Admin
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
