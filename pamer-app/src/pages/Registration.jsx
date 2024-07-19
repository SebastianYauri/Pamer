import React, { useState } from 'react';
import headerImg from '/logo.svg'; // Ajusta la ruta a tu imagen de encabezado
import studentIcon from '/user.svg'; // Ajusta la ruta a tu icono de estudiante
import guardianIcon from '/user.svg'; // Ajusta la ruta a tu icono de apoderado
import { BASE_URL } from '../config/apiConfig'; 
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    dni: '',
  });

  const [apoderado, setApoderado] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    dni: '',
  });

  const navigate = useNavigate(); // Mueve el uso de useNavigate aquí dentro del componente

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'alumno') {
      setAlumno({ ...alumno, [name]: value });
    } else if (type === 'apoderado') {
      setApoderado({ ...apoderado, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar al alumno
      const alumnoResponse = await fetch(`${BASE_URL}:8080/alumnos/guardar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alumno),
      });

      if (!alumnoResponse.ok) {
        throw new Error('Error al guardar el alumno');
      }

      const savedAlumno = await alumnoResponse.json();

      // Guardar al apoderado con referencia al alumno guardado
      const apoderadoToSave = {
        ...apoderado,
        alumno: savedAlumno, // Asignar el alumno guardado al apoderado
      };

      const apoderadoResponse = await fetch(`${BASE_URL}:8080/apoderados/guardar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apoderadoToSave),
      });

      if (!apoderadoResponse.ok) {
        throw new Error('Error al guardar el apoderado');
      }

      alert('Registro exitoso');
      navigate('/'); // Redirige al home después del registro exitoso
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <img src={headerImg} alt="Header" className="mx-auto h-20 w-auto" />
          <h2 className="text-3xl font-extrabold text-blue-900 mt-4">
            Formulario de Inscripción
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Por favor, completa los siguientes campos para matricularte.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Datos del Alumno */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={studentIcon} alt="Student" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900">Datos del Alumno</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Nombres"
                value={alumno.nombre}
                onChange={(e) => handleInputChange(e, 'alumno')}
              />
              <input
                type="text"
                name="apellido"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Apellidos"
                value={alumno.apellido}
                onChange={(e) => handleInputChange(e, 'alumno')}
              />
              <input
                type="text"
                name="edad"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Edad"
                value={alumno.edad}
                onChange={(e) => handleInputChange(e, 'alumno')}
              />
              <input
                type="email"
                name="correo"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Correo"
                value={alumno.correo}
                onChange={(e) => handleInputChange(e, 'alumno')}
              />
              <input
                type="text"
                name="dni"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="DNI"
                value={alumno.dni}
                onChange={(e) => handleInputChange(e, 'alumno')}
              />
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
                name="nombre"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Nombres"
                value={apoderado.nombre}
                onChange={(e) => handleInputChange(e, 'apoderado')}
              />
              <input
                type="text"
                name="apellido"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Apellidos"
                value={apoderado.apellido}
                onChange={(e) => handleInputChange(e, 'apoderado')}
              />
              <input
                type="text"
                name="edad"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Edad"
                value={apoderado.edad}
                onChange={(e) => handleInputChange(e, 'apoderado')}
              />
              <input
                type="email"
                name="correo"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Correo"
                value={apoderado.correo}
                onChange={(e) => handleInputChange(e, 'apoderado')}
              />
              <input
                type="text"
                name="dni"
                className="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="DNI"
                value={apoderado.dni}
                onChange={(e) => handleInputChange(e, 'apoderado')}
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
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
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
