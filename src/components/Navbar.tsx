import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl star-shimmer">✨</span>
            <span className="text-xl font-bold cosmic-text">Celestial Insights</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/horoscopes" className="text-foreground/80 hover:text-accent transition-colors">
              Horoscopes
            </Link>
            <Link to="/birth-chart" className="text-foreground/80 hover:text-accent transition-colors">
              Birth Chart
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
