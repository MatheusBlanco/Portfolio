import React from "react";
import CTA from "./CTA";
import MeImage from "../../assets/PXL_20211029_130812167-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Matheus Salles Blanco</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MeImage} alt="me" />
        </div>
        <a className="scroll__down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
