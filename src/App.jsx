import React from "react";
import ThreeD from "./components/ThreeD/ThreeD";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
