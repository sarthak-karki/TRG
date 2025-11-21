import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "@app/pages/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
