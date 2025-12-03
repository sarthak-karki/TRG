import Header from "@app/components/header";
import Footer from "@app/components/footer";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";

const News: FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            News
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest from The Rising Gurkhas FC
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardTitle className="text-3xl text-center">
                Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 pb-12">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-6">📰</div>
                <h2 className="text-3xl font-bold text-blue-900">
                  News Section Loading Up Soon...
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  We're preparing to bring you the latest news, match reports,
                  player interviews, and updates about The Rising Gurkhas FC.
                  Check back soon!
                </p>
                <div className="pt-6">
                  <div className="inline-flex items-center gap-2 text-yellow-600">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Under Construction</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
