import { FC, useState } from "react";
import { Link } from "react-router-dom";
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
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-blue-900 border-b-4 border-yellow-500">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between py-2 px-4 md:px-10 gap-2 lg:gap-4">
        {/* Mobile Layout - Top Row */}
        <div className="flex lg:hidden w-full justify-between items-center">
          {/* Spacer for alignment */}
          <div className="w-12"></div>

          {/* Team Logo - Center on mobile */}
          <div className="flex-shrink-0 pt-2">
            <Link to="/">
              <Avatar className="w-16 h-16">
                <AvatarImage src={logoSrc} alt={`${clubName} Logo`} />
                <AvatarFallback className="bg-white/90 text-blue-900 text-sm font-bold">
                  {smallClubName}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile Menu Button - Right */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white border-none hover:bg-gray-100 text-blue-900 h-12 w-12"
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
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-semibold text-blue-900 hover:text-yellow-500 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Navigation - Compact menu below logo */}
        <div className="lg:hidden flex gap-3 w-full justify-center pt-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-white hover:text-yellow-500 text-sm font-semibold px-3 py-1 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Logo - Left */}
        <div className="hidden lg:block flex-shrink-0">
          <Link to="/">
            <Avatar className="w-24 h-24">
              <AvatarImage src={logoSrc} alt={`${clubName} Logo`} />
              <AvatarFallback className="bg-white/90 text-blue-900 text-sm font-bold">
                {smallClubName}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:block ml-auto">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={
                        navigationMenuTriggerStyle() +
                        " text-white hover:text-yellow-500 text-base md:text-lg px-6 py-2 md:px-8 md:py-3"
                      }
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
