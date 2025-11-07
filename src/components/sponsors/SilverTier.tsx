import React from "react";
import SponsorTierBadge from "./SponsorTierBadge";
import SponsorCard from "./SponsorCard";

interface SilverTierProps {
  sponsors: Array<{
    logoSrc: string;
    logoAlt: string;
  }>;
}

const SilverTier: React.FC<SilverTierProps> = ({ sponsors }) => {
  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <SponsorTierBadge tier="silver" label="Silver Sponsors" />
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.logoSrc}
            logoSrc={sponsor.logoSrc}
            logoAlt={sponsor.logoAlt}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default SilverTier;
