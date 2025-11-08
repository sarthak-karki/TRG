import { FunctionComponent } from "react";
import { Facebook, Instagram, Music } from "lucide-react";
import { Button } from "@app/components/ui/button";
import { Separator } from "@app/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import TeamLogo from "@app/assets/trgLogo.jpeg";

const Footer: FunctionComponent = () => {
  return (
    <div className="bg-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Team Logo */}
          <div className="flex justify-center md:justify-start">
            <Avatar className="w-32 h-32">
              <AvatarImage src={TeamLogo} alt="The Rising Gurkhas FC" />
              <AvatarFallback className="bg-white text-indigo-900 text-2xl font-bold">
                TRG
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-white/90">© 2025 The Rising Gurkhas FC</p>
            <p className="text-white/70 text-sm mt-1">All rights reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              asChild
            >
              <a
                href="https://www.facebook.com/RisingGurkhas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              asChild
            >
              <a
                href="https://www.instagram.com/trgfc_2012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              asChild
            >
              <a
                href="https://www.tiktok.com/@trgfc_2012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-6 bg-white/20" />

        <div className="text-center text-sm text-white/60">
          <p>Building community through football</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
