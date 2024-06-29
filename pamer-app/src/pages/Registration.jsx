// src/pages/Registration.jsx
import React from 'react';
import headerImg from '/logo.svg'; // Adjust the path to your header image
import studentIcon from '/user.svg'; // Adjust the path to your student icon
import guardianIcon from '/user.svg'; // Adjust the path to your guardian icon

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <img src={headerImg} alt="Header" className="mx-auto h-20 w-auto" />
          <h2 className="text-3xl font-extrabold text-blue-900 mt-4">
            Formulario de Matrícula
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Por favor, completa los siguientes campos para matricularte.
          </p>
        </div>
        
        <form className="space-y-8">
          {/* Datos del Alumno */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={studentIcon} alt="Student" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900">Datos del Alumno</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>Género</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Nombres"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Apellido Paterno"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Apellido Materno"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Celular"
              />
              <input
                type="date"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <select className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>Tipo de Documento</option>
                <option>DNI</option>
                <option>Pasaporte</option>
                <option>CE</option>
              </select>
              <input
                type="email"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Correo"
              />
              <select className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>Departamento</option>
                <option>Lima</option>
                <option>Arequipa</option>
                <option>Cusco</option>
                <option>Otro</option>
              </select>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Dirección"
              />
            </div>
          </div>

          {/* Elegir el Programa */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">Elegir el Programa de tu Preferencia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" name="modalidad" value="virtual" />
                <span className="ml-2">Virtual</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" name="modalidad" value="presencial" />
                <span className="ml-2">Presencial</span>
              </label>
            </div>
          </div>

          {/* Datos del Apoderado */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={guardianIcon} alt="Guardian" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900">Datos del Apoderado</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Nombres"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Apellidos"
              />
              <select className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>Tipo de Documento</option>
                <option>DNI</option>
                <option>Pasaporte</option>
                <option>CE</option>
              </select>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Número de Documento"
              />
              <input
                type="email"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Correo"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Celular"
              />
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Celular Adicional (opcional)"
              />
            </div>
          </div>

          {/* Política de Privacidad y Botón de Registrar */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-600">
                Acepto las políticas de privacidad
              </span>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
