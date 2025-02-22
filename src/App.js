import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const App = () => {
  return (
    // <Router
    //   basename={
    //     process.env.NODE_ENV === "production"
    //       ? process.env.PUBLIC_URL
    //       : "/portfolio" // ensure you include the leading slash if needed
    //   }
    // >
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/projects/:id" element={<ProjectDetailPage />} />
    //   </Routes>
    // </Router>

    // basename={
    //   process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/"
    // }
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
