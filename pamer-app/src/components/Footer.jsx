import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-blue-900 text-white p-4">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <a href="/logo.svg" className="mb-4 flex items-center">
              <img alt="Pamer Logo" src="/logo.svg" className="mr-3 h-8" />
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">About</h2>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><a href="#" className="hover:underline">Flowbite</a></li>
              <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
            <ul className="flex flex-col space-y-4 text-sm">
              <li><a href="#" className="hover:underline">Github</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
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
            © 2022 <span className="font-semibold">Pamer</span>
          </div>
          <div className="ml-6 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white"><BsFacebook /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsGithub /></a>
            <a href="#" className="text-gray-500 hover:text-white"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
