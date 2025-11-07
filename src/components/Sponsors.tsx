import React from "react";

import mainSponsor from "@app/assets/sponsors/arcHomeLoans.png";
import gold1 from "@app/assets/sponsors/Rey Co Grp.png";
import gold2 from "@app/assets/sponsors/arcAccountingSol.png";
import gold3 from "@app/assets/sponsors/PacificVisa-Logo-Final.png";
import silver1 from "@app/assets/sponsors/GoEasy png file .png";
import { Card, CardContent } from "@app/components/ui/card";
import { Badge } from "@app/components/ui/badge";

const Sponsors: React.FC = () => {
  return (
    <section className="bg-blue-900 py-12 px-0 w-full">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8 uppercase tracking-wide">
        OUR SPONSORS
      </h2>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16">
        {/* Main sponsor */}
        <div className="flex justify-center mb-12">
          <Card className="w-full md:w-3/4 bg-white/95 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl">
            <CardContent className="p-8 md:p-12 flex items-center justify-center">
              <img
                src={mainSponsor}
                alt="Main Sponsor"
                className="h-32 md:h-40 object-contain"
              />
            </CardContent>
          </Card>
        </div>

        {/* Gold sponsors */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Badge className="text-base px-4 py-1.5 bg-yellow-400 text-gray-900 font-semibold border-none">
              Gold Sponsors
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-40 md:w-48">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <img
                  src={gold1}
                  alt="Gold Sponsor 1"
                  className="max-h-16 max-w-full object-contain"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-40 md:w-48">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <img
                  src={gold2}
                  alt="Gold Sponsor 2"
                  className="max-h-16 max-w-full object-contain"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-40 md:w-48">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <img
                  src={gold3}
                  alt="Gold Sponsor 3"
                  className="max-h-16 max-w-full object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Silver sponsors */}
        <div>
          <div className="flex items-center justify-center mb-6">
            <Badge className="text-base px-4 py-1.5 bg-gray-400 text-gray-900 font-semibold border-none">
              Silver Sponsors
            </Badge>
          </div>
          <div className="flex justify-center">
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-40 md:w-48">
              <CardContent className="p-6 flex items-center justify-center">
                <img
                  src={silver1}
                  alt="Silver Sponsor"
                  className="max-h-14 max-w-full object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
