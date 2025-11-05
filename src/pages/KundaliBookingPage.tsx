import Navbar from "@/components/Navbar";
import KundaliBooking from "@/components/KundaliBooking";

const KundaliBookingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <KundaliBooking />
        
        <footer className="py-8 px-4 border-t border-border/50 mt-16">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Celestial Insights. Your journey through the stars begins here.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default KundaliBookingPage;
