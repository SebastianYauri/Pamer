// En Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ sections }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {sections.map(section => (
        <Link key={section.id} to={`/section/${section.id}`}>
          <div className="bg-gray-200 p-4 rounded-lg cursor-pointer">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={section.imageUrl}
                alt={section.name}
                className="w-full h-40 object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{section.name}</h2>
              <p className="mb-2">{section.description}</p>
              <p className="mb-2">Modality: {section.modality}</p>
              <p className="mb-2">Location: {section.location}</p>
              <p>Schedule: {section.schedule}</p>
              {/* Agrega más detalles según los datos de tu sección */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
