import PropTypes from "prop-types";
import "./ServiceCardStyles.css";

const ServiceCard = ({ title, text, img }) => {
  return (
    <div className="service-card">
      {img && (
        <div className="service-card-image">
          <img src={img} alt={title} />
        </div>
      )}
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default ServiceCard;
