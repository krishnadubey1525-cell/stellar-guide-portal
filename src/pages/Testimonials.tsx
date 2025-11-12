import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingParticles from "@/components/FloatingParticles";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <Navbar />
      <main className="pt-20">
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Testimonials;
