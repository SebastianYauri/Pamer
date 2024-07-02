import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaBook, FaSignOutAlt, FaBars } from 'react-icons/fa';

const SidebarStudent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          <img alt="Pamer Logo" src="/logo-white.svg" className="h-8" />
        )}
        <button onClick={toggleSidebar} className="text-white ml-2">
          <FaBars />
        </button>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className={`flex items-center justify-center ${getLinkClass('/profile')} py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <Link to="/profile" className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaUser className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Perfil</span>
            </Link>
          </li>
          <li className={`flex items-center justify-center ${getLinkClass('/matriculate')} py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <Link to="/matriculate" className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
              <FaBook className="text-2xl" />
              <span className={`ml-2 ${isOpen ? 'text-lg' : 'hidden'}`}>Matriculate</span>
            </Link>
          </li>
          <li className={`flex items-center justify-center py-2 px-4 rounded ${isOpen ? '' : 'w-full'}`}>
            <button onClick={() => { /* lógica para cerrar sesión */ }} className={`flex items-center ${isOpen ? 'flex-col justify-center items-center' : 'flex-row justify-start items-center'} hover:underline`}>
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
