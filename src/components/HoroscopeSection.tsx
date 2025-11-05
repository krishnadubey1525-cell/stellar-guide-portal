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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            Daily Horoscopes
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what the stars have in store for you today
          </p>
        </div>

        <Tabs defaultValue="Aries" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 bg-card/30 p-2 h-auto">
            {Object.keys(dailyHoroscope).map((sign) => (
              <TabsTrigger
                key={sign}
                value={sign}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {sign}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(dailyHoroscope).map(([sign, reading]) => (
            <TabsContent key={sign} value={sign} className="mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <span className="text-4xl star-shimmer">
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
                  <CardDescription className="text-accent">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-foreground/90">
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
