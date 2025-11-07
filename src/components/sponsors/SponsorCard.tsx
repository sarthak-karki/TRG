import React from "react";
import { Card, CardContent } from "@app/components/ui/card";

interface SponsorCardProps {
  logoSrc: string;
  logoAlt: string;
  size?: "small" | "medium" | "large";
}

const SponsorCard: React.FC<SponsorCardProps> = ({ 
  logoSrc, 
  logoAlt, 
  size = "medium" 
}) => {
  // Consistent card width for all tiers
  const cardWidth = "w-48 md:w-56";
  
  // Consistent card height for all tiers
  const cardHeight = "h-32";
  
  // Logo sizes - larger logos to fill the card better
  const logoSizes = {
    small: "max-h-16 max-w-[90%]",
    medium: "max-h-20 max-w-[90%]",
    large: "max-h-24 max-w-[90%]",
  };

  return (
    <Card className={`bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${cardWidth}`}>
      <CardContent className={`p-6 flex items-center justify-center ${cardHeight}`}>
        <img
          src={logoSrc}
          alt={logoAlt}
          className={`${logoSizes[size]} w-auto object-contain`}
        />
      </CardContent>
    </Card>
  );
};

export default SponsorCard;
