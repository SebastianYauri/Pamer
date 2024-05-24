import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const universities = [
  { name: 'San Marcos', logo: '/logo-unmsm.svg' },
  { name: 'UNI', logo: '/logo-uni.svg' },
  { name: 'PUCP', logo: '/logo-pucp.svg' },
  { name: 'ULIMA', logo: '/logo-ulima.svg' },
];

const Home = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

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
      <div className="custom-arrow custom-arrow-next" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  }

  return (
    <div>
      <div className="p-8">
        <h2 className="text-3xl font-bold">Bienvenido a Mi Academia</h2>
        <p className="mt-4">Aquí encontrarás los mejores cursos para mejorar tus habilidades.</p>
      </div>

      {/* Carrusel con flechas de navegación personalizadas */}
      <div className="w-full mb-20">
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Imagen 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Imagen 2" className="w-full h-auto" />
          </div>
          {/* Agregar más imágenes del carrusel aquí */}
        </Slider>
      </div>

      {/* Título y subtítulo */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">CICLOS</h3>
        <p className="text-lg text-gray-500">Elige la preparación preuniversitaria</p>
      </div>

      {/* Sección de universidades */}
      <div className="flex justify-center gap-4 p-8">
        {universities.map((uni, index) => (
          <div
            key={index}
            className={`border-2 border-black p-4 flex flex-col items-center justify-between h-80 w-80 ${highlightedIndex !== null && highlightedIndex !== index ? 'opacity-50 transition-opacity duration-500' : ''}`}
            onMouseEnter={() => setHighlightedIndex(index)}
            onMouseLeave={() => setHighlightedIndex(null)}
          >
            <img
              src={uni.logo}
              alt={`${uni.name} logo`}
              className="w-48 h-48 object-contain mb-4"
              style={highlightedIndex === index ? { filter: 'brightness(120%) transition-filter duration-500' } : {}}
            />
            <p className="text-center font-semibold">{uni.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
