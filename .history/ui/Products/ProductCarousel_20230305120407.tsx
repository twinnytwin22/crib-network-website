'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Item {
  title: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    title: "Item 1",
    imageUrl: "/blackprint.png",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen w-full p-20 mx-auto">
    <Slider {...settings}>
      {items.map((item, i) => (
        <div className="h-screen mx-auto" key={i}>
        <div key={item.title} className="mx-auto w-lg">
          <img src={item.imageUrl} alt={item.title} className="w-full mx-auto" />
          <div className="text-center mt-2 font-medium">{item.title}</div>
        </div></div>
      ))}
    </Slider></div>
  );
};

export default ProductCarousel;
