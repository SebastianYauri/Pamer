import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUsers, FaMapMarkerAlt, FaClock, FaFileDownload } from 'react-icons/fa';

const PUCP = () => {
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
    <div className="px-4 md:px-8 lg:px-12">
      {/* Banner Carousel */}
      <div className="max-w-screen-xl mx-auto mb-8">
        <Slider {...settings} className="w-full">
          <div>
            <img
              src="Pamer/pucp1.webp"
              alt="UNMSM Banner 1"
              className="w-full h-auto object-contain rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>
          <div>
            <img
              src="Pamer/pucp2.webp"
              alt="UNMSM Banner 2"
              className="w-full h-auto object-contain rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </Slider>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Pontificia Universidad Católica del Perú (PUCP)</h2>
        <div className="flex items-center mb-4 space-x-2 md:space-x-4">
          <FaUsers className="text-2xl text-gray-700" />
          <p className="text-sm md:text-base">
            Dirigido a estudiantes que buscan una formación integral basada en la excelencia académica.
          </p>
        </div>
        <div className="flex items-center mb-4 space-x-2 md:space-x-4">
          <FaMapMarkerAlt className="text-2xl text-gray-700" />
          <p className="text-sm md:text-base">Sedes: Lima, San Miguel.</p>
        </div>
        <div className="flex items-center mb-4 space-x-2 md:space-x-4">
          <FaClock className="text-2xl text-gray-700" />
          <div className="text-sm md:text-base">
            <p>Modalidad: Presencial y Virtual</p>
            <p>Inicios: Consulta por nuestros próximos inicios</p>
            <p>Duración: -</p>
            <p>Horario:</p>
            <ul className="list-disc ml-4 md:ml-6">
              <li>Lunes a viernes de 8:00 am a 6:00 pm.</li>
              <li>Sábados de 8:00 am a 12:00 pm.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <FaFileDownload className="text-2xl text-gray-700" />
          <a href="#" className="text-sm md:text-base underline">
            Descargar aquí folleto informativo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PUCP;
