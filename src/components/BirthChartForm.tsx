import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const BirthChartForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Birth chart request received! We'll generate your personalized chart soon.");
    setFormData({ date: "", time: "", location: "" });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card/60 backdrop-blur-sm border-accent/30 mystical-glow relative overflow-hidden">
          <div className="absolute top-4 left-4 text-accent/20 text-lg">✦</div>
          <div className="absolute top-4 right-4 text-accent/20 text-lg">✦</div>
          <div className="absolute bottom-4 left-4 text-accent/20 text-lg">✦</div>
          <div className="absolute bottom-4 right-4 text-accent/20 text-lg">✦</div>
          <CardHeader className="text-center">
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Natal Reading</span>
            <CardTitle className="text-3xl md:text-4xl font-serif cosmic-text mt-3">
              Your Birth Chart
            </CardTitle>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-4"></div>
            <CardDescription className="text-base font-light">
              Enter your birth details to reveal your complete celestial blueprint
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground font-light tracking-wide">Birth Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="bg-background/60 border-accent/30 rounded-sm font-light"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground font-light tracking-wide">Birth Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="bg-background/60 border-accent/30 rounded-sm font-light"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground font-light tracking-wide">Birth Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  className="bg-background/60 border-accent/30 rounded-sm font-light"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground mystical-glow rounded-sm font-light tracking-wide transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Generate Birth Chart
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BirthChartForm;
