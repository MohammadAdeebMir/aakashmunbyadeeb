import { BookOpen, Users, Globe, Award, Mic, Target } from "lucide-react";
import infoImage from "@/assets/info-what-is-mun.jpg";

const AboutSection = () => {
  const whatIsMun = [
    "Model United Nations (MUN) is an educational simulation of the United Nations",
    "Students act as delegates of different countries and discuss real-world global issues",
    "Participants represent a country or organization, debate international problems, propose solutions, and work together to pass resolutions"
  ];

  const howItWorks = [
    "Each participant is assigned a country/portfolio",
    "Delegates research their country's foreign policy",
    "Committees debate on a specific agenda",
    "Delegates deliver speeches, negotiate, and draft resolutions",
    "Solutions are voted upon just like in the real UN"
  ];

  const committees = [
    "United Nations General Assembly (UNGA)",
    "United Nations Human Rights Council (UNHRC)",
    "World Health Organization (WHO)",
    "International Court of Justice (ICJ)",
    "Indian Committees (Lok Sabha)",
    "UNESCO",
    "United Nations Security Council (UNSC)"
  ];

  const benefits = [
    { icon: Mic, text: "Builds confidence & public speaking" },
    { icon: BookOpen, text: "Improves critical thinking & research skills" },
    { icon: Users, text: "Enhances leadership & teamwork" },
    { icon: Globe, text: "Develops diplomacy & negotiation skills" },
    { icon: Award, text: "Boosts CVs & college applications" },
    { icon: Target, text: "Personality growth & global awareness" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            What is <span className="text-gradient-gold">A.M.U.N</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Aakash Model United Nations 2026 — Where future diplomats are born
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 mb-10 sm:mb-16 md:mb-20">
          {/* What is MUN */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary" />
                What is Model United Nations?
              </h3>
              <ul className="space-y-2 sm:space-y-4">
                {whatIsMun.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary mt-1.5 sm:mt-2 shrink-0" />
                    <span className="text-foreground/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-6">
                Why Participate in M.U.N?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-foreground/80">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" />
                    <span className="text-xs sm:text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it Works & Committees */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary" />
                How Does M.U.N Work?
              </h3>
              <ol className="space-y-2 sm:space-y-3">
                {howItWorks.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/20 text-secondary text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary" />
                Committees You Can Be Part Of
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {committees.map((committee, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground/80 text-sm sm:text-base">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary" />
                    {committee}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Who Can Participate */}
        <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border border-secondary/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            Who Can Participate?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-3 sm:mb-6">
            School & Coaching Students — <span className="text-secondary font-semibold">Beginners are always welcome!</span>
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            No prior experience required. All you need is <span className="text-foreground font-medium">interest and enthusiasm</span>.
          </p>
          <div className="mt-4 sm:mt-6 inline-block bg-card/80 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 border border-border/50">
            <p className="text-secondary font-medium text-xs sm:text-sm md:text-base">
              MUNs provide: Training sessions • Background guides • Executive Board guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
