import { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@app/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@app/components/ui/button";
import trgLogo from "@app/assets/trgLogo.jpeg";

const clubName = "The Rising Gurkhas FC";
const smallClubName = "TRG FC";
const logoSrc = trgLogo;

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="bg-blue-900 border-b-4 border-yellow-500">
      <div className="flex items-center lg:items-end justify-between py-4 px-4 md:px-10 gap-4">
        {/* Team Logo on the Left */}
        <div className="flex-shrink-0">
          <a href="/">
            <Avatar className="w-20 h-20 md:w-32 md:h-32">
              <AvatarImage src={logoSrc} alt={`${clubName} Logo`} />
              <AvatarFallback className="bg-white/90 text-blue-900 text-sm font-bold">
                {smallClubName}
              </AvatarFallback>
            </Avatar>
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:block ml-auto">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={
                      navigationMenuTriggerStyle() +
                      " text-white hover:text-yellow-500 text-base md:text-lg px-6 py-2 md:px-8 md:py-3"
                    }
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white border-none hover:bg-gray-100 text-blue-900"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="!bg-white text-blue-900 border-l-4 border-yellow-500 [&>button]:text-blue-900">
              <SheetHeader>
                <SheetTitle className="text-blue-900 text-2xl font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-semibold text-blue-900 hover:text-yellow-500 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
