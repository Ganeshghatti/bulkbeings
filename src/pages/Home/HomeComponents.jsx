import React from "react";
import Hero from "./Components/Hero";
import Numbers from "./Components/Numbers";
import Points from "./Components/Points";
import PointsTest from "./Components/PointsTest";
import CaseStudy from "./Components/CaseStudy";

export default function HomeComponents() {
  return (
    <>
      <Hero />
      <div className="empty-div"></div>
      <Numbers />
      <Points />
      <CaseStudy/>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
    </>
  );
}
