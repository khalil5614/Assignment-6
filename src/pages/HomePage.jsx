import React from "react";
import Banner from "../components/home/Banner";
import Education from "../components/home/Education";
import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto space-y-3">
        <AboutMe />
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default HomePage;
