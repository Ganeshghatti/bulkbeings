import React, { Component } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import UseInView from "./Useinview";
import DotsAnimated from "../../components/svg/DotsAnimated";
import SpaceshipTest from "../../components/svg/SpaceshipTest";
import Mesh from "../../components/svg/Mesh";

class Home extends Component {
  state = {
    isInView: false,
  };

  handleInViewChange = (isInView) => {
    this.setState({ isInView });
  };

  render() {
    return (
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={6} damping={0.25}>
          <Scroll html>
            <div className="w-screen">
              <section className="section">
                <div className="w-full h-1/2">
                  <Mesh isInView={this.state.isInView} />
                </div>
              </section>
              <section className="section">
                <UseInView onChange={this.handleInViewChange} />
              </section>
              <section className="section"></section>
              <section className="section"></section>
              <section className="section"></section>
              <section className="section"></section>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    );
  }
}

export default Home;
