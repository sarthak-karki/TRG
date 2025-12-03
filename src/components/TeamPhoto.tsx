import React from "react";
import Team from "@app/assets/team.jpg";

type TeamPhotProps = {
  alt?: string;
  className?: string;
};

const TeamPhoto: React.FC<TeamPhotProps> = ({
  alt = "Team photo",
  className = "",
}) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen">
      <img
        src={Team}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default TeamPhoto;
