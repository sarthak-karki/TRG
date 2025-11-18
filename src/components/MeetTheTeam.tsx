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

import akashImg from "@app/assets/players/akash_malla.jpeg";
import amrisImg from "@app/assets/players/amris_kharel.jpeg";
import anishImg from "@app/assets/players/anish_shrestha.jpeg";
import bikramImg from "@app/assets/players/bikram_shrestha.jpeg";
import birajImg from "@app/assets/players/biraj_rai.jpeg";
import bishalImg from "@app/assets/players/bishal_oli.jpeg";
import bvusanImg from "@app/assets/players/bvusan_kc.jpeg";
import chhiringImg from "@app/assets/players/chhiring_lama.jpeg";
import enojImg from "@app/assets/players/enoj_neupane.jpeg";
import frekkImg from "@app/assets/players/frekk.jpeg";
import kumarImg from "@app/assets/players/kumar_bhandari.jpeg";
import nabinImg from "@app/assets/players/nabin_kc.jpeg";
import nirakarImg from "@app/assets/players/nirakar_pradhan.jpeg";
import parasImg from "@app/assets/players/paras_thapa.jpg";
import pranishImg from "@app/assets/players/pranish_ranjit.jpeg";
import rinjijnImg from "@app/assets/players/rinjin_tamang.jpeg";
import ritishImg from "@app/assets/players/ritish_ranjit.jpeg";
import roshanLamicchaneImg from "@app/assets/players/roshan_lamichane.jpeg";
import roshanShahiImg from "@app/assets/players/roshan_shahi.jpeg";
import samipGauchanImg from "@app/assets/players/samip_gauchan.jpeg";
import sanaKarkiImg from "@app/assets/players/sana_karki.jpg";
import sanjeebBistaImg from "@app/assets/players/sanjeeb_bista.jpeg";
import santoshTamangImg from "@app/assets/players/santosh_tamang.jpeg";
import sunilBhandariImg from "@app/assets/players/sunil_bhandari.jpeg";
import sunilKhawasImg from "@app/assets/players/sunil_khawas.jpeg";
import sunilSharmaImg from "@app/assets/players/sunil_sharma.jpg";
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
    name: "Sherab Thapa Magar",
    position: "FORWARD",
    photo: sherabImg,
  },
  {
    name: "Suman KC",
    position: "GOALKEEPER",
    photo: partyboyImg,
  },
  {
    name: "Akash Malla",
    position: "FORWARD",
    photo: akashImg,
  },
  {
    name: "Amris Kharel",
    position: "DEFENDER",
    photo: amrisImg,
  },
  {
    name: "Anish Shrestha",
    position: "DEFENDER",
    photo: anishImg,
  },
  {
    name: "Biraj Rai",
    position: "MIDFIELDER",
    photo: birajImg,
  },
  {
    name: "Bishal Oli",
    position: "MIDFIELDER",
    photo: bishalImg,
  },
  {
    name: "BVusan KC",
    position: "FORWARD",
    photo: bvusanImg,
  },
  {
    name: "Chhiring Lama",
    position: "MIDFIELDER",
    photo: chhiringImg,
  },
  {
    name: "Enoj Neupane",
    position: "FORWARD",
    photo: enojImg,
  },
  {
    name: "Frekk",
    position: "MIDFIELDER",
    photo: frekkImg,
  },
  {
    name: "Kumar Bhandari",
    position: "MIDFIELDER",
    photo: kumarImg,
  },
  {
    name: "Nabin KC",
    position: "GOALKEEPER",
    photo: nabinImg,
  },
  {
    name: "Nirakar Pradhan",
    position: "MIDFIELDER",
    photo: nirakarImg,
  },
  {
    name: "Paras Thapa",
    position: "DEFENDER",
    photo: parasImg,
  },
  {
    name: "Pranish Ranjit",
    position: "DEFENDER",
    photo: pranishImg,
  },
  {
    name: "Rinjijn Tamang",
    position: "DEFENDER",
    photo: rinjijnImg,
  },
  {
    name: "Ritish Ranjit",
    position: "DEFENDER",
    photo: ritishImg,
  },
  {
    name: "Roshan Lamichhane",
    position: "FORWARD",
    photo: roshanLamicchaneImg,
  },
  {
    name: "Roshan Shahi",
    position: "GOALKEEPER",
    photo: roshanShahiImg,
  },
  {
    name: "Samip Gauchan",
    position: "GOALKEEPER",
    photo: samipGauchanImg,
  },
  {
    name: "Sana Karki",
    position: "MIDFIELDER",
    photo: sanaKarkiImg,
  },
  {
    name: "Sanjeeb Bista",
    position: "FORWARD",
    photo: sanjeebBistaImg,
  },
  {
    name: "Santosh Tamang",
    position: "MIDFIELDER",
    photo: santoshTamangImg,
  },
  {
    name: "Sunil Bhandari",
    position: "MIDFIELDER",
    photo: sunilBhandariImg,
  },
  {
    name: "Sunil Khawas",
    position: "DEFENDER",
    photo: sunilKhawasImg,
  },
  {
    name: "Sunil Sharma",
    position: "DEFENDER",
    photo: sunilSharmaImg,
  },
  {
    name: "Bikram Shrestha",
    position: "MIDFIELDER",
    photo: bikramImg,
  },
];

const sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));

const MeetTheTeam: React.FC = () => {
  return (
    <section className="bg-blue-900 py-12 px-0 w-full">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8 uppercase tracking-wide">
        MEET THE TEAM
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-16">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {sortedPlayers.map((player) => (
              <CarouselItem
                key={player.name}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl shadow-lg border border-gray-400 flex flex-col items-center justify-between p-0 w-full h-[400px] relative">
                  <CardContent className="flex flex-col items-center justify-between p-0 h-full w-full">
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
                        className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 bg-transparent border-none"
                      >
                        {player.name}
                      </Badge>
                      <div className="text-base sm:text-lg text-white tracking-wide mb-6">
                        {player.position}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-yellow-400 text-indigo-900 hover:bg-yellow-500 border-none w-10 h-10 sm:w-12 sm:h-12 -left-4 sm:-left-6" />
          <CarouselNext className="bg-yellow-400 text-indigo-900 hover:bg-yellow-500 border-none w-10 h-10 sm:w-12 sm:h-12 -right-4 sm:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default MeetTheTeam;
