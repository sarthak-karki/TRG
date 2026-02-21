import { HashRouter } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import HomePage from "@app/pages/homepage";
import AboutUs from "@app/pages/AboutUs";
import ContactUs from "@app/pages/ContactUs";
import News from "@app/pages/News";
import NewsDetails from "@app/pages/NewsDetails";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname: string) => {
      switch (pathname) {
        case "/":
          return "Home Page";
        case "/about-us":
          return "About Us Page";
        case "/news":
          return "News Page";
        case "/contact":
          return "Contact Page";
        default:
          if (pathname.startsWith("/news/")) {
            return "News Article Page";
          }
          return "Page";
      }
    };

    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: getPageTitle(location.pathname),
    });
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
