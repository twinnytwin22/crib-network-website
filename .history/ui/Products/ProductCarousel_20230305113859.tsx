'use client'
import { useState } from "react";
import styles from "styles//Carousel.module.css";



const items = [
    {
      title: "Item 1",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Item+1",
    },
    {
      title: "Item 2",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Item+2",
    },
    {
      title: "Item 3",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Item+3",
    },
    {
      title: "Item 4",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Item+4",
    },
    {
      title: "Item 5",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Item+5",
    },
  ];

const ProductCarousel = () => {
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
    <div className='flex'>
      <button onClick={handlePrevClick}>Prev</button>
      <div className=''>
        {items.map((item: any, index: any) => (
          <div
            key={item}
            className={`${styles.item} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ProductCarousel;
