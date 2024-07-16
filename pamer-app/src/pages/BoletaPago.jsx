import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import SidebarStudent from '../components/SidebarStudent';
import logo from '/logo.svg'; // Importar el logo
import finalImage from '/boleta.jpg'; // Importar la imagen final
import { useLocation } from 'react-router-dom'; // Importar useLocation

const BoletaPago = () => {
  const location = useLocation(); // Usar useLocation para acceder a location
  const { state } = location;
  const { matricula } = state || {}; // Extraer los datos de matrícula

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SidebarStudent />
      <div className="flex-grow ml-64 flex flex-col items-center p-10">
        <div ref={componentRef} className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full">
          {/* Logo arriba del título */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-16" />
          </div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Boleta de Pago</h2>
          {matricula ? (
            <>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-blue-900">Detalles de la Matrícula</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Nombre del Alumno:</span><p>{matricula.alumno.nombre} {matricula.alumno.apellido}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Ciclo:</span><p>{matricula.ciclo.ciclo}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Modalidad:</span><p>{matricula.ciclo.modalidad}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Universidad:</span><p>{matricula.ciclo.universidad}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Fecha de matrícula:</span><p>{matricula.fecha}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Monto a Pagar:</span>
                  <span className="text-2xl font-bold text-red-600">S/ 500.00</span>
                </div>
              </div>
              <img src={finalImage} alt="Boleta" className="w-full" />
            </>
          ) : (
            <p>No se encontraron datos de matrícula.</p>
          )}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Imprimir Boleta
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
              Volver al Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BoletaPago;
