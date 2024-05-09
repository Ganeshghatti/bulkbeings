import React from "react";
import "./Footer.scss";
import MeshBlender from "../../components/svg/MeshBlender";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="mesh">
        <MeshBlender />
      </div>
      <div className="footer-container flex flex-col w-full items-center justify-center">
        <img src="/assets/images/FooterLogo.png" alt="" className="h-4/5 w-4/5 object-contain"/>
        <div className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1435 2"
            fill="none"
          >
            <path d="M0 1H1435" stroke="white" />
          </svg>
        </div>
        <div className="flex justify-around w-full items-center md:flex-col">
          <p className="copyright md:text-center">© 2023 Attio Ltd. All rights reserved.</p>
          <div className="flex  md:w-full md:justify-around">
            <img src="/assets/images/icons/Facebook.png" alt="" />
            <img src="/assets/images/icons/Instagram.png" alt="" />
            <img src="/assets/images/icons/X.png" alt="" />
            <img src="/assets/images/icons/Linkedin.png" alt="" />
            <img src="/assets/images/icons/Youtube.png" alt="" />
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
