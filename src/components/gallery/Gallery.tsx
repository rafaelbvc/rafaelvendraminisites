import Carousel from "../carousel/Carousel";
import carousel1 from "../../assets/carouselImages/carousel1.jpg";
import carousel2 from "../../assets/carouselImages/carousel2.jpg";
import carousel3 from "../../assets/carouselImages/carousel3.jpg";
import carousel4 from "../../assets/carouselImages/carousel4.jpg";
import carousel5 from "../../assets/carouselImages/carousel5.jpg";

const Gallery = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

  return (
    <div id="galery">
      <Carousel images={images} />
    </div>
  );
};

export default Gallery;
