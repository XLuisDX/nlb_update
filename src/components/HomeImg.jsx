import { useState } from "react";
import "./HomeImgStyles.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const HomeImg = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    property_address: "",
    project_details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("sending");

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/26259692/unzw8tb/", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d37f9344-7319-49e4-8f8e-9556fc667f94",
          to: "norbertolainez2024@gmail.com",
          subject: "New quote request - NLB Tree Service",
          name: formData.full_name,
          email: formData.email_address,
          phone: formData.phone_number,
          address: formData.property_address,
          message: formData.project_details,
        }),
      });

      setStatus("success");
      setFormData({
        full_name: "",
        phone_number: "",
        email_address: "",
        property_address: "",
        project_details: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

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
            Family-owned tree service helping homeowners in all SCRA area, North
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
            <span className="hero-tag">Serving all SCRA, NC, SC, GA</span>
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
                    <input
                      id="name"
                      name="full_name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone_number"
                      type="tel"
                      placeholder="(803) 000-0000"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email_address"
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Property address</label>
                    <input
                      id="address"
                      name="property_address"
                      type="text"
                      placeholder="Street, city, ZIP code"
                      value={formData.property_address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="details">What do you need help with?</label>
                  <textarea
                    id="details"
                    name="project_details"
                    rows="3"
                    placeholder="Tree removal, pruning, storm damage, etc."
                    value={formData.project_details}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="button"
                  className="hero-form-btn"
                  disabled={status === "sending"}
                  onClick={handleSubmit}
                >
                  {status === "sending" ? "Sending..." : "Apply for a quote"}
                </button>

                {status === "success" && (
                  <p
                    style={{
                      color: "#28a745",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    Message sent! We will reach out to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p
                    style={{
                      color: "#dc3545",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

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
