import React from "react";
import Chapters from "./Chapters";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Stats from "./Stats";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Mission />
      <Chapters />
      <Footer />
    </>
  );
};

export default App;
