import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <motion.div
      className={color ? "header header-bg" : "header"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.a
        href="#home"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h1>NLB Tree Service and Gardening LLC</h1>
      </motion.a>
      <motion.ul
        className={click ? "nav-menu active" : "nav-menu"}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <li onClick={closeMenu}>
          <a href="#home">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#about">About</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#services">Services</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </motion.ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
