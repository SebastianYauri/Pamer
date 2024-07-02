import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarSupervisor from './components/SidebarSupervisor';
import SidebarStudent from './components/SidebarStudent';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import RegistEstudiante from './pages/RegistEstudiante';
import Login from './pages/Login';
import SupervisorView from './pages/SupervisorView';
import SectionDetail from './pages/SectionDetail';
import StudentView from './pages/StudentView';
import Registration from './pages/Registration'; // Importar el componente Registration
import UNI from './pages/UNI'; // Importar el componente UNI
import UNMSM from './pages/UNMSM'; // Importar el componente UNI
import ULIMA from './pages/ULIMA'; // Importar el componente UNI
import PUCP from './pages/PUCP'; // Importar el componente UNI

const AppContent = () => {
  const location = useLocation();

  // Rutas que deben ocultar Navbar y Footer
  const hideNavbarAndFooterRoutes = ['/login', '/supervisor', '/section', '/student', '/registro/estudiante'];

  // Determinar cuándo ocultar Navbar y Footer
  const hideNavbarAndFooter = hideNavbarAndFooterRoutes.some(path => location.pathname.startsWith(path));

  // Determinar cuándo mostrar SidebarSupervisor o SidebarStudent
  const showSidebarSupervisor = location.pathname.startsWith('/supervisor') || location.pathname.startsWith('/section');
  const showSidebarStudent = location.pathname.startsWith('/student');

  return (
    <div className="flex min-h-screen">
      {showSidebarSupervisor && <SidebarSupervisor />}
      {showSidebarStudent && <SidebarStudent />}
      <div className={`flex-grow ${showSidebarSupervisor || showSidebarStudent ? 'ml-64' : ''} flex flex-col`}>
        {!hideNavbarAndFooter && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sedes" element={<About />} />
            <Route path="/ciclos" element={<Courses />} />
            <Route path="/registro/estudiante" element={<RegistEstudiante />} />
            <Route path="/login" element={<Login />} />
            <Route path="/supervisor" element={<SupervisorView />} />
            <Route path="/section/:id" element={<SectionDetail />} />
            <Route path="/student" element={<StudentView />} />
            <Route path="/registro" element={<Registration />} /> {/* Ruta para Registration */}
            <Route path="/uni" element={<UNI />} /> {/* Ruta para UNI */}
            <Route path="/unmsm" element={<UNMSM />} /> {/* Ruta para UNI */}
            <Route path="/ulima" element={<ULIMA />} /> {/* Ruta para UNI */}
            <Route path="/pucp" element={<PUCP />} /> {/* Ruta para UNI */}
          </Routes>
        </main>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
