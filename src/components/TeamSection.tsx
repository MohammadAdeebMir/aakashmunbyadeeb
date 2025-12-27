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
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet <span className="text-gradient-gold">The Team</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The Secretariat — Leading the charge for diplomacy
          </p>
        </div>

        {/* Secretariat Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {secretariat.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden card-shadow hover:border-secondary/50 transition-all duration-500"
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
              <div className="p-6 -mt-16 relative z-10">
                {/* Name & Role */}
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>
                {member.secondaryRole && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-secondary/50" />
                    <span className="text-muted-foreground text-sm uppercase tracking-wider">
                      {member.secondaryRole}
                    </span>
                  </div>
                )}

                {/* Quote */}
                <p className="text-foreground/80 text-sm italic mb-4 border-l-2 border-secondary/50 pl-3">
                  "{member.quote}"
                </p>

                {/* Nicknames */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Other Titles:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.nicknames.map((nickname) => (
                      <span
                        key={nickname}
                        className="inline-flex items-center gap-1 text-xs bg-muted/50 text-foreground/80 px-2 py-1 rounded-full"
                      >
                        <Star className="w-3 h-3 text-secondary" />
                        {nickname}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notable Quote */}
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Notable Quote:
                  </p>
                  <p className="text-sm text-foreground/80 italic flex items-start gap-2">
                    <Quote className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {member.notableQuote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Organizing <span className="text-gradient-gold">Committee</span>
          </h3>
          <p className="text-muted-foreground">
            The backbone of Aakash MUN 2026
          </p>
        </div>

        {/* Committee Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group relative rounded-2xl overflow-hidden border border-border/50 card-shadow">
            <img
              src={committee1}
              alt="Organizing Committee"
              className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="space-y-2">
                {organizingCommittee1.map((member) => (
                  <p key={member.name} className="text-foreground font-medium text-lg">
                    {member.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden border border-border/50 card-shadow">
            <img
              src={committee2}
              alt="Organizing Committee"
              className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="space-y-2">
                {organizingCommittee2.map((member) => (
                  <p key={member.name} className="text-foreground font-medium text-lg">
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
