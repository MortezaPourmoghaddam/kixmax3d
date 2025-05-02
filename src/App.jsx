import React from "react";
import BackGround from "./components/BackGround";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      <BackGround />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
