import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export default function DotsAnimated() {
  const particles = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useEffect(() => {
    console.log(scroll.scroll.current);
  }, [scroll.scroll.current]);

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });
  useLayoutEffect(() => {
    if (particles.current) {
      console.log(particles.current);
      tl.current = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
      });
      tl.current
        .to(particles.current, {
          css: { transform: "translateY(40vh)" },
          duration: 2,
        })
        .to(particles.current, {
          css: { transform: "translateY(-20vh)" },
          duration: 4,
        })
        .to(particles.current, {
          css: { transform: "translateY(0)" },
          duration: 11,
        });
    } else {
      console.error("GSAP target not found. Ensure ref is attached.");
    }
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2000">
      <g ref={particles}>
        <path
          fill="none"
          stroke="#000"
          strokeLinejoin="bevel"
          strokeWidth={20.7}
          d="m961.641 537.628-1.827.18-1.756.533-1.619.865-1.419 1.165-1.165 1.419-.865 1.619-.533 1.756-.18 1.827.18 1.826.533 1.757.865 1.619 1.165 1.419 1.419 1.164 1.619.866 1.756.532 1.827.18 1.827-.18 1.756-.532 1.619-.866 1.419-1.164 1.164-1.419.866-1.619.532-1.757.18-1.826-.18-1.827-.533-1.756-.865-1.619-1.164-1.419-1.419-1.165-1.619-.865-1.757-.533-1.826-.18"
        />
      </g>
    </svg>
  );
}
