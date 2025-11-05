import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cosmic-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-0" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 cosmic-text float-animation">
          Discover Your Cosmic Journey
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Unlock the secrets of the stars with personalized horoscopes, birth charts, and celestial insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground celestial-glow text-lg px-8"
          >
            Get Your Reading
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 text-lg px-8"
          >
            Explore Signs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
