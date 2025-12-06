import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";
import { Badge } from "@app/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";
import Header from "@app/components/header";
import Footer from "@app/components/footer";
import newsItems from "@app/data/news.json";
import jerseyRevealImage from "@app/assets/jerseyReveal.jpg";

const News: FC = () => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Match Report": "bg-green-100 text-green-800 hover:bg-green-200",
      "Transfer News": "bg-blue-100 text-blue-800 hover:bg-blue-200",
      "Club News": "bg-orange-100 text-orange-800 hover:bg-orange-200",
      Community: "bg-pink-100 text-pink-800 hover:bg-pink-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };

  const getNewsImage = (item: (typeof newsItems)[0]) => {
    return item.id === 3 ? jerseyRevealImage : item.image;
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Latest News
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest from The Rising Gurkhas FC
          </p>
        </div>

        {/* Featured News (First Item) */}
        <div className="mb-12">
          <Card
            onClick={() => navigate(`/news/${newsItems[0].id}`)}
            className="overflow-hidden border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={getNewsImage(newsItems[0])}
                  alt={newsItems[0].title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getCategoryColor(newsItems[0].category)}>
                      {newsItems[0].category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(newsItems[0].date)}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-blue-900 mb-3">
                    {newsItems[0].title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed truncateText line-clamp-7">
                    {newsItems[0].description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <div className="flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(1).map((news) => (
            <Card
              key={news.id}
              onClick={() => navigate(`/news/${news.id}`)}
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={getNewsImage(news)}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getCategoryColor(
                    news.category
                  )}`}
                >
                  {news.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(news.date)}
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {news.description}
                </CardDescription>
                <div className="flex items-center text-blue-700 font-semibold group-hover:text-blue-900 transition-colors">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
