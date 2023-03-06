'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";
import { items } from "./Products";


const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen w-full p-10 md:p-20 mx-auto">
    <Slider {...settings}>
      {items.map((item, i) => (
        <div className="h-screen mx-auto" key={i}>
            <ProductItem item={item}/>
     </div>
      ))}
    </Slider></div>
  );
};

export default ProductCarousel;
