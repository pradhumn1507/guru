import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import banner from '../Asssets/banner.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
 const slides = [
  {
    image:banner
  },
  {
    image:banner
  },
  {
    image:banner
  }
];

const Carousel2 = () => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return <Image src={slide.image} height="auto" width="200px" />;
      })}
    </Carousel>
  );
};

export default Carousel2;