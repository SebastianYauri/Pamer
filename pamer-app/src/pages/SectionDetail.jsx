import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SectionDetail = () => {
  const { id } = useParams(); // Obtener el id de la sección desde los parámetros de la ruta
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState({ note1: '', note2: '', note3: '', note4: '', note5: '' });
  const [students, setStudents] = useState([
    { id: 1, name: 'Alumno 1' },
    { id: 2, name: 'Alumno 2' },
    { id: 3, name: 'Alumno 3' }
  ]); // Datos simulados de alumnos
  const [gradeRecords, setGradeRecords] = useState([
    { name: 'Alumno 1', note1: 15, note2: 16, note3: 17, note4: 18, note5: 19 },
    { name: 'Alumno 2', note1: 14, note2: 15, note3: 16, note4: 17, note5: 18 },
    { name: 'Alumno 3', note1: 13, note2: 14, note3: 15, note4: 16, note5: 17 }
  ]); // Datos simulados de registros de notas

  // Aquí puedes cargar los detalles de la sección usando el id, por ejemplo, desde una API o datos simulados
  const section = {
    id: id,
    name: 'Nombre de la Sección',
    description: 'Descripción detallada de la Sección',
    modality: 'Presencial',
    location: 'Ciudad',
    schedule: 'Horario',
    imageUrl: '/details.jpg', // URL de imagen de ejemplo
    // Otros datos necesarios para cada sección
  };

  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGrades({ ...grades, [name]: value });
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para registrar las notas en la base de datos
    console.log('Registrar notas:', selectedStudent, grades);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{section.name}</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={section.imageUrl}
            alt={section.name}
            className="w-full h-80 object-cover object-center"
          />
        </div>
        <div className="p-4">
          <p className="mb-2">{section.description}</p>
          <p className="mb-2">Modality: {section.modality}</p>
          <p className="mb-2">Location: {section.location}</p>
          <p>Schedule: {section.schedule}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Registrar Notas</h2>
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
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {['note1', 'note2', 'note3', 'note4', 'note5'].map(note => (
            <div key={note}>
              <label htmlFor={note} className="block mb-2">Nota {note.slice(-1)}:</label>
              <input
                type="text"
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
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Registrar Notas
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Lista de Notas</h2>
        <table className="min-w-full bg-white border border-gray-300">
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
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Imprimir en PDF
        </button>
      </div>
    </div>
  );
};

export default SectionDetail;
