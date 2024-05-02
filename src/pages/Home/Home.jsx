import React, { useEffect, useRef, useState } from "react";
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
import MeshBlender from "../../components/svg/MeshBlender";
import mesh from "../../components/json/mesh.json";
import { Bulk_logo1 } from "../../components/ThreeD/Logo";
import Hero from "./Components/Hero";
import { Basiclogo } from "../../components/ThreeD/Basiclogo";
import { Basiclogo2 } from "../../components/ThreeD/Basiclogo2";
import { Basiclogo3 } from "../../components/ThreeD/BasiclogoScrollControls";
import Numbers from "./Components/Numbers";
import HomeComponents from "./HomeComponents";

export default function Home() {
  return (
    <Canvas>
      <ScrollControls pages={11} damping={0.25}>
        <spotLight color="#B93D0A" position={[0, 10, 10]} intensity={1} />
        <ambientLight />
        <Basiclogo3 />
        <Scroll html>
          <HomeComponents />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
