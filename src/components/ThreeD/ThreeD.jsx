import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Logo } from "./Logo";
import { Testmodel } from "./Testmodel";
import { Logo2 } from "./Logo2";
import { Canvas } from "@react-three/fiber";

export default function ThreeD() {
  return (
    <Canvas
    //   style={{ width: "100%", height: "500px" }}
      shadows
      frameloop="demand"
      camera={{ position: [0, 0, 4] }}
      style={{ pointerEvents: "none" }}
    >
      {/* <OrbitControls /> */}
      {/* <Logo2 /> */}
      <Logo />
      {/* <Testmodel/> */}
    </Canvas>
  );
}
