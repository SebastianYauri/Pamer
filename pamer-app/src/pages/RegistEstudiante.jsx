import React, { useState, useEffect } from 'react';
import { FaClock, FaUniversity } from 'react-icons/fa';
import SidebarStudent from '../components/SidebarStudent';
import { BASE_URL } from '../config/apiConfig';

const RegistEstudiante = () => {
  const [alumno, setAlumno] = useState(null);
  const [modalidad, setModalidad] = useState('');
  const [universidad, setUniversidad] = useState('');
  const [ciclo, setCiclo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Recuperar el objeto Alumno desde localStorage
    const storedAlumno = localStorage.getItem("alumno");
    if (storedAlumno) {
      setAlumno(JSON.parse(storedAlumno));
    }
  }, []);

  const cicloOptions = [
    { value: 'Anual', label: 'Anual' },
    { value: 'Semestral', label: 'Semestral' },
    { value: 'Intensivo', label: 'Intensivo' },
  ];

  const horarioOptions = [
    { value: 'UNI', label: 'UNI' },
    { value: 'San Marcos', label: 'San Marcos' },
    { value: 'ULIMA', label: 'ULIMA' },
    { value: 'PUCP', label: 'PUCP' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!modalidad || !universidad || !ciclo) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');

    try {
      const cicloResponse = await fetch(`${BASE_URL}:8080/ciclos/buscar?ciclo=${ciclo}&modalidad=${modalidad}&universidad=${universidad}`);
      if (!cicloResponse.ok) {
        throw new Error('Ciclo not found');
      }
      const cicloData = await cicloResponse.json();

      const matricula = {
        fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        pago: 'No',
        alumno: alumno,
        ciclo: cicloData
      };

      console.log('Matricula a registrar:', matricula); // Verificar los datos de la matrícula

      const response = await fetch(`${BASE_URL}:8080/matricula/registrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(matricula)
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Error details:', errorDetails); // Detalles del error
        throw new Error(`Failed to register matricula: ${errorDetails.message || response.statusText}`);
      }

      alert('Matrícula registrada con éxito');
    } catch (error) {
      console.error('Error en el registro:', error); // Detalles completos del error
      setError(error.message);
    }
  };

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
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900"><>&nbsp;&nbsp;</>Elegir el Programa de tu Preferencia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="inline-flex items-center">
                  <>&nbsp;&nbsp;&nbsp;</><input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="modalidad"
                    value="Virtual"
                    onChange={(e) => setModalidad(e.target.value)}
                  />
                  <span className="ml-2">Virtual</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="modalidad"
                    value="Presencial"
                    onChange={(e) => setModalidad(e.target.value)}
                  />
                  <span className="ml-2">Presencial</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <>&nbsp;&nbsp;</><FaUniversity className="text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-900"><>&nbsp;&nbsp;</>Ciclo Universitario</h3>
              </div>
              <select
                className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setUniversidad(e.target.value)}
              >
                <option value="">Seleccione su ciclo universitario</option>
                {horarioOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <>&nbsp;&nbsp;</><FaClock className="text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-900"><>&nbsp;&nbsp;</>Ciclos Disponibles</h3>
              </div>
              <select
                className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => setCiclo(e.target.value)}
              >
                <option value="">Seleccione un ciclo</option>
                {cicloOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <>&nbsp;&nbsp;&nbsp;</><input type="checkbox" className="form-checkbox text-blue-600" />
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
          {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default RegistEstudiante;
