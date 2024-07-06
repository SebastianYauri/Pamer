import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaInfoCircle, FaGraduationCap } from 'react-icons/fa';

const SectionDetail = () => {
  const { id } = useParams(); // Obtener el id de la sección desde los parámetros de la ruta
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState({ note1: '', note2: '', note3: '', note4: '', note5: '' });
  const [students, setStudents] = useState([]); // Estado para los alumnos
  const [gradeRecords, setGradeRecords] = useState([]); // Estado para los registros de notas
  const [error, setError] = useState(""); // Estado para manejar errores

  // Cargar los detalles de la sección y los alumnos matriculados usando el id
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://192.168.1.85:8080/matricula/listarPorCiclo`, {
          params: { idCiclo: id }
        });
        setStudents(response.data);
      } catch (error) {
        setError("Error al obtener los alumnos matriculados");
      }
    };

    fetchStudents();
  }, [id]);

  const section = {
    id: id,
    name: 'Nombre de la Sección',
    description: 'Descripción detallada de la Sección',
    modality: 'Presencial',
    location: 'Ciudad',
    schedule: 'Horario',
    imageUrl: '/details.jpg', // URL de imagen de ejemplo
  };

  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGrades({ ...grades, [name]: value }); // Actualizar el estado de las notas
  };

  const handleSubmit = async () => {
    const processedGrades = {
        n1: grades.note1 ? parseFloat(grades.note1) : 0,
        n2: grades.note2 ? parseFloat(grades.note2) : 0,
        n3: grades.note3 ? parseFloat(grades.note3) : 0,
        n4: grades.note4 ? parseFloat(grades.note4) : 0,
        n5: grades.note5 ? parseFloat(grades.note5) : 0,
    };

    try {
        // Obtener detalles completos de Alumno antes de enviar la solicitud
        const responseAlumno = await axios.get(`http://192.168.1.85:8080/alumnos/${selectedStudent}`);
        const alumno = responseAlumno.data;

        const ciclo = { id: id }; // No necesita obtenerlo si ya lo tienes en detalle en el frontend

        const notaData = {
            alumno: alumno,
            ciclo: ciclo,
            ...processedGrades,
        };

        const response = await axios.post('http://192.168.1.85:8090/notas/guardar', notaData);
        console.log(response.data);
        alert("Notas registradas con éxito");
    } catch (error) {
        console.error("Error al registrar las notas:", error.response ? error.response.data : error.message);
        alert("Error al registrar las notas");
    }
  };


  const handlePrint = () => {
    window.print(); // Función para imprimir la página
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {section.name}
      </motion.h1>
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Sección de detalles a la izquierda */}
        <div className="md:w-1/2 p-4 space-y-6">
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded mr-4">
              <FaInfoCircle className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Descripción</h2>
              <p className="text-lg">{section.description}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded mr-4">
              <FaGraduationCap className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Modalidad</h2>
              <p className="text-lg">{section.modality}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Ubicación</h2>
              <p className="text-lg">{section.location}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded mr-4">
              <FaClock className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Horario</h2>
              <p className="text-lg">{section.schedule}</p>
            </div>
          </motion.div>
        </div>
        {/* Imagen de la sección a la derecha */}
        <motion.div
          className="md:w-1/2 relative overflow-hidden rounded-t-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={section.imageUrl}
            alt={section.name}
            className="w-full h-80 object-cover object-center"
          />
        </motion.div>
      </div>
      <div className="mt-8">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Registrar Notas
        </motion.h2>
        {/* Selección de alumno y notas */}
        <div className="mb-4">
          <label htmlFor="student" className="block mb-2">Seleccionar Alumno:</label>
          <select
            id="student"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccione un alumno</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>{`${student.nombre} ${student.apellido}`}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {['note1', 'note2', 'note3', 'note4', 'note5'].map(note => (
            <div key={note}>
              <label htmlFor={note} className="block mb-2">{`Nota ${note.charAt(note.length - 1)}`}</label>
              <input
                type="number"
                id={note}
                name={note}
                value={grades[note]}
                onChange={handleGradeChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-300"
        >
          Registrar Notas
        </button>
      </div>
      <div className="mt-8">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lista de Alumnos Matriculados
        </motion.h2>
        <ul className="list-disc list-inside">
          {students.map((student, index) => (
            <li key={index}>
              {student.nombre} {student.apellido}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Registro de Notas
        </motion.h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Nota 1</th>
              <th className="py-2 px-4 border-b">Nota 2</th>
              <th className="py-2 px-4 border-b">Nota 3</th>
              <th className="py-2 px-4 border-b">Nota 4</th>
              <th className="py-2 px-4 border-b">Nota 5</th>
            </tr>
          </thead>
          <tbody>
            {gradeRecords.map((record, index) => (
              <tr key={index} className="text-center">
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.name}</td>
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.note1}</td>
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.note2}</td>
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.note3}</td>
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.note4}</td>
                <td className={`py-2 px-4 border-b ${index === 0 ? 'bg-gray-100' : ''}`}>{record.note5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <button
          onClick={handlePrint}
          className="bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-600 transition duration-300"
        >
          Imprimir en PDF
        </button>
      </div>
    </div>
  );
};

export default SectionDetail;
