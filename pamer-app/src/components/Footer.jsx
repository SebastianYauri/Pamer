import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter ,BsTiktok } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-blue-900 text-white p-4">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <a href="/logo.svg" className="mb-4 flex items-center">
              <img alt="Pamer Logo" src="/logo-white.svg" className="mr-3 h-8" />
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Contacto</h2>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><a href="#" className="hover:underline">Email: informes_academias@pamer.edu.pe</a></li>
              <li><a href="#" className="hover:underline">Central telf: 01 748 3196</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Redes Sociales</h2>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Tiktok</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex justify-center items-center mt-4">
          <div className="text-sm">
            © 2024 Corporación Educativa <span className="font-semibold">Pamer</span>
          </div>
          <div className="ml-6 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white"><BsFacebook /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
