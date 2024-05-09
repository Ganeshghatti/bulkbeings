import React from "react";
import Hero from "./Components/Hero";
import Numbers from "./Components/Numbers";
import Points from "./Components/Points";
import PointsTest from "./Components/PointsTest";
import CaseStudy from "./Components/CaseStudy";
import Partners from "./Components/Partners";
import GetAQuote from "./Components/GetAQuote";
import EcoSustainabilitySoftwares from "./Components/EcoSustainabilitySoftwares";
import Footer from "../Footer/Footer";

export default function HomeComponents() {
  return (
    <>
      <Hero />
      <div className="empty-div"></div>
      <Numbers />
      <Points />
      <CaseStudy/>
      <Partners/>
      <GetAQuote/>
      <EcoSustainabilitySoftwares/>
      <Footer/>
    </>
  );
}
