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
import Mesh from "../../components/svg/Mesh";
import SpaceshipTest from "../../components/svg/SpaceshipTest";
import { SpaceShipSvg } from "../../components/svg/SpaceShipSvg";
import DotsAnimated from "../../components/svg/DotsAnimated";

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
        <Logo />

        <Scroll html>
          <div className="w-screen">
            <div className="w-full h-64 absolute">
              <DotsAnimated />
            </div>

            <section className="section"></section>
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
