const svgString=` <path fill="none" stroke-width="3.0" stroke-linecap="butt" stroke-opacity="1.0" stroke="rgb(0, 0, 0)"
stroke-linejoin="round"
d=" M 696.723, 499.465 696.574, 499.668 696.521, 499.810 696.510, 499.839 " />
<path fill="none" stroke-width="3.0" stroke-linecap="butt" stroke-opacity="1.0" stroke="rgb(0, 0, 0)"
stroke-linejoin="round"
d=" M 760.349, 492.214 760.508, 492.418 760.834, 492.638 761.158, 492.768 761.456, 492.800 761.807, 492.767 762.192, 492.619 762.262, 492.564 762.512, 492.367 762.712, 492.087 762.817, 491.804 762.866, 491.485 762.819, 491.130 " />
<path fill="none" stroke-width="3.0" stroke-linecap="butt" stroke-opacity="1.0" stroke="rgb(0, 0, 0)"
stroke-linejoin="round"
d=" M 823.891, 491.431 823.933, 491.522 824.158, 491.820 824.473, 492.029 824.505, 492.046 824.818, 492.180 825.134, 492.213 825.246, 492.203 825.488, 492.179 825.876, 492.027 826.199, 491.766 826.399, 491.478 826.520, 491.185 826.553, 490.856 826.515, 490.444 826.426, 490.252 826.356, 490.103 826.131, 489.805 825.817, 489.595 825.784, 489.579 825.472, 489.444 825.155, 489.411 825.068, 489.420 " />
<path fill="none" stroke-width="3.0" stroke-linecap="butt" stroke-opacity="1.0" stroke="rgb(0, 0, 0)"
stroke-linejoin="round"
d=" M 887.608, 490.143 887.692, 490.341 887.932, 490.645 888.231, 490.859 888.350, 490.910 888.593, 491.014 888.925, 491.047 889.109, 491.029 889.279, 491.013 889.666, 490.857 889.987, 490.591 890.173, 490.338 890.283, 490.087 890.322, 489.997 890.367, 489.614 890.317, 489.240 890.314, 489.235 890.171, 488.891 889.930, 488.587 889.632, 488.372 889.536, 488.331 " />
<path fill="none" stroke-width="3.0" stroke-linecap="butt" stroke-opacity="1.0" stroke="rgb(0, 0, 0)"
stroke-linejoin="round"
d=" M 952.808, 484.020 952.854, 483.963 952.872, 483.941 953.031, 483.541 953.101, 483.088 953.095, 483.055 953.023, 482.649 953.021, 482.634 952.871, 482.235 952.702, 482.031 952.576, 481.878 952.249, 481.622 952.021, 481.528 " />
`
const parser = new DOMParser();
const svgDoc = parser.parseFromString(svgString, "image/svg+xml");

// Select all path elements
const paths = svgDoc.querySelectorAll("path");

// Extract 'd' attribute values and create an array
const dValues = Array.from(paths).map(path => path.getAttribute("d"));

console.log(dValues)