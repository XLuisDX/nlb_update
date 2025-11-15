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
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <h4>
                <FaHome
                  size={15}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
                Warrenville SC 29851
              </h4>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={15}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
                +1 803-292-1649
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={15}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
                norbertolainez87@icloud.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4 style={{ color: "#F8D90F" }}>About the company</h4>
            <p>
              Serving Augusta and surrounding areas with tree pruning and
              removal services. Low footprint cleanups and fully insured. Call
              now to schedule a free consultation
            </p>
            <div className="social">
              <a
                href="https://www.facebook.com/profile.php?id=61564112130479"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook
                  size={20}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://youtube.com/@norbertolainez3256?si=Ml2FikySg-tz3kvE"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube
                  size={20}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.google.com/search?q=nlb+tree+service+and+gardening+llc&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQ0xMTA1NTg0MDlqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogle
                  size={20}
                  style={{ color: "#F8D90F", marginRight: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
