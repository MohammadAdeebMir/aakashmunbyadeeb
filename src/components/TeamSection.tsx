import { Star, Quote } from "lucide-react";
import teamTehniyet from "@/assets/team-tehniyet.jpg";
import teamMohammad from "@/assets/team-mohammad.jpg";
import teamFariyah from "@/assets/team-fariyah.jpg";
import teamSheeza from "@/assets/team-sheeza.jpg";
import committee1 from "@/assets/committee-1.jpg";
import committee2 from "@/assets/committee-2.jpg";

interface TeamMember {
  name: string;
  role: string;
  secondaryRole?: string;
  quote: string;
  nicknames: string[];
  notableQuote: string;
  image: string;
}

const secretariat: TeamMember[] = [
  {
    name: "Tehniyet Makhdoomi",
    role: "Secretary General",
    secondaryRole: "Head of Socials",
    quote: "Diplomacy and Leadership so Sharp, it Cuts Through the Algorithm",
    nicknames: ["Angry bird", "Senior citizen"],
    notableQuote: "Ek minute bhi late nahi karega koi, warna merese bura koyi nahi hoga.",
    image: teamTehniyet,
  },
  {
    name: "Mohammad Bin Asiaf",
    role: "Director General",
    quote: "Acceptance is the first step.",
    nicknames: ["Mr. Uncool", "B.R Ambedker"],
    notableQuote: "Sorry I can't attend the meeting.",
    image: teamMohammad,
  },
  {
    name: "Fariyah Ashfaq",
    role: "Deputy Secretary General",
    quote: "Guiding Diplomacy with purpose and precision.",
    nicknames: ["Free bird"],
    notableQuote: "Mujhe pata hi nahi hota ki kya chal raha hai.",
    image: teamFariyah,
  },
  {
    name: "Sheeza Tariq",
    role: "Deputy Head Socials",
    quote: "Where Diplomacy meets design and engagement begins.",
    nicknames: ["Immachwa don"],
    notableQuote: "Mujhe bolo, mujhe kya karna hai?",
    image: teamSheeza,
  },
];

interface CommitteeMember {
  name: string;
}

const organizingCommittee1: CommitteeMember[] = [
  { name: "Faiq Sajad Shah" },
  { name: "Syed Ayila" },
  { name: "Sheezan Altaf" },
];

const organizingCommittee2: CommitteeMember[] = [
  { name: "Asrah Manzoor" },
  { name: "Shah Hashmi" },
  { name: "Mohammad Saad" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Meet <span className="text-gradient-gold">The Team</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
            The Secretariat — Leading the charge for diplomacy
          </p>
        </div>

        {/* Secretariat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          {secretariat.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden card-shadow hover:border-secondary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6 -mt-10 sm:-mt-12 md:-mt-16 relative z-10">
                {/* Name & Role */}
                <h3 className="font-display text-sm sm:text-base md:text-xl font-bold text-foreground mb-0.5 sm:mb-1 line-clamp-1">
                  {member.name}
                </h3>
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary" />
                  <span className="text-secondary font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-wider line-clamp-1">
                    {member.role}
                  </span>
                </div>
                {member.secondaryRole && (
                  <div className="hidden sm:flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-secondary/50" />
                    <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider">
                      {member.secondaryRole}
                    </span>
                  </div>
                )}

                {/* Quote - Hidden on mobile */}
                <p className="hidden sm:block text-foreground/80 text-xs md:text-sm italic mb-2 md:mb-4 border-l-2 border-secondary/50 pl-2 md:pl-3 line-clamp-2">
                  "{member.quote}"
                </p>

                {/* Nicknames - Hidden on mobile */}
                <div className="hidden sm:block mb-2 md:mb-4">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-1 md:mb-2">
                    Other Titles:
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {member.nicknames.map((nickname) => (
                      <span
                        key={nickname}
                        className="inline-flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs bg-muted/50 text-foreground/80 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                      >
                        <Star className="w-2 h-2 md:w-3 md:h-3 text-secondary" />
                        {nickname}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notable Quote - Hidden on small mobile */}
                <div className="hidden sm:block bg-muted/30 rounded-lg p-2 md:p-3">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Notable Quote:
                  </p>
                  <p className="text-xs md:text-sm text-foreground/80 italic flex items-start gap-1 md:gap-2 line-clamp-2">
                    <Quote className="w-3 h-3 md:w-4 md:h-4 text-secondary shrink-0 mt-0.5" />
                    {member.notableQuote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Organizing <span className="text-gradient-gold">Committee</span>
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            The backbone of Aakash MUN 2026
          </p>
        </div>

        {/* Committee Images */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 card-shadow">
            <img
              src={committee1}
              alt="Organizing Committee"
              className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6">
              <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                {organizingCommittee1.map((member) => (
                  <p key={member.name} className="text-foreground font-medium text-xs sm:text-sm md:text-lg">
                    {member.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 card-shadow">
            <img
              src={committee2}
              alt="Organizing Committee"
              className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6">
              <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                {organizingCommittee2.map((member) => (
                  <p key={member.name} className="text-foreground font-medium text-xs sm:text-sm md:text-lg">
                    {member.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
