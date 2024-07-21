import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import UNMSM from './pages/UNMSM'; // Importar el componente UNMSM
import ULIMA from './pages/ULIMA'; // Importar el componente ULIMA
import PUCP from './pages/PUCP'; // Importar el componente PUCP
import BoletaPago from './pages/BoletaPago'; // Importar el componente BoletaPago
import ProfileView from './pages/ProfileView'; // Importar el componente ProfileView

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  return authToken ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const location = useLocation();

  // Rutas que deben ocultar Navbar y Footer
  const hideNavbarAndFooterRoutes = ['/login', '/supervisor', '/section', '/student', '/registro/estudiante', '/boletapago'];

  // Determinar cuándo ocultar Navbar y Footer
  const hideNavbarAndFooter = hideNavbarAndFooterRoutes.some(path => location.pathname.startsWith(path));

  // Determinar cuándo mostrar SidebarSupervisor o SidebarStudent
  const showSidebarSupervisor = location.pathname.startsWith('/supervisor') || location.pathname.startsWith('/section');
  const showSidebarStudent = location.pathname.startsWith('/student') && !location.pathname.startsWith('/boletapago');
  
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
            <Route path="/supervisor" element={<PrivateRoute><SupervisorView /></PrivateRoute>} />
            <Route path="/section/:id" element={<PrivateRoute><SectionDetail /></PrivateRoute>} />
            <Route path="/student" element={<PrivateRoute><StudentView /></PrivateRoute>} />
            <Route path="/registro" element={<Registration />} /> {/* Ruta para Registration */}
            <Route path="/uni" element={<UNI />} /> {/* Ruta para UNI */}
            <Route path="/unmsm" element={<UNMSM />} /> {/* Ruta para UNMSM */}
            <Route path="/ulima" element={<ULIMA />} /> {/* Ruta para ULIMA */}
            <Route path="/pucp" element={<PUCP />} /> {/* Ruta para PUCP */}
            <Route path="/boletapago" element={<PrivateRoute><BoletaPago /></PrivateRoute>} /> {/* Ruta para BoletaPago */}
            <Route path="/student/profile" element={<PrivateRoute><ProfileView /></PrivateRoute>} /> {/* Ruta para ProfileView */}
          </Routes>
        </main>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router basename='Pamer'>
      <AppContent />
    </Router>
  );
};

export default App;
