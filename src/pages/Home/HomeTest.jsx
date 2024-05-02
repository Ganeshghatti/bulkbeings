// import React, { useRef, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import "./Home.scss";
// import HomeComponents from "./HomeComponents";
// import { Basiclogo4 } from "../../components/ThreeD/BasicLogo4";

// export default function Home() {
//   const contentRef = useRef(null);
//   const [canvasHeight, setCanvasHeight] = useState("100vh");

//   useEffect(() => {
//     const handleResize = () => {
//       if (contentRef.current) {
//         setCanvasHeight(`${contentRef.current.scrollHeight}px`);
//       }
//     };

//     // Calculate height on mount and update on window resize
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div ref={contentRef} style={{ position: "relative" }}>
//       <Canvas className="canvas" style={{ height: canvasHeight }} shadows>
//         <ambientLight />
//         <spotLight color="#B93D0A" position={[0, 10, 10]} intensity={1} />
//         <Basiclogo4 />
//       </Canvas>
//       <div className="absolute top-0 z-10 flex flex-col">
//         <HomeComponents />
//       </div>
//     </div>
//   );
// }
import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Home.scss";
import HomeComponents from "./HomeComponents";
import { Basiclogo4 } from "../../components/ThreeD/BasicLogo4";

export default function Home() {
  const contentRef = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState("100vh");
  return (
    <div ref={contentRef} className="root">
      <Canvas className="canvas" shadows flat linear>
        <ambientLight />
        <spotLight color="#B93D0A" position={[0, 10, 10]} intensity={1} />
        <Basiclogo4 />{" "}
      </Canvas>
      <div className="absolute top-0 z-10 flex flex-col">
        <HomeComponents />
      </div>{" "}
    </div>
  );
}
