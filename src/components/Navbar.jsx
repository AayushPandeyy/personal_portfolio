import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-yellow-400 text-2xl font-bold">MyPortfolio</h1>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 sm:px-3">
            <a
              href="#"
              className="block text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-yellow-400 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
