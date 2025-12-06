import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@app/components/ui/badge";
import { Button } from "@app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@app/components/ui/card";
import { Separator } from "@app/components/ui/separator";
import { Calendar, ArrowLeft } from "lucide-react";
import Header from "@app/components/header";
import Footer from "@app/components/footer";
import newsItems from "@app/data/news.json";
import jerseyRevealImage from "@app/assets/jerseyReveal.jpg";

const NewsDetails: FC = () => {
  console.log("Jersey Reveal Image URL:", jerseyRevealImage);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const newsItem = newsItems.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            News Not Found
          </h1>
          <Button
            variant="ghost"
            onClick={() => navigate("/news")}
            className="text-blue-700 hover:text-blue-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Match Report": "bg-green-100 text-green-800",
      "Transfer News": "bg-blue-100 text-blue-800",
      "Club News": "bg-orange-100 text-orange-800",
      Community: "bg-pink-100 text-pink-800",
      Academy: "bg-purple-100 text-purple-800",
      Preview: "bg-yellow-100 text-yellow-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getNewsImage = (item: (typeof newsItems)[0]) => {
    return item.id === 3 ? jerseyRevealImage : item.image;
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen leading-tight font-sans w-full">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/news")}
          className="mb-8 text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to News
        </Button>

        {/* Article Container */}
        <Card className="overflow-hidden max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="w-full h-96 overflow-hidden">
            <img
              src={getNewsImage(newsItem)}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <CardHeader className="p-8 md:p-12">
            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              <Badge className={getCategoryColor(newsItem.category)}>
                {newsItem.category}
              </Badge>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{formatDate(newsItem.date)}</span>
              </div>
            </div>

            {/* Title */}
            <CardTitle className="text-3xl md:text-4xl text-blue-900 mb-6 leading-tight">
              {newsItem.title}
            </CardTitle>

            <Separator />
          </CardHeader>

          <CardContent className="px-8 md:px-12 pb-8 md:pb-12">
            {/* Description/Content */}
            <CardDescription className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {newsItem.description}
            </CardDescription>
          </CardContent>
        </Card>

        {/* Related News Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems
              .filter((item) => item.id !== newsItem.id)
              .slice(0, 3)
              .map((relatedNews) => (
                <Card
                  key={relatedNews.id}
                  onClick={() => {
                    navigate(`/news/${relatedNews.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getNewsImage(relatedNews)}
                      alt={relatedNews.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <Badge
                      className={`${getCategoryColor(
                        relatedNews.category
                      )} mb-2 w-fit`}
                    >
                      {relatedNews.category}
                    </Badge>
                    <CardTitle className="text-lg text-blue-900 line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">
                      {relatedNews.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {formatDate(relatedNews.date)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetails;
