import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Logo } from "../../components/ThreeD/Logo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const logoRef = useRef();

  useEffect(() => {
    // Make sure the logoRef is not undefined and ScrollTrigger is ready
    if (!logoRef.current) return;

    // Assuming vertical (y) movement for #hero2
    gsap.to(logoRef.current.position, {
      scrollTrigger: {
        trigger: "#hero2",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      y: 1.25, // Move upwards as we scroll down; adjust value as needed
    });

    // Assuming horizontal (x) movement for #hero3
    gsap.to(logoRef.current.position, {
      scrollTrigger: {
        trigger: "#hero3",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      y: -1,
      x: 1, // Move to the right; adjust value as needed
    });

    // For #hero4, combining vertical and horizontal movement
    gsap.to(logoRef.current.position, {
      scrollTrigger: {
        trigger: "#hero4",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      x: -1, // Move to the left; adjust value as needed
      y: 2.5, // Move further up; adjust value as needed
    });
  }, [logoRef.current]); // Depend on logoRef.current to re-trigger effect if it changes

  return (
    <div id="hero-parent-container" className="relative">
      <div id="hero-container" className="flex flex-col relative">
        <section id="hero1" className="w-full h-screen border-red">
          <h1>Hero section</h1>
        </section>
        <section id="hero2" className="w-full h-screen border-red">
          <h1>Empty section</h1>
        </section>
        <section id="hero3" className="w-full h-screen border-red">
          <h1>5 Number Points</h1>
        </section>
        <section id="hero4" className="w-full h-screen border-red">
          <h1>5 Points section</h1>
        </section>
      </div>
      <div id="hero-logo" className="border">
        <Canvas shadows>
          <spotLight />
          <ambientLight intensity={1} />
          <directionalLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={3}
            castShadow
            shadow-mapSize={[2024, 2024]}
          />
          <pointLight position={[10, 0, 0]} />
          <Logo ref={logoRef} position={[0, 2.5, 0]} scale={0.2} />
        </Canvas>
      </div>
    </div>
  );
}
