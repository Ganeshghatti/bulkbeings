import React, { useEffect, useRef } from "react";
// import { Logo } from "../../components/ThreeD/Logo";
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
import Mesh from "../../components/ThreeD/Mesh";
import Dots from "../../components/svg/DotsAnimated";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <ScrollControls pages={6} damping={0.1}>
        {/* <Mesh /> */}
        <pointLight />
        {/* <Logo scale={0.8} /> */}
        <Scroll html>
          <section className="section">
            <motion.div className="w-full h-1/2 border">
              <Dots isInView={isInView} />
            </motion.div>
          </section>
          <div ref={ref} className="w-12 h-12 border bg-red"/>

          <section className="section" id="section2"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </Scroll>
      </ScrollControls>
    </>
  );
}
