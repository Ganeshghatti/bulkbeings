import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

export default function EcoSustainabilitySoftwares() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 3.5, slidesToScroll: 1 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };
  return (
    <section
      id="EcoSustainabilitySoftwares"
      className="EcoSustainabilitySoftwares flex flex-col justify-center items-center w-full"
    >
      <div className="EcoSustainabilitySoftwares-container flex flex-col gap-4">
        <p className="title">Eco Sustainability softwares</p>
        <p className="desc">
          We provide exceptional internet and mobile financial software
          development services that meet the unique needs of banks and trading
          firms.
        </p>
        <Slider {...settings} className="w-full mt-16">
          <div className="card"></div> <div className="card"></div>{" "}
          <div className="card"></div> <div className="card"></div>{" "}
          <div className="card"></div>
        </Slider>
      </div>
    </section>
  );
}
