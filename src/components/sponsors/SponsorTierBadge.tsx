import React from "react";
import { Badge } from "@app/components/ui/badge";

interface SponsorTierBadgeProps {
  tier: "premium" | "gold" | "silver";
  label: string;
}

const SponsorTierBadge: React.FC<SponsorTierBadgeProps> = ({ tier, label }) => {
  const tierStyles = {
    premium: "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold border-none shadow-lg",
    gold: "bg-yellow-400 text-gray-900 font-semibold border-none shadow-md",
    silver: "bg-gray-400 text-gray-900 font-semibold border-none shadow-md",
  };

  return (
    <Badge className={`text-sm px-6 py-2 ${tierStyles[tier]}`}>
      {label}
    </Badge>
  );
};

export default SponsorTierBadge;
