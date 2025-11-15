import HeroImg2 from "./HeroImg2";
import "./ServicesStyles.css";
import ServiceCard from "./ServiceCard";
import ServiceCardData from "./ServiceCardData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree services" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <HeroImg2 />
      <motion.div
        className="work-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="service-container">
          {ServiceCardData.map((val, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ServiceCard title={val.title} text={val.text} img={val.img} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Services;
