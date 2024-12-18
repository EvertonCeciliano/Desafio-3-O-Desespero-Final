import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/splide/dist/css/splide.min.css";
import "./ImageSlider.css";
export const Carousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1.5,
        perMove: 1,
        gap: "21px",
        autoplay: true,
        interval: 3000,
        pagination: true,
        arrows: true,
        focus: 0,
        breakpoints: {
          768: {
            perPage: 1.5,
          },
        },
      }}
      className="splide-custom"
    >
      <SplideSlide>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/slide1.png"
          alt="Inspiração 1"
       
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/slide2.png"
          alt="Inspiração 2"
      
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/slide3.png"
          alt="Inspiração 3"
        
        />
      </SplideSlide>

    </Splide>
  );
};