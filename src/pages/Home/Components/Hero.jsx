import React from "react";
import MeshBlender from "../../../components/svg/MeshBlender";

export default function Hero() {
  return (
    <section className="w-full h-screen flex hero" id="hero">
      {/* <div className="absolute top-0 w-screen border">
        <MeshBlender />
      </div> */}
      <div className="flex justify-center w-1/2 flex-col desc">
        BulkBeings is a software engineering agency that helps tech companies
        build and modernise software. Faster, cheaper and with no talent risk.
        Shared ownership and the formation of communities.
      </div>
      <div className="flex justify-around w-1/2 flex-col title">
        <p></p>
        <p>Transforming Fintech and Healthcare Ultimately </p>
      </div>
    </section>
  );
}
