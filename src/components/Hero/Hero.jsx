import React, { useRef } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const sliderRef = useRef(null);

  // Custom arrow components for the slider
  // const PrevArrow = ({ onClick }) => (
  //   <button
  //     className="slick-arrow slick-prev"
  //     onClick={onClick}
  //     aria-label="Previous slide"
  //   >
  //     <FaChevronLeft className="text-white text-3xl" />
  //   </button>
  // );

  // const NextArrow = ({ onClick }) => (
  //   <button
  //     className="slick-arrow slick-next"
  //     onClick={onClick}
  //     aria-label="Next slide"
  //   >
  //     <FaChevronRight className="text-white text-3xl" />
  //   </button>
  // );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],

  };

  return (
    <div className="relative mt-4">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src="https://i.pinimg.com/originals/65/b3/a7/65b3a70eb2bd5eeac48fef882e25b036.jpg" alt="Landscape" className="w-full h-[44rem]" />
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/e9/fe/4b/e9fe4b3930148b8ebddb1cb316b5e8aa.jpg" alt="Cityscape" className="w-full h-[44rem]" />
        </div>
        <div>
          <img src="https://cdn.mos.cms.futurecdn.net/2DcaTUKWhPbWBYnijCwjba.jpg" alt="Beach" className="w-full h-[44rem]" />
        </div>
        <div>
          <img src="https://stories.forbestravelguide.com/wp-content/uploads/2018/04/HERO-HiddenRestaurantsinSF-Homage-CreditHomage.jpg" alt="Road" className="w-full h-[44rem]" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
