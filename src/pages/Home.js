import React from "react";
import Footer from "../components/Footer/Footer";
import VideoGrid from "../components/Grid/VideoGrid";
import Navbar from "../components/Navbar/Navbar";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/UI/Pagination";

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
