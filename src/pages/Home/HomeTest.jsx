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
import { Bulk_logo } from "../../components/ThreeD/Bulk_logo";
import MeshBlender from "../../components/svg/MeshBlender";
import mesh from "../../components/json/mesh.json"
import Lottie from "lottie-react";

export default function Home() {
  return (
    <Canvas>
      <spotLight />
      <ScrollControls pages={6} damping={0.25}>
        {/* <Logo /> */}
        {/* <Bulk_logo /> */}
        <Scroll html>
          <div className="w-screen">
            <section className="section">
              <div className="w-full h-1/2">
                {/* <MeshBlender /> */}
                <Lottie animationData={mesh} loop={true} />
              </div>
            </section>
            <section className="section" id="section2"></section>
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
