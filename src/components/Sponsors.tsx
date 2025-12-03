import React from "react";

import mainSponsor from "@app/assets/sponsors/arcHomeLoans.png";
import gold1 from "@app/assets/sponsors/Rey Co Grp.png";
import gold2 from "@app/assets/sponsors/arcAccountingSol.png";
import gold3 from "@app/assets/sponsors/PacificVisa-Logo-Final.png";
import silver1 from "@app/assets/sponsors/GoEasy png file .png";
import { Card, CardContent } from "@app/components/ui/card";
import LazyLoad from "@app/core/LazyLoad";

const Sponsors: React.FC = () => {
  const allSponsors = [
    {
      logoSrc: mainSponsor,
      logoAlt: "arcHomeLoans",
      url: "https://arkhomeloans.com.au",
    },
    {
      logoSrc: gold1,
      logoAlt: "reyCoGrp",
      url: "https://www.reyproperties.com.au",
    },
    {
      logoSrc: gold2,
      logoAlt: "arcAccountingSol",
      url: "https://arkaccsol.com.au",
    },
    {
      logoSrc: gold3,
      logoAlt: "pacificVisa",
      url: "https://pacificvisa.com.au",
    },
    {
      logoSrc: silver1,
      logoAlt: "goEasy",
      url: "https://www.facebook.com/p/Go-Easy-driving-school-61570745462095",
    },
  ];

  return (
    <div className="bg-white py-12 px-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 uppercase tracking-wide">
          OUR SPONSORS
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
          Thank you to our valued partners for their support
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {allSponsors.map((sponsor) => (
            <a
              key={sponsor.logoSrc}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Card className="bg-white border-2 border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-48">
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <LazyLoad
                    src={sponsor.logoSrc}
                    alt={sponsor.logoAlt}
                    className="h-24 object-contain"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
