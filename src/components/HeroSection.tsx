import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cosmic-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />
      
      {/* Ornate decorative elements */}
      <div className="absolute top-20 left-10 text-accent/20 text-6xl">✦</div>
      <div className="absolute bottom-20 right-10 text-accent/20 text-6xl">✦</div>
      <div className="absolute top-40 right-20 text-accent/10 text-4xl">✧</div>
      <div className="absolute bottom-40 left-20 text-accent/10 text-4xl">✧</div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Welcome to</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 cosmic-text float-animation leading-tight">
          Mystical Tarot Insights
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Unlock the ancient wisdom of the cards. Discover guidance, clarity, and profound insights through professional tarot readings.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/80 text-primary-foreground mystical-glow text-lg px-10 py-6 rounded-sm font-light tracking-wide transition-all duration-300 hover:scale-105"
        >
          Book Your Reading
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
