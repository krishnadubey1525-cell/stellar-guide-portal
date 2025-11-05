import { Card } from "@/components/ui/card";

const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" },
];

const ZodiacGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {zodiacSigns.map((sign) => (
        <Card
          key={sign.name}
          className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:celestial-glow p-6 text-center"
        >
          <div className="text-5xl md:text-6xl mb-3 star-shimmer group-hover:scale-110 transition-transform">
            {sign.symbol}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{sign.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{sign.dates}</p>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
            {sign.element}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default ZodiacGrid;
