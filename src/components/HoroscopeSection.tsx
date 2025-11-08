import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HoroscopeSection = () => {
  const dailyHoroscope = {
    Aries: "Today brings powerful opportunities for growth. Trust your instincts and take bold action.",
    Taurus: "Focus on building stability. Your patience will be rewarded with lasting results.",
    Gemini: "Communication is key today. Express yourself clearly and listen to others.",
    Cancer: "Emotional clarity emerges. Honor your feelings and nurture your relationships.",
    Leo: "Your creativity shines bright. Share your gifts with the world confidently.",
    Virgo: "Attention to detail serves you well. Organization leads to breakthrough insights.",
    Libra: "Balance and harmony guide your decisions. Seek peace in all interactions.",
    Scorpio: "Deep transformation is underway. Embrace change and release what no longer serves.",
    Sagittarius: "Adventure calls to you. Expand your horizons and explore new perspectives.",
    Capricorn: "Your dedication pays off. Stay focused on long-term goals.",
    Aquarius: "Innovation and originality set you apart. Trust your unique vision.",
    Pisces: "Intuition runs high. Listen to your inner wisdom and creative impulses."
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Daily Guidance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 cosmic-text mt-4">
            Your Daily Reading
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
            The cards speak wisdom for each sign. Discover what mystical insights await you today.
          </p>
        </div>

        <Tabs defaultValue="Aries" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 bg-card/40 p-3 h-auto border border-accent/20">
            {Object.keys(dailyHoroscope).map((sign) => (
              <TabsTrigger
                key={sign}
                value={sign}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-light text-xs tracking-wide rounded-sm"
              >
                {sign}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(dailyHoroscope).map(([sign, reading]) => (
            <TabsContent key={sign} value={sign} className="mt-8">
              <Card className="bg-card/60 backdrop-blur-sm border-accent/30 mystical-glow relative overflow-hidden">
                <div className="absolute top-3 left-3 text-accent/20 text-sm">✦</div>
                <div className="absolute top-3 right-3 text-accent/20 text-sm">✦</div>
                <div className="absolute bottom-3 left-3 text-accent/20 text-sm">✦</div>
                <div className="absolute bottom-3 right-3 text-accent/20 text-sm">✦</div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center gap-3">
                    <span className="text-4xl golden-shimmer">
                      {sign === "Aries" && "♈"}
                      {sign === "Taurus" && "♉"}
                      {sign === "Gemini" && "♊"}
                      {sign === "Cancer" && "♋"}
                      {sign === "Leo" && "♌"}
                      {sign === "Virgo" && "♍"}
                      {sign === "Libra" && "♎"}
                      {sign === "Scorpio" && "♏"}
                      {sign === "Sagittarius" && "♐"}
                      {sign === "Capricorn" && "♑"}
                      {sign === "Aquarius" && "♒"}
                      {sign === "Pisces" && "♓"}
                    </span>
                    {sign}
                  </CardTitle>
                  <CardDescription className="text-accent font-light tracking-wide">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-accent/50 to-transparent mb-4"></div>
                  <p className="text-lg leading-relaxed text-foreground/85 font-light">
                    {reading}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HoroscopeSection;
