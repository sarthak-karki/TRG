import React from "react";
import { Card, CardContent } from "@app/components/ui/card";

type Fixture = {
  opponent: string;
  date: string; // friendly formatted date
  venue: string;
};

const fixtures: Fixture[] = [
  {
    opponent: "Eastside Rovers",
    date: "Sat, 15 Nov 2025 - 3:00 PM",
    venue: "Home",
  },
  {
    opponent: "Northern Stars",
    date: "Sat, 22 Nov 2025 - 5:00 PM",
    venue: "Away",
  },
  {
    opponent: "Harbour City FC",
    date: "Sun, 30 Nov 2025 - 2:00 PM",
    venue: "Home",
  },
  {
    opponent: "Valley United",
    date: "Sun, 07 Dec 2025 - 4:00 PM",
    venue: "Away",
  },
];

const Fixtures: React.FC = () => {
  return (
    <section className="bg-blue-900 py-12 px-0 w-full">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8 uppercase tracking-wide">
        UPCOMING FIXTURES
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {fixtures.slice(0, 3).map((f) => (
            <Card key={f.opponent} className="rounded-lg shadow-md bg-gray-800">
              <CardContent className="p-4">
                <div className="text-lg font-semibold text-yellow-400">
                  vs {f.opponent}
                </div>
                <div className="text-sm text-white/80 mt-1">{f.date}</div>
                <div className="text-sm text-white/70 mt-2">
                  Venue: {f.venue}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fixtures;
