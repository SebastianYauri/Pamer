import React from 'react';
import { FaClock, FaUniversity } from 'react-icons/fa';
import SidebarStudent from '../components/SidebarStudent'; // Importa el SidebarStudent aquí si aún no está

const RegistEstudiante = () => {
  // Opciones para el select de ciclos universitarios
  const cicloOptions = [
    { value: 'uni', label: 'UNI' },
    { value: 'sanMarcos', label: 'San Marcos' },
    { value: 'ulima', label: 'ULIMA' },
    { value: 'pucp', label: 'PUCP' },
  ];

  // Opciones para el select de horarios
  const horarioOptions = [
    { value: 'manana', label: 'Mañana (9:00 - 13:00)' },
    { value: 'tarde', label: 'Tarde (14:00 - 18:00)' },
    { value: 'noche', label: 'Noche (19:00 - 22:00)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex">
      <SidebarStudent /> {/* Muestra el SidebarStudent */}
      <div className="flex-grow ml-64 flex flex-col p-10">
        <div className="max-w-4xl w-full space-y-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-900 mt-4">
              Formulario de Matrícula
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Por favor, completa los siguientes campos para matricularte.
            </p>
          </div>
          
          <form className="space-y-8">
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
                <FaUniversity className="text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-900">Ciclo Universitario</h3>
              </div>
              <select
                className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option>Seleccione su ciclo universitario</option>
                {cicloOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Horarios Disponibles */}
            <div className="space-y-4">
              <div className="flex items-center">
                <FaClock className="text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-900">Horarios Disponibles</h3>
              </div>
              <select
                className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option>Seleccione un horario</option>
                {horarioOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
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
    </div>
  );
};

export default RegistEstudiante;
