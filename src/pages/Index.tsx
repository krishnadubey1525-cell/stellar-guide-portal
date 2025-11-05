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
        
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
                Explore the Zodiac
              </h2>
              <p className="text-lg text-muted-foreground">
                Select your sign to discover your cosmic personality
              </p>
            </div>
            <ZodiacGrid />
          </div>
        </section>

        <HoroscopeSection />
        <BirthChartForm />
        
        <footer className="py-8 px-4 border-t border-border/50 mt-16">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Celestial Insights. Your journey through the stars begins here.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
