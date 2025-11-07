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
    <section className="bg-blue-900 py-16 px-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8 uppercase tracking-wide">
          OUR SPONSORS
        </h2>
        <p className="text-blue-200 text-center mb-12 text-sm md:text-base">
          Thank you to our valued partners for their support
        </p>

        {/* Main sponsor - Premium Tier */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-center mb-4">
              <Badge className="text-sm px-6 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold border-none shadow-lg">
                Premium Partner
              </Badge>
            </div>
            <Card className="bg-white transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-indigo-200/60 ring-4 ring-indigo-50 transform hover:scale-105 hover:z-10">
              <CardContent className="p-2 md:p-2 flex items-center justify-center">
                <img
                  src={mainSponsor}
                  alt="Main Sponsor"
                  className="h-32 object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gold sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Badge className="text-sm px-5 py-2 bg-yellow-400 text-gray-900 font-semibold border-none shadow-md">
              Gold Sponsors
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <img
                  src={gold1}
                  alt="Gold Sponsor 1"
                  className="max-h-20 w-auto object-contain"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <CardContent className="p-4 flex items-center justify-center h-32">
                <img
                  src={gold2}
                  alt="Gold Sponsor 2"
                  className="max-h-20 max-w-full object-contain"
                />
              </CardContent>
            </Card>
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <img
                  src={gold3}
                  alt="Gold Sponsor 3"
                  className="max-h-20 max-w-full object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Silver sponsors */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Badge className="text-sm px-5 py-2 bg-gray-400 text-gray-900 font-semibold border-none shadow-md">
              Silver Sponsors
            </Badge>
          </div>
          <div className="flex justify-center">
            <Card className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-48 md:w-56">
              <CardContent className="p-6 flex items-center justify-center h-28">
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
