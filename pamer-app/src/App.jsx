import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Login from './pages/Login';

const AppContent = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbarAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sedes" element={<About />} />
          <Route path="/ciclos" element={<Courses />} />
          <Route path="/registro" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {showNavbarAndFooter && <Footer />}
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
