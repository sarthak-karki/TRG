import { FC } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Badge } from "@app/components/ui/badge";
import { Calendar, ArrowLeft, Clock, ChevronRight, Share2 } from "lucide-react";
import Header from "@app/components/header";
import Footer from "@app/components/footer";
import newsItems from "@app/data/news.json";
import jerseyRevealImage from "@app/assets/jerseyReveal.jpg";

const NewsDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const newsItem = newsItems.find((item) => item.id === Number(id));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, { bg: string; text: string; border: string }> = {
      "Match Report": {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/30",
      },
      "Transfer News": {
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/30",
      },
      "Club News": {
        bg: "bg-[#f5a623]/20",
        text: "text-[#f5a623]",
        border: "border-[#f5a623]/30",
      },
      "Preview": {
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/30",
      },
      Community: {
        bg: "bg-pink-500/20",
        text: "text-pink-400",
        border: "border-pink-500/30",
      },
    };
    return styles[category] || { bg: "bg-white/10", text: "text-white/70", border: "border-white/20" };
  };

  const getNewsImage = (item: (typeof newsItems)[0]) => {
    return item.id === 3 ? jerseyRevealImage : item.image;
  };

  if (!newsItem) {
    return (
      <div className="bg-[#0a1929] min-h-screen font-sans w-full">
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">News Not Found</h1>
          <p className="text-white/60 mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/news")}
            className="btn-premium btn-gold px-8 py-4 rounded-full flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsItems
    .filter((item) => item.id !== newsItem.id)
    .slice(0, 3);

  const categoryStyle = getCategoryStyle(newsItem.category);

  return (
    <div className="bg-[#0a1929] min-h-screen font-sans w-full">
      <Header />

      {/* Hero Image Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={getNewsImage(newsItem)}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a1929]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/60 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-10">
          <button
            onClick={() => navigate("/news")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to News</span>
          </button>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                {newsItem.category}
              </Badge>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(newsItem.date)}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {newsItem.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: newsItem.title,
                    url: window.location.href,
                  });
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none">
            <div className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
              {newsItem.description}
            </div>
          </article>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

          {/* Tags/Category Footer */}
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm">Category:</span>
            <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
              {newsItem.category}
            </Badge>
          </div>
        </div>
      </section>

      {/* Related News Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent via-[#0f3460]/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">More Stories</h2>
            <Link
              to="/news"
              className="flex items-center gap-2 text-[#f5a623] hover:text-[#ffd93d] transition-colors text-sm font-semibold"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((news) => {
              const relatedCategoryStyle = getCategoryStyle(news.category);
              return (
                <article
                  key={news.id}
                  onClick={() => {
                    navigate(`/news/${news.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={getNewsImage(news)}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`${relatedCategoryStyle.bg} ${relatedCategoryStyle.text} border ${relatedCategoryStyle.border} text-xs`}>
                          {news.category}
                        </Badge>
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
                        <Calendar className="w-3 h-3" />
                        {formatDate(news.date)}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-[#f5a623] transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetails;
