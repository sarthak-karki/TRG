import Header from "@app/components/header";
import Footer from "@app/components/footer";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";
import { Facebook, Instagram, Music, Mail, Phone } from "lucide-react";

const ContactUs: FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with The Rising Gurkhas FC
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Email Contact Card */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Have questions, suggestions, or want to join our team? Feel free
                to reach out to us via email.
              </p>
              <a
                href="mailto:trgfc2012@gmail.com"
                className="inline-flex items-center gap-2 text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
                trgfc2012@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Phone Contact Card */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Phone className="w-7 h-7" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Reach out to us directly
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +61 422 156 518
              </a>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-3xl">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Follow us on social media to stay updated with our latest
                matches, highlights, and team news.
              </p>

              <div className="space-y-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/RisingGurkhas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      Facebook
                    </h3>
                    <p className="text-gray-600">@RisingGurkhas</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trgfc_2012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-orange-700 transition-all">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      Instagram
                    </h3>
                    <p className="text-gray-600">@trgfc_2012</p>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@trgfc_2012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full group-hover:bg-gray-800 transition-colors">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">TikTok</h3>
                    <p className="text-gray-600">@trgfc_2012</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info Card */}
          <Card className="border-2 border-yellow-400 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-400">
              <CardTitle className="text-3xl text-gray-900">
                Join Our Community
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're interested in playing for The Rising Gurkhas FC,
                sponsoring our team, or simply want to support us, we'd love to
                hear from you. Join us in our journey to excellence and be part
                of our growing football family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
