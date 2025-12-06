import React from "react";

type TeamPhotProps = {
  alt?: string;
  className?: string;
};

const TeamPhoto: React.FC<TeamPhotProps> = ({
  alt = "Team photo",
  className = "",
}) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh]">
      <img
        src="https://scontent.fsyd14-1.fna.fbcdn.net/v/t39.30808-6/475306238_1077319397765997_153805934222255214_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGN2RuOtj5euVGZtyDBNXd0l7LJHYsalPyXsskdixqU_Gxt5KqQ47QfyNSHncAI_dY&_nc_ohc=IzQSpn7829sQ7kNvwF2IHPC&_nc_oc=AdnYh2EuvSRsbSg3HEPKOwPw0W6mvPCek-TZfAAJ2gW1j2ZThDi9oXYWwDqPfGoFjPzJRvsz_e3kT9LaUh2ksaRl&_nc_zt=23&_nc_ht=scontent.fsyd14-1.fna&_nc_gid=SfczWiJC6Ghq_OjlL6QYRw&oh=00_AfmBP9VtlU1f6NXQZlK549vQ2vgqez3V2Fj_KlEcd0cpOQ&oe=6939FBD6"
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default TeamPhoto;
