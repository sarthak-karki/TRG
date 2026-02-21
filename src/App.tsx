import { HashRouter } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import HomePage from "@app/pages/homepage";
import AboutUs from "@app/pages/AboutUs";
import ContactUs from "@app/pages/ContactUs";
import News from "@app/pages/News";
import NewsDetails from "@app/pages/NewsDetails";

// Component to track page views with detailed metrics
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Get page title and custom event data based on route
    const getPageData = (pathname: string) => {
      switch (true) {
        case pathname === "/":
          return {
            title: "Home Page",
            event_category: "navigation",
            event_label: "homepage_view",
          };
        case pathname === "/about-us":
          return {
            title: "About Us Page",
            event_category: "navigation",
            event_label: "about_page_view",
          };
        case pathname === "/news":
          return {
            title: "News Page",
            event_category: "navigation",
            event_label: "news_page_view",
          };
        case pathname.startsWith("/news/"):
          const newsId = pathname.split("/news/")[1];
          return {
            title: `News Details - ${newsId}`,
            event_category: "navigation",
            event_label: "news_details_view",
            custom_parameters: { news_id: newsId },
          };
        case pathname === "/contact":
          return {
            title: "Contact Us Page",
            event_category: "navigation",
            event_label: "contact_page_view",
          };
        default:
          return {
            title: "Unknown Page",
            event_category: "navigation",
            event_label: "unknown_page_view",
          };
      }
    };

    const pageData = getPageData(location.pathname);

    // Build custom navigation event (not reserved 'page_view')
    const eventData: any = {
      action: 'page_navigation',
      category: pageData.event_category,
      label: pageData.event_label,
    };

    // Add custom parameters in GA4-compatible format
    if (pageData.custom_parameters) {
      eventData.custom_parameters = pageData.custom_parameters;
    }

    // Send custom navigation event
    ReactGA.event(eventData);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <HashRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
