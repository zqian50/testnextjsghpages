import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function ImgCarousel({ info }) {
  return (
    <Carousel>
      {info.map((elm, index) => (
        <div key={`carouselImg${index}`}>
          <img
            src={elm.src}
            alt={elm.title}
          />
          <p className="legend">{elm.title}</p>
        </div>
      ))}
    </Carousel>
  )
}
