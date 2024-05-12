import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Home.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HomeComponents from "./HomeComponents";
import { Basiclogo4 } from "../../components/ThreeD/BasicLogo4";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="parent">
      <div className="canvasparent">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight />
          <spotLight color="#B93D0A" position={[0, 10, 10]} intensity={1} />
          <Basiclogo4 />
        </Canvas>
      </div>
      <div className="absolute top-0 z-10 flex flex-col w-full">
        <HomeComponents />
      </div>{" "}
    </div>
  );
}
