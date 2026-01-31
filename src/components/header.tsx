import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@app/components/ui/button";
import trgLogo from "@app/assets/trgLogo.jpeg";

const clubName = "The Rising Gurkhas FC";
const smallClubName = "TRG FC";
const logoSrc = trgLogo;

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Premium Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark py-2 shadow-2xl"
            : "bg-gradient-to-b from-[#0a1929]/95 to-[#0a1929]/80 py-4"
        }`}
      >
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f5a623] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Avatar
                  className={`relative border-2 border-[#f5a623]/50 transition-all duration-300 ${
                    scrolled ? "w-12 h-12" : "w-16 h-16 md:w-20 md:h-20"
                  }`}
                >
                  <AvatarImage
                    src={logoSrc}
                    alt={`${clubName} Logo`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#0f3460] text-white text-sm font-bold">
                    {smallClubName}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div
                className={`hidden md:block transition-all duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}
              >
                <h1 className="text-[#f5a623] font-bold text-2xl md:text-3xl leading-tight">
                  TRG FC
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group ${
                    isActive(item.href)
                      ? "text-[#f5a623]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Hover/Active underline effect */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#f5a623] to-[#ffd93d] transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg bg-[#f5a623]/0 group-hover:bg-[#f5a623]/5 transition-all duration-300" />
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#f5a623] to-[#ffd93d] text-[#0a1929] font-bold text-sm uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-[#f5a623]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Join Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-12 h-12 text-white hover:text-[#f5a623] hover:bg-white/5"
                >
                  <Menu
                    className={`h-6 w-6 transition-all duration-300 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
                  />
                  <X
                    className={`h-6 w-6 absolute transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
                  />
                </Button>
              </SheetTrigger>

              {/* Premium Mobile Menu */}
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-gradient-to-b from-[#0a1929] to-[#0f3460] border-l border-[#f5a623]/20 p-0 [&>button]:hidden"
              >
                {/* Header with gradient */}
                <div className="relative px-6 pt-8 pb-6 bg-gradient-to-b from-[#0a1929] to-transparent">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#f5a623] transition-all duration-300 z-50"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <SheetHeader className="text-left">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-[#f5a623]/50">
                        <AvatarImage src={logoSrc} alt={clubName} />
                        <AvatarFallback className="bg-[#0f3460] text-white">
                          TRG
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <SheetTitle className="text-[#f5a623] text-3xl font-bold">
                          TRG FC
                        </SheetTitle>
                      </div>
                    </div>
                  </SheetHeader>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 py-6 space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 group animate-fade-in-up ${
                        isActive(item.href)
                          ? "bg-[#f5a623]/10 border border-[#f5a623]/30"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive(item.href)
                            ? "text-[#f5a623]"
                            : "text-white group-hover:text-[#f5a623]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive(item.href)
                            ? "text-[#f5a623]"
                            : "text-white/40 group-hover:text-[#f5a623] group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  ))}
                </nav>

                {/* CTA Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a1929] to-transparent">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#f5a623] to-[#ffd93d] text-[#0a1929] font-bold text-lg uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-[#f5a623]/30 transition-all duration-300"
                  >
                    Join The Team
                  </Link>
                  <p className="text-center text-white/40 text-sm mt-4">
                    Est. 2012 | Sydney, Australia
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        />
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div
        className={`transition-all duration-500 ${scrolled ? "h-16" : "h-24 md:h-28"}`}
      />
    </>
  );
};

export default Header;
