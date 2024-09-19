import React from "react";
import { FaLocationArrow, FaMailBulk, FaMobileAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="p-8 bg-black">
      <div className="flex justify-center gap-8 w-full h-90 text-yellow-400">
        <div
          className="contact-details md:w-1/3 rounded-lg bg-red-500 p-6 flex flex-col gap-5 justify-center items-center "
          style={{
            height: "500px",
            backgroundImage: `url(${"https://img.freepik.com/premium-photo/contact-communication-icons-gray-background_254268-5067.jpg"})`,
          }}
        >
          <h1
            className="text-3xl text-white"
            style={{ fontFamily: "Graduate" }}
          >
            Contact Me
          </h1>
          <h1 className="flex items-center gap-4">
            <span>
              <FaLocationArrow />
            </span>
            Gongabu,Kathmandu
          </h1>
          <h1 className="flex items-center gap-4">
            <span>
              <FaMobileAlt />
            </span>
            +977-9849305128
          </h1>
          <h1 className="flex items-center gap-4">
            <span>
              <FaMailBulk />
            </span>
            ap200061@gmail.com
          </h1>
        </div>
        <div
          className="get-in-touch w-1/2 "
          style={{
            backgroundColor: "#02112a",
          }}
        >
          <h1
            className="text-sm font-bold text-center text-white mt-4"
            style={{ fontFamily: "Bungee Hairline" }}
          >
            Contact Me
          </h1>
          <h1
            className="text-xl font-bold text-center mb-12 text-yellow-400"
            style={{ fontFamily: "Graduate" }}
          >
            Dont Forget To Leave me a message !
          </h1>
          <form action="" className="p-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 h-12 rounded-lg bg-gray-800"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full px-4 h-12 py-2  rounded-lg bg-gray-800"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Please leave me a message here"
                className="w-full px-4 py-2 h-32 rounded-lg bg-gray-800"
              />
            </div>
            <button className="mt-6 rounded-lg bg-white px-4 py-3  text-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
