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
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const promos = [
    { number: 'Preparate', title: 'para dar el gran salto' },
    { number: '+11000', title: 'ingresantes a San Marcos' },
    { number: '+170', title: 'primeros puestos' },
    { number: 'Modalidades', title: 'PRESENCIAL Y VIRTUAL' },
    { number: '+35 años', title: 'De experiencia' },
  ];

  const faqs = [
    {
      question: "How does the learning process work?",
      answer: "We combine self-paced practice on the TripleTen interactive platform, live feedback from tech professionals, help from our success managers, and guidance from senior students. We introduce sprints, or two-weeks periods of work, with a number of tasks to complete by a deadline. Most professional IT development takes place in sprints, so this helps prepare you for the workplace."
    },
    {
      question: "Will I get a new job after graduation?",
      answer: "Our career services team helps graduates with job placement, but it depends on individual effort and job market conditions."
    },
    {
      question: "What if I don’t get a new job?",
      answer: "We offer ongoing career support and networking opportunities to help you secure a position."
    },
    {
      question: "What career services do you offer?",
      answer: "Resume reviews, mock interviews, job search strategies, and networking events."
    },
    {
      question: "What will I do in a real-world software engineering job?",
      answer: "You'll work on developing, testing, and maintaining software applications as part of a team."
    },
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

  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="home-content">
      <div className="w-full h-screen mb-20">
        <Slider {...settings}>
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

      <div className="flex flex-col items-center p-8 min-h-[60vh]">
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">CICLOS</h3>
        <p className="text-2xl lg:text-3xl mb-8">Elige la preparación preuniversitaria que más se ajuste a tus necesidades y alcanza tus metas académicas.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`border-2 border-black p-4 flex flex-col items-center justify-between h-60 w-60 lg:h-80 lg:w-80 ${highlightedIndex !== null && highlightedIndex !== index ? 'opacity-50 transition-opacity duration-500' : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(null)}
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="w-36 h-36 lg:w-48 lg:h-48 object-contain mb-4"
                style={highlightedIndex === index ? { filter: 'brightness(120%) transition-filter duration-500' } : {}}
              />
              <p className="text-center font-semibold">{uni.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-500 py-8 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
            <p className="text-yellow-300 text-4xl lg:text-5xl font-bold">{promos[0].number}</p>
            <p className="text-white text-2xl lg:text-3xl font-semibold">{promos[0].title}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:w-2/3">
            {promos.slice(1).map((promo, index) => (
              <div key={index} className="text-center flex items-center ml-4">
                <img src="https://via.placeholder.com/40x40" alt="Logo" className="mr-4" />
                <div>
                  <p className="text-yellow-300 text-3xl font-bold">{promo.number}</p>
                  <p className="text-white text-xl lg:text-2xl font-semibold">{promo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nueva sección con carrusel tipo cubo y mensaje */}
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

      {/* Nueva sección FAQ */}
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-[60vh]">
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">FAQ</h3>
        <div className="w-full max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h4 className="text-2xl lg:text-3xl font-semibold">{faq.question}</h4>
                <span
                  className={`transform transition-transform duration-300 text-3xl lg:text-4xl ${faqOpenIndex === index ? 'rotate-45' : 'rotate-0'}`}
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
