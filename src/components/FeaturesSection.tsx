import { 
  GraduationCap, 
  Globe2, 
  Trophy, 
  Users2, 
  Lightbulb, 
  MessageSquare,
  Target,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Learn From Experts",
    description: "Training sessions and background guides provided by experienced MUN professionals"
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description: "Understand international relations and global issues from multiple viewpoints"
  },
  {
    icon: Trophy,
    title: "Win Awards",
    description: "Outstanding delegates receive recognition and awards for their diplomatic skills"
  },
  {
    icon: Users2,
    title: "Network & Connect",
    description: "Meet like-minded students passionate about diplomacy and global affairs"
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking",
    description: "Develop analytical skills and learn to approach problems from different angles"
  },
  {
    icon: MessageSquare,
    title: "Public Speaking",
    description: "Build confidence in articulating your views to an audience effectively"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              What You'll Gain
            </span>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What You Learn From <span className="text-gradient-gold">M.U.N</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skills that last a lifetime — from the conference room to the real world
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 card-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary via-card to-primary rounded-3xl p-12 border border-secondary/30 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--secondary)) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <Target className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Step Into the World of Diplomacy?
              </h3>
              <div className="bg-muted/30 rounded-xl px-6 py-3 inline-block mb-6">
                <p className="text-foreground/80">
                  <span className="text-secondary font-semibold">Think globally</span> • 
                  <span className="text-secondary font-semibold"> Speak responsibly</span> • 
                  <span className="text-secondary font-semibold"> Act diplomatically</span>
                </p>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Join A.M.U.N. Become a Global Leader.
              </p>
              <a
                href="#register"
                className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-bold rounded-full text-lg hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg animate-pulse-glow"
              >
                Register Your Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
