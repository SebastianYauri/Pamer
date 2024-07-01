// En SectionDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const SectionDetail = () => {
  const { id } = useParams(); // Obtener el id de la sección desde los parámetros de la ruta

  // Aquí puedes cargar los detalles de la sección usando el id, por ejemplo, desde una API o datos simulados
  const section = {
    id: id,
    name: 'Nombre de la Sección',
    description: 'Descripción detallada de la Sección',
    modality: 'Presencial',
    location: 'Ciudad',
    schedule: 'Horario',
    imageUrl: 'https://via.placeholder.com/600x400', // URL de imagen de ejemplo
    // Otros datos necesarios para cada sección
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{section.name}</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={section.imageUrl}
            alt={section.name}
            className="w-full h-40 object-cover object-center"
          />
        </div>
        <div className="p-4">
          <p className="mb-2">{section.description}</p>
          <p className="mb-2">Modality: {section.modality}</p>
          <p className="mb-2">Location: {section.location}</p>
          <p>Schedule: {section.schedule}</p>
          {/* Agrega más detalles según los datos de tu sección */}
        </div>
      </div>
    </div>
  );
};

export default SectionDetail;
