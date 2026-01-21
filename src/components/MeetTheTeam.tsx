import React, { useState } from "react";
import { Badge } from "@app/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@app/components/ui/carousel";
import { Users, Shield, Target, Disc } from "lucide-react";

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

type Position = "GOALKEEPER" | "DEFENDER" | "MIDFIELDER" | "FORWARD";

interface Player {
  name: string;
  position: Position;
  photo: string;
}

const players: Player[] = [
  { name: "Sarthak Karki", position: "DEFENDER", photo: sarthakImg },
  { name: "Sherab Thapa Magar", position: "FORWARD", photo: sherabImg },
  { name: "Suman KC", position: "GOALKEEPER", photo: partyboyImg },
  { name: "Akash Malla", position: "FORWARD", photo: akashImg },
  { name: "Amris Kharel", position: "DEFENDER", photo: amrisImg },
  { name: "Anish Shrestha", position: "DEFENDER", photo: anishImg },
  { name: "Biraj Rai", position: "MIDFIELDER", photo: birajImg },
  { name: "Bishal Oli", position: "MIDFIELDER", photo: bishalImg },
  { name: "Bhusan KC", position: "FORWARD", photo: bvusanImg },
  { name: "Chhiring Lama", position: "MIDFIELDER", photo: chhiringImg },
  { name: "Enoj Neupane", position: "FORWARD", photo: enojImg },
  { name: "Frekk", position: "MIDFIELDER", photo: frekkImg },
  { name: "Kumar Bhandari", position: "MIDFIELDER", photo: kumarImg },
  { name: "Nabin KC", position: "GOALKEEPER", photo: nabinImg },
  { name: "Nirakar Pradhan", position: "MIDFIELDER", photo: nirakarImg },
  { name: "Paras Thapa", position: "DEFENDER", photo: parasImg },
  { name: "Pranish Ranjit", position: "DEFENDER", photo: pranishImg },
  { name: "Rinjijn Tamang", position: "DEFENDER", photo: rinjijnImg },
  { name: "Ritish Ranjit", position: "DEFENDER", photo: ritishImg },
  { name: "Roshan Lamichhane", position: "FORWARD", photo: roshanLamicchaneImg },
  { name: "Roshan Shahi", position: "GOALKEEPER", photo: roshanShahiImg },
  { name: "Samip Gauchan", position: "GOALKEEPER", photo: samipGauchanImg },
  { name: "Sana Karki", position: "MIDFIELDER", photo: sanaKarkiImg },
  { name: "Sanjeeb Bista", position: "FORWARD", photo: sanjeebBistaImg },
  { name: "Santosh Tamang", position: "MIDFIELDER", photo: santoshTamangImg },
  { name: "Sunil Bhandari", position: "MIDFIELDER", photo: sunilBhandariImg },
  { name: "Sunil Khawas", position: "DEFENDER", photo: sunilKhawasImg },
  { name: "Sunil Sharma", position: "DEFENDER", photo: sunilSharmaImg },
  { name: "Bikram Shrestha", position: "MIDFIELDER", photo: bikramImg },
];

const positionConfig: Record<Position, { color: string; bgColor: string; icon: React.ReactNode }> = {
  GOALKEEPER: {
    color: "text-amber-400",
    bgColor: "bg-amber-500/20 border-amber-500/40",
    icon: <Disc className="w-4 h-4" />,
  },
  DEFENDER: {
    color: "text-blue-400",
    bgColor: "bg-blue-500/20 border-blue-500/40",
    icon: <Shield className="w-4 h-4" />,
  },
  MIDFIELDER: {
    color: "text-green-400",
    bgColor: "bg-green-500/20 border-green-500/40",
    icon: <Users className="w-4 h-4" />,
  },
  FORWARD: {
    color: "text-red-400",
    bgColor: "bg-red-500/20 border-red-500/40",
    icon: <Target className="w-4 h-4" />,
  },
};

const sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));

const MeetTheTeam: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Position | "ALL">("ALL");

  const filteredPlayers = activeFilter === "ALL"
    ? sortedPlayers
    : sortedPlayers.filter((p) => p.position === activeFilter);

  const positionCounts = {
    ALL: players.length,
    GOALKEEPER: players.filter((p) => p.position === "GOALKEEPER").length,
    DEFENDER: players.filter((p) => p.position === "DEFENDER").length,
    MIDFIELDER: players.filter((p) => p.position === "MIDFIELDER").length,
    FORWARD: players.filter((p) => p.position === "FORWARD").length,
  };

  return (
    <section className="relative bg-[#0a1929] py-20 px-0 w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <span className="inline-block px-4 py-1 mb-4 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
          Our Squad
        </span>
        <h2 className="text-headline text-white mb-4">
          MEET THE <span className="gradient-text-gold">TEAM</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          The warriors who carry the Gurkha spirit onto the pitch every match day
        </p>

        {/* Position Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {(["ALL", "GOALKEEPER", "DEFENDER", "MIDFIELDER", "FORWARD"] as const).map((pos) => (
            <button
              key={pos}
              onClick={() => setActiveFilter(pos)}
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeFilter === pos
                  ? "bg-[#f5a623] text-[#0a1929]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {pos !== "ALL" && positionConfig[pos].icon}
              {pos === "ALL" ? "All Players" : pos}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === pos ? "bg-[#0a1929]/20" : "bg-white/10"
              }`}>
                {positionCounts[pos]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Players Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {filteredPlayers.map((player) => (
              <CarouselItem
                key={player.name}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* Premium Player Card */}
                <div className="card-player h-[420px] group cursor-pointer">
                  {/* Player Image */}
                  <div className="absolute inset-0">
                    <Avatar className="w-full h-full rounded-xl">
                      <AvatarImage
                        src={player.photo || undefined}
                        alt={player.name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback className="bg-[#0f3460] text-white/40 text-xl font-semibold w-full h-full rounded-xl flex items-center justify-center">
                        {player.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a1929]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />

                  {/* Position Badge - Top */}
                  <div className="absolute top-4 right-4 z-[3]">
                    <Badge className={`${positionConfig[player.position].bgColor} ${positionConfig[player.position].color} border px-3 py-1 font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5`}>
                      {positionConfig[player.position].icon}
                      {player.position}
                    </Badge>
                  </div>

                  {/* Player Info - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-[3]">
                    {/* Name */}
                    <h3 className="text-white text-xl font-bold mb-1 group-hover:text-[#f5a623] transition-colors duration-300">
                      {player.name}
                    </h3>

                    {/* Decorative line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-[#f5a623] to-transparent rounded-full mb-2 group-hover:w-full transition-all duration-500" />

                    {/* Position text on hover */}
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                      {player.position}
                    </p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl ring-2 ring-[#f5a623]/0 group-hover:ring-[#f5a623]/50 transition-all duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="bg-[#f5a623] text-[#0a1929] hover:bg-[#ffd93d] border-none w-12 h-12 -left-4 sm:-left-6 shadow-lg shadow-[#f5a623]/30" />
          <CarouselNext className="bg-[#f5a623] text-[#0a1929] hover:bg-[#ffd93d] border-none w-12 h-12 -right-4 sm:-right-6 shadow-lg shadow-[#f5a623]/30" />
        </Carousel>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 mt-16 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(["GOALKEEPER", "DEFENDER", "MIDFIELDER", "FORWARD"] as const).map((pos) => (
            <div
              key={pos}
              className={`text-center p-4 rounded-xl ${positionConfig[pos].bgColor} border backdrop-blur-sm`}
            >
              <div className={`text-3xl font-bold ${positionConfig[pos].color}`}>
                {positionCounts[pos]}
              </div>
              <div className={`text-sm font-medium ${positionConfig[pos].color} opacity-80`}>
                {pos}S
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/50 rounded-full blur-3xl" />
    </section>
  );
};

export default MeetTheTeam;
