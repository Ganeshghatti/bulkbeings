import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export function Basiclogo4() {
  const group = useRef();
  const { nodes, materials } = useGLTF("./public/assets/model/basiclogo3.glb");
  const { scrollYProgress } = useScroll();
  const tl = useRef();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  useFrame((state, delta) => {
    tl.current.seek(scrollYProgress * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    tl.current
      // .to(group.current.rotation, { y: -1 }, 2)
      .to(group.current.position, { x: 1 }, 2)

      // .to(group.current.rotation, { y: 1 }, 6)
      .to(group.current.position, { x: -1 }, 6)

      // .to(group.current.rotation, { y: 0 }, 11)
      // .to(group.current.rotation, { x: 1 }, 11)
      .to(group.current.position, { x: 0 }, 11)

      // .to(group.current.rotation, { y: 0 }, 13)
      // .to(group.current.rotation, { x: -1 }, 13)
      .to(group.current.position, { x: 0 }, 13)

      // .to(group.current.rotation, { y: 0 }, 16)
      // .to(group.current.rotation, { x: 0 }, 16)
      .to(group.current.position, { x: 0 }, 16)

      // .to(group.current.rotation, { y: 0 }, 20)
      // .to(group.current.rotation, { x: 0 }, 20)
      .to(group.current.position, { x: 0 }, 20);
  }, []);

  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.Middle001.geometry}
        material={materials["Material.003"]}
      />
    </group>
  );
}

useGLTF.preload("./public/assets/model/basiclogo3.glb");
