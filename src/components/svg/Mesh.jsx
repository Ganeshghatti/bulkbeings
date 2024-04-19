import React from "react";
import { motion } from "framer-motion";

export default function Mesh({ isInView }) {
  console.log(isInView);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      viewBox="0 0 1920 1080"
    >
      <g
        id="ViewLayer_LineSet"
        inkscape:groupmode="lineset"
        inkscape:label="ViewLayer_LineSet"
      >
        <g
          id="frame_0000"
          inkscape:groupmode="frame"
          inkscape:label="frame_0000"
        >
          <g inkscape:groupmode="layer" id="strokes" inkscape:label="strokes">
            <motion.path
              fill="none"
              strokeWidth={5.899998664855957}
              strokeLinecap="round"
              strokeOpacity={1}
              stroke="rgb(255, 27, 0)"
              strokeLinejoin="round"
              d=" M 1822.332, 668.656 1822.253, 668.708 1821.024, 669.293 1819.376, 669.743 1817.473, 670.013 1815.499, 670.077 1813.645, 669.929 1813.466, 669.904 1811.914, 669.562 1810.814, 669.062 1810.274, 668.452 1810.347, 667.791 1811.028, 667.143 1811.118, 667.086 1812.342, 666.512 1813.989, 666.066 1815.899, 665.793 1817.885, 665.719 1819.749, 665.854 1819.907, 665.875 1821.467, 666.206 1822.569, 666.705 1823.105, 667.321 1823.022, 667.993 1822.332, 668.656 "
              animate={{ y: isInView ? [0, 600, 0] : [0] }}
              transition={{ duration: 2, repeatCount: "infinity" }}
            />
            <motion.path
              fill="none"
              strokeWidth={5.899998664855957}
              strokeLinecap="round"
              strokeOpacity={1}
              stroke="rgb(255, 27, 0)"
              strokeLinejoin="round"
              d=" M 932.678, 835.374 931.090, 835.732 930.093, 835.959 929.814, 836.022 928.974, 836.217 928.655, 836.296 928.626, 836.308 928.860, 836.260 929.626, 836.087 930.136, 835.969 930.849, 835.805 932.411, 835.441 933.162, 835.265 933.167, 835.264 933.665, 835.148 934.156, 835.033 934.511, 834.949 936.267, 834.539 937.859, 834.170 939.130, 833.880 939.957, 833.696 940.260, 833.637 940.277, 833.640 940.028, 833.707 939.253, 833.890 938.613, 834.038 938.029, 834.172 937.204, 834.358 936.475, 834.524 934.741, 834.912 "
            />
          </g>
          <animate
            id="anim_ViewLayer_LineSet_000001"
            begin="-0.042s"
            attributeName="display"
            values="none;inline;none"
            repeatCount="indefinite"
            keyTimes="0.0;0.5;1"
            dur="0.083s"
          />
        </g>
      </g>
    </svg>
  );
}
