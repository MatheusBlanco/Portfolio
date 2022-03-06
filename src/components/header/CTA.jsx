// @ts-nocheck
import React from "react";
import CV from "../../assets/0ebb4e3f-41da-44a0-8d9e-10efe672a7c1.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
