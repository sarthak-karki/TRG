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
    <div className="relative w-full h-[50vh] md:h-[70vh]">
      <img
        src="https://scontent.fsyd14-1.fna.fbcdn.net/v/t39.30808-6/594004410_1342671617897439_7498109603810253120_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFEG0-5JaO4oGKsLL1hAAvB9PLU3jDxyN_08tTeMPHI34TDepVtdaaHIZIklhaRiiU&_nc_ohc=5SNfRk9hz1sQ7kNvwENnbeu&_nc_oc=AdnLDr1zDh8iB-2VKpJ6w9eu2Q__IA97mpLJDW2LkAwSw93HXWthkw2haBbCHbzuSnbil3uQjrOgBaOiyT3cP0T7&_nc_zt=23&_nc_ht=scontent.fsyd14-1.fna&_nc_gid=UEGaVQ-MESME1pBjXYActQ&oh=00_Afkr2UFlLCSo1A_A8_OjLIVE5dDzrjqZHfSM9uZTtXOwLw&oe=6939E3F7"
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default TeamPhoto;
