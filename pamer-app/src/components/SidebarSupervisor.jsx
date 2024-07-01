import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaSignOutAlt } from 'react-icons/fa';

const SidebarSupervisor = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col fixed top-0 bottom-0">
      <div className="p-4 border-b border-gray-700 flex justify-center items-center">
        <img alt="Pamer Logo" src="/logo-white.svg" className="h-8" />
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">

          <li className="flex items-center justify-center">
            <FaList className="mr-2" />
            <Link to="/supervisor" className="hover:underline">Secciones</Link>
          </li>
          <li className="flex items-center justify-center">
            <FaSignOutAlt className="mr-2" />
            <button className="hover:underline" onClick={() => { /* lógica para cerrar sesión */ }}>Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarSupervisor;
