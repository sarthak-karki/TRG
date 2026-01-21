import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Trophy, Users, Calendar } from "lucide-react";
import teamPhotoImg from "@app/assets/TeamPhoto.jpg";

type HeroProps = {
  alt?: string;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ alt = "Team photo", className = "" }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={teamPhotoImg}
          alt={alt}
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/70 via-[#0a1929]/40 to-[#0a1929]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/60 via-transparent to-[#0a1929]/60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Pre-title Badge */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5a623]/10 border border-[#f5a623]/30 rounded-full text-[#f5a623] text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse" />
            Established 2012
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up stagger-1 text-display gradient-text-gold hero-text-shadow mb-6 whitespace-nowrap">
          The Rising Gurkhas FC
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up stagger-2 text-xl md:text-2xl text-white/90 max-w-2xl mb-4 font-medium">
          Pride. Passion. Performance.
        </p>
        <p className="animate-fade-in-up stagger-3 text-base md:text-lg text-white/60 max-w-2xl mb-8">
          The Rising Gurkhas - Carrying the legacy since 2012
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/about-us"
            className="btn-premium btn-gold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 group"
          >
            <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Our Story
          </Link>
          <Link
            to="/contact"
            className="btn-premium btn-outline-gold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 group hover:text-[#0a1929]"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Join The Team
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="animate-fade-in-up stagger-5 flex flex-wrap justify-center gap-8 md:gap-16 mt-4">
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 group-hover:border-[#f5a623] group-hover:bg-[#f5a623]/20 transition-all duration-300">
              <Trophy className="w-7 h-7 text-[#f5a623]" />
            </div>
            <div className="stat-number text-3xl md:text-4xl">20+</div>
            <div className="stat-label text-white/60 mt-1">Championships</div>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 group-hover:border-[#f5a623] group-hover:bg-[#f5a623]/20 transition-all duration-300">
              <Users className="w-7 h-7 text-[#f5a623]" />
            </div>
            <div className="stat-number text-3xl md:text-4xl">28+</div>
            <div className="stat-label text-white/60 mt-1">Squad Players</div>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 group-hover:border-[#f5a623] group-hover:bg-[#f5a623]/20 transition-all duration-300">
              <Calendar className="w-7 h-7 text-[#f5a623]" />
            </div>
            <div className="stat-number text-3xl md:text-4xl">12+</div>
            <div className="stat-label text-white/60 mt-1">Years Strong</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, visible on larger screens */}
      <button
        onClick={scrollToContent}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/40 hover:text-[#f5a623] transition-colors duration-300 cursor-pointer group z-20"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1929] to-transparent" />
    </section>
  );
};

export default Hero;
