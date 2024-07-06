// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sections.map(section => (
        <Link key={section.id} to={`/section/${section.id}`}>
          <div className="border rounded-lg p-4 shadow-md">
            <img src={section.imageUrl || './sbanner.jpg'} alt={section.ciclo} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{'Sección ' + section.id}</h2>
            <p>{section.descripcion || 'No hay descripción disponible'}</p>
            <p><strong>Modalidad:</strong> {section.modalidad}</p>
            <p><strong>Ubicación:</strong> {section.universidad}</p>
            <p><strong>Ciclo:</strong> {section.ciclo || 'No hay horario disponible'}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
