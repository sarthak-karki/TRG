import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "@app/pages/homepage";
import AboutUs from "@app/pages/AboutUs";
import ContactUs from "@app/pages/ContactUs";
import Gallery from "@app/pages/Gallery";
import News from "@app/pages/News";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
