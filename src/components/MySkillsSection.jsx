import React from "react";
import { FaCode, FaLightbulb, FaMobile } from "react-icons/fa";

const MySkillsSection = () => {
  return (
    <section
      className="py-12 bg-gray-100"
      style={{
        backgroundColor: "#02112a",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          My Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Skill Box 1 */}
          <div className="skill-box bg-black p-6 rounded-lg shadow-lg w-80 text-center">
            <FaMobile className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h2
              className="text-xl font-semibold mb-2 text-yellow-400"
              style={{ fontFamily: "Graduate" }}
            >
              Mobile App Development
            </h2>
            <p className="text-white">
              As a mobile app developer, I specialize in creating intuitive and
              engaging applications for both Android and iOS platforms. My
              approach involves leveraging frameworks like Flutter to build
              responsive and high-performing apps that deliver seamless user
              experiences.
            </p>
          </div>

          {/* Skill Box 2 */}
          <div className="skill-box bg-black p-6 rounded-lg shadow-lg  w-80 text-center">
            <FaLightbulb className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h2
              className="text-xl font-semibold mb-2 text-yellow-400"
              style={{ fontFamily: "Graduate" }}
            >
              Web Development
            </h2>
            <p className="text-white">
              In my web development journey, I am dedicated to building dynamic
              and interactive websites that captivate and serve users
              effectively. I work on technologies like HTML, CSS, and JavaScript
              for creating engaging user interfaces and frameworks such as React
              to bring these interfaces to life.
            </p>
          </div>

          {/* Skill Box 3 */}
          <div className="skill-box bg-black p-6 rounded-lg shadow-lg w-80 text-center">
            <FaCode className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h2
              className="text-xl font-semibold mb-2 text-yellow-400"
              style={{ fontFamily: "Graduate" }}
            >
              API Development
            </h2>
            <p className="text-white">
              When it comes to API development, I excel at creating robust and
              efficient APIs that facilitate seamless communication between
              different software applications. Using frameworks like Express.js
              and Spring Boot, I ensure that APIs are well-structured, easy to
              use, and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
