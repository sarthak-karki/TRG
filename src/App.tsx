import {
  createHashRouter,
  RouterProvider,
  Outlet,
  useLocation,
  ScrollRestoration,
} from "react-router-dom";
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

const Layout = () => {
  return (
    <>
      <Analytics />
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsDetails /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
