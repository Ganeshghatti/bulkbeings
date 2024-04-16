import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Mesh = (props) => {
  const group = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const radius = 0.1; // Radius of each sphere, more visible
  const segments = 6; // Segments for the sphere

  const positions = [
    [-1, 1, 0], // Top-left corner
    [1, 1, 0],  // Top-right corner
    [-1, -1, 0], // Bottom-left corner
    [1, -1, 0]  // Bottom-right corner
  ];

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    tl.current
      .to(group.current.position, { x: 0, y: 0, z: 0 }, 0); // Ensures the group is centered initially
  }, []);

  return (
    <group ref={group} {...props} position={[0, 0, 0]}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[radius, segments, segments]} />
          <meshBasicMaterial color={0xff00ff} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

export default Mesh;
