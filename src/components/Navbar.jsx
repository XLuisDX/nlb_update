import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavClick = (e, section) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={color ? "header header-bg" : "header"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.a
        href="/"
        className="brand"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ type: "spring", stiffness: 120 }}
        onClick={(e) => handleNavClick(e, "home")}
      >
        <img src={logo} alt="NLB Tree Service" className="brand-logo" />
        <div className="brand-text">
          <span className="brand-title">NLB Tree Service & Gardening</span>
          <span className="brand-subtitle">
            Tree care · Removal · Storm response
          </span>
        </div>
      </motion.a>

      <motion.ul
        className={click ? "nav-menu active" : "nav-menu"}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <li>
          <a href="/#home" onClick={(e) => handleNavClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={(e) => handleNavClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="/#services" onClick={(e) => handleNavClick(e, "services")}>
            Services
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </li>
      </motion.ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </motion.div>
  );
};

export default Navbar;
