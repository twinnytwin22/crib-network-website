import { useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevClick}>Prev</button>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div
            key={item}
            className={`${styles.item} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
