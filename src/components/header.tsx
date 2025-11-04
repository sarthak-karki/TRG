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
  clubName = "TRG FC",
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
                <Avatar className="w-32 h-32 border-4 border-yellow-500 shadow-[0_8px_20px_rgba(234,179,8,0.5)]">
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
                <h1 className="text-5xl font-bold uppercase tracking-[0.2em] text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                  {clubName}
                </h1>
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
