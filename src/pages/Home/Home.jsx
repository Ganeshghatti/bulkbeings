import { useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import "./Home.scss";
import Hero from "./Hero";
import ThreeD from "../../components/ThreeD/ThreeD";
import { Logo } from "../../components/ThreeD/Logo";

export default function Home() {
  return (
    <div className="home" id="home">
      <Hero />
      <section className="h-screen w-full">
        <h1>Another section</h1>
      </section>
    </div>
  );
}

// export default function Home() {
//   const ref = useRef();
//   return (
//     <div ref={ref} className="container">
//       <div className="text">
//         "But afterwards there occurred violent earthquakes and floods; and in a
//         single day and night of rain all your warlike men in a body sank into
//         the earth, and the island of Atlantis in like manner disappeared, and
//         was sunk beneath the sea."
//       </div>
//       <Canvas shadows eventSource={ref}>
//         <spotLight />
//         <ambientLight intensity={1} />
//         <directionalLight
//           position={[10, 10, 10]}
//           angle={0.15}
//           penumbra={3}
//           castShadow
//           shadow-mapSize={[2024, 2024]}
//         />
//         <pointLight position={[10, 0, 0]} />
//         <Logo />
//       </Canvas>
//     </div>
//   );
// }
