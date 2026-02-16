import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl golden-shimmer">✦</span>
            <span className="text-xl font-serif font-semibold cosmic-text tracking-wide">Devine Tarot</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-foreground/70 hover:text-accent transition-colors font-light tracking-wide">
              Home
            </Link>
            <Link to="/about" className="text-foreground/70 hover:text-accent transition-colors font-light tracking-wide">
              About
            </Link>
            <Link to="/services" className="text-foreground/70 hover:text-accent transition-colors font-light tracking-wide">
              Services
            </Link>
            <Link to="/testimonials" className="text-foreground/70 hover:text-accent transition-colors font-light tracking-wide">
              Testimonials
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button 
                variant="outline" 
                className="border-accent/50 text-accent hover:bg-accent/10 rounded-sm font-light tracking-wide"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
