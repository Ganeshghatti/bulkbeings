import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "framer-motion";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const component = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 2.2, slidesToScroll: 1 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };

  useEffect(() => {
    if (component.current) {
      const ctx = gsap.context(() => {
        gsap.to(".box1", {
          scrollTrigger: {
            trigger: ".box1",
            start: "top top", // Start pinning when the top of .Points hits the top of the viewport
            end: () => `+=180%`, // Ends 600% viewport height after the start
            pin: true,
          },
        });
        gsap.to(".box2", {
          scrollTrigger: {
            trigger: ".box2",
            start: "top 10%", // Start pinning when the top of .Points hits the top of the viewport
            end: () => `+=90%`, // Ends 600% viewport height after the start
            pin: true,
          },
        });
      }, component.current); // Use the ref as the context selector scope

      return () => ctx.revert();
    }
  }, []);
  return (
    <section
      id="CaseStudy"
      className="CaseStudy w-screen flex flex-col items-center justify-center"
      ref={component}
    >
      <div className="box box1">
        <p className="title w-3/4 md:w-full md:text-center">
          Financial Software Development
        </p>
        <p className="desc w-1/2 md:w-full md:text-center mb-4">
          We provide exceptional internet and mobile financial software
          development services that meet the unique needs of banks and trading
          firms.
        </p>
        <Slider {...settings} className="w-full">
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              alt="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="box box2">
        <p className="title w-3/4 md:w-full md:text-center">
          Financial Software Development
        </p>
        <p className="desc w-1/2 md:w-full md:text-center mb-4">
          We provide exceptional internet and mobile financial software
          development services that meet the unique needs of banks and trading
          firms.
        </p>
        <Slider {...settings} className="w-full">
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              alt="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
        </Slider>
      </div>{" "}
      <div className="box box3">
        <p className="title w-3/4 md:w-full md:text-center">
          Financial Software Development
        </p>
        <p className="desc w-1/2 md:w-full md:text-center mb-4">
          We provide exceptional internet and mobile financial software
          development services that meet the unique needs of banks and trading
          firms.
        </p>
        <Slider {...settings} className="w-full">
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              alt="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy1.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="./assets/images/Casestudy/Casestudy2.png"
              className="CaseStudy"
            />
            <div className="content">
              <p className="card-title">01 Case Study for Fintech</p>
              <p className="card-desc">
                We provide exceptional internet and mobile financial software
                development services that meet the unique needs of clients.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
