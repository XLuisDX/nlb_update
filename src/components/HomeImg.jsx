import "./HomeImgStyles.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const HomeImg = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-inner">
        <motion.div
          className="hero-left"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="hero-pill">Tree care · Removal · Storm response</p>

          <motion.h1
            className="hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Safe, clean tree service
            <span>for your home</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Family-owned tree service helping homeowners in Augusta, North
            Carolina, South Carolina and Georgia remove hazardous trees, shape
            overgrown canopies and restore their yards after storms.
          </motion.p>

          <motion.p
            className="hero-phone"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Call or text
            <span>(803) 292-1649</span>
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a href="#contact" className="hero-btn-primary">
              Get a free estimate
            </a>
            <a href="#services" className="hero-btn-secondary">
              View services
            </a>
          </motion.div>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <span className="hero-tag">Family-owned</span>
            <span className="hero-tag">Fully insured</span>
            <span className="hero-tag">Serving Augusta, NC, SC, GA</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="hero-card">
            <div className="hero-card-header">
              <img
                src={logo}
                alt="NLB Tree Service logo"
                className="hero-logo"
              />
              <div className="hero-card-title">
                <span>Request a free quote</span>
                <p>Tell us about your property and tree needs.</p>
              </div>
            </div>

            <div className="hero-card-body">
              <form className="hero-form">
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input id="name" type="text" placeholder="John Doe" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" placeholder="(803) 000-0000" />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Property address</label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Street, city, ZIP code"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="details">What do you need help with?</label>
                  <textarea
                    id="details"
                    rows="3"
                    placeholder="Tree removal, pruning, storm damage, etc."
                  />
                </div>

                <button type="submit" className="hero-form-btn">
                  Apply for a quote
                </button>

                <p className="hero-form-note">
                  We will reach out as soon as possible to confirm details and
                  schedule a visit.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeImg;
