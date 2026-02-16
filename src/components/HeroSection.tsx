import { Button } from "@/components/ui/button";
import cosmosVideo from "@/assets/cosmos.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={cosmosVideo} type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0" />

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-accent/20 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-accent/20 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 text-accent/10 text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        ✧
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-accent/10 text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        ✧
      </motion.div>
      
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-light">Welcome to</span>
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 cosmic-text leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Devine Tarot
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Unlock the ancient wisdom of the cards. Discover guidance, clarity, and profound insights through professional tarot readings.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/kundali-booking">
            <Button
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground mystical-glow text-lg px-10 py-6 rounded-sm font-light tracking-wide transition-all duration-300"
            >
              Book Your Reading
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
