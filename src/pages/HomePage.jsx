import React from "react";
import Banner from "../components/home/Banner";
import Education from "../components/home/Education";
import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import ContactMe from "../components/home/ContactMe";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto space-y-4 mb-4">
        <AboutMe />
        <Education />
        <Experience />
        <ContactMe />
      </div>
    </div>
  );
};

export default HomePage;
