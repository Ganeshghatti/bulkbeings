import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../../components/ThreeD/Logo";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  RoundedBox,
  ScrollControls,
  Scroll,
  Environment,
  Sparkles,
  Backdrop,
  Float,
  Ring,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Home.scss";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#6366F1"]
  );
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <ScrollControls pages={6} damping={0.25}>
        {/* <Logo /> */}
        <Scroll html>
          <div className="w-screen">
            <section className="section">
              <motion.div
                style={{
                  scaleX: scrollYProgress,
                  background,
                  x: "-50%",
                  y: "-5%",
                }}
                className="fixed left-1/2 top-1/3 h-4 w-screen bg-indigo-500"
              />
            </section>
            <section className="section"></section>
            <section className="section"></section>
            <section className="section"></section>
            <section className="section"></section>
            <section className="section"></section>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

