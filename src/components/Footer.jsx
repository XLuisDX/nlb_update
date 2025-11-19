import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service footer" />
        <link rel="canonical" href="https://nlbtreeserviceandgardering.com" />
      </Helmet>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <div className="footer-item">
                <FaHome className="footer-icon" />
                <span>Warrenville, SC 29851</span>
              </div>
              <div className="footer-item">
                <FaPhone className="footer-icon" />
                <a href="tel:+18032921649">(803) 292-1649</a>
              </div>
              <div className="footer-item">
                <FaMailBulk className="footer-icon" />
                <a href="mailto:norbertolainez87@icloud.com">
                  norbertolainez87@icloud.com
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">About the company</h3>
              <p className="footer-text">
                Serving all CSRA and surrounding areas with safe tree pruning
                and removal services. Low-footprint cleanups and fully insured.
                Call to schedule a free consultation and get a quote.
              </p>

              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=61564112130479"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://youtube.com/@norbertolainez3256?si=Ml2FikySg-tz3kvE"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.google.com/search?q=nlb+tree+service+and+gardening+llc"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google"
                >
                  <FaGoogle />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © {new Date().getFullYear()} NLB Tree Service and Gardening LLC.
              All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
