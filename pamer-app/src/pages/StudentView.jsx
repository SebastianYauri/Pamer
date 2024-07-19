import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBook, FaClock, FaChalkboard, FaUserGraduate, FaRegStar } from 'react-icons/fa'; // Importar iconos adicionales
import { motion } from 'framer-motion';
import axios from 'axios'; // Importa axios para hacer llamadas a la API
import { BASE_URL } from '../config/apiConfig';

const StudentView = () => {
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar la visibilidad del sidebar
  const [gradesData, setGradesData] = useState([]); // Estado para almacenar las notas del alumno
  const [alumno, setAlumno] = useState(null); // Estado para almacenar los datos del alumno
  const [matriculasData, setMatriculasData] = useState([]); // Estado para almacenar las matriculas del alumno

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Hook para obtener el objeto Alumno desde localStorage
  useEffect(() => {
    const storedAlumno = localStorage.getItem("alumno");
    if (storedAlumno) {
      setAlumno(JSON.parse(storedAlumno));
    }
  }, []);

  // Hook para obtener las notas del alumno desde el backend
  useEffect(() => {
    const fetchGrades = async () => {
      if (alumno) {
        try {
          const response = await axios.get(`${BASE_URL}:8090/notas/listarPorAlumno`, {
            params: { idAlumno: alumno.id },
          });
          setGradesData(response.data);
        } catch (error) {
          console.error("Error fetching grades data:", error);
        }
      }
    };

    fetchGrades();
  }, [alumno]);

  // Hook para obtener las matriculas del alumno desde el backend
  useEffect(() => {
    const fetchMatriculas = async () => {
      if (alumno) {
        try {
          const response = await axios.get(`${BASE_URL}:8080/matricula/listarPorAlumno`, {
            params: { idAlumno: alumno.id },
          });
          setMatriculasData(response.data);
        } catch (error) {
          console.error("Error fetching matriculas data:", error);
        }
      }
    };

    fetchMatriculas();
  }, [alumno]);

  // Datos de ejemplo para el slider de banners
  const bannerImages = [
    { id: 1, imageUrl: '/slide1.jpg' },
    { id: 2, imageUrl: '/slide2.jpg' },
    { id: 3, imageUrl: '/slide3.jpg' },
  ];

  // Configuración del carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Datos de ejemplo para la sección de horarios
  const scheduleData = [
    { time: '9:00 - 10:00', Lunes: 'Matemáticas', Martes: '', Miércoles: 'Historia', Jueves: '', Viernes: 'Ciencias' },
    { time: '10:00 - 11:00', Lunes: 'Matemáticas', Martes: '', Miércoles: 'Historia', Jueves: '', Viernes: 'Ciencias' },
    { time: '11:00 - 12:00', Lunes: 'Matemáticas', Martes: '', Miércoles: 'Historia', Jueves: '', Viernes: 'Ciencias' },
    { time: '12:00 - 13:00', Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '' },
    { time: '13:00 - 14:00', Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 flex items-center space-x-2">
        <FaUserGraduate className="text-blue-500 animate-bounce" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vista de Estudiante
        </motion.span>
      </h1>

      {/* Slider de banners */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaChalkboard className="text-blue-500 animate-bounce" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Banners
          </motion.span>
        </h2>
        <div className="relative">
          <Slider {...sliderSettings} className="w-3/4 mx-auto">
            {bannerImages.map(banner => (
              <div key={banner.id} className="w-full h-auto">
                <img src={banner.imageUrl} alt={`Banner ${banner.id}`} className="w-full h-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Sección de Horarios */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaClock className="text-blue-500 animate-bounce" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Horarios
          </motion.span>
        </h2>
        <div className="grid grid-cols-6 gap-2 border border-gray-300">
          {/* Encabezados de días */}
          <div className="col-span-1 border border-gray-300 p-2 bg-blue-200"></div>
          {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(day => (
            <div key={day} className="text-center border border-gray-300 p-2 font-bold bg-blue-200">
              {day}
            </div>
          ))}

          {/* Horas y cursos */}
          {scheduleData.map((entry, index) => (
            <React.Fragment key={index}>
              <div className="text-center border border-gray-300 p-2 font-bold bg-blue-200">
                {entry.time}
              </div>
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(day => (
                <div key={day} className="text-center border border-gray-300 p-2">
                  {entry[day]}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Sección de Notas */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaBook className="text-blue-500 animate-bounce" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Notas
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gradesData.map((grade, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <FaRegStar className="text-4xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Ciclo: {grade.ciclo.ciclo}</h3>
                  <p className="text-sm text-gray-500">Alumno: {grade.alumno.nombre}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-bold">N1</p>
                  <p>{grade.n1}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-bold">N2</p>
                  <p>{grade.n2}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-bold">N3</p>
                  <p>{grade.n3}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-bold">N4</p>
                  <p>{grade.n4}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-bold">N5</p>
                  <p>{grade.n5}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Matrículas */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaUserGraduate className="text-blue-500 animate-bounce" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Matrículas
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matriculasData.map((matricula, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <FaChalkboard className="text-4xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Ciclo: {matricula.ciclo.ciclo}</h3>
                  <p className="text-sm text-gray-500">Fecha: {matricula.fecha}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold">Pago</p>
                <p>{matricula.pago}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentView;
