import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaBook, FaSignOutAlt, FaBars, FaHome } from 'react-icons/fa'; // Importa FaHome
import axios from 'axios';
import { BASE_URL } from '../config/apiConfig';

const SidebarStudent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [matriculas, setMatriculas] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Eliminar el token de autenticación del almacenamiento local
    localStorage.removeItem('authToken');
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-white bg-gray-600'
      : 'text-gray-400 hover:text-white hover:bg-gray-700';
  };

  // Hook para obtener el objeto Alumno desde localStorage
  const [alumno, setAlumno] = useState(null);
  useEffect(() => {
    const storedAlumno = localStorage.getItem("alumno");
    if (storedAlumno) {
      setAlumno(JSON.parse(storedAlumno));
    }
  }, []);

  // Hook para obtener las matrículas del alumno desde el backend
  useEffect(() => {
    const fetchMatriculas = async () => {
      if (alumno) {
        try {
          const response = await axios.get(`${BASE_URL}:8080/matricula/listarPorAlumno`, {
            params: { idAlumno: alumno.id },
          });
          setMatriculas(response.data);
        } catch (error) {
          console.error("Error fetching matriculas data:", error);
        }
      }
    };

    fetchMatriculas();
  }, [alumno]);

  const handleMatriculateClick = (event) => {
    if (matriculas.length > 0) {
      event.preventDefault(); // Evitar la navegación
      alert("Ya estás matriculado");
    } else {
      navigate('/registro/estudiante');
    }
  };

  return (
    <div className={`h-full ${isOpen ? 'w-56' : 'w-16'} bg-gray-800 text-white flex flex-col fixed top-0 bottom-0 transition-all duration-300`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        {isOpen && (
          <img alt="Pamer Logo" src="/logo-white.svg" className="h-8" />
        )}
        <button onClick={toggleSidebar} className="text-white ml-2">
          <FaBars />
        </button>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className={`flex items-center justify-center ${getLinkClass('/')} py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}> {/* Nuevo elemento para el botón de Home */}
            <Link to="/student" className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaHome className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Home</span>
            </Link>
          </li>
          <li className={`flex items-center justify-center ${getLinkClass('/student/profile')} py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <Link to="/student/profile" className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaUser className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Perfil</span>
            </Link>
          </li>
          <li className={`flex items-center justify-center py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <button onClick={handleMatriculateClick} className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaBook className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Matriculate</span>
            </button>
          </li>
          <li className={`flex items-center justify-center py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <button onClick={handleLogout} className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaSignOutAlt className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarStudent;
