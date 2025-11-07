import React from "react";

import mainSponsor from "@app/assets/sponsors/arcHomeLoans.png";
import gold1 from "@app/assets/sponsors/Rey Co Grp.png";
import gold2 from "@app/assets/sponsors/arcAccountingSol.png";
import gold3 from "@app/assets/sponsors/PacificVisa-Logo-Final.png";
import silver1 from "@app/assets/sponsors/GoEasy png file .png";

import PremiumTier from "./sponsors/PremiumTier";
import GoldTier from "./sponsors/GoldTier";
import SilverTier from "./sponsors/SilverTier";

const Sponsors: React.FC = () => {
  const goldSponsors = [
    { logoSrc: gold1, logoAlt: "Gold Sponsor 1" },
    { logoSrc: gold2, logoAlt: "Gold Sponsor 2" },
    { logoSrc: gold3, logoAlt: "Gold Sponsor 3" },
  ];

  const silverSponsors = [
    { logoSrc: silver1, logoAlt: "Silver Sponsor" },
  ];

  return (
    <section className="bg-blue-900 py-12 px-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-4 uppercase tracking-wide">
          OUR SPONSORS
        </h2>
        <p className="text-blue-200 text-center mb-8 text-sm md:text-base">
          Thank you to our valued partners for their support
        </p>

        <PremiumTier logoSrc={mainSponsor} logoAlt="Main Sponsor" />
        <GoldTier sponsors={goldSponsors} />
        <SilverTier sponsors={silverSponsors} />
      </div>
    </section>
  );
};

export default Sponsors;
