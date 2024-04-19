import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Home.scss";

export default function HomeTest() {
  return (
    // <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={6} damping={0.25}>
          <Scroll html>
            <div className="w-screen">
              <section className="section"></section>
              <section className="section">
                <UseInView />
              </section>
              <section className="section"></section>
              <section className="section"></section>
              <section className="section"></section>
              <section className="section"></section>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    // </div>
  );
}

const UseInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full"
      style={{ border: "20px solid green" }}
    >
      <h1 className="relative z-0 text-3xl font-black uppercase">
        Show me on scroll
      </h1>
    </div>
  );
};
