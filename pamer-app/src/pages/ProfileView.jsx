import React, { useState, useEffect } from 'react';
import { FaUser, FaUniversity, FaIdCard, FaEnvelope, FaRegCalendarAlt } from 'react-icons/fa';
import axios from 'axios'; // Importa axios para hacer llamadas a la API
import { BASE_URL } from '../config/apiConfig';

const ProfileView = () => {
  const [alumno, setAlumno] = useState(null); // Estado para almacenar los datos del alumno
  
  // Hook para obtener el objeto Alumno desde localStorage
  useEffect(() => {
    const storedAlumno = localStorage.getItem("alumno");
    if (storedAlumno) {
      setAlumno(JSON.parse(storedAlumno));
    }
  }, []);

  // Datos del perfil del alumno
  const fetchAlumnoData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}:8080/alumnos/perfil`, {
        params: { idAlumno: alumno.id },
      });
      setAlumno(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del estudiante:', error);
    }
  };

  useEffect(() => {
    if (alumno) {
      fetchAlumnoData();
    }
  }, [alumno]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{alumno?.nombre} {alumno?.apellido}</h2>
          <p className="text-gray-600 mb-4">{alumno?.universidad}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">Nombre</h3>
              <p className="text-gray-800">{alumno?.nombre}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">Apellido</h3>
              <p className="text-gray-800">{alumno?.apellido}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUniversity className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">Universidad</h3>
              <p className="text-gray-800">{alumno?.universidad?.nombre || 'No disponible'}</p> {/* Ajusta según la estructura de tu API */}
            </div>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">DNI</h3>
              <p className="text-gray-800">{alumno?.dni}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">Correo</h3>
              <p className="text-gray-800">{alumno?.correo}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-blue-500 mr-2" />
            <div>
              <h3 className="text-xl font-bold mb-2">Ciclo</h3>
              <p className="text-gray-800">{alumno?.ciclo?.nombre || 'No disponible'}</p> {/* Ajusta según la estructura de tu API */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/profile2.jpg"
          alt="Profile"
          className="w-90 h-80 mb-4"
        />
      </div>
    </div>
  );
};

export default ProfileView;
