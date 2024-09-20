import React from "react";
import { FaAndroid, FaApple, FaJs, FaReact } from "react-icons/fa";
import bg from "../assets/bg.jpg";

const HeaderSection = () => {
  return (
    <header
      className="relative bg-cover bg-center "
      style={{
        height: "600px",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "sticky",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Graduate" }}
        >
          Hi There!
        </h1>
        <h1
          className="text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Bungee Hairline" }}
        >
          I am <span className="text-yellow-400">Aayush Pandey</span>
        </h1>
        <p
          className="text-xl text-gray-200 mb-8"
          style={{ fontFamily: "Graduate" }}
        >
          A Student and An <span className="text-yellow-400">Ever-Growing</span>{" "}
          developer
        </p>
        <a className="bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-300">
          Learn More
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
