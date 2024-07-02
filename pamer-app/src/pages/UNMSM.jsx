import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUsers, FaMapMarkerAlt, FaClock, FaFileDownload } from 'react-icons/fa';

const UNMSM = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div>
      {/* Banner Carousel */}
      <div className="max-w-screen-xl mx-auto mb-8 w-3/4">
        <Slider {...settings} className="w-full">
          <div>
            <img src="/SM1.png" alt="UNMSM Banner 1" className="w-full h-auto object-contain" style={{ maxHeight: '300px' }} />
          </div>
          <div>
            <img src="/SM2.png" alt="UNMSM Banner 2" className="w-full h-auto object-contain" style={{ maxHeight: '300px' }} />
          </div>
        </Slider>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Universidad Nacional Mayor de San Marcos (UNMSM)</h2>
        <div className="flex items-center mb-4 space-x-4">
          <FaUsers className="text-2xl text-gray-700" />
          <p>Dirigido a estudiantes interesados en la educación superior en la universidad más antigua de América.</p>
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <FaMapMarkerAlt className="text-2xl text-gray-700" />
          <p>Sedes: Lima, Cercado de Lima.</p>
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <FaClock className="text-2xl text-gray-700" />
          <div>
            <p>Modalidad: Presencial y Virtual</p>
            <p>Inicios: Consulta por nuestros próximos inicios</p>
            <p>Duración: -</p>
            <p>Horario:</p>
            <ul className="list-disc ml-6">
              <li>Lunes a viernes de 8:00 am a 6:00 pm.</li>
              <li>Sábados de 8:00 am a 12:00 pm.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaFileDownload className="text-2xl text-gray-700" />
          <a href="#" className="underline">Descargar aquí folleto informativo</a>
        </div>
      </div>
    </div>
  );
};

export default UNMSM;
