import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    review: "The tarot reading was incredibly insightful and helped me navigate a difficult career decision. The reader's intuition and guidance were spot-on.",
    rating: 5,
    date: "March 2025",
  },
  {
    name: "James Peterson",
    review: "I was skeptical at first, but the accuracy of the Kundali reading amazed me. It revealed aspects of my personality I hadn't even considered.",
    rating: 5,
    date: "February 2025",
  },
  {
    name: "Maya Sharma",
    review: "The love and relationship reading provided clarity during a confusing time. I highly recommend booking a session!",
    rating: 5,
    date: "January 2025",
  },
  {
    name: "Robert Chen",
    review: "A transformative experience. The spiritual guidance reading opened my eyes to new perspectives and helped me find peace.",
    rating: 5,
    date: "December 2024",
  },
  {
    name: "Emily Rodriguez",
    review: "Professional, compassionate, and incredibly accurate. The career reading gave me the confidence to pursue my dreams.",
    rating: 5,
    date: "November 2024",
  },
  {
    name: "David Thompson",
    review: "The past life reading was fascinating and provided answers to questions I've had for years. Truly enlightening!",
    rating: 5,
    date: "October 2024",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-accent text-3xl mb-4">✦</div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced the transformative power of our readings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join hundreds of satisfied clients who have found clarity and guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
