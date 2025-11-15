import "./FormStyles.css";
import { useFormik } from "formik";
import { motion } from "framer-motion";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      window.location.href = `mailto:norbertolainez87@icloud.com?subject=Quick_contact&body= It comes from: ${values.name}. Message: ${values.message}. Email: (${values.email})`;
      resetForm();
    },
  });

  return (
    <motion.div
      className="form-container"
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <h3 className="form-title">Send us a message</h3>

        <div className="input-group">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="input-field"
            placeholder="Type your name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="error-message">{formik.errors.name}</span>
          )}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input-field"
            placeholder="Type your email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="input-field textarea-field"
            placeholder="Type your message"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message && (
            <span className="error-message">{formik.errors.message}</span>
          )}
        </div>

        <motion.button
          className="contact-btn"
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;
