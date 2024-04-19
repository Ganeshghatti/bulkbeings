import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Home from "./pages/Home/Home.jsx";
import HomeTest from "./pages/Home/HomeTest.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>
);
