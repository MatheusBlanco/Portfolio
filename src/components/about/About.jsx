import React from "react";
import me from "../../assets/PXL_20211029_130812167.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  );
};

export default About;
