import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "/log.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://192.168.1.85:8080/usuarios/login", {
        params: {
          correo: email,
          password: password,
        },
      });
      if (response.status === 200) {
        // Autenticación exitosa, redirigir al dashboard o página principal
        navigate("/registro");
      }
    } catch (error) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-5 lg:px-0">
      <div className="w-full h-full bg-white border shadow sm:rounded-lg flex flex-col md:flex-row">
        <div
          className="flex-1 md:w-2/3 bg-blue-900 text-center md:block hidden md:flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        
        <div className="flex-1 p-6 sm:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <a href="/logo.svg" className="flex items-center">
                  <img alt="Pamer Logo" src="/logo.svg" className="h-8" />
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
                placeholder="Enter your email"
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
              <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
