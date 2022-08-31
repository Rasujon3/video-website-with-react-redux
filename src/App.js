import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* page level content */}
        <Route path="/" element={<Home />} />
        <Route path="/videos/:vidoeId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
