import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./ServiceCardStyles.css";

const ServiceCard = ({ title, text, img, gallery = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasGallery = gallery && gallery.length > 0;

  const openModal = () => {
    if (hasGallery) {
      setCurrentImageIndex(0);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <>
      <div className="service-card">
        {img && (
          <div
            className={`service-card-image ${hasGallery ? "has-gallery" : ""}`}
            onClick={openModal}
          >
            <img src={img} alt={title} />
            {hasGallery && (
              <div className="gallery-overlay">
                <span className="gallery-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>{gallery.length} photos</span>
                </span>
              </div>
            )}
          </div>
        )}
        <div className="service-card-body">
          <h3>{title}</h3>
          <p>{text}</p>
          {hasGallery && (
            <button className="view-gallery-btn" onClick={openModal}>
              View Gallery
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h3 className="modal-title">{title}</h3>

            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={prevImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="carousel-image-wrapper">
                <img
                  src={gallery[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
              </div>

              <button className="carousel-btn next" onClick={nextImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="carousel-counter">
              {currentImageIndex + 1} / {gallery.length}
            </div>

            <div className="carousel-thumbnails">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceCard;
