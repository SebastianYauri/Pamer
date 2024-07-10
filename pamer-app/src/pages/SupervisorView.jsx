import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import { BASE_URL } from '../config/apiConfig'; 

const SupervisorView = () => {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCiclos = async () => {
      const instructor = JSON.parse(localStorage.getItem("instructor"));
      console.log("Instructor obtenido:", instructor);
      if (instructor && instructor.id) {
        try {
          const response = await axios.get(`${BASE_URL}:8080/ciclos/ciclosPorInstructor`, {
            params: { instructorId: instructor.id }
          });
          console.log("Data from API:", response.data);
          setSections(response.data);
        } catch (error) {
          console.error("API Error:", error);
          setError("Error al obtener los ciclos del instructor");
        }
      }
    };

    fetchCiclos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Vista de Supervisor</h1>
      {error && <p className="text-red-500">{error}</p>}
      {sections.length > 0 ? (
        <Dashboard sections={sections} />
      ) : (
        <p>No se encontraron ciclos para este instructor.</p>
      )}
    </div>
  );
};

export default SupervisorView;
