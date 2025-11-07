import React from "react";
import SponsorTierBadge from "./SponsorTierBadge";
import SponsorCard from "./SponsorCard";

interface PremiumTierProps {
  logoSrc: string;
  logoAlt: string;
}

const PremiumTier: React.FC<PremiumTierProps> = ({ logoSrc, logoAlt }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-10">
          <SponsorTierBadge tier="premium" label="Premium Partner" />
        </div>
        <div className="border-2 border-indigo-200/60 ring-4 ring-indigo-50 rounded-lg">
          <SponsorCard logoSrc={logoSrc} logoAlt={logoAlt} size="large" />
        </div>
      </div>
    </div>
  );
};

export default PremiumTier;
