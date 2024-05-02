import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PointsTest() {
  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".page2", {
        scrollTrigger: {
          trigger: ".page2",
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: true
        }
      });
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);
  return (
    <div className="App" ref={component}>
      <div className="page">
        <h1>Demo</h1>
      </div>
      <div className="page2">
        <h1>Demo 2</h1>
      </div>
      <div className="page">
        <h1>Demo3</h1>
      </div>
    </div>
  );
}
