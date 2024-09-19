import React from "react";
import linkupLogo from "../assets/logo.jpeg";
import taskmateLogo from "../assets/taskmate.webp";
import lootscoopLogo from "../assets/lootscoop.webp";

const ProjectsSection = () => {
  return (
    <section className="p-6 bg-black">
      <h1
        className="text-sm font-bold text-center text-white"
        style={{ fontFamily: "Bungee Hairline" }}
      >
        What Have I Done?
      </h1>
      <h1
        className="text-4xl font-bold text-center mb-8 text-yellow-400"
        style={{ fontFamily: "Graduate" }}
      >
        My Projects
      </h1>
      <div className=" flex-wrap flex gap-8 justify-center ">
        {/*project 1*/}
        <div
          className="relative project-box rounded-lg h-auto w-80 text-center p-3 overflow-hidden"
          style={{ backgroundColor: "#02112a" }}
        >
          {/* Image and title */}
          <img
            className="w-full h-auto object-cover rounded-lg mb-4"
            src={linkupLogo}
            alt="Project linkupLogo"
          />
          <h1 className="text-white text-3xl mb-4">
            LinkUp
          </h1>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg p-4">
            <p className="mb-4 text-lg p-2">
              A real-time chat application that allows users to connect with
              friends. Built with Firebase and Flutter for seamless
              communication.
            </p>
            <a className="bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-500">
              Check It Out!
            </a>
          </div>
        </div>
        {/*project 2*/}
        <div
          className="relative project-box rounded-lg h-auto w-80 text-center flex flex-col items-center justify-center p-3 overflow-hidden"
          style={{ backgroundColor: "#02112a" }}
        >
          {/* Image and title */}
          <img
            className="w-full h-auto object-cover rounded-lg mb-4"
            src={taskmateLogo}
            alt="Project taskmate"
          />
          <h1 className="text-white  text-3xl mb-4">Task Mate</h1>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg p-4">
            <p className="mb-4 text-lg p-2">
              A user-friendly to-do app that helps you organize and manage your
              daily tasks effortlessly. With features for adding, editing, and
              deleting tasks, you can categorize and prioritize your to-dos, set
              deadlines, and track your progress.
            </p>
            <a className="bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-500">
              Check It Out!
            </a>
          </div>
        </div>
        {/*project 3*/}
        <div
          className="relative project-box rounded-lg h-auto w-80 text-center p-3 overflow-hidden"
          style={{ backgroundColor: "#02112a" }}
        >
          {/* Image and title */}
          <img
            className="w-full h-auto object-cover rounded-lg mb-4"
            src={lootscoopLogo}
            alt="Project lootscoop"
          />
          <h1 className="text-white text-3xl mb-4">
            LootScoop
          </h1>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg p-4">
            <p className="mb-4 text-lg p-2">
              Stay updated on the latest free game deals with LootScoop. The app
              tracks and notifies you when games become available for free on
              popular online stores. Browse through a curated list of current
              deals, view game details, and get direct links to download or
              claim your free games. Never miss out on a great game offer again!
            </p>
            <a className="bg-transparent text-yellow-400 border-2 border-yellow-400 cursor-pointer px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-500">
              Check It Out!
            </a>
          </div>
        </div>
        {/*end of body*/}
      </div>
    </section>
  );
};

export default ProjectsSection;
