import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLocationArrow, FaMailBulk, FaMobileAlt } from "react-icons/fa";
import Alert from "./Alert";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertData, setAlertData] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ii5w4qu", // Replace with your EmailJS Service ID
        "template_khn1u9v", // Replace with your EmailJS Template ID
        e.target,
        "GmOB_etJlAUOSPTJP" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertData({
            show: true,
            type: "success",
            message: "Message sent successfully!",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setAlertData({
            show: true,
            type: "error",
            message: "Failed to send message. Please try again!",
          });
        }
      );
  };
  return (
    <section className="p-8 bg-black">
      <div className="flex justify-center gap-8 w-full h-90 text-yellow-400 flex-wrap">
        <div
          className=" relative contact-details w-full md:w-1/3 rounded-lg bg-red-500 p-6  "
          style={{
            height: "500px",
            backgroundImage: `url(${"https://img.freepik.com/premium-photo/contact-communication-icons-gray-background_254268-5067.jpg"}) `,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative flex flex-col gap-5 justify-center items-center h-full w-auto">
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
        </div>
        <div
          className="get-in-touch w-full md:w-1/2 p-2"
          style={{
            backgroundColor: "#02112a",
          }}
        >
          {alertData.show && (
            <Alert type={alertData.type} message={alertData.message} />
          )}
          <h1
            className="text-sm font-bold text-center text-white mt-4"
            style={{ fontFamily: "Bungee Hairline" }}
          >
            Contact Me
          </h1>
          <h1
            className="text-xl font-bold text-center mb-6 text-yellow-400 p-2"
            style={{ fontFamily: "Graduate" }}
          >
            Dont Forget To Leave me a message !
          </h1>
          <form onSubmit={sendEmail} className="p-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 h-12 rounded-lg bg-gray-800"
              />
            </div>
            <div className="mt-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 h-12 rounded-lg bg-gray-800"
              />
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                placeholder="Please leave me a message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 h-32 rounded-lg bg-gray-800"
              />
            </div>
            <button className="mt-6 rounded-lg bg-white px-4 py-3 text-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
