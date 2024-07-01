import React from 'react';
import Dashboard from '../components/Dashboard'; 

const SupervisorView = () => {
  // Datos de secciones
  const sections = [
    {
      id: 1,
      name: 'Sección A',
      description: 'Descripción de la Sección A',
      modality: 'Presencial',
      location: 'Ciudad A',
      schedule: 'Lunes y Miércoles, 9:00 - 12:00',
      imageUrl: './sbanner.jpg', //  URL de imagen
     
    },
    {
      id: 2,
      name: 'Sección B',
      description: 'Descripción de la Sección B',
      modality: 'Virtual',
      location: 'Ciudad B',
      schedule: 'Martes y Jueves, 14:00 - 17:00',
      imageUrl: './sbanner.jpg', // URL de imagen
     
    },
    {
      id: 3,
      name: 'Sección B',
      description: 'Descripción de la Sección B',
      modality: 'Virtual',
      location: 'Ciudad B',
      schedule: 'Martes y Jueves, 14:00 - 17:00',
      imageUrl: './sbanner.jpg', // URL de imagen
     
    },
    {
      id: 4,
      name: 'Sección B',
      description: 'Descripción de la Sección B',
      modality: 'Virtual',
      location: 'Ciudad B',
      schedule: 'Martes y Jueves, 14:00 - 17:00',
      imageUrl: './sbanner.jpg', // URL de imagen
     
    },
    {
      id: 5,
      name: 'Sección B',
      description: 'Descripción de la Sección B',
      modality: 'Virtual',
      location: 'Ciudad B',
      schedule: 'Martes y Jueves, 14:00 - 17:00',
      imageUrl: './sbanner.jpg', // URL de imagen
     
    },
    {
      id: 6,
      name: 'Sección B',
      description: 'Descripción de la Sección B',
      modality: 'Virtual',
      location: 'Ciudad B',
      schedule: 'Martes y Jueves, 14:00 - 17:00',
      imageUrl: './sbanner.jpg', // URL de imagen
     
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Vista de Supervisor</h1>
      <Dashboard sections={sections} />
    </div>
  );
};

export default SupervisorView;
