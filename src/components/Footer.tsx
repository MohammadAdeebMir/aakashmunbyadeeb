import { Instagram, Send, Mail, MapPin, Calendar } from "lucide-react";
import logoImage from "@/assets/aakash-mun-logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-background to-card" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Registration Section */}
        <div id="register" className="text-center mb-16 pb-16 border-b border-border/30">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Registration <span className="text-gradient-gold">Coming Soon</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to know when registrations open. Follow us on social media for updates!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/aakashmunkashmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:opacity-90 transition-all"
            >
              <Instagram className="w-5 h-5" />
              @aakashmunkashmir
            </a>
            <a
              href="https://t.me/aakashmun2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0088cc] text-white font-bold rounded-full hover:opacity-90 transition-all"
            >
              <Send className="w-5 h-5" />
              AAKASH MUN 2026
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/50">
                <img
                  src={logoImage}
                  alt="Aakash MUN Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Aakash <span className="text-secondary">MUN</span>
                </h3>
                <p className="text-muted-foreground text-sm">Kashmir 2026</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Igniting Diplomacy — Where future world leaders begin their journey.
            </p>
            <p className="font-serif text-xl italic text-secondary">
              "Debate. Diplomacy. Change."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-lg font-bold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Team", "Features", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-bold text-foreground mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:aakashmunkashmir@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors justify-center md:justify-end"
              >
                <Mail className="w-5 h-5 text-secondary" />
                aakashmunkashmir@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground justify-center md:justify-end">
                <MapPin className="w-5 h-5 text-secondary" />
                Kashmir, India
              </div>
              <div className="flex items-center gap-3 text-muted-foreground justify-center md:justify-end">
                <Calendar className="w-5 h-5 text-secondary" />
                2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm">
            © 2026 Aakash Model United Nations. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Looking Forward To Have You On Board.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
