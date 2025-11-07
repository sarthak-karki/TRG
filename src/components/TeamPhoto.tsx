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
    <section className="bg-blue-900 py-12 w-full">
      <div className="max-w-5xl mx-auto px-16">
        <div className="flex justify-center">
          <img
            src={Team}
            alt={alt}
            className={`w-full max-w-4xl h-64 md:h-96 object-cover rounded-lg ${className}`}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamPhoto;
