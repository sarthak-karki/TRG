import Header from "@app/components/header";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";
import { Badge } from "@app/components/ui/badge";
import Footer from "@app/components/footer";

const AboutUs: FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the story of The Rising Gurkhas FC
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Club Introduction Card */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-3xl">The Rising Gurkhas FC</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 border-blue-900 text-blue-900"
                >
                  Est. 2012
                </Badge>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2012, The Rising Gurkhas FC has emerged as a
                formidable force in local football, embodying the legendary
                spirit, courage, and determination of the Gurkha warriors. Our
                club represents more than just football – we are a community
                united by passion, heritage, and an unwavering commitment to
                excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our humble beginnings to becoming championship contenders,
                we have consistently demonstrated the values that define us:
                pride, passion, and performance. Every match we play, we honor
                the legacy of resilience and strength that the Gurkha name
                carries.
              </p>
            </CardContent>
          </Card>

          {/* Recent Achievements Card */}
          <Card className="border-2 border-yellow-400 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-400">
              <CardTitle className="text-3xl text-gray-900">
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">Rewati Cup</span>
                <span className="text-4xl">🥇🥈🥇🥇🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">R&S Cup</span>
                <span className="text-4xl">🥇🥇🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">NAWS Cup</span>
                <span className="text-4xl">🥈🥇🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">Buddha Cup</span>
                <span className="text-4xl">🥇🥈</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">Fewa Cup</span>
                <span className="text-4xl">🥇🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">MIT Cup</span>
                <span className="text-4xl">🥈🥉</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">MFC Cup</span>
                <span className="text-4xl">🥇🥉</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">Thakali Cup</span>
                <span className="text-4xl">🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">TRCC Cup</span>
                <span className="text-4xl">🥇🥈</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">
                  Canberra Cup
                </span>
                <span className="text-4xl">🥇</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">GNC Shield</span>
                <span className="text-4xl">🥈🥈🥈🥉</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <span className="font-semibold text-gray-900">Sahara Cup</span>
                <span className="text-4xl">🥈🥇</span>
              </div>
            </CardContent>
          </Card>

          {/* Our Values Card */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-3xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6 bg-blue-50 border-2 border-blue-200">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-bold text-blue-900 mb-3">
                      Pride
                    </h4>
                    <p className="text-gray-700">
                      We take immense pride in our heritage and represent our
                      community with honor.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-yellow-50 border-2 border-yellow-400">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-bold text-blue-900 mb-3">
                      Passion
                    </h4>
                    <p className="text-gray-700">
                      Our love for the game fuels every training session and
                      every match we play.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-indigo-50 border-2 border-indigo-200">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-bold text-indigo-900 mb-3">
                      Performance
                    </h4>
                    <p className="text-gray-700">
                      We strive for excellence and push our limits to achieve
                      greatness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
