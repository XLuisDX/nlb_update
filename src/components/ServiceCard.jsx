import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./ServiceCardStyles.css";

const ServiceCard = ({ title, text, img, gallery = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const hasGallery = gallery && gallery.length > 0;

  const openModal = () => {
    if (hasGallery) {
      setCurrentImageIndex(0);
      setIsImageLoading(true);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goToImage = (index) => {
    if (index !== currentImageIndex) {
      setIsImageLoading(true);
      setCurrentImageIndex(index);
    }
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
              <div className="gallery-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{gallery.length}</span>
              </div>
            )}
          </div>
        )}
        <div className="service-card-body">
          <h3>{title}</h3>
          <p>{text}</p>
          {hasGallery && (
            <button className="view-gallery-btn" onClick={openModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              View Gallery
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal-fullscreen" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="modal-header">
              <div className="modal-header-left">
                <span className="modal-badge">{title}</span>
                <span className="modal-counter">
                  {currentImageIndex + 1} of {gallery.length}
                </span>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Main Image Area */}
            <div className="modal-main-content">
              <button className="nav-btn nav-prev" onClick={prevImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="main-image-container">
                {isImageLoading && (
                  <div className="image-loader">
                    <div className="loader-spinner"></div>
                  </div>
                )}
                <img
                  src={gallery[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className={`main-image ${isImageLoading ? 'loading' : 'loaded'}`}
                  onLoad={() => setIsImageLoading(false)}
                />
              </div>

              <button className="nav-btn nav-next" onClick={nextImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="thumbnail-strip">
              <div className="thumbnail-track">
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`thumb ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                    <div className="thumb-overlay"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentImageIndex + 1) / gallery.length) * 100}%` }}
              ></div>
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
