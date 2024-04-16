// import { useEffect, useState, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Logo } from "../../components/ThreeD/Logo";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const logoRef = useRef();

//   useEffect(() => {
//     // Make sure the logoRef is not undefined and ScrollTrigger is ready
//     if (!logoRef.current) return;
//     gsap.to(logoRef.current.position, {
//       scrollTrigger: {
//         trigger: "#hero2",
//         start: "top 70%",
//         end: "bottom 90%",
//         scrub: 1,
//         markers: true,
//       },
//       ease: "power1.out",
//       duration: 2,
//       y: 1.25,
//     });
//   }, [logoRef.current]);

//   useEffect(() => {
//     if (!logoRef.current) return;

//     console.log(logoRef.current.position);
//   }, [logoRef.current]);

//   return (
//     <div id="hero-parent-container" className="relative">
//       <div id="hero-container" className="flex flex-col relative">
//         <section id="hero1" className="w-full h-screen border-red">
//           <h1>Hero section</h1>
//         </section>
//         <section id="hero2" className="w-full h-screen border-red">
//           <h1>Empty section</h1>
//         </section>
//         <section id="hero3" className="w-full h-screen border-red">
//           <h1>5 Number Points</h1>
//         </section>
//         <section id="hero4" className="w-full h-screen border-red">
//           <h1>5 Points section</h1>
//         </section>
//       </div>
//       <div id="hero-logo" className="border">
//         <Canvas shadows>
//           <spotLight />
//           <ambientLight intensity={1} />
//           <directionalLight
//             position={[10, 10, 10]}
//             angle={0.15}
//             penumbra={3}
//             castShadow
//             shadow-mapSize={[2024, 2024]}
//           />
//           <pointLight position={[10, 0, 0]} />
//           <Logo ref={logoRef} position={[0, 2.5, 0]} scale={0.3} />
//         </Canvas>
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from "react";
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

export default function Hero() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <ScrollControls pages={6} damping={0.1}>
        <Mesh />
        {/* <Logo scale={0.8} /> */}
        <Scroll html>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </Scroll>
      </ScrollControls>
    </>
  );
}
