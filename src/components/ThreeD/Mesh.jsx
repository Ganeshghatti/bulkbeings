import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Mesh = (props) => {
  const group = useRef();
  const scroll = useScroll();
  const [particles, setParticles] = useState([]);

  const radius = 0.01;
  const SEPARATION = 0.05,
    AMOUNTX = 150,
    AMOUNTY = 40;
  const waveAmplitude = 0.075; // Amplitude of the wave
  const waveFrequency = 0.1; // Frequency of the wave

  useEffect(() => {
    const initialParticles = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const posX = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const posY = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        initialParticles.push({ id: `${ix}-${iy}`, pos: [posX, posY, 0] });
      }
    }
    console.log(initialParticles);
    setParticles(initialParticles);
  }, []);

  useFrame((state, delta) => {
    const newParticles = particles.map((particle) => {
      const ix = parseInt(particle.id.split("-")[0], 10); // Extract ix from particle id
      const z =
        Math.sin(state.clock.elapsedTime + ix * waveFrequency) * waveAmplitude;
      return { ...particle, pos: [particle.pos[0], particle.pos[1], z] };
    });
    setParticles(newParticles);
  });

  return (
    <group
      ref={group}
      {...props}
      position={[-0.25, 0.5, 3.4]}
      rotation={[-12, 0, 0.05]}
    >
      {particles.length > 0 && (
        <>
          {particles.map((particle) => (
            <mesh key={particle.id} position={particle.pos}>
              <sphereGeometry args={[radius]} />
              <meshBasicMaterial color="#ff00ff" transparent opacity={0.5} />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
};

export default Mesh;
