import React from "react";
import formal from "../assets/Formal.jpg";

const AboutMeSection = () => {
  return (
    <section
      className="bg-black
       py-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0">
        {/* Image Section */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-12 flex justify-center">
          <img
            src={formal}
            alt="Aayush Pandey"
            className="w-48 h-48 rounded-full shadow-2xl object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-2/3 text-white text-center lg:text-left flex flex-col justify-center items-start">
          <h2
            className="text-lg text-yellow-400 font-bold mb-4"
            style={{ fontFamily: "Bungee Hairline" }}
          >
            Who am I?
          </h2>
          <p className="text-2xl mb-4" style={{ fontFamily: "Graduate" }}>
            Hi, I'm{" "}
            <span className="font-semibold text-yellow-400 ">
              Aayush Pandey
            </span>
            , a passionate Mobile and Web developer with a knack for creating
            intuitive and dynamic mobile and web applications.
          </p>
          <p className="text-md mb-4 text-gray-500 font-bold">
            My goal is to continue growing in app development and contribute to
            meaningful projects. Outside of coding, I enjoy exploring new
            technologies, reading, and working on side projects. Let's connect
            and build something amazing together!
          </p>

          <a
            className=" bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md"
            download
            href="/Aayush_Pandey.pdf"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
