import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute top-10 left-10 text-accent/10 text-6xl">✦</div>
          <div className="absolute bottom-10 right-10 text-accent/10 text-6xl">✦</div>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">About the Reader</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 cosmic-text mt-4">
              Meet Your Guide
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Profile Card */}
              <Card className="md:col-span-1 p-8 bg-card/60 backdrop-blur-sm border-accent/20 text-center relative overflow-hidden">
                <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>
                
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto mb-6 flex items-center justify-center text-6xl golden-shimmer">
                  🔮
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Luna Mystique</h2>
                <p className="text-accent font-light text-sm tracking-wide">Master Tarot Reader</p>
              </Card>

              {/* Bio */}
              <Card className="md:col-span-2 p-8 bg-card/60 backdrop-blur-sm border-accent/20 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>
                
                <h3 className="text-2xl font-serif font-semibold mb-6 text-accent">My Journey</h3>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    For over 15 years, I have walked the path of the tarot, guiding seekers through life's mysteries and helping them unlock their inner wisdom. My journey began with a single deck gifted to me by my grandmother, a renowned mystic in her own right.
                  </p>
                  <p>
                    Through years of dedicated study and thousands of readings, I've developed an intuitive connection with the cards that goes beyond traditional interpretations. Each reading is a sacred conversation between the cosmic forces and your soul's deepest questions.
                  </p>
                  <p>
                    I believe that tarot is not about predicting a fixed future, but about illuminating the paths available to you and empowering you to make conscious choices aligned with your highest good.
                  </p>
                </div>
              </Card>
            </div>

            {/* Experience & Certifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-card/60 backdrop-blur-sm border-accent/20 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>
                
                <h3 className="text-2xl font-serif font-semibold mb-6 text-accent">Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">15+ years of professional tarot reading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">5,000+ individual readings completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Featured reader at mystical events and festivals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Author of "The Modern Mystic's Guide"</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card/60 backdrop-blur-sm border-accent/20 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
                <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>
                
                <h3 className="text-2xl font-serif font-semibold mb-6 text-accent">Specializations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Rider-Waite-Smith Tarot System</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Intuitive and Psychic Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Astrology & Birth Chart Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✦</span>
                    <span className="text-muted-foreground font-light">Spiritual Life Coaching</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Philosophy */}
            <Card className="p-10 bg-card/60 backdrop-blur-sm border-accent/20 text-center relative overflow-hidden mb-16">
              <div className="absolute top-2 left-2 text-accent/30 text-xs">✦</div>
              <div className="absolute top-2 right-2 text-accent/30 text-xs">✦</div>
              <div className="absolute bottom-2 left-2 text-accent/30 text-xs">✦</div>
              <div className="absolute bottom-2 right-2 text-accent/30 text-xs">✦</div>
              
              <div className="text-4xl mb-6 golden-shimmer">🌙</div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">My Philosophy</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto italic">
                "The cards are mirrors to the soul, reflecting not just where you are, but illuminating where you can go. 
                Every reading is a sacred space where your intuition meets cosmic wisdom, empowering you to step into your highest potential."
              </p>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground font-light mb-8">
                Book a reading and discover the guidance that awaits you
              </p>
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground mystical-glow px-10 py-6 text-lg rounded-sm font-light tracking-wide">
                Schedule Your Reading
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
