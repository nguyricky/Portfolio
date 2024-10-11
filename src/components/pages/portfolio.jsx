import React, { useState, useEffect } from "react";
import Header from "../utils/header";
import Experience from "../utils/experience";
import Socials from "../utils/socials";

const useSmoothAppear = (delay) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

const SmoothFadeIn = ({ children, delay }) => {
  const isVisible = useSmoothAppear(delay);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8 font-sans">
        <SmoothFadeIn delay={300}>
          <Header />
        </SmoothFadeIn>
        <SmoothFadeIn delay={800}>
          <Experience />
        </SmoothFadeIn>
        <SmoothFadeIn delay={1300}>
          <Socials />
        </SmoothFadeIn>
      </div>
    </div>
  );
};

export default Portfolio;