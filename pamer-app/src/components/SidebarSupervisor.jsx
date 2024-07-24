import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaList, FaSignOutAlt, FaBars } from 'react-icons/fa';

const SidebarSupervisor = () => {
  const [isOpen, setIsOpen] = useState(true);
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

  return (
    <div className={`h-full ${isOpen ? 'w-56' : 'w-16'} bg-gray-800 text-white flex flex-col fixed top-0 bottom-0 transition-all duration-300`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        {isOpen && (
          <img alt="Pamer Logo" src="/Pamer/logo-white.svg" className="h-8" />
        )}
        <button onClick={toggleSidebar} className="text-white ml-2">
          <FaBars />
        </button>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className={`flex items-center justify-center ${getLinkClass('/supervisor')} py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <Link to="/supervisor" className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaList className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Secciones</span>
            </Link>
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

export default SidebarSupervisor;
