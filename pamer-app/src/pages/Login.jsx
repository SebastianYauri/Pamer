import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "/log.svg";
import { BASE_URL } from '../config/apiConfig'; 

const transitionDuration = 0.8; // Duración de la transición en segundos

const Login = () => {
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}:8080/usuarios/login`, {
        params: {
          correo: email,
          password: password,
        },
      });
      if (response.status === 200) {
        localStorage.setItem("authToken", JSON.stringify(response.data.token));
        localStorage.setItem("alumno", JSON.stringify(response.data));
        console.log("alumno almacenado:", localStorage.getItem("alumno"));
        navigate("/student");
      }
    } catch (error) {
      setError("Credenciales incorrectas");
    }
  };

  const handleSupervisorLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}:8080/instructor/login`, {
        params: {
          correo: email,
          password: password,
        },
      });
      if (response.status === 200) {
        localStorage.setItem("authToken", JSON.stringify(response.data.token));
        localStorage.setItem("instructor", JSON.stringify(response.data));
        console.log("Instructor almacenado:", localStorage.getItem("instructor"));
        navigate("/supervisor");
      }
    } catch (error) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-5 lg:px-0 overflow-hidden relative">
      <AnimatePresence>
        {!isSupervisor ? (
          <motion.div
            className="w-full h-full bg-white border shadow sm:rounded-lg flex flex-col md:flex-row absolute"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, duration: transitionDuration }}
            key="user-login"
          >
            {/* Columna izquierda con la imagen de fondo */}
            <div
              className="flex-1 md:w-2/3 bg-blue-900 text-center md:block hidden md:flex items-center justify-center"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${backgroundImage})`,
              }}
            ></div>

            {/* Columna derecha con el formulario de login */}
            <div className="flex-1 p-6 sm:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <a href="/logo.svg" className="flex items-center">
                      <img alt="Pamer Logo" src="logo.svg" className="h-8" />
                    </a>
                  </div>
                  <p className="text-[12px] text-gray-500">
                    Ingresa tus datos para iniciar sesión
                  </p>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button type="submit" className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6" />
                      <circle cx="8.5" cy="7" r="4" />
                    </svg>
                    <span className="ml-3">Iniciar Sesión</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    ¿Olvidaste tu contraseña?{" "}
                    <Link to="/reset-password">
                      <span className="text-blue-900 font-semibold">
                        Restablecer contraseña
                      </span>
                    </Link>
                  </p>
                  <span
                    className="text-blue-900 font-semibold cursor-pointer text-center mt-4"
                    onClick={() => setIsSupervisor(true)}
                  >
                    Iniciar sesión como supervisor
                  </span>
                </form>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="w-full h-full bg-white border shadow sm:rounded-lg flex flex-col md:flex-row absolute"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, duration: transitionDuration }}
            key="supervisor-login"
          >
            {/* Columna izquierda con el formulario de login */}
            <div className="flex-1 p-6 sm:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <a href="/logo.svg" className="flex items-center">
                      <img alt="Pamer Logo" src="logo.svg" className="h-8" />
                    </a>
                  </div>
                  <p className="text-[12px] text-gray-500">
                    Ingresa tus datos para iniciar sesión
                  </p>
                </div>
                <form onSubmit={handleSupervisorLogin} className="flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button type="submit" className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6" />
                      <circle cx="8.5" cy="7" r="4" />
                    </svg>
                    <span className="ml-3">Iniciar Sesión</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    ¿Olvidaste tu contraseña?{" "}
                    <Link to="/reset-password">
                      <span className="text-blue-900 font-semibold">
                        Restablecer contraseña
                      </span>
                    </Link>
                  </p>
                  <span
                    className="text-blue-900 font-semibold cursor-pointer text-center mt-4"
                    onClick={() => setIsSupervisor(false)}
                  >
                    Iniciar sesión como usuario
                  </span>
                </form>
              </div>
            </div>
            {/* Columna derecha con la imagen de fondo */}
            <div
              className="flex-1 md:w-2/3 bg-blue-900 text-center md:block hidden md:flex items-center justify-center"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${backgroundImage})`,
              }}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
