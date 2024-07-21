import React from 'react';
import { motion } from 'framer-motion'; // Importa motion desde framer-motion
import '../index.css'; // Importa el archivo de estilos index.css

const sedesData = [
  {
    nombre: 'Academia Pamer Santa Beatriz',
    direccion: 'Calle Emilio Fernández 611 Santa Beatriz',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos UNMSM, PUCP, UNI y Privadas',
    imagen: 'Pamer/sede_SB.webp',
  },
  {
    nombre: 'Academia Pamer San Miguel',
    direccion: 'Av. Elmer Faucett 381 San Miguel',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos: UNMSM, PUCP, Privadas',
    imagen: 'Pamer/sede_2.webp',
  },
  {
    nombre: 'Academia Pamer San Martín de Porres',
    direccion: 'Av. Universitaria 3181 San Martin de Porres',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos: UNMSM, PUCP',
    imagen: 'Pamer/sede_3.webp',
  },
  {
    nombre: 'Academia Pamer San Juan de Lurigancho',
    direccion: 'Av. Próceres de la Independencia 1643 Urb. Las Flores de Lima',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos: UNMSM, UNI',
    imagen: 'Pamer/sede_4.webp',
  },
  {
    nombre: 'Academia Pamer San Juan de Miraflores',
    direccion: 'Av. San Juan 607 San Juan de Miraflores',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos: UNMSM',
    imagen: 'Pamer/sede_5.webp',
  },
  {
    nombre: 'Academia Pamer Carabayllo',
    direccion: 'Av. Universitaria #400 – Carabayllo',
    telefono: 'Central Telefónica: 01 7483196',
    ciclosDisponibles: 'Ciclos: UNMSM',
    imagen: 'Pamer/sede_6.webp',
  },
];

const About = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Sedes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sedesData.map((sede, index) => (
          <motion.div
            key={index}
            className="sede-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6, // Duración de la animación
              delay: index * 0.1, // Retraso individual para cada tarjeta
              type: 'spring', // Tipo de animación (puedes cambiar a 'tween' para una transición más lineal)
              stiffness: 100, // Rigidez de la animación (mayor es más rápido)
            }}
          >
            <img
              src={sede.imagen}
              alt={`Imagen de ${sede.nombre}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{sede.nombre}</h3>
            <p className="text-gray-600 mb-2">{sede.direccion}</p>
            <p className="text-gray-600 mb-2">{sede.telefono}</p>
            <p className="text-gray-600 mb-2">{sede.ciclosDisponibles}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
