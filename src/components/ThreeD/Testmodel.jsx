/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/assets/model/testmodel.glb 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Testmodel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./public/assets/model/testmodel.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  console.log(actions, names);
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
        {/* <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 0.308, 0.143]} scale={[0.359, 0.319, 0.359]} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={6.618} /> */}
      </group>
    </group>
  );
}

useGLTF.preload("./public/assets/model/testmodel.glb");