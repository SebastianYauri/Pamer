import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarSupervisor from './components/SidebarSupervisor';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Login from './pages/Login';
import SupervisorView from './pages/SupervisorView';
import SectionDetail from './pages/SectionDetail';

const AppContent = () => {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/supervisor', '/section'].some(path => location.pathname.startsWith(path));
  const showSidebar = ['/supervisor', '/section'].some(path => location.pathname.startsWith(path));

  return (
    <div className="flex min-h-screen">
      {showSidebar && <SidebarSupervisor />}
      <div className={`flex-grow ${showSidebar ? 'ml-64' : ''} flex flex-col`}>
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
