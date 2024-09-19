import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-2">
      {/* Social Icons */}
      <div className="flex space-x-4 justify-center">
        <a
          href="https://x.com/AayushxMUFC"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/aayush-pandey-a4b413263/"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/AayushPandeyy"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default TopNavBar;
