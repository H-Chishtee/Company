import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import "./NavBar.scss";
import { images } from "../../Constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleScrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "Who we are", "What we do", "industries", "contact"].map(
          (item) => (
            <li
              className="app__flex p-text"
              key={`link-${item}`}
              onClick={() => handleScrollToSection(item)}
            >
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-logo cell">
        <a href="tel:+44 7821 949281" className="p-textt">
          <FaPhone className="phone-icon rotated" />
          <div className="cellnum">+44 7821 949281</div>
        </a>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {[
                "home",
                "Who we are",
                "What we do",
                "industries",
                "contact",
              ].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
