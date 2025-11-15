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
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="form-title"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="input-group">
          <label>Name:</label>
          <input type="text" {...formik.getFieldProps("name")} placeholder="Type your name" />
          {formik.touched.name && formik.errors.name && <span className="error-message">{formik.errors.name}</span>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" {...formik.getFieldProps("email")} placeholder="Type your email" />
          {formik.touched.email && formik.errors.email && <span className="error-message">{formik.errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Message:</label>
          <textarea rows="6" placeholder="Type your message" {...formik.getFieldProps("message")}></textarea>
          {formik.touched.message && formik.errors.message && <span className="error-message">{formik.errors.message}</span>}
        </div>

        <motion.button
          className="btn"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;
