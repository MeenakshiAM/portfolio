import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150" // Change this to your image URL
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-gray-900 shadow-lg"
        />

        {/* About Text */}
        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg">
            Hi, I'm <span className="font-bold text-blue-500">[Your Name]</span>{" "}
            👋. I'm a passionate web developer who loves working with
            <span className="font-bold text-blue-500">
              {" "}
              React & Tailwind CSS.
            </span>
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
