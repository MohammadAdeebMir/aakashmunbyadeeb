import { Instagram, Send, Mail, MapPin, Calendar } from "lucide-react";
import logoImage from "@/assets/aakash-mun-logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-10 sm:py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-background to-card" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Registration Section */}
        <div id="register" className="text-center mb-10 sm:mb-12 md:mb-16 pb-10 sm:pb-12 md:pb-16 border-b border-border/30">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Registration <span className="text-gradient-gold">Coming Soon</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Be among the first to know when registrations open. Follow us on social media for updates!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://instagram.com/aakashmunkashmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm sm:text-base rounded-full hover:opacity-90 transition-all"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              @aakashmunkashmir
            </a>
            <a
              href="https://t.me/aakashmun2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#0088cc] text-white font-bold text-sm sm:text-base rounded-full hover:opacity-90 transition-all"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              AAKASH MUN 2026
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center sm:justify-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-secondary/50">
                <img
                  src={logoImage}
                  alt="Aakash MUN Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                  Aakash <span className="text-secondary">MUN</span>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Kashmir 2026</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
              Igniting Diplomacy — Where future world leaders begin their journey.
            </p>
            <p className="font-serif text-base sm:text-lg md:text-xl italic text-secondary">
              "Debate. Diplomacy. Change."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About", "Team", "Features", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-6">
              Get In Touch
            </h4>
            <div className="space-y-2 sm:space-y-4">
              <a
                href="mailto:aakashmunkashmir@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-secondary transition-colors justify-center md:justify-end text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="break-all">aakashmunkashmir@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground justify-center md:justify-end text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                Kashmir, India
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground justify-center md:justify-end text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-6 sm:pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 Aakash Model United Nations. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-1 sm:mt-2">
            Looking Forward To Have You On Board.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
