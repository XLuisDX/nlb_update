import "./ServiceAreaStyles.css"
import { motion } from "framer-motion"
import { FaMapMarkerAlt } from "react-icons/fa"

const ServiceArea = () => {
  return (
    <motion.section
      id="service-area"
      className="service-area"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="service-area-header"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="service-area-kicker">Where we work</p>
        <h2 className="service-area-title">Serving Augusta, NC, SC, GA</h2>
        <p className="service-area-subtitle">
          We are based near Augusta and typically serve homeowners and property
          owners across Georgia, South Carolina and North Carolina within a
          practical driving distance.
        </p>
      </motion.div>

      <div className="service-area-grid">
        <motion.div
          className="service-area-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="service-area-badges">
            <div className="area-badge">
              <FaMapMarkerAlt />
              <span>Augusta</span>
            </div>
            <div className="area-badge">
              <FaMapMarkerAlt />
              <span>South Carolina</span>
            </div>
            <div className="area-badge">
              <FaMapMarkerAlt />
              <span>North Carolina</span>
            </div>
            <div className="area-badge">
              <FaMapMarkerAlt />
              <span>Georgia</span>
            </div>
          </div>

          <p className="service-area-body">
            Most of our work is around the greater Augusta area and nearby
            communities in Georgia and South Carolina. For larger projects, we
            can travel farther across the tri-state region.
          </p>

          <ul className="service-area-list">
            <li>Tree removal and storm cleanup at residential properties</li>
            <li>Clearing driveways, yards and access areas after strong winds</li>
            <li>Scheduled pruning and maintenance for long-term clients</li>
          </ul>

          <p className="service-area-note">
            Not sure if your property is within our service area? Send us a
            message with your address and we will confirm availability.
          </p>
        </motion.div>

        <motion.div
          className="service-area-map-wrapper"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="service-area-map-card">
            <div className="service-area-map-header">
              <span>Coverage map</span>
              <p>Approximate area for regular service</p>
            </div>
            <div className="service-area-map-frame">
              <iframe
                title="Service area map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13184283.886465328!2d-81.973!3d34.200!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9fba8bc91d97b%3A0x2b735e5f991690dd!2sAugusta%2C%20GA!5e0!3m2!1sen!2sus!4v1731637500000"  
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServiceArea
