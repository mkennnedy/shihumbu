import React from "react";

//sections

import TopNavbar from "../Components/Nav/TopNavbar";
import AboutPage from "../Components/Sections/About";
import About from "../Components/Sections/Aboutpage";
import Home from "../Components/Sections/Homepage";
import Counter from "../Components/Sections/counter";
import Academics from "../Components/Sections/Academic";
import Feature from "../Components/Sections/Feature";
import Updates from "../Components/Sections/Updates";
import Gallary from "../Components/Sections/Gallary";
import Footer from "../Components/Sections/Footer";
import Addmisions from "../Components/Sections/Addmisions";
import Team from "../Components/Sections/Team";
import Contact from "../Components/Sections/Contact";
export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Home />
      <About />
      <AboutPage />
      <Team />
      <Counter />
      <Feature />
      <Updates />
      <Gallary />
      <Academics />
      <Contact />

      <Footer />
    </>
  );
}
