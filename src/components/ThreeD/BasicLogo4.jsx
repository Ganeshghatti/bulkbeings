import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";
import { useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Basiclogo4() {
  const group = useRef();
  const { nodes, materials } = useGLTF("./public/assets/model/basiclogo3.glb");
  const { scrollYProgress } = useScroll();
  const tl = useRef();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const posY = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.585],
    [3.4, 2.75, 1.4, -4.3]
  );
  const posX = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.6],
    [0, 0.4, -0.4, -0.4]
  );
  const rotation = useTransform(
    scrollYProgress,
    [0, 0.16, 0.22, 0.295, 0.37, 0.445, 0.52, 0.585],
    [
      [0, 0, 0],
      [0, 0, 0],
      [Math.PI * 2, 0, 0],
      [0, Math.PI * 2, 0],
      [0, 0, Math.PI * 2],
      [Math.PI * 2, 0, Math.PI * 2],
      [0, Math.PI * 2, Math.PI * 2],
      [Math.PI * 2, Math.PI * 2, 0],
    ]
  );
  useFrame(() => {
    group.current.position.y = posY.get();
    group.current.position.x = posX.get();
    group.current.rotation.x = rotation.get()[0];
    group.current.rotation.y = rotation.get()[1];
    group.current.rotation.z = rotation.get()[2];
  });
  return (
    <motion.group ref={group} dispose={null}>
      <mesh
        geometry={nodes.Middle001.geometry}
        material={materials["Material.003"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.25, 0.25, 0.25]}
      />
    </motion.group>
  );
}

useGLTF.preload("./public/assets/model/basiclogo3.glb");
