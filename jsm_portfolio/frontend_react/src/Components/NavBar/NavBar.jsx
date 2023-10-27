import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
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
        <img src={images.Black_logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "industry", "contact"].map((item) => (
          <li
            className="app__flex p-text"
            key={`link-${item}`}
            onClick={() => handleScrollToSection(item)}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["home", "about", "work", "skills", "contact"].map((item) => (
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
