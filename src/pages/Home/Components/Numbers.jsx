import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

export default function Numbers() {
  return (
    <section className="Numbers w-full flex items-center" id="Numbers">
      <div className="flex flex-col w-1/2 gap-4 items-start md:w-full md:items-center">
        <motion.p
          className="title md:text-center"
          
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >
          Affordable Software Solutions
        </motion.p>
        <motion.p
          className="desc md:text-center"
          
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >
          BulkBeings: Using quick, affordable, and risk-free software
          engineering solutions to accelerate tech innovation.
        </motion.p>
        <motion.div
          className="div1"
          
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >
          <p className="div1-title">100%</p>
          <p className="div1-desc">Satisfied Clients</p>
        </motion.div>
        <motion.div
          
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="div2"
        >
          <p className="div2-title">600K</p>
          <p className="div2-desc">Data-Managed</p>
        </motion.div>
        <motion.div
          
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
          className="div3"
        >
          <p className="div3-title">100+</p>
          <p className="div3-desc">Stacks</p>
        </motion.div>
      </div>
    </section>
  );
}
