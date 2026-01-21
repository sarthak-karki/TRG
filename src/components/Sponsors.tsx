import React from "react";
import { Star, Award, Medal } from "lucide-react";

import mainSponsor from "@app/assets/sponsors/arcHomeLoans.png";
import gold1 from "@app/assets/sponsors/Rey Co Grp.png";
import gold2 from "@app/assets/sponsors/arcAccountingSol.png";
import gold3 from "@app/assets/sponsors/PacificVisa-Logo-Final.png";
import silver1 from "@app/assets/sponsors/GoEasy png file .png";
import LazyLoad from "@app/core/LazyLoad";

interface Sponsor {
  logoSrc: string;
  logoAlt: string;
  name: string;
  url: string;
}

const mainSponsors: Sponsor[] = [
  {
    logoSrc: mainSponsor,
    logoAlt: "ARC Home Loans",
    name: "ARC Home Loans",
    url: "https://arkhomeloans.com.au",
  },
];

const goldSponsors: Sponsor[] = [
  {
    logoSrc: gold1,
    logoAlt: "Rey Co Group",
    name: "Rey Co Group",
    url: "https://www.reyproperties.com.au",
  },
  {
    logoSrc: gold2,
    logoAlt: "ARC Accounting Solutions",
    name: "ARC Accounting Solutions",
    url: "https://arkaccsol.com.au",
  },
  {
    logoSrc: gold3,
    logoAlt: "Pacific Visa",
    name: "Pacific Visa",
    url: "https://pacificvisa.com.au",
  },
];

const silverSponsors: Sponsor[] = [
  {
    logoSrc: silver1,
    logoAlt: "Go Easy Driving School",
    name: "Go Easy Driving School",
    url: "https://www.facebook.com/p/Go-Easy-driving-school-61570745462095",
  },
];

const SponsorTier: React.FC<{
  title: string;
  icon: React.ReactNode;
  sponsors: Sponsor[];
  tierColor: string;
  tierBg: string;
  logoSize: string;
  cardSize: string;
}> = ({ title, icon, sponsors, tierColor, tierBg, logoSize, cardSize }) => (
  <div className="mb-12 last:mb-0">
    {/* Tier Header */}
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className={`h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent ${tierColor}`} />
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${tierBg} border border-current/20`}>
        {icon}
        <span className={`text-sm font-bold uppercase tracking-wider ${tierColor}`}>{title}</span>
      </div>
      <div className={`h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent ${tierColor}`} />
    </div>

    {/* Sponsors Grid */}
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.logoAlt}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative ${cardSize} bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2`}
        >
          {/* Card Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50" />

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${tierBg}`} />

          {/* Border Gradient */}
          <div className={`absolute inset-0 rounded-2xl ring-2 ring-gray-100 group-hover:ring-4 transition-all duration-300 ${
            title === "PRINCIPAL" ? "group-hover:ring-[#f5a623]/50" :
            title === "GOLD" ? "group-hover:ring-yellow-400/50" :
            "group-hover:ring-gray-400/50"
          }`} />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            <div className={`${logoSize} flex items-center justify-center`}>
              <LazyLoad
                src={sponsor.logoSrc}
                alt={sponsor.logoAlt}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Sponsor name on hover */}
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs font-medium text-center truncate">{sponsor.name}</p>
            </div>
          </div>

          {/* Premium Corner Badge for Principal Sponsor */}
          {title === "PRINCIPAL" && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-[#f5a623] to-[#ffd93d] p-2 rounded-full animate-pulse-glow">
                <Star className="w-4 h-4 text-[#0a1929]" fill="currentColor" />
              </div>
            </div>
          )}
        </a>
      ))}
    </div>
  </div>
);

const Sponsors: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1929] via-[#0f3460] to-[#0a1929] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%)`,
          backgroundSize: "20px 20px",
        }} />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f3460]/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
            Partners
          </span>
          <h2 className="text-headline text-white mb-4">
            OUR <span className="gradient-text-gold">SPONSORS</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We are grateful to our valued partners who support our journey and share our vision
          </p>
        </div>

        {/* Principal Sponsor */}
        <SponsorTier
          title="PRINCIPAL"
          icon={<Star className="w-5 h-5 text-[#f5a623]" fill="currentColor" />}
          sponsors={mainSponsors}
          tierColor="text-[#f5a623]"
          tierBg="bg-[#f5a623]/5"
          logoSize="h-32 w-64"
          cardSize="w-80 h-44"
        />

        {/* Gold Sponsors */}
        <SponsorTier
          title="GOLD"
          icon={<Award className="w-5 h-5 text-yellow-400" />}
          sponsors={goldSponsors}
          tierColor="text-yellow-400"
          tierBg="bg-yellow-400/5"
          logoSize="h-24 w-48"
          cardSize="w-64 h-36"
        />

        {/* Silver Sponsors */}
        <SponsorTier
          title="SILVER"
          icon={<Medal className="w-5 h-5 text-gray-300" />}
          sponsors={silverSponsors}
          tierColor="text-gray-300"
          tierBg="bg-gray-300/5"
          logoSize="h-20 w-40"
          cardSize="w-56 h-32"
        />

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold mb-2">Become a Partner</h3>
            <p className="text-white/60 text-sm mb-4 max-w-md">
              Join our family of sponsors and help us continue to grow the beautiful game
            </p>
            <a
              href="mailto:trgfc2012@gmail.com?subject=Sponsorship%20Inquiry"
              className="btn-premium btn-outline-gold px-8 py-3 rounded-full text-sm hover:text-[#0a1929]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
