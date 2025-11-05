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
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 celestial-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl cosmic-text">
              Generate Your Birth Chart
            </CardTitle>
            <CardDescription className="text-base">
              Enter your birth details to unlock your complete astrological blueprint
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground">Birth Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground">Birth Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground">Birth Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  className="bg-background/50 border-border"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground celestial-glow"
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
