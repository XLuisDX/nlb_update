import "./ServicesStyles.css";
import ServiceCard from "./ServiceCard";
import ServiceCardData from "./ServiceCardData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC | Services</title>
        <meta
          name="description"
          content="Professional tree services in  all CSRA area"
        />
        <link
          rel="canonical"
          href="https://nlbtreeserviceandgardering.com/services"
        />
      </Helmet>

      <motion.section
        className="services-section"
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="services-header">
          <p className="services-kicker">Our services</p>
          <h2>Tree care you can rely on</h2>
          <p className="services-subtitle">
            From hazardous removals to precise pruning and storm clean-up, we
            handle every job with safety, care and respect for your property.
          </p>
        </div>

        <motion.div
          className="service-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {ServiceCardData.map((val, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard title={val.title} text={val.text} img={val.img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Services;
