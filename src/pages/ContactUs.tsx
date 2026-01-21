import Header from "@app/components/header";
import Footer from "@app/components/footer";
import { FC } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Send, Users, Heart } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  {
    name: "Facebook",
    handle: "@RisingGurkhas",
    url: "https://www.facebook.com/RisingGurkhas",
    icon: <Facebook className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    hoverBg: "hover:bg-blue-500/10",
    followers: "2.5K+",
  },
  {
    name: "Instagram",
    handle: "@trgfc_2012",
    url: "https://www.instagram.com/trgfc_2012",
    icon: <Instagram className="w-6 h-6" />,
    color: "from-purple-500 via-pink-500 to-orange-500",
    hoverBg: "hover:bg-pink-500/10",
    followers: "1.8K+",
  },
  {
    name: "TikTok",
    handle: "@trgfc_2012",
    url: "https://www.tiktok.com/@trgfc_2012",
    icon: <TikTokIcon />,
    color: "from-gray-700 to-black",
    hoverBg: "hover:bg-gray-500/10",
    followers: "500+",
  },
];

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "Send us a message anytime",
    value: "trgfc2012@gmail.com",
    link: "mailto:trgfc2012@gmail.com",
    color: "from-[#f5a623] to-[#ffd93d]",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    description: "Reach out directly",
    value: "+61 422 156 518",
    link: "tel:+61422156518",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    description: "Based in",
    value: "Sydney, Australia",
    link: null,
    color: "from-blue-500 to-cyan-500",
  },
];

const ContactUs: FC = () => {
  return (
    <div className="bg-[#0a1929] min-h-screen font-sans w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#0f3460] to-[#0a1929]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
            Get In Touch
          </span>
          <h1 className="text-display text-white mb-6">
            CONTACT <span className="gradient-text-gold">US</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to join our team, discuss sponsorship, or just say hello.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/50 rounded-full blur-3xl" />
      </section>

      {/* Contact Methods */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const content = (
                <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} text-white mb-6`}>
                    {method.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f5a623] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-3">{method.description}</p>
                  <p className="text-white font-semibold text-lg">{method.value}</p>
                </div>
              );

              return method.link ? (
                <a key={index} href={method.link} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-[#f5a623] text-sm font-semibold uppercase tracking-widest border border-[#f5a623]/30 rounded-full bg-[#f5a623]/5">
              Social Media
            </span>
            <h2 className="text-headline text-white mb-4">
              CONNECT WITH <span className="gradient-text-gold">US</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest matches, highlights, and team news
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-2 ${social.hoverBg}`}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white`}>
                    {social.icon}
                  </div>
                  {/* Followers */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{social.followers}</p>
                    <p className="text-white/40 text-sm">Followers</p>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f5a623] transition-colors">
                  {social.name}
                </h3>
                <p className="text-white/50">{social.handle}</p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#f5a623]/20 transition-colors">
                  <Send className="w-4 h-4 text-white/40 group-hover:text-[#f5a623] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] to-[#0a1929]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, transparent 45%, #f5a623 45%, #f5a623 55%, transparent 55%)`,
                backgroundSize: "30px 30px",
              }} />
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#f5a623]/20" />

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30">
                  <Users className="w-6 h-6 text-[#f5a623]" />
                </div>
                <div className="p-3 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30">
                  <Heart className="w-6 h-6 text-[#f5a623]" />
                </div>
              </div>

              <h2 className="text-headline text-white mb-4">
                JOIN THE <span className="gradient-text-gold">GURKHA FAMILY</span>
              </h2>

              <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're a player looking to join our squad, a fan wanting to support the team,
                or a potential sponsor interested in partnering with us - we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:trgfc2012@gmail.com?subject=Join%20The%20Team"
                  className="btn-premium btn-gold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Join The Team
                </a>
                <a
                  href="mailto:trgfc2012@gmail.com?subject=Sponsorship%20Inquiry"
                  className="btn-premium btn-outline-gold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 hover:text-[#0a1929]"
                >
                  <Heart className="w-5 h-5" />
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="relative py-8 bg-gradient-to-r from-[#f5a623] via-[#ffd93d] to-[#f5a623]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#0a1929]">Ready to get in touch?</h3>
              <p className="text-[#0a1929]/70">We typically respond within 24 hours</p>
            </div>
            <a
              href="mailto:trgfc2012@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#0a1929] text-white font-bold rounded-full hover:bg-[#0f3460] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
