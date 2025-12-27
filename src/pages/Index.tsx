import { useState } from "react";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import aakashLogo from "@/assets/aakash-mun-logo.jpg";

const Index = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!isRevealed) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 text-center max-w-2xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={aakashLogo} 
              alt="Aakash MUN Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-secondary shadow-2xl"
            />
          </div>

          {/* Motivating Text */}
          <div className="space-y-4 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Are You Ready to
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-accent animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Shape the Future?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              Step into the world of diplomacy, debate, and global leadership.
            </p>
            <p className="text-muted-foreground/80 text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.9s" }}>
              Your voice matters. Your ideas can change the world.
            </p>
          </div>

          {/* Reveal Button */}
          <button
            onClick={() => setIsRevealed(true)}
            className="group relative px-12 py-5 bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              Reveal Aakash MUN 2026
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          </button>

          {/* Subtle hint */}
          <p className="text-muted-foreground/50 text-sm mt-8 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            Click to begin your journey
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
