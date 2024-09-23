import React from "react";

const TechStackSection = () => {
  const techStack = [
    { name: "Flutter", level: "60%" },
    { name: "React JS", level: "40%" },
    { name: "Express JS", level: "50%" },
    { name: "Spring Boot", level: "55%" },
    { name: "Python", level: "40%" },
  ];
  return (
    <section
      className="w-full "
      style={{
        backgroundColor: "#02112a",
      }}
    >
      <div className=" flex flex-wrap justify-center items-center gap-8 p-5">
        {/*title section*/}
        <div className="w-1/2 text-start">
          <h1
            className="text-sm font-bold text-center mb-4 text-white"
            style={{ fontFamily: "Bungee Hairline" }}
          >
            What Do I Know?
          </h1>
          <h1
            className="text-4xl font-bold text-center mb-8 text-yellow-400"
            style={{ fontFamily: "Graduate" }}
          >
            My Tech Stack
          </h1>
          <div className=" flex flex-wrap gap-8 justify-center  ">
            <div className=" bg-black rounded-full  p-4 shadow-lg hover:scale-125 transition duration-500">
              <img
                alt="Sketch icon"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className="rounded-full animate-pulse"
                src="https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png"
              />
            </div>
            <div className=" bg-black rounded-full p-4 shadow-lg hover:scale-125 transition duration-500  ">
              <img
                alt="Sketch icon"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className="rounded-full animate-pulse"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
              />
            </div>
            <div className="bg-black rounded-full p-4 hover:scale-125 transition duration-500 ">
              <img
                alt="Sketch icon"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className="rounded-full animate-pulse"
                src="https://www.cdnlogo.com/logos/r/85/react.svg"
              />
            </div>
            <div className=" bg-black rounded-full p-4 shadow-lg hover:scale-125 transition duration-500 ">
              <img
                alt="Sketch icon"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className="rounded-full animate-pulse"
                src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png"
              />
            </div>
            <div className=" bg-black rounded-full p-4 shadow-lg hover:scale-125 transition duration-500 ">
              <img
                alt="Sketch icon"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className="rounded-full animate-pulse"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/640px-Spring_Boot.svg.png"
              />
            </div>
          </div>
        </div>
        {/*skills section*/}
        <div
          className="grid grid-cols-1 sm:grid-cols-2  gap-8"
          style={{ width: "700px" }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg ">
              <h3
                className="text-xl font-semibold mb-3 text-yellow-400"
                style={{ fontFamily: "Graduate" }}
              >
                {tech.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: tech.level }}
                ></div>
              </div>
              <span
                className="text-sm text-yellow-500 font-bold"
                style={{ fontFamily: "Graduate" }}
              >
                {tech.level} proficiency
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  //   return (
  //     <section className="py-10 bg-gray-900 text-white">
  //       <div className="container mx-auto">
  //         <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>

  //       </div>
  //     </section>
  //   );
};

export default TechStackSection;
