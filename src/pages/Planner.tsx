import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Planner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Cosmic Planning</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 cosmic-text mt-4">
                Your Tarot Planner
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
                Plan your readings and track your spiritual journey through the stars.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card/60 backdrop-blur-sm border-accent/20">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-accent">Calendar</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-sm border-accent/20"
                />
              </Card>

              <Card className="p-8 bg-card/60 backdrop-blur-sm border-accent/20">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-accent">Upcoming Readings</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-sm bg-background/40 border border-accent/10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-semibold text-foreground">Daily Reading</h3>
                      <span className="text-xs text-muted-foreground">Today</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">
                      Connect with your daily guidance
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-sm bg-background/40 border border-accent/10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-semibold text-foreground">Moon Phase Reading</h3>
                      <span className="text-xs text-muted-foreground">Full Moon</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">
                      Harness the lunar energy
                    </p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground mystical-glow">
                    Schedule New Reading
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Planner;
