import React from "react";
import ReactDOM from "react-dom/client";
import "@app/index.css";
import App from "@app/App";
import ReactGA from "react-ga4";

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false, // Disable automatic page view tracking
    },
  });
} else {
  console.warn("Google Analytics not initialized - measurement ID not found");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
