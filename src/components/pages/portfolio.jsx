import React from "react";

import Header from "../utils/header";
import Experience from "../utils/experience";
import Socials from "../utils/socials";

const Portfolio = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8 font-sans">
        <Header />
        <Experience />
        <Socials />
      </div>
    </div>
  );
};

export default Portfolio;
