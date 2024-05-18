// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el componente Footer
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sedes" element={<About />} />
        <Route path="/ciclos" element={<Courses />} />
        <Route path="/registro" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
