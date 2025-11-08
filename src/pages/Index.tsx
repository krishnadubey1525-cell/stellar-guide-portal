import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ZodiacGrid from "@/components/ZodiacGrid";
import HoroscopeSection from "@/components/HoroscopeSection";
import BirthChartForm from "@/components/BirthChartForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Discover Your Path</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 cosmic-text mt-4">
                The Zodiac Signs
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
                Each sign holds unique wisdom and celestial energy. Select yours to unveil the mysteries written in the stars.
              </p>
            </div>
            <ZodiacGrid />
          </div>
        </section>

        <HoroscopeSection />
        <BirthChartForm />
        
        <footer className="py-12 px-4 border-t border-accent/20 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-accent text-3xl mb-4">✦</div>
            <p className="text-muted-foreground font-light text-sm tracking-wide">© 2025 Mystical Tarot. Your journey into the unknown begins here.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
