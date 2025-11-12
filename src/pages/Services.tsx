import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FloatingParticles from "@/components/FloatingParticles";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <Navbar />
      <main className="pt-20">
        <ServicesSection />
      </main>
    </div>
  );
};

export default Services;
