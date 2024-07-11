import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SlideCard from '../SlideCard/SlideCard';

const MultiCarousel = () => {
  const sliderRef = useRef(null);

  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow slick-prev absolute top-0 left-0 z-10 bg-transparent border-none cursor-pointer flex items-center justify-center"
      aria-label="Previous slide"
    >
      <FaChevronLeft className="text-white text-2xl" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow slick-next absolute top-0 right-0 z-10 bg-transparent border-none cursor-pointer flex items-center justify-center"
      aria-label="Next slide"
    >
      <FaChevronRight className="text-white text-2xl" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const myData = [
    {
      "id": 1,
      "estate_title": "Luxury Villa with view",
      "segment_name": "Residential",
      "description": "Spacious luxury villa with stunning ocean view, located in a prime residential area. This luxurious property offers ample space and breathtaking vistas of the ocean, perfect for those seeking an upscale lifestyle. Priced at $2,500,000, this villa boasts 5000 sq ft of living space and is situated in Malibu, California. Key facilities include a spacious living room, swimming pool, and modern kitchen",
      "price": 13000,
      "status": "Sale",
      "area": 5000,
      "location": "California",
      "facilities": ["Living Room", "Swimming Pool", "Kitchen"],
      "image": "https://th.bing.com/th/id/R.53732c8de38c280d1c47bdb9db329331?rik=FgvSE7JiYjpwEg&pid=ImgRaw&r=0"
    },
    {
      "id": 2,
      "estate_title": "Modern Loft Apartment",
      "segment_name": "Residential",
      "description": "Stylish loft apartment with contemporary design, perfect for urban living. This modern apartment offers an open floor plan and trendy amenities, making it ideal for young professionals or couples. Priced at $1,200,000, it features 1500 sq ft of living space and is located in Manhattan, New York. Key facilities include an open floor plan, gym, and rooftop deck.",
      "price": 34000,
      "status": "Sale",
      "area": 1500 ,
      "location": "New York",
      "facilities": ["Open Floor Plan", "Gym", "Roof Deck"],
      "image": "https://www.gapurabali.com/sites/default/files/dsc04277.jpg"
    },
    {
      "id": 3,
      "estate_title": "Cozy Suburban Home",
      "segment_name": "Residential",
      "description": "Charming suburban home with a spacious backyard and beautiful landscaping. This cozy home offers a tranquil retreat from city life while still providing convenient access to amenities. Priced at $600,000, it features 2500 sq ft of living space and is situated in Austin, Texas. Key facilities include a backyard, garage, and fireplace.",
      "price": 50000,
      "status": "Sale",
      "area": 2500 ,
      "location": "Texas",
      "facilities": ["Backyard", "Garage", "Fireplace"],
      "image": "https://th.bing.com/th/id/R.9869cf60d233a288a29a0f7523fc4ae9?rik=w1%2b85tB9Woegtw&pid=ImgRaw&r=0"
    },
    {
      "id": 4,
      "estate_title": "Luxury Beachfront Condo",
      "segment_name": "Residential",
      "description": "Exquisite beachfront condo with panoramic views of the ocean and resort-style amenities. This luxurious condo offers unparalleled beachfront living with access to exclusive amenities. Priced at $3,000,000, it boasts 3500 sq ft of living space and is located in Miami Beach, Florida. Key facilities include beach access, a spa, and concierge service.",
      "price": 90000,
      "status": "Sale",
      "area": 3500,
      "location": "Florida",
      "facilities": ["Beach Access", "Spa", "Concierge Service"],
      "image": "https://th.bing.com/th/id/R.a04e983800e83bef89649473ec28394f?rik=8LSmBGmw2cQEgw&pid=ImgRaw&r=0"
    },
    {
      "id": 5,
      "estate_title": "Downtown Office Space",
      "segment_name": "Commercial",
      "description": " Prime office space located in the heart of the downtown business district. This centrally located office offers convenience and accessibility for businesses looking to establish a presence in the city. Available for rent at $5,000 per month, it features 2000 sq ft of space and is situated in Chicago, Illinois. Key facilities include conference rooms, high-speed internet, and 24/7 security.",
      "price": 34540,
      "status": "Rent",
      "area": 2000,
      "location": "Illinois",
      "facilities": ["Conference Rooms", "High-speed Internet", "24/7 Security"],
      "image": "https://www.schiavello.com/__data/assets/image/0021/41808/lonelyplanet-7.jpg"
    }
  ]
  return (
    <div className="relative m-auto w-full lg:w-11/12">
      <div>
         <h1 className='text-3xl lg:text-5xl text-center text-blue-600 font-mono font-bold mt-10 mb-5'>Recently sold</h1>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {
          myData.map((d,index)=> <SlideCard key={index} d={d}></SlideCard>)
        }

        {/* <div><SlideCard /></div>
        <div><SlideCard /></div>
        <div><SlideCard /></div> */}
      </Slider>
    </div>
  );
};

export default MultiCarousel;




// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons library
// import { HiArrowLeft,HiArrowRight } from "react-icons/hi2";

// const MultiCarousel = () => {
//   const sliderRef = useRef(null);

//   const slides = [
//     { id: 1, title: 'Slide 1' },
//     { id: 2, title: 'Slide 2' },
//     { id: 3, title: 'Slide 3' },
//     // Add more slides as needed
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ],
//     prevArrow: (
//       <button className="slick-arrow slick-prev absolute top-0 left-0 z-10 bg-transparent border-none cursor-pointer flex items-center">
//         <FaChevronLeft className="text-white" />
//       </button>
//     ),
//     nextArrow: (
//       <button className="slick-arrow slick-next absolute top-0 right-0 z-10 bg-transparent border-none cursor-pointer flex items-center">
//         <FaChevronRight className="text-white" />
//       </button>
//     )
//   };

//   const handleMoveLeft = () => {
//     sliderRef.current.slickPrev();
//   };

//   const handleMoveRight = () => {
//     sliderRef.current.slickNext();
//   };

//   return (
//     <div className="relative m-auto w-9/12">
//       <h2>Multi Carousel</h2>
//       <div className='mb-36'>
//       <button className="absolute top-1/2 right-12 transform -translate-y-1/2  text-black font-bold px-4 py-2 rounded-md" onClick={handleMoveLeft}>
//       <HiArrowLeft />
//       </button>
//       <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black font-bold px-4 py-2 rounded-md" onClick={handleMoveRight}>
//         <HiArrowRight/>
//       </button>

//       </div>
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map(slide => (
//           <div key={slide.id}>
//             <h3>{slide.title}</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere ex itaque, quasi nisi voluptatem rem incidunt sunt repellendus tempore?</p>
//           </div>
//         ))}
//       </Slider>
     
//     </div>
//   );
// };

// export default MultiCarousel;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const MultiCarousel = () => {
//   // Sample data for slides
//   const slides = [
//     { id: 1, title: 'Slide 1' },
//     { id: 2, title: 'Slide 2' },
//     { id: 3, title: 'Slide 3' },
//     // Add more slides as needed
//   ];

//   // Settings for the slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Number of slides to show at once
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div>
//       <h2>Multi Carousel</h2>
//       <Slider {...settings}>
//         {slides.map(slide => (
//           <div key={slide.id}>
//             <h3>{slide.title}</h3>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default MultiCarousel;
