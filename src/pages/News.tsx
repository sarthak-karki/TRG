import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@app/components/ui/badge";
import { Calendar, ChevronRight, Clock, ArrowRight } from "lucide-react";
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

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <div className="bg-[#0a1929] min-h-screen font-sans w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
            Club Updates
          </span>
          <h1 className="text-display text-white mb-6">
            LATEST <span className="gradient-text-gold">NEWS</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest from The Rising Gurkhas FC
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/50 rounded-full blur-3xl" />
      </section>

      {/* Featured News */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div
            onClick={() => navigate(`/news/${featuredNews.id}`)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={getNewsImage(featuredNews)}
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a1929]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              {/* Featured Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#f5a623] text-[#0a1929] text-xs font-bold uppercase tracking-wider rounded-full">
                  Featured
                </span>
                <Badge className={`${getCategoryStyle(featuredNews.category).bg} ${getCategoryStyle(featuredNews.category).text} border ${getCategoryStyle(featuredNews.category).border}`}>
                  {featuredNews.category}
                </Badge>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#f5a623] transition-colors duration-300 max-w-3xl">
                {featuredNews.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 mb-6 max-w-2xl line-clamp-2 md:line-clamp-3">
                {featuredNews.description}
              </p>

              {/* Meta & CTA */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featuredNews.date)}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Clock className="w-4 h-4" />
                  5 min read
                </div>
                <div className="flex items-center gap-2 text-[#f5a623] font-semibold group-hover:gap-3 transition-all duration-300">
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-white/0 group-hover:ring-[#f5a623]/50 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="relative py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">More Stories</h2>
            <div className="h-px flex-1 max-w-[200px] mx-4 bg-gradient-to-r from-[#f5a623]/50 to-transparent" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((news) => {
              const categoryStyle = getCategoryStyle(news.category);
              return (
                <article
                  key={news.id}
                  onClick={() => navigate(`/news/${news.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={getNewsImage(news)}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                          {news.category}
                        </Badge>
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.date)}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#f5a623] transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">
                        {news.description}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-[#f5a623] text-sm font-semibold">
                        Read More
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#f5a623]/20 transition-all duration-300" />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More CTA (if needed in future) */}
          {newsItems.length > 4 && (
            <div className="mt-12 text-center">
              <button className="btn-premium btn-outline-gold px-8 py-3 rounded-full text-sm hover:text-[#0a1929]">
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
