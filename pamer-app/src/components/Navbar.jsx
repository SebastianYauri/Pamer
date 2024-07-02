import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? '' : menu);
  };

  const closeDropdowns = () => {
    setDropdownOpen('');
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white p-1 shadow-md rounded-md border border-black mx-3 mt-3 px-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-lg' : 'bg-white'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-20 w-20" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none ${scrolled ? 'text-white' : 'text-black'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4">
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/' ? 'bg-gray-200' : ''} text-black`}
                onClick={closeDropdowns}
              >
                Inicio
              </Link>
            </li>
            <li className="relative md:inline-block">
              <button
                onClick={() => toggleDropdown('ciclos')}
                className="flex items-center w-full py-2 px-4 hover:bg-gray-200 rounded md:w-auto text-black"
              >
                Ciclos
                <ChevronDownIcon className="ml-1 h-5 w-5 text-black" />
              </button>
              <Transition
                show={dropdownOpen === 'ciclos'}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="md:absolute md:mt-2 md:w-48 md:shadow-lg"
              >
                <div className="py-1 bg-white md:rounded-md">
                  <Link
                    to="/UNMSM"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeDropdowns}
                  >
                    San Marcos
                  </Link>
                  <Link
                    to="/UNI"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeDropdowns}
                  >
                    UNI
                  </Link>
                  <Link
                    to="/PUCP"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeDropdowns}
                  >
                    PUCP
                  </Link>
                  <Link
                    to="/ULIMA"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={closeDropdowns}
                  >
                    ULIMA
                  </Link>
                </div>
              </Transition>
            </li>
            <li>
              <Link
                to="/sedes"
                className={`block py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/registro' ? 'bg-gray-200' : ''} text-black`}
                onClick={closeDropdowns}
              >
                Sedes
              </Link>
            </li>
            <li>
              <Link
                to="/registro"
                className={`block py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/registro' ? 'bg-gray-200' : ''} text-black`}
                onClick={closeDropdowns}
              >
                Matriculate Ahora
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`block py-2 px-4 hover:bg-gray-200 rounded ${location.pathname === '/login' ? 'bg-gray-200' : ''} text-black`}
                onClick={closeDropdowns}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
