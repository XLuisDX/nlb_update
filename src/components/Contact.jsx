import "./FormStyles.css";
import { Helmet } from "react-helmet-async";
import "./Contact.css";
import Form from "./Form";
import HeroImg3 from "./HeroImg3";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service contact" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <HeroImg3 />
      <div className="contact-container">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
