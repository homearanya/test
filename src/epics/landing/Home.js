import React from "react";
// import VideoPreview from "./features/VideoPreview";
import Hero from "./features/Hero";
import Features from "./features/Features";
import Learn from "./features/Learn";
import Quiz from "./features/Quiz";
import Research from "./features/Research";

const Home = () => (
  <div>
    <Hero />
    <Features />
    {/* <VideoPreview /> */}
    <Learn />
    <Quiz />
    <Research />
  </div>
);

export default Home;
