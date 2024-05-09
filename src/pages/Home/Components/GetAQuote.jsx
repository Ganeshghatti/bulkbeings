import React from "react";

export default function GetAQuote() {
  return (
    <section
      id="GetAQuote"
      className="flex justify-center flex-col items-center"
    >
      <div className="container flex items-center justify-around">
        <p className="title">
          Okay! It’s your turn,
          <br /> Let’s talk about your project.
        </p>
        <button>Get Quote</button>
      </div>
    </section>
  );
}
