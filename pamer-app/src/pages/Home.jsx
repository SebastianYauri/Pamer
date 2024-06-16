import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

const universities = [
  { name: 'San Marcos', logo: '/logo-unmsm.svg' },
  { name: 'UNI', logo: '/logo-uni.svg' },
  { name: 'PUCP', logo: '/logo-pucp.svg' },
  { name: 'ULIMA', logo: '/logo-ulima.svg' },
];

const Home = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const promos = [
    { number: 'Preparate', title: 'para dar el gran salto' },
    { number: '+11000', title: 'ingresantes a San Marcos' },
    { number: '+170', title: 'primeros puestos' },
    { number: 'Modalidades', title: 'PRESENCIAL Y VIRTUAL' },
    { number: '+35 años', title: 'De experiencia' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-content">
      <div className="p-8">
        <h2 className="text-3xl font-bold">Bienvenido a Mi Academia</h2>
        <p className="mt-4">Aquí encontrarás los mejores cursos para mejorar tus habilidades.</p>
      </div>

      <div className="w-full mb-20">
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Imagen 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Imagen 2" className="w-full h-auto" />
          </div>
        </Slider>
      </div>

      <div className="flex flex-col items-center p-8">
        <h3 className="text-2xl font-bold mb-4">CICLOS</h3>
        <p className="text-lg mb-8">Elige la preparación preuniversitaria que más se ajuste a tus necesidades y alcanza tus metas académicas.</p>
        <div className="flex flex-wrap justify-center gap-4">
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

      <div className="bg-blue-500 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
            <p className="text-yellow-300 text-5xl font-bold">{promos[0].number}</p>
            <p className="text-white text-2xl font-semibold">{promos[0].title}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:w-2/3">
            {promos.slice(1).map((promo, index) => (
              <div key={index} className="text-center flex items-center ml-4">
                <img src="https://via.placeholder.com/40x40" alt="Logo" className="mr-4" />
                <div>
                  <p className="text-yellow-300 text-3xl font-bold">{promo.number}</p>
                  <p className="text-white text-lg font-semibold">{promo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nueva sección con carrusel tipo cubo y mensaje */}
      <div className="flex flex-col lg:flex-row items-center p-8">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold">Estos son nuestros mejores alumnos</h3>
          <p className="mt-4">Conoce a algunos de los estudiantes más destacados que han pasado por nuestra academia.</p>
        </div>
        <div className="lg:w-1/2">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Estudiante 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Estudiante 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Estudiante 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Estudiante 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
