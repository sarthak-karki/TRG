import React from "react";
import { Card, CardContent } from "@app/components/ui/card";
import { Badge } from "@app/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@app/components/ui/carousel";

import sarthakImg from "@app/assets/players/sarthak.jpg";
import sherabImg from "@app/assets/players/sherab.jpeg";
import partyboyImg from "@app/assets/players/partyboy.jpeg";

const players = [
  {
    name: "Sarthak Karki",
    position: "DEFENDER",
    photo: sarthakImg,
  },
  {
    name: "Sheray",
    position: "DEFENDER",
    photo: sherabImg,
  },
  {
    name: "Party Boy",
    position: "MIDFIELDER",
    photo: partyboyImg,
  },
  {
    name: "Samuel Lee",
    position: "FORWARD",
    photo: null,
  },
  {
    name: "David Kim",
    position: "DEFENDER",
    photo: null,
  },
  {
    name: "Lucas Silva",
    position: "MIDFIELDER",
    photo: null,
  },
];

const cardStyle =
  "bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl shadow-lg border border-gray-400 flex flex-col items-center justify-between p-0 w-80 h-[400px] mx-2 relative";
const nameStyle = "text-2xl font-bold text-yellow-400 mb-1";
const positionStyle = "text-lg text-white tracking-wide mb-6";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="bg-blue-900 py-12 px-0 w-full">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8 uppercase tracking-wide">
        MEET THE TEAM
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {players.map((player) => (
              <CarouselItem key={player.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className={cardStyle}>
                  <CardContent className="flex flex-col items-center justify-between p-0 h-full">
                    <div
                      className="flex items-center justify-center w-full"
                      style={{ height: "70%" }}
                    >
                      <Avatar className="w-full h-full max-h-[260px] max-w-[260px]">
                        <AvatarImage
                          src={player.photo || undefined}
                          alt={player.name}
                          className="object-cover w-full h-full rounded-xl"
                        />
                        <AvatarFallback className="bg-gray-700 text-gray-400 text-xl font-semibold w-full h-full rounded-xl flex items-center justify-center">
                          [Player Photo]
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div
                      className="w-full bg-blue-800 py-4 rounded-b-xl text-center"
                      style={{ height: "30%" }}
                    >
                      <Badge
                        variant="outline"
                        className={
                          nameStyle +
                          " bg-transparent border-none text-yellow-400 text-2xl font-bold mb-1"
                        }
                      >
                        {player.name}
                      </Badge>
                      <div className={positionStyle}>{player.position}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-yellow-400 text-indigo-900 hover:bg-yellow-500 border-none w-12 h-12 -left-6" />
          <CarouselNext className="bg-yellow-400 text-indigo-900 hover:bg-yellow-500 border-none w-12 h-12 -right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default MeetTheTeam;
