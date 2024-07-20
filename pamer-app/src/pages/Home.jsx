import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const universities = [
  { name: 'San Marcos', logo: 'Pamer/logo-unmsm.svg' },
  { name: 'UNI', logo: 'Pamer/logo-uni.svg' },
  { name: 'PUCP', logo: 'Pamer/logo-pucp.svg' },
  { name: 'ULIMA', logo: 'Pamer/logo-ulima.svg' },
];

const Home = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);

  const [promosInViewRef, promosInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [cyclesInViewRef, cyclesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const promos = [
    { number: '11000', title: 'ingresantes a San Marcos' },
    { number: '170', title: 'primeros puestos' },
    { number: '35', title: 'Años de experiencia' },
    { number: '6', title: 'Sedes en todo Lima' },
  ];

  const faqs = [
    {
      question: "¿Pamer tiene un sistema de Enseñanza y Aprendizaje en Línea?",
      answer: "Sí, Pamer ofrece un sistema de enseñanza y aprendizaje en línea."
    },
    {
      question: "Cómo puede mi hijo hacer sus consultas académicas en línea?",
      answer: "Los alumnos pueden realizar consultas académicas en línea a través de la plataforma SEAL. Es importante que se familiaricen con esta herramienta para aprovechar al máximo su experiencia educativa."
    },
    {
      question: "¿Un alumno de primer grado de primaria puede aprender virtualmente?",
      answer: "Sí, incluso los alumnos de primer grado pueden aprender virtualmente utilizando las herramientas proporcionadas por Pamer."
    },
    {
      question: "¿Cuáles son los horarios de atención en las sedes de Pamer?",
      answer: "Los horarios de atención varían según la sede y el nivel educativo.Te recomiendo visitar el sitio web oficial de Pamer o comunicarte directamente con la sede más cercana para obtener información específica sobre los horarios."
    },
    {
      question: "¿Cómo puedo inscribir a mi hijo en Pamer?",
      answer: "Para inscribir a tu hijo en Pamer, debes visitar la sede más cercana y seguir el proceso de matrícula o realizarlo via web."
    },
  ];

  useEffect(() => {
    const animateNumbers = () => {
      const newNumbers = promos.map((promo) => parseInt(promo.number.replace(/\D/g, '')));
      setAnimatedNumbers(newNumbers);
    };

    animateNumbers();
  }, []);

  const toggleFaq = (index) => {
    setFaqOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="home-content">
      {/* Carousel Principal */}
      <div className="w-full sm:h-screen mb-10 lg:mb-20">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          <div className="h-full">
            <img src="/slide1.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-full">
            <img src="/slide2.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-full">
            <img src="/slide3.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
          </div>
        </Slider>
      </div>

      {/* Sección de Universidades */}
      <div className="flex flex-col items-center p-8 min-h-[60vh]" ref={cyclesInViewRef}>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">CICLOS</h3>
        <p className="text-2xl lg:text-3xl mb-8">Elige la preparación preuniversitaria que más se ajuste a tus necesidades y alcanza tus metas académicas.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              className={`border-2 border-black p-4 flex flex-col items-center justify-between h-60 w-60 lg:h-80 lg:w-80 ${highlightedIndex !== null && highlightedIndex !== index ? 'opacity-50 transition-opacity duration-500' : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(null)}
              initial={{ opacity: 0, x: 100 }}
              animate={cyclesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="w-36 h-36 lg:w-48 lg:h-48 object-contain mb-4"
                style={highlightedIndex === index ? { filter: 'brightness(120%) transition-filter duration-500' } : {}}
              />
              <p className="text-center font-semibold">{uni.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de Promociones */}
      <div ref={promosInViewRef} className="bg-blue-500 py-8 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nuestras Estadísticas</h3>
          <p className="text-2xl lg:text-3xl text-white mb-8">Logros que reflejan nuestro compromiso y dedicación</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {promos.map((promo, index) => (
              <motion.div
                key={index}
                className="text-center mb-8"
                initial={{ opacity: 0, x: 100 }}
                animate={promosInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CountUp end={promosInView ? animatedNumbers[index] : 0} duration={3} separator="," delay={0}>
                  {({ countUpRef }) => (
                    <p ref={countUpRef} className="text-yellow-300 text-6xl lg:text-7xl font-bold"></p>
                  )}
                </CountUp>
                <p className="text-white text-2xl lg:text-3xl font-semibold">{promo.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Alumnos Destacados */}
      <div className="flex flex-col lg:flex-row items-center p-8 min-h-[60vh]">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-4xl lg:text-5xl font-bold">Estos son nuestros mejores alumnos</h3>
          <p className="mt-4 text-2xl lg:text-3xl">Conoce a algunos de los estudiantes más destacados que han pasado por nuestra academia.</p>
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
              <img src="/a3.png" alt="Estudiante 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/a2.png" alt="Estudiante 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/a1.png" alt="Estudiante 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/a4.jpg" alt="Estudiante 4" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Sección de Preguntas Frecuentes */}
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-[60vh]">
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">PREGUNTAS FRECUENTES</h3>
        <div className="w-full max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h4 className="text-2xl lg:text-3xl font-semibold">{faq.question}</h4>
                <span
                  className={`transform transition-transform duration-300 text-3xl lg:text-4xl ${
                    faqOpenIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>
              {faqOpenIndex === index && (
                <p className="mt-4 text-gray-700 text-xl lg:text-2xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
