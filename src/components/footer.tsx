import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import TeamLogo from "@app/assets/trgLogo.jpeg";

// Custom TikTok Icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Facebook Icon
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/RisingGurkhas",
    icon: <FacebookIcon />,
    handle: "@RisingGurkhas",
    color: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/trgfc_2012",
    icon: <InstagramIcon />,
    handle: "@trgfc_2012",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@trgfc_2012",
    icon: <TikTokIcon />,
    handle: "@trgfc_2012",
    color: "hover:bg-black",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const Footer: FunctionComponent = () => {
  return (
    <footer className="relative bg-[#0a1929] overflow-hidden">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f5a623] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <Avatar className="w-16 h-16 border-2 border-[#f5a623]/50">
                  <AvatarImage src={TeamLogo} alt="The Rising Gurkhas FC" />
                  <AvatarFallback className="bg-[#0f3460] text-white text-xl font-bold">
                    TRG
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3 className="text-[#f5a623] font-bold text-2xl leading-tight">TRG FC</h3>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Pride. Passion. Performance. Carrying the legendary Gurkha spirit on the football pitch since 2012.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f5a623]" />
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[#f5a623] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#f5a623]/50 group-hover:text-[#f5a623] group-hover:translate-x-1 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f5a623]" />
              Contact Us
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:trgfc2012@gmail.com"
                  className="flex items-start gap-3 text-white/60 hover:text-[#f5a623] transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-[#f5a623]/50 group-hover:text-[#f5a623]" />
                  <span className="text-sm">trgfc2012@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+61422156518"
                  className="flex items-start gap-3 text-white/60 hover:text-[#f5a623] transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-[#f5a623]/50 group-hover:text-[#f5a623]" />
                  <span className="text-sm">+61 422 156 518</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 mt-0.5 text-[#f5a623]/50" />
                <span className="text-sm">Sydney, Australia</span>
              </li>
            </ul>
          </div>

          {/* Social Handles */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f5a623]" />
              Follow Us
            </h5>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-[#f5a623] transition-colors duration-300 group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {social.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white">{social.name}</p>
                      <p className="text-xs text-white/40">{social.handle}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} TRG FC. All rights reserved.
            </p>
            <p className="text-white/30 text-xs text-center">
              Building community through football since 2012
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};

export default Footer;
