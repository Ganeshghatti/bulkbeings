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

gsap.registerPlugin(ScrollTrigger);

const Point1 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4 Point1">
      <p className="numbertext">01</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
const Point2 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4">
      <p className="numbertext">02</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
const Point3 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4">
      <p className="numbertext">03</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
const Point4 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4">
      <p className="numbertext">04</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
const Point5 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4">
      <p className="numbertext">05</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
const Point6 = () => {
  return (
    <div className="w-2/3 flex flex-col h-screen justify-center gap-4">
      <p className="numbertext">06</p>
      <p className="title">Solutions</p>
      <p className="desc">
        Discover the power of unified software solutions with our platform.
        Streamline your business processes, enhance productivity, and drive
        innovation with our integrated approach. <br />
        <br />
        Tailored for diverse industries, our platform offers scalable, secure,
        and user-friendly tools to meet your unique needs and propel your
        business forward.
      </p>
    </div>
  );
};
export default function Points() {
  const component = useRef(null);
  const { scrollYProgress } = useScroll();

  const [activePoint, setActivePoint] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.1 && latest < 0.22) {
      setActivePoint(<Point1 />);
      setActiveIndex(1);
    } else if (latest >= 0.22 && latest < 0.295) {
      setActivePoint(<Point2 />);
      setActiveIndex(2);
    } else if (latest >= 0.295 && latest < 0.37) {
      setActivePoint(<Point3 />);
      setActiveIndex(3);
    } else if (latest >= 0.37 && latest < 0.445) {
      setActivePoint(<Point4 />);
      setActiveIndex(4);
    } else if (latest >= 0.445 && latest < 0.52) {
      setActivePoint(<Point5 />);
      setActiveIndex(5);
    } else if (latest >= 0.52 && latest < 0.64) {
      setActivePoint(<Point6 />);
      setActiveIndex(6);
    } else {
      setActivePoint(null);
    }
  });

  useEffect(() => {
    if (component.current) {
      const ctx = gsap.context(() => {
        gsap.to(".Points-div", {
          scrollTrigger: {
            trigger: ".Points-div",
            start: "top top", // Start pinning when the top of .Points hits the top of the viewport
            end: () => `+=700%`, // Ends 600% viewport height after the start
            pin: true,
          },
        });
      }, component.current); // Use the ref as the context selector scope

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="Points"
      className="Points flex justify-between"
      ref={component}
    >
      <div className="w-1/2" />
      <div className="w-1/2 flex justify-around h-screen Points-div">
        {activePoint}
        <div className="flex items-center flex-col justify-around w-1/5 h-full py-12">
          <div
            className={`w-1.5 ${
              activeIndex == 1 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
          <div
            className={`w-1.5 ${
              activeIndex == 2 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
          <div
            className={`w-1.5 ${
              activeIndex == 3 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
          <div
            className={`w-1.5 ${
              activeIndex == 4 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
          <div
            className={`w-1.5 ${
              activeIndex == 5 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
          <div
            className={`w-1.5 ${
              activeIndex == 6 ? "bg-white" : "bg-[#2F2F2F]"
            } scroll-progress rounded`}
          />
        </div>
      </div>
    </section>
  );
}