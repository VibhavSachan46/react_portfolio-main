import React from "react";
import profile from "../assets/images/profile.jpg"

const About = () => {
  return (
    <section id="about" className="text-white py-10">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg hover:text-gray-700">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2 text-lg lg:font-Heading">
            <div className="text-gray-300 my-3">

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                Hello! 👋 I'm Vibhav Sachan, a final year student deeply passionate about web development. My journey is about merging the dynamic MERN stack with a solid foundation in data structures and algorithms.
              </p>
              <br />

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                Currently, I'm immersed in real-world projects using the MERN (MongoDB, Express.js, React, Node.js) stack. My focus is on crafting responsive, user-friendly web applications that transform ideas into impactful solutions.
              </p>
              <br />

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                Alongside, I'm dedicated to honing my problem-solving skills through continuous learning and practice in data structures and algorithms. I strongly believe that mastering these fundamentals is key to building robust and efficient software.
              </p>

              <br />


              <br />
              <a href="./resume.pdf" download>
                <button className="btn-primary bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={profile}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
