import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreeD from "./components/ThreeD/ThreeD";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.scss";
import Home from "./pages/Home/Home";
import CaseStudies from "./pages/CaseStudies/CaseStudies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/case-studies/:case-study-name"
          element={<CaseStudies />}
        />
      </Routes>
    </BrowserRouter>
  );
}
