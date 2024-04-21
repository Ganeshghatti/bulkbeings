import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";

export default function MeshBlender() {
  const particles = useRef();
  const scroll = useScroll();
  const tl = useRef();
  const ref = useRef();
  const groupRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const scroll = state.camera.position.y / viewport.height;
    // GSAP to target all paths within the group using querySelectorAll
    const paths = groupRef.current.querySelectorAll('path');
    const timelineProgress = gsap.utils.mapRange(0, 6, 0, 1, scroll);
    
    paths.forEach((path) => {
      const translateY = gsap.utils.mapRange(0, 1, 0, 300, timelineProgress); // Map to desired range
      gsap.to(path, {
        attr: { transform: `translateY(${translateY}px)` },
        duration: 2,
        ease: "power1.inOut",
        overwrite: 'auto' // Ensures GSAP updates the animation appropriately on each frame
      });
    });
  });

  // useFrame(() => {
  //   if (tl.current) {
  //     tl.current.seek(scroll.offset * tl.current.duration());
  //   }
  // });
  // useLayoutEffect(() => {
  //   if (particles.current) {
  //     console.log(particles.current);
  //     tl.current = gsap.timeline({
  //       defaults: { duration: 2, ease: "power1.inOut" },
  //     });
  //     tl.current
  //       .to(particles.current, {
  //         y: 4,
  //         duration: 2,
  //       })
  //       .to(particles.current, {
  //         y: 6,
  //         duration: 4,
  //       });
  //   } else {
  //     console.error("GSAP target not found. Ensure ref is attached.");
  //   }
  // }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      <g
        id="ViewLayer_LineSet"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        inkscape:groupmode="lineset"
        inkscape:label="ViewLayer_LineSet"
      >
        <g
          id="frame_0003"
          inkscape:groupmode="frame"
          inkscape:label="frame_0003"
        >
          <g
            ref={groupRef}
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            inkscape:groupmode="layer"
            id="strokes"
            inkscape:label="strokes"
          >
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 791.086, 514.172 791.049, 514.225 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 796.405, 462.625 796.343, 462.674 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 797.247, 513.553 797.295, 513.548 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 798.917, 514.495 798.904, 514.514 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 801.736, 512.580 801.699, 512.609 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 820.696, 515.200 820.696, 515.201 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 861.654, 432.872 861.411, 433.221 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 863.997, 514.695 863.912, 514.685 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 870.636, 478.791 870.617, 478.793 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 970.041, 511.079 970.022, 510.966 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1028.881, 496.556 1029.072, 496.633 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1035.075, 495.852 1035.065, 495.865 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1049.202, 450.416 1049.308, 450.404 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1051.008, 495.097 1050.979, 495.109 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1057.927, 492.321 1057.864, 492.269 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1063.881, 450.239 1063.980, 450.277 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1076.978, 450.788 1077.288, 450.905 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1082.151, 442.560 1082.114, 442.564 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1093.404, 489.645 1093.559, 489.659 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1094.739, 489.425 1094.703, 489.472 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1113.928, 453.540 1114.328, 453.690 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1118.442, 443.199 1118.411, 443.267 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1118.354, 447.047 1118.682, 446.813 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1119.704, 450.530 1119.300, 450.701 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1121.076, 482.961 1120.911, 483.034 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1124.979, 481.215 1124.761, 481.194 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1129.845, 447.075 1130.028, 446.946 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1132.379, 442.203 1132.379, 442.203 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1134.562, 483.159 1134.722, 482.946 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1136.315, 513.369 1136.280, 513.341 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1140.062, 484.396 1140.127, 484.262 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1141.365, 441.942 1141.263, 441.985 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1142.121, 447.289 1142.191, 447.282 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1142.669, 452.701 1142.868, 452.855 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1150.171, 513.010 1150.184, 512.893 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1151.038, 444.542 1151.003, 444.860 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1155.410, 453.264 1155.422, 453.157 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1157.100, 452.435 1157.238, 452.251 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1159.953, 513.407 1159.947, 513.356 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1161.664, 448.569 1161.565, 448.306 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1163.272, 511.967 1163.198, 511.975 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1163.601, 485.248 1163.676, 485.090 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1163.842, 450.293 1163.419, 450.334 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1165.635, 513.222 1165.648, 513.221 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1168.004, 480.017 1168.061, 479.993 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1168.808, 477.244 1168.804, 477.238 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1174.111, 512.677 1174.143, 512.665 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1175.062, 485.151 1174.888, 485.169 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1177.921, 513.020 1177.848, 512.962 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1182.705, 512.042 1182.777, 511.952 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1187.569, 482.741 1187.476, 482.489 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1190.793, 477.896 1190.376, 477.741 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1191.349, 454.113 1191.348, 454.121 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1192.104, 402.960 1192.072, 402.939 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1192.284, 486.451 1192.035, 486.357 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1195.099, 458.164 1195.308, 458.144 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1197.750, 481.285 1197.751, 481.283 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1202.112, 485.912 1202.043, 485.919 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1202.922, 486.076 1202.915, 486.074 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1207.480, 480.169 1207.221, 480.495 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1207.536, 482.809 1207.543, 482.848 1207.576, 483.031 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1207.543, 482.848 1207.436, 482.808 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1211.690, 449.143 1211.398, 449.025 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1213.021, 482.049 1213.169, 481.714 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1216.273, 483.545 1216.278, 483.560 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1216.539, 483.424 1216.582, 483.482 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1221.630, 485.646 1221.668, 485.631 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1222.402, 508.065 1222.350, 508.045 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1222.319, 409.430 1222.104, 409.250 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1229.859, 507.772 1229.845, 507.859 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1232.582, 458.543 1232.557, 458.417 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1234.957, 509.639 1235.099, 509.540 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1235.520, 482.559 1235.529, 482.503 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1237.096, 412.303 1237.069, 412.280 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1240.271, 506.428 1240.183, 506.361 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1241.450, 484.996 1241.410, 484.982 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1248.714, 457.777 1248.623, 457.991 1248.598, 458.049 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1249.926, 483.190 1250.122, 483.054 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1250.327, 483.328 1250.299, 483.485 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1250.764, 485.515 1250.682, 485.306 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1253.319, 485.402 1253.353, 485.379 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1253.896, 484.112 1253.861, 483.924 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1255.565, 423.348 1255.269, 423.297 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1259.601, 480.967 1259.634, 480.887 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1261.739, 506.921 1261.663, 506.974 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1262.244, 485.377 1262.254, 485.366 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1268.421, 459.980 1268.411, 459.926 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1272.620, 462.335 1272.498, 462.419 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1272.888, 502.708 1272.883, 502.677 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1276.243, 420.250 1276.216, 420.235 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1277.165, 505.132 1277.175, 505.136 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1277.329, 480.593 1277.334, 480.564 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1278.740, 486.406 1278.938, 486.333 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1282.427, 461.863 1282.743, 461.906 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1285.990, 502.221 1285.897, 502.232 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1288.490, 503.867 1288.617, 503.727 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1289.623, 504.352 1289.608, 504.388 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1295.743, 501.052 1295.755, 501.126 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1298.908, 424.725 1298.868, 424.642 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1300.592, 424.694 1300.561, 424.881 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1309.337, 501.490 1309.385, 501.438 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1310.550, 465.329 1310.547, 465.311 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1310.542, 465.312 1310.547, 465.311 1310.760, 465.289 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1311.319, 421.243 1310.676, 421.512 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1312.620, 471.000 1312.700, 471.000 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1315.982, 467.638 1315.898, 467.563 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1316.382, 503.691 1316.443, 503.767 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1316.980, 468.237 1316.912, 468.244 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1320.706, 463.214 1320.625, 463.411 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1327.861, 426.644 1327.882, 426.686 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1330.705, 465.003 1330.688, 464.884 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1330.639, 465.491 1330.700, 465.066 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1332.660, 481.551 1332.648, 481.561 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1335.114, 470.589 1335.053, 470.574 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1346.643, 502.730 1346.649, 502.728 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1353.546, 474.155 1353.695, 474.048 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1358.484, 473.006 1358.594, 472.967 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1361.298, 426.242 1361.311, 426.212 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1361.312, 426.212 1361.299, 426.242 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1361.759, 470.341 1361.772, 470.236 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1366.324, 471.853 1366.234, 472.054 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1366.823, 503.549 1366.858, 503.564 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1366.795, 503.570 1366.823, 503.549 1366.854, 503.528 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1366.221, 432.882 1366.853, 432.822 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1370.753, 503.430 1370.865, 503.349 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1373.000, 502.857 1373.003, 502.883 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1374.649, 503.337 1374.730, 503.280 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1374.694, 503.733 1374.765, 503.710 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1384.962, 486.400 1385.079, 486.467 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1389.345, 485.907 1389.330, 486.057 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1393.661, 487.625 1393.686, 487.841 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1395.030, 427.989 1395.144, 427.738 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1395.343, 428.640 1395.331, 428.758 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1395.377, 429.980 1395.365, 429.875 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1398.566, 504.616 1398.560, 504.680 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1402.299, 429.044 1402.316, 428.866 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1402.721, 427.986 1402.964, 428.226 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1409.689, 488.478 1409.751, 488.349 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1410.234, 428.510 1410.069, 428.866 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1410.370, 470.428 1410.422, 470.371 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1410.744, 486.610 1410.695, 486.664 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1414.927, 506.464 1414.901, 506.412 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1415.176, 488.384 1415.184, 488.391 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1418.214, 488.430 1418.226, 488.286 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1419.630, 489.529 1419.773, 489.672 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1423.929, 489.994 1423.924, 490.057 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1434.047, 508.025 1434.021, 507.999 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1435.243, 468.947 1435.368, 468.858 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1440.964, 508.523 1440.955, 508.459 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1444.002, 476.392 1444.340, 476.155 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1445.840, 422.961 1445.812, 422.991 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1448.716, 421.654 1448.378, 421.687 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1448.917, 511.328 1448.996, 511.349 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1449.060, 494.443 1449.082, 494.448 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1449.254, 493.915 1449.247, 493.930 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1450.277, 470.287 1450.178, 470.090 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1452.418, 510.178 1452.430, 510.185 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1454.438, 493.529 1454.439, 493.531 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1454.858, 466.408 1454.702, 466.330 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1456.915, 421.509 1455.997, 421.598 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1461.941, 495.025 1461.786, 495.129 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1462.154, 421.995 1461.974, 422.195 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1463.532, 494.789 1463.545, 494.764 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1468.578, 424.853 1468.679, 424.844 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1470.996, 495.452 1471.104, 495.381 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1474.182, 495.825 1473.984, 495.885 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1474.685, 495.749 1474.715, 495.693 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1481.783, 495.146 1481.783, 495.148 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1485.792, 496.283 1485.732, 496.301 1485.712, 496.307 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1486.012, 416.818 1485.982, 416.814 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1491.858, 422.692 1491.582, 422.890 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1493.509, 422.162 1493.032, 422.207 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1494.209, 464.541 1494.136, 464.679 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1495.212, 496.015 1495.204, 495.999 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1498.954, 497.205 1498.909, 497.114 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1508.847, 497.352 1508.840, 497.353 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1512.028, 497.664 1512.019, 497.664 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1512.564, 509.582 1512.556, 509.587 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1515.200, 498.065 1515.193, 498.064 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1518.259, 498.463 1518.134, 498.436 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1518.758, 499.996 1518.961, 499.937 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1520.768, 498.669 1520.756, 498.676 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1520.801, 498.701 1520.761, 498.699 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1527.850, 412.671 1527.385, 412.836 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1532.366, 500.912 1532.393, 500.881 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1534.773, 465.435 1534.887, 465.360 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1542.643, 501.310 1542.644, 501.301 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1558.107, 501.984 1558.100, 502.030 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1561.041, 468.558 1561.128, 468.599 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1563.707, 503.156 1563.806, 503.204 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1565.120, 511.343 1565.175, 511.227 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1567.424, 436.198 1567.280, 436.293 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1568.568, 502.675 1568.563, 502.685 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1575.482, 438.839 1575.444, 438.851 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1584.960, 502.476 1584.931, 502.508 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1585.866, 502.696 1585.847, 502.737 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1587.908, 461.560 1587.792, 461.804 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1592.386, 502.472 1592.370, 502.482 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1594.581, 503.658 1594.677, 503.630 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1598.384, 502.734 1598.149, 502.620 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1601.201, 463.532 1601.161, 463.758 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1602.381, 503.187 1602.380, 503.193 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1602.352, 503.453 1602.384, 503.434 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1617.885, 502.460 1617.867, 502.502 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1618.139, 501.549 1618.089, 501.578 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1623.430, 501.751 1623.425, 501.762 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1634.139, 501.091 1634.131, 501.092 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1634.201, 390.968 1633.589, 390.886 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1636.890, 500.861 1636.859, 500.894 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1637.768, 393.502 1637.297, 393.439 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1674.771, 497.796 1674.755, 497.798 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1690.236, 496.804 1690.185, 496.780 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1698.786, 454.757 1698.741, 454.783 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1741.063, 424.886 1740.943, 424.833 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1746.618, 458.359 1746.597, 458.360 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1765.661, 456.433 1765.519, 456.724 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1768.016, 423.452 1767.708, 423.227 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1776.685, 457.331 1776.715, 457.479 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1795.948, 456.878 1795.942, 456.953 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1820.453, 455.155 1820.467, 455.230 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1820.667, 450.281 1820.665, 450.310 "
            />
            <path
              fill="#FF5C00"
              strokeWidth={3}
              strokeLinecap="butt"
              strokeOpacity={1}
              stroke="#FF5C00"
              strokeLinejoin="round"
              d=" M 1838.075, 452.739 1838.234, 452.442 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1252.880, 517.528 1252.819, 517.679 1252.783, 517.880 1252.817, 518.061 1252.866, 518.189 1252.972, 518.332 1253.142, 518.463 1253.345, 518.540 1253.531, 518.558 1253.679, 518.540 1253.859, 518.477 1254.021, 518.363 1254.152, 518.215 1254.219, 518.048 1254.256, 517.847 1254.221, 517.666 1254.173, 517.538 1254.106, 517.448 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1203.228, 519.005 1203.245, 519.052 1203.353, 519.202 1203.526, 519.338 1203.734, 519.418 1203.923, 519.437 1204.081, 519.418 1204.259, 519.353 1204.432, 519.234 1204.559, 519.080 1204.635, 518.906 1204.667, 518.697 1204.637, 518.523 1204.593, 518.403 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1203.780, 518.006 1203.746, 518.010 1203.568, 518.075 1203.515, 518.111 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1155.057, 514.097 1155.078, 513.914 1155.054, 513.735 1154.993, 513.581 1154.883, 513.426 1154.707, 513.285 1154.495, 513.203 1154.302, 513.183 1154.135, 513.203 1153.960, 513.271 1153.778, 513.394 1153.654, 513.555 1153.569, 513.735 1153.544, 513.952 1153.568, 514.131 1153.575, 514.150 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1105.096, 519.132 1105.080, 519.125 1104.886, 519.105 1104.711, 519.125 1104.541, 519.194 1104.350, 519.320 1104.226, 519.486 1104.140, 519.669 1104.120, 519.874 1104.121, 519.891 1104.138, 520.075 1104.205, 520.232 1104.225, 520.261 1104.315, 520.392 1104.492, 520.536 1104.704, 520.621 1104.898, 520.641 1105.073, 520.621 1105.243, 520.553 1105.434, 520.426 1105.558, 520.260 1105.644, 520.077 1105.649, 520.026 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1055.420, 513.355 1055.261, 513.373 1055.098, 513.444 1055.063, 513.459 1054.899, 513.572 1054.768, 513.740 1054.688, 513.927 1054.662, 514.134 1054.686, 514.340 1054.768, 514.529 1054.869, 514.662 1055.045, 514.809 1055.257, 514.895 1055.450, 514.915 1055.632, 514.895 1055.794, 514.824 1055.829, 514.808 1055.993, 514.695 1056.059, 514.611 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 427.896, 519.033 427.939, 519.043 428.033, 519.056 428.113, 519.049 428.176, 519.043 428.279, 519.016 428.439, 518.934 428.549, 518.825 428.611, 518.698 428.635, 518.579 428.615, 518.436 428.562, 518.326 428.465, 518.210 428.316, 518.117 428.200, 518.082 428.156, 518.072 428.063, 518.059 427.983, 518.066 427.919, 518.072 427.816, 518.098 427.656, 518.181 427.546, 518.290 427.485, 518.417 427.460, 518.536 427.480, 518.679 427.533, 518.789 427.631, 518.905 427.780, 518.999 427.896, 519.033 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 393.992, 513.011 394.049, 513.024 394.155, 513.039 394.253, 513.032 394.323, 513.024 394.448, 512.995 394.635, 512.900 394.763, 512.774 394.824, 512.653 394.833, 512.627 394.866, 512.490 394.840, 512.324 394.780, 512.198 394.664, 512.063 394.487, 511.954 394.355, 511.915 394.298, 511.902 394.192, 511.887 394.093, 511.894 394.024, 511.902 393.898, 511.931 393.711, 512.026 393.583, 512.151 393.523, 512.273 393.513, 512.299 393.481, 512.436 393.506, 512.602 393.566, 512.728 393.682, 512.863 393.859, 512.972 393.992, 513.011 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 356.128, 504.792 356.008, 504.757 355.933, 504.740 355.813, 504.723 355.692, 504.730 355.617, 504.740 355.463, 504.772 355.244, 504.881 355.198, 504.927 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 312.383, 504.330 312.334, 504.278 312.084, 504.132 311.913, 504.080 311.817, 504.061 311.682, 504.042 311.532, 504.049 311.454, 504.061 311.265, 504.098 311.010, 504.223 310.837, 504.390 310.741, 504.549 310.691, 504.767 310.722, 504.952 310.735, 504.988 310.807, 505.155 310.973, 505.335 311.224, 505.481 311.394, 505.533 311.491, 505.552 311.626, 505.571 311.775, 505.563 311.854, 505.551 312.042, 505.515 312.297, 505.390 312.470, 505.223 312.565, 505.063 312.574, 505.023 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 260.788, 494.555 260.914, 494.580 261.063, 494.601 261.247, 494.595 261.558, 494.540 261.854, 494.399 262.013, 494.248 262.054, 494.209 262.172, 494.028 262.226, 493.780 262.197, 493.570 262.093, 493.337 261.896, 493.128 261.598, 492.959 261.407, 492.901 261.282, 492.876 261.132, 492.855 260.949, 492.860 260.637, 492.915 260.341, 493.056 260.181, 493.208 260.141, 493.247 260.022, 493.427 259.968, 493.676 259.997, 493.886 260.102, 494.120 260.299, 494.328 260.597, 494.497 260.788, 494.555 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 201.548, 486.572 201.298, 486.614 200.953, 486.776 200.752, 486.947 200.570, 487.198 200.513, 487.484 200.539, 487.724 200.669, 487.992 200.906, 488.231 201.120, 488.351 201.262, 488.426 201.476, 488.492 201.639, 488.523 201.804, 488.546 202.032, 488.541 202.396, 488.480 202.740, 488.318 202.940, 488.147 203.122, 487.896 203.179, 487.611 203.153, 487.371 203.024, 487.104 202.962, 487.041 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 130.806, 481.819 130.619, 481.904 130.367, 482.097 130.161, 482.383 130.104, 482.679 130.103, 482.708 130.122, 482.980 130.283, 483.286 130.567, 483.559 130.804, 483.695 130.992, 483.782 131.228, 483.857 131.440, 483.893 131.621, 483.919 131.903, 483.916 132.327, 483.846 132.728, 483.663 132.978, 483.470 133.184, 483.184 133.240, 482.889 133.242, 482.860 133.223, 482.588 133.063, 482.283 132.779, 482.009 132.639, 481.929 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 45.619, 474.593 45.653, 474.939 45.790, 475.188 45.856, 475.290 46.043, 475.479 46.202, 475.605 46.463, 475.759 46.715, 475.863 46.976, 475.947 47.255, 475.992 47.451, 476.021 47.807, 476.020 48.306, 475.942 48.706, 475.764 48.776, 475.733 49.094, 475.515 49.329, 475.189 49.412, 474.853 49.379, 474.507 49.242, 474.259 49.177, 474.156 48.990, 473.968 48.832, 473.842 48.571, 473.688 48.440, 473.634 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1065.345, 380.902 1064.852, 381.314 1064.078, 382.249 1063.592, 383.476 1063.441, 384.605 1063.460, 384.791 1063.577, 385.932 1064.010, 386.965 1064.665, 387.888 1065.192, 388.296 1065.719, 388.704 1066.723, 389.112 1067.260, 389.204 1068.012, 389.333 1069.221, 389.148 1070.393, 388.691 1070.810, 388.348 1071.388, 387.874 1072.159, 386.936 1072.652, 385.711 1072.738, 385.036 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1203.510, 378.865 1203.418, 378.851 1202.146, 379.036 1201.093, 379.465 1200.007, 380.249 1199.335, 381.137 1199.232, 381.336 1198.764, 382.302 1198.578, 383.689 1198.756, 384.632 1198.828, 384.917 1198.957, 385.260 1199.089, 385.614 1199.749, 386.490 1200.345, 386.993 1200.807, 387.263 1201.624, 387.652 1202.855, 387.849 1202.929, 387.860 1204.200, 387.684 1205.251, 387.251 1206.343, 386.474 1207.011, 385.584 1207.127, 385.391 1207.590, 384.420 1207.784, 383.031 1207.598, 382.086 1207.538, 381.797 1207.426, 381.508 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1338.408, 388.413 1339.727, 388.247 1340.898, 387.735 1341.834, 387.104 1342.709, 386.081 1343.200, 384.867 1343.345, 383.851 1343.188, 382.685 1342.630, 381.596 1341.738, 380.715 1340.458, 380.093 1339.142, 379.900 1337.823, 380.074 1336.886, 380.480 1336.656, 380.593 1335.718, 381.221 1334.852, 382.247 1334.371, 383.458 1334.219, 384.470 1334.380, 385.630 1334.937, 386.714 1335.824, 387.593 1337.097, 388.216 1338.408, 388.413 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1474.433, 388.725 1475.786, 388.568 1477.023, 388.086 1477.849, 387.492 1478.175, 387.216 1478.800, 386.529 1479.370, 385.386 1479.504, 384.177 1479.337, 383.331 1479.186, 383.019 1478.833, 382.306 1477.961, 381.476 1476.695, 380.890 1475.382, 380.708 1474.028, 380.871 1472.794, 381.359 1471.968, 381.950 1471.652, 382.233 1471.025, 382.916 1470.463, 384.057 1470.336, 385.260 1470.495, 386.103 1470.998, 387.123 1471.865, 387.951 1473.125, 388.539 1474.433, 388.725 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1607.142, 386.226 1606.982, 387.156 1607.241, 388.235 1607.680, 388.906 1607.928, 389.160 1608.523, 389.684 1609.763, 390.236 1611.061, 390.412 1611.482, 390.367 1612.436, 390.266 1613.724, 389.815 1614.934, 389.000 1615.732, 388.044 1616.096, 387.283 1616.192, 386.737 1616.296, 386.149 1616.039, 385.063 1615.590, 384.392 1615.348, 384.134 1614.742, 383.613 1613.496, 383.061 1612.194, 382.889 1611.750, 382.938 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1745.245, 411.266 1745.418, 412.117 1746.060, 412.983 1746.758, 413.499 1747.009, 413.607 1747.975, 414.026 1748.986, 414.164 1749.257, 414.201 1750.057, 414.141 1750.644, 414.082 1751.972, 413.680 1753.228, 412.938 1754.066, 412.057 1754.133, 411.913 1754.522, 411.083 1754.614, 410.285 1754.589, 410.163 1754.411, 409.274 1753.765, 408.403 1753.071, 407.901 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1885.002, 407.513 1884.478, 407.799 1883.621, 408.619 1883.129, 409.523 1883.058, 410.403 1883.252, 411.199 1883.849, 412.005 1883.953, 412.070 1884.630, 412.485 1884.829, 412.604 1885.813, 412.975 1887.069, 413.138 1887.945, 413.082 1888.453, 413.026 1889.130, 412.848 1889.801, 412.652 1890.413, 412.329 1890.638, 412.205 1891.084, 411.959 1891.949, 411.139 1892.449, 410.231 1892.524, 409.346 1892.323, 408.547 1891.723, 407.736 1891.537, 407.622 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 3.142, 416.511 3.805, 416.669 4.231, 416.717 4.882, 416.754 5.063, 416.765 6.131, 416.621 6.193, 416.613 7.126, 416.275 8.001, 415.731 8.523, 415.001 8.730, 414.283 8.640, 413.489 8.343, 412.946 8.171, 412.677 7.765, 412.275 7.379, 411.941 6.807, 411.613 6.205, 411.320 5.633, 411.147 5.050, 411.004 4.971, 410.984 4.545, 410.938 3.713, 410.885 2.580, 411.035 2.361, 411.113 1.639, 411.369 1.360, 411.542 0.759, 411.914 0.235, 412.648 0.135, 412.986 0.022, 413.368 0.099, 414.020 0.116, 414.166 0.204, 414.326 0.414, 414.712 0.591, 414.982 0.997, 415.385 1.390, 415.718 1.962, 416.048 2.569, 416.337 3.142, 416.511 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 135.456, 406.383 135.956, 406.431 136.733, 406.493 137.901, 406.333 138.772, 405.978 139.005, 405.853 139.690, 405.392 140.258, 404.602 140.408, 403.832 140.420, 403.686 140.365, 402.970 139.927, 402.085 139.147, 401.284 137.982, 400.604 136.749, 400.232 136.249, 400.186 135.471, 400.118 134.300, 400.276 133.421, 400.626 133.191, 400.756 132.497, 401.214 131.927, 402.007 131.771, 402.781 131.766, 402.928 131.818, 403.648 132.262, 404.536 133.049, 405.338 134.221, 406.015 135.456, 406.383 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 268.017, 403.743 267.021, 403.650 265.816, 403.822 264.669, 404.340 264.051, 404.838 263.432, 405.694 263.222, 406.685 263.337, 407.463 263.440, 407.716 263.741, 408.418 264.506, 409.281 265.658, 410.008 266.880, 410.401 267.462, 410.454 268.167, 410.516 269.369, 410.342 270.511, 409.823 271.120, 409.323 271.283, 409.103 271.736, 408.472 271.948, 407.485 271.829, 406.711 271.734, 406.459 271.432, 405.760 270.674, 404.898 270.078, 404.519 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 400.703, 411.930 400.290, 411.784 399.002, 411.661 397.770, 411.849 396.588, 412.409 395.780, 413.186 395.397, 413.871 395.257, 414.432 395.131, 414.934 395.289, 416.003 395.294, 416.037 395.381, 416.212 395.672, 416.795 395.869, 417.070 396.276, 417.561 396.405, 417.716 396.868, 418.037 397.522, 418.490 398.245, 418.740 398.321, 418.767 398.716, 418.904 398.861, 418.917 399.457, 418.972 400.003, 419.022 401.095, 418.852 401.231, 418.831 401.672, 418.620 402.242, 418.349 402.408, 418.270 402.538, 418.145 403.211, 417.495 403.282, 417.365 403.515, 416.939 403.574, 416.832 403.586, 416.810 403.658, 416.553 403.853, 415.753 403.780, 415.240 403.757, 415.081 403.723, 414.846 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 530.356, 411.123 529.445, 411.573 529.386, 411.603 528.549, 412.434 528.531, 412.471 528.186, 413.168 528.048, 413.447 527.931, 414.304 527.944, 414.518 527.969, 414.813 528.028, 415.484 528.414, 416.320 528.539, 416.589 528.568, 416.620 528.844, 416.919 529.062, 417.154 529.179, 417.280 529.413, 417.512 529.753, 417.756 530.245, 418.108 531.049, 418.418 531.394, 418.551 532.668, 418.678 533.913, 418.473 535.117, 417.874 535.949, 417.045 536.123, 416.694 536.233, 416.472 536.449, 416.037 536.505, 415.605 536.536, 415.365 536.559, 415.183 536.558, 414.970 536.557, 414.960 536.545, 414.834 536.468, 414.008 535.965, 412.904 535.323, 412.218 535.098, 411.979 534.265, 411.387 533.642, 411.142 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 663.582, 392.461 664.045, 392.766 664.990, 393.168 665.546, 393.238 666.233, 393.324 667.486, 393.120 668.707, 392.494 669.186, 392.024 669.261, 391.943 669.563, 391.617 669.817, 391.199 669.998, 390.804 670.119, 390.542 670.310, 389.392 670.299, 389.336 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 795.547, 394.819 795.437, 394.971 795.077, 395.946 794.946, 396.899 795.090, 398.271 795.615, 399.416 796.306, 400.305 797.322, 401.059 798.391, 401.490 798.782, 401.541 799.596, 401.648 800.852, 401.427 801.722, 401.048 802.744, 400.267 803.349, 399.429 803.379, 399.387 803.744, 398.416 803.866, 397.464 803.730, 396.095 803.212, 394.947 802.517, 394.061 801.506, 393.300 800.435, 392.872 799.925, 392.802 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 994.780, 423.776 994.482, 424.549 994.272, 425.754 994.345, 426.252 994.448, 426.957 994.652, 427.441 994.862, 427.939 995.373, 428.623 995.478, 428.764 996.429, 429.539 997.575, 429.977 998.587, 430.107 999.649, 429.972 1000.276, 429.724 1000.768, 429.530 1001.497, 428.917 1001.695, 428.751 1002.322, 427.978 1002.367, 427.923 1002.740, 426.939 1002.769, 426.818 1002.956, 425.735 1002.918, 425.461 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 991.773, 438.207 991.585, 438.697 991.474, 439.333 991.414, 439.682 991.451, 439.931 991.550, 440.594 991.561, 440.666 991.883, 441.442 991.901, 441.485 992.411, 442.154 993.065, 442.692 993.194, 442.798 994.138, 443.164 994.976, 443.262 994.979, 443.262 995.849, 443.160 996.452, 442.919 996.774, 442.791 997.138, 442.488 997.471, 442.213 997.539, 442.144 997.616, 442.050 997.962, 441.629 998.090, 441.472 998.400, 440.653 998.419, 440.570 998.443, 440.430 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 989.508, 449.787 989.346, 450.211 989.203, 451.029 989.231, 451.211 989.295, 451.635 989.300, 451.663 989.305, 451.696 989.319, 451.787 989.328, 451.846 989.341, 451.880 989.356, 451.915 989.372, 451.954 989.610, 452.536 989.621, 452.549 990.039, 453.088 990.693, 453.629 991.481, 453.939 991.941, 453.988 992.183, 454.015 992.421, 453.989 992.772, 453.951 992.911, 453.936 993.088, 453.865 993.387, 453.744 993.685, 453.624 993.701, 453.611 994.034, 453.338 994.266, 453.148 994.326, 453.080 994.413, 452.974 994.784, 452.526 994.792, 452.507 995.045, 451.836 995.057, 451.778 995.190, 451.018 995.173, 450.900 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 987.915, 452.976 987.776, 453.145 987.553, 453.728 987.524, 453.899 987.434, 454.417 987.464, 454.612 987.540, 455.105 987.686, 455.463 987.777, 455.688 988.140, 456.151 988.576, 456.513 988.691, 456.609 989.355, 456.871 989.948, 456.933 990.329, 456.893 990.561, 456.869 990.789, 456.777 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 986.243, 464.095 986.102, 464.464 986.001, 465.046 986.088, 465.606 986.091, 465.627 986.293, 466.126 986.602, 466.515 986.629, 466.538 987.070, 466.906 987.635, 467.131 988.140, 467.180 988.660, 467.130 989.216, 466.903 989.259, 466.869 989.630, 466.569 989.985, 466.141 990.003, 466.120 990.192, 465.620 990.294, 465.039 990.242, 464.699 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 984.997, 477.088 984.899, 477.347 984.813, 477.840 984.825, 477.914 984.861, 478.141 984.891, 478.333 984.963, 478.515 985.063, 478.764 985.328, 479.091 985.389, 479.149 985.404, 479.161 985.728, 479.428 986.210, 479.623 986.651, 479.664 987.087, 479.622 987.202, 479.574 987.562, 479.425 987.787, 479.247 987.915, 479.146 988.053, 478.979 988.235, 478.759 988.249, 478.722 988.396, 478.328 988.400, 478.309 988.484, 477.835 988.460, 477.681 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 984.476, 487.785 984.296, 487.926 984.022, 488.259 983.882, 488.631 983.809, 489.051 983.875, 489.471 984.023, 489.843 984.250, 490.120 984.302, 490.176 984.307, 490.179 984.593, 490.410 985.007, 490.579 985.385, 490.616 985.758, 490.579 986.167, 490.408 986.313, 490.295 986.469, 490.173 986.743, 489.839 986.882, 489.467 986.884, 489.457 986.956, 489.047 986.890, 488.627 986.742, 488.255 986.516, 487.977 986.462, 487.923 986.434, 487.900 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 983.218, 503.599 983.137, 503.698 983.016, 504.022 983.011, 504.051 982.972, 504.271 982.953, 504.379 982.983, 504.564 982.991, 504.613 983.011, 504.737 983.137, 505.060 983.219, 505.158 983.263, 505.212 983.378, 505.349 983.453, 505.408 983.628, 505.546 983.814, 505.623 983.854, 505.640 983.984, 505.694 984.024, 505.698 984.309, 505.727 984.448, 505.712 984.630, 505.693 984.982, 505.544 985.071, 505.477 985.241, 505.347 985.351, 505.213 985.477, 505.058 985.489, 505.027 985.598, 504.733 985.661, 504.376 985.604, 504.019 985.515, 503.793 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 982.337, 504.817 982.251, 505.049 982.197, 505.356 982.247, 505.662 982.329, 505.873 982.355, 505.940 982.561, 506.188 982.777, 506.357 983.082, 506.484 983.361, 506.513 983.602, 506.487 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 981.704, 513.142 981.677, 513.175 981.629, 513.306 981.589, 513.413 981.588, 513.415 981.559, 513.582 981.542, 513.678 981.570, 513.848 981.585, 513.940 981.652, 514.113 981.678, 514.180 981.855, 514.394 981.875, 514.409 982.040, 514.537 982.302, 514.647 982.515, 514.670 982.542, 514.673 982.743, 514.651 982.780, 514.647 982.815, 514.632 982.881, 514.604 982.978, 514.562 983.010, 514.549 983.039, 514.537 983.039, 514.536 983.230, 514.393 983.328, 514.273 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1063.467, -0.495 1062.707, 3.925 1062.903, 6.551 1063.077, 8.318 1063.843, 10.676 1064.249, 11.727 1065.654, 14.124 1068.126, 16.496 1071.155, 18.053 1074.641, 18.643 1077.762, 18.001 1081.377, 16.391 1084.136, 13.774 1085.739, 11.554 1087.254, 8.122 1087.710, 5.936 1088.066, 3.719 1087.984, 1.067 1087.747, -0.694 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1037.932, 171.196 1036.214, 171.428 1033.968, 172.549 1032.156, 174.024 1031.014, 175.652 1030.740, 176.206 1030.027, 177.842 1029.550, 180.634 1029.855, 183.413 1030.703, 185.574 1031.908, 187.189 1033.440, 188.604 1034.627, 189.160 1035.795, 189.707 1037.974, 189.975 1039.073, 189.841 1040.383, 189.682 1042.608, 188.553 1044.432, 187.119 1045.561, 185.491 1045.872, 184.963 1046.562, 183.320 1046.754, 182.339 1047.063, 180.535 1046.783, 177.746 1045.950, 175.567 1044.731, 173.951 1043.214, 172.496 1041.741, 171.819 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1016.535, 288.766 1015.796, 289.348 1014.707, 290.884 1014.127, 292.298 1013.770, 294.366 1014.028, 296.426 1014.604, 297.778 1014.711, 298.029 1015.654, 299.352 1017.176, 300.496 1018.733, 301.236 1020.588, 301.478 1022.350, 301.222 1024.067, 300.469 1025.084, 299.661 1025.523, 299.312 1026.628, 297.792 1027.193, 296.373 1027.298, 295.870 1027.565, 294.310 1027.323, 292.244 1026.649, 290.631 1026.458, 290.366 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1006.199, 349.016 1006.163, 349.045 1005.259, 350.258 1004.763, 351.503 1004.471, 353.185 1004.697, 354.862 1005.237, 356.074 1005.279, 356.168 1006.069, 357.303 1007.345, 358.299 1008.669, 358.846 1010.222, 359.095 1011.713, 358.836 1013.144, 358.281 1014.277, 357.357 1014.375, 357.277 1015.290, 356.076 1015.776, 354.827 1015.842, 354.521 1016.078, 353.148 1015.863, 351.467 1015.369, 350.339 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 921.645, 350.587 922.087, 351.719 922.715, 352.540 922.935, 352.828 923.510, 353.292 924.069, 353.744 924.974, 354.093 925.391, 354.254 926.763, 354.481 928.197, 354.245 929.412, 353.727 930.588, 352.803 931.317, 351.753 931.440, 351.472 931.849, 350.541 931.993, 349.440 932.052, 348.988 931.856, 347.879 931.778, 347.435 931.323, 346.292 930.890, 345.715 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 133.878, 352.302 133.413, 352.951 133.217, 353.896 133.209, 354.134 133.276, 355.020 133.761, 356.019 133.837, 356.177 134.833, 357.229 136.315, 358.135 137.685, 358.584 137.876, 358.647 139.209, 358.793 139.491, 358.824 140.968, 358.646 142.067, 358.261 143.228, 357.532 143.370, 357.334 143.946, 356.531 144.134, 355.591 144.153, 355.356 144.080, 354.475 143.691, 353.662 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 295.342, 354.181 294.034, 354.022 292.531, 354.211 291.562, 354.621 291.096, 354.842 290.351, 355.407 289.569, 356.488 289.295, 357.756 289.455, 358.709 289.554, 359.086 289.945, 359.948 290.889, 361.074 292.313, 362.042 293.824, 362.587 295.423, 362.774 296.921, 362.580 297.878, 362.161 298.348, 361.949 299.079, 361.378 299.856, 360.305 300.132, 359.046 299.967, 358.098 299.882, 357.722 299.487, 356.866 298.554, 355.742 298.176, 355.482 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 446.684, 377.573 447.366, 378.338 447.547, 378.486 447.776, 378.675 447.893, 378.760 448.711, 379.354 450.152, 379.918 450.551, 379.965 451.429, 380.068 451.720, 380.102 453.230, 379.885 454.681, 379.201 454.812, 379.074 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 608.070, 368.703 609.583, 368.909 611.087, 368.686 612.548, 367.965 613.565, 366.944 614.205, 365.677 614.391, 364.314 614.212, 363.159 614.072, 362.774 613.661, 361.733 612.669, 360.521 611.330, 359.641 610.250, 359.188 608.736, 358.972 607.226, 359.190 605.756, 359.910 604.732, 360.934 604.091, 362.207 603.911, 363.578 604.082, 364.738 604.644, 366.167 605.648, 367.375 606.728, 368.090 606.993, 368.245 608.070, 368.703 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 765.255, 374.997 766.300, 375.412 766.357, 375.420 767.738, 375.623 769.224, 375.382 770.069, 374.973 770.201, 374.909 770.345, 374.822 770.669, 374.624 770.683, 374.616 771.407, 374.010 772.016, 373.186 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 910.854, 313.743 910.620, 314.303 910.405, 316.154 910.645, 317.589 910.747, 317.999 911.257, 319.302 912.262, 320.642 912.327, 320.694 913.580, 321.692 915.138, 322.333 916.731, 322.571 918.413, 322.321 919.817, 321.669 921.196, 320.609 922.050, 319.395 922.509, 318.316 922.663, 317.954 922.891, 316.107 922.637, 314.674 922.561, 314.258 922.039, 312.958 921.046, 311.604 920.905, 311.493 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 134.174, 309.263 134.166, 309.523 134.253, 310.636 134.976, 312.166 135.041, 312.237 136.258, 313.565 138.167, 314.789 140.177, 315.504 142.255, 315.776 144.156, 315.575 145.565, 315.152 147.059, 314.228 147.063, 314.222 147.984, 312.938 148.086, 312.435 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 331.272, 344.430 332.859, 344.634 333.280, 344.689 333.309, 344.685 334.135, 344.583 335.173, 344.454 336.329, 343.950 336.979, 343.655 337.854, 342.953 338.132, 342.604 338.206, 342.511 338.518, 342.060 338.851, 341.578 339.223, 339.956 338.934, 338.244 338.404, 337.159 338.009, 336.609 337.248, 335.699 335.490, 334.426 333.610, 333.689 331.598, 333.417 329.697, 333.645 328.522, 334.133 327.878, 334.442 326.981, 335.134 326.641, 335.589 325.976, 336.522 325.607, 338.158 325.641, 338.352 325.871, 339.664 325.909, 339.881 325.971, 340.010 326.435, 340.975 326.852, 341.520 327.609, 342.439 327.699, 342.503 327.834, 342.599 329.384, 343.706 331.272, 344.430 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 520.853, 288.876 520.843, 288.941 520.875, 289.497 520.992, 290.800 521.758, 292.584 523.062, 294.120 524.776, 295.256 526.004, 295.754 526.730, 295.884 527.896, 296.083 529.745, 295.872 531.529, 295.060 532.762, 293.870 533.502, 292.347 533.511, 292.284 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 715.357, 331.583 715.224, 331.795 714.835, 332.691 714.518, 334.426 714.806, 336.385 715.419, 337.663 715.617, 338.030 716.515, 339.212 718.031, 340.339 719.449, 340.892 721.202, 341.183 721.975, 341.072 722.991, 340.926 724.741, 340.044 725.526, 339.277 725.974, 338.780 726.429, 338.090 726.722, 337.385 726.802, 337.193 727.127, 335.468 726.854, 333.514 726.056, 331.866 725.152, 330.689 723.646, 329.548 722.224, 329.002 721.861, 328.932 720.469, 328.695 719.076, 328.888 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 893.614, 251.633 893.178, 252.740 892.937, 255.086 893.208, 256.761 893.378, 257.423 893.981, 258.945 895.242, 260.690 896.010, 261.286 896.843, 261.932 898.780, 262.821 900.714, 263.049 902.788, 262.803 904.846, 261.756 906.179, 260.641 907.232, 259.182 907.763, 257.865 907.968, 257.356 908.228, 255.015 907.937, 253.344 907.806, 252.672 907.184, 251.156 905.942, 249.390 904.933, 248.617 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 145.820, 214.281 144.798, 214.123 142.946, 214.103 140.380, 214.634 138.379, 215.825 137.141, 217.558 136.809, 219.010 136.790, 219.660 136.908, 221.056 137.865, 223.190 139.563, 225.159 142.089, 226.933 144.747, 228.028 146.476, 228.337 147.495, 228.508 149.327, 228.496 151.862, 227.956 153.838, 226.772 155.064, 225.057 155.370, 223.614 155.422, 222.979 155.289, 221.595 154.361, 219.480 152.694, 217.519 150.197, 215.737 147.551, 214.622 145.820, 214.281 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 396.594, 238.884 396.580, 238.878 395.361, 238.578 394.038, 238.387 392.676, 238.423 391.607, 238.596 390.217, 239.007 389.273, 239.567 388.228, 240.273 387.770, 240.905 387.677, 241.033 386.908, 242.097 386.388, 244.297 386.718, 246.653 387.864, 248.934 388.015, 249.096 389.329, 250.507 389.707, 250.913 391.125, 251.873 392.065, 252.398 392.430, 252.548 393.485, 252.982 394.705, 253.247 394.769, 253.257 396.023, 253.452 397.369, 253.381 398.082, 253.280 398.439, 253.230 399.799, 252.789 400.752, 252.255 401.761, 251.530 402.331, 250.794 403.056, 249.743 403.068, 249.726 403.228, 249.065 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 653.846, 231.216 654.838, 229.233 655.165, 227.008 654.731, 224.461 654.053, 223.034 653.652, 222.289 652.603, 220.936 650.623, 219.335 648.306, 218.392 646.672, 218.215 645.878, 218.203 644.393, 218.412 642.168, 219.405 640.610, 220.920 639.615, 222.921 639.302, 225.164 639.759, 227.720 640.422, 229.158 640.858, 229.887 641.898, 231.248 643.892, 232.826 646.208, 233.741 647.834, 233.934 648.619, 233.908 650.100, 233.722 652.305, 232.725 653.846, 231.216 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 862.102, 118.874 862.562, 119.687 863.861, 121.531 866.069, 123.349 868.630, 124.564 871.502, 125.003 873.982, 124.529 876.763, 123.280 878.754, 121.271 879.896, 119.574 880.843, 116.945 881.144, 113.572 880.805, 111.596 880.533, 110.194 879.747, 108.404 879.337, 107.554 878.021, 105.709 875.825, 103.833 873.233, 102.631 870.337, 102.144 867.840, 102.668 867.489, 102.788 865.026, 103.906 863.006, 105.926 861.897, 107.671 860.971, 110.325 860.799, 111.968 860.704, 113.708 861.008, 115.691 861.348, 117.073 862.102, 118.874 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 145.655, 93.937 144.855, 94.069 142.015, 95.682 140.981, 97.083 140.257, 98.154 139.791, 100.010 139.756, 101.236 139.927, 103.066 140.559, 104.620 141.281, 106.289 142.581, 107.968 143.684, 109.293 144.719, 110.180 145.616, 110.949 147.257, 112.089 149.358, 113.275 151.012, 113.913 153.439, 114.721 157.460, 115.154 160.186, 114.684 161.036, 114.538 163.824, 112.935 165.558, 110.500 165.973, 108.657 166.073, 107.468 165.871, 105.659 165.316, 104.128 164.576, 102.480 163.354, 100.800 162.235, 99.495 161.248, 98.602 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 511.207, 85.430 507.680, 84.921 504.401, 85.527 501.699, 87.193 500.655, 88.626 499.844, 89.755 499.380, 91.373 499.023, 92.956 499.151, 94.566 499.315, 96.475 500.686, 99.960 502.994, 103.068 506.006, 105.496 509.424, 107.011 512.914, 107.475 516.140, 106.846 518.794, 105.191 519.867, 103.817 520.622, 102.670 521.139, 101.103 521.449, 99.523 521.396, 97.946 521.193, 96.051 520.567, 94.291 519.876, 92.587 518.875, 91.138 517.617, 89.468 514.631, 87.000 511.207, 85.430 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M -0.542, 376.743 0.044, 375.922 0.282, 375.139 0.177, 374.231 -0.155, 373.628 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 134.219, 369.142 133.676, 369.484 133.036, 370.376 132.862, 371.223 132.855, 371.418 132.915, 372.212 133.412, 373.227 134.265, 374.117 134.294, 374.148 135.608, 374.936 136.993, 375.375 138.425, 375.520 139.735, 375.355 140.710, 374.993 140.871, 374.892 140.972, 374.828 141.740, 374.343 142.377, 373.456 142.544, 372.612 142.559, 372.419 142.496, 371.630 142.006, 370.619 141.453, 370.037 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 279.099, 381.425 278.012, 381.572 276.730, 382.144 276.051, 382.677 275.356, 383.637 275.117, 384.756 275.252, 385.618 275.355, 385.924 275.650, 386.596 275.697, 386.703 276.547, 387.685 277.827, 388.521 279.185, 388.982 280.619, 389.128 280.967, 389.079 281.960, 388.943 283.235, 388.370 283.903, 387.833 284.098, 387.567 284.594, 386.878 284.835, 385.766 284.696, 384.909 284.603, 384.603 284.259, 383.829 284.225, 383.790 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 422.478, 392.971 423.898, 393.125 425.259, 392.924 426.565, 392.308 427.459, 391.446 427.856, 390.705 427.963, 390.388 428.163, 389.514 428.002, 388.270 427.387, 387.094 426.772, 386.389 425.555, 385.493 424.247, 384.996 422.825, 384.836 421.459, 385.033 420.147, 385.648 419.247, 386.512 418.841, 387.253 418.743, 387.576 418.535, 388.452 418.703, 389.702 419.137, 390.539 419.327, 390.880 419.939, 391.589 421.165, 392.482 422.478, 392.971 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 562.557, 399.514 562.447, 400.475 562.568, 401.543 563.109, 402.791 564.050, 403.836 564.495, 404.146 564.997, 404.495 566.244, 405.005 567.636, 405.158 569.007, 404.937 569.036, 404.923 570.336, 404.274 571.007, 403.602 571.257, 403.351 571.822, 402.223 571.903, 401.543 571.964, 401.023 571.837, 399.959 571.306, 398.714 570.374, 397.666 569.425, 397.011 568.182, 396.493 566.789, 396.332 565.413, 396.549 564.077, 397.210 563.202, 398.084 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 707.768, 364.291 707.943, 365.435 708.405, 366.429 708.566, 366.662 709.246, 367.576 710.408, 368.403 711.484, 368.838 712.826, 369.034 713.369, 368.949 714.193, 368.821 715.530, 368.136 716.117, 367.585 716.472, 367.166 716.807, 366.673 717.101, 365.963 717.342, 364.668 717.182, 363.580 717.126, 363.205 716.659, 362.216 716.510, 361.975 715.827, 361.065 714.671, 360.230 713.593, 359.799 712.250, 359.594 711.806, 359.661 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 852.681, 395.376 852.567, 396.686 852.705, 397.882 853.237, 399.155 854.037, 400.142 855.040, 400.935 855.097, 400.980 856.316, 401.459 857.597, 401.635 858.654, 401.453 858.878, 401.405 858.955, 401.389 859.989, 400.968 860.742, 400.379 861.098, 400.100 861.786, 399.123 862.229, 398.044 862.312, 397.153 862.358, 396.660 862.211, 395.465 861.688, 394.190 860.884, 393.206 859.857, 392.381 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 135.502, 331.069 134.673, 331.583 133.855, 332.725 133.632, 333.779 133.623, 334.073 133.699, 335.065 134.335, 336.391 135.166, 337.282 135.463, 337.600 137.141, 338.648 138.908, 339.250 140.736, 339.468 142.408, 339.278 143.650, 338.870 144.126, 338.573 144.964, 338.051 145.778, 336.917 145.988, 335.868 146.012, 335.579 145.929, 334.593 145.306, 333.274 144.486, 332.386 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 310.101, 344.040 310.969, 344.368 312.091, 344.511 312.757, 344.596 313.311, 344.528 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 483.744, 358.312 485.472, 358.540 487.147, 358.311 488.759, 357.554 489.869, 356.476 490.518, 355.134 490.708, 354.067 490.553, 352.472 489.842, 350.952 488.643, 349.657 487.572, 348.912 486.000, 348.239 484.270, 347.999 482.588, 348.223 480.965, 348.978 479.847, 350.059 479.406, 350.951 479.197, 351.409 478.994, 352.480 479.159, 354.085 479.884, 355.608 480.697, 356.479 481.096, 356.899 482.166, 357.650 483.744, 358.312 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 665.215, 323.084 665.071, 322.257 664.870, 321.807 664.569, 321.132 663.526, 319.728 662.099, 318.693 660.864, 318.211 660.427, 318.130 659.229, 317.926 658.065, 318.077 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 829.612, 321.501 829.411, 321.776 828.923, 323.084 828.792, 324.228 828.805, 324.755 828.941, 326.066 829.580, 327.612 830.490, 328.708 830.597, 328.817 831.748, 329.775 833.268, 330.346 833.550, 330.391 834.650, 330.568 836.236, 330.335 837.401, 329.754 837.802, 329.519 838.695, 328.788 838.806, 328.635 839.498, 327.684 839.993, 326.382 840.111, 325.240 840.121, 324.714 839.974, 323.406 839.346, 321.857 838.339, 320.641 837.182, 319.686 835.790, 319.149 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 136.482, 301.985 134.957, 302.922 133.885, 304.418 133.595, 305.767 133.583, 306.195 133.682, 307.471 133.752, 307.619 134.271, 308.718 134.514, 309.234 135.988, 310.844 136.506, 311.177 138.182, 312.255 140.491, 313.080 142.877, 313.395 145.060, 313.167 145.975, 312.894 146.676, 312.686 148.225, 311.728 148.391, 311.626 149.159, 310.555 149.453, 310.144 149.724, 308.803 149.761, 308.383 149.650, 307.118 148.840, 305.368 147.428, 303.805 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 361.614, 249.055 361.361, 249.002 360.243, 248.827 358.992, 248.880 358.106, 249.017 356.830, 249.395 356.059, 249.866 355.092, 250.497 353.949, 252.079 353.515, 253.982 353.832, 256.017 354.449, 257.200 354.867, 257.984 355.750, 258.959 356.515, 259.689 357.722, 260.528 358.612, 260.965 359.822, 261.478 360.952, 261.690 362.066, 261.875 363.305, 261.796 364.192, 261.675 365.444, 261.274 366.223, 260.823 367.162, 260.178 368.295, 258.612 368.733, 256.728 368.432, 254.708 368.294, 254.441 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 571.537, 298.149 571.438, 299.031 571.470, 299.279 571.630, 300.520 571.999, 301.446 572.432, 302.531 573.085, 303.336 573.834, 304.257 575.696, 305.529 577.124, 306.101 577.834, 306.226 579.202, 306.460 580.023, 306.361 581.254, 306.212 582.970, 305.411 583.241, 305.285 583.670, 304.864 584.086, 304.457 584.621, 303.932 585.474, 302.209 585.699, 300.317 585.617, 299.732 585.491, 298.836 585.234, 298.165 584.712, 296.832 584.293, 296.307 583.721, 295.590 583.330, 295.099 582.887, 294.791 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 576.322, 293.058 575.903, 293.107 573.900, 294.031 572.661, 295.239 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 793.095, 245.847 792.969, 246.184 792.748, 246.933 792.544, 248.198 792.767, 250.488 793.575, 252.426 794.844, 253.980 796.195, 255.074 798.063, 255.871 798.761, 255.955 799.679, 256.066 801.603, 255.854 803.496, 254.933 804.503, 253.935 804.841, 253.555 805.476, 252.648 805.496, 252.591 805.787, 251.762 806.037, 251.028 806.221, 249.763 806.150, 248.951 806.016, 247.480 805.224, 245.537 803.969, 243.968 802.610, 242.878 800.742, 242.059 800.097, 241.986 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 141.643, 150.510 140.567, 151.134 139.112, 153.176 138.724, 154.791 138.698, 155.691 138.838, 157.263 139.960, 159.858 141.383, 161.577 141.953, 162.266 143.558, 163.485 144.916, 164.477 146.665, 165.311 148.033, 165.886 150.054, 166.415 151.254, 166.548 153.395, 166.696 156.366, 166.129 157.203, 165.639 158.682, 164.772 160.121, 162.756 160.472, 161.151 160.544, 160.275 160.382, 158.717 159.910, 157.567 159.301, 156.151 158.288, 154.907 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 442.251, 202.458 440.651, 202.276 439.187, 202.219 437.860, 202.482 436.364, 202.860 435.171, 203.584 434.063, 204.321 433.326, 205.283 432.516, 206.457 431.875, 209.055 432.204, 211.856 433.466, 214.580 435.532, 216.961 438.194, 218.765 439.896, 219.417 441.190, 219.821 442.783, 220.022 444.227, 220.030 445.554, 219.799 447.012, 219.376 448.215, 218.689 449.277, 217.925 450.038, 216.999 450.806, 215.817 451.079, 214.764 451.451, 213.255 451.150, 210.484 449.927, 207.772 447.896, 205.382 445.252, 203.550 443.543, 202.911 442.251, 202.458 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 746.791, 153.954 747.972, 151.636 748.458, 148.976 748.104, 145.911 747.006, 143.279 745.293, 141.080 743.611, 139.778 741.116, 138.531 738.463, 138.180 736.588, 138.560 735.914, 138.764 734.101, 139.633 732.343, 141.349 731.158, 143.691 730.689, 146.376 731.071, 149.454 732.197, 152.080 733.931, 154.253 735.599, 155.562 738.094, 156.770 740.726, 157.088 742.593, 156.743 743.242, 156.489 745.054, 155.661 746.791, 153.954 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 148.336, -0.957 146.224, 0.058 144.763, 0.997 143.468, 2.508 142.549, 4.119 141.968, 6.250 141.917, 8.094 142.136, 10.247 142.923, 12.521 143.834, 14.492 145.460, 16.956 146.852, 18.478 149.265, 20.961 153.955, 24.145 159.065, 26.206 164.098, 26.953 168.572, 26.323 170.577, 25.252 172.062, 24.383 173.255, 22.847 174.238, 21.321 174.739, 19.201 174.892, 17.428 174.625, 15.302 173.958, 13.074 173.018, 11.132 171.517, 8.675 167.793, 4.656 163.141, 1.412 158.010, -0.731 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 956.248, 510.217 956.253, 510.217 956.495, 510.115 956.665, 509.982 956.742, 509.889 956.829, 509.785 956.901, 509.599 956.914, 509.564 956.948, 509.355 956.953, 509.321 956.910, 509.078 956.858, 508.939 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 437.160, 517.039 437.208, 517.051 437.314, 517.066 437.403, 517.059 437.475, 517.051 437.590, 517.022 437.770, 516.929 437.894, 516.806 437.964, 516.663 437.990, 516.528 437.969, 516.366 437.908, 516.243 437.799, 516.111 437.632, 516.005 437.501, 515.967 437.453, 515.955 437.347, 515.940 437.258, 515.947 437.185, 515.955 437.070, 515.984 436.890, 516.077 436.767, 516.200 436.697, 516.343 436.670, 516.478 436.691, 516.640 436.753, 516.764 436.861, 516.895 437.028, 517.001 437.160, 517.039 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 488.431, 513.925 488.440, 513.935 488.614, 514.051 488.801, 514.106 488.920, 514.122 489.007, 514.114 489.093, 514.106 489.207, 514.074 489.284, 514.038 489.342, 514.006 489.400, 513.974 489.533, 513.839 489.611, 513.683 489.634, 513.536 489.615, 513.360 489.545, 513.226 489.530, 513.198 489.456, 513.110 489.432, 513.082 489.258, 512.966 489.071, 512.911 488.952, 512.895 488.865, 512.902 488.779, 512.911 488.665, 512.942 488.588, 512.979 488.584, 512.981 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 540.334, 510.416 540.308, 510.424 540.217, 510.464 540.103, 510.533 540.048, 510.588 539.961, 510.677 539.876, 510.847 539.857, 511.005 539.857, 511.020 539.873, 511.195 539.958, 511.371 540.068, 511.496 540.247, 511.621 540.368, 511.659 540.441, 511.682 540.572, 511.698 540.657, 511.691 540.756, 511.681 540.868, 511.648 540.884, 511.641 540.959, 511.608 541.073, 511.539 541.128, 511.484 541.215, 511.395 541.300, 511.226 541.318, 511.068 541.319, 511.052 541.303, 510.877 541.218, 510.702 541.108, 510.576 540.929, 510.451 540.769, 510.401 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 592.105, 515.810 591.956, 515.825 591.848, 515.862 591.742, 515.904 591.631, 515.979 591.562, 516.038 591.481, 516.135 591.450, 516.186 591.387, 516.317 591.362, 516.503 591.381, 516.662 591.385, 516.693 591.470, 516.881 591.593, 517.017 591.777, 517.150 591.977, 517.214 592.121, 517.233 592.164, 517.229 592.316, 517.214 592.424, 517.177 592.531, 517.135 592.641, 517.059 592.710, 517.000 592.792, 516.903 592.822, 516.853 592.885, 516.721 592.910, 516.535 592.887, 516.346 592.867, 516.301 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 695.617, 512.121 695.787, 512.142 695.999, 512.121 696.202, 512.043 696.230, 512.032 696.424, 511.882 696.544, 511.717 696.599, 511.571 696.638, 511.362 696.598, 511.130 696.519, 510.939 696.371, 510.767 696.185, 510.636 695.982, 510.563 695.811, 510.543 695.600, 510.564 695.368, 510.652 695.175, 510.802 695.054, 510.967 695.000, 511.114 694.960, 511.323 695.001, 511.555 695.079, 511.746 695.185, 511.868 695.228, 511.918 695.413, 512.049 695.617, 512.121 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 747.467, 510.195 747.251, 510.279 747.052, 510.436 746.928, 510.609 746.865, 510.782 746.859, 510.824 746.844, 510.910 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 748.502, 511.288 748.521, 511.238 748.527, 511.222 748.553, 511.060 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 799.057, 515.662 799.227, 515.776 799.426, 515.854 799.620, 515.877 799.842, 515.854 800.085, 515.758 800.287, 515.594 800.413, 515.414 800.460, 515.295 800.484, 515.235 800.493, 515.165 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 851.002, 516.018 851.032, 516.057 851.057, 516.090 851.251, 516.218 851.280, 516.237 851.473, 516.317 851.677, 516.340 851.900, 516.316 851.961, 516.292 852.145, 516.217 852.348, 516.049 852.456, 515.897 852.475, 515.864 852.554, 515.681 852.558, 515.639 852.577, 515.446 852.551, 515.209 852.454, 514.995 852.331, 514.834 852.308, 514.804 852.247, 514.763 852.114, 514.675 852.085, 514.657 851.892, 514.577 851.715, 514.557 851.688, 514.554 851.479, 514.576 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 902.931, 509.512 902.924, 509.563 902.958, 509.804 903.049, 510.023 903.203, 510.218 903.390, 510.350 903.460, 510.380 903.622, 510.450 903.834, 510.473 904.058, 510.449 904.302, 510.349 904.505, 510.178 904.626, 510.021 904.719, 509.802 904.731, 509.706 904.749, 509.561 904.715, 509.320 904.625, 509.102 904.471, 508.907 904.284, 508.775 904.247, 508.758 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 955.952, 511.092 956.004, 511.030 956.029, 511.000 956.129, 510.742 956.145, 510.639 956.172, 510.472 956.174, 510.459 956.159, 510.377 956.134, 510.230 956.124, 510.175 956.117, 510.158 956.028, 509.919 956.000, 509.884 955.993, 509.876 955.980, 509.860 955.840, 509.689 955.774, 509.639 955.771, 509.637 955.744, 509.617 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 402.365, 510.233 402.266, 510.331 402.199, 510.467 402.186, 510.497 402.151, 510.651 402.179, 510.838 402.247, 510.980 402.377, 511.133 402.575, 511.256 402.725, 511.300 402.787, 511.315 402.907, 511.332 403.016, 511.324 403.096, 511.315 403.235, 511.282 403.446, 511.176 403.589, 511.034 403.656, 510.897 403.669, 510.868 403.704, 510.714 403.676, 510.527 403.608, 510.385 403.478, 510.232 403.419, 510.195 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 457.569, 512.464 457.704, 512.482 457.812, 512.474 457.907, 512.463 458.046, 512.427 458.130, 512.385 458.272, 512.311 458.427, 512.156 458.516, 511.975 458.547, 511.805 458.522, 511.601 458.443, 511.445 458.419, 511.413 458.309, 511.278 458.102, 511.144 457.879, 511.080 457.744, 511.061 457.636, 511.070 457.541, 511.080 457.402, 511.115 457.318, 511.158 457.176, 511.232 457.020, 511.387 456.931, 511.569 456.900, 511.738 456.926, 511.943 457.004, 512.098 457.029, 512.130 457.139, 512.265 457.346, 512.399 457.569, 512.464 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 512.577, 508.330 512.727, 508.349 512.832, 508.341 512.943, 508.330 513.080, 508.292 513.180, 508.245 513.319, 508.166 513.484, 507.999 513.582, 507.803 513.607, 507.620 513.587, 507.399 513.484, 507.195 513.359, 507.050 513.146, 506.905 512.916, 506.834 512.766, 506.815 512.662, 506.822 512.551, 506.834 512.414, 506.872 512.314, 506.919 512.174, 506.997 512.009, 507.165 511.911, 507.361 511.885, 507.544 511.906, 507.765 512.009, 507.969 512.134, 508.114 512.347, 508.260 512.577, 508.330 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 567.110, 509.330 567.091, 509.342 567.017, 509.411 566.916, 509.521 566.809, 509.732 566.783, 509.947 566.788, 509.999 566.806, 510.165 566.908, 510.383 567.047, 510.539 567.265, 510.695 567.500, 510.770 567.666, 510.791 567.893, 510.770 568.024, 510.729 568.142, 510.679 568.202, 510.641 568.276, 510.594 568.351, 510.524 568.451, 510.414 568.482, 510.354 568.558, 510.204 568.585, 509.988 568.579, 509.937 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 622.525, 513.201 622.706, 513.223 622.944, 513.200 623.068, 513.156 623.206, 513.103 623.333, 513.011 623.413, 512.947 623.424, 512.938 623.517, 512.819 623.561, 512.756 623.634, 512.594 623.662, 512.406 623.669, 512.364 623.640, 512.170 623.635, 512.131 623.536, 511.899 623.381, 511.732 623.358, 511.710 623.161, 511.566 622.921, 511.486 622.740, 511.463 622.501, 511.486 622.377, 511.530 622.240, 511.583 622.112, 511.675 622.021, 511.749 621.928, 511.867 621.884, 511.931 621.811, 512.092 621.804, 512.139 621.776, 512.322 621.810, 512.556 621.909, 512.788 622.064, 512.955 622.087, 512.977 622.228, 513.080 622.285, 513.121 622.370, 513.149 622.525, 513.201 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 677.229, 504.837 677.144, 504.952 677.077, 505.121 677.034, 505.364 677.079, 505.608 677.084, 505.634 677.172, 505.854 677.348, 506.055 677.437, 506.118 677.561, 506.206 677.801, 506.291 677.997, 506.314 678.243, 506.291 678.513, 506.189 678.739, 506.015 678.816, 505.910 678.880, 505.824 678.946, 505.656 678.989, 505.413 678.944, 505.169 678.939, 505.143 678.851, 504.923 678.676, 504.722 678.585, 504.658 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 733.449, 509.781 733.411, 509.767 733.199, 509.742 732.945, 509.767 732.667, 509.875 732.550, 509.966 732.434, 510.057 732.289, 510.259 732.218, 510.460 732.202, 510.548 732.177, 510.692 732.215, 510.940 732.220, 510.975 732.321, 511.208 732.493, 511.417 732.635, 511.515 732.669, 511.539 732.724, 511.577 732.869, 511.631 732.963, 511.665 733.174, 511.690 733.428, 511.665 733.461, 511.652 733.563, 511.613 733.707, 511.557 733.890, 511.413 733.939, 511.374 734.083, 511.175 734.084, 511.173 734.117, 511.081 734.156, 510.972 734.186, 510.799 734.196, 510.740 734.169, 510.561 734.154, 510.457 734.052, 510.224 734.049, 510.221 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 787.514, 512.165 787.528, 512.286 787.601, 512.440 787.642, 512.527 787.735, 512.649 787.751, 512.670 787.808, 512.744 788.053, 512.909 788.287, 513.001 788.512, 513.027 788.692, 513.008 788.770, 513.001 788.872, 512.960 789.007, 512.907 789.053, 512.889 789.267, 512.717 789.289, 512.699 789.435, 512.490 789.517, 512.282 789.548, 512.042 789.520, 511.801 789.518, 511.781 789.514, 511.749 789.400, 511.507 789.235, 511.290 788.989, 511.125 788.755, 511.033 788.531, 511.008 788.273, 511.034 788.062, 511.117 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 843.023, 509.396 842.958, 509.548 842.934, 509.823 842.961, 510.098 843.076, 510.347 843.245, 510.570 843.473, 510.720 843.504, 510.740 843.731, 510.835 843.968, 510.861 843.987, 510.859 844.228, 510.834 844.514, 510.719 844.751, 510.524 844.875, 510.345 844.899, 510.309 844.991, 510.095 844.994, 510.055 845.015, 509.820 844.987, 509.545 844.873, 509.296 844.704, 509.073 844.476, 508.923 844.444, 508.904 844.218, 508.808 843.981, 508.782 843.910, 508.789 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 898.487, 503.264 898.493, 503.307 898.600, 503.563 898.778, 503.789 898.997, 503.944 899.065, 503.973 899.266, 504.060 899.513, 504.086 899.774, 504.059 899.847, 504.030 900.059, 503.943 900.296, 503.745 900.344, 503.682 900.436, 503.561 900.545, 503.306 900.579, 503.025 900.564, 502.914 900.540, 502.746 900.434, 502.490 900.255, 502.264 900.037, 502.108 899.991, 502.088 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 952.896, 506.247 952.841, 506.387 952.789, 506.718 952.847, 507.047 952.960, 507.347 952.995, 507.390 953.177, 507.613 953.332, 507.730 953.418, 507.794 953.742, 507.931 954.022, 507.961 954.039, 507.963 954.339, 507.931 954.480, 507.871 954.668, 507.793 954.898, 507.611 955.033, 507.449 955.120, 507.344 955.237, 507.045 955.239, 507.033 955.289, 506.715 955.231, 506.386 955.119, 506.086 955.046, 505.997 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 362.791, 506.509 362.775, 506.574 362.812, 506.790 362.887, 506.954 363.043, 507.130 363.279, 507.273 363.449, 507.323 363.531, 507.342 363.666, 507.360 363.801, 507.353 363.886, 507.341 364.058, 507.305 364.303, 507.182 364.470, 507.019 364.554, 506.862 364.607, 506.650 364.575, 506.462 364.570, 506.433 364.495, 506.270 364.340, 506.093 364.105, 505.951 364.017, 505.925 363.934, 505.900 363.853, 505.882 363.717, 505.863 363.652, 505.867 363.582, 505.870 363.500, 505.882 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 422.094, 505.290 422.167, 505.311 422.319, 505.331 422.452, 505.323 422.555, 505.310 422.725, 505.271 422.988, 505.138 423.167, 504.960 423.268, 504.751 423.309, 504.558 423.276, 504.322 423.189, 504.144 423.029, 503.951 422.784, 503.796 422.595, 503.741 422.522, 503.720 422.369, 503.700 422.237, 503.707 422.134, 503.720 421.963, 503.759 421.700, 503.892 421.521, 504.070 421.420, 504.279 421.378, 504.473 421.412, 504.709 421.499, 504.887 421.659, 505.080 421.904, 505.235 422.094, 505.290 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 480.164, 500.455 480.257, 500.634 480.281, 500.677 480.421, 500.844 480.674, 501.014 480.947, 501.096 481.117, 501.118 481.245, 501.111 481.368, 501.096 481.535, 501.054 481.644, 500.999 481.814, 500.910 482.006, 500.718 482.118, 500.491 482.152, 500.282 482.124, 500.026 482.023, 499.834 482.000, 499.790 481.860, 499.624 481.607, 499.454 481.335, 499.371 481.165, 499.349 481.036, 499.356 481.009, 499.360 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 539.620, 504.318 539.647, 504.322 539.808, 504.342 539.929, 504.333 540.072, 504.318 540.233, 504.272 540.363, 504.213 540.382, 504.202 540.527, 504.117 540.614, 504.028 540.725, 503.914 540.730, 503.910 540.852, 503.667 540.879, 503.442 540.880, 503.417 540.857, 503.167 540.735, 502.914 540.577, 502.735 540.320, 502.553 540.041, 502.465 539.853, 502.442 539.732, 502.450 539.589, 502.465 539.428, 502.510 539.298, 502.570 539.134, 502.665 538.930, 502.873 538.807, 503.116 538.781, 503.341 538.781, 503.366 538.803, 503.616 538.926, 503.869 539.050, 504.011 539.083, 504.049 539.286, 504.191 539.341, 504.230 539.620, 504.318 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 598.476, 504.443 598.683, 504.468 598.794, 504.458 598.959, 504.442 599.110, 504.394 599.263, 504.331 599.417, 504.228 599.517, 504.141 599.631, 504.007 599.676, 503.932 599.764, 503.749 599.801, 503.483 599.766, 503.216 599.648, 502.946 599.472, 502.755 599.437, 502.726 599.213, 502.562 598.931, 502.467 598.724, 502.442 598.612, 502.451 598.448, 502.468 598.296, 502.516 598.144, 502.579 597.989, 502.681 597.890, 502.768 597.775, 502.902 597.730, 502.977 597.642, 503.161 597.605, 503.428 597.640, 503.695 597.758, 503.964 597.934, 504.155 597.969, 504.184 598.194, 504.349 598.476, 504.443 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 656.557, 506.572 656.523, 506.653 656.475, 506.935 656.523, 507.218 656.636, 507.503 656.845, 507.735 657.090, 507.910 657.269, 507.972 657.374, 508.009 657.396, 508.011 657.598, 508.036 657.886, 508.008 658.201, 507.890 658.414, 507.727 658.464, 507.689 658.622, 507.477 658.629, 507.467 658.710, 507.272 658.757, 506.990 658.709, 506.707 658.597, 506.422 658.388, 506.190 658.143, 506.015 657.931, 505.941 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 715.835, 498.761 715.764, 498.859 715.692, 499.062 715.684, 499.092 715.633, 499.358 715.686, 499.687 715.800, 499.954 716.003, 500.199 716.267, 500.382 716.548, 500.487 716.790, 500.515 717.085, 500.487 717.409, 500.363 717.679, 500.154 717.847, 499.922 717.919, 499.718 717.928, 499.688 717.978, 499.422 717.925, 499.093 717.811, 498.827 717.608, 498.582 717.344, 498.400 717.293, 498.380 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 775.680, 501.897 775.938, 501.926 776.239, 501.897 776.569, 501.768 776.844, 501.550 777.015, 501.308 777.108, 501.065 777.146, 500.788 777.104, 500.446 776.974, 500.168 776.779, 499.914 776.496, 499.724 776.221, 499.614 775.963, 499.585 775.662, 499.614 775.332, 499.742 775.057, 499.961 774.885, 500.203 774.793, 500.446 774.754, 500.723 774.796, 501.065 774.926, 501.343 775.121, 501.598 775.404, 501.788 775.680, 501.897 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 834.073, 497.407 834.196, 497.672 834.391, 497.930 834.659, 498.108 834.691, 498.125 834.958, 498.239 835.225, 498.268 835.231, 498.268 835.535, 498.239 835.868, 498.107 836.145, 497.881 836.317, 497.633 836.423, 497.381 836.449, 497.097 836.449, 497.060 836.441, 496.973 836.419, 496.743 836.284, 496.450 836.088, 496.193 835.821, 496.014 835.788, 495.998 835.522, 495.883 835.258, 495.855 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 893.361, 499.018 893.392, 499.247 893.517, 499.546 893.725, 499.809 893.980, 499.990 894.078, 500.032 894.293, 500.124 894.580, 500.154 894.700, 500.142 894.883, 500.124 895.216, 499.989 895.492, 499.759 895.653, 499.543 895.780, 499.248 895.805, 499.046 895.820, 498.920 895.778, 498.616 895.776, 498.596 895.651, 498.298 895.443, 498.035 895.188, 497.853 895.172, 497.846 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 951.544, 490.780 951.430, 491.066 951.370, 491.453 951.437, 491.832 951.568, 492.185 951.794, 492.459 951.821, 492.492 952.101, 492.708 952.478, 492.865 952.823, 492.899 953.172, 492.864 953.554, 492.707 953.822, 492.490 953.871, 492.437 954.015, 492.261 954.080, 492.182 954.216, 491.837 954.277, 491.449 954.210, 491.070 954.208, 491.062 954.079, 490.718 953.947, 490.557 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 318.410, 500.719 318.517, 500.742 318.669, 500.763 318.834, 500.755 318.924, 500.741 319.133, 500.701 319.418, 500.561 319.612, 500.375 319.717, 500.196 319.774, 499.953 319.738, 499.746 319.726, 499.705 319.645, 499.518 319.460, 499.315 319.180, 499.150 318.989, 499.093 318.882, 499.070 318.731, 499.049 318.565, 499.055 318.475, 499.070 318.266, 499.110 317.981, 499.249 317.787, 499.436 317.681, 499.614 317.624, 499.858 317.660, 500.065 317.673, 500.107 317.754, 500.293 317.939, 500.497 318.219, 500.661 318.410, 500.719 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 381.453, 496.062 381.550, 496.089 381.721, 496.111 381.885, 496.105 381.996, 496.088 382.204, 496.046 382.510, 495.893 382.719, 495.689 382.820, 495.495 382.833, 495.449 382.888, 495.228 382.844, 494.956 382.748, 494.752 382.557, 494.528 382.266, 494.347 382.051, 494.285 381.954, 494.258 381.783, 494.235 381.619, 494.241 381.508, 494.258 381.299, 494.300 380.993, 494.453 380.784, 494.657 380.682, 494.851 380.670, 494.897 380.615, 495.119 380.659, 495.391 380.754, 495.595 380.946, 495.819 381.238, 496.000 381.453, 496.062 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 444.559, 494.982 444.751, 495.007 444.909, 495.000 445.042, 494.982 445.246, 494.936 445.570, 494.772 445.792, 494.551 445.919, 494.291 445.965, 494.052 445.928, 493.758 445.817, 493.538 445.778, 493.486 445.622, 493.296 445.323, 493.099 445.002, 493.002 444.810, 492.978 444.652, 492.984 444.519, 493.003 444.315, 493.048 443.990, 493.212 443.768, 493.433 443.641, 493.693 443.594, 493.932 443.632, 494.227 443.743, 494.448 443.783, 494.499 443.938, 494.690 444.238, 494.886 444.559, 494.982 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 507.366, 492.073 507.291, 492.111 507.090, 492.218 506.854, 492.456 506.714, 492.736 506.677, 492.993 506.707, 493.311 506.855, 493.604 507.032, 493.809 507.338, 494.021 507.667, 494.125 507.880, 494.151 508.030, 494.144 508.187, 494.124 508.384, 494.076 508.525, 494.005 508.726, 493.898 508.961, 493.661 509.101, 493.381 509.137, 493.124 509.107, 492.806 508.960, 492.513 508.783, 492.308 508.478, 492.097 508.149, 491.992 507.936, 491.966 507.786, 491.972 507.759, 491.976 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 570.845, 491.803 570.829, 491.805 570.644, 491.856 570.476, 491.932 570.287, 492.045 570.180, 492.149 570.039, 492.299 569.887, 492.598 569.849, 492.907 569.883, 493.212 570.026, 493.525 570.224, 493.744 570.531, 493.970 570.865, 494.081 571.099, 494.109 571.237, 494.101 571.421, 494.080 571.606, 494.028 571.774, 493.953 571.962, 493.839 572.069, 493.736 572.210, 493.585 572.362, 493.287 572.400, 492.979 572.366, 492.673 572.224, 492.360 572.025, 492.142 571.885, 492.039 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 634.066, 499.985 634.323, 500.015 634.446, 500.005 634.657, 499.984 634.827, 499.927 635.024, 499.849 635.197, 499.725 635.330, 499.618 635.456, 499.456 635.522, 499.363 635.620, 499.139 635.672, 498.813 635.621, 498.488 635.486, 498.157 635.239, 497.887 634.959, 497.687 634.625, 497.570 634.369, 497.540 634.245, 497.549 634.035, 497.571 633.865, 497.627 633.668, 497.706 633.494, 497.829 633.361, 497.937 633.235, 498.099 633.169, 498.192 633.070, 498.416 633.019, 498.742 633.069, 499.067 633.205, 499.398 633.453, 499.668 633.732, 499.869 634.066, 499.985 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 696.514, 500.691 696.615, 500.936 696.857, 501.219 697.159, 501.430 697.491, 501.552 697.768, 501.584 697.802, 501.581 698.112, 501.551 698.489, 501.409 698.804, 501.166 699.000, 500.897 699.032, 500.811 699.087, 500.662 699.120, 500.491 699.153, 500.320 699.108, 500.060 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 696.723, 499.465 696.574, 499.668 696.521, 499.810 696.510, 499.839 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 760.349, 492.214 760.508, 492.418 760.834, 492.638 761.158, 492.768 761.456, 492.800 761.807, 492.767 762.192, 492.619 762.262, 492.564 762.512, 492.367 762.712, 492.087 762.817, 491.804 762.866, 491.485 762.819, 491.130 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 823.891, 491.431 823.933, 491.522 824.158, 491.820 824.473, 492.029 824.505, 492.046 824.818, 492.180 825.134, 492.213 825.246, 492.203 825.488, 492.179 825.876, 492.027 826.199, 491.766 826.399, 491.478 826.520, 491.185 826.553, 490.856 826.515, 490.444 826.426, 490.252 826.356, 490.103 826.131, 489.805 825.817, 489.595 825.784, 489.579 825.472, 489.444 825.155, 489.411 825.068, 489.420 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 887.608, 490.143 887.692, 490.341 887.932, 490.645 888.231, 490.859 888.350, 490.910 888.593, 491.014 888.925, 491.047 889.109, 491.029 889.279, 491.013 889.666, 490.857 889.987, 490.591 890.173, 490.338 890.283, 490.087 890.322, 489.997 890.367, 489.614 890.317, 489.240 890.314, 489.235 890.171, 488.891 889.930, 488.587 889.632, 488.372 889.536, 488.331 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 952.808, 484.020 952.854, 483.963 952.872, 483.941 953.031, 483.541 953.101, 483.088 953.095, 483.055 953.023, 482.649 953.021, 482.634 952.871, 482.235 952.702, 482.031 952.576, 481.878 952.249, 481.622 952.021, 481.528 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 266.832, 487.071 266.699, 487.053 266.494, 487.057 266.146, 487.117 265.814, 487.276 265.636, 487.443 265.590, 487.488 265.458, 487.690 265.397, 487.969 265.431, 488.204 265.461, 488.273 265.547, 488.467 265.767, 488.701 266.100, 488.892 266.315, 488.957 266.412, 488.978 266.453, 488.987 266.622, 489.010 266.826, 489.005 267.174, 488.944 267.505, 488.786 267.682, 488.618 267.729, 488.573 267.861, 488.372 267.922, 488.093 267.900, 487.944 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 335.309, 488.220 335.096, 488.091 334.855, 488.020 334.728, 487.987 334.536, 487.963 334.334, 487.967 333.963, 488.034 333.608, 488.207 333.367, 488.440 333.239, 488.660 333.222, 488.732 333.167, 488.965 333.213, 489.222 333.224, 489.277 333.328, 489.509 333.556, 489.766 333.656, 489.826 333.901, 489.974 334.142, 490.045 334.270, 490.077 334.461, 490.102 334.663, 490.097 334.778, 490.076 335.033, 490.030 335.388, 489.857 335.629, 489.624 335.756, 489.404 335.769, 489.349 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 401.550, 485.612 401.404, 485.756 401.283, 485.994 401.260, 486.054 401.197, 486.327 401.248, 486.667 401.370, 486.919 401.603, 487.198 401.959, 487.425 402.340, 487.538 402.555, 487.565 402.751, 487.560 402.893, 487.538 403.144, 487.488 403.521, 487.300 403.779, 487.047 403.899, 486.809 403.922, 486.749 403.985, 486.477 403.934, 486.137 403.812, 485.886 403.580, 485.607 403.225, 485.379 403.055, 485.328 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 469.388, 484.724 469.368, 484.765 469.316, 485.059 469.358, 485.425 469.499, 485.696 469.537, 485.763 469.690, 485.945 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 540.237, 485.780 540.269, 485.747 540.296, 485.719 540.469, 485.375 540.506, 485.062 540.508, 485.019 540.476, 484.670 540.303, 484.308 540.285, 484.288 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 607.080, 487.329 607.371, 487.362 607.525, 487.356 607.759, 487.328 607.968, 487.268 608.186, 487.174 608.398, 487.038 608.542, 486.910 608.698, 486.729 608.765, 486.617 608.886, 486.363 608.940, 485.986 608.889, 485.614 608.725, 485.230 608.432, 484.915 608.114, 484.686 607.720, 484.547 607.428, 484.514 607.275, 484.519 607.040, 484.548 606.831, 484.607 606.614, 484.702 606.400, 484.837 606.257, 484.966 606.100, 485.146 606.034, 485.259 605.911, 485.512 605.858, 485.891 605.909, 486.262 606.073, 486.647 606.368, 486.962 606.516, 487.069 606.685, 487.191 607.016, 487.307 607.080, 487.329 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 675.440, 496.661 675.449, 496.662 675.758, 496.698 675.890, 496.687 676.159, 496.660 676.344, 496.592 676.437, 496.557 676.599, 496.496 676.966, 496.216 677.195, 495.906 677.224, 495.832 677.303, 495.635 677.305, 495.622 677.373, 495.238 677.301, 494.843 677.292, 494.796 677.149, 494.440 676.863, 494.110 676.516, 493.867 676.125, 493.723 675.807, 493.688 675.675, 493.697 675.406, 493.724 675.220, 493.791 674.966, 493.888 674.599, 494.169 674.369, 494.479 674.261, 494.750 674.190, 495.147 674.262, 495.542 674.273, 495.589 674.415, 495.946 674.702, 496.275 675.049, 496.519 675.440, 496.661 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 743.141, 489.312 743.173, 489.385 743.448, 489.731 743.822, 489.984 744.204, 490.135 744.339, 490.150 744.546, 490.172 744.651, 490.164 744.955, 490.134 745.316, 489.997 745.402, 489.964 745.444, 489.931 745.776, 489.672 746.008, 489.349 746.127, 489.021 746.188, 488.653 746.123, 488.190 745.980, 487.874 745.956, 487.820 745.683, 487.473 745.308, 487.220 744.927, 487.068 744.584, 487.032 744.479, 487.038 744.176, 487.069 743.728, 487.239 743.721, 487.244 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 811.804, 482.957 811.830, 483.212 812.019, 483.610 812.278, 483.954 812.648, 484.200 812.678, 484.215 813.046, 484.374 813.406, 484.411 813.411, 484.412 813.487, 484.406 813.824, 484.373 814.277, 484.198 814.653, 483.896 814.887, 483.563 815.024, 483.221 815.066, 482.842 815.041, 482.587 815.019, 482.361 814.831, 481.962 814.572, 481.618 814.203, 481.371 813.804, 481.197 813.483, 481.165 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 881.023, 484.155 881.183, 484.358 881.534, 484.610 881.795, 484.721 881.954, 484.788 882.340, 484.827 882.487, 484.813 882.752, 484.787 883.204, 484.607 883.579, 484.299 883.792, 484.001 883.968, 483.607 883.999, 483.327 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 948.042, 476.233 948.030, 476.248 947.842, 476.713 947.762, 477.246 947.851, 477.757 947.858, 477.777 948.031, 478.242 948.230, 478.483 948.375, 478.658 948.758, 478.959 949.271, 479.169 949.740, 479.213 950.216, 479.167 950.737, 478.956 951.100, 478.654 951.169, 478.591 951.452, 478.237 951.486, 478.152 951.638, 477.772 951.720, 477.240 951.629, 476.729 951.625, 476.708 951.450, 476.243 951.212, 475.955 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 205.023, 479.531 204.696, 479.586 204.310, 479.766 204.087, 479.955 203.883, 480.236 203.820, 480.556 203.849, 480.823 203.993, 481.124 204.227, 481.362 204.258, 481.393 204.497, 481.527 204.655, 481.613 204.894, 481.686 205.075, 481.723 205.261, 481.748 205.475, 481.746 205.514, 481.745 205.920, 481.677 206.305, 481.498 206.528, 481.308 206.731, 481.028 206.795, 480.708 206.765, 480.441 206.622, 480.141 206.487, 480.004 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 279.301, 481.845 279.208, 481.823 278.996, 481.795 278.745, 481.798 278.311, 481.873 277.897, 482.071 277.720, 482.239 277.617, 482.337 277.454, 482.587 277.377, 482.938 277.421, 483.232 277.564, 483.562 277.838, 483.857 278.251, 484.097 278.464, 484.160 278.521, 484.177 278.689, 484.217 278.902, 484.245 279.153, 484.240 279.587, 484.165 280.000, 483.968 280.201, 483.776 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 351.862, 484.645 352.091, 484.786 352.392, 484.873 352.542, 484.916 352.782, 484.946 353.026, 484.941 353.253, 484.901 353.484, 484.860 353.551, 484.826 353.921, 484.645 353.956, 484.611 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 428.350, 483.878 428.344, 483.866 428.281, 483.788 428.249, 483.747 428.064, 483.520 427.634, 483.239 427.590, 483.225 427.173, 483.098 427.006, 483.077 426.903, 483.065 426.671, 483.069 426.490, 483.098 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 425.259, 484.017 425.233, 484.071 425.161, 484.407 425.190, 484.618 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 499.415, 487.493 499.292, 487.742 499.237, 488.104 499.253, 488.267 499.255, 488.282 499.282, 488.554 499.493, 488.970 499.588, 489.080 499.742, 489.258 500.176, 489.559 500.643, 489.708 500.944, 489.744 501.159, 489.736 501.191, 489.732 501.379, 489.707 501.494, 489.679 501.660, 489.640 501.857, 489.539 502.143, 489.391 502.431, 489.101 502.477, 489.055 502.583, 488.842 502.673, 488.660 502.727, 488.298 502.683, 487.849 502.593, 487.672 502.473, 487.433 502.224, 487.145 501.980, 486.975 501.931, 486.942 501.791, 486.844 501.609, 486.786 501.591, 486.780 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 573.998, 478.915 574.049, 479.028 574.329, 479.333 574.401, 479.394 574.760, 479.657 575.228, 479.819 575.559, 479.856 575.752, 479.852 575.944, 479.827 576.011, 479.818 576.269, 479.753 576.508, 479.641 576.634, 479.568 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 574.849, 476.709 574.682, 476.788 574.418, 476.939 574.266, 477.091 574.110, 477.253 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 649.719, 479.529 650.081, 479.568 650.246, 479.564 650.547, 479.528 650.776, 479.459 651.059, 479.341 651.293, 479.180 651.486, 479.021 651.654, 478.804 651.753, 478.665 651.886, 478.359 651.962, 477.897 651.886, 477.447 651.702, 476.976 651.362, 476.589 650.967, 476.312 650.505, 476.138 650.142, 476.100 649.977, 476.102 649.676, 476.140 649.447, 476.206 649.164, 476.326 648.929, 476.485 648.737, 476.646 648.567, 476.862 648.469, 477.002 648.335, 477.308 648.260, 477.771 648.335, 478.221 648.520, 478.693 648.862, 479.079 649.256, 479.357 649.719, 479.529 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 723.401, 485.821 723.820, 486.106 724.272, 486.284 724.666, 486.326 724.799, 486.318 724.876, 486.310 725.143, 486.282 725.667, 486.085 726.013, 485.818 726.103, 485.747 726.375, 485.373 726.385, 485.345 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 797.837, 472.311 798.027, 472.705 798.325, 473.103 798.761, 473.394 799.222, 473.595 799.644, 473.636 799.739, 473.636 799.740, 473.636 800.127, 473.594 800.656, 473.391 801.096, 473.043 801.370, 472.656 801.526, 472.256 801.580, 471.819 801.520, 471.255 801.491, 471.195 801.297, 470.787 800.998, 470.390 800.562, 470.097 800.101, 469.897 799.679, 469.857 799.649, 469.856 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 872.876, 481.055 872.898, 481.106 873.221, 481.517 873.336, 481.599 873.635, 481.812 873.718, 481.848 874.124, 482.021 874.232, 482.031 874.372, 482.045 874.573, 482.065 875.013, 482.023 875.056, 482.019 875.347, 481.904 875.585, 481.810 875.590, 481.805 875.843, 481.598 876.024, 481.450 876.269, 481.101 876.297, 481.051 876.477, 480.641 876.533, 480.117 876.505, 479.893 876.469, 479.612 876.325, 479.274 876.266, 479.134 876.058, 478.871 875.943, 478.724 875.530, 478.427 875.294, 478.327 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 945.443, 460.615 945.542, 461.180 945.552, 461.217 945.754, 461.756 945.782, 461.789 946.157, 462.239 946.391, 462.427 946.607, 462.601 947.207, 462.843 947.772, 462.898 948.315, 462.841 948.926, 462.597 949.432, 462.173 949.672, 461.866 949.764, 461.749 949.983, 461.210 950.026, 460.919 950.078, 460.580 949.966, 459.949 949.824, 459.576 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 130.530, 475.234 130.347, 475.489 130.283, 475.819 130.282, 475.854 130.303, 476.158 130.483, 476.503 130.607, 476.622 130.802, 476.811 131.067, 476.962 131.278, 477.063 131.543, 477.146 131.780, 477.189 131.983, 477.218 132.300, 477.216 132.775, 477.139 133.223, 476.935 133.391, 476.807 133.504, 476.721 133.735, 476.401 133.797, 476.072 133.800, 476.036 133.778, 475.733 133.624, 475.437 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 212.326, 466.543 211.862, 466.758 211.587, 466.988 211.333, 467.339 211.252, 467.740 211.290, 468.071 211.299, 468.089 211.469, 468.450 211.797, 468.789 212.290, 469.068 212.589, 469.158 212.811, 469.209 213.044, 469.239 213.357, 469.241 213.820, 469.165 213.862, 469.158 214.342, 468.936 214.616, 468.705 214.869, 468.354 214.950, 467.955 214.913, 467.643 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 293.736, 475.629 293.677, 475.621 293.372, 475.623 292.836, 475.714 292.325, 475.958 291.979, 476.288 291.782, 476.597 291.689, 477.011 291.684, 477.033 291.742, 477.396 291.776, 477.479 291.916, 477.807 292.251, 478.175 292.758, 478.475 293.095, 478.574 293.297, 478.626 293.481, 478.649 293.563, 478.660 293.868, 478.657 294.403, 478.565 294.913, 478.321 295.258, 477.991 295.454, 477.683 295.552, 477.248 295.523, 477.069 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 375.658, 478.007 375.550, 477.939 375.000, 477.776 374.699, 477.739 374.408, 477.742 373.844, 477.841 373.305, 478.106 372.937, 478.464 372.755, 478.799 372.637, 479.272 372.640, 479.286 372.717, 479.755 372.883, 480.110 373.222, 480.508 373.616, 480.756 373.738, 480.833 374.289, 480.995 374.590, 481.033 374.881, 481.028 375.444, 480.928 375.982, 480.663 376.349, 480.306 376.530, 479.971 376.619, 479.613 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 455.557, 481.096 455.703, 481.114 455.893, 481.136 456.119, 481.133 456.164, 481.132 456.399, 481.095 456.749, 481.024 457.312, 480.740 457.699, 480.356 457.920, 479.901 457.997, 479.490 457.993, 479.455 457.935, 478.972 457.739, 478.591 457.678, 478.492 457.403, 478.164 456.887, 477.814 456.331, 477.638 455.994, 477.599 455.724, 477.602 455.488, 477.640 455.138, 477.709 454.574, 477.993 454.186, 478.378 453.964, 478.833 453.885, 479.245 453.949, 479.764 454.145, 480.146 454.208, 480.244 454.361, 480.428 454.482, 480.573 455.000, 480.922 455.557, 481.096 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 537.044, 479.859 537.419, 479.902 537.663, 479.898 537.947, 479.858 538.269, 479.783 538.527, 479.654 538.705, 479.559 538.855, 479.478 539.261, 479.068 539.505, 478.581 539.557, 478.141 539.559, 478.077 539.514, 477.586 539.270, 477.073 538.956, 476.722 538.442, 476.347 537.885, 476.158 537.510, 476.116 537.267, 476.118 536.982, 476.160 536.659, 476.232 536.402, 476.363 536.072, 476.537 535.665, 476.948 535.421, 477.435 535.367, 477.876 535.368, 477.941 535.412, 478.432 535.658, 478.946 535.971, 479.298 536.396, 479.606 536.487, 479.672 537.044, 479.859 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 618.977, 464.894 619.390, 464.937 619.599, 464.941 619.934, 464.893 620.219, 464.823 620.531, 464.680 620.822, 464.504 621.031, 464.312 621.243, 464.071 621.343, 463.903 621.509, 463.555 621.588, 463.017 621.511, 462.503 621.286, 461.953 620.879, 461.498 620.429, 461.181 619.880, 460.974 619.467, 460.932 619.258, 460.925 618.923, 460.975 618.637, 461.042 618.325, 461.187 618.032, 461.361 617.825, 461.555 617.610, 461.795 617.512, 461.964 617.345, 462.312 617.266, 462.851 617.342, 463.366 617.569, 463.917 617.978, 464.371 618.427, 464.689 618.977, 464.894 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 700.601, 474.423 701.053, 474.469 701.222, 474.468 701.611, 474.422 701.853, 474.342 702.223, 474.196 702.733, 473.806 703.051, 473.374 703.192, 473.003 703.299, 472.439 703.194, 471.810 702.984, 471.318 702.596, 470.844 702.103, 470.508 701.567, 470.294 701.115, 470.248 700.946, 470.247 700.557, 470.295 700.314, 470.372 699.945, 470.521 699.434, 470.910 699.114, 471.342 698.972, 471.713 698.866, 472.278 698.973, 472.908 699.181, 473.401 699.572, 473.874 700.065, 474.211 700.601, 474.423 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 781.557, 468.416 781.456, 468.495 781.195, 468.861 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 863.190, 460.486 863.176, 460.518 863.116, 461.138 863.184, 461.721 863.428, 462.287 863.803, 462.763 864.291, 463.119 864.649, 463.268 864.861, 463.357 865.383, 463.405 865.454, 463.411 865.950, 463.355 866.570, 463.115 867.085, 462.698 867.404, 462.235 867.405, 462.234 867.613, 461.750 867.675, 461.130 867.604, 460.548 867.363, 459.981 866.987, 459.506 866.500, 459.149 866.351, 459.087 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 942.708, 454.859 942.726, 454.960 942.740, 455.010 942.978, 455.642 943.199, 455.908 943.452, 456.211 943.481, 456.235 943.782, 456.478 943.985, 456.642 944.124, 456.698 944.578, 456.880 944.692, 456.926 945.299, 456.987 945.359, 456.994 945.999, 456.923 946.721, 456.637 947.319, 456.138 947.385, 456.053 947.708, 455.634 947.820, 455.361 947.967, 455.001 947.995, 454.816 948.063, 454.363 948.079, 454.254 948.030, 453.981 947.960, 453.587 947.955, 453.559 947.946, 453.508 947.739, 452.963 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 41.599, 466.763 41.358, 467.098 41.263, 467.473 41.302, 467.862 41.454, 468.139 41.529, 468.257 41.739, 468.467 41.918, 468.611 42.210, 468.783 42.494, 468.902 42.732, 468.978 42.786, 468.995 43.099, 469.049 43.318, 469.080 43.718, 469.082 44.277, 468.996 44.726, 468.801 44.803, 468.764 45.119, 468.552 45.162, 468.523 45.424, 468.158 45.518, 467.784 45.480, 467.396 45.328, 467.119 45.254, 467.001 45.044, 466.792 44.866, 466.647 44.575, 466.476 44.292, 466.356 44.133, 466.305 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 130.687, 466.615 130.419, 466.988 130.339, 467.399 130.337, 467.447 130.364, 467.827 130.556, 468.197 130.590, 468.261 130.990, 468.650 131.298, 468.825 131.323, 468.839 131.587, 468.970 131.920, 469.073 132.217, 469.132 132.471, 469.166 132.868, 469.168 133.464, 469.073 133.639, 468.994 134.027, 468.818 134.379, 468.553 134.443, 468.465 134.668, 468.152 134.746, 467.741 134.750, 467.694 134.723, 467.315 134.500, 466.885 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 221.438, 453.146 220.923, 453.383 220.584, 453.663 220.267, 454.101 220.165, 454.603 220.187, 454.780 220.215, 455.013 220.434, 455.489 220.841, 455.917 221.452, 456.269 221.826, 456.380 222.098, 456.451 222.389, 456.487 222.775, 456.495 223.403, 456.395 223.412, 456.391 223.998, 456.120 224.335, 455.839 224.651, 455.402 224.753, 454.901 224.735, 454.750 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 311.494, 459.636 311.826, 459.675 312.193, 459.682 312.851, 459.573 313.479, 459.274 313.904, 458.868 314.138, 458.495 314.262, 457.953 314.186, 457.510 314.155, 457.396 313.978, 456.996 313.571, 456.534 312.954, 456.153 312.296, 455.955 311.964, 455.917 311.596, 455.908 310.937, 456.016 310.308, 456.315 309.881, 456.722 309.645, 457.095 309.521, 457.638 309.597, 458.083 309.629, 458.196 309.806, 458.598 310.216, 459.060 310.835, 459.441 311.494, 459.636 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 401.251, 459.624 401.627, 459.666 401.969, 459.674 402.655, 459.556 403.312, 459.234 403.762, 458.796 403.971, 458.394 404.011, 458.273 404.120, 457.810 404.033, 457.209 403.820, 456.777 403.415, 456.279 402.795, 455.867 402.131, 455.655 401.755, 455.614 401.412, 455.603 400.725, 455.720 400.066, 456.042 399.616, 456.481 399.404, 456.883 399.366, 457.005 399.255, 457.469 399.344, 458.071 399.556, 458.504 399.964, 459.003 400.586, 459.413 401.251, 459.624 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 489.771, 458.918 489.517, 459.171 489.240, 459.733 489.158, 460.233 489.225, 460.878 489.528, 461.478 489.876, 461.877 490.494, 462.317 491.160, 462.542 491.582, 462.587 491.891, 462.593 492.198, 462.540 492.602, 462.466 493.286, 462.120 493.758, 461.650 494.034, 461.089 494.114, 460.590 494.049, 459.946 493.748, 459.347 493.400, 458.949 492.784, 458.509 492.120, 458.282 492.083, 458.278 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 579.691, 457.883 579.803, 458.137 580.296, 458.665 580.806, 459.031 581.463, 459.272 581.933, 459.320 582.200, 459.329 582.570, 459.270 582.929, 459.195 583.270, 459.026 583.421, 458.944 583.636, 458.827 584.096, 458.357 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 670.416, 448.853 670.739, 449.241 670.859, 449.384 671.118, 449.561 671.424, 449.769 672.064, 450.030 672.582, 450.078 672.798, 450.094 673.235, 450.028 673.540, 449.955 673.953, 449.771 674.117, 449.664 674.264, 449.569 674.552, 449.325 674.771, 449.041 674.926, 448.826 675.102, 448.408 675.167, 448.035 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 760.710, 463.539 760.548, 463.985 760.454, 464.577 760.555, 465.349 760.835, 465.946 761.274, 466.528 761.894, 466.937 762.509, 467.200 763.075, 467.255 763.233, 467.259 763.302, 467.251 763.741, 467.198 764.470, 466.925 765.078, 466.451 765.457, 465.925 765.656, 465.381 765.657, 465.378 765.748, 464.787 765.650, 464.016 765.369, 463.420 764.932, 462.836 764.313, 462.429 763.699, 462.163 763.133, 462.110 762.974, 462.102 762.759, 462.128 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 851.879, 449.100 851.891, 449.128 852.328, 449.683 852.909, 450.109 853.457, 450.336 853.575, 450.385 854.278, 450.455 854.672, 450.406 854.854, 450.383 855.585, 450.104 856.193, 449.618 856.570, 449.075 856.810, 448.503 856.878, 447.769 856.871, 447.708 856.801, 447.091 856.579, 446.574 856.512, 446.419 856.074, 445.865 855.495, 445.436 855.055, 445.255 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 939.362, 434.356 939.232, 434.665 939.104, 435.562 939.246, 436.379 939.266, 436.459 939.547, 437.200 939.880, 437.605 940.050, 437.811 940.109, 437.869 940.745, 438.395 941.584, 438.726 942.379, 438.819 943.137, 438.723 943.995, 438.389 944.706, 437.802 945.167, 437.189 945.262, 436.960 945.476, 436.446 945.607, 435.549 945.448, 434.652 945.164, 433.911 944.946, 433.643 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 30.809, 455.129 30.722, 455.459 30.773, 455.950 30.963, 456.297 31.062, 456.449 31.323, 456.711 31.554, 456.898 31.918, 457.112 32.192, 457.230 32.282, 457.268 32.646, 457.384 33.046, 457.459 33.318, 457.496 33.826, 457.504 34.530, 457.399 35.100, 457.161 35.192, 457.110 35.647, 456.814 35.976, 456.355 36.052, 456.065 36.098, 455.890 36.047, 455.400 35.857, 455.054 35.761, 454.902 35.500, 454.641 35.272, 454.453 34.907, 454.240 34.678, 454.140 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 131.216, 449.062 131.203, 449.071 130.842, 449.573 130.743, 450.080 130.740, 450.149 130.773, 450.617 131.055, 451.164 131.191, 451.299 131.554, 451.656 131.969, 451.888 132.298, 452.062 132.712, 452.188 133.082, 452.273 133.399, 452.312 133.894, 452.324 134.636, 452.211 135.337, 451.896 135.659, 451.661 135.775, 451.577 136.135, 451.076 136.232, 450.571 136.237, 450.502 136.203, 450.035 135.924, 449.490 135.881, 449.447 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 233.311, 440.738 232.722, 440.829 231.982, 441.168 231.567, 441.510 231.172, 442.055 231.044, 442.681 231.089, 443.033 231.109, 443.188 231.378, 443.784 231.879, 444.320 232.633, 444.766 233.430, 444.998 233.795, 445.039 234.267, 445.057 235.014, 444.941 235.045, 444.936 235.783, 444.596 236.194, 444.254 236.587, 443.711 236.716, 443.087 236.650, 442.582 236.383, 441.987 236.119, 441.702 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 334.694, 433.044 334.566, 433.031 334.125, 433.004 333.315, 433.131 332.540, 433.496 332.014, 433.997 331.733, 434.448 331.575, 435.126 331.626, 435.411 331.701, 435.827 331.927, 436.319 332.425, 436.901 333.180, 437.387 333.984, 437.642 334.184, 437.663 334.401, 437.685 334.841, 437.709 335.650, 437.581 336.422, 437.216 336.947, 436.715 337.224, 436.264 337.340, 435.773 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 436.870, 437.835 436.283, 437.425 435.483, 437.151 435.010, 437.105 434.611, 437.078 433.773, 437.217 432.967, 437.610 432.414, 438.149 432.172, 438.636 432.102, 438.799 431.980, 439.365 432.061, 439.984 432.079, 440.116 432.350, 440.646 432.457, 440.817 432.839, 441.271 433.157, 441.492 433.587, 441.790 434.389, 442.061 434.861, 442.109 435.260, 442.131 436.096, 441.991 436.900, 441.598 437.450, 441.059 437.689, 440.572 437.762, 440.411 437.881, 439.847 437.785, 439.098 437.662, 438.859 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 535.007, 451.669 535.539, 451.722 535.885, 451.738 536.745, 451.585 537.243, 451.331 537.576, 451.162 538.151, 450.584 538.496, 449.892 538.571, 449.283 538.572, 449.167 538.509, 448.485 538.163, 447.741 537.718, 447.255 537.565, 447.124 536.989, 446.704 536.199, 446.416 535.668, 446.365 535.321, 446.344 534.459, 446.495 533.626, 446.918 533.049, 447.497 532.702, 448.192 532.624, 448.802 532.629, 448.919 532.689, 449.602 533.039, 450.347 533.483, 450.835 533.640, 450.963 534.216, 451.384 534.235, 451.391 535.007, 451.669 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 633.938, 443.798 633.868, 444.258 633.984, 444.982 634.298, 445.777 634.869, 446.436 635.515, 446.883 636.285, 447.188 636.878, 447.243 637.161, 447.265 637.648, 447.186 638.038, 447.104 638.494, 446.888 638.874, 446.665 638.891, 446.655 639.200, 446.369 639.487, 446.041 639.642, 445.789 639.867, 445.304 639.987, 444.531 639.940, 444.245 639.868, 443.809 639.558, 443.014 638.991, 442.354 638.345, 441.909 637.576, 441.600 636.700, 441.520 636.213, 441.603 635.821, 441.679 635.366, 441.899 634.965, 442.128 634.950, 442.142 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 735.513, 430.850 735.481, 431.024 735.612, 431.946 735.928, 432.629 736.459, 433.333 737.200, 433.826 737.913, 434.132 738.776, 434.221 739.033, 434.180 739.354, 434.129 739.661, 434.056 740.215, 433.820 740.529, 433.587 740.932, 433.275 741.379, 432.666 741.557, 432.161 741.604, 432.013 741.616, 431.946 741.725, 431.340 741.597, 430.420 741.279, 429.739 740.752, 429.033 740.014, 428.537 739.300, 428.232 738.437, 428.139 738.258, 428.169 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 840.908, 449.732 841.002, 449.720 841.870, 449.390 842.058, 449.241 842.592, 448.816 843.027, 448.195 843.041, 448.175 843.135, 447.946 843.175, 447.847 843.319, 447.498 843.349, 447.153 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 838.527, 443.929 837.864, 444.454 837.694, 444.696 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 934.994, 406.102 934.818, 406.508 934.668, 407.602 934.835, 408.561 934.866, 408.695 935.200, 409.565 935.625, 410.096 935.806, 410.322 936.637, 411.011 937.641, 411.396 938.596, 411.528 939.502, 411.392 940.531, 411.002 941.384, 410.309 941.933, 409.549 942.056, 409.261 942.306, 408.676 942.461, 407.583 942.268, 406.490 941.930, 405.620 941.611, 405.216 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 20.510, 428.280 21.022, 428.396 21.362, 428.436 22.008, 428.466 22.896, 428.343 23.621, 428.067 24.310, 427.635 24.723, 427.058 24.880, 426.485 24.814, 425.861 24.577, 425.430 24.449, 425.223 24.124, 424.903 23.830, 424.647 23.375, 424.386 22.912, 424.164 22.456, 424.025 21.946, 423.906 21.606, 423.867 20.959, 423.833 20.069, 423.956 19.340, 424.229 18.647, 424.662 18.233, 425.241 18.073, 425.815 18.141, 426.442 18.379, 426.875 18.510, 427.081 18.835, 427.403 19.133, 427.658 19.588, 427.921 20.055, 428.140 20.510, 428.280 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 138.596, 417.372 138.590, 417.302 138.242, 416.605 137.986, 416.345 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 132.694, 415.724 132.339, 415.965 131.886, 416.594 131.848, 416.790 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 251.133, 425.596 250.930, 425.372 250.004, 424.804 249.399, 424.618 249.019, 424.500 248.559, 424.454 247.981, 424.415 247.900, 424.427 247.809, 424.441 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 245.475, 428.381 245.965, 428.916 246.896, 429.483 247.456, 429.653 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 475.201, 420.863 475.559, 421.127 476.521, 421.480 477.574, 421.579 478.594, 421.414 479.576, 420.934 480.251, 420.270 480.644, 419.464 480.749, 418.868 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 588.439, 414.470 588.434, 414.514 588.542, 415.338 588.937, 416.283 589.637, 417.072 590.371, 417.580 591.304, 417.960 592.352, 418.068 593.391, 417.894 594.398, 417.382 594.902, 416.873 595.099, 416.673 595.535, 415.812 595.539, 415.786 595.655, 414.900 595.543, 414.078 595.153, 413.135 594.624, 412.533 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 703.683, 407.728 703.753, 408.168 704.104, 408.954 704.753, 409.798 705.647, 410.395 706.469, 410.744 707.501, 410.865 708.144, 410.753 708.551, 410.683 709.173, 410.386 709.578, 410.142 710.023, 409.757 710.301, 409.391 710.553, 409.049 710.782, 408.475 710.964, 407.503 710.862, 406.845 710.794, 406.410 710.440, 405.627 709.797, 404.781 708.907, 404.179 708.083, 403.832 707.051, 403.706 706.419, 403.814 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 818.794, 433.449 818.866, 434.229 819.296, 435.178 819.894, 435.948 820.736, 436.557 821.319, 436.799 821.654, 436.938 822.661, 437.046 823.442, 436.934 823.717, 436.840 824.477, 436.549 825.338, 435.874 825.873, 435.118 826.193, 434.310 826.281, 433.475 826.276, 433.377 826.269, 433.274 826.181, 432.335 825.756, 431.385 825.156, 430.617 824.318, 430.003 823.798, 429.789 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 477.530, 514.418 477.538, 514.487 477.600, 514.606 477.615, 514.631 477.701, 514.734 477.857, 514.837 478.025, 514.886 478.130, 514.900 478.210, 514.893 478.285, 514.886 478.389, 514.858 478.455, 514.825 478.561, 514.768 478.679, 514.649 478.748, 514.510 478.761, 514.430 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 527.808, 513.166 527.768, 513.189 527.641, 513.319 527.565, 513.469 527.547, 513.611 527.562, 513.781 527.640, 513.937 527.737, 514.050 527.899, 514.161 528.074, 514.214 528.101, 514.218 528.191, 514.230 528.356, 514.214 528.458, 514.184 528.537, 514.149 528.570, 514.129 528.642, 514.087 528.768, 513.957 528.844, 513.807 528.862, 513.665 528.847, 513.495 528.770, 513.339 528.673, 513.227 528.511, 513.115 528.346, 513.065 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 578.015, 516.186 577.987, 516.196 577.894, 516.234 577.792, 516.301 577.733, 516.354 577.726, 516.361 577.662, 516.435 577.656, 516.441 577.631, 516.486 577.573, 516.604 577.552, 516.771 577.571, 516.941 577.648, 517.109 577.758, 517.231 577.846, 517.294 577.925, 517.351 578.106, 517.408 578.228, 517.424 578.235, 517.425 578.411, 517.408 578.511, 517.374 578.604, 517.337 578.706, 517.269 578.765, 517.216 578.841, 517.129 578.866, 517.084 578.921, 516.974 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 628.286, 517.549 628.427, 517.567 628.611, 517.548 628.814, 517.473 628.911, 517.400 628.983, 517.344 629.054, 517.251 629.089, 517.203 629.144, 517.077 629.172, 516.899 629.145, 516.718 629.069, 516.538 628.948, 516.409 628.932, 516.393 628.779, 516.281 628.594, 516.219 628.453, 516.202 628.268, 516.220 628.173, 516.255 628.066, 516.296 627.969, 516.367 627.897, 516.424 627.826, 516.517 627.791, 516.565 627.735, 516.691 627.708, 516.869 627.735, 517.050 627.810, 517.230 627.931, 517.360 627.948, 517.376 628.101, 517.488 628.286, 517.549 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 678.182, 512.103 678.097, 512.218 678.046, 512.350 678.012, 512.539 678.047, 512.730 678.051, 512.748 678.119, 512.921 678.256, 513.076 678.423, 513.194 678.610, 513.259 678.762, 513.278 678.954, 513.259 679.165, 513.179 679.340, 513.044 679.450, 512.894 679.501, 512.762 679.536, 512.573 679.500, 512.382 679.497, 512.364 679.428, 512.191 679.291, 512.036 679.191, 511.965 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 728.329, 512.160 728.313, 512.246 728.348, 512.467 728.426, 512.648 728.561, 512.811 728.741, 512.936 728.928, 513.005 729.092, 513.024 729.291, 513.004 729.508, 512.920 729.690, 512.778 729.803, 512.620 729.859, 512.464 729.886, 512.311 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 729.221, 511.517 729.112, 511.504 729.054, 511.510 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 778.738, 511.868 778.814, 512.033 778.946, 512.203 779.137, 512.332 779.322, 512.404 779.492, 512.423 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 830.672, 514.705 830.652, 514.663 830.520, 514.487 830.318, 514.354 830.227, 514.316 830.137, 514.280 829.952, 514.259 829.747, 514.280 829.674, 514.309 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 879.734, 515.175 879.773, 515.266 879.913, 515.445 880.089, 515.565 880.125, 515.583 880.300, 515.658 880.493, 515.680 880.501, 515.679 880.700, 515.658 880.927, 515.565 881.018, 515.488 881.115, 515.408 881.221, 515.264 881.310, 515.062 881.334, 514.842 881.322, 514.744 881.306, 514.620 881.220, 514.420 881.187, 514.378 881.080, 514.241 880.904, 514.120 880.868, 514.104 880.693, 514.028 880.615, 514.019 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 930.298, 511.582 930.275, 511.743 930.310, 511.968 930.390, 512.170 930.536, 512.352 930.589, 512.391 930.704, 512.474 930.922, 512.567 931.011, 512.577 931.122, 512.589 931.327, 512.567 931.552, 512.473 931.704, 512.351 931.739, 512.314 931.821, 512.213 931.857, 512.169 931.939, 511.965 931.957, 511.841 931.971, 511.742 931.935, 511.517 931.856, 511.314 931.710, 511.133 931.668, 511.103 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 447.004, 515.154 447.056, 515.168 447.176, 515.184 447.274, 515.176 447.357, 515.168 447.484, 515.135 447.686, 515.031 447.825, 514.892 447.904, 514.731 447.933, 514.579 447.909, 514.397 447.840, 514.259 447.719, 514.110 447.533, 513.991 447.384, 513.948 447.332, 513.934 447.213, 513.917 447.114, 513.925 447.031, 513.934 446.904, 513.966 446.702, 514.070 446.563, 514.209 446.484, 514.371 446.455, 514.522 446.479, 514.704 446.548, 514.843 446.670, 514.992 446.856, 515.111 447.004, 515.154 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 499.814, 511.678 499.761, 511.732 499.674, 511.908 499.649, 512.072 499.669, 512.270 499.763, 512.451 499.874, 512.582 500.067, 512.711 500.275, 512.774 500.404, 512.791 500.408, 512.791 500.504, 512.783 500.602, 512.773 500.727, 512.739 500.815, 512.697 500.943, 512.626 501.091, 512.476 501.179, 512.300 501.203, 512.136 501.200, 512.107 501.183, 511.938 501.089, 511.757 500.979, 511.626 500.786, 511.497 500.578, 511.434 500.444, 511.417 500.348, 511.425 500.333, 511.426 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 553.292, 508.728 553.195, 508.788 553.130, 508.850 553.037, 508.949 552.941, 509.138 552.919, 509.332 552.938, 509.527 553.031, 509.723 553.155, 509.863 553.353, 510.003 553.567, 510.071 553.715, 510.089 553.806, 510.081 553.919, 510.070 554.041, 510.033 554.144, 509.989 554.268, 509.912 554.333, 509.850 554.426, 509.751 554.522, 509.562 554.544, 509.369 554.525, 509.173 554.432, 508.977 554.308, 508.837 554.300, 508.832 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 607.043, 513.467 606.964, 513.457 606.749, 513.478 606.632, 513.519 606.511, 513.566 606.392, 513.649 606.313, 513.715 606.225, 513.823 606.189, 513.879 606.121, 514.025 606.091, 514.232 606.119, 514.443 606.126, 514.458 606.211, 514.652 606.349, 514.803 606.374, 514.822 606.551, 514.952 606.770, 515.024 606.792, 515.027 606.933, 515.044 607.148, 515.024 607.265, 514.983 607.386, 514.936 607.504, 514.852 607.584, 514.786 607.671, 514.679 607.708, 514.622 607.776, 514.477 607.806, 514.269 607.799, 514.218 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 659.598, 507.826 659.576, 507.957 659.613, 508.179 659.623, 508.204 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 713.885, 508.281 713.703, 508.299 713.449, 508.396 713.236, 508.562 713.104, 508.745 713.047, 508.906 713.041, 508.927 713.001, 509.137 713.043, 509.394 713.132, 509.605 713.292, 509.795 713.499, 509.939 713.721, 510.020 713.910, 510.042 714.142, 510.020 714.396, 509.922 714.609, 509.757 714.741, 509.574 714.798, 509.413 714.804, 509.392 714.844, 509.182 714.802, 508.925 714.713, 508.714 714.594, 508.573 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 766.588, 514.058 766.625, 514.138 766.780, 514.336 767.001, 514.486 767.220, 514.569 767.327, 514.582 767.422, 514.593 767.659, 514.569 767.919, 514.467 768.135, 514.294 768.262, 514.115 768.270, 514.104 768.342, 513.914 768.374, 513.695 768.340, 513.428 768.239, 513.208 768.213, 513.174 768.142, 513.085 768.128, 513.066 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 767.032, 512.845 766.945, 512.879 766.728, 513.051 766.684, 513.114 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 820.200, 514.698 820.258, 514.819 820.410, 515.024 820.627, 515.168 820.645, 515.180 820.695, 515.200 820.696, 515.200 820.859, 515.266 821.073, 515.291 821.314, 515.265 821.391, 515.235 821.578, 515.160 821.707, 515.055 821.798, 514.981 821.836, 514.926 821.935, 514.783 822.016, 514.587 822.025, 514.495 822.029, 514.463 822.039, 514.359 822.013, 514.083 821.960, 513.974 821.904, 513.856 821.751, 513.651 821.516, 513.495 821.437, 513.463 821.303, 513.409 821.097, 513.385 821.088, 513.384 820.847, 513.409 820.803, 513.427 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 873.920, 510.525 873.997, 510.699 874.158, 510.908 874.365, 511.049 874.404, 511.067 874.610, 511.156 874.716, 511.168 874.834, 511.181 875.076, 511.156 875.340, 511.048 875.465, 510.944 875.560, 510.865 875.683, 510.698 875.723, 510.607 875.786, 510.463 875.814, 510.206 875.783, 509.948 875.736, 509.841 875.681, 509.714 875.519, 509.506 875.313, 509.365 875.273, 509.347 875.068, 509.258 875.029, 509.253 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 927.772, 506.540 927.799, 506.608 927.969, 506.819 928.056, 506.883 928.165, 506.963 928.367, 507.049 928.419, 507.071 928.652, 507.096 928.892, 507.070 929.155, 506.962 929.331, 506.818 929.373, 506.777 929.509, 506.606 929.606, 506.369 929.617, 506.295 929.643, 506.107 929.607, 505.879 929.602, 505.847 929.508, 505.609 929.338, 505.398 929.245, 505.330 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 412.009, 510.758 412.077, 510.775 412.212, 510.793 412.333, 510.785 412.423, 510.775 412.578, 510.738 412.711, 510.670 412.813, 510.619 412.974, 510.459 413.064, 510.273 413.102, 510.100 413.071, 509.890 412.994, 509.730 412.850, 509.559 412.629, 509.421 412.461, 509.371 412.393, 509.354 412.258, 509.336 412.137, 509.344 412.046, 509.354 411.892, 509.391 411.656, 509.510 411.495, 509.669 411.405, 509.856 411.367, 510.029 411.398, 510.240 411.475, 510.399 411.592, 510.538 411.619, 510.571 411.840, 510.708 412.009, 510.758 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 468.857, 507.252 469.008, 507.272 469.126, 507.264 469.234, 507.252 469.387, 507.213 469.483, 507.164 469.639, 507.083 469.812, 506.910 469.911, 506.707 469.944, 506.518 469.918, 506.289 469.828, 506.116 469.804, 506.079 469.680, 505.929 469.451, 505.778 469.204, 505.704 469.053, 505.685 468.935, 505.692 468.827, 505.705 468.673, 505.743 468.578, 505.792 468.422, 505.873 468.249, 506.046 468.149, 506.249 468.116, 506.438 468.143, 506.667 468.232, 506.841 468.256, 506.878 468.381, 507.028 468.610, 507.179 468.857, 507.252 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 525.076, 503.614 525.211, 503.769 525.425, 503.918 525.445, 503.932 525.699, 504.011 525.867, 504.032 525.980, 504.024 526.106, 504.011 526.255, 503.970 526.369, 503.917 526.520, 503.830 526.696, 503.652 526.704, 503.644 526.813, 503.426 526.839, 503.223 526.818, 502.976 526.705, 502.749 526.565, 502.588 526.446, 502.504 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 582.428, 509.425 582.613, 509.448 582.863, 509.424 583.005, 509.379 583.139, 509.323 583.283, 509.229 583.369, 509.152 583.477, 509.030 583.514, 508.963 583.596, 508.796 583.628, 508.557 583.599, 508.315 583.489, 508.073 583.333, 507.900 583.095, 507.726 582.836, 507.642 582.652, 507.619 582.546, 507.629 582.401, 507.643 582.259, 507.688 582.125, 507.744 581.980, 507.837 581.894, 507.915 581.787, 508.037 581.750, 508.104 581.667, 508.271 581.636, 508.510 581.664, 508.752 581.774, 508.995 581.931, 509.168 582.169, 509.341 582.428, 509.425 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 639.357, 510.797 639.559, 510.821 639.589, 510.818 639.741, 510.804 639.820, 510.796 639.952, 510.747 640.108, 510.689 640.242, 510.588 640.348, 510.506 640.498, 510.305 640.575, 510.127 640.616, 509.873 640.591, 509.715 640.575, 509.616 640.470, 509.358 640.277, 509.149 640.057, 508.990 639.796, 508.901 639.594, 508.876 639.332, 508.901 639.200, 508.949 639.044, 509.008 638.909, 509.109 638.804, 509.191 638.706, 509.321 638.654, 509.392 638.576, 509.570 638.536, 509.824 638.545, 509.884 638.576, 510.082 638.682, 510.340 638.875, 510.549 639.095, 510.708 639.357, 510.797 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 695.721, 501.471 695.748, 501.626 695.848, 501.868 696.037, 502.090 696.275, 502.256 696.535, 502.351 696.753, 502.376 697.022, 502.351 697.318, 502.239 697.565, 502.048 697.719, 501.837 697.788, 501.653 697.802, 501.581 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 752.818, 508.657 752.747, 508.848 752.707, 509.103 752.750, 509.414 752.865, 509.669 753.049, 509.899 753.304, 510.074 753.561, 510.172 753.795, 510.199 754.072, 510.171 754.375, 510.053 754.548, 509.916 754.628, 509.853 754.786, 509.632 754.867, 509.411 754.884, 509.303 754.908, 509.157 754.865, 508.846 754.750, 508.591 754.566, 508.360 754.311, 508.186 754.054, 508.088 753.820, 508.061 753.543, 508.088 753.240, 508.206 752.989, 508.404 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 810.828, 506.768 811.076, 506.795 811.357, 506.767 811.541, 506.694 811.664, 506.645 811.920, 506.438 811.961, 506.380 812.079, 506.210 812.172, 505.981 812.201, 505.718 812.169, 505.396 812.040, 505.130 811.865, 504.894 811.593, 504.714 811.343, 504.611 811.095, 504.584 810.814, 504.612 810.506, 504.733 810.250, 504.940 810.091, 505.169 809.998, 505.397 809.968, 505.660 810.001, 505.983 810.130, 506.249 810.306, 506.485 810.578, 506.666 810.828, 506.768 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 867.315, 500.592 867.309, 500.657 867.344, 500.955 867.464, 501.228 867.651, 501.470 867.893, 501.636 868.177, 501.759 868.212, 501.763 868.437, 501.787 868.718, 501.759 869.026, 501.635 869.282, 501.423 869.423, 501.226 869.441, 501.190 869.531, 500.986 869.545, 500.955 869.576, 500.654 869.541, 500.357 869.421, 500.083 869.234, 499.842 868.992, 499.675 868.727, 499.560 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 924.915, 506.038 925.043, 506.198 925.273, 506.365 925.569, 506.491 925.697, 506.505 925.839, 506.520 926.120, 506.491 926.126, 506.488 926.426, 506.364 926.446, 506.347 926.631, 506.196 926.674, 506.154 926.680, 506.149 926.837, 505.952 926.839, 505.949 926.952, 505.673 926.972, 505.528 926.995, 505.368 926.980, 505.274 926.947, 505.065 926.838, 504.788 926.781, 504.717 926.640, 504.542 926.595, 504.509 926.483, 504.427 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 372.045, 504.323 372.135, 504.344 372.287, 504.365 372.436, 504.357 372.534, 504.344 372.723, 504.304 372.998, 504.167 373.185, 503.984 373.277, 503.808 373.337, 503.570 373.297, 503.327 373.212, 503.144 373.039, 502.946 372.777, 502.785 372.585, 502.729 372.496, 502.707 372.343, 502.686 372.194, 502.694 372.097, 502.708 371.907, 502.747 371.633, 502.884 371.445, 503.068 371.352, 503.243 371.293, 503.482 371.333, 503.725 371.418, 503.908 371.591, 504.106 371.854, 504.267 372.045, 504.323 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 433.022, 498.220 433.193, 498.242 433.338, 498.235 433.455, 498.220 433.642, 498.178 433.934, 498.030 434.133, 497.832 434.247, 497.599 434.290, 497.384 434.255, 497.120 434.157, 496.922 433.980, 496.706 433.709, 496.530 433.418, 496.444 433.247, 496.422 433.102, 496.429 432.985, 496.445 432.798, 496.486 432.506, 496.634 432.306, 496.832 432.193, 497.065 432.149, 497.280 432.184, 497.545 432.282, 497.743 432.460, 497.959 432.731, 498.134 433.022, 498.220 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 493.773, 499.612 493.964, 499.636 493.981, 499.635 494.103, 499.628 494.242, 499.611 494.423, 499.566 494.547, 499.504 494.733, 499.405 494.942, 499.195 494.946, 499.191 495.070, 498.939 495.106, 498.707 495.077, 498.421 494.941, 498.158 494.784, 497.974 494.506, 497.784 494.206, 497.691 494.016, 497.667 493.876, 497.675 493.738, 497.692 493.556, 497.737 493.432, 497.799 493.246, 497.897 493.033, 498.112 492.908, 498.364 492.872, 498.596 492.901, 498.882 493.037, 499.145 493.195, 499.330 493.473, 499.519 493.773, 499.612 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 554.688, 498.878 554.899, 498.904 555.029, 498.895 555.190, 498.877 555.363, 498.829 555.511, 498.762 555.687, 498.657 555.780, 498.566 555.912, 498.428 556.049, 498.158 556.081, 497.881 556.053, 497.604 555.921, 497.323 555.744, 497.125 555.462, 496.922 555.157, 496.822 554.947, 496.797 554.817, 496.805 554.655, 496.823 554.482, 496.871 554.334, 496.938 554.158, 497.042 554.066, 497.134 553.933, 497.272 553.796, 497.542 553.764, 497.820 553.792, 498.096 553.925, 498.378 554.101, 498.576 554.383, 498.779 554.688, 498.878 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 616.181, 499.806 616.134, 499.789 615.904, 499.762 615.786, 499.771 615.600, 499.790 615.439, 499.842 615.266, 499.913 615.101, 500.025 614.986, 500.122 614.866, 500.269 614.811, 500.353 614.717, 500.556 614.674, 500.851 614.716, 501.146 614.766, 501.263 614.843, 501.445 615.040, 501.656 615.072, 501.688 615.322, 501.870 615.630, 501.975 615.717, 501.985 615.860, 502.003 615.978, 501.993 616.164, 501.974 616.325, 501.922 616.499, 501.852 616.663, 501.739 616.778, 501.642 616.898, 501.495 616.952, 501.411 617.046, 501.208 617.090, 500.914 617.048, 500.619 616.921, 500.320 616.851, 500.246 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 676.423, 503.636 676.721, 503.743 676.791, 503.751 676.971, 503.772 677.286, 503.742 677.498, 503.662 677.631, 503.613 677.919, 503.392 678.099, 503.148 678.117, 503.102 678.183, 502.933 678.193, 502.877 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 678.131, 502.166 678.063, 501.996 677.838, 501.739 677.726, 501.660 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 737.394, 495.116 737.462, 495.200 737.756, 495.400 738.058, 495.518 738.327, 495.547 738.649, 495.517 739.002, 495.382 739.166, 495.254 739.296, 495.152 739.443, 494.948 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 798.444, 494.166 798.562, 494.410 798.567, 494.418 798.769, 494.690 799.082, 494.898 799.376, 495.020 799.662, 495.050 799.954, 495.022 799.989, 495.019 800.347, 494.879 800.644, 494.641 800.830, 494.377 800.935, 494.110 800.972, 493.809 800.940, 493.509 800.932, 493.432 800.780, 493.121 800.578, 492.849 800.265, 492.642 799.971, 492.520 799.685, 492.489 799.391, 492.517 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 859.820, 494.596 859.824, 494.631 859.965, 494.951 860.181, 495.230 860.465, 495.426 860.794, 495.568 860.843, 495.573 861.095, 495.600 861.423, 495.567 861.783, 495.424 861.980, 495.262 862.081, 495.179 862.194, 495.017 862.243, 494.948 862.267, 494.908 862.386, 494.634 862.421, 494.283 862.381, 493.938 862.376, 493.927 862.240, 493.619 862.024, 493.339 861.741, 493.143 861.422, 493.006 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 921.471, 494.227 921.350, 494.517 921.301, 494.874 921.355, 495.225 921.484, 495.550 921.713, 495.834 921.982, 496.033 922.025, 496.051 922.325, 496.178 922.640, 496.210 922.966, 496.177 923.323, 496.031 923.560, 495.832 923.619, 495.782 923.691, 495.690 923.803, 495.547 923.935, 495.228 923.984, 494.871 923.929, 494.520 923.801, 494.195 923.572, 493.911 923.394, 493.779 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 326.059, 493.134 326.175, 493.162 326.345, 493.185 326.529, 493.179 326.630, 493.161 326.862, 493.119 327.180, 492.964 327.396, 492.755 327.511, 492.557 327.576, 492.284 327.535, 492.054 327.523, 492.006 327.432, 491.798 327.227, 491.569 326.916, 491.383 326.701, 491.320 326.585, 491.291 326.414, 491.269 326.231, 491.274 326.129, 491.292 325.898, 491.334 325.579, 491.489 325.363, 491.698 325.247, 491.895 325.182, 492.169 325.223, 492.399 325.235, 492.448 325.327, 492.656 325.532, 492.885 325.844, 493.070 326.059, 493.134 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 391.552, 491.601 391.744, 491.626 391.924, 491.620 392.049, 491.600 392.278, 491.555 392.618, 491.385 392.851, 491.158 392.961, 490.942 392.979, 490.890 393.037, 490.644 392.990, 490.340 392.882, 490.113 392.671, 489.863 392.349, 489.659 392.004, 489.559 391.811, 489.534 391.632, 489.539 391.506, 489.559 391.277, 489.604 390.936, 489.774 390.704, 490.001 390.592, 490.217 390.576, 490.270 390.516, 490.515 390.564, 490.820 390.672, 491.047 390.884, 491.297 391.206, 491.501 391.552, 491.601 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 457.318, 488.427 457.300, 488.425 457.129, 488.430 456.978, 488.452 456.755, 488.500 456.396, 488.683 456.149, 488.928 456.008, 489.218 455.958, 489.483 455.998, 489.812 456.123, 490.056 456.163, 490.115 456.338, 490.326 456.667, 490.546 457.021, 490.654 457.236, 490.681 457.408, 490.675 457.559, 490.653 457.781, 490.605 458.140, 490.422 458.386, 490.177 458.528, 489.888 458.577, 489.623 458.537, 489.294 458.412, 489.050 458.373, 488.991 458.198, 488.780 458.029, 488.667 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 521.605, 489.128 521.708, 489.337 521.906, 489.564 522.240, 489.800 522.437, 489.863 522.601, 489.917 522.839, 489.945 523.000, 489.939 523.178, 489.916 523.390, 489.864 523.551, 489.784 523.736, 489.684 523.767, 489.668 523.966, 489.466 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 588.265, 490.768 588.509, 490.797 588.526, 490.799 588.672, 490.792 588.880, 490.768 589.077, 490.712 589.268, 490.627 589.469, 490.503 589.593, 490.388 589.742, 490.222 589.796, 490.122 589.911, 489.892 589.956, 489.551 589.914, 489.214 589.761, 488.867 589.539, 488.626 589.490, 488.583 589.205, 488.375 588.842, 488.250 588.581, 488.220 588.435, 488.226 588.227, 488.251 588.030, 488.306 587.839, 488.391 587.637, 488.514 587.514, 488.630 587.364, 488.795 587.310, 488.895 587.195, 489.126 587.150, 489.468 587.191, 489.805 587.345, 490.152 587.567, 490.393 587.617, 490.436 587.747, 490.531 587.902, 490.644 588.265, 490.768 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 654.982, 496.068 654.918, 496.023 654.557, 495.894 654.271, 495.861 654.143, 495.870 653.905, 495.894 653.726, 495.956 653.503, 496.043 653.320, 496.178 653.167, 496.298 652.957, 496.580 652.852, 496.826 652.792, 497.186 652.852, 497.545 652.997, 497.910 653.008, 497.922 653.264, 498.208 653.368, 498.282 653.575, 498.430 653.938, 498.559 654.223, 498.592 654.352, 498.581 654.589, 498.558 654.768, 498.495 654.991, 498.408 655.173, 498.273 655.327, 498.154 655.537, 497.872 655.640, 497.626 655.701, 497.266 655.640, 496.908 655.617, 496.851 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 718.989, 496.431 719.227, 496.721 719.564, 496.952 719.713, 497.009 719.920, 497.088 720.229, 497.122 720.426, 497.104 720.603, 497.087 720.686, 497.056 720.775, 497.022 720.858, 496.990 721.015, 496.931 721.358, 496.664 721.481, 496.494 721.572, 496.369 721.661, 496.112 721.675, 496.072 721.737, 495.735 721.671, 495.315 721.650, 495.264 721.538, 495.007 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 719.441, 494.483 719.138, 494.719 719.083, 494.794 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 719.911, 494.295 719.892, 494.297 719.604, 494.406 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 785.106, 488.848 785.124, 488.886 785.369, 489.214 785.572, 489.349 785.730, 489.453 786.076, 489.597 786.152, 489.605 786.406, 489.632 786.487, 489.624 786.787, 489.596 786.937, 489.538 787.205, 489.435 787.552, 489.159 787.768, 488.853 787.889, 488.542 787.935, 488.194 787.884, 487.755 787.717, 487.406 787.716, 487.406 787.472, 487.077 787.111, 486.838 786.766, 486.694 786.435, 486.659 786.354, 486.666 786.054, 486.695 785.970, 486.727 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 851.155, 486.339 851.306, 486.678 851.556, 487.002 851.890, 487.232 852.271, 487.396 852.316, 487.401 852.620, 487.432 853.003, 487.396 853.422, 487.230 853.771, 486.946 853.987, 486.632 854.124, 486.311 854.162, 485.901 854.119, 485.505 854.119, 485.502 853.953, 485.128 853.702, 484.804 853.370, 484.573 852.996, 484.412 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 917.717, 487.549 917.857, 487.723 918.104, 487.907 918.171, 487.957 918.461, 488.079 918.570, 488.124 918.936, 488.161 918.972, 488.157 919.316, 488.123 919.732, 487.955 920.078, 487.666 920.290, 487.389 920.426, 487.065 920.445, 487.020 920.501, 486.602 920.471, 486.408 920.438, 486.196 920.335, 485.933 920.288, 485.815 920.022, 485.486 919.783, 485.307 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 272.878, 483.474 272.819, 483.461 272.630, 483.436 272.403, 483.439 272.014, 483.506 271.643, 483.683 271.446, 483.870 271.393, 483.921 271.262, 484.120 271.246, 484.146 271.177, 484.459 271.215, 484.722 271.345, 485.016 271.591, 485.280 271.962, 485.494 272.202, 485.566 272.335, 485.596 272.355, 485.601 272.545, 485.626 272.771, 485.622 273.160, 485.555 273.530, 485.378 273.727, 485.191 273.780, 485.140 273.781, 485.139 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 342.051, 485.124 342.041, 485.134 341.900, 485.378 341.818, 485.720 341.862, 485.962 341.881, 486.068 341.998, 486.327 342.250, 486.613 342.418, 486.716 342.633, 486.846 342.903, 486.925 343.041, 486.962 343.255, 486.990 343.477, 486.985 343.609, 486.962 343.890, 486.911 344.284, 486.719 344.552, 486.459 344.691, 486.215 344.773, 485.874 344.760, 485.802 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 415.022, 481.083 415.011, 481.077 414.592, 480.949 414.351, 480.920 414.138, 480.923 413.977, 480.950 413.702, 481.002 413.536, 481.084 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 484.373, 485.955 484.540, 486.069 484.967, 486.205 485.032, 486.212 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 486.560, 485.690 486.587, 485.663 486.631, 485.619 486.807, 485.262 486.841, 485.053 486.855, 484.966 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 555.147, 482.271 555.106, 482.313 555.057, 482.409 554.913, 482.695 554.867, 483.089 554.907, 483.476 554.914, 483.492 555.094, 483.878 555.343, 484.154 555.740, 484.445 556.170, 484.591 556.467, 484.625 556.601, 484.621 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 627.482, 484.187 627.807, 484.223 627.967, 484.218 628.233, 484.186 628.452, 484.121 628.700, 484.016 628.924, 483.868 629.090, 483.725 629.253, 483.526 629.335, 483.402 629.462, 483.123 629.526, 482.705 629.464, 482.296 629.289, 481.871 628.973, 481.522 628.619, 481.270 628.192, 481.115 627.867, 481.079 627.707, 481.083 627.441, 481.116 627.221, 481.179 626.974, 481.285 626.748, 481.432 626.583, 481.576 626.418, 481.774 626.338, 481.899 626.209, 482.178 626.146, 482.597 626.208, 483.006 626.383, 483.432 626.701, 483.780 627.055, 484.033 627.482, 484.187 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 697.507, 492.221 697.515, 492.269 697.679, 492.661 697.986, 493.025 698.084, 493.094 698.372, 493.293 698.793, 493.451 699.148, 493.491 699.281, 493.480 699.585, 493.450 699.863, 493.346 700.065, 493.270 700.386, 493.023 700.466, 492.961 700.716, 492.620 700.827, 492.323 700.911, 491.885 700.828, 491.397 700.819, 491.377 700.664, 491.006 700.358, 490.642 700.307, 490.606 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 698.431, 490.338 698.278, 490.396 697.988, 490.619 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 769.281, 480.012 769.445, 480.361 769.735, 480.745 770.151, 481.021 770.559, 481.191 770.940, 481.230 771.042, 481.226 771.357, 481.193 771.384, 481.190 771.871, 481.004 772.276, 480.685 772.529, 480.332 772.665, 479.969 772.723, 479.568 772.667, 479.110 772.660, 479.057 772.470, 478.654 772.180, 478.269 771.764, 477.994 771.357, 477.822 770.977, 477.784 770.874, 477.787 770.565, 477.820 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 841.399, 478.504 841.473, 478.599 841.865, 478.871 842.306, 479.060 842.635, 479.093 842.711, 479.100 842.779, 479.097 843.158, 479.059 843.648, 478.868 843.654, 478.863 844.055, 478.539 844.308, 478.174 844.465, 477.800 844.488, 477.534 844.506, 477.319 844.474, 477.004 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 913.241, 485.895 913.329, 486.005 913.697, 486.279 914.162, 486.474 914.240, 486.481 914.588, 486.516 914.706, 486.504 915.032, 486.472 915.113, 486.440 915.492, 486.287 915.519, 486.276 915.835, 486.012 915.922, 485.939 916.168, 485.616 916.350, 485.185 916.415, 484.697 916.345, 484.240 916.343, 484.224 916.171, 483.792 916.166, 483.779 915.965, 483.531 915.856, 483.395 915.837, 483.381 915.699, 483.278 915.489, 483.120 915.463, 483.109 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 208.434, 472.694 208.372, 472.704 207.941, 472.904 207.693, 473.112 207.466, 473.427 207.394, 473.785 207.427, 474.082 207.544, 474.328 207.588, 474.420 207.883, 474.723 208.325, 474.970 208.593, 475.051 208.793, 475.095 209.001, 475.123 209.283, 475.122 209.572, 475.074 209.736, 475.047 210.166, 474.847 210.413, 474.638 210.640, 474.324 210.712, 473.967 210.678, 473.670 210.624, 473.556 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 286.198, 479.626 285.969, 479.596 285.691, 479.599 285.208, 479.682 284.748, 479.902 284.436, 480.198 284.418, 480.227 284.257, 480.477 284.170, 480.868 284.221, 481.195 284.378, 481.563 284.682, 481.893 285.140, 482.161 285.442, 482.251 285.540, 482.275 285.627, 482.296 285.864, 482.327 286.142, 482.323 286.624, 482.240 287.083, 482.019 287.394, 481.723 287.412, 481.695 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 361.891, 482.292 361.684, 482.494 361.627, 482.549 361.459, 482.852 361.355, 483.276 361.393, 483.500 361.429, 483.709 361.577, 484.029 361.884, 484.385 361.909, 484.400 362.350, 484.674 362.352, 484.676 362.537, 484.729 362.537, 484.729 362.852, 484.820 363.120, 484.854 363.387, 484.849 363.556, 484.819 363.895, 484.758 364.101, 484.657 364.380, 484.519 364.711, 484.198 364.740, 484.145 364.805, 484.027 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 364.226, 482.222 364.028, 482.099 363.988, 482.073 363.489, 481.927 363.220, 481.894 362.983, 481.898 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 439.241, 482.549 439.157, 482.632 439.084, 482.704 438.885, 483.114 438.853, 483.275 438.810, 483.487 438.818, 483.544 438.871, 483.953 439.010, 484.230 439.045, 484.298 439.109, 484.385 439.353, 484.682 439.826, 484.995 440.334, 485.150 440.380, 485.156 440.635, 485.187 440.885, 485.181 441.074, 485.152 441.093, 485.149 441.416, 485.083 441.926, 484.826 442.276, 484.479 442.328, 484.371 442.475, 484.070 442.549, 483.698 442.509, 483.388 442.489, 483.232 442.315, 482.888 442.252, 482.801 442.188, 482.722 442.008, 482.504 441.975, 482.482 441.536, 482.191 441.030, 482.034 440.728, 481.998 440.478, 482.002 440.270, 482.035 439.946, 482.100 439.903, 482.121 439.709, 482.219 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 516.666, 483.132 516.503, 483.460 516.465, 483.734 516.448, 483.860 516.493, 484.360 516.534, 484.442 516.722, 484.822 516.866, 484.987 517.000, 485.141 517.338, 485.379 517.474, 485.476 517.985, 485.642 518.252, 485.674 518.321, 485.682 518.550, 485.675 518.553, 485.675 518.800, 485.641 519.102, 485.570 519.322, 485.459 519.327, 485.456 519.634, 485.294 519.864, 485.062 520.002, 484.923 520.035, 484.856 520.221, 484.484 520.258, 484.213 520.275, 484.085 520.230, 483.586 520.003, 483.124 519.724, 482.806 519.450, 482.611 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 595.637, 471.495 595.448, 471.583 595.169, 471.747 594.992, 471.917 594.785, 472.140 594.707, 472.287 594.706, 472.289 594.546, 472.608 594.481, 473.093 594.509, 473.305 594.542, 473.562 594.756, 474.057 595.136, 474.463 595.538, 474.753 596.045, 474.935 596.075, 474.938 596.415, 474.975 596.617, 474.974 596.634, 474.971 596.911, 474.934 596.922, 474.931 597.184, 474.865 597.456, 474.739 597.734, 474.574 597.894, 474.422 597.912, 474.405 598.117, 474.181 598.197, 474.033 598.340, 473.746 598.355, 473.714 598.422, 473.230 598.383, 472.936 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 673.954, 478.442 674.358, 478.485 674.527, 478.482 674.868, 478.441 675.105, 478.366 675.428, 478.235 675.670, 478.058 675.895, 477.882 676.187, 477.489 676.325, 477.152 676.415, 476.641 676.310, 476.073 676.128, 475.626 675.764, 475.198 675.323, 474.892 674.825, 474.700 674.420, 474.658 674.252, 474.659 673.910, 474.702 673.672, 474.774 673.350, 474.907 673.106, 475.082 672.882, 475.260 672.590, 475.653 672.451, 475.990 672.361, 476.501 672.452, 476.998 672.467, 477.071 672.648, 477.518 673.014, 477.946 673.455, 478.252 673.954, 478.442 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 753.174, 476.031 753.094, 475.998 753.017, 475.966 752.578, 475.922 752.449, 475.924 752.059, 475.967 751.719, 476.095 751.566, 476.153 751.488, 476.182 751.425, 476.232 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 754.315, 476.922 754.088, 476.627 753.979, 476.486 753.966, 476.477 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 828.925, 468.305 828.902, 468.542 828.906, 468.627 828.956, 469.162 829.191, 469.676 829.525, 470.111 829.988, 470.432 830.500, 470.651 830.521, 470.653 830.970, 470.696 831.056, 470.697 831.493, 470.650 832.066, 470.429 832.543, 470.047 832.839, 469.623 833.019, 469.183 833.064, 468.726 833.065, 468.705 833.064, 468.621 833.013, 468.086 832.779, 467.572 832.444, 467.137 831.982, 466.815 831.470, 466.596 831.468, 466.596 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 907.570, 472.011 907.412, 472.376 907.340, 472.951 907.421, 473.499 907.631, 474.023 907.991, 474.470 908.255, 474.668 908.424, 474.795 908.966, 475.021 909.463, 475.067 909.501, 475.066 909.983, 475.019 910.552, 474.792 911.025, 474.401 911.310, 474.017 911.388, 473.834 911.524, 473.518 911.598, 472.944 911.515, 472.396 911.307, 471.872 910.946, 471.426 910.681, 471.225 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 130.379, 471.447 130.311, 471.799 130.309, 471.840 130.333, 472.180 130.376, 472.263 130.535, 472.567 130.677, 472.705 130.893, 472.913 131.190, 473.082 131.426, 473.197 131.723, 473.289 131.965, 473.336 131.989, 473.340 132.216, 473.372 132.424, 473.371 132.571, 473.371 133.103, 473.286 133.606, 473.057 133.776, 472.929 133.921, 472.819 134.127, 472.533 134.179, 472.461 134.249, 472.093 134.252, 472.052 134.229, 471.724 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 216.676, 459.815 216.178, 460.045 215.873, 460.299 215.589, 460.691 215.499, 461.140 215.542, 461.508 215.568, 461.564 215.740, 461.933 216.105, 462.313 216.654, 462.627 216.989, 462.727 217.234, 462.788 217.495, 462.820 217.842, 462.824 218.359, 462.741 218.405, 462.734 218.940, 462.486 219.244, 462.231 219.526, 461.840 219.617, 461.393 219.579, 461.073 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 302.636, 467.577 302.607, 467.569 302.310, 467.533 301.974, 467.531 301.380, 467.630 300.813, 467.901 300.429, 468.267 300.213, 468.607 300.103, 469.094 300.169, 469.496 300.203, 469.593 300.348, 469.927 300.360, 469.955 300.731, 470.367 301.291, 470.705 301.668, 470.814 301.855, 470.866 301.887, 470.876 302.184, 470.912 302.519, 470.913 303.113, 470.812 303.679, 470.542 304.062, 470.176 304.276, 469.836 304.386, 469.351 304.319, 468.950 304.288, 468.853 304.130, 468.491 304.129, 468.490 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 386.970, 474.456 387.306, 474.496 387.623, 474.495 388.244, 474.385 388.840, 474.092 389.247, 473.695 389.441, 473.326 389.470, 473.225 389.574, 472.802 389.491, 472.264 389.302, 471.872 388.932, 471.428 388.367, 471.063 387.761, 470.879 387.425, 470.839 387.108, 470.838 386.485, 470.947 385.888, 471.240 385.481, 471.637 385.284, 472.006 385.257, 472.108 385.151, 472.532 385.236, 473.071 385.424, 473.464 385.796, 473.909 386.364, 474.272 386.970, 474.456 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 472.459, 472.106 472.836, 472.149 473.126, 472.149 473.394, 472.105 473.770, 472.032 474.391, 471.718 474.818, 471.293 475.066, 470.789 475.145, 470.336 475.081, 469.758 474.802, 469.222 474.493, 468.861 473.929, 468.469 473.321, 468.269 472.944, 468.227 472.654, 468.225 472.386, 468.271 472.008, 468.341 471.386, 468.655 470.957, 469.080 470.710, 469.586 470.629, 470.040 470.695, 470.618 470.975, 471.155 471.284, 471.517 471.850, 471.908 472.459, 472.106 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 558.015, 464.499 557.752, 464.555 557.457, 464.704 557.107, 464.889 556.660, 465.342 556.387, 465.883 556.323, 466.445 556.379, 466.984 556.642, 467.558 556.995, 467.944 557.099, 468.030 557.554, 468.363 558.160, 468.576 558.579, 468.621 558.835, 468.624 559.159, 468.575 559.500, 468.500 559.796, 468.352 560.144, 468.165 560.590, 467.712 560.862, 467.174 560.927, 466.613 560.870, 466.074 560.609, 465.501 560.256, 465.116 560.154, 465.028 559.699, 464.696 559.595, 464.659 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 642.315, 454.878 642.308, 454.923 642.402, 455.489 642.641, 456.102 643.081, 456.607 643.584, 456.957 644.178, 457.189 644.640, 457.234 644.854, 457.244 645.236, 457.187 645.533, 457.116 645.891, 456.954 646.193, 456.765 646.438, 456.548 646.484, 456.492 646.655, 456.287 646.779, 456.097 646.952, 455.715 646.965, 455.630 647.047, 455.118 646.952, 454.553 646.914, 454.451 646.714, 453.941 646.481, 453.671 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 645.399, 452.939 645.181, 452.852 644.719, 452.808 644.505, 452.795 644.123, 452.854 643.825, 452.922 643.467, 453.087 643.162, 453.273 642.922, 453.489 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 730.018, 467.082 730.523, 467.131 730.689, 467.135 731.132, 467.080 731.377, 466.998 731.800, 466.833 732.357, 466.404 732.705, 465.928 732.846, 465.523 732.876, 465.433 732.973, 464.898 732.870, 464.200 732.628, 463.661 732.215, 463.133 731.663, 462.764 731.089, 462.524 730.584, 462.475 730.418, 462.468 729.975, 462.526 729.729, 462.605 729.306, 462.772 728.748, 463.200 728.399, 463.676 728.256, 464.082 728.229, 464.172 728.130, 464.708 728.235, 465.406 728.476, 465.947 728.891, 466.474 729.443, 466.844 730.018, 467.082 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 816.785, 461.768 816.839, 461.773 816.950, 461.780 817.454, 461.720 818.093, 461.477 818.128, 461.464 818.578, 461.107 818.589, 461.098 818.688, 461.020 819.036, 460.526 819.161, 460.213 819.166, 460.200 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 900.829, 453.826 900.918, 454.444 901.167, 455.067 901.589, 455.586 901.718, 455.685 902.101, 455.980 902.735, 456.239 903.076, 456.272 903.366, 456.301 903.928, 456.237 904.598, 455.975 905.153, 455.520 905.273, 455.353 905.485, 455.059 905.738, 454.481 905.806, 453.928 905.822, 453.799 905.728, 453.164 905.481, 452.540 905.059, 452.022 905.005, 451.981 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 36.730, 461.227 36.906, 461.404 37.110, 461.569 37.435, 461.760 37.722, 461.883 37.756, 461.897 38.082, 462.001 38.436, 462.066 38.680, 462.099 39.130, 462.104 39.757, 462.010 40.263, 461.795 40.347, 461.751 40.750, 461.485 41.044, 461.076 41.150, 460.659 41.118, 460.338 41.107, 460.223 40.937, 459.914 40.852, 459.780 40.619, 459.547 40.418, 459.381 40.092, 459.191 39.773, 459.052 39.655, 459.015 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 131.147, 457.970 130.953, 458.112 130.629, 458.561 130.540, 459.018 130.538, 459.075 130.568, 459.497 130.820, 459.984 131.142, 460.299 131.267, 460.421 131.638, 460.630 131.933, 460.781 132.304, 460.894 132.635, 460.965 132.919, 461.002 133.362, 461.008 134.026, 460.905 134.654, 460.622 134.728, 460.567 135.046, 460.331 135.369, 459.883 135.456, 459.427 135.460, 459.370 135.430, 458.950 135.180, 458.464 134.974, 458.262 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 226.810, 446.309 226.179, 446.598 225.804, 446.908 225.450, 447.397 225.361, 447.832 225.336, 447.958 225.392, 448.414 225.636, 448.947 226.088, 449.426 226.767, 449.823 227.186, 449.945 227.485, 450.030 227.812, 450.068 228.239, 450.081 228.924, 449.973 228.938, 449.970 229.601, 449.665 229.974, 449.355 230.251, 448.971 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 322.833, 442.364 322.727, 442.352 322.324, 442.333 321.593, 442.451 320.895, 442.780 320.421, 443.231 320.164, 443.640 320.024, 444.248 320.111, 444.739 320.135, 444.847 320.141, 444.874 320.341, 445.317 320.793, 445.837 321.476, 446.268 322.204, 446.493 322.345, 446.508 322.576, 446.533 322.979, 446.549 323.708, 446.431 324.405, 446.102 324.877, 445.651 325.132, 445.242 325.273, 444.637 325.235, 444.427 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 418.901, 444.823 418.668, 444.664 417.939, 444.422 417.518, 444.379 417.148, 444.360 416.390, 444.486 415.661, 444.841 415.163, 445.327 414.936, 445.768 414.884, 445.910 414.767, 446.421 414.802, 446.674 414.861, 447.094 415.100, 447.572 415.209, 447.721 415.547, 448.130 415.958, 448.409 416.229, 448.593 416.959, 448.833 417.380, 448.877 417.750, 448.893 418.507, 448.765 419.233, 448.410 419.730, 447.925 419.954, 447.484 420.009, 447.343 420.094, 446.965 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 509.921, 454.159 509.724, 454.557 509.643, 455.109 509.710, 455.827 510.036, 456.495 510.429, 456.937 510.790, 457.201 511.103, 457.428 511.829, 457.680 512.303, 457.729 512.631, 457.740 512.982, 457.678 513.413, 457.601 514.168, 457.218 514.689, 456.696 514.916, 456.238 514.997, 456.073 515.076, 455.522 515.011, 454.806 514.688, 454.138 514.295, 453.698 513.875, 453.390 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 605.294, 455.021 605.435, 455.358 605.542, 455.477 605.552, 455.488 605.967, 455.946 605.990, 455.962 606.520, 456.337 606.540, 456.351 607.253, 456.620 607.780, 456.672 608.056, 456.685 608.480, 456.618 608.856, 456.536 609.250, 456.348 609.633, 456.129 609.642, 456.120 609.893, 455.878 610.122, 455.630 610.174, 455.575 610.295, 455.354 610.314, 455.317 610.464, 455.011 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 701.317, 440.748 701.799, 441.353 702.433, 441.777 703.122, 442.071 703.918, 442.147 704.420, 442.068 704.729, 441.995 704.971, 441.889 705.206, 441.787 705.521, 441.569 705.861, 441.294 706.270, 440.743 706.449, 440.284 706.588, 439.547 706.455, 438.721 706.286, 438.338 706.184, 438.104 705.686, 437.473 705.051, 437.051 704.364, 436.754 703.567, 436.675 703.066, 436.756 702.755, 436.825 702.430, 436.969 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 797.210, 462.672 797.414, 462.943 797.473, 462.983 797.719, 463.149 798.030, 463.360 798.072, 463.389 798.143, 463.419 798.765, 463.688 799.054, 463.715 799.402, 463.747 799.448, 463.750 799.482, 463.751 799.546, 463.755 799.685, 463.738 800.072, 463.692 800.128, 463.685 800.890, 463.397 800.925, 463.384 800.998, 463.327 801.320, 463.072 801.543, 462.897 801.585, 462.863 801.587, 462.861 801.839, 462.507 802.000, 462.280 802.235, 461.674 802.307, 461.094 802.316, 461.022 802.285, 460.723 802.227, 460.167 802.115, 459.931 801.890, 459.457 801.440, 458.862 801.321, 458.781 800.784, 458.413 800.090, 458.116 799.453, 458.058 799.309, 458.046 799.300, 458.047 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 892.870, 437.260 892.824, 437.659 892.929, 438.401 893.227, 439.145 893.722, 439.753 893.947, 439.929 894.332, 440.229 895.079, 440.530 895.634, 440.592 895.828, 440.613 896.488, 440.527 897.280, 440.223 897.939, 439.690 898.013, 439.584 898.325, 439.135 898.347, 439.095 898.628, 438.460 898.682, 437.996 898.723, 437.647 898.616, 436.906 898.320, 436.160 897.824, 435.554 897.663, 435.426 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 24.887, 445.614 24.677, 445.907 24.536, 446.427 24.596, 446.981 24.808, 447.370 24.922, 447.545 25.214, 447.837 25.476, 448.052 25.884, 448.290 26.259, 448.456 26.296, 448.472 26.704, 448.601 27.157, 448.691 27.462, 448.730 28.035, 448.745 28.827, 448.629 29.471, 448.369 29.571, 448.307 30.085, 447.980 30.454, 447.465 30.465, 447.424 30.593, 446.946 30.535, 446.394 30.322, 446.007 30.211, 445.831 29.919, 445.541 29.660, 445.325 29.252, 445.087 28.843, 444.904 28.744, 444.872 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 133.253, 440.647 133.667, 440.751 134.021, 440.792 134.574, 440.813 134.952, 440.757 135.404, 440.690 136.188, 440.341 136.677, 439.991 137.081, 439.431 137.188, 438.870 137.195, 438.787 137.156, 438.267 136.845, 437.653 136.289, 437.098 135.460, 436.636 134.997, 436.498 134.584, 436.392 134.230, 436.351 133.677, 436.327 132.845, 436.450 132.220, 436.725 132.058, 436.798 131.565, 437.147 131.161, 437.709 131.050, 438.272 131.047, 438.355 131.084, 438.876 131.399, 439.493 131.957, 440.047 132.421, 440.305 132.789, 440.509 133.081, 440.596 133.253, 440.647 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 239.688, 424.522 238.945, 424.859 238.487, 425.228 238.190, 425.639 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 344.869, 427.194 344.668, 427.522 344.607, 427.777 344.488, 428.279 344.624, 429.062 344.880, 429.608 345.428, 430.260 346.260, 430.805 347.148, 431.094 347.235, 431.102 347.615, 431.140 348.095, 431.172 348.991, 431.031 349.848, 430.626 350.430, 430.070 350.731, 429.572 350.833, 429.141 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 456.916, 427.304 456.221, 426.804 455.344, 426.491 454.813, 426.443 454.385, 426.405 453.459, 426.555 452.567, 426.989 451.955, 427.588 451.605, 428.313 451.480, 428.937 451.581, 429.778 451.639, 429.888 451.991, 430.564 452.423, 431.065 452.580, 431.177 453.243, 431.650 454.122, 431.960 454.653, 432.009 455.080, 432.043 456.004, 431.891 456.892, 431.457 457.502, 430.858 457.852, 430.136 457.973, 429.513 457.875, 428.675 457.825, 428.579 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 561.334, 437.199 561.933, 437.253 562.294, 437.285 563.240, 437.120 564.155, 436.654 564.790, 436.014 565.178, 435.243 565.273, 434.431 565.188, 433.681 564.819, 432.845 564.174, 432.148 563.524, 431.687 562.666, 431.356 561.705, 431.266 560.757, 431.429 559.839, 431.894 559.201, 432.536 558.813, 433.310 558.720, 434.124 558.801, 434.876 559.175, 435.713 559.825, 436.408 560.474, 436.872 561.334, 437.199 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 666.611, 422.063 666.576, 422.275 666.755, 423.249 667.051, 423.963 667.661, 424.710 668.389, 425.198 669.219, 425.555 670.170, 425.653 671.129, 425.484 671.332, 425.386 671.660, 425.228 672.065, 424.993 672.434, 424.658 672.721, 424.315 672.918, 424.019 673.148, 423.494 673.276, 422.737 673.295, 422.627 673.120, 421.654 672.821, 420.942 672.216, 420.193 671.487, 419.707 670.660, 419.347 669.708, 419.244 668.747, 419.411 668.502, 419.531 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 774.883, 427.512 774.823, 427.595 774.557, 428.325 774.444, 429.072 774.567, 430.097 774.979, 430.951 775.499, 431.640 776.291, 432.190 777.098, 432.530 778.031, 432.630 778.551, 432.549 778.701, 432.526 778.998, 432.447 779.645, 432.183 780.198, 431.756 780.430, 431.578 780.919, 430.901 781.187, 430.174 781.295, 429.427 781.178, 428.403 780.769, 427.548 780.247, 426.861 779.459, 426.307 778.650, 425.969 777.822, 425.876 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 885.393, 425.990 885.459, 426.017 886.141, 426.099 886.356, 426.125 886.469, 426.109 886.990, 426.034 887.133, 426.013 888.079, 425.657 888.663, 425.189 888.863, 425.028 889.164, 424.594 889.350, 424.324 889.680, 423.563 889.788, 422.588 889.689, 421.876 889.666, 421.716 889.309, 420.821 889.021, 420.469 888.723, 420.106 888.130, 419.632 887.993, 419.523 887.108, 419.173 886.211, 419.059 886.102, 419.076 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 16.516, 411.938 16.059, 411.678 15.534, 411.418 15.319, 411.353 15.024, 411.265 14.446, 411.120 14.066, 411.079 13.335, 411.032 12.489, 411.145 12.333, 411.165 11.508, 411.461 10.730, 411.945 10.265, 412.595 10.081, 413.234 10.161, 413.941 10.426, 414.425 10.577, 414.664 10.668, 414.753 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 14.775, 416.211 15.519, 416.111 16.339, 415.812 17.113, 415.330 17.165, 415.257 17.576, 414.682 17.756, 414.046 17.749, 413.982 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 131.090, 425.510 131.119, 425.912 131.515, 426.691 131.519, 426.696 132.215, 427.394 133.259, 427.982 133.842, 428.153 134.360, 428.294 134.805, 428.343 135.498, 428.380 136.538, 428.229 137.315, 427.893 137.522, 427.795 137.598, 427.742 138.134, 427.367 138.639, 426.664 138.697, 426.365 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 255.486, 424.804 255.330, 424.827 255.329, 424.828 254.301, 425.296 253.742, 425.759 253.608, 425.944 253.397, 426.236 253.367, 426.277 253.328, 426.330 253.190, 426.522 253.160, 426.664 253.038, 427.241 253.005, 427.401 253.104, 428.103 253.469, 428.944 253.526, 429.007 253.852, 429.367 254.157, 429.702 255.193, 430.336 255.295, 430.367 255.756, 430.508 256.291, 430.671 256.807, 430.724 257.446, 430.762 257.937, 430.687 258.522, 430.598 259.545, 430.129 260.098, 429.664 260.180, 429.556 260.236, 429.483 260.243, 429.473 260.647, 428.905 260.834, 428.030 260.813, 427.891 260.737, 427.364 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 376.457, 422.594 376.596, 422.764 376.878, 423.111 377.120, 423.275 377.701, 423.668 377.891, 423.797 378.973, 424.163 379.566, 424.219 379.975, 424.252 380.135, 424.265 381.240, 424.092 381.402, 424.015 382.298, 423.590 382.573, 423.325 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 502.153, 410.955 501.230, 411.102 500.319, 411.549 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 624.958, 405.168 625.460, 405.384 626.510, 405.504 626.603, 405.514 627.231, 405.411 627.744, 405.326 628.854, 404.760 629.300, 404.306 629.375, 404.230 629.628, 403.973 629.639, 403.952 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 745.982, 396.898 745.930, 397.185 746.094, 398.412 746.512, 399.282 746.599, 399.437 747.196, 400.232 748.153, 400.907 749.088, 401.293 749.953, 401.403 750.205, 401.435 751.354, 401.237 752.088, 400.897 752.482, 400.638 753.020, 400.199 753.600, 399.411 753.822, 398.779 753.900, 398.542 754.048, 397.690 754.045, 397.663 753.891, 396.464 753.391, 395.438 752.791, 394.645 751.839, 393.964 750.901, 393.581 750.007, 393.463 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 870.374, 420.515 871.032, 421.328 871.920, 422.021 872.472, 422.241 872.969, 422.440 873.749, 422.536 874.049, 422.572 874.965, 422.435 875.146, 422.370 875.199, 422.351 876.098, 422.012 876.768, 421.479 877.039, 421.263 877.623, 420.424 878.009, 419.514 878.044, 419.178 878.130, 418.348 878.060, 417.816 877.993, 417.312 877.826, 416.899 877.559, 416.240 877.436, 416.089 876.865, 415.390 875.982, 414.689 875.908, 414.660 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1535.627, 511.386 1535.693, 511.367 1535.869, 511.259 1535.984, 511.124 1536.045, 510.999 1536.069, 510.834 1536.038, 510.698 1535.967, 510.552 1535.838, 510.427 1535.797, 510.407 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1534.787, 510.586 1534.774, 510.601 1534.713, 510.726 1534.689, 510.891 1534.719, 511.027 1534.791, 511.172 1534.868, 511.248 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1007.675, 515.049 1007.525, 515.237 1007.438, 515.457 1007.408, 515.647 1007.400, 515.701 1007.435, 515.943 1007.471, 516.033 1007.525, 516.165 1007.653, 516.322 1007.691, 516.363 1007.857, 516.495 1008.101, 516.597 1008.325, 516.621 1008.542, 516.596 1008.582, 516.579 1008.779, 516.494 1008.925, 516.389 1008.961, 516.362 1009.120, 516.164 1009.207, 515.944 1009.237, 515.751 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1060.527, 509.660 1060.446, 509.669 1060.215, 509.770 1060.022, 509.902 1059.870, 510.098 1059.835, 510.180 1059.776, 510.317 1059.745, 510.559 1059.773, 510.800 1059.805, 510.873 1059.870, 511.020 1059.986, 511.176 1060.128, 511.294 1060.192, 511.347 1060.441, 511.448 1060.667, 511.471 1060.775, 511.459 1060.878, 511.447 1061.070, 511.364 1061.109, 511.346 1061.302, 511.214 1061.454, 511.018 1061.465, 510.991 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1113.441, 510.020 1113.315, 509.970 1113.088, 509.948 1112.885, 509.971 1112.686, 510.053 1112.463, 510.200 1112.319, 510.392 1112.217, 510.607 1112.196, 510.844 1112.194, 510.867 1112.215, 511.080 1112.293, 511.265 1112.408, 511.431 1112.421, 511.450 1112.628, 511.617 1112.694, 511.643 1112.877, 511.716 1113.104, 511.739 1113.307, 511.715 1113.506, 511.634 1113.729, 511.487 1113.873, 511.294 1113.975, 511.080 1113.999, 510.819 1113.977, 510.606 1113.900, 510.421 1113.834, 510.328 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1166.486, 512.102 1166.422, 511.937 1166.378, 511.876 1166.294, 511.757 1166.087, 511.593 1165.839, 511.497 1165.614, 511.475 1165.437, 511.495 1165.420, 511.497 1165.420, 511.497 1165.214, 511.577 1165.004, 511.719 1165.001, 511.721 1164.855, 511.908 1164.758, 512.118 1164.727, 512.370 1164.727, 512.371 1164.756, 512.580 1164.774, 512.626 1164.826, 512.759 1164.954, 512.940 1165.089, 513.046 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1218.018, 513.928 1218.240, 513.950 1218.423, 513.928 1218.634, 513.851 1218.833, 513.713 1218.985, 513.532 1219.072, 513.330 1219.110, 513.085 1219.073, 512.884 1219.012, 512.711 1218.885, 512.536 1218.681, 512.379 1218.438, 512.286 1218.216, 512.264 1218.032, 512.286 1217.823, 512.363 1217.623, 512.501 1217.471, 512.682 1217.384, 512.884 1217.346, 513.128 1217.383, 513.330 1217.445, 513.503 1217.572, 513.677 1217.775, 513.835 1218.018, 513.928 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1270.747, 516.591 1270.911, 516.607 1270.963, 516.612 1271.135, 516.590 1271.347, 516.518 1271.533, 516.385 1271.688, 516.212 1271.765, 516.019 1271.771, 516.000 1271.809, 515.785 1271.772, 515.575 1271.712, 515.427 1271.588, 515.260 1271.389, 515.109 1271.151, 515.019 1270.935, 514.999 1270.763, 515.020 1270.552, 515.093 1270.365, 515.225 1270.210, 515.398 1270.134, 515.591 1270.128, 515.611 1270.089, 515.825 1270.127, 516.035 1270.186, 516.183 1270.310, 516.350 1270.509, 516.501 1270.647, 516.553 1270.747, 516.591 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1323.469, 514.294 1323.679, 514.314 1323.838, 514.294 1324.049, 514.225 1324.221, 514.099 1324.242, 514.080 1324.378, 513.935 1324.465, 513.733 1324.494, 513.530 1324.463, 513.330 1324.399, 513.190 1324.361, 513.135 1324.279, 513.032 1324.199, 512.968 1324.086, 512.889 1323.966, 512.843 1323.856, 512.804 1323.647, 512.785 1323.488, 512.805 1323.277, 512.874 1323.105, 513.000 1323.084, 513.019 1322.948, 513.164 1322.862, 513.366 1322.832, 513.569 1322.863, 513.768 1322.927, 513.909 1322.966, 513.963 1323.047, 514.067 1323.128, 514.130 1323.240, 514.210 1323.360, 514.255 1323.469, 514.294 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1376.253, 511.781 1376.454, 511.799 1376.600, 511.781 1376.809, 511.715 1377.001, 511.578 1377.125, 511.441 1377.214, 511.251 1377.235, 511.060 1377.211, 510.871 1377.143, 510.739 1377.116, 510.687 1377.027, 510.590 1376.961, 510.530 1376.842, 510.455 1376.737, 510.412 1376.621, 510.376 1376.420, 510.358 1376.274, 510.376 1376.065, 510.442 1375.873, 510.579 1375.750, 510.716 1375.660, 510.906 1375.640, 511.098 1375.663, 511.286 1375.731, 511.418 1375.758, 511.470 1375.847, 511.567 1375.914, 511.627 1376.032, 511.702 1376.137, 511.745 1376.253, 511.781 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1429.165, 511.605 1429.264, 511.615 1429.355, 511.622 1429.488, 511.605 1429.691, 511.544 1429.879, 511.417 1429.990, 511.289 1430.080, 511.112 1430.098, 510.919 1430.076, 510.759 1429.989, 510.588 1429.842, 510.441 1429.719, 510.372 1429.630, 510.332 1429.510, 510.298 1429.411, 510.289 1429.320, 510.281 1429.186, 510.298 1428.984, 510.360 1428.796, 510.487 1428.685, 510.614 1428.595, 510.792 1428.578, 510.985 1428.599, 511.145 1428.687, 511.316 1428.833, 511.462 1428.955, 511.532 1429.045, 511.572 1429.165, 511.605 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1482.927, 510.859 1482.944, 510.834 1483.015, 510.698 1483.036, 510.519 1483.009, 510.370 1482.930, 510.212 1482.792, 510.076 1482.667, 510.012 1482.612, 509.984 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1481.806, 510.108 1481.790, 510.119 1481.692, 510.237 1481.672, 510.265 1481.602, 510.401 1481.580, 510.580 1481.607, 510.729 1481.635, 510.784 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1572.481, 511.214 1572.559, 511.223 1572.677, 511.231 1572.800, 511.213 1572.870, 511.198 1573.023, 511.153 1573.232, 511.028 1573.369, 510.873 1573.437, 510.728 1573.469, 510.538 1573.429, 510.380 1573.421, 510.351 1573.347, 510.212 1573.198, 510.068 1572.978, 509.960 1572.828, 509.927 1572.749, 509.918 1572.631, 509.911 1572.509, 509.928 1572.439, 509.943 1572.286, 509.988 1572.077, 510.113 1571.940, 510.269 1571.872, 510.413 1571.841, 510.603 1571.880, 510.761 1571.889, 510.790 1571.962, 510.929 1572.112, 511.073 1572.331, 511.181 1572.481, 511.214 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1010.350, 504.150 1010.250, 504.192 1010.038, 504.349 1009.853, 504.578 1009.752, 504.836 1009.707, 505.119 1009.748, 505.403 1009.853, 505.659 1010.002, 505.845 1010.047, 505.888 1010.239, 506.045 1010.243, 506.046 1010.524, 506.162 1010.785, 506.189 1010.993, 506.166 1011.038, 506.161 1011.313, 506.043 1011.526, 505.887 1011.711, 505.658 1011.812, 505.400 1011.857, 505.117 1011.816, 504.833 1011.711, 504.576 1011.562, 504.391 1011.539, 504.369 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1066.267, 502.845 1066.023, 502.951 1065.797, 503.107 1065.620, 503.334 1065.509, 503.591 1065.475, 503.871 1065.505, 504.143 1065.506, 504.153 1065.620, 504.408 1065.754, 504.592 1065.995, 504.790 1066.285, 504.906 1066.549, 504.933 1066.790, 504.906 1066.795, 504.906 1067.062, 504.789 1067.288, 504.633 1067.465, 504.406 1067.577, 504.149 1067.610, 503.869 1067.589, 503.670 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1122.593, 501.935 1122.377, 501.914 1122.142, 501.940 1121.907, 502.038 1121.649, 502.208 1121.482, 502.431 1121.362, 502.682 1121.362, 502.688 1121.333, 502.987 1121.359, 503.234 1121.449, 503.450 1121.599, 503.664 1121.841, 503.859 1122.131, 503.973 1122.155, 503.975 1122.396, 503.998 1122.632, 503.972 1122.867, 503.875 1123.125, 503.705 1123.292, 503.482 1123.401, 503.254 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1178.151, 510.148 1178.414, 510.174 1178.639, 510.148 1178.882, 510.055 1179.127, 509.888 1179.300, 509.669 1179.402, 509.446 1179.411, 509.427 1179.450, 509.131 1179.413, 508.890 1179.333, 508.680 1179.183, 508.471 1178.942, 508.281 1178.653, 508.169 1178.389, 508.144 1178.165, 508.170 1177.922, 508.263 1177.677, 508.430 1177.504, 508.649 1177.393, 508.891 1177.378, 509.004 1177.355, 509.186 1177.391, 509.428 1177.471, 509.637 1177.621, 509.847 1177.847, 510.025 1177.862, 510.036 1177.970, 510.078 1178.151, 510.148 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1235.418, 508.497 1235.360, 508.337 1235.211, 508.135 1234.973, 507.951 1234.688, 507.844 1234.428, 507.819 1234.216, 507.844 1233.968, 507.935 1233.736, 508.095 1233.557, 508.307 1233.458, 508.541 1233.410, 508.827 1233.456, 509.060 1233.461, 509.083 1233.465, 509.093 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1289.722, 505.364 1289.758, 505.412 1289.990, 505.586 1290.144, 505.643 1290.267, 505.688 1290.520, 505.712 1290.668, 505.694 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1346.502, 506.314 1346.648, 506.328 1346.747, 506.337 1346.930, 506.314 1347.181, 506.232 1347.379, 506.086 1347.411, 506.062 1347.566, 505.894 1347.671, 505.658 1347.701, 505.423 1347.669, 505.190 1347.590, 505.029 1347.550, 504.963 1347.449, 504.845 1347.361, 504.770 1347.223, 504.680 1347.088, 504.625 1346.954, 504.582 1346.808, 504.569 1346.708, 504.560 1346.526, 504.583 1346.276, 504.666 1346.077, 504.811 1346.046, 504.835 1345.890, 505.003 1345.786, 505.239 1345.755, 505.474 1345.788, 505.707 1345.866, 505.868 1345.906, 505.933 1346.008, 506.051 1346.096, 506.127 1346.233, 506.217 1346.368, 506.271 1346.502, 506.314 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1402.137, 505.199 1402.121, 505.232 1402.100, 505.452 1402.102, 505.472 1402.125, 505.670 1402.197, 505.810 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1459.657, 510.501 1459.565, 510.494 1459.413, 510.514 1459.330, 510.539 1459.172, 510.586 1458.948, 510.733 1458.823, 510.881 1458.803, 510.916 1458.713, 511.086 1458.704, 511.175 1458.689, 511.310 1458.719, 511.496 1458.796, 511.648 1458.819, 511.694 1458.990, 511.864 1459.141, 511.945 1459.239, 511.991 1459.359, 512.023 1459.386, 512.031 1459.496, 512.041 1459.609, 512.050 1459.762, 512.030 1460.003, 511.959 1460.227, 511.812 1460.352, 511.664 1460.372, 511.629 1460.462, 511.458 1460.486, 511.234 1460.474, 511.157 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1515.898, 511.900 1515.992, 511.910 1516.108, 511.919 1516.246, 511.900 1516.309, 511.883 1516.480, 511.834 1516.666, 511.718 1516.698, 511.698 1516.840, 511.528 1516.919, 511.370 1516.947, 511.162 1516.911, 510.990 1516.820, 510.806 1516.659, 510.649 1516.424, 510.531 1516.285, 510.498 1516.274, 510.495 1516.180, 510.485 1516.110, 510.480 1516.063, 510.477 1515.926, 510.495 1515.862, 510.512 1515.692, 510.561 1515.474, 510.698 1515.332, 510.868 1515.253, 511.026 1515.225, 511.233 1515.235, 511.278 1515.261, 511.405 1515.352, 511.589 1515.513, 511.746 1515.747, 511.864 1515.898, 511.900 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1014.284, 496.204 1014.228, 496.157 1013.895, 496.022 1013.591, 495.992 1013.298, 496.022 1012.977, 496.158 1012.729, 496.344 1012.535, 496.583 1012.514, 496.609 1012.396, 496.911 1012.357, 497.163 1012.345, 497.238 1012.392, 497.570 1012.508, 497.852 1012.514, 497.867 1012.687, 498.085 1012.741, 498.133 1012.963, 498.317 1013.079, 498.364 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1072.947, 496.421 1072.648, 496.551 1072.383, 496.734 1072.178, 496.998 1072.146, 497.072 1072.048, 497.297 1072.009, 497.622 1072.019, 497.718 1072.044, 497.951 1072.158, 498.208 1072.178, 498.246 1072.332, 498.462 1072.613, 498.692 1072.674, 498.716 1072.951, 498.826 1073.259, 498.856 1073.429, 498.838 1073.544, 498.826 1073.854, 498.690 1074.120, 498.507 1074.324, 498.244 1074.422, 498.021 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1133.214, 495.894 1132.990, 495.873 1132.717, 495.903 1132.441, 496.018 1132.142, 496.215 1131.949, 496.474 1131.838, 496.705 1131.807, 496.768 1131.771, 497.123 1131.804, 497.409 1131.906, 497.661 1132.082, 497.911 1132.365, 498.136 1132.704, 498.268 1132.725, 498.270 1133.014, 498.298 1133.287, 498.268 1133.563, 498.153 1133.862, 497.955 1134.055, 497.696 1134.188, 497.423 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1193.649, 498.293 1193.515, 498.188 1193.177, 498.060 1192.870, 498.032 1192.611, 498.061 1192.325, 498.172 1192.043, 498.364 1191.838, 498.621 1191.712, 498.900 1191.695, 499.023 1191.664, 499.245 1191.710, 499.523 1191.800, 499.767 1191.975, 500.010 1192.125, 500.126 1192.256, 500.229 1192.594, 500.357 1192.901, 500.386 1193.160, 500.356 1193.446, 500.245 1193.729, 500.054 1193.934, 499.797 1194.060, 499.517 1194.061, 499.509 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1252.687, 507.605 1252.990, 507.634 1253.233, 507.605 1253.526, 507.500 1253.626, 507.429 1253.790, 507.314 1254.004, 507.069 1254.114, 506.798 1254.174, 506.468 1254.118, 506.171 1254.102, 506.130 1254.038, 505.964 1253.865, 505.730 1253.587, 505.518 1253.255, 505.394 1252.952, 505.366 1252.791, 505.385 1252.709, 505.395 1252.417, 505.500 1252.152, 505.685 1251.939, 505.931 1251.828, 506.201 1251.769, 506.532 1251.825, 506.829 1251.904, 507.035 1252.078, 507.269 1252.355, 507.481 1252.409, 507.501 1252.687, 507.605 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1312.215, 501.775 1312.353, 501.872 1312.526, 501.939 1312.677, 501.990 1312.862, 502.007 1312.972, 502.017 1313.198, 501.990 1313.495, 501.888 1313.740, 501.711 1313.945, 501.491 1313.960, 501.476 1314.080, 501.187 1314.096, 501.086 1314.124, 500.902 1314.079, 500.617 1313.990, 500.421 1313.947, 500.360 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1313.457, 499.960 1313.376, 499.929 1313.307, 499.906 1313.224, 499.878 1313.039, 499.861 1312.929, 499.852 1312.703, 499.879 1312.492, 499.952 1312.423, 499.976 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1373.194, 505.574 1373.234, 505.577 1373.442, 505.551 1373.738, 505.456 1374.010, 505.261 1374.186, 505.067 1374.220, 504.994 1374.313, 504.794 1374.343, 504.524 1374.325, 504.388 1374.309, 504.255 1374.212, 504.069 1374.173, 503.993 1374.056, 503.866 1374.047, 503.857 1373.953, 503.770 1373.785, 503.666 1373.635, 503.603 1373.471, 503.554 1373.433, 503.551 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1433.275, 506.394 1433.417, 506.408 1433.549, 506.418 1433.740, 506.393 1434.032, 506.304 1434.303, 506.120 1434.461, 505.938 1434.592, 505.682 1434.618, 505.404 1434.585, 505.175 1434.461, 504.929 1434.250, 504.719 1434.072, 504.622 1433.945, 504.563 1433.771, 504.516 1433.630, 504.502 1433.497, 504.493 1433.307, 504.517 1433.015, 504.607 1432.744, 504.790 1432.586, 504.972 1432.456, 505.228 1432.430, 505.506 1432.462, 505.735 1432.587, 505.980 1432.797, 506.190 1432.974, 506.288 1433.102, 506.347 1433.275, 506.394 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1493.483, 498.444 1493.246, 498.514 1492.980, 498.687 1492.840, 498.856 1492.808, 498.900 1492.707, 499.095 1492.675, 499.355 1492.715, 499.568 1492.830, 499.797 1493.029, 499.992 1493.319, 500.137 1493.499, 500.179 1493.620, 500.194 1493.760, 500.201 1493.932, 500.179 1494.219, 500.094 1494.485, 499.922 1494.626, 499.752 1494.658, 499.708 1494.758, 499.513 1494.791, 499.252 1494.750, 499.040 1494.689, 498.917 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1554.587, 501.428 1554.582, 501.427 1554.525, 501.415 1554.423, 501.402 1554.280, 501.395 1554.125, 501.416 1554.042, 501.437 1553.848, 501.493 1553.603, 501.644 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1553.302, 502.292 1553.343, 502.466 1553.358, 502.504 1553.437, 502.659 1553.446, 502.677 1553.604, 502.829 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1662.852, 500.813 1662.861, 500.828 1663.064, 501.018 1663.363, 501.160 1663.589, 501.201 1663.677, 501.215 1663.857, 501.222 1664.012, 501.200 1664.131, 501.177 1664.328, 501.118 1664.625, 500.950 1664.772, 500.796 1664.822, 500.743 1664.924, 500.510 1664.957, 500.299 1664.900, 500.050 1664.784, 499.868 1664.581, 499.678 1664.465, 499.623 1664.387, 499.587 1664.281, 499.536 1664.055, 499.496 1663.967, 499.482 1663.787, 499.475 1663.632, 499.497 1663.513, 499.520 1663.316, 499.579 1663.237, 499.624 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1015.832, 500.590 1015.676, 500.784 1015.613, 500.862 1015.474, 501.213 1015.468, 501.250 1015.467, 501.260 1015.415, 501.596 1015.469, 501.981 1015.613, 502.329 1015.638, 502.361 1015.813, 502.581 1015.877, 502.639 1016.135, 502.852 1016.522, 503.010 1016.635, 503.022 1016.877, 503.046 1017.080, 503.024 1017.219, 503.010 1017.336, 502.959 1017.592, 502.850 1017.797, 502.700 1017.883, 502.637 1017.994, 502.498 1018.132, 502.326 1018.271, 501.975 1018.312, 501.706 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1081.042, 488.527 1080.952, 488.518 1080.622, 488.552 1080.262, 488.708 1079.952, 488.924 1079.843, 489.065 1079.715, 489.229 1079.561, 489.580 1079.520, 489.946 1079.519, 489.955 1079.526, 490.029 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1145.486, 488.156 1145.260, 488.135 1145.187, 488.128 1144.872, 488.162 1144.547, 488.299 1144.201, 488.527 1143.979, 488.826 1143.973, 488.837 1143.854, 489.082 1143.811, 489.169 1143.766, 489.584 1143.808, 489.914 1143.924, 490.208 1144.130, 490.497 1144.459, 490.758 1144.855, 490.909 1144.886, 490.912 1145.217, 490.943 1145.532, 490.909 1145.858, 490.773 1146.203, 490.544 1146.425, 490.245 1146.432, 490.234 1146.534, 490.023 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1210.471, 493.065 1210.362, 492.981 1209.967, 492.833 1209.705, 492.809 1209.608, 492.801 1209.310, 492.834 1208.972, 492.965 1208.646, 493.187 1208.403, 493.487 1208.260, 493.811 1208.238, 493.960 1208.200, 494.212 1208.258, 494.534 1208.359, 494.818 1208.565, 495.099 1208.763, 495.252 1208.893, 495.353 1209.287, 495.501 1209.647, 495.534 1209.945, 495.500 1210.283, 495.370 1210.609, 495.148 1210.853, 494.848 1210.995, 494.524 1211.024, 494.334 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1273.849, 498.663 1274.084, 498.684 1274.202, 498.695 1274.481, 498.662 1274.827, 498.538 1275.130, 498.324 1275.384, 498.038 1275.507, 497.726 1275.520, 497.687 1275.581, 497.342 1275.520, 496.996 1275.423, 496.760 1275.220, 496.490 1274.896, 496.246 1274.675, 496.163 1274.508, 496.104 1274.274, 496.081 1274.156, 496.072 1273.877, 496.104 1273.531, 496.229 1273.228, 496.442 1272.975, 496.729 1272.851, 497.040 1272.840, 497.080 1272.778, 497.425 1272.839, 497.770 1272.936, 498.006 1273.139, 498.276 1273.462, 498.520 1273.683, 498.603 1273.849, 498.663 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1338.543, 501.292 1338.618, 501.299 1338.751, 501.312 1338.887, 501.322 1338.979, 501.311 1339.146, 501.291 1339.496, 501.173 1339.764, 500.979 1339.776, 500.969 1339.818, 500.933 1339.873, 500.874 1340.038, 500.697 1340.184, 500.363 1340.228, 500.034 1340.189, 499.762 1340.180, 499.705 1340.120, 499.580 1340.071, 499.479 1340.013, 499.385 1339.873, 499.221 1339.747, 499.113 1339.556, 498.988 1339.364, 498.910 1339.178, 498.852 1338.971, 498.832 1338.834, 498.822 1338.576, 498.853 1338.226, 498.971 1337.945, 499.175 1337.905, 499.212 1337.685, 499.448 1337.540, 499.781 1337.538, 499.793 1337.506, 500.027 1337.495, 500.110 1337.543, 500.439 1337.617, 500.594 1337.651, 500.665 1337.707, 500.754 1337.709, 500.758 1337.849, 500.922 1337.976, 501.030 1338.165, 501.155 1338.358, 501.233 1338.543, 501.292 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1403.168, 495.553 1403.348, 495.574 1403.500, 495.582 1403.737, 495.553 1404.087, 495.440 1404.410, 495.211 1404.609, 494.989 1404.762, 494.673 1404.790, 494.363 1404.789, 494.329 1404.756, 494.051 1404.601, 493.749 1404.345, 493.492 1404.139, 493.377 1403.975, 493.301 1403.773, 493.249 1403.593, 493.229 1403.441, 493.221 1403.204, 493.250 1402.854, 493.363 1402.532, 493.592 1402.333, 493.814 1402.181, 494.130 1402.152, 494.440 1402.154, 494.473 1402.187, 494.751 1402.341, 495.053 1402.597, 495.309 1402.802, 495.425 1402.967, 495.500 1403.168, 495.553 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1468.852, 493.391 1468.821, 493.375 1468.608, 493.326 1468.453, 493.306 1468.289, 493.300 1468.096, 493.324 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1467.084, 494.126 1467.070, 494.153 1467.035, 494.475 1467.079, 494.736 1467.221, 495.019 1467.277, 495.073 1467.466, 495.260 1467.501, 495.278 "
            />
            <path
              ref={particles}
              fill="#0000FF"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#0000FF"
              stroke-linejoin="round"
              d=" M 1532.608, 499.663 1532.600, 499.668 1532.394, 499.913 1532.394, 499.913 1532.283, 500.138 1532.256, 500.321 1532.240, 500.436 1532.294, 500.680 1532.376, 500.847 1532.393, 500.881 1532.424, 500.944 1532.616, 501.130 1532.655, 501.168 1532.993, 501.335 1533.028, 501.343 1533.214, 501.384 1533.345, 501.400 1533.517, 501.409 1533.539, 501.406 1533.712, 501.383 1533.808, 501.356 1534.051, 501.286 1534.368, 501.088 1534.575, 500.843 1534.655, 500.680 1534.685, 500.618 1534.729, 500.319 1534.704, 500.209 1534.674, 500.075 1534.650, 500.026 1534.647, 500.020 1534.544, 499.811 1534.313, 499.587 1534.063, 499.463 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1598.348, 501.486 1598.456, 501.502 1598.635, 501.510 1598.810, 501.486 1598.919, 501.461 1599.140, 501.396 1599.449, 501.213 1599.652, 500.986 1599.748, 500.777 1599.797, 500.500 1599.730, 500.229 1599.617, 500.030 1599.399, 499.822 1599.078, 499.667 1598.852, 499.623 1598.744, 499.607 1598.565, 499.599 1598.390, 499.623 1598.281, 499.649 1598.061, 499.713 1597.752, 499.897 1597.549, 500.124 1597.453, 500.332 1597.404, 500.609 1597.472, 500.880 1597.584, 501.079 1597.802, 501.286 1598.122, 501.442 1598.348, 501.486 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1719.865, 491.285 1719.577, 491.443 1719.342, 491.682 1719.216, 491.949 1719.185, 492.190 1719.246, 492.475 1719.392, 492.681 1719.433, 492.725 1719.627, 492.898 1719.976, 493.060 1720.343, 493.121 1720.566, 493.127 1720.738, 493.103 1720.893, 493.074 1721.115, 493.007 1721.469, 492.813 1721.705, 492.574 1721.832, 492.306 1721.862, 492.065 1721.801, 491.780 1721.655, 491.574 1721.615, 491.529 1721.419, 491.356 1721.070, 491.195 1720.702, 491.133 1720.480, 491.128 1720.307, 491.152 1720.152, 491.182 1719.990, 491.231 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1019.898, 483.450 1019.773, 483.502 1019.433, 483.759 1019.144, 484.117 1018.982, 484.531 1018.914, 484.971 1018.976, 485.425 1019.144, 485.825 1019.376, 486.125 1019.642, 486.347 1019.751, 486.437 1020.203, 486.619 1020.616, 486.658 1021.014, 486.618 1021.077, 486.591 1021.448, 486.435 1021.788, 486.179 1022.077, 485.821 1022.241, 485.407 1022.308, 484.967 1022.247, 484.513 1022.077, 484.113 1021.847, 483.812 1021.827, 483.795 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1088.570, 491.043 1088.737, 491.284 1088.837, 491.365 1088.838, 491.366 1089.120, 491.594 1089.581, 491.775 1089.941, 491.809 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1091.187, 488.954 1090.935, 488.751 1090.858, 488.689 1090.397, 488.508 1090.185, 488.489 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1157.874, 480.608 1157.785, 480.794 1157.766, 480.833 1157.710, 481.317 1157.763, 481.697 1157.895, 482.040 1158.135, 482.375 1158.520, 482.676 1158.982, 482.851 1159.043, 482.857 1159.312, 482.884 1159.404, 482.888 1159.768, 482.850 1160.152, 482.689 1160.551, 482.425 1160.823, 482.062 1160.864, 481.975 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1229.213, 483.077 1229.355, 483.062 1229.755, 482.906 1230.128, 482.651 1230.290, 482.454 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1299.837, 484.014 1299.859, 483.999 1300.161, 483.662 1300.326, 483.252 1300.390, 482.857 1300.325, 482.453 1300.204, 482.184 1300.120, 482.064 1299.967, 481.873 1299.799, 481.736 1299.589, 481.594 1299.342, 481.492 1299.136, 481.431 1299.114, 481.429 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1368.556, 481.111 1368.300, 481.140 1368.269, 481.151 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1368.740, 483.976 1368.954, 483.951 1369.368, 483.809 1369.687, 483.577 1369.750, 483.526 1369.998, 483.257 1370.175, 482.867 1370.182, 482.800 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1438.315, 491.585 1438.203, 491.621 1437.819, 491.885 1437.596, 492.140 1437.410, 492.505 1437.397, 492.651 1437.373, 492.901 1437.420, 493.221 1437.596, 493.569 1437.867, 493.838 1437.893, 493.864 1438.146, 493.997 1438.325, 494.084 1438.369, 494.095 1438.573, 494.144 1438.771, 494.168 1438.960, 494.177 1439.229, 494.144 1439.332, 494.111 1439.645, 494.013 1440.030, 493.749 1440.236, 493.512 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1508.795, 494.217 1508.962, 494.239 1509.166, 494.247 1509.410, 494.216 1509.821, 494.094 1510.204, 493.847 1510.401, 493.608 1510.454, 493.543 1510.594, 493.266 1510.643, 492.896 1510.581, 492.596 1510.420, 492.270 1510.135, 491.993 1509.721, 491.787 1509.458, 491.732 1509.290, 491.709 1509.087, 491.702 1508.843, 491.733 1508.432, 491.855 1508.050, 492.103 1507.853, 492.341 1507.801, 492.407 1507.661, 492.683 1507.613, 493.053 1507.673, 493.353 1507.835, 493.678 1508.118, 493.955 1508.532, 494.160 1508.795, 494.217 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1579.182, 494.968 1579.321, 494.988 1579.535, 494.996 1579.754, 494.967 1579.883, 494.933 1580.158, 494.854 1580.536, 494.624 1580.672, 494.469 1580.784, 494.341 1580.905, 494.083 1580.907, 494.071 1580.963, 493.739 1580.877, 493.401 1580.743, 493.156 1580.474, 492.898 1580.079, 492.707 1579.806, 492.655 1579.666, 492.634 1579.452, 492.627 1579.233, 492.656 1579.104, 492.690 1578.829, 492.769 1578.452, 492.999 1578.205, 493.282 1578.084, 493.540 1578.026, 493.884 1578.112, 494.221 1578.245, 494.466 1578.514, 494.723 1578.909, 494.915 1579.182, 494.968 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1648.800, 492.828 1648.970, 492.989 1649.342, 493.165 1649.619, 493.213 1649.732, 493.232 1649.952, 493.239 1650.147, 493.212 1650.291, 493.181 1650.531, 493.109 1650.538, 493.107 1650.906, 492.896 1651.149, 492.635 1651.252, 492.398 1651.273, 492.343 1651.317, 492.080 1651.244, 491.769 1651.177, 491.662 1651.102, 491.544 1650.850, 491.307 1650.477, 491.130 1650.087, 491.063 1649.867, 491.057 1649.672, 491.084 1649.528, 491.116 1649.281, 491.189 1649.212, 491.229 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1785.912, 477.021 1785.700, 477.228 1785.544, 477.536 1785.518, 477.809 1785.582, 478.135 1785.795, 478.422 1786.039, 478.615 1786.446, 478.797 1786.876, 478.865 1786.906, 478.866 1787.153, 478.868 1787.343, 478.841 1787.546, 478.803 1787.792, 478.727 1787.873, 478.687 1787.970, 478.638 1788.217, 478.501 1788.501, 478.225 1788.658, 477.917 1788.684, 477.643 1788.620, 477.316 1788.407, 477.029 1788.161, 476.837 1787.754, 476.654 1787.739, 476.652 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1023.633, 469.504 1023.311, 469.901 1023.120, 470.390 1023.048, 470.855 1023.041, 470.899 1023.113, 471.433 1023.240, 471.730 1023.310, 471.896 1023.579, 472.253 1024.018, 472.615 1024.547, 472.824 1024.999, 472.866 1025.031, 472.867 1025.494, 472.822 1025.589, 472.783 1026.000, 472.612 1026.349, 472.345 1026.400, 472.306 1026.736, 471.891 1026.929, 471.403 1026.969, 471.134 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1100.351, 482.635 1100.111, 482.659 1099.626, 482.870 1099.194, 483.167 1098.876, 483.581 1098.660, 484.059 1098.609, 484.568 1098.614, 484.636 1098.654, 485.092 1098.713, 485.231 1098.827, 485.501 1099.106, 485.902 1099.555, 486.263 1100.006, 486.438 1100.095, 486.472 1100.588, 486.517 1100.600, 486.516 1100.999, 486.475 1101.033, 486.471 1101.253, 486.375 1101.519, 486.260 1101.847, 486.036 1101.951, 485.964 1102.129, 485.732 1102.269, 485.550 1102.286, 485.512 1102.487, 485.072 1102.537, 484.563 1102.534, 484.494 1102.492, 484.038 1102.320, 483.628 1102.213, 483.476 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1174.989, 485.094 1175.062, 485.151 1175.208, 485.265 1175.561, 485.398 1175.750, 485.469 1176.073, 485.500 1176.129, 485.506 1176.245, 485.513 1176.648, 485.470 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1178.076, 482.974 1177.972, 482.694 1177.796, 482.451 1177.689, 482.303 1177.351, 482.040 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1253.458, 485.507 1253.363, 485.436 1253.319, 485.402 1253.093, 485.232 1252.774, 485.111 1252.696, 485.084 1252.554, 485.035 1252.218, 484.999 1252.064, 484.992 1251.670, 485.036 1251.521, 485.092 1251.196, 485.216 1251.081, 485.296 1250.767, 485.512 1250.764, 485.515 1250.576, 485.737 1250.422, 485.919 1250.242, 486.351 1250.147, 486.893 1250.239, 487.380 1250.272, 487.466 1250.366, 487.707 1250.552, 487.957 1250.647, 488.084 1251.096, 488.424 1251.415, 488.544 1251.635, 488.622 1251.971, 488.656 1252.125, 488.665 1252.519, 488.621 1252.993, 488.442 1253.423, 488.145 1253.769, 487.739 1253.846, 487.552 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1327.650, 488.706 1327.945, 488.738 1328.131, 488.746 1328.495, 488.704 1328.982, 488.534 1329.377, 488.250 1329.684, 487.922 1329.740, 487.863 1329.941, 487.390 1330.006, 486.931 1329.937, 486.466 1329.841, 486.266 1329.787, 486.154 1329.702, 486.017 1329.510, 485.794 1329.329, 485.636 1329.068, 485.469 1328.794, 485.354 1328.539, 485.281 1328.519, 485.279 1328.244, 485.247 1328.173, 485.245 1328.058, 485.241 1327.693, 485.282 1327.208, 485.454 1326.812, 485.737 1326.762, 485.790 1326.451, 486.125 1326.251, 486.598 1326.185, 487.056 1326.255, 487.520 1326.403, 487.832 1326.490, 487.969 1326.680, 488.192 1326.862, 488.349 1327.079, 488.490 1327.121, 488.517 1327.396, 488.631 1327.650, 488.706 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1403.744, 485.235 1403.998, 485.267 1404.212, 485.273 1404.546, 485.234 1404.724, 485.175 1404.958, 485.098 1405.039, 485.071 1405.495, 484.744 1405.774, 484.433 1405.991, 483.984 1406.030, 483.550 1406.029, 483.497 1405.982, 483.109 1405.764, 482.682 1405.403, 482.322 1405.112, 482.165 1404.881, 482.055 1404.596, 481.988 1404.342, 481.955 1404.128, 481.950 1403.794, 481.989 1403.302, 482.153 1402.847, 482.480 1402.568, 482.790 1402.353, 483.240 1402.312, 483.672 1402.316, 483.725 1402.361, 484.113 1402.579, 484.539 1402.674, 484.634 1402.939, 484.899 1403.121, 484.998 1403.229, 485.057 1403.460, 485.166 1403.744, 485.235 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1480.128, 486.949 1480.343, 486.978 1480.580, 486.985 1480.884, 486.948 1481.378, 486.795 1481.837, 486.489 1482.085, 486.196 1482.136, 486.112 1482.313, 485.773 1482.367, 485.316 1482.300, 484.949 1482.099, 484.548 1481.753, 484.209 1481.248, 483.957 1480.940, 483.893 1480.725, 483.863 1480.488, 483.858 1480.184, 483.894 1479.691, 484.048 1479.232, 484.355 1478.984, 484.647 1478.935, 484.731 1478.758, 485.070 1478.705, 485.526 1478.771, 485.892 1478.971, 486.293 1479.317, 486.632 1479.821, 486.883 1480.128, 486.949 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1555.204, 484.273 1555.192, 484.354 1555.275, 484.696 1555.301, 484.771 1555.457, 485.070 1555.787, 485.386 1556.221, 485.597 1556.269, 485.621 1556.594, 485.681 1556.773, 485.709 1557.027, 485.715 1557.300, 485.680 1557.306, 485.679 1557.790, 485.537 1558.247, 485.251 1558.270, 485.225 1558.547, 484.899 1558.700, 484.583 1558.767, 484.156 1558.745, 484.068 1558.683, 483.814 1558.658, 483.738 1558.500, 483.439 1558.170, 483.123 1557.687, 482.888 1557.361, 482.829 1557.183, 482.800 1556.928, 482.796 1556.655, 482.830 1556.166, 482.974 1555.711, 483.260 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1631.996, 484.287 1631.982, 484.318 1631.963, 484.389 1631.906, 484.714 1631.998, 485.100 1632.168, 485.377 1632.479, 485.671 1632.939, 485.888 1633.420, 485.971 1633.687, 485.976 1633.931, 485.944 1634.102, 485.902 1634.277, 485.850 1634.411, 485.811 1634.862, 485.546 1635.160, 485.220 1635.241, 485.037 1635.290, 484.926 1635.311, 484.856 1635.367, 484.530 1635.275, 484.143 1635.104, 483.866 1634.792, 483.572 1634.332, 483.354 1633.850, 483.273 1633.583, 483.268 1633.339, 483.300 1633.168, 483.344 1633.051, 483.378 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1708.692, 481.407 1708.707, 481.474 1708.885, 481.729 1708.940, 481.788 1709.179, 482.000 1709.614, 482.200 1710.059, 482.273 1710.072, 482.275 1710.346, 482.279 1710.563, 482.250 1710.753, 482.209 1711.031, 482.126 1711.471, 481.880 1711.764, 481.578 1711.920, 481.241 1711.960, 480.941 1711.940, 480.851 1711.882, 480.583 1711.703, 480.328 1711.649, 480.269 1711.409, 480.057 1710.973, 479.857 1710.572, 479.792 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1865.629, 466.251 1865.516, 466.353 1865.317, 466.542 1865.121, 466.896 1865.095, 467.243 1865.170, 467.579 1865.235, 467.667 1865.412, 467.906 1865.721, 468.122 1866.198, 468.329 1866.703, 468.405 1867.050, 468.403 1867.258, 468.374 1867.523, 468.326 1867.797, 468.241 1868.035, 468.134 1868.309, 467.979 1868.344, 467.948 1868.453, 467.850 1868.653, 467.661 1868.850, 467.307 1868.876, 466.958 1868.801, 466.622 1868.708, 466.497 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1028.741, 458.742 1028.696, 458.777 1028.302, 459.262 1028.075, 459.839 1027.986, 460.432 1028.032, 460.794 1028.067, 461.063 1028.301, 461.601 1028.508, 461.882 1028.614, 462.025 1029.130, 462.448 1029.752, 462.690 1030.279, 462.745 1030.658, 462.708 1030.862, 462.688 1031.454, 462.444 1031.840, 462.146 1031.927, 462.080 1032.320, 461.595 1032.548, 461.018 1032.636, 460.424 1032.575, 459.945 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1112.490, 459.110 1111.963, 459.334 1111.452, 459.694 1111.083, 460.172 1110.825, 460.741 1110.781, 461.208 1110.770, 461.327 1110.766, 461.426 1110.819, 461.948 1111.017, 462.433 1111.345, 462.897 1111.873, 463.314 1112.507, 463.553 1112.989, 463.607 1113.085, 463.601 1113.599, 463.552 1113.603, 463.552 1114.168, 463.310 1114.680, 462.952 1115.048, 462.473 1115.308, 461.905 1115.333, 461.624 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1195.494, 465.930 1195.926, 465.981 1196.074, 465.977 1196.561, 465.928 1197.102, 465.700 1197.633, 465.346 1198.022, 464.844 1198.258, 464.330 1198.351, 463.666 1198.262, 463.157 1198.094, 462.686 1197.762, 462.234 1197.231, 461.829 1196.818, 461.671 1196.594, 461.597 1196.163, 461.544 1196.015, 461.551 1195.528, 461.599 1194.988, 461.829 1194.456, 462.182 1194.070, 462.684 1193.833, 463.198 1193.742, 463.862 1193.829, 464.370 1193.998, 464.840 1194.328, 465.292 1194.858, 465.697 1195.272, 465.853 1195.494, 465.930 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1280.441, 458.244 1280.296, 458.150 1279.939, 457.996 1279.665, 457.927 1279.287, 457.875 1279.091, 457.884 1278.640, 457.929 1278.136, 458.129 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1364.781, 473.169 1364.684, 472.981 1364.440, 472.731 1364.248, 472.543 1363.922, 472.359 1363.621, 472.219 1363.389, 472.164 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1364.221, 475.619 1364.277, 475.578 1364.362, 475.500 1364.713, 475.123 1364.738, 475.068 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1446.419, 473.550 1446.365, 473.550 1445.986, 473.593 1445.398, 473.787 1444.853, 474.168 1444.831, 474.194 1444.540, 474.524 1444.276, 475.046 1444.221, 475.609 1444.289, 476.053 1444.340, 476.155 1444.537, 476.545 1444.958, 476.960 1445.567, 477.266 1445.922, 477.341 1446.199, 477.381 1446.470, 477.383 1446.849, 477.339 1447.317, 477.187 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1528.397, 464.708 1528.973, 464.987 1529.584, 465.090 1529.882, 465.086 1530.223, 465.047 1530.812, 464.862 1531.362, 464.500 1531.370, 464.490 1531.635, 464.169 1531.721, 464.061 1531.915, 463.677 1531.990, 463.146 1531.949, 462.971 1531.895, 462.733 1531.852, 462.630 1531.669, 462.271 1531.266, 461.885 1530.677, 461.601 1530.065, 461.498 1529.767, 461.503 1529.426, 461.542 1528.838, 461.729 1528.290, 462.091 1528.016, 462.421 1527.932, 462.530 1527.739, 462.914 1527.665, 463.443 1527.688, 463.546 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1614.289, 462.853 1614.068, 462.817 1613.748, 462.821 1613.443, 462.858 1613.048, 462.975 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1611.980, 463.746 1611.951, 463.778 1611.786, 464.136 1611.696, 464.630 1611.792, 465.021 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1696.600, 472.104 1696.499, 472.210 1696.310, 472.629 1696.258, 472.999 1696.355, 473.442 1696.573, 473.755 1696.644, 473.831 1696.935, 474.090 1697.473, 474.338 1697.971, 474.418 1698.037, 474.429 1698.372, 474.430 1698.643, 474.395 1698.872, 474.341 1699.218, 474.239 1699.760, 473.930 1700.120, 473.553 1700.310, 473.133 1700.336, 472.950 1700.362, 472.763 1700.264, 472.318 1700.045, 472.005 1699.975, 471.928 1699.682, 471.670 1699.143, 471.423 1698.578, 471.331 1698.328, 471.332 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1780.470, 465.338 1780.422, 465.435 1780.389, 465.773 1780.469, 466.181 1780.734, 466.538 1781.037, 466.774 1781.152, 466.825 1781.544, 467.000 1782.080, 467.082 1782.423, 467.080 1782.661, 467.049 1782.911, 466.995 1783.220, 466.902 1783.440, 466.785 1783.748, 466.616 1784.101, 466.268 1784.226, 466.021 1784.297, 465.880 1784.329, 465.542 1784.248, 465.132 1783.983, 464.774 1783.678, 464.539 1783.623, 464.514 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1034.299, 450.313 1034.365, 450.464 1034.730, 450.971 1035.340, 451.466 1035.835, 451.656 1036.075, 451.749 1036.419, 451.788 1036.506, 451.798 1036.545, 451.802 1036.693, 451.820 1036.810, 451.807 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1125.816, 443.938 1125.684, 444.225 1125.676, 444.314 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1220.214, 454.917 1220.317, 454.909 1220.880, 454.855 1221.023, 454.795 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1222.951, 452.511 1222.999, 452.198 1222.882, 451.609 1222.860, 451.499 1222.694, 451.054 1222.649, 450.993 1222.302, 450.528 1221.966, 450.273 1221.676, 450.058 1221.207, 449.866 1221.049, 449.824 1220.924, 449.790 1220.433, 449.722 1220.240, 449.739 1219.677, 449.792 1219.392, 449.914 1219.030, 450.069 1218.415, 450.478 1218.322, 450.596 1217.949, 451.073 1217.943, 451.086 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1314.822, 465.364 1314.688, 465.210 1314.422, 464.974 1314.066, 464.756 1314.060, 464.754 1313.670, 464.581 1313.322, 464.496 1312.968, 464.447 1312.898, 464.438 1312.646, 464.444 1312.153, 464.495 1312.127, 464.498 1311.450, 464.754 1311.078, 465.014 1310.886, 465.148 1310.760, 465.289 1310.602, 465.467 1310.576, 465.495 1310.385, 465.709 1310.111, 466.388 1310.046, 466.803 1310.011, 467.026 1310.039, 467.204 1310.082, 467.481 1310.089, 467.528 1310.114, 467.688 1310.316, 468.121 1310.368, 468.202 1310.448, 468.325 1310.704, 468.626 1310.754, 468.669 1310.972, 468.859 1311.325, 469.080 1311.722, 469.253 1312.068, 469.342 1312.483, 469.396 1312.493, 469.398 1312.516, 469.397 1312.745, 469.395 1312.958, 469.372 1313.263, 469.340 1313.942, 469.087 1314.505, 468.691 1314.993, 468.149 1315.009, 468.131 1315.107, 467.891 1315.274, 467.480 1315.286, 467.452 1315.316, 467.258 1315.385, 466.812 1315.282, 466.148 1315.167, 465.904 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1404.249, 457.860 1404.607, 457.918 1404.910, 457.908 1405.381, 457.858 1406.078, 457.612 1406.589, 457.240 1406.723, 457.134 1407.116, 456.703 1407.423, 456.055 1407.478, 455.455 1407.477, 455.358 1407.410, 454.822 1407.103, 454.217 1406.592, 453.712 1405.855, 453.342 1405.453, 453.271 1405.094, 453.210 1404.792, 453.224 1404.320, 453.273 1403.625, 453.521 1403.114, 453.892 1402.983, 454.000 1402.589, 454.430 1402.285, 455.077 1402.228, 455.677 1402.233, 455.772 1402.297, 456.308 1402.604, 456.911 1403.113, 457.415 1403.848, 457.785 1404.249, 457.860 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1497.077, 453.847 1497.423, 453.835 1497.848, 453.789 1498.555, 453.555 1499.214, 453.103 1499.559, 452.699 1499.643, 452.558 1499.889, 452.087 1499.970, 451.430 1499.868, 450.927 1499.587, 450.358 1499.094, 449.883 1498.378, 449.536 1497.634, 449.413 1497.288, 449.429 1496.863, 449.474 1496.157, 449.710 1495.501, 450.163 1495.156, 450.566 1495.075, 450.708 1494.829, 451.177 1494.749, 451.832 1494.849, 452.334 1495.130, 452.902 1495.620, 453.376 1496.335, 453.723 1497.077, 453.847 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1590.371, 466.975 1590.752, 466.971 1591.132, 466.926 1591.843, 466.714 1592.508, 466.298 1592.788, 465.975 1592.946, 465.793 1593.013, 465.651 1593.155, 465.350 1593.240, 464.853 1593.260, 464.739 1593.112, 464.145 1593.026, 463.996 1592.872, 463.731 1592.400, 463.285 1591.772, 462.988 1591.708, 462.958 1590.985, 462.839 1590.726, 462.843 1590.604, 462.845 1590.223, 462.890 1589.514, 463.104 1589.133, 463.343 1588.851, 463.521 1588.617, 463.792 1588.416, 464.025 1588.206, 464.467 1588.128, 464.929 1588.103, 465.076 1588.251, 465.669 1588.489, 466.082 1588.959, 466.527 1589.650, 466.855 1589.676, 466.859 1590.371, 466.975 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1682.536, 466.810 1682.825, 466.943 1683.520, 467.054 1683.927, 467.051 1684.265, 467.009 1684.540, 466.937 1684.971, 466.811 1685.635, 466.425 1686.076, 465.956 1686.098, 465.906 1686.307, 465.433 1686.375, 464.976 1686.251, 464.423 1686.077, 464.170 1685.987, 464.039 1685.893, 463.940 1685.538, 463.624 1684.874, 463.320 1684.177, 463.209 1683.770, 463.215 1683.476, 463.251 1683.432, 463.256 1683.337, 463.282 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1778.397, 453.604 1778.658, 453.343 1778.836, 453.166 1779.077, 452.679 1779.119, 452.260 1779.058, 451.951 1779.018, 451.747 1778.687, 451.300 1778.310, 451.015 1777.677, 450.736 1777.010, 450.636 1776.585, 450.648 1776.287, 450.685 1775.980, 450.761 1775.594, 450.874 1774.940, 451.238 1774.504, 451.676 1774.408, 451.870 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1868.594, 452.169 1868.452, 452.302 1868.203, 452.536 1867.956, 452.984 1867.923, 453.423 1868.018, 453.839 1868.190, 454.072 1868.321, 454.249 1868.711, 454.513 1869.309, 454.770 1869.943, 454.862 1870.380, 454.854 1870.640, 454.820 1870.974, 454.752 1871.317, 454.647 1871.617, 454.506 1871.934, 454.327 1871.960, 454.313 1872.143, 454.145 1872.393, 453.910 1872.641, 453.461 1872.675, 453.021 1872.579, 452.604 1872.449, 452.429 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1044.737, 445.057 1043.992, 445.139 1043.599, 445.299 1043.165, 445.477 1042.971, 445.628 1042.493, 446.001 1042.444, 446.061 1042.031, 446.570 1041.945, 446.676 1041.702, 447.286 1041.619, 447.494 1041.501, 448.320 1041.608, 449.211 1041.944, 449.961 1042.221, 450.352 1042.229, 450.363 1042.372, 450.565 1042.651, 450.790 1042.872, 450.969 1043.101, 451.154 1043.463, 451.293 1043.964, 451.485 1043.979, 451.491 1044.499, 451.551 1044.709, 451.575 1045.489, 451.493 1045.538, 451.488 1045.615, 451.456 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1147.335, 449.712 1146.792, 449.765 1146.674, 449.816 1146.019, 450.096 1145.282, 450.604 1145.269, 450.621 1145.144, 450.786 1144.781, 451.265 1144.412, 452.041 1144.403, 452.061 1144.350, 452.560 1144.301, 453.016 1144.330, 453.235 1144.366, 453.513 1144.395, 453.736 1144.410, 453.773 1144.657, 454.413 1145.120, 455.056 1145.406, 455.279 1145.863, 455.633 1146.612, 455.910 1146.755, 455.963 1147.403, 456.042 1147.569, 456.026 1148.038, 455.983 1148.279, 455.960 1148.360, 455.925 1149.052, 455.627 1149.161, 455.553 1149.573, 455.272 1149.792, 455.123 1150.021, 454.818 1150.290, 454.461 1150.627, 453.761 1150.673, 453.666 1150.778, 452.710 1150.777, 452.699 1150.774, 452.678 1150.680, 451.988 1150.671, 451.966 1150.420, 451.310 1150.374, 451.246 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1249.491, 435.595 1250.049, 435.683 1250.953, 435.592 1251.737, 435.256 1252.447, 434.781 1253.019, 434.071 1253.316, 433.381 1253.475, 432.453 1253.324, 431.625 1253.112, 431.116 1252.907, 430.839 1252.646, 430.503 1252.274, 430.189 1251.902, 429.958 1251.374, 429.719 1251.012, 429.650 1250.454, 429.558 1249.549, 429.654 1248.768, 429.994 1248.057, 430.466 1247.489, 431.178 1247.190, 431.866 1247.036, 432.793 1247.188, 433.618 1247.397, 434.127 1247.604, 434.401 1247.860, 434.739 1248.235, 435.050 1248.602, 435.286 1249.131, 435.520 1249.491, 435.595 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1352.247, 432.739 1352.250, 432.741 1352.354, 432.758 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1455.345, 427.800 1454.921, 428.110 1454.719, 428.260 1454.280, 428.748 1453.901, 429.512 1453.819, 430.326 1453.921, 430.932 1454.271, 431.633 1454.866, 432.212 1454.868, 432.213 1455.734, 432.633 1456.632, 432.778 1457.024, 432.746 1457.329, 432.716 1457.557, 432.694 1458.399, 432.392 1459.181, 431.822 1459.620, 431.331 1460.003, 430.567 1460.087, 429.750 1459.982, 429.142 1459.632, 428.439 1459.514, 428.324 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1557.910, 437.108 1557.888, 437.252 1558.011, 437.735 1558.034, 437.824 1558.077, 437.988 1558.352, 438.481 1558.927, 439.027 1559.181, 439.146 1559.770, 439.423 1560.650, 439.561 1561.097, 439.536 1561.573, 439.486 1561.593, 439.480 1562.275, 439.258 1562.431, 439.207 1563.044, 438.801 1563.233, 438.676 1563.589, 438.245 1563.759, 438.039 1564.025, 437.500 1564.144, 436.736 1563.955, 435.997 1563.855, 435.819 1563.676, 435.503 1563.098, 434.957 1562.252, 434.561 1561.371, 434.424 1560.923, 434.453 1560.447, 434.502 1560.037, 434.637 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1662.015, 432.513 1661.927, 433.049 1662.084, 433.736 1662.398, 434.195 1662.527, 434.333 1662.949, 434.703 1663.764, 435.071 1664.619, 435.199 1664.849, 435.186 1665.109, 435.172 1665.532, 435.127 1666.394, 434.863 1667.206, 434.366 1667.743, 433.770 1667.785, 433.675 1667.964, 433.268 1668.023, 433.109 1668.112, 432.553 1667.956, 431.863 1667.638, 431.404 1667.511, 431.264 1667.084, 430.895 1666.267, 430.527 1665.482, 430.411 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1768.510, 435.352 1768.347, 435.399 1767.538, 435.859 1766.999, 436.410 1766.704, 437.020 1766.649, 437.536 1766.776, 438.173 1767.186, 438.727 1767.646, 439.073 1768.429, 439.416 1769.254, 439.536 1769.778, 439.514 1770.149, 439.471 1770.527, 439.368 1771.008, 439.229 1771.820, 438.769 1772.363, 438.218 1772.661, 437.607 1772.714, 437.090 1772.587, 436.450 1772.176, 435.894 1771.711, 435.549 1770.927, 435.206 1770.100, 435.088 1769.765, 435.103 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1873.357, 447.895 1873.161, 448.005 1873.017, 448.086 1873.016, 448.087 1872.789, 448.298 1872.478, 448.590 1872.221, 449.056 1872.169, 449.150 1872.152, 449.374 1872.127, 449.698 1872.166, 449.867 1872.247, 450.217 1872.625, 450.729 1872.646, 450.742 1872.937, 450.938 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1053.480, 427.238 1052.998, 427.432 1052.182, 428.078 1051.528, 428.882 1051.130, 429.876 1050.995, 430.854 1051.117, 431.935 1051.486, 432.778 1051.626, 432.978 1052.031, 433.563 1052.909, 434.264 1053.967, 434.660 1054.835, 434.774 1055.838, 434.656 1056.771, 434.278 1056.825, 434.255 1057.645, 433.615 1058.297, 432.810 1058.700, 431.817 1058.830, 430.837 1058.713, 429.755 1058.347, 428.909 1057.799, 428.123 1057.775, 428.104 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1167.787, 403.479 1167.643, 403.780 1167.605, 404.107 1167.507, 404.942 1167.635, 405.758 1167.933, 406.580 1168.486, 407.328 1169.020, 407.736 1169.371, 407.992 1170.092, 408.304 1171.182, 408.491 1171.665, 408.430 1172.236, 408.357 1173.140, 407.982 1174.036, 407.343 1174.131, 407.217 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1285.394, 423.906 1285.360, 423.989 1285.111, 424.598 1285.064, 424.800 1284.904, 425.690 1284.927, 425.826 1285.065, 426.661 1285.085, 426.704 1285.336, 427.253 1285.548, 427.581 1285.889, 427.970 1286.096, 428.159 1286.295, 428.340 1286.485, 428.447 1286.772, 428.608 1287.362, 428.889 1288.457, 429.077 1288.898, 429.032 1288.959, 429.025 1289.547, 428.965 1290.501, 428.565 1291.167, 428.114 1291.320, 428.011 1291.394, 427.923 1292.024, 427.172 1292.118, 426.938 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1290.801, 422.413 1290.685, 422.351 1290.097, 422.064 1288.998, 421.879 1288.349, 421.949 1288.277, 421.957 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1404.368, 426.780 1403.848, 427.152 1403.659, 427.339 1403.506, 427.503 1403.094, 427.943 1402.964, 428.226 1402.813, 428.555 1402.659, 428.889 1402.659, 428.895 1402.578, 429.731 1402.578, 429.732 1402.584, 429.898 1402.653, 430.453 1402.677, 430.648 1403.117, 431.516 1403.846, 432.234 1404.899, 432.754 1405.980, 432.932 1405.988, 432.934 1406.423, 432.894 1407.098, 432.830 1407.792, 432.571 1408.099, 432.456 1408.831, 431.931 1409.025, 431.749 1409.589, 431.142 1409.790, 430.711 1410.031, 430.194 1410.078, 429.674 1410.093, 429.509 1410.108, 429.348 1410.110, 429.181 1410.069, 428.866 1410.012, 428.429 1409.571, 427.557 1409.334, 427.325 1408.897, 426.896 1408.839, 426.838 1408.621, 426.731 1408.528, 426.686 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1520.482, 415.718 1520.540, 415.829 1521.245, 416.499 1522.275, 416.982 1523.082, 417.103 1523.348, 417.143 1524.467, 417.036 1525.421, 416.700 1525.499, 416.672 1526.462, 415.997 1526.945, 415.433 1527.092, 415.194 1527.435, 414.534 1527.564, 413.577 1527.401, 412.880 1527.385, 412.836 1527.321, 412.655 1527.303, 412.621 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1638.114, 410.447 1638.061, 410.740 1638.261, 411.599 1638.635, 412.153 1638.812, 412.339 1639.315, 412.780 1640.319, 413.230 1641.370, 413.379 1641.452, 413.372 1641.959, 413.327 1642.490, 413.277 1643.543, 412.933 1644.534, 412.298 1645.189, 411.546 1645.471, 410.929 1645.525, 410.714 1645.564, 410.491 1645.644, 410.032 1645.445, 409.169 1645.066, 408.615 1644.893, 408.425 1644.382, 407.987 1643.375, 407.538 1642.338, 407.393 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1761.222, 428.074 1761.240, 428.073 1761.706, 428.022 1762.773, 427.712 1763.175, 427.480 1763.489, 427.299 1763.781, 427.130 1764.455, 426.435 1764.496, 426.349 1764.503, 426.336 1764.695, 425.935 1764.824, 425.666 1764.864, 425.290 1764.893, 425.024 1764.733, 424.222 1764.219, 423.528 1763.692, 423.141 1763.645, 423.107 1762.668, 422.683 1761.859, 422.570 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1879.726, 421.272 1879.587, 421.287 1879.057, 421.422 1878.523, 421.579 1878.048, 421.827 1877.514, 422.122 1876.837, 422.766 1876.448, 423.478 1876.441, 423.569 1876.394, 424.173 1876.546, 424.811 1876.943, 425.348 1877.020, 425.452 1877.635, 425.843 1877.797, 425.930 1878.573, 426.236 1879.567, 426.370 1880.137, 426.341 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1032.187, 514.152 1032.161, 514.164 1031.988, 514.286 1031.844, 514.468 1031.760, 514.671 1031.733, 514.863 1031.728, 514.896 1031.757, 515.120 1031.844, 515.324 1031.957, 515.469 1031.999, 515.507 1032.147, 515.628 1032.375, 515.722 1032.583, 515.744 1032.781, 515.722 1032.948, 515.649 1032.998, 515.627 1033.171, 515.505 1033.315, 515.323 1033.399, 515.120 1033.417, 514.992 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1083.403, 510.081 1083.386, 510.080 1083.194, 510.101 1083.013, 510.178 1082.984, 510.194 1082.802, 510.316 1082.665, 510.496 1082.574, 510.697 1082.564, 510.795 1082.550, 510.919 1082.572, 511.140 1082.648, 511.313 1082.664, 511.342 1082.767, 511.486 1082.958, 511.643 1083.188, 511.735 1083.370, 511.753 1083.398, 511.756 1083.590, 511.734 1083.771, 511.658 1083.800, 511.642 1083.982, 511.520 1084.119, 511.340 1084.207, 511.146 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1133.561, 516.260 1133.579, 516.305 1133.603, 516.363 1133.722, 516.533 1133.913, 516.687 1134.143, 516.777 1134.352, 516.799 1134.537, 516.777 1134.724, 516.703 1134.817, 516.641 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1135.088, 515.599 1135.086, 515.593 1134.967, 515.423 1134.776, 515.269 1134.773, 515.268 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1184.512, 513.405 1184.482, 513.625 1184.512, 513.815 1184.573, 513.978 1184.692, 514.142 1184.881, 514.291 1185.108, 514.379 1185.315, 514.400 1185.490, 514.379 1185.682, 514.307 1185.873, 514.176 1186.010, 514.005 1186.096, 513.815 1186.120, 513.639 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1235.849, 517.287 1235.997, 517.402 1236.220, 517.487 1236.423, 517.506 1236.588, 517.486 1236.783, 517.417 1236.963, 517.291 1236.991, 517.259 1237.104, 517.127 1237.181, 516.943 1237.218, 516.722 1237.179, 516.522 1237.128, 516.381 1237.011, 516.223 1236.825, 516.079 1236.683, 516.025 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1287.389, 518.592 1287.586, 518.611 1287.588, 518.611 1287.740, 518.592 1287.934, 518.526 1288.101, 518.406 1288.245, 518.251 1288.322, 518.059 1288.354, 517.865 1288.322, 517.675 1288.266, 517.541 1288.153, 517.390 1287.972, 517.253 1287.756, 517.172 1287.559, 517.153 1287.405, 517.173 1287.211, 517.238 1287.043, 517.358 1286.900, 517.514 1286.823, 517.706 1286.791, 517.899 1286.823, 518.089 1286.831, 518.108 1286.879, 518.223 1286.992, 518.374 1287.173, 518.511 1287.389, 518.592 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1338.598, 517.728 1338.787, 517.746 1338.929, 517.728 1339.122, 517.666 1339.299, 517.537 1339.420, 517.405 1339.501, 517.224 1339.525, 517.040 1339.499, 516.861 1339.439, 516.734 1339.407, 516.685 1339.330, 516.591 1339.260, 516.534 1339.155, 516.462 1339.049, 516.421 1338.947, 516.386 1338.757, 516.368 1338.615, 516.386 1338.422, 516.448 1338.246, 516.577 1338.124, 516.709 1338.044, 516.890 1338.020, 517.074 1338.046, 517.253 1338.106, 517.380 1338.138, 517.429 1338.215, 517.523 1338.285, 517.579 1338.389, 517.652 1338.495, 517.692 1338.598, 517.728 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1389.884, 517.199 1390.065, 517.216 1390.196, 517.199 1390.385, 517.140 1390.560, 517.019 1390.670, 516.896 1390.752, 516.725 1390.769, 516.553 1390.749, 516.384 1390.664, 516.219 1390.581, 516.131 1390.524, 516.078 1390.414, 516.010 1390.322, 515.972 1390.215, 515.939 1390.034, 515.922 1389.903, 515.939 1389.714, 515.997 1389.540, 516.119 1389.430, 516.242 1389.348, 516.412 1389.331, 516.584 1389.351, 516.753 1389.436, 516.918 1389.518, 517.006 1389.576, 517.059 1389.685, 517.127 1389.777, 517.165 1389.884, 517.199 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1441.251, 516.933 1441.422, 516.949 1441.541, 516.933 1441.724, 516.879 1441.894, 516.766 1441.991, 516.652 1442.074, 516.494 1442.091, 516.322 1442.070, 516.178 1441.992, 516.025 1441.861, 515.894 1441.749, 515.831 1441.670, 515.796 1441.560, 515.765 1441.390, 515.749 1441.271, 515.765 1441.088, 515.819 1440.919, 515.932 1440.821, 516.046 1440.739, 516.204 1440.722, 516.376 1440.743, 516.520 1440.820, 516.673 1440.952, 516.804 1441.063, 516.867 1441.142, 516.902 1441.251, 516.933 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1492.656, 515.497 1492.731, 515.504 1492.817, 515.511 1492.923, 515.497 1492.968, 515.485 1493.100, 515.447 1493.264, 515.343 1493.350, 515.237 1493.370, 515.213 1493.432, 515.091 1493.452, 514.932 1493.427, 514.799 1493.357, 514.658 1493.234, 514.538 1493.121, 514.480 1493.055, 514.447 1492.944, 514.418 1492.869, 514.411 1492.783, 514.404 1492.677, 514.419 1492.632, 514.431 1492.500, 514.469 1492.337, 514.573 1492.250, 514.678 1492.230, 514.703 1492.168, 514.824 1492.148, 514.983 1492.173, 515.116 1492.244, 515.257 1492.366, 515.378 1492.479, 515.436 1492.545, 515.468 1492.656, 515.497 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1036.075, 507.908 1036.015, 507.934 1035.813, 508.078 1035.645, 508.290 1035.547, 508.528 1035.510, 508.790 1035.533, 508.969 1035.544, 509.051 1035.645, 509.289 1035.777, 509.459 1035.998, 509.644 1036.264, 509.753 1036.507, 509.778 1036.738, 509.752 1036.941, 509.664 1036.991, 509.643 1037.194, 509.499 1037.361, 509.287 1037.459, 509.050 1037.496, 508.788 1037.463, 508.526 1037.445, 508.484 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1090.592, 506.183 1090.535, 506.177 1090.311, 506.202 1090.099, 506.292 1090.068, 506.309 1089.854, 506.452 1089.706, 506.646 1089.695, 506.661 1089.588, 506.896 1089.561, 507.154 1089.585, 507.413 1089.673, 507.614 1089.694, 507.647 1089.812, 507.816 1090.035, 507.998 1090.304, 508.105 1090.400, 508.115 1090.549, 508.130 1090.773, 508.105 1090.985, 508.015 1091.016, 507.997 1091.230, 507.855 1091.389, 507.645 1091.422, 507.574 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1144.484, 512.691 1144.729, 512.716 1144.935, 512.692 1144.943, 512.691 1145.165, 512.604 1145.215, 512.570 1145.399, 512.447 1145.555, 512.241 1145.664, 512.012 1145.670, 511.962 1145.695, 511.734 1145.667, 511.505 1145.588, 511.308 1145.448, 511.110 1145.224, 510.931 1144.954, 510.826 1144.709, 510.802 1144.495, 510.826 1144.274, 510.914 1144.040, 511.071 1143.884, 511.277 1143.774, 511.506 1143.744, 511.784 1143.772, 512.012 1143.851, 512.209 1143.885, 512.257 1143.991, 512.407 1144.215, 512.586 1144.484, 512.691 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1199.684, 510.210 1199.649, 510.163 1199.428, 509.990 1199.162, 509.888 1198.920, 509.864 1198.717, 509.888 1198.491, 509.973 1198.269, 510.125 1198.107, 510.324 1198.009, 510.546 1197.970, 510.814 1198.007, 511.035 1198.077, 511.226 1198.216, 511.417 1198.437, 511.590 1198.493, 511.611 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1252.321, 509.163 1252.370, 509.290 1252.506, 509.474 1252.724, 509.640 1252.984, 509.738 1253.222, 509.760 1253.412, 509.737 1253.642, 509.656 1253.850, 509.510 1254.018, 509.318 1254.104, 509.105 1254.151, 508.846 1254.118, 508.671 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1307.412, 511.429 1307.642, 511.450 1307.819, 511.428 1308.049, 511.351 1308.242, 511.212 1308.412, 511.030 1308.505, 510.806 1308.540, 510.582 1308.505, 510.360 1308.436, 510.206 1308.391, 510.145 1308.304, 510.031 1308.212, 509.960 1308.092, 509.873 1307.956, 509.822 1307.839, 509.780 1307.609, 509.758 1307.432, 509.780 1307.202, 509.858 1307.009, 509.996 1306.839, 510.179 1306.746, 510.403 1306.711, 510.627 1306.747, 510.848 1306.815, 511.003 1306.861, 511.064 1306.948, 511.177 1307.040, 511.248 1307.159, 511.336 1307.295, 511.386 1307.412, 511.429 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1361.400, 507.339 1361.277, 507.475 1361.180, 507.687 1361.154, 507.899 1361.182, 508.109 1361.256, 508.255 1361.289, 508.313 1361.384, 508.420 1361.460, 508.488 1361.588, 508.570 1361.707, 508.619 1361.833, 508.658 1362.055, 508.678 1362.191, 508.661 1362.219, 508.658 1362.448, 508.584 1362.495, 508.550 1362.658, 508.432 1362.797, 508.280 1362.894, 508.067 1362.919, 507.855 1362.892, 507.645 1362.818, 507.499 1362.785, 507.440 1362.690, 507.333 1362.613, 507.266 1362.485, 507.184 1362.366, 507.135 1362.241, 507.096 1362.112, 507.084 1362.075, 507.081 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1416.028, 507.179 1415.982, 507.210 1415.858, 507.352 1415.759, 507.551 1415.741, 507.766 1415.763, 507.944 1415.861, 508.135 1415.894, 508.169 1416.024, 508.298 1416.157, 508.375 1416.259, 508.420 1416.390, 508.457 1416.502, 508.468 1416.601, 508.476 1416.750, 508.457 1416.974, 508.388 1417.006, 508.366 1417.124, 508.285 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1471.455, 509.533 1471.369, 509.524 1471.266, 509.516 1471.130, 509.534 1470.912, 509.598 1470.827, 509.654 1470.710, 509.730 1470.599, 509.862 1470.579, 509.894 1470.554, 509.940 1470.499, 510.047 1470.486, 510.163 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1471.663, 510.825 1471.863, 510.696 1471.974, 510.563 1471.994, 510.531 1472.074, 510.379 1472.096, 510.178 1472.068, 510.012 1471.979, 509.834 1471.825, 509.682 1471.690, 509.612 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1525.843, 510.858 1525.926, 510.867 1526.032, 510.874 1526.154, 510.858 1526.212, 510.843 1526.357, 510.801 1526.364, 510.799 1526.560, 510.677 1526.688, 510.525 1526.757, 510.385 1526.783, 510.199 1526.750, 510.046 1526.669, 509.882 1526.525, 509.742 1526.315, 509.637 1526.270, 509.626 1526.179, 509.605 1526.096, 509.596 1525.990, 509.589 1525.868, 509.605 1525.810, 509.620 1525.658, 509.664 1525.463, 509.786 1525.335, 509.938 1525.265, 510.078 1525.239, 510.263 1525.272, 510.417 1525.353, 510.580 1525.497, 510.721 1525.707, 510.826 1525.843, 510.858 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1040.186, 499.254 1040.142, 499.285 1039.948, 499.531 1039.909, 499.625 1039.833, 499.809 1039.791, 500.112 1039.805, 500.224 1039.829, 500.418 1039.948, 500.694 1040.100, 500.894 1040.358, 501.108 1040.668, 501.234 1040.880, 501.255 1040.952, 501.262 1041.221, 501.233 1041.354, 501.176 1041.514, 501.107 1041.751, 500.937 1041.946, 500.691 1041.952, 500.677 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1098.624, 498.724 1098.366, 498.752 1098.117, 498.859 1098.083, 498.876 1097.833, 499.044 1097.648, 499.287 1097.522, 499.561 1097.514, 499.649 1097.492, 499.860 1097.519, 500.162 1097.620, 500.397 1097.782, 500.631 1098.043, 500.842 1098.356, 500.966 1098.642, 500.994 1098.659, 500.992 1098.901, 500.966 1099.151, 500.859 1099.184, 500.841 1099.434, 500.674 1099.619, 500.431 1099.702, 500.251 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1156.876, 499.915 1156.702, 499.848 1156.416, 499.821 1156.168, 499.848 1155.908, 499.953 1155.637, 500.134 1155.454, 500.376 1155.329, 500.640 1155.306, 500.838 1155.291, 500.964 1155.326, 501.227 1155.417, 501.457 1155.579, 501.686 1155.841, 501.893 1155.973, 501.944 1156.154, 502.014 1156.440, 502.041 1156.688, 502.013 1156.948, 501.909 1157.219, 501.728 1157.402, 501.486 1157.527, 501.222 1157.540, 501.120 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1214.114, 507.032 1214.397, 507.059 1214.631, 507.032 1214.898, 506.932 1215.154, 506.756 1215.347, 506.524 1215.458, 506.267 1215.507, 505.953 1215.460, 505.698 1215.381, 505.476 1215.219, 505.254 1214.960, 505.053 1214.649, 504.935 1214.366, 504.909 1214.132, 504.936 1213.865, 505.036 1213.609, 505.212 1213.417, 505.445 1213.305, 505.701 1213.257, 506.014 1213.303, 506.270 1213.383, 506.492 1213.544, 506.714 1213.803, 506.915 1214.114, 507.032 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1271.419, 504.172 1271.516, 504.302 1271.769, 504.494 1272.073, 504.606 1272.350, 504.632 1272.569, 504.606 1272.672, 504.569 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1272.887, 504.477 1273.078, 504.342 1273.277, 504.118 1273.374, 503.873 1273.383, 503.844 1273.432, 503.572 1273.383, 503.302 1273.307, 503.115 1273.148, 502.903 1272.894, 502.711 1272.888, 502.708 1272.590, 502.598 1272.313, 502.573 1272.183, 502.588 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1329.305, 501.094 1329.326, 501.228 1329.409, 501.406 1329.457, 501.479 1329.546, 501.586 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1389.263, 504.805 1389.328, 504.760 1389.485, 504.585 1389.602, 504.339 1389.627, 504.095 1389.620, 504.034 1389.603, 503.893 1389.598, 503.852 1389.476, 503.616 1389.359, 503.493 1389.277, 503.414 1389.120, 503.321 1388.989, 503.264 1388.948, 503.252 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1446.788, 510.041 1446.826, 510.045 1446.913, 510.054 1447.001, 510.060 1447.036, 510.063 1447.165, 510.046 1447.206, 510.041 1447.472, 509.961 1447.719, 509.797 1447.860, 509.632 1447.980, 509.403 1448.005, 509.153 1447.983, 509.005 1447.974, 508.946 1447.862, 508.725 1447.678, 508.543 1447.672, 508.536 1447.508, 508.447 1447.396, 508.395 1447.235, 508.352 1447.110, 508.339 1446.988, 508.330 1446.817, 508.352 1446.551, 508.432 1446.305, 508.597 1446.164, 508.761 1446.153, 508.783 1446.045, 508.991 1446.043, 509.006 1446.020, 509.240 1446.039, 509.367 1446.051, 509.447 1446.163, 509.668 1446.353, 509.857 1446.516, 509.946 1446.628, 509.998 1446.788, 510.041 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1505.032, 504.948 1505.139, 504.960 1505.267, 504.968 1505.421, 504.947 1505.680, 504.872 1505.921, 504.719 1506.078, 504.528 1506.167, 504.352 1506.198, 504.119 1506.160, 503.928 1506.058, 503.722 1505.878, 503.547 1505.617, 503.416 1505.451, 503.377 1505.345, 503.365 1505.217, 503.358 1505.062, 503.378 1504.804, 503.453 1504.563, 503.607 1504.406, 503.798 1504.317, 503.974 1504.287, 504.206 1504.325, 504.397 1504.427, 504.603 1504.606, 504.778 1504.867, 504.909 1505.032, 504.948 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1563.499, 503.507 1563.555, 503.514 1563.685, 503.521 1563.817, 503.503 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1044.947, 492.903 1044.885, 492.982 1044.749, 493.308 1044.722, 493.512 1044.701, 493.659 1044.722, 493.827 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1107.828, 492.108 1107.598, 492.132 1107.305, 492.259 1107.271, 492.276 1106.977, 492.473 1106.763, 492.754 1106.615, 493.075 1106.598, 493.250 1106.582, 493.421 1106.582, 493.463 1106.611, 493.774 1106.727, 494.049 1106.916, 494.320 1107.220, 494.565 1107.586, 494.708 1107.920, 494.739 1107.963, 494.735 1108.220, 494.707 1108.513, 494.581 1108.547, 494.563 1108.842, 494.366 1109.055, 494.085 1109.204, 493.764 1109.215, 493.646 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1170.392, 492.879 1170.206, 492.808 1169.873, 492.778 1169.587, 492.809 1169.282, 492.933 1168.969, 493.142 1168.753, 493.425 1168.610, 493.729 1168.596, 493.838 1168.563, 494.107 1168.607, 494.410 1168.710, 494.678 1168.900, 494.943 1169.204, 495.182 1169.366, 495.244 1169.570, 495.322 1169.903, 495.353 1170.189, 495.321 1170.495, 495.198 1170.807, 494.989 1171.025, 494.706 1171.167, 494.401 1171.179, 494.309 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1231.364, 498.650 1231.160, 498.790 1230.932, 499.062 1230.806, 499.358 1230.784, 499.494 1230.747, 499.722 1230.805, 500.017 1230.812, 500.050 1230.894, 500.275 1230.953, 500.356 1231.082, 500.532 1231.385, 500.764 1231.747, 500.899 1232.077, 500.930 1232.346, 500.899 1232.661, 500.781 1232.955, 500.578 1233.184, 500.307 1233.309, 500.011 1233.338, 499.841 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1233.149, 498.993 1233.033, 498.836 1232.731, 498.604 1232.368, 498.469 1232.097, 498.444 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1294.054, 505.332 1294.377, 505.362 1294.628, 505.332 1294.949, 505.221 1295.213, 505.032 1295.222, 505.026 1295.458, 504.767 1295.587, 504.450 1295.638, 504.135 1295.586, 503.821 1295.493, 503.605 1295.420, 503.508 1295.307, 503.359 1295.173, 503.257 1295.010, 503.136 1294.814, 503.063 1294.655, 503.006 1294.332, 502.977 1294.081, 503.007 1293.997, 503.036 1293.936, 503.057 1293.760, 503.118 1293.487, 503.313 1293.251, 503.572 1293.123, 503.889 1293.071, 504.204 1293.119, 504.489 1293.124, 504.517 1293.217, 504.733 1293.402, 504.979 1293.536, 505.081 1293.578, 505.111 1293.699, 505.202 1293.895, 505.275 1294.054, 505.332 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1355.585, 503.852 1355.618, 503.909 1355.751, 504.059 1355.860, 504.156 1356.029, 504.264 1356.039, 504.270 1356.209, 504.340 1356.384, 504.394 1356.568, 504.412 1356.697, 504.422 1356.930, 504.394 1357.252, 504.288 1357.498, 504.108 1357.548, 504.071 1357.745, 503.857 1357.852, 503.620 1357.862, 503.599 1357.881, 503.556 1357.918, 503.257 1357.877, 502.959 1357.775, 502.753 1357.727, 502.670 1357.594, 502.520 1357.484, 502.423 1357.305, 502.309 1357.136, 502.239 1357.116, 502.233 1357.083, 502.223 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1418.749, 500.738 1418.909, 500.756 1419.051, 500.765 1419.263, 500.738 1419.584, 500.637 1419.880, 500.432 1420.057, 500.231 1420.199, 499.946 1420.226, 499.637 1420.193, 499.384 1420.054, 499.111 1419.821, 498.879 1419.629, 498.773 1419.485, 498.706 1419.297, 498.657 1419.137, 498.639 1418.995, 498.631 1418.782, 498.658 1418.462, 498.759 1418.167, 498.964 1417.989, 499.165 1417.848, 499.450 1417.822, 499.759 1417.854, 500.011 1417.993, 500.284 1418.226, 500.516 1418.417, 500.622 1418.561, 500.689 1418.749, 500.738 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1481.374, 494.601 1481.221, 494.620 1480.906, 494.716 1480.877, 494.735 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1543.284, 501.917 1543.249, 501.989 1543.219, 502.051 1543.179, 502.319 1543.229, 502.538 1543.249, 502.582 1543.345, 502.775 1543.553, 502.976 1543.858, 503.127 1544.060, 503.171 1544.175, 503.185 1544.333, 503.193 1544.507, 503.170 1544.597, 503.146 1544.814, 503.083 1545.100, 502.906 1545.288, 502.687 1545.386, 502.484 1545.427, 502.217 1545.376, 501.997 1545.357, 501.954 1545.347, 501.934 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1606.054, 503.147 1606.054, 503.148 1606.086, 503.279 1606.188, 503.457 1606.271, 503.536 1606.383, 503.643 1606.670, 503.782 1606.875, 503.823 1606.971, 503.836 1607.132, 503.844 1607.200, 503.834 1607.288, 503.822 1607.388, 503.800 1607.474, 503.775 1607.585, 503.742 1607.863, 503.579 1608.046, 503.376 1608.104, 503.249 1608.131, 503.190 1608.176, 502.943 1608.139, 502.792 1608.116, 502.700 1608.080, 502.637 1608.014, 502.522 1607.837, 502.353 1607.819, 502.336 1607.531, 502.197 1607.327, 502.156 1607.231, 502.143 1607.069, 502.135 1606.913, 502.157 1606.813, 502.179 1606.617, 502.237 1606.510, 502.300 1606.339, 502.401 1606.156, 502.603 1606.127, 502.666 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1052.369, 495.537 1051.991, 495.500 1051.957, 495.504 1051.628, 495.539 1051.594, 495.553 1051.231, 495.709 1051.216, 495.720 1051.111, 495.795 1050.905, 495.942 1050.766, 496.119 1050.643, 496.275 1050.483, 496.654 1050.461, 496.823 1050.429, 497.064 1050.434, 497.105 1050.457, 497.304 1050.478, 497.481 1050.642, 497.854 1050.731, 497.973 1050.845, 498.127 1051.143, 498.373 1051.197, 498.417 1051.349, 498.479 1051.370, 498.487 1051.620, 498.587 1052.007, 498.625 1052.345, 498.589 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1117.268, 485.570 1117.250, 485.608 1117.123, 485.879 1117.082, 486.332 1117.119, 486.691 1117.138, 486.736 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1183.905, 485.886 1183.897, 485.945 1183.953, 486.295 1184.069, 486.607 1184.291, 486.914 1184.647, 487.190 1184.850, 487.267 1185.074, 487.351 1185.368, 487.379 1185.464, 487.386 1185.793, 487.350 1186.154, 487.204 1186.514, 486.963 1186.772, 486.632 1186.934, 486.280 1186.950, 486.155 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1252.124, 493.233 1252.388, 493.259 1252.509, 493.267 1252.817, 493.232 1253.190, 493.094 1253.526, 492.860 1253.798, 492.543 1253.938, 492.203 1254.014, 491.779 1253.942, 491.398 1253.841, 491.139 1253.621, 490.843 1253.268, 490.576 1253.018, 490.483 1252.845, 490.421 1252.582, 490.395 1252.461, 490.387 1252.152, 490.422 1251.780, 490.561 1251.443, 490.794 1251.173, 491.112 1251.032, 491.452 1250.957, 491.875 1251.029, 492.256 1251.129, 492.514 1251.349, 492.810 1251.702, 493.077 1252.124, 493.233 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1319.225, 493.041 1319.459, 493.065 1319.602, 493.073 1319.889, 493.040 1320.268, 492.908 1320.580, 492.684 1320.862, 492.381 1321.017, 492.011 1321.071, 491.650 1321.015, 491.285 1320.900, 491.038 1320.830, 490.932 1320.683, 490.755 1320.537, 490.633 1320.336, 490.500 1320.119, 490.411 1319.922, 490.351 1319.688, 490.326 1319.546, 490.319 1319.258, 490.352 1318.880, 490.485 1318.567, 490.708 1318.287, 491.012 1318.132, 491.382 1318.078, 491.742 1318.134, 492.106 1318.248, 492.353 1318.319, 492.459 1318.465, 492.636 1318.611, 492.758 1318.811, 492.892 1319.029, 492.980 1319.225, 493.041 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1387.175, 489.625 1387.389, 489.554 1387.741, 489.299 1387.963, 489.055 1388.128, 488.703 1388.163, 488.362 1388.122, 488.017 1387.950, 487.682 1387.785, 487.516 1387.668, 487.399 1387.448, 487.275 1387.336, 487.223 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1452.897, 495.188 1453.014, 495.421 1453.284, 495.688 1453.519, 495.809 1453.676, 495.887 1453.906, 495.942 1454.082, 495.963 1454.119, 495.965 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1455.157, 493.793 1454.929, 493.677 1454.773, 493.598 1454.542, 493.544 1454.439, 493.531 1454.438, 493.531 1454.366, 493.522 1454.223, 493.516 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1521.512, 499.033 1521.599, 499.044 1521.660, 499.051 1521.848, 499.060 1522.066, 499.032 1522.188, 498.996 1522.440, 498.923 1522.789, 498.703 1523.016, 498.430 1523.057, 498.348 1523.141, 498.180 1523.187, 497.847 1523.129, 497.576 1522.984, 497.282 1522.727, 497.033 1522.353, 496.847 1522.111, 496.795 1521.963, 496.776 1521.775, 496.768 1521.557, 496.796 1521.183, 496.905 1520.835, 497.126 1520.609, 497.399 1520.484, 497.648 1520.438, 497.981 1520.470, 498.132 1520.495, 498.252 1520.640, 498.545 1520.751, 498.652 1520.768, 498.669 1520.801, 498.701 1520.897, 498.794 1521.224, 498.957 1521.271, 498.980 1521.512, 499.033 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1588.074, 496.765 1588.070, 496.788 1588.146, 497.091 1588.269, 497.312 1588.511, 497.543 1588.867, 497.716 1589.115, 497.764 1589.239, 497.782 1589.434, 497.790 1589.630, 497.764 1589.750, 497.735 1589.996, 497.663 1590.338, 497.457 1590.491, 497.285 1590.563, 497.203 1590.671, 496.971 1590.691, 496.858 1590.725, 496.662 1590.648, 496.359 1590.525, 496.138 1590.283, 495.906 1589.926, 495.734 1589.677, 495.686 1589.554, 495.667 1589.358, 495.660 1589.162, 495.686 1589.043, 495.716 1588.797, 495.788 1588.455, 495.994 1588.354, 496.108 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1656.879, 497.459 1656.979, 497.476 1657.178, 497.483 1657.352, 497.459 1657.483, 497.432 1657.704, 497.366 1658.035, 497.177 1658.254, 496.944 1658.367, 496.684 1658.405, 496.448 1658.340, 496.169 1658.212, 495.967 1657.985, 495.754 1657.651, 495.596 1657.400, 495.552 1657.300, 495.535 1657.101, 495.529 1656.927, 495.553 1656.796, 495.580 1656.575, 495.646 1656.245, 495.835 1656.026, 496.068 1655.935, 496.280 1655.914, 496.328 1655.876, 496.564 1655.941, 496.842 1656.068, 497.044 1656.295, 497.257 1656.629, 497.415 1656.879, 497.459 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1058.251, 482.965 1057.980, 483.081 1057.596, 483.357 1057.292, 483.743 1057.104, 484.189 1057.043, 484.663 1057.098, 485.152 1057.291, 485.583 1057.436, 485.784 1057.525, 485.906 1057.936, 486.243 1058.431, 486.438 1058.883, 486.481 1059.305, 486.437 1059.382, 486.404 1059.765, 486.240 1060.149, 485.965 1060.453, 485.579 1060.642, 485.133 1060.702, 484.658 1060.648, 484.169 1060.478, 483.788 1060.454, 483.739 1060.417, 483.688 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1131.303, 481.655 1131.291, 481.654 1131.206, 481.649 1131.063, 481.664 1130.803, 481.691 1130.697, 481.737 1130.396, 481.868 1130.363, 481.883 1129.955, 482.156 1129.714, 482.476 1129.670, 482.534 1129.461, 482.973 1129.409, 483.502 1129.442, 483.794 1129.457, 483.919 1129.608, 484.293 1129.612, 484.299 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1203.488, 481.050 1203.576, 481.059 1203.672, 481.062 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1205.309, 478.573 1205.281, 478.494 1205.020, 478.139 1204.603, 477.819 1204.104, 477.635 1203.769, 477.599 1203.648, 477.596 1203.269, 477.636 1202.842, 477.809 1202.538, 478.014 1202.428, 478.088 1202.122, 478.475 1201.939, 478.881 1201.865, 479.396 1201.936, 479.799 1201.977, 479.916 1202.066, 480.164 1202.290, 480.470 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1277.665, 480.845 1277.492, 480.709 1277.387, 480.634 1277.329, 480.593 1277.273, 480.553 1276.992, 480.441 1276.779, 480.375 1276.481, 480.341 1276.329, 480.337 1275.974, 480.376 1275.533, 480.541 1275.147, 480.810 1274.824, 481.182 1274.667, 481.574 1274.652, 481.634 1274.621, 481.803 1274.573, 482.068 1274.651, 482.511 1274.775, 482.807 1275.033, 483.149 1275.228, 483.300 1275.445, 483.457 1275.726, 483.568 1275.939, 483.636 1276.087, 483.652 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1349.803, 481.420 1349.582, 481.362 1349.322, 481.331 1349.143, 481.327 1348.816, 481.364 1348.566, 481.451 1348.367, 481.521 1348.012, 481.777 1347.955, 481.834 1347.677, 482.130 1347.489, 482.560 1347.457, 482.806 1347.435, 482.973 1347.494, 483.395 1347.635, 483.677 1347.705, 483.802 1347.888, 484.003 1348.045, 484.146 1348.291, 484.296 1348.532, 484.401 1348.774, 484.467 1348.858, 484.477 1349.034, 484.498 1349.213, 484.503 1349.540, 484.466 1349.990, 484.310 1350.326, 484.067 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1421.220, 489.534 1421.123, 489.601 1420.874, 489.883 1420.802, 490.027 1420.692, 490.250 1420.674, 490.287 1420.636, 490.725 1420.677, 491.036 1420.683, 491.078 1420.879, 491.463 1421.207, 491.790 1421.477, 491.936 1421.652, 492.019 1421.680, 492.032 1421.947, 492.098 1422.171, 492.125 1422.373, 492.134 1422.672, 492.097 1423.126, 491.952 1423.545, 491.660 1423.717, 491.465 1423.794, 491.377 1423.996, 490.972 1424.016, 490.736 1424.034, 490.534 1423.998, 490.264 1423.986, 490.180 1423.967, 490.142 1423.924, 490.057 1423.902, 490.013 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1495.893, 488.791 1495.822, 488.776 1495.632, 488.750 1495.412, 488.743 1495.140, 488.777 1494.689, 488.914 1494.271, 489.190 1494.049, 489.454 1493.998, 489.528 1493.840, 489.834 1493.790, 490.245 1493.822, 490.414 1493.853, 490.576 1494.033, 490.937 1494.347, 491.244 1494.803, 491.471 1495.045, 491.524 1495.088, 491.533 1495.278, 491.558 1495.498, 491.566 1495.770, 491.532 1495.771, 491.532 1496.221, 491.396 1496.641, 491.121 1496.689, 491.064 1496.862, 490.856 1496.914, 490.783 1497.072, 490.476 1497.124, 490.064 1497.059, 489.732 1497.023, 489.660 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1568.329, 489.553 1568.487, 489.577 1568.720, 489.584 1568.965, 489.552 1569.104, 489.513 1569.410, 489.425 1569.826, 489.168 1570.099, 488.852 1570.235, 488.566 1570.298, 488.182 1570.219, 487.874 1570.201, 487.807 1570.055, 487.536 1569.757, 487.251 1569.320, 487.039 1569.021, 486.984 1568.864, 486.959 1568.630, 486.953 1568.385, 486.984 1567.940, 487.113 1567.525, 487.370 1567.253, 487.686 1567.117, 487.971 1567.055, 488.354 1567.133, 488.662 1567.152, 488.729 1567.297, 488.999 1567.595, 489.285 1568.031, 489.497 1568.329, 489.553 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1640.617, 490.208 1640.616, 490.213 1640.698, 490.560 1640.853, 490.810 1641.133, 491.074 1641.547, 491.270 1641.853, 491.323 1641.981, 491.345 1642.223, 491.352 1642.442, 491.322 1642.599, 491.286 1642.708, 491.254 1642.875, 491.205 1643.283, 490.968 1643.552, 490.677 1643.668, 490.412 1643.690, 490.351 1643.739, 490.058 1643.700, 489.892 1643.657, 489.711 1643.502, 489.460 1643.220, 489.196 1642.806, 489.000 1642.372, 488.925 1642.129, 488.919 1641.911, 488.948 1641.754, 488.985 1641.717, 488.996 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1714.114, 485.570 1714.083, 485.799 1714.153, 486.118 1714.314, 486.347 1714.361, 486.399 1714.577, 486.590 1714.967, 486.770 1715.377, 486.838 1715.477, 486.840 1715.624, 486.843 1715.818, 486.816 1715.990, 486.781 1716.237, 486.707 1716.633, 486.488 1716.896, 486.219 1716.970, 486.061 1717.037, 485.918 1717.072, 485.649 1717.003, 485.330 1716.840, 485.100 1716.794, 485.049 1716.577, 484.858 1716.187, 484.678 1715.792, 484.613 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1065.976, 465.629 1065.954, 465.638 1065.503, 465.971 1065.149, 466.417 1064.926, 466.945 1064.877, 467.338 1064.858, 467.493 1064.920, 468.069 1065.117, 468.519 1065.148, 468.567 1065.417, 468.953 1065.467, 468.993 1065.899, 469.342 1066.307, 469.500 1066.478, 469.567 1066.947, 469.614 1067.008, 469.612 1067.499, 469.565 1067.964, 469.369 1068.035, 469.339 1068.488, 469.008 1068.841, 468.561 1069.065, 468.034 1069.090, 467.829 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1145.601, 478.919 1145.804, 478.939 1146.028, 478.962 1146.137, 478.966 1146.604, 478.918 1146.888, 478.796 1147.087, 478.710 1147.113, 478.694 1147.598, 478.374 1147.913, 477.952 1147.927, 477.933 1148.178, 477.420 1148.246, 476.800 1148.182, 476.316 1148.011, 475.876 1147.706, 475.449 1147.216, 475.065 1146.628, 474.844 1146.202, 474.799 1146.093, 474.798 1145.625, 474.845 1145.143, 475.055 1145.116, 475.069 1144.632, 475.390 1144.302, 475.830 1144.054, 476.344 1143.987, 476.964 1144.049, 477.447 1144.221, 477.886 1144.526, 478.313 1144.732, 478.475 1145.014, 478.697 1145.601, 478.919 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1224.918, 483.219 1225.185, 483.247 1225.298, 483.259 1225.451, 483.265 1225.475, 483.263 1225.889, 483.218 1226.397, 483.019 1226.875, 482.694 1227.242, 482.245 1227.344, 482.010 1227.391, 481.902 1227.448, 481.770 1227.481, 481.560 1227.501, 481.439 1227.544, 481.172 1227.491, 480.905 1227.451, 480.702 1227.437, 480.635 1227.306, 480.278 1227.152, 480.070 1227.000, 479.864 1226.512, 479.493 1226.511, 479.492 1226.148, 479.356 1225.924, 479.276 1225.544, 479.235 1225.391, 479.231 1224.953, 479.278 1224.446, 479.479 1224.355, 479.540 1223.968, 479.803 1223.768, 480.049 1223.747, 480.075 1223.614, 480.238 1223.602, 480.253 1223.396, 480.726 1223.302, 481.324 1223.311, 481.371 1223.392, 481.794 1223.399, 481.818 1223.409, 481.860 1223.485, 482.070 1223.539, 482.218 1223.844, 482.631 1224.332, 483.003 1224.430, 483.040 1224.796, 483.174 1224.918, 483.219 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1302.759, 471.185 1302.797, 471.271 1302.904, 471.428 1303.099, 471.665 1303.311, 471.845 1303.581, 472.019 1303.894, 472.152 1304.159, 472.224 1304.492, 472.266 1304.684, 472.266 1305.089, 472.222 1305.614, 472.026 1306.054, 471.717 1306.443, 471.283 1306.655, 470.755 1306.656, 470.750 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1383.959, 469.059 1384.184, 469.057 1384.556, 469.017 1385.091, 468.829 1385.494, 468.536 1385.584, 468.461 1385.774, 468.256 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1386.034, 466.486 1385.878, 466.183 1385.482, 465.787 1385.174, 465.625 1384.910, 465.496 1384.712, 465.454 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1382.136, 467.004 1382.104, 467.304 1382.163, 467.794 1382.404, 468.265 1382.800, 468.661 1383.106, 468.825 1383.199, 468.869 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1463.319, 470.272 1463.465, 470.300 1463.709, 470.338 1463.962, 470.337 1464.301, 470.298 1464.840, 470.122 1465.341, 469.776 1465.619, 469.455 1465.866, 468.982 1465.910, 468.570 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1463.350, 466.976 1462.986, 467.096 1462.487, 467.443 1462.208, 467.762 1461.983, 468.198 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1543.645, 477.335 1543.847, 477.368 1544.123, 477.371 1544.428, 477.334 1544.966, 477.172 1545.468, 476.850 1545.796, 476.458 1545.968, 476.109 1546.039, 475.633 1545.950, 475.257 1545.917, 475.169 1545.747, 474.841 1545.382, 474.490 1544.848, 474.232 1544.494, 474.171 1544.292, 474.136 1544.016, 474.135 1543.711, 474.172 1543.174, 474.335 1542.674, 474.657 1542.347, 475.049 1542.174, 475.398 1542.104, 475.872 1542.193, 476.248 1542.227, 476.335 1542.395, 476.663 1542.760, 477.013 1543.292, 477.272 1543.645, 477.335 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1622.727, 477.815 1622.626, 477.928 1622.479, 478.253 1622.461, 478.334 1622.396, 478.694 1622.500, 479.125 1622.685, 479.431 1623.031, 479.757 1623.540, 479.998 1624.074, 480.088 1624.366, 480.092 1624.639, 480.057 1624.825, 480.007 1624.899, 479.986 1625.170, 479.907 1625.668, 479.609 1625.997, 479.245 1626.143, 478.919 1626.163, 478.838 1626.177, 478.761 1626.228, 478.477 1626.124, 478.046 1625.937, 477.739 1625.590, 477.413 1625.079, 477.172 1624.546, 477.082 1624.253, 477.080 1623.980, 477.115 1623.794, 477.166 1623.450, 477.265 1623.442, 477.270 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1702.832, 478.017 1703.028, 478.297 1703.090, 478.364 1703.354, 478.599 1703.838, 478.821 1704.347, 478.905 1704.355, 478.905 1704.651, 478.907 1704.893, 478.875 1705.102, 478.828 1705.412, 478.736 1705.901, 478.460 1706.226, 478.123 1706.399, 477.747 1706.444, 477.413 1706.369, 477.067 1706.357, 477.014 1706.158, 476.731 1706.097, 476.664 1705.831, 476.429 1705.346, 476.207 1704.909, 476.135 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1783.138, 471.070 1783.075, 471.195 1783.046, 471.499 1783.118, 471.864 1783.355, 472.184 1783.627, 472.397 1783.786, 472.468 1784.082, 472.600 1784.562, 472.675 1784.870, 472.675 1785.083, 472.647 1785.308, 472.601 1785.584, 472.517 1785.782, 472.415 1786.058, 472.263 1786.375, 471.952 1786.444, 471.816 1786.550, 471.607 1786.578, 471.302 1786.507, 470.936 1786.269, 470.615 1785.996, 470.403 1785.917, 470.368 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1074.300, 452.571 1074.304, 452.617 1074.355, 453.124 1074.584, 453.657 1074.937, 454.164 1075.505, 454.618 1076.189, 454.877 1076.734, 454.940 1077.388, 454.875 1077.915, 454.655 1078.014, 454.613 1078.553, 454.216 1078.964, 453.694 1079.232, 453.068 1079.297, 452.513 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1165.967, 453.964 1165.973, 453.956 1166.002, 453.907 1166.274, 453.345 1166.303, 453.101 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1336.819, 471.881 1336.711, 472.136 1336.679, 472.212 1336.598, 472.791 1336.628, 472.998 1336.665, 473.256 1336.684, 473.389 1336.878, 473.782 1336.983, 473.964 1337.233, 474.240 1337.461, 474.448 1337.801, 474.652 1338.146, 474.805 1338.479, 474.890 1338.851, 474.938 1339.096, 474.940 1339.173, 474.931 1339.560, 474.889 1340.189, 474.663 1340.692, 474.303 1341.161, 473.800 1341.424, 473.189 1341.474, 472.817 1341.503, 472.608 1341.479, 472.436 1341.422, 472.033 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1341.397, 471.967 1341.222, 471.615 1341.118, 471.432 1340.865, 471.157 1340.698, 471.002 1340.639, 470.947 1340.297, 470.745 1339.952, 470.590 1339.748, 470.540 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1426.204, 470.788 1426.518, 470.835 1426.694, 470.834 1426.806, 470.834 1427.130, 470.797 1427.228, 470.786 1427.870, 470.570 1428.464, 470.146 1428.506, 470.098 1428.814, 469.753 1429.101, 469.172 1429.157, 468.547 1429.087, 468.056 1429.037, 467.957 1428.811, 467.510 1428.347, 467.052 1428.212, 466.984 1427.676, 466.715 1427.296, 466.640 1426.981, 466.592 1426.694, 466.596 1426.272, 466.642 1425.792, 466.805 1425.631, 466.860 1425.039, 467.286 1424.688, 467.677 1424.404, 468.257 1424.350, 468.882 1424.417, 469.371 1424.438, 469.411 1424.599, 469.730 1424.693, 469.915 1425.156, 470.373 1425.825, 470.710 1426.204, 470.788 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1514.355, 474.482 1514.616, 474.525 1514.938, 474.526 1515.319, 474.481 1515.966, 474.280 1516.005, 474.254 1516.569, 473.883 1516.876, 473.513 1516.963, 473.399 1517.160, 473.010 1517.181, 472.969 1517.260, 472.383 1517.160, 471.921 1516.908, 471.408 1516.589, 471.100 1516.462, 470.977 1515.812, 470.660 1515.395, 470.587 1515.135, 470.543 1514.813, 470.544 1514.432, 470.589 1513.967, 470.734 1513.786, 470.791 1513.185, 471.189 1512.877, 471.558 1512.794, 471.673 1512.704, 471.849 1512.575, 472.101 1512.498, 472.687 1512.595, 473.148 1512.629, 473.216 1512.847, 473.659 1513.292, 474.089 1513.941, 474.407 1514.355, 474.482 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1602.421, 468.497 1602.624, 468.530 1602.973, 468.528 1602.984, 468.527 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1605.162, 466.176 1605.115, 465.985 1605.081, 465.927 1604.894, 465.611 1604.870, 465.589 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1690.270, 459.547 1690.678, 459.611 1691.047, 459.605 1691.349, 459.568 1691.599, 459.499 1691.985, 459.388 1692.584, 459.038 1692.982, 458.614 1693.191, 458.143 1693.250, 457.735 1693.141, 457.238 1692.901, 456.896 1692.819, 456.805 1692.497, 456.525 1691.900, 456.253 1691.673, 456.218 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1777.656, 458.423 1777.483, 458.771 1777.446, 459.147 1777.536, 459.604 1777.832, 460.003 1778.168, 460.263 1778.382, 460.358 1778.734, 460.514 1779.331, 460.605 1779.713, 460.599 1779.979, 460.565 1780.257, 460.502 1780.602, 460.399 1781.191, 460.077 1781.584, 459.686 1781.640, 459.575 1781.801, 459.251 1781.838, 458.875 1781.748, 458.416 1781.451, 458.017 1781.113, 457.758 1780.923, 457.674 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1867.045, 459.459 1866.905, 459.587 1866.681, 459.798 1866.462, 460.196 1866.433, 460.587 1866.517, 460.961 1866.707, 461.218 1866.788, 461.327 1867.135, 461.566 1867.670, 461.797 1868.236, 461.881 1868.625, 461.876 1868.858, 461.845 1869.156, 461.788 1869.463, 461.693 1869.730, 461.570 1869.970, 461.435 1870.037, 461.397 1870.199, 461.250 1870.423, 461.039 1870.644, 460.640 1870.674, 460.248 1870.589, 459.873 1870.459, 459.699 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1086.958, 444.645 1086.825, 444.744 1086.783, 444.797 1086.672, 444.936 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1183.120, 456.618 1183.061, 457.065 1183.051, 457.146 1183.157, 457.800 1183.380, 458.410 1183.805, 458.992 1184.487, 459.514 1185.029, 459.720 1185.306, 459.814 1185.869, 459.883 1185.949, 459.879 1186.053, 459.872 1186.369, 459.842 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1188.729, 455.813 1188.657, 455.613 1188.230, 455.030 1187.546, 454.509 1187.214, 454.381 1187.005, 454.300 1186.726, 454.211 1186.163, 454.138 1186.011, 454.151 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1282.647, 460.539 1283.132, 460.606 1283.387, 460.596 1283.968, 460.537 1284.135, 460.472 1284.699, 460.251 1285.016, 460.032 1285.226, 459.887 1285.307, 459.832 1285.332, 459.815 1285.592, 459.513 1285.870, 459.190 1286.123, 458.555 1286.160, 458.433 1286.283, 457.729 1286.160, 456.990 1285.949, 456.517 1285.787, 456.283 1285.523, 455.959 1285.209, 455.692 1284.842, 455.459 1284.386, 455.260 1284.028, 455.174 1283.542, 455.105 1283.287, 455.119 1282.706, 455.176 1281.977, 455.466 1281.344, 455.900 1280.809, 456.527 1280.554, 457.160 1280.523, 457.283 1280.397, 457.984 1280.441, 458.244 1280.523, 458.721 1280.729, 459.194 1280.734, 459.202 1280.737, 459.205 1280.895, 459.426 1281.154, 459.752 1281.402, 459.959 1281.470, 460.016 1281.833, 460.252 1282.291, 460.449 1282.322, 460.456 1282.647, 460.539 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1379.988, 449.331 1380.398, 449.400 1380.714, 449.382 1381.242, 449.329 1381.998, 449.050 1382.570, 448.640 1382.696, 448.516 1383.140, 448.041 1383.467, 447.318 1383.539, 446.657 1383.456, 445.953 1383.112, 445.282 1382.551, 444.723 1381.742, 444.317 1380.907, 444.174 1380.590, 444.196 1380.063, 444.248 1379.308, 444.529 1378.735, 444.938 1378.614, 445.066 1378.169, 445.538 1377.846, 446.260 1377.771, 446.920 1377.856, 447.622 1378.199, 448.291 1378.759, 448.848 1379.565, 449.255 1379.988, 449.331 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1477.890, 437.102 1477.679, 437.123 1476.908, 437.392 1476.193, 437.902 1475.804, 438.345 1475.452, 439.028 1475.370, 439.759 1475.472, 440.310 1475.785, 440.940 1476.326, 441.464 1477.113, 441.845 1477.929, 441.979 1478.298, 441.957 1478.774, 441.908 1479.546, 441.641 1480.265, 441.133 1480.653, 440.689 1481.009, 440.005 1481.093, 439.272 1480.988, 438.720 1480.764, 438.267 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1573.518, 440.878 1573.466, 441.204 1573.633, 441.865 1573.888, 442.310 1574.408, 442.801 1575.169, 443.158 1575.965, 443.284 1576.377, 443.264 1576.802, 443.218 1577.582, 442.969 1578.311, 442.494 1578.791, 441.924 1579.026, 441.438 1579.138, 440.753 1578.971, 440.089 1578.712, 439.643 1578.530, 439.471 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1674.625, 452.717 1675.073, 452.704 1675.450, 452.660 1676.231, 452.433 1676.966, 451.995 1677.453, 451.466 1677.707, 450.879 1677.785, 450.374 1677.646, 449.757 1677.356, 449.336 1677.247, 449.219 1676.857, 448.876 1676.120, 448.541 1675.347, 448.422 1674.900, 448.438 1674.522, 448.481 1673.742, 448.711 1673.010, 449.149 1672.526, 449.678 1672.329, 450.132 1672.275, 450.264 1672.196, 450.766 1672.335, 451.382 1672.622, 451.802 1672.733, 451.918 1673.119, 452.261 1673.854, 452.597 1674.625, 452.717 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1771.979, 458.620 1771.626, 458.973 1771.359, 459.514 1771.311, 459.983 1771.425, 460.553 1771.794, 461.050 1772.210, 461.374 1772.915, 461.688 1773.658, 461.802 1774.131, 461.795 1774.464, 461.753 1774.807, 461.675 1775.239, 461.546 1775.971, 461.144 1776.460, 460.657 1776.729, 460.115 1776.732, 460.092 1776.776, 459.645 1776.663, 459.073 1776.293, 458.574 1775.873, 458.250 1775.187, 457.946 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1870.297, 445.197 1869.954, 445.519 1869.679, 446.021 1869.642, 446.512 1869.687, 446.709 1869.748, 446.975 1870.086, 447.432 1870.522, 447.723 1870.610, 447.763 1870.641, 447.777 1871.190, 448.009 1871.472, 448.049 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1103.502, 439.239 1103.312, 439.260 1102.439, 439.623 1101.661, 440.195 1101.090, 440.923 1100.699, 441.811 1100.609, 442.699 1100.614, 442.850 1100.615, 442.875 1100.690, 443.667 1100.746, 443.804 1100.954, 444.310 1101.000, 444.420 1101.394, 444.978 1101.502, 445.131 1102.043, 445.556 1102.310, 445.766 1102.497, 445.835 1102.905, 445.987 1103.235, 446.110 1103.282, 446.127 1103.809, 446.194 1104.030, 446.222 1104.969, 446.124 1105.238, 446.011 1105.408, 445.940 1105.840, 445.759 1106.154, 445.532 1106.471, 445.301 1106.622, 445.192 1107.191, 444.462 1107.586, 443.575 1107.618, 443.247 1107.672, 442.686 1107.675, 442.509 1107.618, 441.946 1107.595, 441.717 1107.420, 441.285 1107.288, 440.961 1106.882, 440.389 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1211.549, 414.240 1210.832, 414.728 1210.232, 415.530 1209.880, 416.285 1209.732, 417.322 1209.875, 418.064 1209.918, 418.244 1210.078, 418.673 1210.124, 418.798 1210.630, 419.474 1211.076, 419.831 1211.441, 420.075 1212.057, 420.347 1212.413, 420.412 1212.590, 420.442 1213.057, 420.521 1214.034, 420.409 1214.832, 420.067 1215.673, 419.502 1216.278, 418.702 1216.627, 417.945 1216.683, 417.562 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1434.587, 421.223 1434.429, 421.146 1433.446, 420.991 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1429.964, 423.034 1429.757, 423.468 1429.745, 423.603 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1540.299, 423.331 1540.181, 423.562 1540.060, 424.414 1540.213, 425.044 1540.274, 425.236 1540.568, 425.776 1541.205, 426.380 1542.137, 426.817 1543.109, 426.966 1543.591, 426.928 1544.125, 426.875 1545.067, 426.555 1545.255, 426.427 1545.946, 425.956 1546.373, 425.446 1546.397, 425.413 1546.522, 425.241 1546.824, 424.645 1546.948, 423.789 1546.791, 423.158 1546.735, 422.964 1546.436, 422.423 1545.796, 421.818 1544.860, 421.382 1543.886, 421.235 1543.404, 421.278 1542.869, 421.329 1542.040, 421.614 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1650.803, 421.997 1650.740, 422.367 1650.917, 423.134 1651.259, 423.638 1651.410, 423.798 1651.871, 424.201 1652.775, 424.608 1653.722, 424.747 1653.723, 424.747 1654.259, 424.709 1654.732, 424.661 1655.685, 424.361 1656.581, 423.799 1657.174, 423.131 1657.423, 422.575 1657.480, 422.391 1657.509, 422.217 1657.583, 421.775 1657.407, 421.004 1657.060, 420.501 1656.912, 420.338 1656.445, 419.936 1655.539, 419.530 1654.662, 419.404 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1763.489, 427.299 1763.981, 427.513 1764.901, 427.643 1765.482, 427.610 1765.897, 427.565 1766.852, 427.287 1767.756, 426.767 1768.359, 426.146 1768.690, 425.459 1768.698, 425.387 1768.751, 424.886 1768.635, 424.300 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1876.934, 439.324 1877.548, 439.301 1877.910, 439.256 1878.382, 439.150 1878.860, 439.006 1879.286, 438.797 1879.763, 438.531 1880.371, 437.960 1880.721, 437.328 1880.771, 436.708 1880.633, 436.131 1880.208, 435.557 1879.656, 435.200 1879.511, 435.126 1878.816, 434.845 1877.926, 434.723 1877.311, 434.748 1876.949, 434.792 1876.478, 434.902 1876.000, 435.045 1875.579, 435.256 1875.101, 435.521 1874.497, 436.091 1874.151, 436.722 1874.103, 437.339 1874.238, 437.915 1874.661, 438.487 1875.209, 438.845 1875.355, 438.916 1876.046, 439.200 1876.934, 439.324 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1122.081, 386.637 1121.422, 386.899 1120.479, 387.632 1119.810, 388.473 1119.331, 389.568 1119.288, 390.034 1119.237, 390.584 1119.217, 390.871 1119.320, 391.768 1119.678, 392.691 1120.280, 393.521 1121.247, 394.254 1122.094, 394.614 1123.281, 394.815 1124.412, 394.654 1124.732, 394.526 1125.439, 394.243 1126.387, 393.516 1127.054, 392.673 1127.538, 391.579 1127.539, 391.576 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1250.087, 408.183 1249.391, 408.068 1248.210, 408.210 1247.283, 408.608 1246.261, 409.284 1245.521, 410.234 1245.335, 410.655 1245.129, 411.120 1244.929, 412.345 1245.129, 413.434 1245.306, 413.858 1245.400, 414.083 1245.673, 414.460 1245.683, 414.473 1246.005, 414.877 1246.496, 415.302 1246.701, 415.423 1246.973, 415.583 1247.666, 415.907 1247.711, 415.915 1247.784, 415.927 1248.157, 415.990 1248.198, 415.997 1248.864, 416.110 1250.044, 415.974 1250.970, 415.574 1251.067, 415.515 1251.122, 415.479 1251.186, 415.437 1251.915, 414.958 1251.996, 414.904 1252.498, 414.267 1252.743, 413.957 1253.131, 413.067 1253.269, 412.251 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1374.687, 414.893 1375.899, 414.764 1376.984, 414.329 1377.811, 413.752 1378.628, 412.857 1379.096, 411.788 1379.202, 410.858 1379.080, 409.825 1378.584, 408.852 1377.775, 408.055 1376.611, 407.484 1375.411, 407.297 1374.198, 407.432 1373.116, 407.873 1372.288, 408.447 1371.478, 409.344 1371.018, 410.411 1370.906, 411.338 1371.032, 412.367 1371.527, 413.336 1372.332, 414.131 1373.490, 414.702 1374.687, 414.893 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1497.656, 407.918 1497.341, 408.522 1497.213, 409.589 1497.374, 410.361 1497.491, 410.613 1497.822, 411.273 1498.604, 412.020 1499.745, 412.556 1500.931, 412.735 1502.163, 412.612 1503.296, 412.201 1503.310, 412.191 1504.351, 411.443 1504.900, 410.816 1505.431, 409.809 1505.564, 408.738 1505.510, 408.488 1505.397, 407.964 1505.286, 407.708 1504.948, 407.048 1504.162, 406.299 1503.016, 405.763 1501.826, 405.588 1500.593, 405.716 1499.463, 406.132 1498.994, 406.473 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1623.717, 399.925 1623.864, 400.547 1624.269, 401.157 1624.478, 401.374 1625.026, 401.855 1626.141, 402.353 1627.309, 402.515 1627.495, 402.497 1628.549, 402.393 1629.714, 402.000 1630.808, 401.282 1631.532, 400.435 1631.851, 399.751 1631.899, 399.500 1632.038, 398.743 1631.986, 398.521 1631.876, 398.048 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1628.550, 395.838 1628.347, 395.810 1628.276, 395.818 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1751.843, 420.315 1751.804, 420.651 1751.985, 421.545 1752.080, 421.674 1752.557, 422.317 1753.186, 422.786 1753.339, 422.852 1753.507, 422.926 1754.273, 423.259 1755.227, 423.393 1755.419, 423.419 1756.138, 423.374 1756.660, 423.319 1757.848, 422.968 1758.972, 422.313 1759.589, 421.673 1759.723, 421.534 1760.132, 420.671 1760.170, 420.334 1760.212, 419.955 1760.032, 419.057 1759.457, 418.281 1758.820, 417.815 1758.818, 417.814 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1880.625, 421.497 1880.275, 421.829 1880.240, 421.894 1879.965, 422.396 1879.838, 422.627 1879.777, 423.406 1879.948, 424.121 1880.479, 424.839 1881.171, 425.276 1881.351, 425.374 1882.223, 425.717 1882.265, 425.722 1882.568, 425.763 1882.901, 425.808 1883.339, 425.867 1884.115, 425.827 1884.439, 425.790 1884.568, 425.775 1885.167, 425.628 1885.765, 425.451 1886.225, 425.216 1886.305, 425.175 1886.903, 424.844 1887.670, 424.121 1888.112, 423.320 1888.148, 422.887 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1084.018, 337.334 1083.768, 337.429 1082.661, 338.349 1081.732, 339.482 1081.157, 340.932 1081.001, 342.187 1081.141, 343.746 1081.385, 344.356 1081.626, 344.960 1082.383, 346.005 1083.256, 346.666 1083.600, 346.919 1084.731, 347.438 1086.222, 347.660 1087.547, 347.429 1087.630, 347.402 1088.663, 347.014 1088.963, 346.901 1090.064, 345.979 1090.129, 345.909 1091.003, 344.856 1091.588, 343.408 1091.735, 342.151 1091.707, 341.687 1091.604, 340.588 1091.436, 340.159 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1247.826, 333.338 1247.030, 333.233 1245.500, 333.498 1244.295, 333.974 1242.973, 334.947 1242.214, 335.957 1242.018, 336.270 1241.507, 337.359 1241.301, 338.689 1241.250, 339.018 1241.512, 340.480 1241.860, 341.247 1242.218, 341.826 1242.644, 342.254 1243.284, 342.896 1244.801, 343.639 1245.647, 343.754 1246.352, 343.851 1247.881, 343.597 1249.083, 343.116 1250.413, 342.154 1251.168, 341.140 1251.381, 340.836 1251.885, 339.741 1252.081, 338.525 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1407.303, 344.999 1408.920, 344.759 1409.982, 344.301 1410.379, 344.105 1411.442, 343.388 1412.549, 342.136 1413.194, 340.668 1413.304, 339.514 1413.312, 339.128 1413.167, 338.117 1412.525, 336.830 1411.458, 335.809 1409.917, 335.104 1408.327, 334.908 1406.708, 335.158 1405.644, 335.612 1405.255, 335.822 1404.191, 336.534 1403.096, 337.790 1402.463, 339.254 1402.344, 340.403 1402.354, 340.785 1402.489, 341.793 1403.129, 343.072 1404.188, 344.090 1405.719, 344.797 1407.303, 344.999 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1564.477, 347.060 1564.457, 347.098 1564.243, 348.540 1564.583, 349.906 1565.088, 350.706 1565.445, 351.065 1566.134, 351.671 1567.666, 352.343 1569.267, 352.539 1570.542, 352.373 1570.950, 352.320 1572.518, 351.711 1573.987, 350.643 1574.668, 349.854 1574.953, 349.409 1575.431, 348.474 1575.484, 348.124 1575.654, 347.023 1575.316, 345.646 1574.796, 344.847 1574.448, 344.479 1573.743, 343.879 1572.202, 343.209 1570.595, 343.018 1569.187, 343.209 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1730.177, 371.940 1729.652, 372.270 1728.620, 373.408 1728.067, 374.656 1727.938, 375.636 1728.202, 376.914 1729.011, 378.006 1729.869, 378.611 1730.287, 378.805 1731.393, 379.257 1732.888, 379.444 1732.999, 379.458 1734.732, 379.276 1736.389, 378.731 1737.177, 378.241 1737.955, 377.756 1738.999, 376.616 1739.564, 375.362 1739.688, 374.375 1739.426, 373.088 1738.612, 371.989 1737.738, 371.389 1737.324, 371.187 1736.204, 370.744 1734.908, 370.586 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1892.858, 371.307 1892.099, 372.049 1891.469, 373.218 1891.375, 374.352 1891.431, 374.571 1891.627, 375.334 1892.383, 376.356 1893.445, 376.995 1893.627, 377.104 1894.886, 377.526 1896.482, 377.713 1898.244, 377.541 1898.342, 377.511 1899.963, 377.029 1901.600, 376.114 1901.751, 375.968 1902.705, 375.046 1903.346, 373.870 1903.360, 373.715 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1111.124, 277.965 1110.015, 278.437 1108.739, 279.476 1107.617, 280.883 1106.917, 282.641 1106.763, 284.041 1106.761, 284.710 1106.900, 285.920 1106.994, 286.173 1107.444, 287.382 1108.337, 288.578 1109.316, 289.435 1111.054, 290.296 1112.815, 290.506 1114.339, 290.282 1114.990, 290.013 1116.030, 289.583 1117.299, 288.541 1118.433, 287.147 1119.147, 285.391 1119.288, 283.988 1119.318, 283.316 1119.164, 282.105 1119.071, 281.852 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1314.194, 287.539 1313.007, 286.998 1311.112, 286.795 1310.668, 286.867 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1305.459, 289.886 1304.965, 290.546 1304.422, 291.788 1304.301, 292.422 1304.122, 293.399 1304.048, 293.798 1304.307, 295.561 1305.125, 297.160 1306.406, 298.407 1307.386, 298.860 1308.240, 299.254 1310.125, 299.466 1311.457, 299.241 1312.011, 299.111 1313.390, 298.571 1315.058, 297.367 1316.295, 295.745 1316.828, 294.495 1316.977, 293.863 1317.054, 293.420 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1508.269, 291.823 1510.320, 291.473 1511.527, 290.958 1512.211, 290.613 1513.416, 289.791 1514.880, 288.222 1515.772, 286.405 1516.003, 284.518 1515.713, 283.372 1515.547, 282.748 1514.972, 281.823 1514.449, 281.271 1513.662, 280.623 1512.818, 280.234 1511.755, 279.818 1509.774, 279.629 1507.720, 279.994 1506.510, 280.502 1505.838, 280.868 1504.630, 281.684 1503.185, 283.257 1502.312, 285.068 1502.095, 286.941 1502.367, 288.082 1502.554, 288.693 1503.107, 289.620 1503.642, 290.156 1504.405, 290.817 1505.255, 291.189 1506.298, 291.625 1508.269, 291.823 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1708.926, 319.644 1711.113, 319.343 1713.197, 318.563 1715.166, 317.230 1716.477, 315.709 1716.965, 314.604 1717.178, 314.048 1717.352, 312.830 1717.008, 311.156 1715.966, 309.750 1714.886, 309.085 1714.329, 308.749 1712.940, 308.300 1710.898, 308.097 1708.708, 308.413 1706.632, 309.206 1704.683, 310.544 1703.392, 312.061 1702.899, 313.157 1702.710, 313.711 1702.527, 314.919 1702.875, 316.577 1703.908, 317.972 1704.963, 318.646 1705.527, 318.968 1706.893, 319.434 1708.926, 319.644 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1908.294, 323.123 1906.356, 324.267 1904.936, 325.687 1904.114, 327.233 1903.985, 328.724 1904.321, 329.945 1905.294, 331.262 1906.030, 331.696 1906.901, 332.208 1908.546, 332.672 1910.612, 332.880 1912.897, 332.610 1915.134, 331.891 1915.474, 331.693 1917.265, 330.650 1918.705, 329.227 1919.547, 327.670 1919.688, 326.165 1919.334, 324.936 1918.354, 323.607 1917.479, 323.096 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1156.880, 190.821 1156.475, 190.766 1154.175, 191.023 1152.030, 192.058 1150.497, 193.271 1149.050, 195.145 1148.135, 197.418 1147.886, 200.068 1148.117, 201.423 1148.369, 202.370 1148.742, 203.295 1149.441, 204.400 1149.474, 204.434 1150.975, 205.922 1153.137, 206.902 1154.874, 207.111 1155.091, 207.092 1155.336, 207.071 1157.157, 206.880 1159.304, 205.876 1160.826, 204.658 1162.292, 202.804 1163.228, 200.535 1163.500, 197.875 1163.245, 196.518 1163.029, 195.552 1162.632, 194.632 1161.953, 193.502 1161.537, 193.093 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1416.658, 227.875 1415.311, 227.697 1414.207, 227.685 1412.655, 227.895 1411.713, 228.236 1410.081, 228.851 1407.843, 230.467 1406.155, 232.582 1405.181, 234.988 1405.002, 236.612 1405.011, 237.450 1405.221, 238.847 1406.201, 240.839 1407.828, 242.356 1409.079, 242.915 1410.180, 243.354 1411.525, 243.508 1412.615, 243.559 1414.161, 243.335 1415.106, 243.033 1416.732, 242.408 1418.987, 240.815 1420.703, 238.707 1421.708, 236.291 1421.865, 234.656 1421.898, 233.803 1421.662, 232.401 1421.254, 231.492 1420.678, 230.391 1419.836, 229.588 1419.033, 228.867 1417.787, 228.280 1416.658, 227.875 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1674.089, 192.034 1672.403, 192.108 1671.149, 192.277 1669.604, 192.694 1668.221, 193.261 1666.970, 193.939 1665.593, 194.886 1664.503, 195.897 1663.521, 196.991 1662.876, 198.030 1662.201, 199.367 1661.760, 201.784 1662.237, 204.010 1663.584, 205.829 1665.671, 207.066 1668.299, 207.603 1669.966, 207.566 1671.216, 207.384 1672.759, 207.004 1674.138, 206.427 1675.408, 205.781 1676.780, 204.823 1677.907, 203.831 1678.883, 202.725 1679.569, 201.689 1680.236, 200.338 1680.439, 199.379 1680.701, 197.897 1680.230, 195.644 1678.868, 193.804 1676.750, 192.560 1674.089, 192.034 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1239.322, 30.791 1236.218, 30.289 1232.974, 30.960 1230.557, 32.120 1227.931, 34.207 1225.810, 37.093 1224.441, 40.432 1223.965, 44.272 1224.507, 47.562 1225.908, 50.339 1227.500, 51.843 1228.006, 52.282 1230.103, 53.464 1233.157, 53.993 1236.370, 53.375 1238.761, 52.202 1241.395, 50.175 1243.548, 47.327 1244.956, 43.994 1245.475, 40.132 1244.957, 36.801 1243.548, 33.988 1241.974, 32.421 1241.419, 32.036 1239.322, 30.791 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1609.955, 50.927 1606.341, 50.400 1602.381, 51.024 1598.468, 52.730 1594.986, 55.344 1592.272, 58.604 1590.584, 62.189 1590.078, 65.753 1590.798, 68.953 1592.672, 71.484 1595.519, 73.105 1599.071, 73.657 1602.987, 73.084 1606.891, 71.435 1610.402, 68.862 1613.172, 65.612 1614.922, 62.001 1615.472, 58.386 1614.762, 55.129 1612.859, 52.557 1609.955, 50.927 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1148.515, 352.899 1148.481, 352.905 1147.289, 353.367 1146.151, 354.268 1145.380, 355.236 1144.796, 356.550 1144.696, 357.544 1144.639, 358.108 1144.784, 359.129 1145.188, 360.231 1145.901, 361.193 1146.626, 361.780 1147.047, 362.037 1148.012, 362.496 1149.420, 362.710 1150.710, 362.499 1150.774, 362.489 1151.964, 362.022 1153.108, 361.132 1153.876, 360.159 1154.469, 358.848 1154.571, 357.883 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1298.727, 356.639 1298.379, 356.470 1296.942, 356.271 1295.514, 356.487 1294.451, 356.928 1293.201, 357.779 1292.284, 358.946 1291.860, 359.945 1291.788, 360.315 1291.585, 361.422 1291.791, 362.727 1291.806, 362.758 1292.151, 363.440 1292.418, 363.937 1293.393, 364.908 1294.461, 365.430 1294.787, 365.590 1296.219, 365.795 1297.646, 365.588 1298.706, 365.143 1299.962, 364.301 1300.889, 363.137 1301.308, 362.133 1301.396, 361.764 1301.592, 360.653 1301.480, 359.923 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1443.623, 365.742 1445.105, 365.547 1446.451, 364.984 1447.387, 364.331 1448.416, 363.232 1449.026, 361.936 1449.155, 360.571 1448.994, 359.647 1448.426, 358.499 1447.461, 357.578 1446.063, 356.936 1444.616, 356.747 1443.134, 356.951 1441.792, 357.523 1440.855, 358.171 1439.835, 359.273 1439.236, 360.567 1439.114, 361.924 1439.266, 362.845 1439.833, 363.987 1440.792, 364.905 1442.182, 365.549 1443.623, 365.742 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1587.623, 366.079 1587.544, 366.237 1587.338, 367.512 1587.635, 368.726 1588.108, 369.458 1588.403, 369.760 1589.046, 370.324 1590.425, 370.933 1591.866, 371.118 1593.050, 370.978 1593.387, 370.938 1594.810, 370.414 1596.144, 369.481 1596.740, 368.768 1597.022, 368.395 1597.102, 368.233 1597.439, 367.552 1597.651, 366.270 1597.357, 365.049 1596.872, 364.316 1596.583, 364.007 1595.928, 363.449 1594.542, 362.841 1593.095, 362.660 1592.152, 362.776 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1737.611, 397.203 1737.558, 397.320 1737.448, 398.204 1737.679, 399.335 1738.399, 400.306 1739.173, 400.869 1739.671, 401.083 1740.534, 401.455 1741.967, 401.645 1742.856, 401.563 1743.517, 401.501 1744.999, 401.038 1746.400, 400.193 1747.335, 399.196 1747.731, 398.337 1747.843, 398.095 1747.948, 397.206 1747.719, 396.069 1746.995, 395.092 1746.208, 394.532 1745.847, 394.372 1745.841, 394.369 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1888.598, 387.765 1888.299, 387.931 1887.334, 388.865 1886.779, 389.892 1886.698, 390.889 1886.918, 391.770 1887.588, 392.676 1887.715, 392.753 1888.690, 393.344 1889.800, 393.737 1891.212, 393.911 1892.201, 393.826 1892.769, 393.771 1894.288, 393.332 1895.165, 392.849 1895.734, 392.536 1896.708, 391.601 1897.273, 390.570 1897.359, 389.565 1897.131, 388.680 1896.578, 387.933 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1186.527, 309.785 1185.648, 309.929 1185.372, 310.029 1184.010, 310.540 1182.639, 311.644 1181.767, 312.742 1181.051, 314.310 1180.911, 315.489 1180.831, 316.161 1181.040, 317.298 1181.166, 317.789 1181.481, 318.607 1181.957, 319.275 1182.322, 319.708 1183.111, 320.446 1184.741, 321.249 1186.403, 321.465 1186.902, 321.380 1187.737, 321.238 1188.017, 321.160 1189.375, 320.643 1190.755, 319.552 1191.623, 318.449 1192.350, 316.883 1192.487, 315.790 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1368.799, 312.608 1368.091, 311.927 1366.399, 311.155 1364.657, 310.955 1362.901, 311.261 1361.689, 311.754 1360.128, 312.816 1358.963, 314.247 1358.307, 315.906 1358.131, 317.164 1358.282, 318.381 1358.325, 318.731 1359.048, 320.163 1359.941, 321.025 1360.216, 321.291 1361.896, 322.065 1363.630, 322.273 1365.384, 321.980 1366.593, 321.482 1368.163, 320.432 1369.342, 319.006 1370.014, 317.342 1370.179, 316.077 1369.993, 314.500 1369.849, 314.214 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1541.912, 326.265 1543.773, 325.990 1545.498, 325.271 1546.552, 324.520 1547.112, 324.037 1547.894, 323.168 1548.722, 321.590 1548.953, 319.940 1548.561, 318.382 1548.010, 317.517 1547.586, 317.070 1546.836, 316.438 1545.120, 315.702 1543.335, 315.508 1541.472, 315.794 1539.754, 316.524 1538.699, 317.269 1538.156, 317.764 1537.371, 318.625 1536.558, 320.200 1536.339, 321.839 1536.733, 323.383 1537.266, 324.250 1537.701, 324.685 1538.432, 325.324 1540.135, 326.064 1541.912, 326.265 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1717.198, 347.536 1716.908, 348.206 1716.722, 348.647 1716.569, 349.736 1716.870, 351.188 1717.783, 352.419 1718.735, 353.064 1719.219, 353.311 1720.014, 353.614 1720.448, 353.780 1722.252, 353.988 1724.197, 353.757 1726.053, 353.111 1727.807, 351.979 1728.976, 350.668 1729.199, 350.159 1729.605, 349.231 1729.751, 348.134 1729.452, 346.671 1728.532, 345.430 1727.561, 344.791 1727.083, 344.534 1726.241, 344.226 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1900.581, 355.602 1899.417, 356.268 1898.175, 357.489 1897.457, 358.824 1897.347, 360.117 1897.638, 361.217 1898.103, 361.846 1898.493, 362.375 1899.904, 363.217 1901.340, 363.673 1903.151, 363.876 1905.154, 363.668 1907.111, 363.072 1908.478, 362.299 1908.974, 362.019 1910.233, 360.795 1910.965, 359.452 1911.084, 358.148 1910.780, 357.042 1909.919, 355.875 1909.539, 355.650 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1245.278, 258.633 1243.750, 258.484 1242.196, 258.701 1240.143, 259.515 1238.406, 260.924 1237.402, 262.202 1236.475, 264.144 1236.296, 265.373 1236.142, 266.423 1236.493, 268.416 1236.945, 269.331 1237.425, 270.209 1238.828, 271.592 1240.824, 272.516 1241.471, 272.584 1242.866, 272.729 1244.413, 272.501 1246.466, 271.710 1248.215, 270.319 1249.213, 269.034 1250.157, 267.096 1250.385, 265.617 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1459.745, 259.385 1459.657, 260.312 1459.911, 261.567 1460.197, 262.304 1460.757, 263.310 1461.426, 263.956 1462.206, 264.651 1463.226, 265.109 1464.312, 265.544 1465.425, 265.651 1466.499, 265.744 1467.809, 265.528 1468.759, 265.312 1470.149, 264.749 1471.358, 263.952 1472.215, 263.387 1473.804, 261.574 1474.757, 259.485 1474.796, 259.102 1474.977, 257.327 1474.702, 256.067 1474.439, 255.313 1473.853, 254.310 1473.198, 253.643 1472.390, 252.964 1471.375, 252.484 1470.266, 252.076 1469.152, 251.950 1468.067, 251.887 1466.751, 252.092 1465.804, 252.338 1464.409, 252.893 1462.973, 253.857 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1691.566, 261.842 1694.029, 261.423 1696.370, 260.444 1698.581, 258.835 1699.415, 257.828 1700.053, 257.035 1700.619, 255.820 1700.832, 255.083 1701.044, 253.747 1700.644, 251.813 1699.459, 250.212 1697.605, 249.102 1696.062, 248.718 1695.268, 248.593 1693.755, 248.540 1691.288, 248.976 1688.958, 249.972 1687.773, 250.835 1686.772, 251.589 1685.932, 252.585 1685.326, 253.382 1684.754, 254.586 1684.571, 255.317 1684.348, 256.642 1684.752, 258.555 1685.926, 260.140 1687.757, 261.245 1689.272, 261.653 1690.068, 261.761 1691.566, 261.842 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1922.193, 271.001 1919.559, 271.389 1916.994, 272.303 1914.562, 273.808 1912.928, 275.491 1911.979, 277.312 1911.824, 279.056 1912.218, 280.402 1913.331, 281.911 1915.175, 282.973 1917.075, 283.405 1917.571, 283.483 1919.448, 283.603 1922.078, 283.231 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1343.151, 153.539 1341.475, 153.210 1338.540, 153.567 1335.724, 154.820 1333.304, 156.842 1332.110, 158.376 1331.513, 159.430 1330.776, 161.019 1330.521, 162.329 1330.202, 164.089 1330.540, 166.747 1331.695, 169.067 1333.531, 170.778 1335.113, 171.558 1336.167, 171.857 1337.839, 172.153 1340.749, 171.831 1343.563, 170.618 1346.005, 168.626 1347.187, 167.081 1347.833, 166.047 1348.549, 164.444 1348.863, 163.132 1349.156, 161.359 1348.837, 158.673 1347.678, 156.329 1346.556, 155.251 1345.818, 154.610 1344.239, 153.789 1343.151, 153.539 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1649.152, 131.483 1646.081, 130.944 1642.700, 131.331 1639.344, 132.599 1636.342, 134.621 1633.985, 137.193 1632.499, 140.064 1632.023, 142.953 1632.598, 145.584 1634.167, 147.704 1636.580, 149.110 1639.606, 149.664 1642.956, 149.312 1644.674, 148.703 1646.305, 148.082 1649.327, 146.089 1651.723, 143.525 1652.451, 142.158 1653.254, 140.638 1653.763, 137.715 1653.195, 135.045 1651.605, 132.897 1649.152, 131.483 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1802.617, 127.870 1799.411, 127.344 1795.829, 127.730 1793.707, 128.390 1792.226, 128.986 1790.426, 129.953 1788.956, 130.983 1787.336, 132.333 1786.336, 133.521 1785.279, 134.877 1784.617, 136.353 1784.147, 137.586 1783.960, 139.201 1784.069, 140.139 1784.425, 141.793 1785.966, 143.880 1788.433, 145.261 1791.591, 145.802 1793.839, 145.591 1795.138, 145.449 1797.258, 144.839 1798.732, 144.231 1800.558, 143.305 1802.022, 142.262 1803.694, 140.935 1805.800, 138.376 1806.449, 136.884 1806.977, 135.635 1807.141, 134.002 1807.080, 133.038 1806.685, 131.373 1805.125, 129.258 1802.617, 127.870 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1496.851, 154.543 1493.924, 153.968 1490.754, 154.321 1487.656, 155.561 1484.934, 157.563 1482.851, 160.126 1481.606, 162.998 1481.314, 165.900 1481.680, 167.377 1482.001, 168.553 1482.773, 169.675 1483.598, 170.703 1484.668, 171.371 1485.951, 172.143 1488.837, 172.734 1490.300, 172.592 1491.978, 172.415 1495.071, 171.214 1497.814, 169.242 1499.936, 166.688 1501.223, 163.800 1501.543, 160.864 1500.862, 158.171 1500.045, 157.059 1499.244, 155.992 1496.851, 154.543 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1179.774, 138.561 1180.253, 139.505 1180.984, 140.895 1182.748, 142.596 1184.621, 143.431 1185.242, 143.650 1187.167, 143.993 1189.825, 143.622 1192.337, 142.348 1194.046, 141.010 1195.783, 138.769 1196.905, 136.079 1197.269, 132.942 1196.771, 130.217 1195.556, 127.857 1193.769, 126.148 1191.894, 125.271 1191.248, 125.103 1189.314, 124.726 1186.635, 125.133 1184.535, 126.207 1184.123, 126.448 1182.401, 127.778 1180.688, 130.046 1179.594, 132.741 1179.260, 135.863 1179.774, 138.561 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1805.218, 272.141 1807.770, 271.745 1810.236, 270.805 1812.576, 269.249 1814.148, 267.503 1815.029, 265.606 1815.144, 264.292 1815.112, 263.786 1814.810, 262.408 1813.654, 260.844 1811.791, 259.755 1810.047, 259.357 1809.406, 259.248 1807.695, 259.174 1805.139, 259.587 1802.684, 260.543 1800.369, 262.106 1798.824, 263.847 1797.968, 265.727 1797.841, 267.031 1797.900, 267.526 1798.180, 268.895 1799.325, 270.444 1801.165, 271.528 1802.880, 271.948 1803.524, 272.041 1805.218, 272.141 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1574.449, 244.029 1573.824, 244.677 1572.876, 245.689 1571.820, 247.742 1571.513, 249.849 1571.985, 251.807 1572.701, 252.777 1573.187, 253.426 1574.163, 254.087 1575.004, 254.551 1576.308, 254.954 1577.261, 255.072 1578.551, 255.140 1579.741, 254.938 1580.916, 254.704 1582.203, 254.159 1583.123, 253.693 1584.408, 252.807 1585.195, 252.037 1586.138, 251.014 1587.219, 248.954 1587.543, 246.829 1587.076, 244.850 1585.862, 243.214 1584.855, 242.568 1584.022, 242.083 1582.691, 241.705 1581.740, 241.569 1580.436, 241.530 1579.242, 241.722 1578.068, 241.985 1576.776, 242.523 1576.193, 242.839 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1360.899, 267.315 1360.197, 266.647 1358.122, 265.733 1356.474, 265.575 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1351.442, 267.198 1350.444, 267.922 1349.029, 269.751 1348.477, 271.099 1348.236, 271.849 1348.137, 272.501 1348.009, 273.343 1348.256, 275.306 1349.146, 277.076 1350.154, 278.040 1350.577, 278.444 1351.772, 278.978 1352.633, 279.363 1354.755, 279.579 1356.185, 279.348 1356.898, 279.160 1358.389, 278.577 1360.305, 277.215 1361.649, 275.511 1361.743, 275.392 1362.283, 274.034 1362.558, 273.286 1362.770, 271.783 1362.734, 271.482 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1130.619, 240.253 1130.177, 240.306 1128.292, 241.155 1126.903, 242.273 1125.643, 243.876 1124.852, 245.852 1124.704, 247.344 1124.658, 248.168 1124.834, 249.448 1125.227, 250.553 1125.416, 251.085 1126.080, 251.998 1126.403, 252.380 1127.447, 253.382 1129.368, 254.298 1131.318, 254.494 1132.745, 254.310 1132.973, 254.281 1134.859, 253.456 1136.240, 252.334 1137.515, 250.747 1138.323, 248.774 1138.535, 246.450 1138.340, 245.170 1138.090, 244.413 1137.842, 243.725 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1808.349, 351.450 1807.597, 352.242 1806.928, 353.625 1806.835, 354.686 1806.869, 354.962 1807.093, 356.093 1807.978, 357.289 1809.403, 358.156 1809.625, 358.233 1810.740, 358.619 1812.551, 358.825 1814.529, 358.605 1816.439, 357.984 1818.051, 357.012 1818.253, 356.890 1819.470, 355.623 1820.153, 354.232 1820.239, 353.163 1820.220, 352.883 1819.983, 351.745 1819.092, 350.541 1818.125, 349.954 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1628.111, 333.086 1627.468, 333.857 1627.075, 334.366 1626.585, 335.374 1626.304, 336.958 1626.651, 338.455 1627.275, 339.316 1627.591, 339.722 1628.436, 340.367 1629.033, 340.634 1630.146, 341.095 1631.938, 341.301 1632.590, 341.215 1633.844, 341.050 1635.638, 340.369 1637.325, 339.188 1638.029, 338.333 1638.105, 338.239 1638.441, 337.828 1638.928, 336.812 1639.220, 335.218 1638.876, 333.708 1637.928, 332.431 1637.064, 331.794 1636.471, 331.514 1635.342, 331.068 1633.542, 330.868 1632.069, 331.071 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1452.557, 321.183 1454.368, 320.896 1455.499, 320.410 1456.018, 320.151 1457.150, 319.384 1458.414, 317.990 1459.167, 316.364 1459.332, 314.667 1459.126, 313.590 1458.891, 313.065 1458.437, 312.183 1457.260, 311.079 1455.554, 310.326 1453.787, 310.131 1451.975, 310.430 1450.840, 310.911 1450.332, 311.187 1449.198, 311.949 1447.948, 313.347 1447.211, 314.968 1447.057, 316.654 1447.249, 317.726 1447.499, 318.241 1447.936, 319.124 1449.104, 320.225 1450.798, 320.981 1452.557, 321.183 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1277.408, 311.497 1275.727, 311.295 1274.476, 311.511 1274.037, 311.607 1272.749, 312.110 1271.278, 313.194 1270.473, 314.274 1270.206, 314.654 1269.678, 315.814 1269.463, 317.089 1269.371, 317.633 1269.634, 319.232 1270.042, 320.038 1270.392, 320.693 1271.555, 321.845 1273.214, 322.635 1273.349, 322.652 1274.916, 322.848 1276.605, 322.550 1277.890, 322.041 1279.369, 320.970 1280.456, 319.514 1280.976, 318.347 1281.218, 316.971 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1095.993, 308.966 1095.523, 309.155 1094.339, 310.129 1093.324, 311.385 1092.694, 312.974 1092.538, 314.294 1092.566, 314.848 1092.678, 315.998 1092.735, 316.146 1093.190, 317.323 1094.008, 318.436 1094.931, 319.185 1095.324, 319.403 1096.523, 319.998 1098.135, 320.215 1099.551, 319.986 1100.608, 319.571 1101.090, 319.382 1102.267, 318.406 1103.293, 317.161 1103.935, 315.575 1104.080, 314.251 1104.076, 313.695 1103.951, 312.544 1103.946, 312.532 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1812.672, 392.743 1812.638, 392.778 1812.109, 393.839 1812.038, 394.692 1812.061, 394.870 1812.240, 395.785 1812.935, 396.724 1813.541, 397.118 1813.765, 397.265 1814.056, 397.416 1815.112, 397.829 1816.536, 398.010 1817.477, 397.927 1818.091, 397.868 1819.594, 397.418 1821.019, 396.598 1821.493, 396.119 1821.976, 395.632 1822.514, 394.566 1822.580, 393.708 1822.567, 393.527 1822.380, 392.608 1821.681, 391.664 1821.557, 391.585 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1667.019, 392.559 1667.416, 392.519 1668.558, 392.403 1670.013, 391.916 1671.384, 391.033 1671.628, 390.755 1672.294, 389.996 1672.664, 389.169 1672.767, 388.852 1672.916, 387.938 1672.654, 386.760 1672.114, 386.030 1671.904, 385.751 1671.180, 385.183 1669.801, 384.584 1668.357, 384.396 1666.817, 384.560 1665.365, 385.054 1664.004, 385.940 1663.105, 386.976 1662.732, 387.797 1662.641, 388.113 1662.488, 389.022 1662.752, 390.192 1663.280, 390.923 1663.496, 391.196 1664.208, 391.767 1665.579, 392.368 1667.019, 392.559 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1513.230, 361.593 1513.072, 362.858 1513.279, 363.752 1513.403, 364.110 1513.817, 364.861 1514.766, 365.752 1516.151, 366.377 1517.593, 366.565 1519.096, 366.376 1520.117, 365.974 1520.483, 365.831 1521.357, 365.197 1521.777, 364.864 1522.431, 364.131 1522.889, 363.253 1523.087, 362.874 1523.259, 361.550 1523.042, 360.653 1522.930, 360.288 1522.504, 359.538 1521.549, 358.645 1520.156, 358.021 1518.709, 357.837 1517.204, 358.034 1516.328, 358.385 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1374.075, 357.178 1373.531, 356.650 1372.130, 355.989 1370.687, 355.795 1369.229, 356.006 1368.230, 356.434 1367.932, 356.595 1366.932, 357.262 1365.962, 358.398 1365.413, 359.730 1365.273, 360.805 1365.429, 362.075 1365.451, 362.119 1366.026, 363.251 1366.581, 363.793 1366.993, 364.196 1368.386, 364.858 1369.824, 365.057 1371.280, 364.855 1372.277, 364.423 1372.583, 364.274 1373.581, 363.603 1374.562, 362.471 1375.121, 361.136 1375.253, 360.055 1375.111, 358.843 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1223.450, 354.489 1223.307, 354.469 1221.913, 354.693 1220.786, 355.145 1219.590, 356.021 1218.875, 356.966 1218.731, 357.221 1218.240, 358.246 1218.023, 359.764 1218.081, 360.065 1218.281, 361.106 1218.581, 361.835 1218.939, 362.348 1219.299, 362.774 1219.920, 363.345 1221.312, 364.044 1222.600, 364.234 1222.733, 364.253 1224.126, 364.039 1225.251, 363.583 1226.453, 362.717 1227.165, 361.767 1227.323, 361.519 1227.808, 360.490 1228.014, 359.106 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1073.855, 363.769 1073.004, 364.483 1072.972, 364.518 1072.145, 365.513 1071.617, 366.846 1071.462, 368.043 1071.555, 369.004 1071.601, 369.481 1072.061, 370.600 1072.766, 371.586 1073.901, 372.454 1074.970, 372.911 1076.358, 373.136 1077.666, 372.921 1078.919, 372.439 1079.130, 372.263 1079.997, 371.542 1080.821, 370.543 1081.358, 369.213 1081.505, 368.013 1081.378, 366.622 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1816.126, 423.326 1815.914, 423.743 1815.859, 424.432 1815.874, 424.551 1816.019, 425.293 1816.249, 425.604 1816.517, 425.966 1816.570, 426.038 1816.748, 426.160 1817.233, 426.493 1817.462, 426.595 1817.777, 426.728 1818.303, 426.951 1819.435, 427.107 1820.185, 427.067 1820.672, 427.013 1821.231, 426.862 1821.866, 426.677 1822.999, 426.048 1823.759, 425.298 1823.849, 425.123 1823.919, 424.988 1823.983, 424.863 1824.098, 424.640 1824.187, 424.468 1824.205, 424.221 1824.213, 424.116 1824.238, 423.776 1824.230, 423.655 1824.136, 423.188 1824.126, 423.138 1824.081, 422.915 1824.080, 422.910 1823.717, 422.419 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1688.162, 409.590 1688.180, 409.613 1688.333, 409.817 1688.924, 410.290 1690.025, 410.775 1690.317, 410.815 1691.182, 410.935 1691.865, 410.877 1692.424, 410.823 1693.602, 410.450 1694.712, 409.762 1695.138, 409.293 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1560.205, 397.181 1560.143, 397.592 1560.395, 398.586 1560.764, 399.214 1561.534, 399.935 1562.662, 400.449 1563.839, 400.616 1565.075, 400.489 1565.129, 400.470 1566.225, 400.081 1567.301, 399.337 1567.805, 398.736 1568.007, 398.460 1568.362, 397.754 1568.456, 397.142 1568.523, 396.711 1568.271, 395.711 1567.895, 395.083 1567.121, 394.361 1565.988, 393.847 1564.808, 393.683 1563.570, 393.816 1563.542, 393.826 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1437.854, 417.490 1439.078, 417.366 1440.189, 416.947 1440.967, 416.386 1441.220, 416.169 1441.815, 415.520 1442.315, 414.484 1442.419, 413.381 1442.290, 412.579 1441.818, 411.634 1441.020, 410.860 1439.864, 410.306 1438.667, 410.123 1437.442, 410.251 1436.334, 410.676 1435.556, 411.235 1435.311, 411.458 1434.715, 412.103 1434.221, 413.137 1434.123, 414.235 1434.245, 415.035 1434.716, 415.975 1435.510, 416.748 1436.661, 417.303 1437.854, 417.490 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1311.728, 415.946 1312.926, 415.814 1313.982, 415.368 1314.859, 414.773 1315.642, 413.853 1316.075, 412.753 1316.227, 411.794 1316.069, 410.731 1315.750, 410.101 1315.549, 409.729 1314.730, 408.908 1313.559, 408.321 1312.357, 408.128 1311.158, 408.266 1310.106, 408.719 1309.228, 409.310 1308.451, 410.233 1308.109, 411.095 1308.027, 411.331 1307.869, 412.286 1308.031, 413.344 1308.318, 413.925 1308.343, 413.975 1308.550, 414.342 1308.947, 414.748 1309.365, 415.161 1309.589, 415.274 1310.530, 415.749 1311.728, 415.946 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1186.374, 397.628 1185.241, 397.779 1184.263, 398.183 1183.278, 398.887 1183.210, 398.977 1182.652, 399.714 1182.137, 400.775 1182.086, 401.183 1181.978, 402.040 1182.129, 402.925 1182.440, 403.805 1182.445, 403.820 1182.609, 404.040 1182.789, 404.283 1183.049, 404.633 1183.616, 405.079 1184.018, 405.353 1184.788, 405.695 1185.117, 405.751 1185.673, 405.845 1185.881, 405.881 1185.982, 405.898 1187.140, 405.750 1188.116, 405.343 1189.106, 404.645 1189.376, 404.286 1189.730, 403.816 1189.812, 403.663 1189.918, 403.443 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1058.836, 400.063 1058.008, 400.741 1057.294, 401.609 1056.853, 402.721 1056.709, 403.772 1056.839, 404.977 1057.240, 405.916 1057.694, 406.561 1057.840, 406.769 1058.805, 407.526 1059.734, 407.883 1059.967, 407.948 1060.914, 408.096 1062.018, 407.943 1062.674, 407.683 1063.098, 407.516 1064.004, 406.785 1064.715, 405.914 1065.163, 404.804 1065.300, 403.751 1065.176, 402.544 1064.812, 401.682 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1822.435, 428.590 1822.569, 428.551 1823.378, 428.103 1823.473, 428.051 1824.079, 427.454 1824.420, 426.792 1824.461, 426.240 1824.454, 426.145 1824.344, 425.593 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1706.453, 425.138 1706.510, 425.407 1706.986, 426.047 1707.473, 426.438 1708.361, 426.831 1708.401, 426.837 1709.295, 426.966 1709.855, 426.931 1710.299, 426.884 1711.254, 426.596 1712.155, 426.056 1712.754, 425.412 1713.074, 424.698 1713.147, 424.162 1713.155, 424.104 1712.996, 423.360 1712.519, 422.717 1712.027, 422.328 1711.176, 421.952 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1595.590, 423.147 1595.522, 423.287 1595.382, 424.112 1595.578, 424.906 1595.897, 425.428 1596.522, 426.012 1597.440, 426.434 1598.400, 426.578 1598.912, 426.541 1599.329, 426.499 1599.415, 426.490 1600.363, 426.181 1601.252, 425.601 1601.838, 424.909 1602.080, 424.402 1602.112, 424.333 1602.256, 423.506 1602.061, 422.708 1601.737, 422.185 1601.109, 421.600 1600.188, 421.179 1599.225, 421.037 1598.713, 421.079 1598.259, 421.123 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1484.854, 423.272 1484.903, 423.524 1485.246, 424.218 1485.277, 424.280 1485.925, 424.903 1486.869, 425.353 1487.849, 425.507 1488.299, 425.466 1488.348, 425.461 1488.865, 425.412 1489.796, 425.081 1490.337, 424.694 1490.663, 424.461 1491.124, 423.935 1491.556, 423.107 1491.582, 422.890 1491.602, 422.716 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1380.804, 425.299 1380.385, 424.884 1379.581, 424.486 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1374.900, 426.476 1374.763, 426.788 1374.741, 426.970 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1157.811, 430.475 1158.508, 430.579 1159.468, 430.471 1160.304, 430.118 1161.118, 429.549 1161.656, 428.838 1162.079, 427.958 1162.200, 426.902 1162.086, 426.135 1161.809, 425.386 1161.301, 424.692 1160.488, 424.075 1159.816, 423.799 1159.512, 423.728 1158.816, 423.620 1157.854, 423.732 1157.017, 424.083 1156.207, 424.657 1155.667, 425.366 1155.249, 426.247 1155.132, 427.302 1155.241, 428.068 1155.521, 428.814 1156.026, 429.508 1156.837, 430.126 1157.510, 430.396 1157.811, 430.475 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1047.259, 442.955 1047.054, 443.115 1046.455, 443.854 1046.334, 444.156 1046.194, 444.506 1046.095, 444.751 1046.085, 444.822 1046.017, 445.313 1045.969, 445.653 1045.977, 445.723 1046.017, 446.066 1046.048, 446.328 1046.050, 446.346 1046.083, 446.631 1046.423, 447.393 1046.454, 447.451 1046.458, 447.457 1046.786, 447.924 1046.919, 448.113 1047.625, 448.682 1047.719, 448.757 1047.955, 448.848 1048.681, 449.125 1048.729, 449.130 1048.787, 449.137 1049.056, 449.169 1049.477, 449.219 1049.554, 449.211 1049.793, 449.185 1050.182, 449.144 1050.388, 449.122 1050.545, 449.057 1050.813, 448.947 1051.291, 448.751 1051.324, 448.725 1051.946, 448.247 1051.962, 448.235 1052.034, 448.179 1052.631, 447.439 1052.957, 446.638 1052.995, 446.543 1053.008, 446.452 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1825.610, 452.976 1825.776, 452.661 1825.808, 452.211 1825.804, 452.148 1825.729, 451.772 1825.708, 451.662 1825.639, 451.570 1825.528, 451.419 1825.397, 451.243 1825.353, 451.183 1824.923, 450.877 1824.235, 450.578 1823.621, 450.488 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1822.091, 450.684 1821.949, 450.726 1821.631, 450.893 1821.225, 451.116 1820.935, 451.397 1820.853, 451.477 1820.740, 451.586 1820.709, 451.646 1820.469, 452.107 1820.435, 452.555 1820.442, 452.618 1820.504, 452.936 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1724.110, 457.653 1724.374, 457.648 1724.572, 457.644 1724.927, 457.601 1725.250, 457.517 1725.706, 457.384 1726.441, 456.964 1726.930, 456.456 1727.193, 455.891 1727.254, 455.404 1727.129, 454.809 1726.744, 454.290 1726.338, 453.956 1725.615, 453.632 1724.856, 453.516 1724.394, 453.527 1724.038, 453.570 1723.717, 453.657 1723.372, 453.757 1723.261, 453.789 1722.529, 454.210 1722.042, 454.717 1722.016, 454.773 1721.943, 454.932 1721.782, 455.281 1721.719, 455.767 1721.843, 456.349 1721.845, 456.360 1722.003, 456.574 1722.146, 456.768 1722.229, 456.877 1722.632, 457.211 1723.352, 457.536 1724.110, 457.653 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1625.265, 448.487 1625.696, 448.471 1626.097, 448.426 1626.878, 448.188 1627.611, 447.732 1628.095, 447.183 1628.310, 446.712 1628.340, 446.573 1628.435, 446.052 1628.282, 445.411 1628.007, 444.978 1627.496, 444.502 1626.746, 444.156 1625.960, 444.034 1625.529, 444.053 1625.128, 444.097 1624.348, 444.337 1623.618, 444.794 1623.137, 445.343 1622.921, 445.812 1622.895, 445.951 1622.799, 446.471 1622.952, 447.109 1623.224, 447.542 1623.733, 448.017 1624.481, 448.364 1625.265, 448.487 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1524.623, 441.786 1524.816, 442.161 1525.346, 442.669 1526.121, 443.038 1526.928, 443.168 1527.319, 443.147 1527.769, 443.100 1528.546, 442.842 1528.764, 442.694 1529.271, 442.351 1529.633, 441.920 1529.745, 441.761 1529.789, 441.675 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1429.091, 443.892 1429.435, 443.870 1429.936, 443.820 1430.702, 443.546 1431.244, 443.149 1431.411, 443.023 1431.827, 442.564 1432.169, 441.859 1432.237, 441.104 1432.153, 440.534 1431.825, 439.882 1431.272, 439.340 1430.472, 438.947 1429.645, 438.810 1429.301, 438.835 1428.799, 438.885 1428.035, 439.161 1427.492, 439.557 1427.330, 439.686 1426.913, 440.143 1426.574, 440.847 1426.509, 441.600 1426.590, 442.169 1426.918, 442.819 1427.469, 443.360 1428.266, 443.753 1429.091, 443.892 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1331.296, 454.828 1331.743, 454.896 1332.030, 454.882 1332.585, 454.826 1333.330, 454.543 1333.933, 454.120 1334.488, 453.506 1334.798, 452.766 1334.895, 452.083 1334.792, 451.360 1334.561, 450.902 1334.434, 450.670 1334.137, 450.359 1333.863, 450.095 1333.461, 449.873 1333.045, 449.675 1332.652, 449.596 1332.205, 449.526 1331.918, 449.544 1331.363, 449.599 1330.619, 449.885 1330.016, 450.307 1329.464, 450.921 1329.158, 451.661 1329.059, 452.342 1329.164, 453.062 1329.391, 453.521 1329.522, 453.750 1329.814, 454.064 1330.090, 454.325 1330.488, 454.550 1330.905, 454.745 1331.296, 454.828 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1235.675, 458.128 1235.396, 458.049 1235.061, 458.005 1234.871, 457.980 1234.651, 457.992 1234.043, 458.052 1233.332, 458.346 1233.022, 458.554 1232.862, 458.662 1232.799, 458.704 1232.669, 458.792 1232.638, 458.830 1232.155, 459.431 1231.871, 460.080 1231.774, 460.686 1231.736, 460.923 1231.883, 461.676 1232.067, 462.162 1232.493, 462.734 1232.774, 462.945 1233.175, 463.246 1233.675, 463.445 1233.993, 463.541 1234.517, 463.607 1234.738, 463.600 1235.345, 463.539 1235.619, 463.427 1236.058, 463.248 1236.720, 462.801 1237.096, 462.338 1237.239, 462.163 1237.520, 461.511 1237.659, 460.668 1237.547, 460.084 1237.514, 459.913 1237.440, 459.723 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1037.762, 448.134 1037.645, 448.428 1037.549, 449.086 1037.535, 449.185 1037.608, 449.782 1037.635, 450.001 1037.940, 450.688 1038.001, 450.772 1038.335, 451.240 1038.350, 451.252 1038.839, 451.648 1039.002, 451.780 1039.448, 451.951 1039.804, 452.088 1040.154, 452.128 1040.475, 452.165 1041.232, 452.085 1041.409, 452.013 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1040.266, 446.223 1039.816, 446.272 1039.615, 446.354 1039.312, 446.478 1039.130, 446.552 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1822.157, 458.580 1822.136, 458.600 1821.918, 459.016 1821.891, 459.376 1821.896, 459.424 1821.972, 459.814 1822.256, 460.197 1822.370, 460.280 1822.598, 460.446 1823.149, 460.687 1823.730, 460.774 1824.117, 460.769 1824.366, 460.736 1824.655, 460.676 1824.980, 460.577 1825.237, 460.448 1825.562, 460.268 1825.870, 459.973 1825.952, 459.893 1826.172, 459.477 1826.198, 459.115 1826.194, 459.067 1826.117, 458.676 1825.833, 458.293 1825.785, 458.258 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1734.757, 458.586 1734.732, 458.592 1734.367, 458.699 1733.774, 459.035 1733.380, 459.442 1733.168, 459.893 1733.120, 460.285 1733.219, 460.761 1733.528, 461.176 1733.857, 461.447 1734.438, 461.709 1735.049, 461.804 1735.426, 461.799 1735.697, 461.765 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1737.532, 459.718 1737.492, 459.526 1737.261, 459.215 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1647.956, 462.123 1648.493, 461.800 1648.892, 461.361 1649.062, 460.977 1649.096, 460.872 1649.098, 460.858 1649.168, 460.447 1649.048, 459.931 1648.816, 459.574 1648.401, 459.188 1647.790, 458.905 1647.149, 458.803 1646.934, 458.807 1646.789, 458.810 1646.468, 458.848 1646.308, 458.895 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1644.648, 461.145 1644.676, 461.264 1644.905, 461.621 1645.305, 461.994 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1557.731, 471.064 1557.925, 471.158 1558.590, 471.271 1558.927, 471.270 1559.288, 471.227 1559.724, 471.095 1559.935, 471.031 1560.167, 470.883 1560.540, 470.645 1560.779, 470.362 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1557.428, 467.890 1557.186, 468.045 1556.791, 468.515 1556.624, 468.857 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1561.087, 468.647 1561.085, 468.639 1561.041, 468.558 1560.886, 468.272 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1470.225, 471.876 1470.512, 471.921 1470.818, 471.920 1471.219, 471.874 1471.864, 471.665 1472.463, 471.254 1472.679, 471.003 1472.792, 470.873 1473.088, 470.311 1473.156, 469.705 1473.103, 469.410 1473.071, 469.229 1472.807, 468.700 1472.536, 468.435 1472.351, 468.255 1471.690, 467.928 1471.292, 467.855 1471.005, 467.808 1470.891, 467.809 1470.699, 467.811 1470.298, 467.857 1469.654, 468.067 1469.448, 468.210 1469.353, 468.275 1469.057, 468.479 1468.728, 468.859 1468.434, 469.421 1468.368, 470.026 1468.451, 470.501 1468.670, 470.938 1468.715, 471.029 1469.169, 471.472 1469.194, 471.485 1469.828, 471.800 1470.225, 471.876 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1382.327, 473.172 1382.670, 473.219 1382.937, 473.220 1383.027, 473.210 1383.380, 473.170 1384.016, 472.949 1384.056, 472.921 1384.496, 472.600 1384.603, 472.514 1384.681, 472.429 1384.976, 472.109 1385.251, 471.512 1385.311, 470.948 1385.241, 470.364 1384.953, 469.802 1384.481, 469.330 1384.115, 469.135 1384.048, 469.102 1383.959, 469.059 1383.801, 468.983 1383.443, 468.904 1383.199, 468.869 1383.100, 468.855 1382.832, 468.858 1382.390, 468.906 1381.754, 469.129 1381.417, 469.374 1381.274, 469.478 1381.170, 469.566 1380.797, 469.969 1380.524, 470.565 1380.476, 471.002 1380.463, 471.129 1380.533, 471.711 1380.821, 472.271 1381.292, 472.743 1381.655, 472.940 1381.970, 473.090 1382.327, 473.172 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1208.127, 454.929 1208.613, 454.721 1209.184, 454.342 1209.598, 453.810 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1030.847, 452.113 1030.912, 452.626 1031.167, 453.207 1031.369, 453.486 1031.504, 453.672 1032.065, 454.128 1032.740, 454.389 1033.310, 454.453 1033.720, 454.410 1033.945, 454.387 1034.586, 454.123 1035.018, 453.788 1035.101, 453.724 1035.526, 453.200 1035.776, 452.570 1035.779, 452.546 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1742.863, 473.378 1742.895, 473.531 1743.143, 473.866 1743.412, 474.089 1743.881, 474.301 1743.918, 474.307 1744.375, 474.380 1744.682, 474.381 1744.910, 474.351 1745.127, 474.304 1745.420, 474.216 1745.902, 473.951 1746.223, 473.627 1746.397, 473.265 1746.434, 472.947 1746.412, 472.842 1746.354, 472.564 1746.106, 472.229 1745.835, 472.006 1745.407, 471.812 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1662.634, 479.731 1662.698, 480.008 1662.889, 480.303 1663.226, 480.617 1663.724, 480.850 1664.245, 480.937 1664.545, 480.940 1664.622, 480.930 1664.802, 480.907 1665.001, 480.859 1665.328, 480.763 1665.823, 480.476 1666.151, 480.125 1666.320, 479.734 1666.375, 479.386 1666.355, 479.298 1666.280, 478.970 1666.087, 478.675 1665.749, 478.360 1665.251, 478.128 1664.728, 478.041 1664.429, 478.039 1664.414, 478.041 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1583.928, 478.557 1584.213, 478.560 1584.502, 478.524 1585.036, 478.368 1585.537, 478.058 1585.866, 477.680 1586.025, 477.343 1586.103, 476.884 1585.990, 476.436 1585.811, 476.119 1585.455, 475.781 1584.932, 475.531 1584.387, 475.438 1584.102, 475.437 1583.814, 475.472 1583.280, 475.629 1582.781, 475.940 1582.453, 476.318 1582.294, 476.654 1582.217, 477.112 1582.330, 477.559 1582.507, 477.876 1582.863, 478.214 1583.384, 478.464 1583.928, 478.557 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1502.080, 473.893 1502.091, 473.946 1502.303, 474.376 1502.676, 474.738 1503.220, 475.005 1503.563, 475.069 1503.785, 475.105 1504.051, 475.106 1504.372, 475.068 1504.912, 474.899 1505.414, 474.566 1505.675, 474.254 1505.742, 474.159 1505.915, 473.821 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1422.025, 467.338 1421.983, 467.826 1422.039, 468.237 1422.271, 468.694 1422.660, 469.079 1423.221, 469.362 1423.538, 469.426 1423.803, 469.466 1424.043, 469.464 1424.398, 469.425 1424.438, 469.411 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1425.792, 466.805 1425.725, 466.672 1425.335, 466.287 1424.772, 466.004 1424.455, 465.942 1424.189, 465.901 1423.949, 465.905 1423.769, 465.924 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1343.488, 468.779 1343.574, 468.818 1343.857, 468.885 1344.168, 468.928 1344.377, 468.925 1344.766, 468.884 1345.297, 468.691 1345.665, 468.428 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1346.193, 467.786 1346.339, 467.448 1346.403, 466.962 1346.333, 466.456 1346.166, 466.128 1346.082, 465.971 1345.866, 465.743 1345.679, 465.564 1345.388, 465.398 1345.100, 465.265 1344.913, 465.223 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1264.544, 478.713 1264.902, 478.754 1265.075, 478.757 1265.497, 478.712 1266.014, 478.514 1266.474, 478.196 1266.853, 477.755 1267.041, 477.291 1267.150, 476.703 1267.055, 476.176 1266.912, 475.828 1266.607, 475.423 1266.371, 475.240 1266.120, 475.059 1265.782, 474.924 1265.537, 474.849 1265.180, 474.807 1265.006, 474.806 1264.584, 474.851 1264.068, 475.049 1263.608, 475.367 1263.231, 475.809 1263.041, 476.272 1262.935, 476.859 1263.030, 477.385 1263.172, 477.734 1263.476, 478.138 1263.712, 478.319 1263.962, 478.502 1264.300, 478.635 1264.544, 478.713 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1185.260, 483.329 1185.307, 483.333 1185.664, 483.369 1185.796, 483.375 1186.249, 483.327 1186.745, 483.125 1187.240, 482.793 1187.476, 482.489 1187.595, 482.336 1187.817, 481.854 1187.820, 481.834 1187.900, 481.245 1187.821, 480.766 1187.771, 480.628 1187.663, 480.334 1187.357, 479.913 1186.866, 479.534 1186.863, 479.533 1186.279, 479.315 1186.269, 479.314 1186.057, 479.292 1185.875, 479.273 1185.743, 479.269 1185.290, 479.316 1184.795, 479.521 1184.646, 479.620 1184.411, 479.777 1184.300, 479.851 1184.256, 479.907 1184.144, 480.053 1183.947, 480.309 1183.748, 480.737 1183.724, 480.791 1183.643, 481.399 1183.719, 481.878 1183.760, 481.987 1183.879, 482.309 1183.966, 482.428 1184.184, 482.729 1184.489, 482.965 1184.673, 483.109 1184.674, 483.109 1185.260, 483.329 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1106.108, 469.115 1106.016, 469.124 1105.492, 469.349 1105.023, 469.677 1104.681, 470.121 1104.445, 470.643 1104.391, 471.188 1104.393, 471.272 1104.439, 471.760 1104.624, 472.205 1104.817, 472.479 1104.927, 472.636 1105.413, 473.023 1105.998, 473.247 1106.446, 473.293 1106.531, 473.293 1106.655, 473.281 1107.012, 473.245 1107.535, 473.020 1108.005, 472.694 1108.347, 472.249 1108.585, 471.727 1108.636, 471.182 1108.639, 471.098 1108.591, 470.610 1108.470, 470.317 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1026.101, 464.884 1026.058, 464.918 1025.693, 465.366 1025.485, 465.897 1025.484, 465.907 1025.402, 466.446 1025.425, 466.626 1025.478, 467.026 1025.693, 467.525 1025.782, 467.645 1025.983, 467.913 1026.458, 468.304 1027.032, 468.529 1027.331, 468.559 1027.519, 468.578 1027.555, 468.575 1028.056, 468.528 1028.310, 468.423 1028.603, 468.301 1028.869, 468.098 1029.038, 467.968 1029.401, 467.519 1029.593, 467.035 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1677.494, 488.823 1677.584, 488.959 1677.856, 489.212 1678.257, 489.400 1678.679, 489.471 1678.925, 489.477 1679.131, 489.449 1679.215, 489.431 1679.296, 489.414 1679.558, 489.336 1679.960, 489.108 1680.226, 488.828 1680.365, 488.515 1680.407, 488.234 1680.332, 487.901 1680.211, 487.719 1680.173, 487.661 1679.900, 487.407 1679.498, 487.219 1679.076, 487.148 1678.830, 487.143 1678.676, 487.164 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1604.021, 489.107 1603.897, 489.378 1603.831, 489.747 1603.920, 490.108 1604.070, 490.368 1604.359, 490.643 1604.784, 490.847 1605.087, 490.902 1605.229, 490.925 1605.468, 490.931 1605.699, 490.901 1605.848, 490.863 1606.139, 490.779 1606.375, 490.637 1606.551, 490.532 1606.823, 490.229 1606.908, 490.041 1606.948, 489.954 1607.016, 489.584 1606.926, 489.223 1606.775, 488.963 1606.485, 488.688 1606.059, 488.484 1605.756, 488.430 1605.614, 488.406 1605.375, 488.400 1605.144, 488.431 1604.996, 488.469 1604.704, 488.554 1604.393, 488.741 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1530.395, 488.276 1530.373, 488.429 1530.444, 488.749 1530.478, 488.818 1530.616, 489.099 1530.923, 489.395 1531.370, 489.615 1531.662, 489.674 1531.836, 489.699 1532.064, 489.706 1532.323, 489.673 1532.772, 489.540 1533.191, 489.274 1533.465, 488.946 1533.612, 488.650 1533.669, 488.251 1533.597, 487.930 1533.565, 487.861 1533.521, 487.771 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1533.324, 487.482 1533.118, 487.284 1532.919, 487.186 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1530.772, 487.500 1530.577, 487.735 1530.483, 487.924 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1458.682, 489.540 1458.565, 489.554 1458.113, 489.695 1457.694, 489.979 1457.459, 490.253 1457.255, 490.644 1457.210, 491.069 1457.266, 491.411 1457.298, 491.476 1457.453, 491.784 1457.774, 492.100 1458.239, 492.336 1458.515, 492.400 1458.722, 492.426 1458.933, 492.434 1459.219, 492.399 1459.232, 492.395 1459.672, 492.258 1460.092, 491.975 1460.327, 491.701 1460.533, 491.309 1460.578, 490.884 1460.521, 490.541 1460.334, 490.168 1460.330, 490.164 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1387.272, 488.574 1387.437, 488.222 1387.479, 487.816 1387.430, 487.405 1387.336, 487.223 1387.225, 487.008 1387.029, 486.811 1386.890, 486.672 1386.629, 486.524 1386.628, 486.523 1386.407, 486.422 1386.152, 486.357 1385.909, 486.328 1385.718, 486.322 1385.643, 486.330 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1385.288, 486.397 1385.079, 486.467 1384.952, 486.510 1384.536, 486.813 1384.272, 487.103 1384.077, 487.521 1384.034, 487.925 1384.061, 488.143 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1313.418, 482.466 1313.539, 482.423 1313.909, 482.160 1314.240, 481.797 1314.421, 481.356 1314.427, 481.318 1314.486, 480.932 1314.419, 480.498 1314.285, 480.210 1314.199, 480.080 1314.029, 479.876 1313.854, 479.727 1313.620, 479.576 1313.360, 479.466 1313.131, 479.402 1312.853, 479.368 1312.846, 479.368 1312.687, 479.365 1312.346, 479.403 1311.901, 479.565 1311.765, 479.661 1311.531, 479.827 1311.201, 480.190 1311.021, 480.631 1310.955, 481.055 1311.023, 481.487 1311.156, 481.776 1311.242, 481.905 1311.411, 482.110 1311.587, 482.257 1311.709, 482.337 1311.819, 482.410 1312.080, 482.519 1312.136, 482.535 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1241.754, 480.953 1241.717, 480.759 1241.601, 480.457 1241.342, 480.108 1240.927, 479.794 1240.626, 479.680 1240.429, 479.613 1240.113, 479.578 1239.977, 479.574 1239.610, 479.614 1239.176, 479.783 1238.877, 479.987 1238.815, 480.030 1238.775, 480.057 1238.572, 480.302 1238.461, 480.436 1238.291, 480.835 1238.206, 481.340 1238.237, 481.496 1238.294, 481.792 1238.408, 482.094 1238.667, 482.442 1238.944, 482.652 1239.081, 482.756 1239.382, 482.870 1239.578, 482.939 1239.895, 482.972 1240.031, 482.977 1240.059, 482.974 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1166.697, 476.777 1166.568, 476.832 1166.223, 477.060 1166.140, 477.115 1165.875, 477.469 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1094.896, 489.452 1094.703, 489.472 1094.658, 489.477 1094.208, 489.673 1094.199, 489.679 1093.811, 489.945 1093.796, 489.965 1093.516, 490.329 1093.317, 490.770 1093.295, 490.980 1093.268, 491.243 1093.312, 491.726 1093.473, 492.103 1093.687, 492.410 1093.731, 492.474 1094.146, 492.809 1094.570, 492.976 1094.644, 493.005 1094.700, 493.010 1095.099, 493.047 1095.512, 493.004 1095.963, 492.807 1096.360, 492.536 1096.532, 492.313 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1021.427, 475.026 1021.133, 475.388 1020.957, 475.837 1020.884, 476.310 1020.931, 476.656 1020.951, 476.803 1021.133, 477.232 1021.383, 477.560 1021.788, 477.895 1022.277, 478.090 1022.724, 478.130 1023.153, 478.089 1023.621, 477.893 1023.933, 477.656 1023.990, 477.613 1024.301, 477.227 1024.479, 476.778 1024.550, 476.305 1024.540, 476.224 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1621.947, 495.613 1621.922, 495.752 1621.992, 496.042 1622.117, 496.254 1622.352, 496.476 1622.697, 496.641 1622.947, 496.687 1623.058, 496.704 1623.255, 496.712 1623.440, 496.687 1623.566, 496.658 1623.800, 496.589 1624.136, 496.392 1624.358, 496.149 1624.458, 495.926 1624.470, 495.876 1624.515, 495.630 1624.444, 495.339 1624.318, 495.128 1624.083, 494.906 1623.738, 494.740 1623.488, 494.695 1623.377, 494.677 1623.179, 494.670 1622.994, 494.695 1622.869, 494.724 1622.635, 494.793 1622.442, 494.906 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1555.312, 498.798 1555.448, 498.817 1555.640, 498.825 1555.847, 498.798 1555.958, 498.768 1556.217, 498.693 1556.563, 498.480 1556.789, 498.217 1556.905, 497.975 1556.956, 497.654 1556.892, 497.393 1556.873, 497.340 1556.754, 497.110 1556.504, 496.869 1556.138, 496.690 1555.892, 496.640 1555.757, 496.621 1555.565, 496.613 1555.358, 496.641 1555.247, 496.671 1554.988, 496.746 1554.643, 496.959 1554.417, 497.223 1554.301, 497.463 1554.251, 497.784 1554.314, 498.045 1554.334, 498.098 1554.452, 498.328 1554.702, 498.568 1555.067, 498.747 1555.312, 498.798 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1488.402, 496.548 1488.348, 496.536 1488.268, 496.526 1488.187, 496.516 1488.004, 496.507 1487.774, 496.537 1487.401, 496.649 1487.397, 496.650 1487.059, 496.871 1487.047, 496.879 1486.860, 497.102 1486.820, 497.162 1486.686, 497.420 1486.661, 497.635 1486.645, 497.764 1486.697, 498.045 1486.843, 498.338 1486.848, 498.348 1487.112, 498.606 1487.495, 498.799 1487.731, 498.853 1487.892, 498.873 1488.075, 498.882 1488.304, 498.853 1488.682, 498.740 1489.032, 498.511 1489.220, 498.287 1489.261, 498.229 1489.312, 498.129 1489.394, 497.970 1489.436, 497.625 1489.384, 497.344 1489.382, 497.341 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1421.612, 487.575 1421.586, 487.523 1421.309, 487.248 1421.081, 487.127 1420.909, 487.044 1420.685, 486.990 1420.495, 486.966 1420.326, 486.961 1420.098, 486.988 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1418.942, 488.167 1418.930, 488.311 1418.949, 488.457 1418.969, 488.609 1419.082, 488.832 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1352.816, 492.557 1353.034, 492.581 1353.187, 492.589 1353.462, 492.556 1353.843, 492.427 1354.142, 492.210 1354.193, 492.167 1354.427, 491.915 1354.587, 491.554 1354.631, 491.203 1354.583, 490.848 1354.462, 490.608 1354.404, 490.505 1354.248, 490.332 1354.117, 490.213 1353.906, 490.084 1353.704, 489.997 1353.498, 489.939 1353.280, 489.915 1353.127, 489.908 1352.852, 489.940 1352.471, 490.070 1352.172, 490.287 1352.122, 490.331 1351.888, 490.582 1351.729, 490.943 1351.684, 491.294 1351.733, 491.648 1351.853, 491.888 1351.911, 491.991 1352.067, 492.164 1352.198, 492.282 1352.408, 492.412 1352.610, 492.498 1352.816, 492.557 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1285.658, 493.116 1285.907, 493.141 1286.039, 493.149 1286.337, 493.115 1286.714, 492.979 1287.039, 492.750 1287.316, 492.440 1287.465, 492.061 1287.528, 491.691 1287.465, 491.318 1287.357, 491.065 1287.137, 490.775 1286.977, 490.650 1286.787, 490.513 1286.553, 490.422 1286.368, 490.361 1286.119, 490.335 1285.987, 490.328 1285.688, 490.362 1285.312, 490.498 1284.988, 490.727 1284.711, 491.038 1284.563, 491.417 1284.499, 491.786 1284.563, 492.159 1284.670, 492.412 1284.889, 492.702 1285.050, 492.826 1285.239, 492.963 1285.473, 493.054 1285.658, 493.116 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1218.584, 490.802 1218.864, 490.828 1218.972, 490.836 1219.292, 490.801 1219.659, 490.659 1220.008, 490.420 1220.273, 490.096 1220.424, 489.749 1220.492, 489.316 1220.426, 488.971 1220.413, 488.927 1220.319, 488.664 1220.097, 488.362 1219.742, 488.090 1219.317, 487.932 1219.037, 487.904 1218.929, 487.898 1218.609, 487.933 1218.242, 488.076 1217.894, 488.314 1217.629, 488.638 1217.478, 488.985 1217.411, 489.418 1217.475, 489.762 1217.490, 489.806 1217.496, 489.823 1217.583, 490.069 1217.804, 490.371 1217.988, 490.512 1218.159, 490.643 1218.584, 490.802 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1151.631, 487.176 1151.645, 487.181 1151.703, 487.186 1151.954, 487.210 1152.035, 487.216 1152.374, 487.180 1152.728, 487.032 1153.098, 486.787 1153.348, 486.451 1153.501, 486.134 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1085.873, 487.886 1085.671, 487.808 1085.282, 487.772 1084.927, 487.809 1084.676, 487.917 1084.539, 487.976 1084.203, 488.210 1084.103, 488.338 1083.948, 488.539 1083.781, 488.917 1083.736, 489.322 1083.776, 489.737 1083.916, 490.060 1083.947, 490.105 1084.136, 490.379 1084.195, 490.426 1084.393, 490.587 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1017.901, 494.612 1017.900, 494.613 1017.586, 494.846 1017.318, 495.180 1017.168, 495.560 1017.104, 495.971 1017.162, 496.389 1017.282, 496.676 1017.318, 496.762 1017.533, 497.037 1017.603, 497.096 1017.881, 497.328 1018.299, 497.498 1018.682, 497.536 1019.051, 497.497 1019.300, 497.391 1019.381, 497.357 1019.453, 497.326 1019.597, 497.220 1019.768, 497.093 1019.781, 497.078 1019.855, 496.986 1020.036, 496.759 1020.187, 496.379 1020.215, 496.196 1020.250, 495.968 1020.213, 495.699 1020.193, 495.550 1020.036, 495.177 1019.914, 495.020 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1575.482, 504.342 1575.588, 504.356 1575.747, 504.364 1575.912, 504.342 1576.008, 504.319 1576.214, 504.259 1576.497, 504.089 1576.645, 503.921 1576.682, 503.878 1576.774, 503.684 1576.817, 503.426 1576.752, 503.174 1576.663, 503.007 1576.652, 502.988 1576.450, 502.794 1576.274, 502.708 1576.154, 502.649 1575.950, 502.607 1575.845, 502.593 1575.685, 502.585 1575.520, 502.608 1575.425, 502.630 1575.309, 502.664 1575.262, 502.678 1575.219, 502.691 1574.936, 502.861 1574.751, 503.072 1574.660, 503.266 1574.617, 503.523 1574.671, 503.734 1574.682, 503.776 1574.781, 503.961 1574.983, 504.155 1575.047, 504.187 1575.279, 504.300 1575.482, 504.342 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1512.706, 499.535 1512.717, 499.536 1512.872, 499.544 1512.935, 499.536 1513.056, 499.520 1513.224, 499.471 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1449.316, 495.222 1449.162, 495.400 1449.018, 495.677 1448.988, 495.977 1449.026, 496.221 1449.159, 496.485 1449.386, 496.710 1449.582, 496.812 1449.715, 496.877 1449.908, 496.924 1450.056, 496.942 1450.204, 496.949 1450.407, 496.924 1450.726, 496.825 1451.021, 496.625 1451.189, 496.431 1451.333, 496.154 1451.361, 495.883 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1387.612, 504.905 1387.784, 504.922 1387.920, 504.933 1388.066, 504.914 1388.102, 504.910 1388.143, 504.905 1388.464, 504.802 1388.761, 504.592 1388.785, 504.566 1388.806, 504.542 1388.827, 504.518 1388.948, 504.384 1389.087, 504.091 1389.116, 503.801 1389.099, 503.654 1389.082, 503.512 1388.948, 503.252 1388.937, 503.231 1388.797, 503.086 1388.699, 502.991 1388.513, 502.880 1388.393, 502.828 1388.357, 502.812 1388.175, 502.760 1388.003, 502.743 1387.867, 502.733 1387.644, 502.761 1387.323, 502.864 1387.027, 503.074 1386.840, 503.282 1386.702, 503.575 1386.672, 503.865 1386.707, 504.154 1386.851, 504.434 1386.990, 504.580 1387.089, 504.673 1387.236, 504.762 1387.274, 504.785 1387.431, 504.853 1387.604, 504.903 1387.612, 504.905 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1324.320, 503.829 1324.370, 503.937 1324.429, 504.023 1324.554, 504.177 1324.555, 504.178 1324.676, 504.276 1324.847, 504.395 1325.030, 504.466 1325.198, 504.522 1325.394, 504.540 1325.517, 504.551 1325.759, 504.521 1326.082, 504.413 1326.345, 504.222 1326.378, 504.190 1326.585, 503.969 1326.718, 503.659 1326.761, 503.351 1326.715, 503.045 1326.704, 503.021 1326.617, 502.833 1326.559, 502.747 1326.433, 502.593 1326.311, 502.493 1326.139, 502.376 1325.956, 502.304 1325.788, 502.249 1325.592, 502.230 1325.585, 502.230 1325.469, 502.220 1325.387, 502.230 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1262.891, 503.573 1263.217, 503.603 1263.421, 503.579 1263.477, 503.572 1263.795, 503.458 1263.799, 503.455 1264.079, 503.259 1264.312, 502.994 1264.428, 502.704 1264.435, 502.669 1264.475, 502.456 1264.495, 502.347 1264.436, 502.027 1264.348, 501.806 1264.161, 501.554 1263.861, 501.327 1263.502, 501.194 1263.175, 501.164 1262.915, 501.195 1262.597, 501.309 1262.314, 501.508 1262.082, 501.773 1261.964, 502.063 1261.899, 502.420 1261.958, 502.740 1261.980, 502.797 1262.045, 502.961 1262.232, 503.212 1262.532, 503.440 1262.891, 503.573 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1201.805, 496.032 1201.636, 495.901 1201.271, 495.763 1200.939, 495.733 1200.661, 495.764 1200.350, 495.885 1200.047, 496.091 1199.824, 496.369 1199.730, 496.578 1199.689, 496.669 1199.636, 497.041 1199.687, 497.340 1199.783, 497.604 1199.973, 497.865 1200.080, 497.948 1200.276, 498.101 1200.641, 498.239 1200.973, 498.269 1201.251, 498.238 1201.562, 498.118 1201.866, 497.911 1202.089, 497.634 1202.187, 497.414 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1139.098, 491.965 1138.866, 491.943 1138.573, 491.975 1138.273, 492.101 1137.952, 492.313 1137.744, 492.591 1137.590, 492.909 1137.581, 492.993 1137.550, 493.293 1137.587, 493.600 1137.696, 493.872 1137.886, 494.141 1138.191, 494.384 1138.558, 494.525 1138.643, 494.533 1138.893, 494.556 1139.186, 494.524 1139.486, 494.399 1139.808, 494.187 1140.015, 493.909 1140.170, 493.591 1140.170, 493.582 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1076.158, 494.382 1076.275, 494.478 1076.639, 494.622 1076.972, 494.654 1077.279, 494.621 1077.320, 494.603 1077.613, 494.476 1077.900, 494.277 1078.120, 493.994 1078.262, 493.670 1078.285, 493.473 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1015.968, 500.030 1015.863, 499.943 1015.503, 499.796 1015.175, 499.763 1014.858, 499.797 1014.512, 499.944 1014.244, 500.143 1014.013, 500.430 1013.919, 500.668 1013.885, 500.755 1013.829, 501.110 1013.880, 501.467 1014.013, 501.789 1014.199, 502.023 1014.232, 502.053 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1533.950, 502.219 1533.758, 502.338 1533.604, 502.521 1533.521, 502.690 1533.488, 502.913 1533.529, 503.096 1533.626, 503.293 1533.799, 503.461 1534.052, 503.587 1534.218, 503.624 1534.316, 503.636 1534.445, 503.643 1534.591, 503.623 1534.664, 503.604 1534.846, 503.551 1535.083, 503.404 1535.238, 503.220 1535.321, 503.052 1535.353, 502.828 1535.312, 502.645 1535.215, 502.448 1535.042, 502.279 1534.788, 502.154 1534.622, 502.117 1534.525, 502.105 1534.395, 502.099 1534.299, 502.111 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1475.913, 507.877 1476.029, 507.889 1476.154, 507.898 1476.317, 507.876 1476.581, 507.799 1476.825, 507.640 1476.959, 507.481 1476.984, 507.442 1477.080, 507.258 1477.108, 507.017 1477.073, 506.817 1476.965, 506.603 1476.780, 506.421 1476.613, 506.335 1476.511, 506.284 1476.347, 506.243 1476.231, 506.231 1476.105, 506.222 1475.943, 506.244 1475.679, 506.321 1475.435, 506.481 1475.302, 506.640 1475.277, 506.679 1475.181, 506.862 1475.153, 507.104 1475.188, 507.303 1475.296, 507.517 1475.481, 507.699 1475.647, 507.785 1475.750, 507.836 1475.913, 507.877 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1417.432, 506.807 1417.344, 506.834 1417.096, 507.005 1417.022, 507.089 1416.948, 507.174 1416.829, 507.412 1416.807, 507.670 1416.813, 507.718 1416.834, 507.883 1416.836, 507.887 1416.951, 508.112 1417.013, 508.174 1417.124, 508.285 1417.146, 508.307 1417.306, 508.398 1417.315, 508.403 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1302.065, 500.139 1302.000, 500.088 1301.860, 499.988 1301.697, 499.925 1301.560, 499.878 1301.386, 499.862 1301.287, 499.854 1301.076, 499.879 1300.804, 499.974 1300.575, 500.137 1300.521, 500.196 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1243.156, 510.375 1243.366, 510.395 1243.437, 510.402 1243.663, 510.375 1243.933, 510.278 1244.181, 510.105 1244.377, 509.878 1244.481, 509.625 1244.530, 509.342 1244.535, 509.319 1244.481, 509.042 1244.409, 508.850 1244.248, 508.632 1244.168, 508.570 1243.991, 508.435 1243.683, 508.319 1243.403, 508.292 1243.176, 508.319 1242.946, 508.402 1242.906, 508.417 1242.659, 508.589 1242.463, 508.817 1242.359, 509.069 1242.306, 509.376 1242.359, 509.651 1242.431, 509.844 1242.591, 510.062 1242.848, 510.259 1243.156, 510.375 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1186.100, 502.069 1185.965, 501.963 1185.652, 501.843 1185.368, 501.816 1185.127, 501.844 1184.863, 501.946 1184.600, 502.125 1184.412, 502.362 1184.294, 502.622 1184.251, 502.941 1184.292, 503.200 1184.376, 503.426 1184.539, 503.652 1184.799, 503.855 1185.111, 503.975 1185.396, 504.002 1185.636, 503.974 1185.900, 503.872 1186.163, 503.694 1186.352, 503.456 1186.470, 503.196 1186.513, 502.877 1186.472, 502.618 1186.470, 502.613 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1127.769, 498.883 1127.503, 498.858 1127.250, 498.886 1126.995, 498.992 1126.718, 499.175 1126.538, 499.415 1126.433, 499.635 1126.407, 499.687 1126.375, 500.016 1126.405, 500.282 1126.500, 500.515 1126.663, 500.747 1126.924, 500.956 1127.238, 501.079 1127.249, 501.080 1127.525, 501.106 1127.778, 501.078 1128.033, 500.972 1128.311, 500.789 1128.490, 500.549 1128.564, 500.395 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1069.596, 498.721 1069.506, 498.731 1069.218, 498.856 1068.973, 499.026 1068.783, 499.270 1068.694, 499.475 1068.662, 499.548 1068.626, 499.849 1068.659, 500.154 1068.765, 500.391 1068.782, 500.428 1068.926, 500.627 1069.186, 500.841 1069.499, 500.966 1069.785, 500.994 1069.996, 500.971 1070.049, 500.965 1070.338, 500.839 1070.582, 500.670 1070.769, 500.429 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1011.316, 499.065 1011.135, 499.289 1011.026, 499.569 1010.978, 499.872 1010.998, 500.011 1011.022, 500.179 1011.135, 500.455 1011.296, 500.656 1011.345, 500.702 1011.527, 500.852 1011.551, 500.871 1011.859, 500.997 1012.040, 501.015 1012.140, 501.026 1012.413, 500.997 1012.710, 500.870 1012.912, 500.721 1012.940, 500.700 1013.139, 500.453 1013.248, 500.174 1013.294, 499.883 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1498.343, 509.784 1498.279, 509.802 1498.079, 509.929 1497.974, 510.057 1497.949, 510.087 1497.875, 510.234 1497.850, 510.428 1497.881, 510.588 1497.966, 510.759 1498.115, 510.905 1498.333, 511.015 1498.469, 511.049 1498.558, 511.058 1498.664, 511.066 1498.793, 511.048 1498.848, 511.033 1499.008, 510.987 1499.208, 510.860 1499.328, 510.713 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1444.686, 509.242 1444.728, 509.162 1444.748, 508.954 1444.722, 508.782 1444.709, 508.755 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1388.438, 507.073 1388.423, 507.221 1388.448, 507.424 1388.550, 507.621 1388.648, 507.725 1388.717, 507.790 1388.848, 507.869 1388.958, 507.916 1389.086, 507.954 1389.207, 507.966 1389.303, 507.974 1389.459, 507.954 1389.686, 507.883 1389.895, 507.735 1390.027, 507.588 1390.125, 507.383 1390.145, 507.178 1390.121, 506.975 1390.019, 506.777 1389.921, 506.674 1389.852, 506.608 1389.721, 506.529 1389.611, 506.482 1389.590, 506.476 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1334.621, 510.404 1334.848, 510.425 1335.018, 510.403 1335.248, 510.328 1335.433, 510.193 1335.459, 510.171 1335.605, 510.015 1335.700, 509.797 1335.730, 509.578 1335.698, 509.362 1335.627, 509.212 1335.588, 509.152 1335.496, 509.042 1335.412, 508.972 1335.288, 508.888 1335.161, 508.838 1335.039, 508.797 1334.813, 508.776 1334.642, 508.797 1334.413, 508.873 1334.227, 509.008 1334.202, 509.030 1334.056, 509.186 1333.961, 509.404 1333.931, 509.623 1333.963, 509.838 1334.034, 509.989 1334.073, 510.048 1334.164, 510.159 1334.249, 510.228 1334.373, 510.313 1334.500, 510.363 1334.621, 510.404 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1280.204, 511.536 1280.438, 511.559 1280.621, 511.536 1280.851, 511.457 1281.052, 511.314 1281.221, 511.127 1281.312, 510.898 1281.351, 510.667 1281.312, 510.440 1281.246, 510.282 1281.112, 510.102 1280.897, 509.940 1280.640, 509.844 1280.406, 509.822 1280.222, 509.845 1279.992, 509.924 1279.792, 510.067 1279.623, 510.254 1279.533, 510.483 1279.493, 510.713 1279.533, 510.940 1279.598, 511.099 1279.732, 511.278 1279.947, 511.441 1280.204, 511.536 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1225.276, 505.653 1225.188, 505.759 1225.095, 505.975 1225.053, 506.240 1225.094, 506.456 1225.101, 506.478 1225.159, 506.643 1225.297, 506.831 1225.516, 507.000 1225.780, 507.100 1226.020, 507.123 1226.217, 507.099 1226.445, 507.015 1226.660, 506.867 1226.825, 506.670 1226.918, 506.453 1226.961, 506.189 1226.919, 505.973 1226.913, 505.950 1226.854, 505.785 1226.716, 505.597 1226.693, 505.579 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1172.487, 513.259 1172.349, 513.150 1172.081, 513.046 1171.837, 513.022 1171.628, 513.047 1171.547, 513.078 1171.405, 513.133 1171.267, 513.226 1171.176, 513.287 1171.028, 513.476 1171.018, 513.490 1170.913, 513.715 1170.879, 513.988 1170.911, 514.213 1170.986, 514.407 1171.059, 514.510 1171.125, 514.602 1171.348, 514.778 1171.616, 514.882 1171.860, 514.907 1172.068, 514.882 1172.292, 514.797 1172.520, 514.642 1172.680, 514.440 1172.783, 514.214 1172.797, 514.104 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1117.773, 505.141 1117.578, 505.122 1117.359, 505.146 1117.143, 505.236 1116.903, 505.394 1116.748, 505.601 1116.638, 505.834 1116.612, 506.115 1116.616, 506.154 1116.635, 506.345 1116.719, 506.544 1116.858, 506.744 1117.081, 506.924 1117.350, 507.030 1117.390, 507.034 1117.595, 507.054 1117.814, 507.029 1118.031, 506.940 1118.270, 506.782 1118.425, 506.575 1118.536, 506.342 1118.551, 506.181 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1063.256, 507.332 1063.033, 507.429 1062.824, 507.573 1062.660, 507.784 1062.557, 508.021 1062.554, 508.045 1062.525, 508.282 1062.554, 508.542 1062.659, 508.779 1062.757, 508.911 1062.785, 508.949 1062.798, 508.960 1063.008, 509.133 1063.276, 509.242 1063.521, 509.267 1063.725, 509.244 1063.749, 509.241 1063.956, 509.151 1063.998, 509.132 1064.206, 508.989 1064.370, 508.778 1064.473, 508.541 1064.492, 508.388 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1009.023, 511.406 1008.828, 511.548 1008.657, 511.761 1008.564, 511.999 1008.522, 512.263 1008.560, 512.524 1008.613, 512.654 1008.657, 512.764 1008.796, 512.934 1008.837, 512.977 1009.015, 513.120 1009.279, 513.229 1009.521, 513.255 1009.755, 513.229 1010.011, 513.119 1010.110, 513.047 1010.208, 512.975 1010.379, 512.762 1010.473, 512.524 1010.514, 512.261 1010.477, 511.999 1010.379, 511.760 1010.317, 511.683 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1466.941, 516.057 1467.022, 516.065 1467.107, 516.072 1467.219, 516.057 1467.399, 516.005 1467.566, 515.897 1467.658, 515.787 1467.674, 515.761 1467.740, 515.635 1467.759, 515.469 1467.736, 515.331 1467.662, 515.184 1467.535, 515.058 1467.422, 514.998 1467.350, 514.964 1467.239, 514.934 1467.159, 514.927 1467.074, 514.919 1466.961, 514.934 1466.781, 514.987 1466.615, 515.095 1466.522, 515.205 1466.507, 515.230 1466.440, 515.357 1466.422, 515.522 1466.445, 515.660 1466.519, 515.807 1466.646, 515.933 1466.759, 515.994 1466.830, 516.027 1466.941, 516.057 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1415.562, 517.209 1415.738, 517.225 1415.863, 517.209 1416.049, 517.153 1416.221, 517.036 1416.325, 516.917 1416.407, 516.753 1416.423, 516.574 1416.404, 516.424 1416.323, 516.266 1416.238, 516.181 1416.187, 516.130 1416.076, 516.064 1415.991, 516.027 1415.882, 515.995 1415.706, 515.979 1415.582, 515.995 1415.396, 516.052 1415.224, 516.169 1415.120, 516.287 1415.038, 516.451 1415.023, 516.630 1415.041, 516.780 1415.122, 516.938 1415.207, 517.023 1415.258, 517.074 1415.369, 517.140 1415.454, 517.176 1415.562, 517.209 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1364.224, 517.125 1364.410, 517.143 1364.546, 517.125 1364.738, 517.065 1364.914, 516.939 1365.030, 516.811 1365.112, 516.635 1365.132, 516.457 1365.109, 516.282 1365.047, 516.159 1365.021, 516.111 1364.940, 516.020 1364.877, 515.965 1364.769, 515.895 1364.670, 515.855 1364.565, 515.821 1364.379, 515.803 1364.242, 515.821 1364.051, 515.881 1363.874, 516.007 1363.759, 516.135 1363.677, 516.311 1363.656, 516.489 1363.680, 516.664 1363.741, 516.787 1363.768, 516.834 1363.848, 516.926 1363.912, 516.981 1364.019, 517.051 1364.118, 517.091 1364.224, 517.125 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1312.990, 518.441 1313.183, 518.459 1313.331, 518.440 1313.525, 518.377 1313.686, 518.260 1313.703, 518.244 1313.829, 518.109 1313.908, 517.922 1313.937, 517.733 1313.907, 517.549 1313.849, 517.418 1313.812, 517.368 1313.738, 517.271 1313.662, 517.213 1313.561, 517.138 1313.348, 517.060 1313.155, 517.041 1313.007, 517.060 1312.813, 517.124 1312.652, 517.241 1312.636, 517.257 1312.509, 517.392 1312.431, 517.578 1312.402, 517.767 1312.432, 517.952 1312.489, 518.082 1312.527, 518.132 1312.600, 518.229 1312.677, 518.287 1312.778, 518.362 1312.990, 518.441 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1261.365, 516.833 1261.297, 516.909 1261.225, 517.089 1261.222, 517.106 1261.185, 517.305 1261.222, 517.500 1261.252, 517.580 1261.275, 517.638 1261.390, 517.793 1261.574, 517.934 1261.794, 518.017 1261.994, 518.036 1262.154, 518.016 1262.349, 517.949 1262.523, 517.826 1262.558, 517.786 1262.665, 517.666 1262.737, 517.486 1262.741, 517.469 1262.777, 517.269 1262.741, 517.074 1262.720, 517.020 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1210.692, 518.719 1210.897, 518.740 1211.067, 518.719 1211.260, 518.649 1211.446, 518.520 1211.495, 518.462 1211.585, 518.354 1211.667, 518.166 1211.701, 517.940 1211.668, 517.753 1211.610, 517.593 1211.493, 517.431 1211.319, 517.296 1211.305, 517.285 1211.080, 517.198 1210.875, 517.178 1210.705, 517.199 1210.519, 517.266 1210.511, 517.269 1210.326, 517.397 1210.187, 517.564 1210.105, 517.752 1210.071, 517.977 1210.104, 518.165 1210.162, 518.325 1210.279, 518.486 1210.341, 518.535 1210.467, 518.633 1210.692, 518.719 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1160.303, 510.659 1160.206, 510.581 1159.977, 510.492 1159.768, 510.472 1159.588, 510.493 1159.398, 510.567 1159.201, 510.700 1159.067, 510.874 1158.975, 511.068 1158.968, 511.134 1158.947, 511.303 1158.974, 511.496 1159.039, 511.663 1159.081, 511.722 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1160.472, 511.711 1160.489, 511.689 1160.512, 511.640 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1109.225, 515.366 1109.081, 515.308 1108.871, 515.287 1108.682, 515.309 1108.498, 515.384 1108.292, 515.520 1108.158, 515.699 1108.065, 515.897 1108.044, 516.117 1108.044, 516.137 1108.062, 516.336 1108.135, 516.506 1108.172, 516.560 1108.254, 516.678 1108.445, 516.833 1108.557, 516.878 1108.675, 516.925 1108.885, 516.947 1109.073, 516.925 1109.257, 516.850 1109.464, 516.713 1109.598, 516.535 1109.691, 516.337 1109.712, 516.116 1109.713, 516.096 1109.694, 515.898 1109.621, 515.727 1109.551, 515.627 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1057.846, 511.772 1057.777, 511.780 1057.601, 511.857 1057.564, 511.873 1057.386, 511.995 1057.245, 512.177 1057.220, 512.235 1057.158, 512.379 1057.129, 512.603 1057.150, 512.786 1057.155, 512.826 1057.244, 513.030 1057.353, 513.174 1057.491, 513.289 1057.543, 513.333 1057.773, 513.426 1057.982, 513.448 1058.063, 513.438 1058.178, 513.425 1058.355, 513.349 1058.392, 513.332 1058.569, 513.210 1058.711, 513.028 1058.739, 512.963 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1006.613, 517.326 1006.603, 517.333 1006.456, 517.517 1006.377, 517.720 1006.353, 517.869 1006.340, 517.946 1006.373, 518.170 1006.397, 518.228 1006.456, 518.376 1006.576, 518.521 1006.610, 518.559 1006.763, 518.681 1006.990, 518.775 1007.197, 518.797 1007.398, 518.775 1007.436, 518.759 1007.618, 518.680 1007.743, 518.590 1007.786, 518.558 1007.933, 518.375 1008.013, 518.172 1008.029, 518.070 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1912.198, 460.578 1911.969, 460.676 1911.681, 460.841 1911.509, 460.982 1911.301, 461.183 1911.231, 461.297 1911.080, 461.564 1911.045, 461.937 1911.136, 462.296 1911.166, 462.336 1911.395, 462.646 1911.746, 462.875 1911.824, 462.912 1912.264, 463.096 1912.814, 463.177 1913.206, 463.173 1913.423, 463.143 1913.728, 463.088 1914.017, 462.998 1914.104, 462.961 1914.293, 462.881 1914.582, 462.716 1914.755, 462.575 1914.963, 462.373 1915.034, 462.259 1915.185, 461.992 1915.221, 461.617 1915.129, 461.258 1915.020, 461.112 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1823.635, 471.229 1823.611, 471.251 1823.437, 471.581 1823.416, 471.871 1823.419, 471.905 1823.480, 472.220 1823.707, 472.526 1823.817, 472.607 1823.981, 472.729 1824.421, 472.923 1824.886, 472.995 1825.196, 472.995 1825.395, 472.968 1825.626, 472.924 1825.886, 472.844 1826.091, 472.747 1826.351, 472.601 1826.582, 472.382 1826.663, 472.305 1826.839, 471.974 1826.859, 471.684 1826.857, 471.649 1826.795, 471.334 1826.568, 471.028 1826.519, 470.992 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1752.224, 486.924 1752.473, 486.929 1752.655, 486.903 1752.832, 486.870 1753.067, 486.799 1753.221, 486.718 1753.455, 486.589 1753.715, 486.331 1753.856, 486.043 1753.884, 485.786 1753.821, 485.480 1753.622, 485.211 1753.402, 485.028 1753.024, 484.856 1752.626, 484.791 1752.377, 484.787 1752.195, 484.812 1752.018, 484.846 1751.783, 484.917 1751.630, 484.999 1751.395, 485.127 1751.137, 485.385 1750.996, 485.672 1750.968, 485.929 1751.031, 486.235 1751.230, 486.503 1751.448, 486.687 1751.826, 486.859 1752.224, 486.924 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1690.941, 498.375 1691.141, 498.383 1691.305, 498.359 1691.338, 498.353 1691.440, 498.334 1691.649, 498.271 1691.974, 498.091 1692.189, 497.868 1692.291, 497.644 1692.302, 497.619 1692.334, 497.393 1692.275, 497.127 1692.145, 496.933 1691.927, 496.730 1691.603, 496.579 1691.264, 496.521 1691.064, 496.514 1690.900, 496.537 1690.765, 496.563 1690.556, 496.626 1690.236, 496.804 1690.232, 496.806 1690.017, 497.029 1689.904, 497.278 1689.872, 497.503 1689.931, 497.769 1690.061, 497.962 1690.171, 498.065 1690.279, 498.166 1690.602, 498.317 1690.941, 498.375 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1637.639, 502.141 1637.779, 502.272 1638.057, 502.405 1638.261, 502.444 1638.348, 502.457 1638.510, 502.464 1638.656, 502.443 1638.761, 502.422 1638.947, 502.367 1639.220, 502.210 1639.400, 502.016 1639.418, 501.975 1639.421, 501.969 1639.479, 501.838 1639.492, 501.799 1639.497, 501.770 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1638.220, 500.866 1638.195, 500.871 1638.009, 500.926 1637.737, 501.083 1637.599, 501.233 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1593.536, 502.476 1593.524, 502.465 1593.319, 502.366 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1554.067, 511.402 1554.091, 511.375 1554.156, 511.240 1554.184, 511.063 1554.149, 510.916 1554.138, 510.889 1554.072, 510.760 1553.933, 510.626 1553.767, 510.543 1553.731, 510.525 1553.595, 510.495 1553.519, 510.486 1553.413, 510.479 1553.298, 510.495 1553.237, 510.509 1553.093, 510.551 1552.902, 510.668 1552.777, 510.812 1552.712, 510.947 1552.685, 511.123 1552.719, 511.270 1552.720, 511.271 1552.731, 511.297 1552.796, 511.426 1552.934, 511.560 1553.088, 511.636 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1518.376, 514.530 1518.445, 514.537 1518.531, 514.543 1518.632, 514.529 1518.679, 514.518 1518.805, 514.481 1518.965, 514.381 1519.070, 514.256 1519.128, 514.140 1519.149, 513.987 1519.123, 513.860 1519.056, 513.725 1518.937, 513.609 1518.764, 513.522 1518.653, 513.495 1518.584, 513.488 1518.497, 513.481 1518.396, 513.495 1518.349, 513.507 1518.224, 513.543 1518.063, 513.643 1517.958, 513.768 1517.900, 513.885 1517.880, 514.037 1517.906, 514.164 1517.973, 514.299 1518.092, 514.415 1518.265, 514.502 1518.376, 514.530 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 807.704, 418.528 807.683, 418.700 807.806, 419.950 808.281, 420.990 808.925, 421.820 809.850, 422.495 810.618, 422.810 810.842, 422.902 811.944, 423.031 812.783, 422.898 813.096, 422.815 813.912, 422.486 814.850, 421.757 815.433, 420.940 815.776, 420.055 815.880, 419.160 815.870, 419.059 815.763, 417.912 815.294, 416.870 814.647, 416.042 813.726, 415.361 813.006, 415.068 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 684.361, 395.450 684.721, 396.273 685.439, 397.198 686.425, 397.855 687.306, 398.228 688.437, 398.368 689.394, 398.209 689.583, 398.177 690.240, 397.845 690.702, 397.597 691.165, 397.168 691.488, 396.787 691.743, 396.405 692.005, 395.794 692.192, 394.736 692.076, 394.034 691.995, 393.544 691.624, 392.705 690.912, 391.778 689.930, 391.115 689.047, 390.745 687.915, 390.599 686.856, 390.772 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 561.861, 408.500 561.821, 408.520 561.055, 409.287 561.050, 409.297 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 444.134, 413.641 444.020, 413.510 443.186, 412.905 443.029, 412.792 442.952, 412.764 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 317.996, 423.091 317.708, 423.069 317.696, 423.068 316.602, 423.235 316.068, 423.483 315.557, 423.721 315.390, 423.873 315.032, 424.200 314.847, 424.393 314.619, 424.743 314.458, 424.991 314.438, 425.079 314.250, 425.904 314.378, 426.632 314.428, 426.848 314.725, 427.505 315.106, 427.948 315.391, 428.278 315.403, 428.292 316.257, 428.840 316.430, 428.951 316.559, 428.992 317.408, 429.263 317.521, 429.300 317.927, 429.340 318.075, 429.355 318.681, 429.395 319.773, 429.226 320.710, 428.788 320.814, 428.739 321.059, 428.512 321.331, 428.258 321.520, 428.069 321.553, 428.017 321.686, 427.810 321.732, 427.738 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 193.196, 425.141 192.635, 425.564 192.105, 426.298 192.044, 426.616 191.942, 427.145 192.013, 427.820 192.395, 428.630 192.444, 428.682 193.091, 429.360 194.132, 429.970 195.233, 430.293 195.713, 430.345 195.842, 430.352 196.381, 430.381 197.440, 430.224 197.960, 429.990 198.444, 429.772 199.028, 429.325 199.556, 428.594 199.720, 427.751 199.683, 427.413 199.662, 427.230 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 76.955, 422.989 77.489, 422.646 77.919, 422.047 77.973, 421.971 78.131, 421.304 78.072, 420.573 77.670, 419.824 77.358, 419.522 76.972, 419.148 76.427, 418.843 75.933, 418.578 75.388, 418.417 75.373, 418.413 74.953, 418.302 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 828.515, 446.832 828.541, 447.103 828.836, 447.759 828.930, 447.967 829.055, 448.128 829.483, 448.680 830.249, 449.228 830.732, 449.431 831.097, 449.583 831.142, 449.588 832.015, 449.674 832.419, 449.622 832.740, 449.580 832.885, 449.526 833.048, 449.464 833.689, 449.222 834.424, 448.639 834.477, 448.597 834.638, 448.367 834.967, 447.900 835.004, 447.807 835.266, 447.163 835.315, 446.647 835.326, 446.537 835.340, 446.386 835.340, 446.343 835.341, 446.218 835.282, 445.630 835.254, 445.347 835.222, 445.275 834.959, 444.683 834.869, 444.482 834.314, 443.771 833.551, 443.217 833.134, 443.044 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 720.650, 419.234 720.703, 419.589 721.036, 420.321 721.623, 421.092 722.436, 421.635 723.201, 421.962 724.144, 422.066 724.542, 421.997 724.759, 421.959 725.108, 421.893 725.696, 421.628 726.051, 421.390 726.476, 421.043 726.963, 420.386 727.164, 419.848 727.200, 419.674 727.339, 418.955 727.267, 418.464 727.192, 417.952 726.856, 417.222 726.275, 416.449 725.465, 415.902 724.698, 415.577 723.754, 415.469 723.355, 415.539 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 615.218, 433.154 616.175, 433.245 617.128, 433.077 617.605, 432.835 618.055, 432.598 618.372, 432.279 618.700, 431.938 618.852, 431.657 619.108, 431.142 619.228, 430.303 619.112, 429.533 618.765, 428.668 618.138, 427.946 617.449, 427.472 616.604, 427.128 615.647, 427.032 614.692, 427.198 613.762, 427.677 613.113, 428.338 612.966, 428.623 612.705, 429.137 612.587, 429.978 612.701, 430.751 613.052, 431.617 613.683, 432.337 614.372, 432.814 615.218, 433.154 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 507.648, 435.793 508.212, 435.845 508.608, 435.877 509.544, 435.718 510.446, 435.268 511.069, 434.648 511.438, 433.901 511.534, 433.255 511.455, 432.389 511.066, 431.579 510.598, 431.062 510.405, 430.904 509.794, 430.457 508.924, 430.136 507.963, 430.049 507.026, 430.205 506.120, 430.656 505.494, 431.276 505.125, 432.026 505.026, 432.673 505.107, 433.542 505.500, 434.353 505.968, 434.873 506.166, 435.027 506.776, 435.475 507.648, 435.793 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 402.440, 424.639 401.819, 424.426 401.320, 424.380 400.864, 424.341 399.952, 424.485 399.076, 424.904 398.477, 425.482 398.195, 425.997 398.146, 426.182 397.997, 426.782 398.091, 427.420 398.117, 427.595 398.398, 428.160 398.542, 428.355 398.940, 428.838 399.767, 429.404 399.962, 429.470 400.651, 429.704 401.149, 429.751 401.604, 429.786 402.515, 429.640 403.388, 429.221 403.984, 428.644 404.262, 428.128 404.315, 427.946 404.460, 427.347 404.415, 427.033 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 293.539, 430.459 293.791, 430.538 294.228, 430.582 294.269, 430.585 294.730, 430.614 295.387, 430.512 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 187.144, 433.646 187.525, 433.687 188.063, 433.714 188.911, 433.588 189.714, 433.226 190.186, 432.867 190.607, 432.284 190.736, 431.612 190.680, 431.074 190.376, 430.432 189.821, 429.852 188.990, 429.366 188.109, 429.108 187.728, 429.067 187.189, 429.037 186.340, 429.163 185.534, 429.524 185.057, 429.882 184.635, 430.467 184.507, 431.141 184.561, 431.681 184.868, 432.325 185.427, 432.905 186.262, 433.390 187.144, 433.646 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 79.876, 446.079 80.311, 446.174 80.640, 446.215 81.205, 446.232 82.016, 446.112 82.650, 445.842 82.781, 445.776 82.865, 445.719 83.284, 445.437 83.670, 444.899 83.794, 444.359 83.748, 443.782 83.430, 443.194 83.113, 442.892 82.876, 442.664 82.440, 442.417 82.051, 442.223 81.616, 442.091 81.183, 441.992 80.853, 441.952 80.288, 441.932 79.476, 442.052 78.838, 442.320 78.709, 442.387 78.201, 442.726 77.814, 443.265 77.688, 443.807 77.735, 444.386 78.057, 444.975 78.373, 445.279 78.614, 445.505 79.049, 445.754 79.289, 445.871 79.441, 445.945 79.876, 446.079 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 847.444, 440.700 846.927, 440.771 846.917, 440.774 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 749.309, 446.020 748.993, 446.454 748.781, 447.053 748.674, 447.685 748.788, 448.528 749.086, 449.167 749.569, 449.807 750.245, 450.252 750.908, 450.541 751.699, 450.613 752.241, 450.538 752.484, 450.464 752.513, 450.455 753.033, 450.247 753.650, 449.773 753.693, 449.739 754.105, 449.173 754.318, 448.575 754.422, 447.944 754.311, 447.102 754.011, 446.465 753.532, 445.823 752.858, 445.375 752.193, 445.088 751.403, 445.012 750.861, 445.091 750.736, 445.126 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 653.649, 449.761 653.844, 449.990 654.449, 450.405 654.590, 450.462 655.151, 450.686 655.705, 450.738 655.861, 450.749 655.953, 450.756 656.415, 450.684 656.575, 450.647 656.759, 450.605 656.840, 450.568 657.194, 450.407 657.545, 450.188 657.844, 449.925 658.095, 449.618 658.245, 449.396 658.251, 449.387 658.450, 448.935 658.459, 448.880 658.562, 448.258 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 557.745, 454.960 557.684, 455.022 557.359, 455.667 557.282, 456.341 557.321, 456.708 557.349, 456.979 557.662, 457.668 557.757, 457.771 558.083, 458.125 558.207, 458.237 558.749, 458.631 559.470, 458.891 559.970, 458.942 560.274, 458.952 560.661, 458.889 561.066, 458.808 561.420, 458.626 561.534, 458.567 561.833, 458.412 562.299, 457.939 562.364, 457.873 562.688, 457.230 562.767, 456.558 562.698, 455.921 562.654, 455.823 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 462.811, 449.561 462.547, 449.821 462.253, 450.425 462.153, 450.957 462.167, 451.075 462.234, 451.652 462.572, 452.299 462.755, 452.513 462.937, 452.725 463.615, 453.201 464.345, 453.448 464.791, 453.494 464.902, 453.499 465.142, 453.508 465.912, 453.374 466.652, 453.005 467.078, 452.585 467.161, 452.502 467.455, 451.900 467.552, 451.369 467.535, 451.216 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 466.971, 449.834 466.773, 449.605 466.097, 449.127 465.369, 448.878 464.922, 448.833 464.620, 448.818 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 370.910, 442.402 370.522, 442.277 370.126, 442.236 369.738, 442.216 368.993, 442.338 368.280, 442.679 367.793, 443.148 367.550, 443.572 367.396, 444.202 367.502, 444.852 367.624, 445.109 367.721, 445.312 368.171, 445.852 368.855, 446.299 368.997, 446.344 369.585, 446.532 369.980, 446.574 370.368, 446.591 371.111, 446.468 371.823, 446.126 372.308, 445.659 372.548, 445.234 372.702, 444.606 372.644, 444.242 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 274.838, 443.729 274.212, 443.827 273.530, 444.145 273.167, 444.465 273.068, 444.579 272.798, 444.974 272.706, 445.397 272.671, 445.558 272.743, 446.032 272.980, 446.587 273.433, 447.087 274.115, 447.502 274.839, 447.717 275.188, 447.756 275.604, 447.771 275.665, 447.761 276.318, 447.657 276.999, 447.340 277.358, 447.019 277.459, 446.906 277.695, 446.556 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 178.825, 451.435 178.778, 451.456 178.392, 451.755 178.054, 452.224 177.952, 452.762 177.994, 453.200 178.133, 453.486 178.242, 453.710 178.692, 454.168 179.366, 454.547 179.760, 454.665 180.077, 454.743 180.381, 454.780 180.817, 454.790 181.499, 454.683 181.987, 454.461 182.145, 454.389 182.528, 454.089 182.866, 453.621 182.969, 453.086 182.925, 452.648 182.849, 452.490 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 83.451, 461.987 83.379, 462.087 83.280, 462.525 83.317, 462.982 83.571, 463.447 83.824, 463.692 83.986, 463.838 84.014, 463.864 84.362, 464.064 84.671, 464.206 85.019, 464.316 85.363, 464.382 85.627, 464.417 85.674, 464.418 86.074, 464.422 86.720, 464.322 86.905, 464.240 87.330, 464.050 87.729, 463.770 88.037, 463.342 88.037, 463.341 88.134, 462.905 88.099, 462.449 87.846, 461.985 87.593, 461.741 87.422, 461.584 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 857.864, 453.831 857.963, 454.060 858.367, 454.572 858.899, 454.962 859.175, 455.077 859.515, 455.218 860.160, 455.281 860.621, 455.225 860.694, 455.216 861.367, 454.958 861.926, 454.508 862.273, 454.007 862.354, 453.816 862.496, 453.481 862.561, 452.806 862.487, 452.179 862.479, 452.159 862.224, 451.562 861.818, 451.050 861.288, 450.657 861.000, 450.538 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 771.594, 474.721 771.876, 475.096 771.916, 475.123 772.336, 475.401 772.452, 475.477 772.678, 475.573 773.015, 475.716 773.542, 475.768 773.681, 475.766 774.015, 475.729 774.156, 475.714 774.676, 475.516 774.695, 475.509 774.828, 475.459 775.389, 475.019 775.599, 474.725 775.681, 474.610 775.738, 474.531 775.903, 474.089 775.927, 474.027 776.006, 473.475 775.920, 472.765 775.821, 472.558 775.712, 472.330 775.655, 472.210 775.257, 471.675 775.009, 471.512 774.766, 471.352 774.681, 471.296 774.217, 471.097 774.119, 471.055 773.594, 471.003 773.592, 471.003 773.453, 471.002 773.096, 471.043 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 687.102, 459.353 687.586, 459.400 687.777, 459.409 688.190, 459.351 688.461, 459.277 688.852, 459.111 689.129, 458.916 689.405, 458.695 689.750, 458.231 689.907, 457.838 690.018, 457.226 689.900, 456.541 689.679, 456.017 689.253, 455.498 688.725, 455.139 688.140, 454.900 687.656, 454.855 687.465, 454.843 687.052, 454.902 686.780, 454.974 686.389, 455.141 686.110, 455.334 685.836, 455.558 685.490, 456.022 685.330, 456.414 685.220, 457.028 685.341, 457.713 685.560, 458.238 685.989, 458.757 686.516, 459.116 687.102, 459.353 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 600.186, 456.956 600.163, 456.969 599.950, 457.179 599.707, 457.435 599.611, 457.619 599.423, 457.992 599.344, 458.573 599.418, 459.125 599.671, 459.719 600.120, 460.210 600.599, 460.550 600.672, 460.578 601.199, 460.774 601.268, 460.781 601.640, 460.818 601.876, 460.826 602.228, 460.772 602.548, 460.701 602.875, 460.545 603.201, 460.358 603.415, 460.150 603.655, 459.893 603.754, 459.710 603.940, 459.337 604.020, 458.757 603.944, 458.206 603.785, 457.829 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 515.243, 472.111 515.641, 472.155 515.915, 472.155 516.210, 472.110 516.570, 472.034 517.203, 471.710 517.639, 471.271 517.899, 470.749 517.964, 470.281 517.910, 469.684 517.640, 469.130 517.310, 468.757 516.748, 468.351 516.141, 468.145 515.743, 468.102 515.469, 468.099 515.174, 468.146 514.813, 468.219 514.179, 468.543 513.741, 468.983 513.481, 469.506 513.414, 469.975 513.469, 470.573 513.741, 471.127 514.072, 471.502 514.635, 471.906 515.243, 472.111 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 429.702, 472.938 430.058, 472.979 430.362, 472.979 430.605, 472.936 430.996, 472.866 431.605, 472.562 432.022, 472.151 432.258, 471.663 432.350, 471.225 432.276, 470.667 432.071, 470.261 431.990, 470.150 431.702, 469.800 431.136, 469.421 430.528, 469.229 430.172, 469.188 429.867, 469.186 429.232, 469.299 428.622, 469.602 428.204, 470.014 428.018, 470.396 427.968, 470.502 427.874, 470.941 427.950, 471.501 428.154, 471.908 428.238, 472.018 428.525, 472.369 429.093, 472.747 429.702, 472.938 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 345.918, 471.372 345.691, 471.230 345.090, 471.053 344.774, 471.015 344.446, 471.014 343.838, 471.119 343.255, 471.401 342.859, 471.782 342.652, 472.138 342.531, 472.644 342.624, 473.162 342.704, 473.337 342.796, 473.540 343.168, 473.968 343.733, 474.318 343.901, 474.367 344.335, 474.494 344.651, 474.533 344.978, 474.532 345.586, 474.426 346.167, 474.144 346.562, 473.763 346.767, 473.407 346.888, 472.903 346.797, 472.386 346.624, 472.008 346.325, 471.664 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 260.071, 462.033 259.996, 462.024 259.654, 462.019 259.074, 462.114 258.523, 462.372 258.224, 462.639 258.151, 462.723 257.928, 463.048 257.828, 463.515 257.882, 463.900 258.077, 464.342 258.446, 464.739 258.536, 464.792 259.000, 465.065 259.356, 465.169 259.574, 465.227 259.589, 465.231 259.867, 465.265 260.210, 465.269 260.788, 465.174 261.338, 464.915 261.635, 464.648 261.709, 464.564 261.930, 464.240 262.031, 463.774 261.976, 463.390 261.782, 462.949 261.528, 462.674 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 173.494, 465.089 173.261, 465.272 172.990, 465.648 172.908, 466.077 172.931, 466.328 172.941, 466.431 173.141, 466.836 173.504, 467.200 173.526, 467.212 173.819, 467.376 174.045, 467.499 174.361, 467.595 174.617, 467.651 174.860, 467.682 175.094, 467.684 175.212, 467.685 175.760, 467.596 176.270, 467.363 176.279, 467.359 176.589, 467.112 176.859, 466.738 176.941, 466.310 176.926, 466.153 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 87.901, 474.109 87.892, 474.148 87.921, 474.512 88.124, 474.881 88.327, 475.079 88.439, 475.178 88.476, 475.211 88.755, 475.373 89.001, 475.482 89.016, 475.486 89.279, 475.570 89.552, 475.618 89.764, 475.648 90.120, 475.647 90.636, 475.565 91.123, 475.346 91.441, 475.118 91.653, 474.823 91.687, 474.775 91.764, 474.423 91.761, 474.374 91.737, 474.060 91.535, 473.692 91.332, 473.494 91.313, 473.477 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 868.259, 472.870 868.134, 473.158 868.076, 473.727 868.142, 474.271 868.365, 474.790 868.713, 475.233 869.162, 475.556 869.295, 475.612 869.690, 475.779 870.174, 475.826 870.237, 475.824 870.698, 475.778 871.271, 475.553 871.746, 475.165 872.010, 474.785 872.042, 474.734 872.235, 474.290 872.242, 474.223 872.294, 473.721 872.227, 473.177 872.006, 472.658 871.657, 472.215 871.209, 471.891 870.976, 471.793 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 711.336, 483.813 711.401, 484.216 711.525, 484.505 711.599, 484.677 711.956, 485.111 712.417, 485.427 712.909, 485.618 713.331, 485.664 713.481, 485.656 713.582, 485.645 713.847, 485.617 714.245, 485.468 714.413, 485.405 714.502, 485.336 714.885, 485.041 715.179, 484.638 715.209, 484.555 715.305, 484.289 715.319, 484.226 715.407, 483.768 715.315, 483.188 715.180, 482.877 715.116, 482.728 714.761, 482.292 714.300, 481.978 713.808, 481.784 713.386, 481.740 713.236, 481.745 712.870, 481.786 712.652, 481.865 712.444, 481.944 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 636.085, 466.132 635.945, 466.079 635.558, 466.040 635.372, 466.036 635.054, 466.080 634.798, 466.146 634.501, 466.278 634.238, 466.444 634.038, 466.621 633.847, 466.848 633.749, 467.003 633.599, 467.329 633.522, 467.829 633.597, 468.310 633.803, 468.821 634.176, 469.241 634.598, 469.538 635.102, 469.727 635.489, 469.767 635.675, 469.769 635.993, 469.726 636.248, 469.658 636.546, 469.527 636.806, 469.360 637.008, 469.184 637.196, 468.956 637.297, 468.802 637.445, 468.476 637.523, 467.977 637.446, 467.497 637.242, 466.987 637.038, 466.755 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 555.804, 480.071 555.683, 480.195 555.454, 480.648 555.400, 481.117 555.421, 481.325 555.447, 481.576 555.469, 481.623 555.582, 481.867 555.594, 481.894 555.638, 481.988 555.668, 482.053 555.965, 482.381 556.436, 482.727 556.946, 482.901 557.298, 482.941 557.514, 482.935 557.786, 482.899 557.816, 482.892 558.074, 482.828 558.094, 482.818 558.323, 482.709 558.336, 482.702 558.616, 482.544 558.651, 482.508 558.953, 482.200 558.992, 482.161 559.220, 481.709 559.275, 481.240 559.227, 480.783 559.110, 480.529 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 477.622, 483.063 477.621, 483.071 477.637, 483.220 477.674, 483.555 477.908, 484.002 477.985, 484.092 478.137, 484.273 478.170, 484.310 478.625, 484.622 478.643, 484.635 478.951, 484.732 479.154, 484.796 479.472, 484.834 479.633, 484.830 479.713, 484.828 479.941, 484.795 480.254, 484.727 480.504, 484.599 480.580, 484.560 480.716, 484.491 480.776, 484.460 480.913, 484.324 481.135, 484.101 481.344, 483.677 481.409, 483.291 481.356, 482.808 481.124, 482.361 481.110, 482.345 480.862, 482.054 480.390, 481.729 479.905, 481.575 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 403.290, 483.182 403.247, 483.130 403.190, 483.061 402.721, 482.760 402.217, 482.609 401.933, 482.574 401.673, 482.578 401.486, 482.610 401.439, 482.618 401.153, 482.672 401.065, 482.716 400.868, 482.814 400.791, 482.852 400.654, 482.920 400.631, 482.942 400.313, 483.254 400.226, 483.425 400.204, 483.469 400.153, 483.569 400.124, 483.650 400.119, 483.668 400.050, 483.966 400.040, 484.009 400.107, 484.459 400.268, 484.792 400.463, 485.026 400.576, 485.161 400.808, 485.310 401.047, 485.463 401.550, 485.612 401.551, 485.612 401.836, 485.648 402.095, 485.642 402.283, 485.611 402.614, 485.547 403.055, 485.328 403.113, 485.299 403.453, 484.965 403.462, 484.947 403.612, 484.651 403.642, 484.571 403.710, 484.276 403.725, 484.212 403.724, 484.208 403.670, 483.842 403.664, 483.799 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 325.195, 481.344 324.981, 481.281 324.807, 481.234 324.554, 481.202 324.281, 481.206 323.785, 481.292 323.310, 481.522 323.049, 481.773 322.989, 481.831 322.814, 482.122 322.719, 482.530 322.779, 482.872 322.798, 482.947 322.934, 483.255 323.036, 483.370 323.241, 483.598 323.504, 483.757 323.647, 483.843 323.704, 483.878 324.024, 483.971 324.198, 484.017 324.276, 484.027 324.451, 484.050 324.724, 484.045 325.220, 483.958 325.665, 483.742 325.693, 483.728 326.015, 483.419 326.040, 483.377 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 247.296, 475.012 247.273, 475.012 246.805, 475.090 246.359, 475.300 246.114, 475.519 246.059, 475.584 245.980, 475.698 245.876, 475.848 245.797, 476.223 245.838, 476.535 245.929, 476.735 245.998, 476.888 246.297, 477.204 246.302, 477.207 246.748, 477.463 247.032, 477.548 247.226, 477.592 247.448, 477.622 247.579, 477.621 247.728, 477.620 248.196, 477.541 248.640, 477.331 248.884, 477.111 248.940, 477.048 249.022, 476.929 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 169.762, 477.329 169.678, 477.343 169.262, 477.534 169.011, 477.735 168.795, 478.035 168.730, 478.377 168.756, 478.661 168.917, 478.983 169.207, 479.271 169.424, 479.393 169.459, 479.413 169.641, 479.506 169.893, 479.584 170.099, 479.624 170.293, 479.650 170.576, 479.648 170.715, 479.625 171.015, 479.576 171.430, 479.384 171.680, 479.183 171.896, 478.884 171.960, 478.543 171.934, 478.259 171.774, 477.937 171.485, 477.650 171.473, 477.643 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 877.959, 483.128 878.206, 483.233 878.621, 483.274 878.829, 483.254 879.068, 483.231 879.246, 483.161 879.556, 483.037 879.787, 482.848 879.962, 482.704 880.191, 482.382 880.214, 482.335 880.381, 481.957 880.434, 481.472 880.396, 481.176 880.375, 481.004 880.188, 480.563 880.021, 480.352 879.888, 480.183 879.521, 479.918 879.508, 479.909 879.054, 479.717 878.638, 479.676 878.589, 479.680 878.462, 479.692 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 805.119, 477.375 805.322, 477.800 805.600, 478.170 806.001, 478.437 806.030, 478.450 806.429, 478.624 806.822, 478.664 806.837, 478.663 806.907, 478.660 807.268, 478.623 807.757, 478.435 808.164, 478.111 808.417, 477.751 808.564, 477.382 808.611, 476.975 808.573, 476.594 808.559, 476.454 808.353, 476.022 808.075, 475.653 807.674, 475.384 807.246, 475.197 806.859, 475.159 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 733.570, 486.798 733.851, 487.149 734.252, 487.422 734.667, 487.586 735.034, 487.625 735.152, 487.617 735.475, 487.585 735.959, 487.402 736.015, 487.358 736.363, 487.088 736.614, 486.740 736.739, 486.386 736.809, 485.991 736.735, 485.491 736.587, 485.158 736.558, 485.094 736.260, 484.720 735.859, 484.448 735.445, 484.283 735.077, 484.244 734.959, 484.250 734.636, 484.284 734.152, 484.466 734.081, 484.522 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 663.083, 490.454 663.422, 490.492 663.570, 490.483 663.854, 490.453 664.060, 490.383 664.328, 490.277 664.539, 490.121 664.724, 489.977 664.971, 489.645 665.091, 489.356 665.164, 488.928 665.090, 488.507 665.073, 488.452 664.923, 488.072 664.611, 487.716 664.241, 487.455 663.816, 487.299 663.477, 487.261 663.329, 487.268 663.045, 487.300 662.838, 487.368 662.570, 487.475 662.359, 487.629 662.174, 487.775 661.926, 488.107 661.805, 488.396 661.733, 488.824 661.806, 489.247 661.825, 489.301 661.975, 489.682 662.288, 490.038 662.658, 490.298 663.083, 490.454 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 591.757, 477.524 591.613, 477.561 591.385, 477.666 591.147, 477.807 591.000, 477.949 590.823, 478.140 590.758, 478.263 590.622, 478.533 590.568, 478.941 590.618, 479.339 590.800, 479.754 591.064, 480.038 591.122, 480.095 591.199, 480.150 591.460, 480.340 591.889, 480.491 592.201, 480.525 592.272, 480.524 592.372, 480.522 592.620, 480.490 592.852, 480.429 593.080, 480.325 593.316, 480.183 593.465, 480.042 593.640, 479.851 593.706, 479.728 593.841, 479.458 593.896, 479.050 593.844, 478.654 593.678, 478.271 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 521.825, 488.043 521.865, 488.021 521.979, 487.906 522.175, 487.709 522.188, 487.682 522.298, 487.462 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 521.891, 485.893 521.599, 485.686 521.545, 485.647 521.116, 485.507 520.834, 485.474 520.642, 485.479 520.621, 485.482 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 377.797, 484.750 378.112, 484.948 378.526, 485.069 378.664, 485.086 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 308.376, 485.965 308.245, 485.926 308.098, 485.890 307.897, 485.863 307.672, 485.868 307.271, 485.938 306.888, 486.123 306.628, 486.372 306.572, 486.464 306.484, 486.607 306.409, 486.934 306.455, 487.209 306.476, 487.269 306.583, 487.516 306.832, 487.791 307.201, 488.009 307.210, 488.014 307.465, 488.090 307.611, 488.125 307.812, 488.152 308.018, 488.147 308.037, 488.146 308.438, 488.076 308.820, 487.891 308.942, 487.774 309.079, 487.642 309.209, 487.430 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 237.139, 482.602 237.115, 482.602 236.738, 482.666 236.380, 482.835 236.180, 483.013 236.138, 483.063 235.989, 483.277 235.927, 483.577 235.959, 483.828 235.997, 483.912 236.088, 484.110 236.330, 484.362 236.694, 484.567 236.921, 484.636 237.080, 484.669 237.257, 484.693 237.403, 484.691 237.485, 484.690 237.862, 484.625 238.219, 484.456 238.418, 484.278 238.461, 484.229 238.609, 484.015 238.672, 483.715 238.639, 483.465 238.631, 483.446 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 884.356, 487.093 884.430, 487.270 884.689, 487.597 885.013, 487.830 885.211, 487.914 885.403, 487.996 885.761, 488.032 885.892, 488.019 886.143, 487.995 886.561, 487.828 886.908, 487.541 887.107, 487.267 887.268, 486.900 887.307, 486.565 887.316, 486.486 887.262, 486.083 887.190, 485.912 887.104, 485.706 886.845, 485.379 886.522, 485.146 886.404, 485.095 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 818.103, 488.077 818.203, 488.290 818.444, 488.610 818.785, 488.836 818.817, 488.853 819.156, 488.999 819.496, 489.034 819.615, 489.023 819.878, 488.998 820.297, 488.834 820.645, 488.554 820.862, 488.244 820.990, 487.928 821.027, 487.575 820.985, 487.129 820.891, 486.929 820.812, 486.761 820.571, 486.441 820.230, 486.214 820.198, 486.198 819.860, 486.051 819.520, 486.017 819.478, 486.020 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 752.158, 491.271 752.250, 491.388 752.306, 491.460 752.655, 491.696 752.881, 491.786 753.007, 491.836 753.326, 491.870 753.420, 491.862 753.705, 491.835 754.120, 491.676 754.303, 491.532 754.431, 491.431 754.466, 491.405 754.541, 491.299 754.627, 491.180 754.681, 491.104 754.793, 490.799 754.847, 490.457 754.789, 490.027 754.632, 489.683 754.512, 489.529 754.381, 489.361 754.031, 489.126 753.680, 488.985 753.361, 488.951 753.267, 488.958 752.982, 488.986 752.567, 489.144 752.435, 489.247 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 685.725, 498.815 685.721, 498.841 685.794, 499.251 685.930, 499.583 686.032, 499.702 686.193, 499.888 686.210, 499.901 686.250, 499.929 686.517, 500.116 686.628, 500.156 686.877, 500.247 687.063, 500.268 687.174, 500.281 687.326, 500.267 687.545, 500.246 687.831, 500.139 687.953, 500.093 688.164, 499.930 688.292, 499.832 688.370, 499.727 688.425, 499.651 688.483, 499.573 688.505, 499.543 688.582, 499.341 688.602, 499.290 688.628, 499.149 688.646, 499.054 688.670, 498.921 688.657, 498.849 688.604, 498.552 688.597, 498.511 688.461, 498.180 688.199, 497.874 687.988, 497.726 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 686.416, 497.686 686.099, 497.930 685.921, 498.171 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 621.588, 491.077 621.422, 491.058 621.284, 491.066 621.062, 491.090 620.874, 491.148 620.667, 491.234 620.474, 491.363 620.336, 491.481 620.195, 491.652 620.129, 491.755 620.019, 491.993 619.967, 492.344 620.018, 492.692 620.167, 493.048 620.437, 493.339 620.734, 493.554 621.097, 493.681 621.371, 493.712 621.508, 493.704 621.731, 493.680 621.919, 493.621 622.126, 493.535 622.318, 493.406 622.456, 493.288 622.596, 493.117 622.663, 493.015 622.772, 492.777 622.825, 492.426 622.773, 492.079 622.669, 491.828 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 555.098, 487.284 555.012, 487.325 554.802, 487.444 554.534, 487.717 554.372, 488.038 554.333, 488.371 554.366, 488.698 554.524, 489.035 554.735, 489.269 554.964, 489.437 555.070, 489.513 555.432, 489.634 555.683, 489.664 555.837, 489.657 556.030, 489.633 556.235, 489.580 556.253, 489.571 556.411, 489.498 556.620, 489.377 556.730, 489.265 556.887, 489.105 557.050, 488.784 557.088, 488.452 557.055, 488.125 556.898, 487.788 556.687, 487.554 556.525, 487.436 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 488.832, 489.542 488.921, 489.713 489.107, 489.932 489.439, 490.159 489.797, 490.272 490.023, 490.299 490.190, 490.293 490.315, 490.277 490.354, 490.271 490.572, 490.221 490.866, 490.070 490.940, 490.031 491.193, 489.777 491.251, 489.660 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 424.277, 490.972 424.480, 490.998 424.656, 490.992 424.794, 490.971 425.021, 490.924 425.370, 490.748 425.610, 490.512 425.744, 490.233 425.798, 489.978 425.755, 489.661 425.638, 489.426 425.425, 489.166 425.100, 488.954 424.750, 488.849 424.546, 488.824 424.370, 488.829 424.232, 488.850 424.006, 488.896 423.656, 489.072 423.416, 489.309 423.281, 489.588 423.227, 489.843 423.271, 490.160 423.387, 490.396 423.600, 490.656 423.927, 490.868 424.277, 490.972 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 358.741, 492.266 358.853, 492.295 359.034, 492.319 359.215, 492.313 359.329, 492.294 359.560, 492.251 359.889, 492.088 360.113, 491.870 360.226, 491.664 360.296, 491.378 360.246, 491.087 360.146, 490.870 359.938, 490.630 359.622, 490.436 359.394, 490.369 359.283, 490.339 359.102, 490.316 358.920, 490.321 358.807, 490.340 358.576, 490.383 358.246, 490.546 358.022, 490.764 357.908, 490.970 357.838, 491.256 357.888, 491.548 357.988, 491.765 358.197, 492.005 358.514, 492.199 358.741, 492.266 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 293.399, 494.111 293.521, 494.138 293.680, 494.159 293.864, 494.154 294.186, 494.096 294.493, 493.948 294.701, 493.749 294.819, 493.560 294.878, 493.299 294.843, 493.079 294.739, 492.834 294.537, 492.616 294.233, 492.439 294.030, 492.378 293.909, 492.351 293.749, 492.329 293.566, 492.335 293.243, 492.392 292.936, 492.540 292.728, 492.740 292.610, 492.929 292.551, 493.190 292.585, 493.410 292.690, 493.655 292.892, 493.873 293.196, 494.050 293.399, 494.111 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 890.542, 493.784 890.530, 493.889 890.576, 494.237 890.712, 494.560 890.935, 494.842 891.211, 495.040 891.279, 495.068 891.548, 495.184 891.856, 495.215 892.184, 495.183 892.543, 495.038 892.840, 494.791 893.013, 494.557 893.151, 494.240 893.163, 494.140 893.193, 493.885 893.146, 493.537 893.011, 493.215 892.788, 492.932 892.512, 492.734 892.490, 492.725 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 829.202, 494.538 829.250, 494.641 829.459, 494.917 829.750, 495.111 829.782, 495.128 830.071, 495.252 830.365, 495.283 830.482, 495.271 830.693, 495.251 831.053, 495.109 831.352, 494.867 831.538, 494.599 831.650, 494.328 831.680, 494.021 831.678, 493.980 831.646, 493.639 831.552, 493.437 831.499, 493.323 831.290, 493.047 831.000, 492.853 830.967, 492.836 830.679, 492.712 830.384, 492.681 830.312, 492.688 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 767.735, 494.252 767.750, 494.372 767.889, 494.670 768.102, 494.947 768.405, 495.151 768.704, 495.270 768.981, 495.300 769.306, 495.270 769.528, 495.184 769.662, 495.132 769.959, 494.898 770.144, 494.638 770.243, 494.375 770.273, 494.164 770.286, 494.079 770.239, 493.709 770.100, 493.411 769.888, 493.135 769.585, 492.931 769.286, 492.810 769.009, 492.781 768.684, 492.811 768.455, 492.899 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 708.299, 495.760 708.265, 495.735 708.245, 495.728 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 646.111, 505.646 646.352, 505.674 646.662, 505.645 646.815, 505.589 647.002, 505.518 647.159, 505.401 647.287, 505.302 647.465, 505.064 647.554, 504.854 647.604, 504.551 647.554, 504.247 647.430, 503.940 647.203, 503.689 646.941, 503.502 646.633, 503.394 646.393, 503.366 646.082, 503.395 645.928, 503.450 645.742, 503.522 645.584, 503.638 645.457, 503.738 645.279, 503.976 645.189, 504.186 645.139, 504.489 645.189, 504.794 645.313, 505.101 645.541, 505.351 645.803, 505.539 646.111, 505.646 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 585.169, 499.224 585.389, 499.251 585.513, 499.242 585.687, 499.224 585.854, 499.174 586.014, 499.105 586.185, 498.997 586.288, 498.902 586.415, 498.760 586.460, 498.678 586.557, 498.482 586.595, 498.196 586.560, 497.911 586.430, 497.620 586.243, 497.416 586.201, 497.383 585.962, 497.207 585.655, 497.104 585.435, 497.078 585.311, 497.086 585.137, 497.105 584.970, 497.154 584.810, 497.224 584.639, 497.331 584.536, 497.426 584.409, 497.568 584.364, 497.650 584.266, 497.846 584.229, 498.133 584.263, 498.419 584.393, 498.709 584.580, 498.913 584.623, 498.946 584.862, 499.122 585.169, 499.224 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 524.221, 499.108 524.422, 499.133 524.557, 499.125 524.707, 499.108 524.885, 499.060 525.021, 498.996 525.203, 498.894 525.422, 498.672 525.553, 498.411 525.584, 498.170 525.558, 497.874 525.424, 497.601 525.257, 497.409 524.976, 497.213 524.673, 497.116 524.472, 497.092 524.337, 497.099 524.187, 497.117 524.008, 497.163 523.873, 497.228 523.691, 497.329 523.471, 497.552 523.340, 497.813 523.309, 498.055 523.335, 498.351 523.470, 498.624 523.637, 498.816 523.918, 499.012 524.221, 499.108 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 463.383, 498.918 463.564, 498.941 463.706, 498.933 463.834, 498.917 464.018, 498.874 464.023, 498.871 464.319, 498.719 464.525, 498.513 464.644, 498.271 464.667, 498.145 464.684, 498.047 464.652, 497.773 464.546, 497.567 464.516, 497.520 464.368, 497.342 464.093, 497.159 463.798, 497.070 463.617, 497.047 463.475, 497.054 463.347, 497.070 463.162, 497.113 462.861, 497.268 462.655, 497.474 462.536, 497.716 462.495, 497.940 462.528, 498.215 462.634, 498.421 462.665, 498.468 462.812, 498.646 463.087, 498.829 463.383, 498.918 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 402.519, 500.222 402.603, 500.246 402.765, 500.267 402.912, 500.260 403.019, 500.245 403.207, 500.205 403.490, 500.062 403.684, 499.872 403.774, 499.690 403.791, 499.648 403.839, 499.441 403.801, 499.188 403.709, 498.998 403.535, 498.790 403.268, 498.622 403.066, 498.564 402.982, 498.540 402.820, 498.519 402.673, 498.525 402.566, 498.540 402.377, 498.580 402.094, 498.723 401.900, 498.914 401.809, 499.095 401.793, 499.137 401.745, 499.344 401.783, 499.598 401.875, 499.788 402.050, 499.996 402.317, 500.164 402.519, 500.222 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 341.672, 505.941 341.765, 505.961 341.909, 505.981 342.059, 505.974 342.147, 505.961 342.336, 505.922 342.601, 505.791 342.781, 505.616 342.815, 505.555 342.876, 505.448 342.931, 505.220 342.889, 504.988 342.868, 504.941 342.810, 504.813 342.700, 504.689 342.641, 504.623 342.384, 504.470 342.202, 504.416 342.109, 504.395 341.965, 504.375 341.815, 504.383 341.728, 504.396 341.538, 504.434 341.272, 504.565 341.092, 504.741 341.010, 504.887 340.997, 504.909 340.942, 505.137 340.985, 505.369 341.063, 505.544 341.233, 505.734 341.490, 505.887 341.672, 505.941 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 896.363, 501.753 896.574, 501.902 896.864, 502.027 896.950, 502.036 897.130, 502.055 897.305, 502.037 897.411, 502.026 897.719, 501.901 897.975, 501.687 898.125, 501.488 898.243, 501.214 898.280, 500.910 898.238, 500.609 898.236, 500.603 898.124, 500.333 897.977, 500.148 897.931, 500.089 897.695, 499.921 897.404, 499.796 897.344, 499.790 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 838.882, 502.272 838.759, 502.450 838.661, 502.683 838.637, 502.948 838.636, 502.980 838.665, 503.276 838.789, 503.546 838.971, 503.785 839.218, 503.949 839.250, 503.967 839.496, 504.071 839.750, 504.099 840.031, 504.071 840.104, 504.042 840.340, 503.948 840.502, 503.815 840.596, 503.738 840.756, 503.507 840.854, 503.275 840.877, 503.009 840.879, 502.978 840.850, 502.682 840.726, 502.412 840.544, 502.173 840.297, 502.009 840.265, 501.991 840.020, 501.886 839.765, 501.859 839.547, 501.881 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 781.523, 507.452 781.444, 507.564 781.357, 507.788 781.322, 508.047 781.360, 508.364 781.482, 508.623 781.662, 508.858 781.925, 509.035 782.179, 509.135 782.420, 509.162 782.699, 509.134 782.936, 509.041 783.004, 509.014 783.259, 508.811 783.417, 508.586 783.500, 508.373 783.505, 508.361 783.539, 508.103 783.501, 507.786 783.379, 507.527 783.200, 507.292 782.936, 507.115 782.683, 507.015 782.442, 506.987 782.163, 507.015 781.857, 507.135 781.773, 507.203 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 725.006, 508.069 725.232, 508.096 725.506, 508.069 725.806, 507.953 726.056, 507.757 726.213, 507.541 726.289, 507.325 726.334, 507.076 726.286, 506.771 726.178, 506.522 725.992, 506.296 725.745, 506.125 725.486, 506.028 725.260, 506.002 724.986, 506.029 724.685, 506.144 724.435, 506.340 724.278, 506.556 724.203, 506.773 724.157, 507.022 724.205, 507.327 724.312, 507.576 724.500, 507.802 724.746, 507.973 725.006, 508.069 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 667.134, 506.135 667.098, 506.344 667.144, 506.607 667.154, 506.634 667.159, 506.647 667.247, 506.872 667.439, 507.087 667.639, 507.230 667.667, 507.250 667.928, 507.342 668.019, 507.353 668.138, 507.367 668.194, 507.361 668.404, 507.341 668.696, 507.232 668.939, 507.045 669.092, 506.839 669.165, 506.657 669.197, 506.471 669.210, 506.396 669.193, 506.298 669.164, 506.133 669.155, 506.106 669.061, 505.868 668.870, 505.653 668.723, 505.548 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 610.891, 509.530 611.084, 509.554 611.341, 509.529 611.478, 509.483 611.623, 509.425 611.763, 509.328 611.859, 509.248 611.961, 509.122 612.006, 509.053 612.086, 508.881 612.122, 508.633 612.087, 508.384 611.980, 508.133 611.814, 507.955 611.786, 507.930 611.575, 507.776 611.315, 507.689 611.122, 507.665 610.865, 507.689 610.728, 507.736 610.583, 507.794 610.443, 507.890 610.347, 507.970 610.244, 508.097 610.199, 508.166 610.119, 508.338 610.083, 508.586 610.118, 508.835 610.226, 509.086 610.391, 509.265 610.420, 509.289 610.630, 509.444 610.891, 509.530 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 553.455, 506.194 553.393, 506.260 553.278, 506.486 553.251, 506.718 553.260, 506.799 553.275, 506.951 553.285, 506.973 553.386, 507.186 553.534, 507.353 553.633, 507.424 553.771, 507.521 554.027, 507.603 554.204, 507.625 554.313, 507.616 554.426, 507.605 554.448, 507.602 554.594, 507.559 554.718, 507.505 554.864, 507.415 554.866, 507.414 554.943, 507.339 555.023, 507.255 555.054, 507.221 555.169, 506.996 555.196, 506.764 555.172, 506.530 555.119, 506.418 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 497.293, 504.703 497.453, 504.723 497.569, 504.715 497.686, 504.702 497.838, 504.663 497.942, 504.611 498.097, 504.528 498.275, 504.348 498.380, 504.137 498.409, 503.941 498.385, 503.702 498.272, 503.482 498.140, 503.327 497.907, 503.169 497.657, 503.092 497.496, 503.072 497.381, 503.079 497.264, 503.093 497.112, 503.132 497.007, 503.183 496.853, 503.267 496.674, 503.447 496.569, 503.658 496.539, 503.854 496.564, 504.093 496.677, 504.313 496.809, 504.469 497.042, 504.626 497.293, 504.703 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 440.370, 509.818 440.434, 509.836 440.577, 509.856 440.697, 509.847 440.796, 509.836 440.950, 509.798 441.193, 509.673 441.360, 509.507 441.455, 509.313 441.491, 509.132 441.462, 508.912 441.379, 508.746 441.232, 508.567 441.007, 508.422 440.829, 508.371 440.766, 508.352 440.622, 508.333 440.503, 508.341 440.404, 508.353 440.249, 508.390 440.006, 508.515 439.839, 508.681 439.744, 508.876 439.708, 509.057 439.737, 509.277 439.820, 509.443 439.967, 509.623 440.192, 509.767 440.370, 509.818 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 383.992, 508.442 384.095, 508.436 384.178, 508.425 384.332, 508.391 384.559, 508.277 384.714, 508.125 384.756, 508.043 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 384.755, 507.469 384.736, 507.428 384.594, 507.263 384.378, 507.131 384.219, 507.084 384.147, 507.067 384.020, 507.049 383.898, 507.056 383.816, 507.067 383.661, 507.101 383.569, 507.147 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 900.774, 506.362 900.797, 506.526 900.895, 506.762 901.061, 506.973 901.263, 507.116 901.326, 507.143 901.513, 507.224 901.742, 507.248 901.984, 507.223 902.214, 507.129 902.248, 507.115 902.358, 507.022 902.467, 506.931 902.597, 506.761 902.698, 506.524 902.730, 506.264 902.722, 506.207 902.694, 506.005 902.596, 505.768 902.430, 505.558 902.228, 505.415 902.196, 505.401 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 847.014, 513.940 847.111, 514.151 847.268, 514.358 847.479, 514.496 847.509, 514.516 847.718, 514.603 847.938, 514.628 848.033, 514.618 848.179, 514.602 848.443, 514.495 848.663, 514.314 848.779, 514.149 848.800, 514.115 848.885, 513.917 848.909, 513.663 848.882, 513.407 848.838, 513.310 848.777, 513.177 848.619, 512.970 848.409, 512.831 848.379, 512.812 848.169, 512.725 847.950, 512.700 847.930, 512.702 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 793.352, 514.637 793.429, 514.799 793.581, 514.999 793.712, 515.087 793.809, 515.153 794.025, 515.237 794.234, 515.262 794.473, 515.237 794.735, 515.133 794.762, 515.111 794.953, 514.957 795.089, 514.763 795.166, 514.570 795.186, 514.410 795.194, 514.346 795.163, 514.075 795.120, 513.984 795.056, 513.850 794.904, 513.649 794.676, 513.496 794.460, 513.411 794.251, 513.387 794.012, 513.412 793.760, 513.511 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 740.365, 512.403 740.454, 512.436 740.651, 512.459 740.886, 512.436 741.059, 512.368 741.087, 512.357 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 741.433, 511.065 741.304, 510.906 741.089, 510.758 740.870, 510.676 740.673, 510.653 740.640, 510.656 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 687.005, 508.218 687.188, 508.240 687.416, 508.218 687.666, 508.123 687.875, 507.962 688.005, 507.784 688.065, 507.627 688.107, 507.402 688.062, 507.152 687.979, 506.947 687.818, 506.761 687.618, 506.621 687.397, 506.541 687.215, 506.520 686.987, 506.542 686.737, 506.636 686.528, 506.797 686.397, 506.975 686.337, 507.132 686.296, 507.358 686.341, 507.608 686.424, 507.813 686.585, 507.999 686.784, 508.139 687.005, 508.218 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 634.498, 511.190 634.447, 511.067 634.390, 511.006 634.284, 510.891 634.099, 510.758 633.879, 510.683 633.710, 510.663 633.490, 510.684 633.378, 510.724 633.248, 510.774 633.133, 510.858 633.046, 510.927 632.962, 511.037 632.919, 511.096 632.917, 511.102 632.854, 511.245 632.820, 511.459 632.837, 511.568 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 580.021, 512.887 579.974, 512.903 579.862, 512.949 579.740, 513.029 579.669, 513.093 579.578, 513.196 579.547, 513.251 579.478, 513.392 579.452, 513.592 579.475, 513.796 579.542, 513.942 579.568, 513.998 579.699, 514.144 579.899, 514.288 580.116, 514.357 580.271, 514.377 580.473, 514.358 580.481, 514.357 580.600, 514.318 580.712, 514.272 580.834, 514.192 580.906, 514.128 580.996, 514.024 581.027, 513.969 581.096, 513.829 581.122, 513.628 581.099, 513.425 581.085, 513.396 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 526.694, 508.539 526.583, 508.604 526.430, 508.760 526.338, 508.942 526.316, 509.112 526.334, 509.317 526.428, 509.506 526.545, 509.641 526.740, 509.776 526.859, 509.813 526.952, 509.841 527.092, 509.859 527.186, 509.851 527.291, 509.841 527.415, 509.805 527.510, 509.762 527.636, 509.689 527.658, 509.666 527.789, 509.533 527.881, 509.351 527.902, 509.181 527.884, 508.976 527.791, 508.787 527.674, 508.652 527.479, 508.517 527.267, 508.451 527.242, 508.448 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 473.654, 514.076 473.781, 514.093 473.878, 514.085 473.881, 514.085 473.969, 514.076 474.045, 514.056 474.096, 514.042 474.176, 514.003 474.219, 513.979 474.305, 513.933 474.449, 513.789 474.482, 513.721 474.532, 513.620 474.559, 513.462 474.547, 513.358 474.537, 513.271 474.462, 513.127 474.443, 513.097 474.339, 512.971 474.149, 512.846 473.944, 512.786 473.817, 512.769 473.720, 512.777 473.629, 512.787 473.503, 512.820 473.422, 512.860 473.293, 512.929 473.149, 513.074 473.066, 513.243 473.039, 513.401 473.058, 513.565 473.061, 513.591 473.135, 513.736 473.155, 513.766 473.259, 513.892 473.449, 514.016 473.654, 514.076 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 420.465, 514.789 420.519, 514.802 420.632, 514.818 420.731, 514.810 420.807, 514.802 420.933, 514.771 421.128, 514.671 421.261, 514.539 421.336, 514.385 421.366, 514.240 421.341, 514.067 421.277, 513.934 421.158, 513.792 420.977, 513.679 420.836, 513.637 420.782, 513.624 420.669, 513.608 420.570, 513.616 420.495, 513.624 420.368, 513.655 420.173, 513.754 420.040, 513.887 419.965, 514.041 419.935, 514.185 419.959, 514.359 420.024, 514.492 420.142, 514.634 420.324, 514.747 420.465, 514.789 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 904.971, 513.234 904.958, 513.334 904.990, 513.557 905.073, 513.759 905.216, 513.940 905.389, 514.061 905.462, 514.093 905.603, 514.154 905.800, 514.176 905.982, 514.157 906.007, 514.154 906.233, 514.060 906.379, 513.939 906.421, 513.902 906.533, 513.758 906.588, 513.627 906.619, 513.554 906.647, 513.332 906.638, 513.266 906.616, 513.108 906.532, 512.907 906.389, 512.726 906.217, 512.604 906.168, 512.583 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 854.815, 516.579 854.835, 516.591 855.013, 516.666 855.202, 516.687 855.409, 516.665 855.635, 516.573 855.744, 516.483 855.823, 516.418 855.923, 516.277 855.940, 516.247 856.014, 516.077 856.035, 515.859 856.011, 515.640 855.922, 515.442 855.786, 515.265 855.607, 515.146 855.579, 515.129 855.550, 515.117 855.401, 515.055 855.212, 515.033 855.006, 515.055 854.779, 515.147 854.764, 515.159 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 805.224, 512.278 805.089, 512.188 804.905, 512.115 804.725, 512.094 804.606, 512.106 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 755.092, 511.779 755.095, 511.760 755.064, 511.535 754.989, 511.369 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 703.529, 512.101 703.525, 512.102 703.346, 512.242 703.234, 512.395 703.185, 512.531 703.147, 512.725 703.184, 512.941 703.258, 513.118 703.376, 513.256 703.394, 513.278 703.567, 513.399 703.755, 513.466 703.914, 513.485 704.082, 513.469 704.109, 513.466 704.324, 513.384 704.503, 513.244 704.614, 513.091 704.664, 512.955 704.701, 512.761 704.669, 512.573 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 653.469, 513.826 653.616, 513.844 653.804, 513.825 654.011, 513.748 654.183, 513.616 654.291, 513.471 654.344, 513.342 654.375, 513.159 654.344, 512.972 654.270, 512.787 654.133, 512.637 653.973, 512.522 653.787, 512.458 653.640, 512.440 653.452, 512.458 653.246, 512.536 653.073, 512.668 652.966, 512.813 652.912, 512.942 652.881, 513.125 652.912, 513.311 652.986, 513.497 653.124, 513.647 653.283, 513.762 653.469, 513.826 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 603.529, 517.865 603.451, 517.840 603.315, 517.823 603.135, 517.840 603.037, 517.875 602.937, 517.914 602.837, 517.984 602.771, 518.038 602.697, 518.129 602.667, 518.176 602.610, 518.298 602.585, 518.471 602.605, 518.620 602.608, 518.647 602.685, 518.821 602.801, 518.948 602.970, 519.071 603.129, 519.123 603.153, 519.130 603.289, 519.148 603.469, 519.130 603.567, 519.095 603.667, 519.056 603.767, 518.986 603.833, 518.932 603.907, 518.841 603.937, 518.794 603.994, 518.672 604.019, 518.500 603.995, 518.323 603.922, 518.156 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 552.780, 513.389 552.747, 513.421 552.669, 513.504 552.590, 513.661 552.571, 513.822 552.587, 513.985 552.665, 514.148 552.719, 514.209 552.768, 514.265 552.932, 514.380 553.111, 514.436 553.233, 514.452 553.404, 514.436 553.505, 514.404 553.591, 514.367 553.663, 514.323 553.694, 514.303 553.748, 514.252 553.825, 514.168 553.905, 514.012 553.924, 513.851 553.907, 513.688 553.830, 513.525 553.822, 513.516 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 502.538, 514.011 502.543, 514.065 502.621, 514.215 502.712, 514.323 502.871, 514.430 503.043, 514.481 503.154, 514.496 503.232, 514.489 503.313, 514.481 503.417, 514.452 503.467, 514.428 503.489, 514.418 503.506, 514.408 503.595, 514.358 503.717, 514.234 503.790, 514.089 503.809, 513.953 503.793, 513.790 503.716, 513.640 503.624, 513.532 503.465, 513.425 503.294, 513.374 503.183, 513.359 503.180, 513.359 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 452.700, 515.898 452.690, 515.903 452.575, 516.018 452.510, 516.151 452.487, 516.277 452.506, 516.427 452.563, 516.542 452.663, 516.664 452.816, 516.763 452.939, 516.798 452.981, 516.809 453.080, 516.823 453.160, 516.816 453.229, 516.809 453.333, 516.782 453.394, 516.751 453.500, 516.696 453.614, 516.581 453.680, 516.448 453.703, 516.323 453.684, 516.172 453.626, 516.058 453.608, 516.035 453.527, 515.935 453.374, 515.837 453.251, 515.801 453.209, 515.790 453.146, 515.781 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 937.283, 421.462 937.163, 421.743 937.024, 422.733 937.178, 423.618 937.203, 423.721 937.509, 424.524 937.786, 424.865 938.060, 425.203 938.820, 425.837 939.737, 426.194 939.778, 426.199 940.607, 426.304 941.435, 426.190 942.312, 425.853 942.374, 425.829 943.152, 425.192 943.654, 424.511 943.859, 424.024 943.993, 423.706 944.136, 422.717 943.961, 421.728 943.651, 420.926 943.419, 420.637 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 941.120, 446.996 941.068, 447.121 940.950, 447.938 941.081, 448.693 941.098, 448.754 941.356, 449.439 941.471, 449.576 941.816, 449.991 941.872, 450.056 942.294, 450.400 942.453, 450.530 943.223, 450.837 943.588, 450.876 943.951, 450.915 944.647, 450.834 945.374, 450.547 945.433, 450.524 946.084, 449.983 946.312, 449.685 946.508, 449.429 946.790, 448.743 946.797, 448.697 946.911, 447.927 946.777, 447.173 946.766, 447.111 946.505, 446.426 946.382, 446.276 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 944.271, 457.729 944.437, 458.171 944.573, 458.334 944.813, 458.622 944.874, 458.695 945.185, 458.945 945.363, 459.089 945.854, 459.287 946.014, 459.351 946.628, 459.413 947.217, 459.349 947.880, 459.085 948.430, 458.626 948.580, 458.433 948.789, 458.163 949.005, 457.634 949.027, 457.580 949.111, 457.015 949.129, 456.894 949.040, 456.388 949.008, 456.209 948.786, 455.627 948.771, 455.608 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 946.827, 466.723 946.742, 466.933 946.655, 467.512 946.751, 468.062 946.759, 468.091 946.947, 468.590 947.190, 468.883 947.318, 469.038 947.733, 469.368 948.288, 469.594 948.808, 469.641 949.310, 469.592 949.874, 469.365 950.341, 468.973 950.647, 468.584 950.659, 468.555 950.849, 468.085 950.937, 467.506 950.834, 466.926 950.645, 466.428 950.527, 466.286 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 948.787, 483.434 948.860, 483.854 948.866, 483.870 949.027, 484.301 949.212, 484.526 949.345, 484.687 949.699, 484.963 949.897, 485.044 950.173, 485.158 950.600, 485.199 950.607, 485.200 950.761, 485.185 951.047, 485.157 951.140, 485.119 951.529, 484.960 951.533, 484.956 951.798, 484.738 951.865, 484.684 951.912, 484.638 951.928, 484.622 952.191, 484.297 952.363, 483.865 952.371, 483.811 952.438, 483.374 952.354, 482.900 952.351, 482.884 952.317, 482.792 952.246, 482.605 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 950.606, 485.525 950.648, 485.760 950.651, 485.772 950.790, 486.142 950.884, 486.257 951.062, 486.473 951.365, 486.708 951.771, 486.876 951.938, 486.892 952.143, 486.912 952.521, 486.875 952.705, 486.799 952.933, 486.706 953.221, 486.470 953.275, 486.416 953.500, 486.138 953.587, 485.918 953.647, 485.768 953.712, 485.348 953.638, 484.929 953.501, 484.566 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 952.669, 498.611 952.527, 498.725 952.481, 498.777 952.288, 499.012 952.161, 499.333 952.105, 499.691 952.167, 500.044 952.289, 500.369 952.524, 500.656 952.783, 500.853 952.812, 500.865 953.133, 501.000 953.453, 501.033 953.776, 500.999 954.131, 500.852 954.249, 500.758 954.379, 500.654 954.424, 500.601 954.618, 500.367 954.744, 500.045 954.801, 499.688 954.738, 499.334 954.737, 499.330 954.617, 499.009 954.382, 498.723 954.123, 498.525 954.088, 498.510 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 953.429, 509.629 953.429, 509.629 953.482, 509.935 953.587, 510.212 953.599, 510.227 953.746, 510.408 953.789, 510.460 953.894, 510.539 954.011, 510.627 954.059, 510.647 954.312, 510.754 954.478, 510.772 954.587, 510.784 954.865, 510.754 955.170, 510.626 955.306, 510.519 955.383, 510.458 955.408, 510.429 955.481, 510.341 955.589, 510.210 955.618, 510.135 955.679, 509.980 955.697, 509.932 955.707, 509.870 955.714, 509.825 955.716, 509.812 955.740, 509.662 955.744, 509.642 955.745, 509.634 955.746, 509.627 955.744, 509.617 955.731, 509.542 955.721, 509.484 955.692, 509.321 955.621, 509.131 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 956.455, 509.132 956.532, 508.935 956.534, 508.929 956.576, 508.667 956.561, 508.581 956.529, 508.405 956.450, 508.193 956.440, 508.167 956.267, 507.955 956.076, 507.810 955.920, 507.745 955.818, 507.702 955.582, 507.677 955.399, 507.696 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 955.667, 511.453 955.720, 511.595 955.737, 511.616 955.869, 511.778 955.963, 511.848 956.033, 511.900 956.254, 511.994 956.456, 512.016 956.661, 511.994 956.885, 511.900 957.042, 511.776 957.158, 511.636 957.193, 511.594 957.273, 511.389 957.287, 511.302 957.309, 511.165 957.269, 510.940 957.204, 510.766 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 373.792, -3.818 376.999, 0.307 381.081, 3.601 385.635, 5.750 390.215, 6.556 394.383, 5.951 397.743, 3.998 399.976, 0.888 400.870, -3.085 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 598.719, 169.581 599.829, 167.297 600.139, 164.689 599.847, 162.976 599.558, 161.686 598.861, 160.145 598.242, 159.110 597.097, 157.627 594.724, 155.670 591.970, 154.470 589.107, 154.150 587.508, 154.497 586.417, 154.744 584.917, 155.572 584.170, 156.199 583.113, 157.273 581.999, 159.581 581.833, 161.037 581.709, 162.214 581.975, 163.939 582.321, 165.229 582.997, 166.784 583.663, 167.798 584.795, 169.292 587.188, 171.220 589.938, 172.382 592.777, 172.671 594.373, 172.357 595.431, 172.062 596.937, 171.274 597.644, 170.617 598.719, 169.581 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 292.871, 182.745 291.725, 182.677 288.796, 183.283 286.463, 184.703 284.958, 186.796 284.433, 189.353 284.937, 192.120 285.214, 192.674 285.686, 193.621 286.417, 194.821 287.508, 196.040 288.721, 197.190 290.250, 198.239 291.620, 198.996 293.155, 199.616 294.827, 200.067 296.222, 200.241 297.422, 200.282 298.030, 200.303 300.918, 199.684 303.216, 198.273 304.703, 196.207 305.236, 193.684 304.761, 190.947 304.112, 189.679 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M -1.027, 163.489 2.293, 164.865 4.647, 165.385 5.663, 165.514 8.122, 165.660 11.173, 165.108 13.507, 163.785 14.546, 162.556 14.901, 161.818 15.445, 160.254 15.211, 157.878 13.967, 155.374 11.856, 153.035 8.721, 150.868 5.418, 149.467 3.058, 148.904 2.041, 148.792 -0.450, 148.601 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 694.512, 293.247 694.961, 292.416 695.413, 291.489 695.743, 289.551 695.404, 287.347 694.753, 286.000 694.487, 285.478 693.517, 284.218 691.810, 282.887 689.797, 282.140 688.296, 281.922 686.291, 282.155 684.329, 283.088 682.949, 284.468 682.045, 286.241 681.727, 288.192 682.083, 290.403 682.723, 291.759 683.016, 292.268 683.979, 293.534 685.698, 294.847 687.234, 295.422 687.710, 295.573 689.204, 295.802 691.199, 295.559 693.145, 294.622 694.512, 293.247 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 465.617, 273.908 466.413, 274.434 467.080, 274.851 468.058, 275.249 468.397, 275.387 469.324, 275.575 470.563, 275.777 472.655, 275.561 473.710, 275.120 474.627, 274.695 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 249.792, 295.962 252.117, 296.308 253.544, 296.162 254.278, 296.086 255.721, 295.625 257.443, 294.541 258.543, 293.014 258.914, 291.193 258.713, 289.904 258.521, 289.253 257.990, 288.085 256.619, 286.412 254.549, 284.926 252.344, 284.036 250.016, 283.674 248.575, 283.796 247.844, 283.888 246.375, 284.327 244.633, 285.417 243.524, 286.958 243.156, 288.798 243.348, 290.098 243.567, 290.752 244.092, 291.930 245.486, 293.608 247.578, 295.087 249.792, 295.962 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 25.839, 299.413 26.473, 300.608 28.016, 302.177 29.443, 303.040 30.297, 303.557 32.273, 304.228 32.686, 304.368 35.122, 304.684 36.872, 304.532 37.317, 304.469 39.089, 304.019 40.791, 302.995 41.816, 301.559 41.954, 301.081 42.188, 300.268 42.036, 298.628 41.959, 298.479 41.149, 296.924 39.629, 295.358 38.961, 294.949 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 740.836, 363.016 740.885, 363.381 740.957, 363.917 741.675, 365.398 741.717, 365.453 742.515, 366.500 743.872, 367.498 744.438, 367.724 745.189, 368.022 746.770, 368.259 746.833, 368.249 748.394, 368.004 749.119, 367.637 749.425, 367.481 749.986, 367.178 750.741, 366.512 751.562, 365.413 751.612, 365.277 751.877, 364.559 751.984, 364.161 752.131, 363.348 752.194, 362.996 752.001, 361.479 751.985, 361.351 751.970, 361.231 751.901, 361.087 751.262, 359.746 750.417, 358.648 749.069, 357.638 748.845, 357.551 747.907, 357.182 747.748, 357.120 747.524, 357.085 746.738, 356.961 746.311, 356.893 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 571.348, 329.771 573.031, 330.036 574.690, 329.820 576.297, 329.058 577.412, 327.960 578.099, 326.575 578.276, 325.065 578.115, 323.848 577.478, 322.257 576.355, 320.891 574.854, 319.884 573.702, 319.415 572.018, 319.138 570.351, 319.348 568.733, 320.107 567.610, 321.209 566.922, 322.603 566.752, 324.121 566.903, 325.344 567.554, 326.939 568.690, 328.300 570.199, 329.296 571.348, 329.771 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 398.992, 356.674 398.885, 356.632 397.119, 356.407 395.432, 356.630 394.374, 357.111 393.811, 357.367 393.092, 358.031 392.704, 358.417 392.274, 359.129 392.175, 359.292 391.812, 360.772 392.037, 362.322 392.553, 363.330 392.828, 363.791 393.560, 364.642 394.258, 365.154 394.514, 365.342 395.093, 365.767 396.731, 366.399 397.061, 366.439 398.494, 366.613 400.175, 366.385 400.480, 366.245 401.785, 365.646 402.884, 364.599 403.397, 363.723 403.532, 363.183 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 222.832, 327.302 222.341, 327.472 221.906, 327.742 220.997, 328.323 220.146, 329.504 219.873, 330.900 220.005, 331.925 220.595, 333.299 221.106, 333.885 221.687, 334.553 223.322, 335.641 225.052, 336.267 226.863, 336.495 228.334, 336.324 228.540, 336.300 229.691, 335.883 230.132, 335.624 231.024, 335.036 231.869, 333.863 232.145, 332.478 232.006, 331.460 231.823, 331.014 231.700, 330.725 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 47.852, 333.223 47.645, 333.972 47.759, 335.212 48.435, 336.491 49.592, 337.657 49.846, 337.807 51.305, 338.669 53.102, 339.249 53.636, 339.310 54.940, 339.460 56.602, 339.276 57.924, 338.883 58.236, 338.692 59.217, 338.092 59.999, 336.998 60.141, 336.463 60.269, 335.986 60.163, 334.756 59.500, 333.483 58.356, 332.320 58.233, 332.246 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 789.663, 375.438 789.746, 374.859 789.657, 374.015 789.587, 373.361 789.016, 372.103 788.273, 371.159 787.166, 370.311 786.017, 369.861 785.223, 369.740 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 635.087, 388.367 635.160, 388.802 635.255, 389.116 635.651, 390.099 636.545, 391.190 637.558, 391.862 637.754, 391.968 638.764, 392.402 639.307, 392.469 640.133, 392.571 641.505, 392.351 642.526, 391.833 642.839, 391.674 643.266, 391.239 643.772, 390.725 644.019, 390.271 644.368, 389.560 644.559, 388.316 644.369, 387.230 644.289, 386.914 644.050, 386.330 643.888, 385.935 643.003, 384.841 641.989, 384.173 641.800, 384.055 640.788, 383.624 639.417, 383.447 638.040, 383.662 637.369, 384.001 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 491.612, 390.611 491.126, 391.087 490.591, 392.186 490.434, 393.097 490.562, 394.387 491.147, 395.601 491.820, 396.337 492.130, 396.621 493.012, 397.255 494.295, 397.757 495.703, 397.911 497.072, 397.701 498.390, 397.062 499.299, 396.170 499.833, 395.076 499.981, 394.168 499.943, 393.761 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 498.441, 390.776 498.311, 390.650 497.427, 390.019 496.616, 389.696 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 350.643, 394.071 352.072, 394.218 353.424, 394.024 354.717, 393.428 355.326, 392.866 355.596, 392.595 356.044, 391.877 356.318, 390.726 356.119, 389.524 355.730, 388.720 355.468, 388.389 354.911, 387.707 353.664, 386.843 352.330, 386.364 350.899, 386.210 349.542, 386.401 348.244, 386.995 347.623, 387.554 347.360, 387.831 346.901, 388.549 346.629, 389.707 346.834, 390.914 347.221, 391.723 348.049, 392.737 349.305, 393.598 350.643, 394.071 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 205.891, 372.504 205.613, 372.652 204.882, 373.156 204.215, 374.081 204.006, 375.163 204.102, 375.988 204.501, 376.877 204.574, 377.039 205.442, 377.993 206.741, 378.808 208.114, 379.260 209.548, 379.408 210.874, 379.234 211.429, 379.007 211.800, 378.854 212.131, 378.686 212.851, 378.179 213.515, 377.258 213.726, 376.183 213.626, 375.362 213.550, 375.191 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 61.627, 372.646 61.558, 372.913 61.640, 373.863 62.160, 374.839 63.054, 375.725 63.603, 376.038 64.380, 376.482 65.773, 376.904 67.199, 377.042 68.492, 376.882 69.512, 376.533 70.519, 375.906 70.599, 375.794 71.130, 375.052 71.334, 374.239 71.257, 373.294 70.745, 372.322 70.000, 371.578 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 883.476, 195.428 883.377, 195.475 881.900, 196.895 880.682, 198.531 879.872, 200.686 879.617, 203.436 879.905, 205.265 880.138, 206.173 880.807, 207.834 882.269, 209.923 884.082, 211.295 886.061, 212.282 886.314, 212.407 888.733, 212.637 890.878, 212.384 893.232, 211.238 894.095, 210.440 894.725, 209.858 895.930, 208.223 896.756, 206.085 897.036, 203.343 896.722, 201.519 896.538, 200.596 895.846, 198.943 895.538, 198.450 894.407, 196.827 892.573, 195.425 890.350, 194.311 889.477, 194.217 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 903.031, 284.180 902.820, 286.107 903.074, 287.646 903.203, 288.166 903.755, 289.564 904.870, 291.081 905.225, 291.360 906.311, 292.214 908.033, 292.963 909.774, 293.196 911.626, 292.949 913.156, 292.186 913.464, 291.988 914.674, 291.041 915.614, 289.721 916.095, 288.561 916.281, 288.112 916.524, 286.050 916.253, 284.514 916.155, 283.985 915.588, 282.592 914.488, 281.059 914.375, 280.971 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 916.501, 337.220 916.433, 337.781 916.661, 339.127 916.742, 339.461 917.218, 340.684 917.765, 341.402 918.137, 341.891 919.254, 342.790 919.355, 342.871 920.785, 343.435 921.356, 343.526 922.258, 343.670 923.805, 343.425 925.107, 342.852 926.376, 341.863 926.632, 341.496 927.161, 340.737 927.573, 339.789 927.731, 339.424 927.901, 338.094 927.945, 337.742 927.647, 336.058 927.160, 334.838 926.676, 334.189 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 925.500, 359.208 925.450, 359.602 925.655, 360.788 925.710, 361.041 926.130, 362.119 926.472, 362.562 926.918, 363.142 927.978, 364.002 928.470, 364.188 929.209, 364.467 930.493, 364.686 931.829, 364.459 932.968, 363.987 934.065, 363.120 934.107, 363.060 934.744, 362.136 935.243, 361.011 935.300, 360.590 935.436, 359.570 935.183, 358.128 934.755, 357.053 934.570, 356.807 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 932.174, 390.403 932.147, 390.465 931.984, 391.676 932.165, 392.715 932.203, 392.885 932.566, 393.828 932.909, 394.262 933.233, 394.673 934.143, 395.422 935.242, 395.836 935.578, 395.887 936.292, 395.994 937.282, 395.831 937.432, 395.783 938.147, 395.511 938.411, 395.410 939.347, 394.657 939.947, 393.809 940.231, 393.153 940.357, 392.863 940.525, 391.654 940.312, 390.443 939.943, 389.501 939.725, 389.221 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 455.644, 517.756 455.681, 517.766 455.771, 517.778 455.843, 517.772 455.906, 517.766 455.999, 517.741 456.054, 517.713 456.149, 517.663 456.253, 517.560 456.312, 517.439 456.333, 517.326 456.316, 517.190 456.263, 517.086 456.247, 517.066 456.174, 516.976 456.036, 516.887 455.925, 516.855 455.887, 516.845 455.798, 516.832 455.725, 516.839 455.663, 516.845 455.569, 516.870 455.514, 516.897 455.419, 516.947 455.315, 517.051 455.256, 517.171 455.235, 517.285 455.252, 517.421 455.304, 517.524 455.321, 517.545 455.394, 517.635 455.532, 517.724 455.644, 517.756 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1535.689, 515.488 1535.751, 515.494 1535.833, 515.501 1535.925, 515.488 1535.971, 515.477 1536.086, 515.444 1536.235, 515.352 1536.333, 515.237 1536.386, 515.130 1536.406, 514.990 1536.380, 514.873 1536.319, 514.749 1536.209, 514.642 1536.049, 514.562 1535.944, 514.537 1535.883, 514.531 1535.801, 514.525 1535.709, 514.538 1535.663, 514.548 1535.548, 514.582 1535.399, 514.674 1535.301, 514.788 1535.248, 514.895 1535.228, 515.035 1535.254, 515.152 1535.315, 515.276 1535.425, 515.383 1535.584, 515.463 1535.689, 515.488 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 993.194, 518.694 993.120, 518.786 993.048, 518.974 993.013, 519.184 993.045, 519.391 993.121, 519.582 993.262, 519.752 993.407, 519.864 993.615, 519.952 993.806, 519.973 993.993, 519.952 994.198, 519.864 994.352, 519.751 994.489, 519.581 994.561, 519.393 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 962.817, 398.524 962.629, 398.976 962.424, 400.312 962.642, 401.645 962.828, 402.104 963.069, 402.698 963.664, 403.479 963.776, 403.625 964.799, 404.459 965.423, 404.694 966.033, 404.924 967.168, 405.090 968.296, 404.918 969.076, 404.621 969.533, 404.448 970.557, 403.608 970.780, 403.312 971.257, 402.677 971.555, 401.946 971.687, 401.622 971.899, 400.288 971.688, 398.953 971.442, 398.357 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 980.893, 516.020 980.859, 516.111 980.859, 516.113 980.821, 516.329 980.828, 516.371 980.856, 516.545 980.872, 516.587 980.933, 516.744 981.079, 516.920 981.232, 517.038 981.448, 517.129 981.646, 517.150 981.841, 517.128 982.055, 517.037 982.213, 516.919 982.242, 516.884 982.357, 516.742 982.361, 516.730 982.430, 516.546 982.453, 516.412 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 997.901, 404.507 997.825, 404.603 997.397, 405.707 997.155, 407.095 997.290, 408.036 997.353, 408.479 997.827, 409.583 998.031, 409.864 998.525, 410.542 999.608, 411.416 1000.914, 411.904 1002.063, 412.071 1003.275, 411.898 1004.548, 411.404 1004.886, 411.122 1005.601, 410.525 1006.227, 409.742 1006.370, 409.562 1006.792, 408.456 1006.832, 408.287 1007.041, 407.071 1006.918, 406.176 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 943.768, 513.338 943.800, 513.534 943.873, 513.722 944.009, 513.890 944.162, 514.003 944.365, 514.090 944.551, 514.110 944.741, 514.089 944.949, 514.003 945.092, 513.889 945.121, 513.855 945.232, 513.721 945.307, 513.531 945.339, 513.325 945.304, 513.116 945.232, 512.929 945.163, 512.844 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 895.144, 515.810 895.190, 515.830 895.370, 515.850 895.562, 515.829 895.772, 515.743 895.946, 515.597 896.047, 515.464 896.128, 515.276 896.153, 515.071 896.125, 514.864 896.046, 514.678 895.915, 514.511 895.754, 514.399 895.557, 514.314 895.376, 514.294 895.184, 514.314 895.096, 514.350 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 846.617, 515.294 846.662, 515.276 846.835, 515.133 846.926, 515.003 846.943, 514.976 847.010, 514.820 847.028, 514.620 847.008, 514.418 846.924, 514.236 846.800, 514.073 846.634, 513.964 846.611, 513.948 846.445, 513.880 846.272, 513.860 846.082, 513.880 845.873, 513.964 845.722, 514.089 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 797.920, 514.378 797.962, 514.273 797.971, 514.196 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 796.504, 513.889 796.483, 514.062 796.507, 514.276 796.513, 514.290 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 748.097, 515.065 748.252, 515.083 748.436, 515.064 748.639, 514.985 748.807, 514.852 748.912, 514.705 748.966, 514.559 748.993, 514.389 748.964, 514.183 748.888, 514.013 748.765, 513.861 748.596, 513.744 748.424, 513.680 748.269, 513.662 748.085, 513.680 747.883, 513.759 747.714, 513.893 747.609, 514.040 747.555, 514.186 747.528, 514.356 747.557, 514.562 747.633, 514.732 747.756, 514.884 747.925, 515.001 748.097, 515.065 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 699.250, 513.767 699.189, 513.773 698.992, 513.848 698.828, 513.976 698.725, 514.116 698.680, 514.241 698.646, 514.419 698.680, 514.616 698.747, 514.778 698.872, 514.924 699.031, 515.035 699.203, 515.096 699.348, 515.114 699.527, 515.096 699.724, 515.021 699.888, 514.893 699.990, 514.752 700.036, 514.628 700.070, 514.450 700.036, 514.253 699.969, 514.091 699.844, 513.945 699.732, 513.867 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 650.331, 517.820 650.464, 517.836 650.636, 517.819 650.825, 517.748 650.983, 517.628 651.081, 517.495 651.131, 517.377 651.158, 517.210 651.130, 517.039 651.062, 516.870 650.937, 516.733 650.791, 516.628 650.621, 516.571 650.487, 516.554 650.315, 516.571 650.126, 516.642 649.968, 516.763 649.870, 516.896 649.820, 517.014 649.793, 517.181 649.820, 517.352 649.889, 517.520 650.014, 517.657 650.160, 517.762 650.331, 517.820 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 601.793, 519.114 601.787, 519.112 601.664, 519.096 601.499, 519.112 601.409, 519.144 601.318, 519.180 601.227, 519.244 601.167, 519.293 601.099, 519.376 601.072, 519.418 601.020, 519.530 600.998, 519.687 601.019, 519.848 601.089, 520.007 601.194, 520.122 601.348, 520.234 601.516, 520.288 601.639, 520.304 601.803, 520.288 601.893, 520.256 601.984, 520.220 602.076, 520.156 602.135, 520.107 602.203, 520.024 602.230, 519.982 602.282, 519.870 602.286, 519.841 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 552.753, 515.115 552.720, 515.129 552.626, 515.188 552.577, 515.234 552.506, 515.311 552.434, 515.453 552.417, 515.599 552.432, 515.748 552.502, 515.896 552.596, 516.002 552.746, 516.107 552.908, 516.158 553.020, 516.172 553.175, 516.157 553.267, 516.128 553.345, 516.095 553.439, 516.036 553.488, 515.990 553.559, 515.914 553.631, 515.771 553.648, 515.625 553.633, 515.476 553.563, 515.329 553.469, 515.223 553.417, 515.186 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 504.266, 516.874 504.366, 516.887 504.511, 516.874 504.604, 516.847 504.670, 516.817 504.766, 516.762 504.877, 516.649 504.942, 516.518 504.960, 516.394 504.946, 516.246 504.876, 516.111 504.793, 516.013 504.648, 515.916 504.493, 515.870 504.393, 515.856 504.321, 515.863 504.248, 515.870 504.154, 515.896 504.088, 515.927 503.993, 515.981 503.881, 516.094 503.816, 516.226 503.798, 516.349 503.812, 516.497 503.883, 516.633 503.966, 516.731 504.110, 516.828 504.266, 516.874 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1843.896, 474.124 1843.861, 474.157 1843.686, 474.321 1843.521, 474.625 1843.502, 474.924 1843.563, 475.215 1843.772, 475.497 1844.031, 475.686 1844.440, 475.865 1844.872, 475.932 1845.165, 475.933 1845.346, 475.907 1845.567, 475.868 1845.805, 475.794 1846.002, 475.705 1846.240, 475.571 1846.358, 475.462 1846.532, 475.298 1846.698, 474.994 1846.718, 474.694 1846.657, 474.403 1846.447, 474.120 1846.426, 474.105 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1772.140, 491.860 1772.375, 491.865 1772.541, 491.841 1772.712, 491.812 1772.927, 491.746 1773.076, 491.673 1773.291, 491.553 1773.534, 491.317 1773.668, 491.052 1773.691, 490.813 1773.635, 490.531 1773.450, 490.283 1773.242, 490.112 1772.891, 489.953 1772.520, 489.892 1772.284, 489.887 1772.118, 489.911 1771.948, 489.940 1771.733, 490.006 1771.584, 490.080 1771.369, 490.199 1771.127, 490.436 1770.994, 490.701 1770.970, 490.939 1771.026, 491.220 1771.211, 491.468 1771.418, 491.639 1771.769, 491.799 1772.140, 491.860 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1710.414, 498.128 1710.462, 498.130 1710.611, 498.109 1710.742, 498.085 1710.933, 498.027 1711.237, 497.861 1711.438, 497.655 1711.546, 497.426 1711.573, 497.217 1711.520, 496.972 1711.396, 496.793 1711.359, 496.756 1711.193, 496.606 1710.893, 496.466 1710.578, 496.413 1710.388, 496.406 1710.239, 496.428 1710.108, 496.452 1709.917, 496.510 1709.614, 496.676 1709.413, 496.881 1709.345, 497.028 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1658.222, 499.684 1658.203, 499.602 1658.104, 499.446 1657.930, 499.282 1657.672, 499.160 1657.479, 499.125 1657.402, 499.112 1657.248, 499.107 1657.114, 499.125 1657.013, 499.146 1656.843, 499.196 1656.589, 499.341 1656.469, 499.468 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1611.276, 508.048 1611.348, 508.057 1611.472, 508.064 1611.591, 508.047 1611.669, 508.032 1611.819, 507.987 1612.032, 507.863 1612.173, 507.708 1612.238, 507.565 1612.243, 507.536 1612.273, 507.377 1612.227, 507.192 1612.148, 507.055 1611.999, 506.912 1611.779, 506.805 1611.621, 506.774 1611.548, 506.764 1611.424, 506.757 1611.305, 506.774 1611.228, 506.790 1611.078, 506.834 1610.865, 506.959 1610.724, 507.113 1610.659, 507.256 1610.625, 507.444 1610.670, 507.630 1610.749, 507.767 1610.898, 507.909 1611.118, 508.016 1611.276, 508.048 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1571.951, 511.449 1571.958, 511.404 1571.924, 511.269 1571.917, 511.244 1571.854, 511.125 1571.726, 511.002 1571.538, 510.910 1571.410, 510.881 1571.343, 510.873 1571.242, 510.867 1571.137, 510.882 1571.078, 510.895 1570.946, 510.933 1570.768, 511.040 1570.651, 511.173 1570.593, 511.297 1570.566, 511.459 1570.599, 511.594 1570.607, 511.619 1570.670, 511.738 1570.797, 511.861 1570.985, 511.953 1571.113, 511.982 1571.181, 511.990 1571.240, 511.994 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1490.040, 518.841 1490.108, 518.847 1490.186, 518.854 1490.282, 518.840 1490.322, 518.830 1490.442, 518.796 1490.590, 518.702 1490.669, 518.606 1490.686, 518.584 1490.742, 518.474 1490.760, 518.330 1490.738, 518.210 1490.674, 518.082 1490.563, 517.973 1490.461, 517.919 1490.401, 517.890 1490.301, 517.864 1490.233, 517.858 1490.156, 517.851 1490.059, 517.864 1490.019, 517.875 1489.900, 517.909 1489.751, 518.003 1489.673, 518.099 1489.655, 518.120 1489.599, 518.231 1489.581, 518.374 1489.604, 518.495 1489.667, 518.622 1489.779, 518.732 1489.880, 518.785 1489.940, 518.814 1490.040, 518.841 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1440.112, 520.087 1440.267, 520.101 1440.375, 520.087 1440.541, 520.038 1440.695, 519.936 1440.784, 519.832 1440.859, 519.689 1440.874, 519.533 1440.855, 519.402 1440.784, 519.263 1440.665, 519.144 1440.563, 519.086 1440.492, 519.055 1440.393, 519.026 1440.237, 519.012 1440.130, 519.026 1439.964, 519.075 1439.810, 519.177 1439.721, 519.281 1439.646, 519.424 1439.631, 519.580 1439.650, 519.711 1439.720, 519.849 1439.840, 519.968 1439.941, 520.026 1440.012, 520.058 1440.112, 520.087 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1389.966, 519.102 1389.903, 519.146 1389.803, 519.259 1389.728, 519.413 1389.713, 519.571 1389.731, 519.724 1389.809, 519.874 1389.884, 519.955 1389.936, 520.003 1390.036, 520.066 1390.119, 520.100 1390.217, 520.131 1390.382, 520.147 1390.501, 520.131 1390.674, 520.078 1390.833, 519.968 1390.933, 519.855 1391.008, 519.700 1391.023, 519.543 1391.005, 519.390 1390.928, 519.240 1390.852, 519.159 1390.800, 519.111 1390.700, 519.048 1390.628, 519.018 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1340.003, 519.258 1339.964, 519.300 1339.891, 519.465 1339.868, 519.633 1339.892, 519.796 1339.947, 519.912 1339.976, 519.956 1340.047, 520.043 1340.110, 520.094 1340.205, 520.161 1340.302, 520.197 1340.396, 520.231 1340.569, 520.247 1340.698, 520.230 1340.875, 520.174 1341.036, 520.057 1341.147, 519.937 1341.220, 519.771 1341.242, 519.604 1341.219, 519.440 1341.164, 519.324 1341.135, 519.280 1341.064, 519.194 1341.001, 519.143 1340.905, 519.076 1340.808, 519.039 1340.715, 519.006 1340.542, 518.990 1340.412, 519.006 1340.254, 519.057 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1290.824, 518.383 1290.788, 518.380 1290.647, 518.397 1290.469, 518.457 1290.316, 518.567 1290.185, 518.709 1290.114, 518.884 1290.085, 519.062 1290.114, 519.235 1290.166, 519.358 1290.269, 519.496 1290.434, 519.621 1290.632, 519.695 1290.812, 519.712 1290.953, 519.695 1291.131, 519.635 1291.284, 519.525 1291.415, 519.383 1291.487, 519.208 1291.516, 519.030 1291.510, 518.997 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1240.602, 517.562 1240.716, 517.650 1240.920, 517.728 1241.106, 517.746 1241.257, 517.727 1241.436, 517.664 1241.601, 517.549 1241.731, 517.399 1241.801, 517.230 1241.836, 517.028 1241.825, 516.971 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1241.674, 516.609 1241.646, 516.570 1241.551, 516.497 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1191.353, 520.509 1191.543, 520.528 1191.703, 520.509 1191.881, 520.444 1192.056, 520.323 1192.182, 520.168 1192.261, 519.992 1192.291, 519.781 1192.262, 519.606 1192.206, 519.456 1192.098, 519.305 1191.923, 519.168 1191.714, 519.087 1191.524, 519.068 1191.364, 519.087 1191.187, 519.153 1191.011, 519.273 1190.885, 519.429 1190.807, 519.604 1190.777, 519.815 1190.805, 519.990 1190.861, 520.140 1190.970, 520.291 1191.144, 520.428 1191.353, 520.509 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1142.421, 512.855 1142.329, 512.781 1142.118, 512.698 1141.924, 512.679 1141.755, 512.698 1141.582, 512.767 1141.397, 512.891 1141.275, 513.053 1141.188, 513.233 1141.165, 513.452 1141.187, 513.632 1141.217, 513.708 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1092.329, 518.734 1092.523, 518.755 1092.700, 518.734 1092.868, 518.665 1093.062, 518.538 1093.188, 518.371 1093.272, 518.187 1093.293, 517.982 1093.275, 517.779 1093.206, 517.620 1093.188, 517.592 1093.096, 517.460 1092.919, 517.315 1092.706, 517.230 1092.512, 517.210 1092.335, 517.230 1092.167, 517.300 1091.974, 517.427 1091.848, 517.593 1091.763, 517.777 1091.742, 517.983 1091.761, 518.186 1091.830, 518.344 1091.847, 518.372 1091.940, 518.504 1092.117, 518.649 1092.329, 518.734 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1042.885, 515.200 1042.731, 515.268 1042.569, 515.381 1042.437, 515.549 1042.358, 515.736 1042.330, 515.944 1042.356, 516.150 1042.437, 516.339 1042.540, 516.473 1042.581, 516.508 1042.715, 516.620 1042.927, 516.706 1043.120, 516.727 1043.302, 516.706 1043.501, 516.619 1043.663, 516.507 1043.795, 516.338 1043.846, 516.217 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 419.781, 518.183 419.828, 518.193 419.924, 518.207 420.009, 518.200 420.074, 518.193 420.182, 518.166 420.348, 518.081 420.462, 517.968 420.526, 517.836 420.552, 517.712 420.531, 517.564 420.476, 517.451 420.374, 517.330 420.219, 517.233 420.099, 517.197 420.052, 517.187 419.956, 517.173 419.872, 517.180 419.807, 517.187 419.698, 517.214 419.532, 517.299 419.418, 517.412 419.354, 517.544 419.328, 517.668 419.349, 517.816 419.404, 517.929 419.506, 518.050 419.661, 518.147 419.781, 518.183 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 384.858, 510.938 384.919, 510.951 385.028, 510.967 385.132, 510.960 385.202, 510.951 385.335, 510.921 385.529, 510.823 385.662, 510.693 385.726, 510.567 385.735, 510.540 385.769, 510.398 385.741, 510.226 385.680, 510.096 385.559, 509.955 385.374, 509.842 385.237, 509.802 385.176, 509.787 385.067, 509.772 384.963, 509.779 384.893, 509.788 384.760, 509.817 384.566, 509.915 384.433, 510.046 384.369, 510.171 384.360, 510.198 384.326, 510.341 384.353, 510.513 384.414, 510.643 384.536, 510.784 384.721, 510.897 384.858, 510.938 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 344.526, 504.545 344.532, 504.583 344.600, 504.733 344.745, 504.897 344.966, 505.028 345.122, 505.075 345.201, 505.092 345.325, 505.109 345.453, 505.103 345.529, 505.092 345.691, 505.058 345.919, 504.946 346.074, 504.795 346.154, 504.651 346.202, 504.455 346.166, 504.256 346.098, 504.105 345.953, 503.942 345.732, 503.810 345.577, 503.764 345.497, 503.746 345.373, 503.729 345.245, 503.736 345.169, 503.747 345.007, 503.780 344.934, 503.816 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 299.371, 504.549 299.475, 504.569 299.613, 504.588 299.770, 504.581 299.850, 504.568 300.048, 504.530 300.312, 504.401 300.491, 504.229 300.592, 504.064 300.643, 503.839 300.612, 503.648 300.597, 503.611 300.523, 503.439 300.350, 503.252 300.089, 503.101 299.914, 503.048 299.811, 503.027 299.672, 503.008 299.515, 503.015 299.435, 503.028 299.237, 503.065 298.972, 503.194 298.793, 503.367 298.692, 503.532 298.641, 503.756 298.671, 503.948 298.761, 504.157 298.934, 504.345 299.196, 504.495 299.371, 504.549 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 247.376, 489.466 247.273, 489.451 247.079, 489.456 246.755, 489.512 246.447, 489.658 246.278, 489.813 246.240, 489.855 246.113, 490.041 246.059, 490.298 246.087, 490.516 246.198, 490.757 246.405, 490.973 246.716, 491.149 246.912, 491.209 247.046, 491.236 247.200, 491.257 247.393, 491.252 247.717, 491.196 248.024, 491.049 248.193, 490.894 248.231, 490.853 248.357, 490.667 248.412, 490.410 248.383, 490.193 248.300, 490.011 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 185.060, 486.153 184.824, 486.192 184.465, 486.359 184.253, 486.535 184.066, 486.795 184.008, 487.090 184.033, 487.337 184.169, 487.614 184.418, 487.861 184.637, 487.985 184.789, 488.062 185.008, 488.131 185.182, 488.162 185.351, 488.186 185.591, 488.182 185.969, 488.118 186.327, 487.951 186.538, 487.775 186.725, 487.516 186.782, 487.221 186.758, 486.974 186.622, 486.698 186.394, 486.470 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 110.858, 479.476 110.770, 479.541 110.558, 479.837 110.495, 480.142 110.516, 480.454 110.686, 480.770 110.863, 480.941 110.985, 481.054 111.227, 481.193 111.429, 481.285 111.672, 481.362 111.898, 481.400 112.083, 481.427 112.382, 481.424 112.823, 481.352 113.239, 481.163 113.505, 480.965 113.718, 480.670 113.779, 480.365 113.759, 480.053 113.590, 479.737 113.412, 479.567 113.292, 479.454 113.278, 479.446 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 22.098, 471.011 21.913, 471.270 21.820, 471.617 21.859, 471.974 21.998, 472.231 22.073, 472.338 22.264, 472.532 22.437, 472.663 22.703, 472.822 22.974, 472.930 23.241, 473.017 23.539, 473.065 23.738, 473.094 24.114, 473.094 24.633, 473.014 25.057, 472.832 25.121, 472.799 25.460, 472.576 25.701, 472.239 25.793, 471.893 25.754, 471.536 25.616, 471.280 25.541, 471.173 25.351, 470.979 25.179, 470.848 24.913, 470.689 24.643, 470.580 24.376, 470.494 24.236, 470.471 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1099.745, 371.378 1099.540, 371.458 1098.527, 372.282 1097.780, 373.200 1097.272, 374.417 1097.176, 375.297 1097.151, 375.523 1097.165, 375.864 1097.259, 376.838 1097.666, 377.862 1098.321, 378.770 1099.375, 379.570 1100.330, 379.982 1101.622, 380.194 1102.847, 380.003 1103.706, 379.666 1103.986, 379.557 1105.005, 378.741 1105.749, 377.820 1106.264, 376.604 1106.322, 376.045 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1238.812, 383.101 1238.672, 383.030 1237.359, 382.827 1236.073, 383.006 1235.049, 383.431 1233.941, 384.201 1233.141, 385.269 1232.703, 386.225 1232.492, 387.590 1232.719, 388.800 1233.006, 389.491 1233.319, 389.930 1233.509, 390.163 1233.667, 390.356 1234.219, 390.849 1234.725, 391.121 1235.486, 391.496 1235.498, 391.501 1236.806, 391.709 1238.091, 391.538 1239.112, 391.109 1240.226, 390.347 1241.035, 389.282 1241.469, 388.322 1241.687, 386.954 1241.464, 385.739 1241.169, 385.048 1240.864, 384.602 1240.613, 384.309 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1372.319, 386.606 1373.647, 386.440 1374.835, 385.934 1375.743, 385.314 1376.639, 384.304 1377.150, 383.106 1377.269, 382.107 1377.133, 380.957 1376.589, 379.884 1375.701, 379.016 1374.424, 378.404 1373.109, 378.215 1371.780, 378.388 1370.595, 378.901 1369.686, 379.518 1368.800, 380.531 1368.297, 381.726 1368.172, 382.722 1368.312, 383.866 1368.855, 384.934 1369.738, 385.799 1371.008, 386.413 1372.319, 386.606 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1508.511, 388.323 1509.870, 388.168 1511.121, 387.694 1511.920, 387.109 1512.288, 386.837 1512.887, 386.160 1513.476, 385.035 1513.627, 383.844 1513.438, 383.012 1513.325, 382.704 1512.947, 382.003 1512.080, 381.185 1510.819, 380.608 1509.508, 380.429 1508.147, 380.590 1506.900, 381.071 1506.100, 381.653 1505.741, 381.932 1505.141, 382.604 1504.561, 383.728 1504.415, 384.913 1504.598, 385.742 1504.719, 386.045 1505.088, 386.747 1505.949, 387.562 1507.204, 388.140 1508.511, 388.323 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1641.648, 397.083 1641.839, 397.906 1642.010, 398.155 1642.300, 398.575 1642.515, 398.817 1643.138, 399.343 1644.302, 399.859 1644.373, 399.891 1645.541, 400.051 1645.668, 400.068 1647.048, 399.932 1647.781, 399.687 1648.348, 399.497 1649.429, 398.797 1649.571, 398.704 1650.279, 397.886 1650.381, 397.769 1650.726, 397.016 1650.797, 396.737 1650.942, 395.904 1650.739, 395.017 1650.698, 394.838 1650.227, 394.169 1650.018, 393.923 1649.385, 393.400 1648.144, 392.853 1647.287, 392.738 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1779.910, 411.351 1779.780, 411.620 1779.701, 412.402 1779.893, 413.389 1780.524, 414.240 1780.943, 414.536 1781.245, 414.748 1781.533, 414.873 1782.454, 415.267 1783.730, 415.440 1784.005, 415.421 1784.551, 415.382 1785.118, 415.323 1786.453, 414.930 1786.768, 414.748 1787.717, 414.201 1788.562, 413.336 1788.883, 412.681 1789.031, 412.380 1789.105, 411.595 1788.915, 410.602 1788.281, 409.746 1787.928, 409.502 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1920.279, 407.834 1919.733, 408.112 1919.083, 408.473 1918.688, 408.838 1918.221, 409.277 1917.719, 410.164 1917.635, 411.029 1917.846, 411.810 1918.290, 412.411 1918.431, 412.602 1919.402, 413.190 1920.404, 413.555 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 36.079, 413.214 36.443, 413.307 36.724, 413.378 37.168, 413.426 37.988, 413.478 39.127, 413.324 40.047, 412.983 40.933, 412.428 41.466, 411.684 41.660, 410.953 41.581, 410.142 41.119, 409.312 40.694, 408.903 40.329, 408.559 39.737, 408.226 39.156, 407.923 38.564, 407.748 37.921, 407.578 37.477, 407.532 36.657, 407.475 35.514, 407.627 34.587, 407.964 33.696, 408.520 33.160, 409.268 32.961, 410.001 33.000, 410.383 33.020, 410.586 33.044, 410.816 33.353, 411.373 33.512, 411.650 33.936, 412.061 34.309, 412.403 34.735, 412.645 34.900, 412.739 35.487, 413.037 36.079, 413.214 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 168.386, 404.599 168.905, 404.647 169.666, 404.712 170.842, 404.549 171.695, 404.190 171.956, 404.061 172.624, 403.593 173.204, 402.788 173.378, 401.854 173.307, 401.125 172.879, 400.223 172.103, 399.405 170.942, 398.711 169.712, 398.330 168.431, 398.213 167.251, 398.373 166.390, 398.727 166.133, 398.861 165.456, 399.326 164.874, 400.135 164.701, 401.074 164.768, 401.806 165.203, 402.712 165.985, 403.531 167.153, 404.223 168.386, 404.599 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 300.478, 407.936 299.872, 407.880 298.660, 408.057 297.503, 408.586 296.907, 409.098 296.718, 409.323 296.276, 409.969 296.052, 410.978 296.185, 411.772 296.258, 412.025 296.577, 412.743 296.764, 412.959 297.335, 413.619 298.480, 414.356 299.697, 414.752 300.301, 414.808 300.587, 414.833 300.986, 414.867 302.194, 414.687 303.346, 414.157 303.933, 413.643 304.127, 413.423 304.561, 412.776 304.786, 411.773 304.650, 410.983 304.586, 410.730 304.265, 410.016 303.896, 409.586 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 434.669, 412.079 434.630, 412.051 433.449, 411.623 432.163, 411.498 430.926, 411.689 429.737, 412.259 428.921, 413.049 428.622, 413.627 428.560, 413.746 428.477, 413.969 428.461, 414.012 428.384, 414.356 428.382, 414.367 428.279, 414.828 428.426, 415.949 428.825, 416.721 428.986, 417.001 429.548, 417.658 429.629, 417.716 429.897, 417.906 430.653, 418.445 430.701, 418.462 430.740, 418.476 431.447, 418.727 431.838, 418.866 432.937, 418.969 433.123, 418.987 433.564, 418.917 434.266, 418.806 434.356, 418.792 434.986, 418.488 435.540, 418.222 436.021, 417.753 436.351, 417.433 436.652, 416.839 436.703, 416.736 436.810, 416.474 436.986, 415.661 436.892, 414.925 436.844, 414.544 436.731, 414.327 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 561.330, 413.550 561.334, 413.589 561.494, 413.954 561.827, 414.714 562.098, 415.011 562.684, 415.654 563.545, 416.258 564.681, 416.711 565.948, 416.841 566.818, 416.697 566.862, 416.689 567.197, 416.634 568.406, 416.026 568.508, 415.923 569.245, 415.183 569.728, 414.222 569.759, 414.159 569.800, 413.809 569.845, 413.433 569.887, 413.074 569.772, 412.097 569.431, 411.305 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 562.386, 409.967 561.864, 410.490 561.784, 410.650 561.749, 410.719 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 696.192, 384.234 696.379, 384.481 697.451, 385.217 698.425, 385.621 699.658, 385.785 700.911, 385.582 700.972, 385.551 701.644, 385.205 702.136, 384.950 702.657, 384.466 702.997, 384.063 703.289, 383.630 703.568, 382.969 703.780, 381.799 703.573, 380.480 703.156, 379.566 703.146, 379.552 702.385, 378.534 701.318, 377.792 700.342, 377.391 699.107, 377.219 697.850, 377.418 697.238, 377.731 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 828.334, 411.439 828.305, 411.717 828.316, 411.993 828.423, 413.099 828.929, 414.251 829.648, 415.161 830.645, 415.911 831.044, 416.072 831.747, 416.356 832.941, 416.504 833.885, 416.351 834.197, 416.270 835.117, 415.900 836.141, 415.101 836.778, 414.204 837.168, 413.225 837.258, 412.294 837.263, 412.246 837.266, 411.971 837.153, 410.866 836.653, 409.713 835.931, 408.806 834.940, 408.048 834.568, 407.899 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 993.926, 428.505 993.682, 429.138 993.483, 430.282 993.523, 430.553 993.651, 431.424 993.693, 431.523 994.044, 432.362 994.116, 432.457 994.632, 433.142 994.991, 433.436 995.536, 433.881 996.626, 434.300 997.590, 434.421 998.322, 434.330 998.600, 434.296 999.643, 433.882 999.665, 433.873 1000.473, 433.197 1000.499, 433.173 1000.548, 433.130 1001.143, 432.400 1001.186, 432.347 1001.542, 431.407 1001.568, 431.298 1001.747, 430.266 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 991.181, 440.390 990.972, 440.935 990.860, 441.576 990.808, 441.875 990.887, 442.396 990.950, 442.813 991.198, 443.415 991.273, 443.596 991.762, 444.233 992.191, 444.587 992.509, 444.849 993.411, 445.199 994.211, 445.292 994.783, 445.226 995.044, 445.196 995.928, 444.843 996.107, 444.694 996.593, 444.292 996.659, 444.224 996.753, 444.110 997.073, 443.721 997.185, 443.584 997.481, 442.800 997.497, 442.730 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 988.992, 452.177 988.936, 452.324 988.906, 452.403 988.863, 452.516 988.827, 452.722 988.726, 453.299 988.776, 453.625 988.846, 454.080 989.116, 454.742 989.205, 454.855 989.527, 455.269 990.153, 455.788 990.908, 456.085 991.331, 456.130 991.580, 456.157 991.720, 456.142 991.762, 456.138 991.858, 456.127 991.897, 456.123 992.003, 456.112 992.277, 456.083 992.615, 455.946 993.019, 455.783 993.289, 455.562 993.574, 455.330 993.633, 455.262 993.804, 455.056 994.071, 454.733 994.321, 454.070 994.333, 454.017 994.353, 453.901 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 987.245, 455.062 987.162, 455.279 987.047, 455.940 987.097, 456.259 987.149, 456.599 987.377, 457.159 987.379, 457.162 987.725, 457.603 988.254, 458.042 988.662, 458.204 988.891, 458.294 989.460, 458.354 989.573, 458.342 990.048, 458.292 990.676, 458.038 991.062, 457.723 991.144, 457.656 991.195, 457.597 991.564, 457.152 991.589, 457.085 991.733, 456.706 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 985.963, 467.220 985.781, 467.699 985.684, 468.257 985.771, 468.814 985.855, 469.024 985.965, 469.295 986.262, 469.668 986.332, 469.727 986.712, 470.044 986.814, 470.085 987.254, 470.262 987.740, 470.307 988.240, 470.260 988.299, 470.236 988.775, 470.041 989.172, 469.722 989.435, 469.405 989.531, 469.290 989.712, 468.808 989.811, 468.250 989.725, 467.693 989.718, 467.675 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 984.694, 478.473 984.627, 478.648 984.545, 479.122 984.549, 479.153 984.619, 479.596 984.665, 479.709 984.785, 480.011 985.040, 480.325 985.098, 480.382 985.399, 480.629 985.424, 480.649 985.888, 480.837 986.312, 480.877 986.720, 480.837 986.731, 480.836 987.189, 480.647 987.528, 480.378 987.611, 480.278 987.832, 480.010 987.836, 480.006 987.991, 479.591 987.994, 479.574 988.008, 479.496 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 984.093, 492.393 984.053, 492.424 983.789, 492.746 983.654, 493.105 983.583, 493.509 983.648, 493.912 983.789, 494.271 983.902, 494.408 984.009, 494.536 984.059, 494.592 984.339, 494.817 984.737, 494.980 985.101, 495.016 985.461, 494.979 985.854, 494.815 986.145, 494.590 986.158, 494.574 986.409, 494.268 986.543, 493.908 986.545, 493.901 986.615, 493.505 986.551, 493.102 986.408, 492.742 986.242, 492.539 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 982.983, 504.564 982.932, 504.626 982.831, 504.896 982.816, 504.938 982.811, 504.962 982.788, 505.093 982.755, 505.282 982.777, 505.419 982.781, 505.446 982.789, 505.496 982.811, 505.626 982.932, 505.938 983.164, 506.216 983.405, 506.405 983.602, 506.487 983.747, 506.547 984.060, 506.580 984.370, 506.547 984.389, 506.539 984.708, 506.404 984.817, 506.321 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 982.326, 507.172 982.177, 507.355 982.078, 507.623 982.026, 507.918 982.073, 508.213 982.178, 508.481 982.323, 508.656 982.377, 508.720 982.584, 508.882 982.878, 509.005 983.146, 509.033 983.412, 509.004 983.703, 508.881 983.859, 508.762 983.917, 508.719 984.113, 508.479 984.213, 508.211 984.264, 507.916 984.217, 507.621 984.112, 507.353 984.070, 507.302 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 981.596, 513.238 981.519, 513.332 981.452, 513.512 981.434, 513.562 981.433, 513.564 981.398, 513.765 981.389, 513.816 981.415, 513.980 981.430, 514.069 981.483, 514.205 981.519, 514.300 981.643, 514.450 981.690, 514.506 981.868, 514.644 982.120, 514.749 982.351, 514.774 982.580, 514.749 982.580, 514.749 982.821, 514.646 982.829, 514.643 982.881, 514.604 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1063.646, 48.170 1063.356, 48.116 1060.155, 48.818 1057.270, 50.124 1054.856, 52.383 1053.392, 54.410 1052.079, 57.428 1051.420, 61.274 1051.773, 65.097 1052.838, 68.066 1054.127, 70.062 1055.579, 71.483 1056.334, 72.223 1059.076, 73.480 1062.178, 74.098 1064.529, 73.625 1065.350, 73.459 1068.198, 72.138 1070.630, 69.953 1072.074, 67.927 1072.565, 66.853 1073.410, 64.940 1073.764, 63.206 1074.110, 61.107 1073.979, 58.971 1073.799, 57.267 1073.145, 55.313 1072.758, 54.266 1071.507, 52.208 1069.264, 50.035 1067.603, 49.230 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1031.765, 206.244 1030.856, 206.345 1028.753, 207.422 1027.072, 208.728 1026.003, 210.266 1025.759, 210.701 1025.087, 212.273 1024.648, 214.834 1024.939, 217.384 1025.737, 219.367 1026.860, 220.893 1028.301, 222.148 1029.435, 222.696 1030.497, 223.210 1032.541, 223.408 1032.708, 223.409 1033.753, 223.298 1034.783, 223.188 1036.842, 222.146 1038.558, 220.833 1039.616, 219.296 1039.893, 218.883 1040.545, 217.304 1040.708, 216.484 1041.005, 214.750 1040.735, 212.192 1039.951, 210.193 1038.815, 208.666 1037.386, 207.376 1036.459, 206.935 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1012.943, 305.673 1012.942, 305.674 1011.908, 307.112 1011.353, 308.478 1011.016, 310.430 1011.265, 312.376 1011.513, 312.951 1011.918, 313.891 1012.815, 315.158 1014.264, 316.259 1015.753, 316.941 1017.518, 317.185 1019.200, 316.928 1020.831, 316.234 1022.221, 315.122 1022.229, 315.112 1023.269, 313.698 1023.811, 312.328 1023.904, 311.885 1024.162, 310.380 1023.927, 308.429 1023.668, 307.817 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 1004.331, 362.960 1003.483, 364.082 1003.003, 365.296 1002.724, 366.906 1002.943, 368.511 1003.454, 369.657 1003.484, 369.724 1003.506, 369.760 1004.267, 370.860 1005.497, 371.828 1006.776, 372.338 1008.273, 372.589 1009.653, 372.348 1009.713, 372.330 1011.090, 371.811 1012.258, 370.854 1012.279, 370.836 1013.159, 369.695 1013.630, 368.478 1013.689, 368.209 1013.919, 366.872 1013.709, 365.263 1013.236, 364.193 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 961.363, 375.891 961.178, 377.128 961.427, 378.668 961.475, 378.784 961.902, 379.822 961.913, 379.847 962.602, 380.774 962.719, 380.931 963.881, 381.868 963.884, 381.870 965.169, 382.350 965.289, 382.386 966.582, 382.600 967.867, 382.378 968.001, 382.342 969.277, 381.855 969.585, 381.605 970.444, 380.909 970.794, 380.431 971.241, 379.821 971.411, 379.410 971.731, 378.638 971.777, 378.348 971.972, 377.097 971.734, 375.564 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 21.133, 361.011 21.305, 361.029 22.749, 361.177 24.204, 361.007 24.786, 360.827 25.391, 360.640 26.519, 359.949 27.196, 359.001 27.452, 358.110 27.344, 357.054 26.749, 355.966 25.735, 354.973 24.231, 354.115 22.649, 353.626 21.031, 353.454 19.570, 353.621 18.372, 353.981 17.235, 354.674 16.555, 355.627 16.290, 356.523 16.404, 357.586 17.009, 358.679 18.033, 359.673 19.546, 360.529 21.133, 361.011 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 173.812, 353.708 173.049, 354.190 172.311, 355.215 172.091, 356.419 172.180, 357.322 172.508, 358.032 172.725, 358.499 173.709, 359.568 175.179, 360.489 176.730, 361.008 178.342, 361.186 179.826, 361.004 180.892, 360.608 181.230, 360.405 181.416, 360.285 182.064, 359.865 182.797, 358.846 183.020, 357.650 182.925, 356.752 182.456, 355.725 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 333.768, 354.125 333.221, 354.057 331.714, 354.249 330.273, 354.890 329.565, 355.466 329.293, 355.805 328.769, 356.565 328.475, 357.854 328.713, 359.207 329.131, 360.084 329.458, 360.490 330.059, 361.229 331.358, 362.139 331.465, 362.213 331.514, 362.232 332.960, 362.768 334.552, 362.958 336.053, 362.761 337.487, 362.118 338.181, 361.538 338.460, 361.206 338.972, 360.446 339.268, 359.166 339.038, 357.820 338.878, 357.488 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 487.125, 378.516 486.819, 378.662 485.810, 379.646 485.724, 379.824 485.221, 380.861 485.043, 381.855 485.188, 383.286 485.344, 383.610 485.838, 384.635 486.520, 385.379 486.577, 385.440 486.927, 385.771 487.897, 386.465 487.976, 386.496 489.318, 387.030 489.686, 387.073 490.875, 387.211 492.387, 386.986 493.842, 386.287 494.845, 385.305 495.433, 384.097 495.601, 383.107 495.578, 382.871 495.557, 382.656 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 493.697, 379.162 492.775, 378.508 491.360, 377.934 490.882, 377.876 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 647.818, 355.307 649.312, 355.529 650.812, 355.311 652.272, 354.587 653.293, 353.556 653.575, 353.014 653.950, 352.270 654.165, 350.878 653.877, 349.305 653.429, 348.261 652.469, 347.016 651.160, 346.109 650.044, 345.657 648.548, 345.424 647.042, 345.637 645.574, 346.359 644.546, 347.393 643.887, 348.688 643.678, 350.086 643.886, 351.250 643.976, 351.662 644.417, 352.712 645.389, 353.952 646.705, 354.850 647.818, 355.307 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 801.886, 382.408 801.835, 382.797 801.997, 384.432 802.611, 385.798 802.673, 385.876 803.091, 386.407 803.433, 386.841 804.625, 387.749 805.782, 388.207 805.892, 388.250 806.805, 388.380 807.307, 388.451 808.785, 388.198 809.824, 387.734 809.883, 387.689 810.772, 387.012 811.027, 386.818 811.761, 385.803 811.775, 385.783 812.211, 384.626 812.348, 383.516 812.246, 382.427 812.195, 381.884 811.591, 380.515 810.765, 379.476 809.581, 378.558 808.502, 378.136 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 960.477, 333.329 960.358, 333.502 960.291, 333.609 959.709, 334.940 959.442, 336.777 959.733, 338.608 960.296, 339.938 960.604, 340.370 961.235, 341.255 962.588, 342.322 964.084, 342.936 965.725, 343.192 967.374, 342.925 968.856, 342.301 970.213, 341.224 970.958, 340.160 971.139, 339.901 971.709, 338.567 971.989, 336.734 971.710, 334.898 971.135, 333.571 970.816, 333.114 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M -0.142, 321.314 0.126, 321.287 0.472, 321.250 2.045, 320.838 2.554, 320.533 3.512, 319.958 4.386, 318.730 4.737, 317.612 4.671, 317.013 4.583, 316.221 3.794, 314.780 2.462, 313.459 0.832, 312.500 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 188.725, 307.720 188.096, 307.633 186.187, 307.832 184.817, 308.252 183.299, 309.196 182.349, 310.519 182.140, 311.655 182.060, 312.089 182.182, 313.222 182.875, 314.776 183.439, 315.413 184.133, 316.196 184.701, 316.571 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 379.901, 333.880 381.884, 334.154 383.769, 333.924 385.572, 333.120 386.380, 332.426 386.802, 331.963 387.394, 331.030 387.793, 329.380 387.540, 327.636 386.972, 326.542 386.657, 325.966 385.850, 325.050 385.228, 324.533 384.134, 323.744 382.294, 322.982 380.308, 322.694 378.415, 322.918 377.313, 323.393 376.599, 323.719 375.769, 324.404 375.359, 324.880 374.747, 325.812 374.350, 327.477 374.616, 329.233 375.180, 330.336 375.517, 330.908 376.321, 331.831 376.962, 332.335 378.053, 333.131 379.901, 333.880 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 574.291, 290.890 573.168, 291.019 572.073, 291.523 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 765.933, 307.238 765.251, 307.895 764.870, 308.341 764.353, 309.084 764.021, 309.958 763.879, 310.506 763.661, 311.725 763.895, 313.724 764.658, 315.406 765.596, 316.582 767.050, 317.751 768.511, 318.292 768.780, 318.384 770.217, 318.613 770.999, 318.506 771.980, 318.372 773.711, 317.498 774.453, 316.807 774.577, 316.692 774.938, 316.232 775.468, 315.504 775.785, 314.627 775.950, 314.089 776.153, 312.871 775.934, 310.877 775.184, 309.192 774.240, 308.022 772.796, 306.838 771.066, 306.187 769.623, 305.967 768.104, 306.166 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 959.544, 257.779 958.817, 258.347 957.782, 259.815 956.990, 261.649 956.667, 263.990 957.027, 266.322 957.711, 267.858 957.843, 268.135 958.864, 269.593 959.395, 269.995 960.517, 270.844 962.348, 271.720 964.353, 271.958 966.370, 271.702 968.180, 270.811 969.496, 269.806 969.840, 269.544 970.865, 268.078 971.668, 266.256 972.011, 263.921 971.669, 261.582 970.864, 259.755 969.832, 258.297 968.902, 257.591 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 204.541, 202.395 203.375, 202.637 201.377, 203.838 200.120, 205.594 199.728, 207.730 199.905, 209.132 200.239, 210.034 200.801, 211.308 202.440, 213.317 203.672, 214.239 204.889, 215.134 206.250, 215.729 207.475, 216.263 209.080, 216.603 210.171, 216.765 211.885, 216.780 214.395, 216.244 216.367, 215.050 217.612, 213.313 218.010, 211.201 217.819, 209.811 217.522, 208.917 216.951, 207.655 216.191, 206.682 216.171, 206.657 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 461.716, 252.468 460.549, 251.692 459.056, 251.101 457.975, 250.827 456.573, 250.621 455.344, 250.687 454.171, 250.844 452.916, 251.290 451.856, 251.837 450.933, 252.578 450.265, 253.326 449.592, 254.424 449.518, 254.690 449.356, 255.266 449.028, 256.644 449.246, 258.590 449.294, 259.016 450.361, 261.307 452.122, 263.290 453.312, 264.076 453.341, 264.095 453.609, 264.272 454.400, 264.772 455.887, 265.373 456.118, 265.424 456.970, 265.611 458.366, 265.831 459.580, 265.729 460.459, 265.628 460.753, 265.594 461.980, 265.117 463.047, 264.597 463.681, 264.056 463.936, 263.837 464.622, 263.114 465.263, 262.012 465.529, 261.192 465.722, 260.315 465.832, 259.819 465.654, 258.119 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 717.141, 208.855 718.160, 206.853 718.553, 204.591 718.204, 201.998 717.206, 199.782 716.097, 198.439 715.664, 197.963 714.220, 196.788 711.998, 195.800 709.646, 195.577 708.057, 195.822 705.869, 196.802 704.327, 198.318 703.305, 200.339 702.925, 202.619 703.297, 205.221 704.315, 207.432 705.415, 208.783 705.873, 209.231 707.306, 210.412 709.528, 211.371 711.229, 211.542 711.863, 211.570 713.447, 211.350 715.615, 210.364 717.141, 208.855 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 952.011, 132.120 953.109, 134.724 954.472, 136.584 956.462, 138.371 959.136, 139.607 961.266, 139.931 961.841, 140.018 962.744, 139.868 964.513, 139.573 967.205, 138.303 969.152, 136.492 970.524, 134.614 971.597, 131.996 972.056, 128.638 971.599, 125.275 970.520, 122.646 969.138, 120.784 967.165, 118.939 964.458, 117.716 961.732, 117.257 959.039, 117.752 956.315, 119.010 954.388, 120.880 952.998, 122.759 951.945, 125.401 951.521, 128.770 952.011, 132.120 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 242.785, 112.314 241.065, 111.671 237.116, 111.222 233.556, 111.849 230.742, 113.493 228.955, 115.992 228.376, 119.095 228.664, 120.969 229.058, 122.491 229.887, 124.199 230.929, 125.842 232.157, 127.205 232.836, 127.873 233.797, 128.817 235.554, 129.990 237.374, 131.126 239.140, 131.792 241.306, 132.550 243.774, 132.806 245.210, 132.955 248.711, 132.308 251.474, 130.675 253.236, 128.215 253.828, 125.163 253.511, 123.310 253.189, 121.810 252.344, 120.124 251.378, 118.479 250.134, 117.137 248.562, 115.493 245.584, 113.525 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 602.134, 48.820 598.766, 48.237 595.596, 48.796 592.943, 50.446 591.672, 51.975 591.071, 53.023 590.350, 54.751 590.169, 56.270 589.995, 58.009 590.325, 59.861 590.703, 61.767 592.274, 64.994 593.623, 66.645 594.616, 67.727 596.429, 69.172 599.657, 70.778 602.991, 71.313 606.111, 70.730 608.717, 69.091 610.013, 67.624 610.562, 66.555 611.330, 64.881 611.711, 61.660 611.045, 57.920 609.511, 54.686 608.145, 53.049 607.196, 51.915 605.366, 50.481 604.370, 49.939 602.134, 48.820 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 33.199, 390.637 33.885, 390.835 34.354, 390.878 35.224, 390.954 36.432, 390.801 37.408, 390.463 38.347, 389.881 38.911, 389.092 39.118, 388.331 39.033, 387.464 38.543, 386.572 37.704, 385.763 36.461, 385.071 35.151, 384.688 33.811, 384.565 32.599, 384.716 31.615, 385.049 30.671, 385.633 30.104, 386.426 29.891, 387.189 29.980, 388.062 30.477, 388.957 31.322, 389.767 31.948, 390.116 32.573, 390.456 33.199, 390.637 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 169.810, 380.184 169.386, 380.239 168.478, 380.593 168.203, 380.748 167.489, 381.223 166.873, 382.079 166.690, 383.078 166.762, 383.846 167.220, 384.815 168.047, 385.692 169.281, 386.440 170.584, 386.852 171.937, 386.984 173.181, 386.820 174.081, 386.460 174.359, 386.310 175.064, 385.832 175.677, 384.980 175.861, 383.987 175.786, 383.223 175.334, 382.258 174.515, 381.381 173.767, 380.924 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 307.887, 396.967 307.156, 396.894 305.876, 397.076 304.655, 397.632 304.032, 398.161 303.826, 398.409 303.364, 399.084 303.125, 400.155 303.269, 400.990 303.339, 401.269 303.679, 402.023 304.101, 402.517 304.477, 402.957 305.682, 403.747 306.962, 404.176 307.580, 404.234 308.321, 404.305 309.596, 404.120 310.812, 403.564 311.424, 403.031 311.636, 402.788 312.089, 402.114 312.329, 401.049 312.182, 400.218 312.122, 399.940 311.779, 399.189 311.396, 398.738 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 444.535, 408.389 445.883, 408.524 447.179, 408.323 448.425, 407.725 449.280, 406.894 449.641, 406.167 449.768, 405.879 449.943, 405.027 449.801, 403.841 449.227, 402.723 448.626, 402.038 447.478, 401.192 446.241, 400.730 444.892, 400.588 443.591, 400.785 442.339, 401.382 441.480, 402.216 441.109, 402.943 440.991, 403.235 440.808, 404.090 440.956, 405.282 441.539, 406.401 442.138, 407.091 443.295, 407.933 444.535, 408.389 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 579.182, 407.275 579.186, 407.313 579.188, 407.329 579.235, 407.702 579.252, 407.838 579.757, 409.031 580.645, 410.030 581.563, 410.665 582.077, 410.876 582.521, 411.058 582.745, 411.149 583.408, 411.221 584.069, 411.291 584.435, 411.231 585.126, 411.117 585.349, 411.081 585.378, 411.076 585.849, 410.838 586.520, 410.500 586.647, 410.436 587.415, 409.663 587.530, 409.547 587.542, 409.523 588.076, 408.464 588.222, 407.314 588.087, 406.288 587.981, 406.034 587.816, 405.638 587.613, 405.151 587.590, 405.096 587.523, 405.020 586.790, 404.186 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 582.105, 403.012 581.974, 403.033 580.699, 403.672 580.200, 404.173 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 718.781, 372.667 719.118, 373.385 719.258, 373.598 719.917, 374.481 721.022, 375.268 722.062, 375.690 723.343, 375.872 723.800, 375.800 724.653, 375.664 725.451, 375.256 725.934, 375.002 726.510, 374.479 726.837, 374.067 727.171, 373.600 727.444, 372.911 727.683, 371.670 727.483, 370.269 727.430, 370.157 727.026, 369.312 726.899, 369.092 726.237, 368.212 725.136, 367.417 724.094, 366.999 722.812, 366.809 722.334, 366.883 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 857.415, 405.414 857.499, 406.117 858.007, 407.337 858.780, 408.293 859.759, 409.061 859.797, 409.091 860.974, 409.556 861.867, 409.674 862.204, 409.718 863.227, 409.551 863.510, 409.476 864.511, 409.079 865.578, 408.240 866.240, 407.296 866.670, 406.261 866.712, 405.816 866.797, 404.934 866.679, 403.988 866.652, 403.776 866.152, 402.554 865.375, 401.602 864.591, 400.976 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 11.333, 340.062 11.065, 340.945 11.189, 342.083 11.836, 343.256 12.929, 344.325 14.543, 345.250 15.838, 345.654 16.234, 345.778 17.957, 345.966 19.506, 345.794 20.774, 345.423 20.808, 345.402 21.974, 344.693 22.693, 343.685 22.968, 342.748 22.852, 341.618 22.216, 340.451 21.135, 339.384 20.041, 338.751 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 177.002, 342.488 176.531, 342.651 175.277, 343.441 174.493, 344.531 174.257, 345.814 174.353, 346.769 174.931, 348.027 175.337, 348.472 175.976, 349.172 177.535, 350.161 179.181, 350.724 180.893, 350.923 182.468, 350.734 183.453, 350.380 183.597, 350.329 183.959, 350.103 184.841, 349.542 185.620, 348.459 185.858, 347.185 185.756, 346.236 185.190, 344.984 184.469, 344.186 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 339.600, 352.252 339.975, 352.705 341.456, 353.760 343.033, 354.359 344.213, 354.506 344.715, 354.568 346.303, 354.364 347.508, 353.826 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 507.283, 375.197 508.914, 375.400 510.502, 375.169 512.034, 374.435 513.091, 373.400 513.717, 372.118 513.877, 371.081 513.746, 369.566 513.088, 368.128 511.967, 366.907 510.928, 366.185 509.452, 365.561 507.818, 365.349 506.224, 365.574 504.682, 366.306 503.618, 367.345 502.991, 368.634 502.820, 369.675 502.960, 371.199 503.630, 372.640 504.763, 373.856 505.801, 374.584 507.283, 375.197 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 837.643, 339.824 836.978, 340.358 836.201, 341.428 835.726, 342.674 835.608, 343.795 835.607, 344.265 835.745, 345.546 836.354, 347.015 837.234, 348.082 838.436, 349.084 839.783, 349.586 839.892, 349.610 841.227, 349.838 842.034, 349.712 842.750, 349.601 843.159, 349.407 843.880, 349.066 844.254, 348.803 845.123, 348.126 845.894, 347.056 846.375, 345.817 846.482, 344.696 846.504, 344.228 846.357, 342.949 845.758, 341.478 844.873, 340.415 844.796, 340.331 843.679, 339.401 842.224, 338.861 841.286, 338.707 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 189.155, 310.739 189.151, 310.739 188.969, 310.758 187.507, 311.213 185.882, 312.226 184.864, 313.643 184.560, 315.293 184.554, 315.323 184.636, 316.073 184.686, 316.539 184.701, 316.571 185.426, 318.200 186.770, 319.717 188.203, 320.662 188.778, 321.041 190.897, 321.811 192.354, 322.002 193.102, 322.100 194.356, 321.963 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 396.480, 286.494 398.569, 286.842 400.560, 286.633 401.678, 286.203 402.467, 285.808 403.297, 285.151 403.770, 284.593 404.376, 283.665 404.809, 281.888 404.555, 279.991 403.636, 278.158 402.764, 277.222 402.139, 276.569 400.965, 275.762 400.209, 275.379 399.032, 274.882 398.033, 274.706 396.940, 274.519 395.824, 274.619 394.939, 274.719 393.800, 275.129 393.018, 275.542 392.164, 276.186 391.704, 276.762 391.076, 277.687 390.646, 279.482 390.914, 281.392 391.853, 283.230 392.720, 284.176 393.367, 284.814 394.538, 285.629 395.307, 285.991 396.480, 286.494 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 596.087, 309.248 596.236, 309.661 596.745, 310.944 597.348, 311.701 598.041, 312.571 599.773, 313.767 601.147, 314.316 602.129, 314.483 603.091, 314.647 605.021, 314.405 606.893, 313.519 607.446, 312.972 608.017, 312.408 608.196, 312.231 608.286, 312.051 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 803.998, 266.150 803.984, 266.168 803.451, 267.703 803.271, 268.933 803.471, 271.089 804.227, 272.910 805.420, 274.360 806.713, 275.414 808.476, 276.143 808.840, 276.191 810.024, 276.347 811.848, 276.128 813.643, 275.237 814.619, 274.320 814.921, 273.918 815.511, 273.127 815.541, 273.086 816.083, 271.560 816.247, 270.331 816.202, 269.605 816.063, 268.181 815.321, 266.356 814.141, 264.892 812.840, 263.842 811.077, 263.092 810.602, 263.033 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 208.598, 185.135 206.922, 186.137 205.562, 188.037 205.134, 190.359 205.331, 191.859 205.552, 192.498 205.681, 192.870 206.293, 194.233 207.144, 195.322 208.058, 196.430 209.376, 197.473 210.697, 198.427 212.153, 199.114 213.482, 199.678 215.202, 200.087 216.388, 200.245 218.225, 200.301 220.931, 199.739 221.153, 199.605 223.059, 198.456 224.405, 196.578 224.840, 194.285 224.626, 192.799 224.547, 192.540 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 484.743, 232.792 483.205, 232.590 481.949, 232.615 480.645, 232.812 479.363, 233.245 478.174, 233.866 477.240, 234.623 476.472, 235.463 475.795, 236.612 475.484, 237.557 475.169, 239.014 475.425, 241.591 476.534, 244.084 478.382, 246.251 480.784, 247.878 482.408, 248.511 483.503, 248.812 485.035, 249.030 486.274, 248.964 487.577, 248.792 488.828, 248.323 490.024, 247.734 490.920, 246.954 491.708, 246.144 492.349, 244.989 492.693, 244.069 492.979, 242.617 492.746, 240.067 491.670, 237.583 489.852, 235.408 487.466, 233.756 485.836, 233.135 484.743, 232.792 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 764.761, 187.829 764.852, 187.668 765.438, 186.624 765.870, 185.676 766.344, 183.229 766.040, 180.417 765.040, 178.010 763.475, 176.020 761.890, 174.777 759.594, 173.678 757.146, 173.405 755.366, 173.702 753.060, 174.735 751.427, 176.351 750.773, 177.584 750.314, 178.525 749.855, 180.994 750.184, 183.816 751.207, 186.218 752.792, 188.185 754.364, 189.434 756.660, 190.500 759.090, 190.745 759.758, 190.644 760.863, 190.477 763.146, 189.438 764.761, 187.829 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 254.371, 67.356 250.001, 66.764 246.055, 67.396 242.928, 69.195 240.937, 71.982 240.281, 75.478 240.620, 77.503 241.021, 79.332 241.960, 81.181 243.078, 83.158 246.239, 86.577 250.187, 89.258 254.530, 90.945 258.846, 91.481 262.719, 90.822 265.782, 89.036 267.742, 86.297 268.413, 82.864 267.727, 79.067 265.743, 75.267 262.645, 71.835 258.728, 69.106 254.371, 67.356 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 653.769, -1.116 656.283, 0.047 657.436, 0.296 659.849, 0.786 663.211, 0.248 666.049, -1.511 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 450.055, 516.255 450.102, 516.268 450.211, 516.283 450.300, 516.275 450.376, 516.268 450.491, 516.238 450.558, 516.204 450.675, 516.143 450.801, 516.017 450.873, 515.870 450.899, 515.732 450.878, 515.566 450.814, 515.440 450.704, 515.305 450.535, 515.196 450.400, 515.157 450.353, 515.144 450.244, 515.129 450.155, 515.137 450.079, 515.145 449.964, 515.174 449.898, 515.208 449.780, 515.269 449.654, 515.395 449.582, 515.542 449.556, 515.680 449.577, 515.846 449.641, 515.973 449.751, 516.108 449.920, 516.216 450.055, 516.255 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 501.222, 513.404 501.234, 513.429 501.335, 513.548 501.510, 513.666 501.700, 513.722 501.821, 513.738 501.908, 513.731 501.947, 513.727 501.997, 513.722 502.111, 513.690 502.191, 513.653 502.307, 513.587 502.442, 513.451 502.522, 513.291 502.543, 513.142 502.526, 512.962 502.457, 512.828 502.440, 512.797 502.340, 512.678 502.165, 512.560 501.975, 512.503 501.854, 512.487 501.805, 512.491 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 553.302, 511.429 553.301, 511.429 553.190, 511.463 553.096, 511.504 552.982, 511.574 552.923, 511.630 552.838, 511.721 552.751, 511.894 552.730, 512.070 552.748, 512.249 552.833, 512.427 552.914, 512.520 552.946, 512.556 553.127, 512.683 553.322, 512.744 553.457, 512.761 553.644, 512.744 553.755, 512.710 553.849, 512.669 553.908, 512.632 553.962, 512.599 554.021, 512.542 554.106, 512.451 554.194, 512.279 554.214, 512.103 554.196, 511.924 554.112, 511.746 553.998, 511.618 553.818, 511.490 553.766, 511.474 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 605.372, 515.675 605.234, 515.631 605.086, 515.612 604.888, 515.631 604.781, 515.669 604.671, 515.712 604.562, 515.788 604.490, 515.848 604.409, 515.947 604.376, 515.999 604.313, 516.132 604.286, 516.322 604.312, 516.515 604.396, 516.706 604.522, 516.844 604.707, 516.980 604.908, 517.045 605.057, 517.064 605.254, 517.045 605.361, 517.007 605.472, 516.964 605.581, 516.888 605.653, 516.828 605.733, 516.729 605.767, 516.677 605.829, 516.544 605.856, 516.354 605.830, 516.161 605.747, 515.970 605.676, 515.893 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 656.440, 510.554 656.577, 510.653 656.780, 510.723 656.941, 510.742 657.035, 510.733 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 708.578, 512.250 708.752, 512.271 708.965, 512.250 709.044, 512.220 709.199, 512.160 709.394, 512.008 709.516, 511.841 709.568, 511.693 709.573, 511.674 709.610, 511.481 709.571, 511.245 709.490, 511.052 709.342, 510.878 709.153, 510.745 708.949, 510.671 708.775, 510.651 708.562, 510.672 708.328, 510.761 708.133, 510.913 708.011, 511.081 707.958, 511.229 707.955, 511.248 707.917, 511.441 707.956, 511.677 707.959, 511.683 708.037, 511.870 708.185, 512.044 708.375, 512.177 708.578, 512.250 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 761.529, 511.416 761.545, 511.307 761.512, 511.062 761.439, 510.901 761.421, 510.860 761.277, 510.679 761.074, 510.540 760.873, 510.463 760.687, 510.442 760.469, 510.464 760.230, 510.557 760.030, 510.716 759.906, 510.890 759.904, 510.896 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 811.972, 516.355 812.011, 516.407 812.226, 516.551 812.425, 516.630 812.622, 516.653 812.844, 516.629 813.088, 516.532 813.291, 516.367 813.330, 516.311 813.417, 516.185 813.491, 516.005 813.514, 515.795 813.488, 515.541 813.386, 515.331 813.247, 515.143 813.151, 515.079 813.031, 514.999 812.833, 514.920 812.636, 514.897 812.414, 514.920 812.170, 515.018 812.093, 515.080 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 863.984, 514.678 863.997, 514.695 864.079, 514.803 864.088, 514.814 864.281, 514.943 864.314, 514.961 864.505, 515.042 864.560, 515.048 864.711, 515.065 864.804, 515.056 864.935, 515.042 865.180, 514.942 865.292, 514.849 865.383, 514.773 865.493, 514.621 865.494, 514.620 865.509, 514.588 865.559, 514.476 865.591, 514.403 865.615, 514.167 865.588, 513.928 865.492, 513.713 865.461, 513.673 865.344, 513.521 865.152, 513.391 865.118, 513.374 864.927, 513.292 864.721, 513.269 864.668, 513.275 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 915.972, 508.786 915.966, 508.828 916.002, 509.070 916.091, 509.289 916.246, 509.484 916.403, 509.597 916.431, 509.617 916.664, 509.717 916.878, 509.740 917.101, 509.716 917.345, 509.616 917.505, 509.483 917.547, 509.445 917.671, 509.287 917.762, 509.068 917.775, 508.973 917.795, 508.827 917.758, 508.585 917.670, 508.366 917.514, 508.171 917.392, 508.083 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 967.982, 511.752 967.941, 511.996 967.975, 512.194 967.990, 512.279 968.088, 512.538 968.277, 512.768 968.294, 512.781 968.311, 512.794 968.322, 512.803 968.424, 512.880 968.480, 512.923 968.760, 513.040 968.761, 513.041 969.018, 513.068 969.275, 513.040 969.406, 512.985 969.556, 512.922 969.758, 512.767 969.760, 512.764 969.914, 512.577 969.947, 512.536 969.985, 512.438 970.031, 512.314 970.045, 512.277 970.070, 512.133 970.093, 511.994 970.054, 511.763 970.045, 511.713 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 416.331, 511.186 416.280, 511.198 416.066, 511.307 415.919, 511.452 415.837, 511.622 415.803, 511.780 415.831, 511.972 415.901, 512.117 416.032, 512.273 416.233, 512.399 416.387, 512.444 416.448, 512.459 416.571, 512.476 416.680, 512.468 416.763, 512.459 416.903, 512.425 417.117, 512.316 417.264, 512.171 417.346, 512.001 417.380, 511.843 417.352, 511.652 417.282, 511.507 417.151, 511.350 417.108, 511.323 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 471.306, 511.769 471.445, 511.788 471.552, 511.779 471.651, 511.769 471.790, 511.732 471.878, 511.689 472.020, 511.613 472.178, 511.455 472.269, 511.270 472.299, 511.096 472.275, 510.888 472.193, 510.729 472.172, 510.696 472.058, 510.558 471.849, 510.421 471.624, 510.355 471.485, 510.336 471.377, 510.344 471.279, 510.355 471.139, 510.391 471.051, 510.435 470.909, 510.510 470.751, 510.669 470.660, 510.854 470.630, 511.027 470.654, 511.237 470.736, 511.395 470.758, 511.429 470.871, 511.566 471.081, 511.703 471.306, 511.769 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 526.350, 506.866 526.503, 506.886 526.606, 506.878 526.721, 506.866 526.857, 506.828 526.962, 506.780 527.100, 506.700 527.267, 506.529 527.367, 506.330 527.391, 506.144 527.372, 505.919 527.269, 505.712 527.141, 505.564 526.927, 505.415 526.695, 505.343 526.542, 505.324 526.439, 505.331 526.324, 505.344 526.188, 505.381 526.083, 505.430 525.945, 505.509 525.777, 505.680 525.677, 505.879 525.653, 506.065 525.673, 506.291 525.776, 506.498 525.904, 506.646 526.118, 506.794 526.350, 506.866 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 581.234, 510.769 581.200, 510.772 581.070, 510.814 580.948, 510.864 580.815, 510.951 580.736, 511.022 580.637, 511.134 580.604, 511.195 580.528, 511.348 580.499, 511.567 580.525, 511.789 580.563, 511.873 580.626, 512.011 580.770, 512.170 580.988, 512.328 581.225, 512.404 581.394, 512.425 581.624, 512.403 581.667, 512.389 581.754, 512.361 581.877, 512.311 582.009, 512.224 582.088, 512.154 582.186, 512.041 582.220, 511.980 582.296, 511.827 582.325, 511.608 582.298, 511.386 582.198, 511.165 582.169, 511.133 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 637.044, 511.343 636.956, 511.279 636.884, 511.255 636.861, 511.247 636.715, 511.198 636.531, 511.175 636.290, 511.198 636.168, 511.243 636.026, 511.297 635.902, 511.389 635.806, 511.464 635.796, 511.477 635.776, 511.503 635.758, 511.528 635.715, 511.584 635.668, 511.649 635.597, 511.812 635.560, 512.045 635.564, 512.071 635.596, 512.282 635.694, 512.517 635.741, 512.568 635.872, 512.709 636.073, 512.855 636.313, 512.935 636.498, 512.958 636.738, 512.935 636.860, 512.890 637.002, 512.836 637.126, 512.743 637.222, 512.669 637.312, 512.549 637.360, 512.484 637.367, 512.468 637.431, 512.321 637.468, 512.088 637.466, 512.076 637.447, 511.949 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 691.617, 505.208 691.817, 505.232 692.065, 505.208 692.337, 505.105 692.564, 504.929 692.706, 504.736 692.770, 504.566 692.816, 504.319 692.768, 504.046 692.677, 503.823 692.502, 503.620 692.285, 503.467 692.045, 503.380 691.845, 503.357 691.597, 503.381 691.325, 503.484 691.098, 503.659 690.956, 503.852 690.891, 504.023 690.845, 504.269 690.894, 504.543 690.985, 504.766 691.160, 504.969 691.378, 505.122 691.617, 505.208 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 745.995, 511.907 746.005, 511.975 746.027, 512.134 746.028, 512.138 746.132, 512.373 746.303, 512.584 746.432, 512.673 746.537, 512.745 746.673, 512.796 746.775, 512.834 746.990, 512.859 747.245, 512.834 747.525, 512.725 747.758, 512.540 747.759, 512.539 747.825, 512.446 747.903, 512.337 747.977, 512.135 748.015, 511.900 747.998, 511.780 747.997, 511.775 747.975, 511.615 747.911, 511.472 747.870, 511.380 747.700, 511.169 747.637, 511.126 747.466, 511.008 747.228, 510.918 747.013, 510.893 746.939, 510.901 746.844, 510.910 746.825, 510.912 746.758, 510.919 746.478, 511.028 746.245, 511.212 746.200, 511.275 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 801.350, 511.828 801.375, 512.064 801.378, 512.069 801.493, 512.307 801.656, 512.526 801.693, 512.551 801.736, 512.580 801.905, 512.693 802.138, 512.785 802.366, 512.811 802.625, 512.785 802.734, 512.741 802.739, 512.740 802.909, 512.672 803.146, 512.481 803.293, 512.270 803.377, 512.060 803.406, 511.817 803.387, 511.645 803.374, 511.522 803.257, 511.278 803.093, 511.059 802.844, 510.893 802.612, 510.800 802.384, 510.774 802.125, 510.800 802.048, 510.831 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 856.898, 508.117 856.834, 508.265 856.807, 508.541 856.837, 508.817 856.950, 509.068 857.122, 509.292 857.348, 509.443 857.384, 509.463 857.608, 509.558 857.751, 509.574 857.847, 509.585 858.108, 509.558 858.394, 509.442 858.631, 509.247 858.759, 509.066 858.779, 509.031 858.873, 508.815 858.877, 508.773 858.900, 508.539 858.869, 508.262 858.757, 508.011 858.585, 507.788 858.359, 507.636 858.323, 507.617 858.098, 507.521 857.904, 507.500 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 912.653, 504.350 912.664, 504.364 912.880, 504.520 912.963, 504.555 913.152, 504.636 913.303, 504.652 913.401, 504.662 913.661, 504.635 913.945, 504.519 914.131, 504.363 914.182, 504.320 914.325, 504.135 914.432, 503.880 914.469, 503.598 914.462, 503.550 914.427, 503.318 914.342, 503.107 914.324, 503.061 914.143, 502.834 913.927, 502.679 913.752, 502.604 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 967.692, 506.874 967.674, 506.987 967.715, 507.231 967.730, 507.317 967.772, 507.428 967.844, 507.617 967.879, 507.660 968.064, 507.885 968.179, 507.972 968.301, 508.066 968.628, 508.203 968.927, 508.235 969.226, 508.203 969.553, 508.065 969.720, 507.935 969.789, 507.883 970.009, 507.615 970.017, 507.593 970.113, 507.342 970.123, 507.315 970.149, 507.160 970.179, 506.984 970.148, 506.803 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 378.055, 508.260 378.134, 508.278 378.274, 508.297 378.338, 508.294 378.409, 508.289 378.498, 508.278 378.669, 508.240 378.919, 508.115 379.048, 507.988 379.051, 507.986 379.089, 507.948 379.173, 507.787 379.182, 507.752 379.227, 507.570 379.191, 507.350 379.150, 507.260 379.114, 507.183 378.957, 507.002 378.719, 506.857 378.544, 506.805 378.464, 506.786 378.437, 506.782 378.325, 506.767 378.190, 506.775 378.101, 506.786 377.929, 506.824 377.762, 506.908 377.679, 506.949 377.509, 507.116 377.425, 507.277 377.416, 507.312 377.403, 507.362 377.370, 507.494 377.386, 507.589 377.407, 507.715 377.484, 507.882 377.641, 508.063 377.880, 508.208 378.055, 508.260 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 436.886, 503.219 437.043, 503.239 437.175, 503.232 437.282, 503.218 437.452, 503.179 437.718, 503.043 437.901, 502.861 438.005, 502.649 438.044, 502.451 438.012, 502.211 437.922, 502.029 437.761, 501.832 437.514, 501.673 437.249, 501.595 437.092, 501.574 436.960, 501.582 436.853, 501.595 436.683, 501.634 436.416, 501.770 436.233, 501.952 436.130, 502.165 436.090, 502.362 436.122, 502.603 436.212, 502.785 436.374, 502.982 436.621, 503.141 436.886, 503.219 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 494.961, 501.073 495.085, 501.219 495.340, 501.392 495.615, 501.477 495.704, 501.488 495.789, 501.499 495.916, 501.491 496.044, 501.476 496.210, 501.434 496.324, 501.377 496.493, 501.287 496.688, 501.090 496.803, 500.859 496.823, 500.730 496.835, 500.646 496.809, 500.385 496.685, 500.144 496.540, 499.974 496.286, 499.801 496.012, 499.716 495.837, 499.694 495.832, 499.695 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 554.313, 504.862 554.505, 504.886 554.624, 504.877 554.773, 504.862 554.931, 504.815 555.067, 504.755 555.228, 504.657 555.313, 504.575 555.434, 504.447 555.559, 504.200 555.589, 503.946 555.563, 503.692 555.442, 503.435 555.280, 503.253 555.022, 503.068 554.742, 502.978 554.550, 502.955 554.431, 502.963 554.282, 502.979 554.123, 503.025 553.988, 503.085 553.826, 503.182 553.742, 503.266 553.620, 503.393 553.495, 503.640 553.466, 503.894 553.491, 504.149 553.612, 504.406 553.774, 504.588 554.033, 504.773 554.313, 504.862 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 613.725, 502.955 613.659, 502.933 613.448, 502.907 613.339, 502.917 613.169, 502.933 613.020, 502.982 612.862, 503.046 612.710, 503.150 612.605, 503.239 612.493, 503.375 612.444, 503.451 612.357, 503.638 612.318, 503.908 612.356, 504.180 612.473, 504.453 612.654, 504.648 612.684, 504.676 612.914, 504.844 613.197, 504.939 613.408, 504.965 613.517, 504.955 613.687, 504.939 613.836, 504.889 613.994, 504.825 614.146, 504.721 614.251, 504.633 614.362, 504.497 614.411, 504.421 614.498, 504.234 614.537, 503.964 614.499, 503.693 614.382, 503.419 614.311, 503.342 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 672.353, 504.549 672.418, 504.556 672.707, 504.529 673.024, 504.409 673.289, 504.206 673.449, 503.990 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 672.712, 502.422 672.682, 502.412 672.580, 502.400 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 731.302, 502.250 731.549, 502.278 731.846, 502.250 732.172, 502.125 732.443, 501.912 732.612, 501.677 732.696, 501.441 732.744, 501.172 732.693, 500.840 732.575, 500.570 732.374, 500.322 732.104, 500.137 731.825, 500.031 731.578, 500.003 731.281, 500.031 730.955, 500.156 730.683, 500.368 730.514, 500.603 730.430, 500.839 730.382, 501.109 730.433, 501.441 730.551, 501.712 730.753, 501.959 731.022, 502.144 731.302, 502.250 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 789.794, 499.052 789.698, 499.188 789.602, 499.434 789.566, 499.713 789.606, 500.058 789.739, 500.338 789.932, 500.595 790.220, 500.787 790.493, 500.898 790.755, 500.926 791.057, 500.897 791.388, 500.768 791.663, 500.547 791.835, 500.304 791.931, 500.059 791.966, 499.780 791.927, 499.435 791.793, 499.155 791.601, 498.898 791.313, 498.706 791.040, 498.595 790.778, 498.566 790.476, 498.596 790.190, 498.707 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 848.999, 497.551 849.019, 497.597 849.217, 497.855 849.482, 498.034 849.521, 498.052 849.784, 498.166 849.979, 498.187 850.061, 498.196 850.365, 498.166 850.698, 498.033 850.975, 497.807 851.147, 497.557 851.255, 497.304 851.285, 496.981 851.251, 496.662 851.231, 496.619 851.118, 496.368 850.920, 496.110 850.655, 495.930 850.353, 495.798 850.121, 495.774 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 908.232, 500.080 908.194, 500.376 908.241, 500.702 908.363, 501.001 908.574, 501.265 908.746, 501.389 908.826, 501.447 909.142, 501.582 909.423, 501.611 909.431, 501.612 909.735, 501.581 910.067, 501.446 910.342, 501.214 910.508, 500.998 910.516, 500.980 910.633, 500.702 910.666, 500.450 910.676, 500.373 910.628, 500.047 910.507, 499.748 910.296, 499.484 910.123, 499.358 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 967.687, 493.432 967.559, 493.586 967.425, 493.932 967.361, 494.320 967.427, 494.707 967.560, 495.053 967.787, 495.327 967.816, 495.362 968.091, 495.577 968.471, 495.735 968.819, 495.769 969.167, 495.734 969.547, 495.575 969.821, 495.359 969.863, 495.308 970.077, 495.050 970.210, 494.704 970.275, 494.316 970.210, 493.929 970.076, 493.583 969.935, 493.412 "
            />
            <path
              fill="#FF5C00"
              stroke-width="3.0"
              stroke-linecap="butt"
              stroke-opacity="1.0"
              stroke="#FF5C00"
              stroke-linejoin="round"
              d=" M 334.160, 499.645 334.265, 499.668 334.421, 499.690 334.587, 499.683 334.681, 499.668 334.891, 499.627 335.181, 499.484 335.378, 499.293 335.483, 499.111 335.542, 498.862 335.504, 498.650 335.495, 498.607 335.410, 498.417 335.224, 498.208 334.941, 498.039 334.744, 497.981 334.640, 497.957 334.483, 497.935 334.318, 497.942 334.223, 497.957 334.013, 497.997 333.723, 498.140 333.525, 498.331 333.420, 498.514 333.361, 498.763 333.399, 498.975 333.408, 499.018 333.493, 499.209 333.680, 499.417 333.963, 499.586 334.160, 499.645 "
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
