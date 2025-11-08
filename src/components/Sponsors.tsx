import React from "react";

import mainSponsor from "@app/assets/sponsors/arcHomeLoans.png";
import gold1 from "@app/assets/sponsors/Rey Co Grp.png";
import gold2 from "@app/assets/sponsors/arcAccountingSol.png";
import gold3 from "@app/assets/sponsors/PacificVisa-Logo-Final.png";
import silver1 from "@app/assets/sponsors/GoEasy png file .png";
import { Card, CardContent } from "@app/components/ui/card";

const Sponsors: React.FC = () => {
  const allSponsors = [
    { logoSrc: mainSponsor, logoAlt: "Sponsor 1" },
    { logoSrc: gold1, logoAlt: "Sponsor 2" },
    { logoSrc: gold2, logoAlt: "Sponsor 3" },
    { logoSrc: gold3, logoAlt: "Sponsor 4" },
    { logoSrc: silver1, logoAlt: "Sponsor 5" },
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

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {allSponsors.map((sponsor) => (
            <Card
              key={sponsor.logoSrc}
              className="bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-48 md:w-56"
            >
              <CardContent className="p-6 flex items-center justify-center h-32">
                <img
                  src={sponsor.logoSrc}
                  alt={sponsor.logoAlt}
                  className="max-h-20 max-w-[90%] w-auto object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
