import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🔮",
    name: "Three Card Reading",
    description: "Past, present, and future insights to guide your journey through life's mysteries.",
    duration: "30 minutes",
    price: "$45"
  },
  {
    icon: "✨",
    name: "Celtic Cross Spread",
    description: "Deep dive into complex situations with this comprehensive 10-card layout.",
    duration: "60 minutes",
    price: "$90"
  },
  {
    icon: "🌙",
    name: "Love & Relationships",
    description: "Uncover the truths of your romantic path and connection with others.",
    duration: "45 minutes",
    price: "$65"
  },
  {
    icon: "⭐",
    name: "Career Guidance",
    description: "Navigate your professional path with clarity and cosmic wisdom.",
    duration: "45 minutes",
    price: "$65"
  },
  {
    icon: "🎴",
    name: "Year Ahead Reading",
    description: "Discover what the next 12 months hold for you across all life areas.",
    duration: "90 minutes",
    price: "$120"
  },
  {
    icon: "💫",
    name: "Spiritual Path Reading",
    description: "Connect with your higher self and explore your spiritual journey.",
    duration: "60 minutes",
    price: "$85"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-accent/10 text-5xl">✦</div>
      <div className="absolute bottom-10 right-10 text-accent/10 text-5xl">✦</div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Sacred Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 cosmic-text mt-4">
            Tarot Reading Sessions
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
            Choose from our carefully curated reading styles, each designed to illuminate different aspects of your life's journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.name}
              className="group cursor-pointer bg-card/60 backdrop-blur-sm border-accent/20 hover:border-accent/60 transition-all duration-500 hover:scale-105 mystical-glow p-8 relative overflow-hidden"
            >
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
              <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
              <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
              <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>

              <div className="text-5xl mb-6 golden-shimmer group-hover:scale-110 transition-transform duration-300 text-center">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3 text-center">
                {service.name}
              </h3>
              
              <p className="text-sm text-muted-foreground font-light mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              <div className="flex justify-between items-center mb-6 pt-4 border-t border-accent/20">
                <span className="text-xs text-accent font-light tracking-wide">{service.duration}</span>
                <span className="text-lg font-serif font-semibold text-accent">{service.price}</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-sm font-light tracking-wide transition-all duration-300">
                Book Reading
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground font-light mb-6">
            Not sure which reading is right for you?
          </p>
          <Button 
            variant="outline" 
            className="border-accent/50 text-accent hover:bg-accent/10 rounded-sm font-light tracking-wide px-8"
          >
            Contact for Guidance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
