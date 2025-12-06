import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "@app/pages/homepage";
import AboutUs from "@app/pages/AboutUs";
import ContactUs from "@app/pages/ContactUs";
import News from "@app/pages/News";
import NewsDetails from "@app/pages/NewsDetails";

const App = () => {
  return (
    <HashRouter>
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
