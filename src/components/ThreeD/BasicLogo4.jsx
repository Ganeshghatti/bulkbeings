import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

export function Basiclogo4(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./public/assets/model/basiclogo3.glb");
  const { camera, size } = useThree();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    camera.position.set(0, 0, 5); // Adjust this to ensure the camera is far enough to view the logo
    camera.lookAt(group.current.position); // Ensure the camera is looking at the origin or the center of the logo

    // Log current position for debugging
    // console.log(group.current.position);

    // group.current.position.set(-0.2, 0, 0);
    // group.current.rotation.set(0, 0, 0);
    group.current.scale.set(0.11, 0.11, 0.11);

    const handleResize = () => {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, size]);
  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        geometry={nodes.Middle001.geometry}
        material={materials["Material.003"]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./public/assets/model/basiclogo3.glb");
