import "./TestimonialsStyles.css"
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Zw Salgado",
    role: "Homeowner",
    location: "Augusta, GA",
    quote:
      "These here are simply awesome people, with awesome skills. These guys are a real example of skill, professionalism and dedication at a fair price.",
  },
  {
    name: "Michelle Pappagallo",
    role: "Property owner",
    location: "North Augusta, SC",
    quote:
      "Norberto and his crew have done several projects for us, and they do a great job! Very pleased with their work.",
  },
  {
    name: "Catheryne L.",
    role: "Homeowner",
    location: "Warrenville, SC",
    quote:
      "Awesome costumer service. Stump removal was excellent! As soon and my budget allows going to beg them to come remove logs and junk from our back yard as well as give curb appeal to front.",
  },
]

const Testimonials = () => {
  return (
    <motion.section
      className="testimonials"
      id="testimonials"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="testimonials-kicker">What our clients say</p>
        <h2 className="testimonials-title">Trusted by local homeowners</h2>
        <p className="testimonials-subtitle">
          Real feedback from families and property owners who trusted us with
          their trees, yards and safety.
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="testimonial-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar">
                <span>{item.name.charAt(0)}</span>
              </div>
              <div className="testimonial-meta">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">
                  {item.role} · {item.location}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Testimonials
