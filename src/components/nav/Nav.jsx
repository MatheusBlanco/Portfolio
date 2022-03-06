/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#");
  const home = "#";
  const contact = "#contact";
  const about = "#about";
  const services = "#services";
  const experience = "#experience";

  const changeActive = (activeValue) => {
    return active === activeValue ? "active" : "";
  };

  return (
    <nav>
      <a
        href={home}
        className={changeActive(home)}
        onClick={() => setActive(home)}
      >
        <AiOutlineHome />
      </a>
      <a
        href={about}
        className={changeActive(about)}
        onClick={() => setActive(about)}
      >
        <AiOutlineUser />
      </a>
      <a
        href={experience}
        className={changeActive(experience)}
        onClick={() => setActive(experience)}
      >
        <BiBook />
      </a>
      <a
        href={services}
        className={changeActive(services)}
        onClick={() => setActive(services)}
      >
        <RiServiceLine />
      </a>
      <a
        href={contact}
        className={changeActive(contact)}
        onClick={() => setActive(contact)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
