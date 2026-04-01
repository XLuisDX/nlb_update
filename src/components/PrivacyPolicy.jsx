import { motion } from "framer-motion";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <motion.main
      className="privacy-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="privacy-container">
        <h1 className="privacy-title">Data Policy</h1>

        <p>
          If you complete a contact form or provide us with your email address
          to receive our emails, your personal data will be incorporated into a
          database owned by Norberto Linez. To exercise your rights of access,
          rectification, cancellation or opposition, you can contact us through
          the email address{" "}
          <a href="mailto:norbertolainez2024@gmail.com">
            norbertolainez2024@gmail.com
          </a>
          .
        </p>

        <p>Now, let is explain some aspects about our privacy policy:</p>

        <h2>Who are we?</h2>
        <p>
          We are a family owned and operated tree and landscape company serving
          the Augusta area since 2020. Whether you need tree removal, pruning,
          planting or treating, or lawn care, shrub trimming or landscaping, we
          have the skills, experience and equipment to handle any project. We are
          licensed, insured and certified. You can learn more about us at{" "}
          <a
            href="https://nlbtreeserviceandgardering.com/#about"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nlbtreeserviceandgardering.com/#about
          </a>
          .
        </p>

        <h2>What data do we collect?</h2>
        <p>In the case of contact forms:</p>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
        <p>In the case of the Newsletter:</p>
        <ul>
          <li>Email</li>
        </ul>

        <h2>What do we use your data for?</h2>
        <p>We will process your data for the following purposes:</p>
        <ol>
          <li>Provide you with the information that you have requested from us.</li>
          <li>Send you the Newsletter, if you have expressly requested it.</li>
          <li>
            Content: We will send you promotional communications related to any
            product or service available on our website.
          </li>
          <li>
            Media: We will generally send communications by email. We will call
            you only if you have provided your phone number in the contact form
            and need information.
          </li>
        </ol>

        <h2>Categories of personal data</h2>
        <p>
          The information we request is necessary for us to carry out the
          purposes detailed above, such as your name, phone number, and email
          address.
        </p>

        <h2>Changes</h2>
        <p>
          We will make changes to our Privacy Policy from time to time. If these
          changes affect your rights, we will inform you by email (to the last
          address you provided us). In any case, the revised Privacy Policy will
          always be accessible on our website.
        </p>
      </div>
    </motion.main>
  );
};

export default PrivacyPolicy;