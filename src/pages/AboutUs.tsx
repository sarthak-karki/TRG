import Header from "@app/components/header";
import { FC } from "react";
import Footer from "@app/components/footer";
import {
  Trophy,
  Heart,
  Zap,
  Users,
  Calendar,
  MapPin,
  Target,
  Award,
} from "lucide-react";

interface Achievement {
  tournament: string;
  medals: { gold: number; silver: number; bronze: number };
}

const achievements: Achievement[] = [
  { tournament: "Rewati Cup", medals: { gold: 4, silver: 1, bronze: 0 } },
  { tournament: "R&S Cup", medals: { gold: 3, silver: 0, bronze: 0 } },
  { tournament: "NAWS Cup", medals: { gold: 2, silver: 1, bronze: 0 } },
  { tournament: "Buddha Cup", medals: { gold: 1, silver: 1, bronze: 0 } },
  { tournament: "Fewa Cup", medals: { gold: 2, silver: 0, bronze: 0 } },
  { tournament: "MIT Cup", medals: { gold: 0, silver: 1, bronze: 1 } },
  { tournament: "MFC Cup", medals: { gold: 1, silver: 0, bronze: 1 } },
  { tournament: "Thakali Cup", medals: { gold: 1, silver: 0, bronze: 0 } },
  { tournament: "TRCC Cup", medals: { gold: 2, silver: 1, bronze: 0 } },
  { tournament: "Canberra Cup", medals: { gold: 1, silver: 0, bronze: 0 } },
  { tournament: "GNC Shield", medals: { gold: 0, silver: 3, bronze: 1 } },
  { tournament: "Sahara Cup", medals: { gold: 1, silver: 1, bronze: 0 } },
];

const values = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Pride",
    description:
      "We take immense pride in our heritage and represent our community with honor on every pitch.",
    color: "from-[#f5a623] to-[#ffd93d]",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description:
      "Our love for the beautiful game fuels every training session and every match we play.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance",
    description:
      "We strive for excellence and push our limits to achieve greatness together as one team.",
    color: "from-blue-500 to-cyan-500",
  },
];

const stats = [
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "20+",
    label: "Championships",
  },
  { icon: <Users className="w-6 h-6" />, value: "28+", label: "Squad Players" },
  {
    icon: <Calendar className="w-6 h-6" />,
    value: "12+",
    label: "Years Active",
  },
  { icon: <MapPin className="w-6 h-6" />, value: "Sydney", label: "Home Base" },
];

const AboutUs: FC = () => {
  const totalGold = achievements.reduce((sum, a) => sum + a.medals.gold, 0);
  const totalSilver = achievements.reduce((sum, a) => sum + a.medals.silver, 0);
  const totalBronze = achievements.reduce((sum, a) => sum + a.medals.bronze, 0);

  return (
    <div className="bg-[#0a1929] min-h-screen font-sans w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#0f3460] to-[#0a1929]" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
            Est. 2012
          </span>
          <h1 className="text-display text-white mb-6">
            ABOUT <span className="gradient-text-gold">US</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover the story, spirit, and success of The Rising Gurkhas FC
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/50 rounded-full blur-3xl" />
      </section>

      {/* Stats Bar */}
      <section className="relative py-8 bg-gradient-to-r from-[#f5a623] via-[#ffd93d] to-[#f5a623]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 text-[#0a1929]">
                  {stat.icon}
                  <span className="text-3xl md:text-4xl font-bold">
                    {stat.value}
                  </span>
                </div>
                <p className="text-[#0a1929]/70 text-sm font-semibold uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-1 mb-4 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
                Our Story
              </span>
              <h2 className="text-headline text-white mb-6">
                THE RISING{" "}
                <span className="gradient-text-gold">GURKHAS FC</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Founded in 2012, The Rising Gurkhas FC has emerged as a
                  formidable force in local football, embodying the legendary
                  spirit, courage, and determination of the Gurkha warriors.
                </p>
                <p>
                  Our club represents more than just football - we are a
                  community united by passion, heritage, and an unwavering
                  commitment to excellence. From our humble beginnings to
                  becoming championship contenders, we have consistently
                  demonstrated the values that define us.
                </p>
                <p>
                  Every match we play, we honor the legacy of resilience and
                  strength that the Gurkha name carries. Based in Sydney,
                  Australia, we continue to grow and inspire the next generation
                  of players.
                </p>
              </div>
            </div>

            {/* Right - Values Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${value.color} text-white`}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#f5a623] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#0f3460]/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
              Trophy Cabinet
            </span>
            <h2 className="text-headline text-white mb-4">
              OUR <span className="gradient-text-gold">ACHIEVEMENTS</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A legacy of success built through dedication, teamwork, and the
              Gurkha fighting spirit
            </p>
          </div>

          {/* Total Medal Count */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#f5a623] to-[#ffd93d] shadow-lg shadow-[#f5a623]/30">
                <span className="text-3xl font-bold text-[#0a1929]">
                  {totalGold}
                </span>
              </div>
              <p className="text-[#f5a623] font-semibold uppercase tracking-wider text-sm">
                Gold
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg shadow-gray-400/30">
                <span className="text-3xl font-bold text-[#0a1929]">
                  {totalSilver}
                </span>
              </div>
              <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
                Silver
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#cd7f32] to-[#daa06d] shadow-lg shadow-[#cd7f32]/30">
                <span className="text-3xl font-bold text-[#0a1929]">
                  {totalBronze}
                </span>
              </div>
              <p className="text-[#cd7f32] font-semibold uppercase tracking-wider text-sm">
                Bronze
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#f5a623]/10">
                      <Award className="w-5 h-5 text-[#f5a623]" />
                    </div>
                    <h3 className="text-white font-bold group-hover:text-[#f5a623] transition-colors">
                      {achievement.tournament}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {achievement.medals.gold > 0 && (
                      <span className="badge-gold text-xs px-2 py-1">
                        {achievement.medals.gold}
                      </span>
                    )}
                    {achievement.medals.silver > 0 && (
                      <span className="badge-silver text-xs px-2 py-1">
                        {achievement.medals.silver}
                      </span>
                    )}
                    {achievement.medals.bronze > 0 && (
                      <span className="badge-bronze text-xs px-2 py-1">
                        {achievement.medals.bronze}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#0f3460] to-[#0a1929] border border-[#f5a623]/20 shadow-2xl">
            <Target className="w-12 h-12 text-[#f5a623] mx-auto mb-6" />
            <h2 className="text-headline text-white mb-4">
              JOIN THE <span className="gradient-text-gold">GURKHA FAMILY</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Whether you're a player looking to join our squad, a fan wanting
              to support the team, or a potential sponsor - we'd love to hear
              from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:trgfc2012@gmail.com"
                className="btn-premium btn-gold px-8 py-4 rounded-full text-base"
              >
                Get In Touch
              </a>
              <a
                href="https://www.facebook.com/RisingGurkhas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-outline-gold px-8 py-4 rounded-full text-base hover:text-[#0a1929]"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
