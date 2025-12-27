import { ChevronDown, Sparkles, Instagram, Send } from "lucide-react";
import comingSoonImage from "@/assets/coming-soon.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={comingSoonImage}
          alt="Aakash MUN 2026"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-secondary/50 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-sm">
              Finally The Wait Is Over
            </span>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            AAKASH <span className="text-gradient-gold">MUN</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            "Debate. Diplomacy. Change."
          </p>

          {/* Full Form */}
          <p className="text-lg md:text-xl text-foreground/80 tracking-wide mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Aakash Model United Nations 2026
          </p>

          {/* Tagline */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-4 inline-block mb-10 animate-fade-in glow-gold" style={{ animationDelay: "1s" }}>
            <p className="text-foreground font-medium">
              <span className="text-secondary font-bold">Igniting Diplomacy</span> — Your Voice Shapes Tomorrow
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center mb-8 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a
              href="#about"
              className="px-10 py-4 bg-secondary text-secondary-foreground font-bold rounded-full text-lg hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More
            </a>
          </div>

          {/* Social Media Section */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              For Further Updates Stay Connected on Social Media With the Links Below
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/aakashmunkashmir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                @aakashmunkashmir
              </a>
              <a
                href="https://t.me/aakashmun2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "1.4s" }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-secondary">7+</p>
              <p className="text-muted-foreground text-sm">Committees</p>
            </div>
            <div className="text-center border-x border-border/30">
              <p className="font-display text-3xl md:text-4xl font-bold text-secondary">200+</p>
              <p className="text-muted-foreground text-sm">Delegates</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-secondary">2026</p>
              <p className="text-muted-foreground text-sm">Kashmir</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-secondary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
