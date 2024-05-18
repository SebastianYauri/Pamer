// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-1 shadow-md rounded-md border border-black mx-3 mt-3 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-20 w-20" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4">
            <li>
              <Link to="/" className={`block text-black py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/' ? 'bg-gray-200' : ''}`}>Inicio</Link>
            </li>
            <li>
              <Link to="/sedes" className={`block text-black py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/sedes' ? 'bg-gray-200' : ''}`}>Sedes</Link>
            </li>
            <li>
              <Link to="/ciclos" className={`block text-black py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/ciclos' ? 'bg-gray-200' : ''}`}>Ciclos</Link>
            </li>
            <li>
              <Link to="/registro" className={`block text-black py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/registro' ? 'bg-gray-200' : ''}`}>Registro</Link>
            </li>
            <li>
              <Link to="/login" className={`block text-black py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/login' ? 'bg-gray-200' : ''}`}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
