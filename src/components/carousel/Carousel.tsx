import { useState } from "react";
import styles from "./Carousel.module.css";
import type ICarousel from "../../interfaces/ICarousel";

const Carousel: React.FC<ICarousel> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={styles.carousel}>
      <h4
        style={{
          textAlign: "center",
          fontSize: "0.8rem",
        }}
      >
        GALERIA DE PROJETOS
      </h4>
      <button className={`${styles.btn} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.slideContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={styles.image}
        />
      </div>

      <button className={`${styles.btn} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
