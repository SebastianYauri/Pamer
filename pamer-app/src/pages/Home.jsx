// src/pages/Home.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow custom-arrow-next"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow custom-arrow-prev"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  }

  return (
    <div>

      {/* Carrusel con flechas de navegación personalizadas */}
      <div className="w-full mb-20"> {/* Aumentado el margen inferior */}
        <Slider {...settings}>
          <div>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Imagen 1"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Imagen 2"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Imagen 3"
              className="w-full h-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
