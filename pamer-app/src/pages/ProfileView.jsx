import React, { useState, useEffect } from 'react';
import { FaUser, FaUniversity, FaIdCard, FaEnvelope, FaRegCalendarAlt } from 'react-icons/fa';
import axios from 'axios'; // Importa axios para hacer llamadas a la API
import { BASE_URL } from '../config/apiConfig';
import Barcode from 'react-barcode';

const ProfileView = () => {
  const [alumno, setAlumno] = useState(null); // Estado para almacenar los datos del alumno
  const [matriculasData, setMatriculasData] = useState([]); // Estado para almacenar las matriculas del alumno

  // Hook para obtener el objeto Alumno desde localStorage
  useEffect(() => {
    const storedAlumno = localStorage.getItem("alumno");
    if (storedAlumno) {
      setAlumno(JSON.parse(storedAlumno));
    }
  }, []);

  // Hook para obtener las matriculas del alumno
  useEffect(() => {
    const fetchMatriculas = async () => {
      if (alumno && alumno.id) {
        try {
          const response = await axios.get(`${BASE_URL}:8080/matricula/listarPorAlumno`, {
            params: { idAlumno: alumno.id },
          });
          setMatriculasData(response.data);
        } catch (error) {
          console.error("Error fetching matriculas data:", error);
        }
      }
    };

    fetchMatriculas();
  }, [alumno]);

  // Datos del perfil del alumno
  useEffect(() => {
    const fetchAlumnoData = async () => {
      if (alumno && alumno.id) { // Asegúrate de que alumno.id esté definido
        try {
          console.log("Fetching data for idAlumno:", alumno.id); // Agrega este log
          const response = await axios.get(`${BASE_URL}:8080/alumnos/perfil`, {
            params: { idAlumno: alumno.id },
          });
          setAlumno(response.data);
        } catch (error) {
          console.error('Error al obtener los datos del estudiante:', error.response?.data || error.message); // Agrega error.response?.data para ver el mensaje de error
        }
      }
    };

    fetchAlumnoData();
  }, [alumno?.id]);

  // Obtiene el primer ciclo de la lista de matriculas
  const ciclo = matriculasData.length > 0 ? matriculasData[0].ciclo : null;

  // Extrae propiedades relevantes del objeto ciclo si es necesario
  const cicloNombre = ciclo ? ciclo.ciclo : 'No disponible';
  const cicloModalidad = ciclo ? ciclo.modalidad : 'No disponible';
  const cicloUniversidad = ciclo ? ciclo.universidad : 'No disponible';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Pamer/profile.webp"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{alumno?.nombre} {alumno?.apellido}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">Nombre</h3>
              <p className="text-gray-800">{alumno?.nombre}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">Apellido</h3>
              <p className="text-gray-800">{alumno?.apellido}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUniversity className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">Universidad</h3>
              <p className="text-gray-800">{cicloUniversidad}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">DNI</h3>
              <p className="text-gray-800">{alumno?.dni}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">Correo</h3>
              <p className="text-gray-800">{alumno?.correo}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-blue-500 mr-4 text-xl" />
            <div>
              <h3 className="text-xl font-bold mb-1">Ciclo</h3>
              <p className="text-gray-800">{cicloNombre}</p>
              <p className="text-gray-800">{cicloModalidad}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="barcode-container flex flex-col items-center">
          {alumno?.dni && (
            <>
              <Barcode
                value={alumno.dni}
                format="CODE128"
                width={2}        // Ajusta el ancho
                height={80}      // Ajusta la altura
                displayValue={false}
                className="mb-2"
              />
              <p className="text-xl font-bold">{alumno.dni}</p>
            </>
          )}
        </div>
        <img
          src="/Pamer/profile2.jpg"
          alt="Profile"
          className="w-90 h-80 mt-4"
        />
      </div>
    </div>
  );
};

export default ProfileView;
