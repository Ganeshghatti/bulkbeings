import React from "react";
import "./Footer.scss";
import MeshBlender from "../../components/svg/MeshBlender";

export default function Footer() {
  return (
    <footer id="footer" className="footer flex flex-col">
      <div className="mesh">
        <MeshBlender />
      </div>
      <div className="footer-container flex flex-col w-full items-center justify-center">
        <img
          src="/assets/images/FooterLogo.png"
          alt=""
          className="h-4/5 w-4/5 object-contain md:h-2/3"
        />
        <div className="w-full md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1435 2"
            fill="none"
          >
            <path d="M0 1H1435" stroke="white" />
          </svg>
        </div>
        <div className="flex justify-around w-full items-center md:flex-col md:flex-1">
          <p className="copyright md:text-center">
            ©2024 Bulk Beings All rights reserved.
          </p>
          <div className="flex  md:w-full md:justify-center md:gap-2">
            <a href="">
              <img
                src="/assets/images/icons/Facebook.png"
                alt=""
                className="md:hidden"
              />
              <img
                src="/assets/images/icons/Facebookphone.png"
                alt=""
                className="md:block hidden"
              />
            </a>
            <a href="">
              <img
                src="/assets/images/icons/Instagram.png"
                alt=""
                className="md:hidden"
              />
              <img
                src="/assets/images/icons/Instagramphone.png"
                alt=""
                className="md:block hidden"
              />
            </a>{" "}
            <a href="">
              <img
                src="/assets/images/icons/X.png"
                alt=""
                className="md:hidden"
              />
              <img
                src="/assets/images/icons/Xphone.png"
                alt=""
                className="md:block hidden"
              />
            </a>{" "}
            <a href="">
              <img
                src="/assets/images/icons/Linkedin.png"
                alt=""
                className="md:hidden"
              />
              <img
                src="/assets/images/icons/Linkedinphone.png"
                alt=""
                className="md:block hidden"
              />
            </a>{" "}
            <a href="">
              <img
                src="/assets/images/icons/Youtube.png"
                alt=""
                className="md:hidden"
              />
              <img
                src="/assets/images/icons/Youtubephone.png"
                alt=""
                className="md:block hidden"
              />
            </a>
           
          </div>
          <div className="flex items-center gap-4 md:w-full md:justify-around">
            <p className="terms-conditions">Terms & Conditions</p>
            <p className="privacy-policy">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
