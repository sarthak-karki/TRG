import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import { Badge } from "@app/components/ui/badge";
import { Card, CardContent } from "@app/components/ui/card";
import trgLogo from "@app/assets/trgLogo.jpeg";

interface HeaderProps {
  clubName?: string;
  tagline?: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({
  clubName = "TRGFC",
  tagline = "Pride • Passion • Performance",
  logoSrc = trgLogo,
}) => {
  return (
    <header className="bg-indigo-900 border-b-4 border-yellow-500 py-8">
      <div className="container mx-auto px-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {/* Team Logo using Avatar */}
              <div className="relative">
                <Avatar className="w-36 h-36">
                  <AvatarImage src={logoSrc} alt={`${clubName} Logo`} />
                  <AvatarFallback className="bg-white/90 text-indigo-900 text-xl font-bold">
                    <img
                      src={trgLogo}
                      alt="TRG Logo"
                      className="w-full h-full object-contain"
                    />
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Header Text */}
              <div className="text-center space-y-2">
                <h1 className="text-5xl font-bold text-white">{clubName}</h1>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-1 border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500/10"
                >
                  {tagline}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};

export default Header;
