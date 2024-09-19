import React from "react";
import { FaAndroid, FaApple, FaJs, FaReact } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <header
      className="relative bg-cover bg-center "
      style={{
        height: "600px",
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/016/840/429/non_2x/memphis-blue-background-with-halftone-and-line-elements-for-wallpaper-web-banner-or-landing-page-vector.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="absolute top-24 left-64 text-blue-500 text-5xl">
          <FaReact></FaReact>
        </div>
        <div className="absolute top-88 left-24 text-green-500 text-5xl">
          <FaAndroid />
        </div>
        <div className="absolute  right-64 top-24 text-yellow-500 text-5xl">
          <FaJs></FaJs>
        </div>
        <div className="absolute right-96 top-96 text-white text-5xl">
          <FaApple />
        </div>
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
          Your goto <span className="text-yellow-400">Flutter</span> developer
        </p>
        <a className="bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-300">
          Learn More
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
