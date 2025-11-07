import React from "react";
import SponsorTierBadge from "./SponsorTierBadge";
import SponsorCard from "./SponsorCard";

interface GoldTierProps {
  sponsors: Array<{
    logoSrc: string;
    logoAlt: string;
  }>;
}

const GoldTier: React.FC<GoldTierProps> = ({ sponsors }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <SponsorTierBadge tier="gold" label="Gold Sponsors" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.logoSrc}
            logoSrc={sponsor.logoSrc}
            logoAlt={sponsor.logoAlt}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
};

export default GoldTier;
