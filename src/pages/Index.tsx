import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HoroscopeSection from "@/components/HoroscopeSection";
import BirthChartForm from "@/components/BirthChartForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        

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
