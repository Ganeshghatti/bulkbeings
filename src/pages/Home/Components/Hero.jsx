import React from "react";
import MeshBlenderHero from "../../../components/svg/MeshBlenderHero";

export default function Hero() {
  return (
    <section
      className="w-full h-screen flex hero flex-col md:items-center justify-center gap-28"
      id="hero"
    >
      {/* <div className="absolute top-0 w-full border">
        <MeshBlenderHero />
      </div> */}
      <div className="flex justify-between self-center title-div">
        <p className="md:text-center title w-1/2 md:w-3/4">
          Transforming Fintech & Healthcare Ultimately{" "}
        </p>
        <p className="md:hidden w-1" />
      </div>
      <div className="flex w-1/2 md:w-3/4 desc self-end">
        BulkBeings is a software engineering agency that helps tech companies
        build and modernise software. Faster, cheaper and with no talent risk.
        Shared ownership and the formation of communities.
      </div>
    </section>
  );
}
