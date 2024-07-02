import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarSupervisor from './components/SidebarSupervisor';
import SidebarStudent from './components/SidebarStudent'; // Importa SidebarStudent
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Login from './pages/Login';
import SupervisorView from './pages/SupervisorView';
import SectionDetail from './pages/SectionDetail';
import StudentView from './pages/StudentView'; // Importamos StudentView

const AppContent = () => {
  const location = useLocation();
  
  // Función para determinar cuándo ocultar Navbar y Footer
  const hideNavbarAndFooter = ['/login', '/supervisor', '/section', '/student'].some(path => location.pathname.startsWith(path));
  
  // Función para determinar cuándo mostrar SidebarSupervisor o SidebarStudent
  const showSidebarSupervisor = ['/supervisor', '/section'].some(path => location.pathname.startsWith(path));
  const showSidebarStudent = ['/student'].some(path => location.pathname.startsWith(path));

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
            <Route path="/registro" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/supervisor" element={<SupervisorView />} />
            <Route path="/section/:id" element={<SectionDetail />} />
            <Route path="/student" element={<StudentView />} /> {/* Ruta para StudentView */}
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
