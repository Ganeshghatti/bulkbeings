import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Home.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HomeComponents from "./HomeComponents";
import { Basiclogo4 } from "../../components/ThreeD/BasicLogo4";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contentRef = useRef(null);

  return (
    <div className="parent">
      <Canvas className="canvas" camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <spotLight color="#B93D0A" position={[0, 10, 10]} intensity={1} />
        <Basiclogo4 />
      </Canvas>
      <div ref={contentRef} className="absolute top-0 z-10 flex flex-col">
        <HomeComponents />
      </div>{" "}
    </div>
  );
}
