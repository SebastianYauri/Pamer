import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import SidebarStudent from '../components/SidebarStudent';
import logo from '/logo.svg'; // Importar el logo
import finalImage from '/boleta.jpg'; // Importar la imagen final

const BoletaPago = ({ matricula }) => {
  // Referencia al componente que se imprimirá
  const componentRef = useRef();

  // Función para manejar la impresión
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Boleta de Pago',
  });

  // Para facilitar la integración futura, el componente espera recibir los datos de matrícula como prop.
  if (!matricula) {
    return <div>No hay datos de matrícula disponibles.</div>;
  }

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
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Nombre del Alumno:</span>
              <span>{matricula.alumno.nombre}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Modalidad:</span>
              <span>{matricula.ciclo.modalidad}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Universidad:</span>
              <span>{matricula.ciclo.universidad}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Ciclo:</span>
              <span>{matricula.ciclo.ciclo}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Fecha de Registro:</span>
              <span>{matricula.fecha}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Monto a Pagar:</span>
              <span className="text-2xl font-bold text-red-600">S/ 500.00</span>
            </div>
          </div>
          {/* Imagen al final de la boleta */}
          <div className="flex justify-center mt-6">
            <img src={finalImage} alt="Final Image" className="h-32" />
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700"
          >
            Imprimir Boleta
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
            Volver al Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// Valores predeterminados para pruebas de frontend
BoletaPago.defaultProps = {
  matricula: {
    alumno: {
      nombre: 'Nombre del Alumno',
    },
    ciclo: {
      modalidad: 'Modalidad',
      universidad: 'Universidad',
      ciclo: 'Ciclo',
    },
    fecha: '01/01/2024',
  },
};

export default BoletaPago;
