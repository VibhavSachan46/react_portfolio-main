import React from "react";
import profile from "../assets/image/profile.jpg"
import Type from "./Type";

const Hero = () => {
  const social_media = [
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/vibhav-sachan-9b8867214/"
    },
    {
      logo: "logo-twitter",
      link: "https://x.com/sachan_vibhav"
    },
    {
      logo: "logo-github",
      link: "https://github.com/VibhavSachan46"
    },
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/vibhav__sachan/"
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="w-[40%] flex justify-center h-full mt-8 ">
        <img
          src={profile}
          alt=""
          className="md:w-9/12 object-cover rounded-full bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 lg:mt-0 sm:mt-32"
        />
      </div>
      <div className="w-[60%] mt-8">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hi there!
              <br />
            </span>
            I'am <span className="text-cyan-600 md:text-6xl">Vibhav Sachan</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            {<Type/>}
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110">
              Contact Me
            </button>
          </a>

          <div className="mt-12 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social) => (
              <a
                key={social}
                className="text-gray-600 hover:text-white cursor-pointer hover:text-cyan-600 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
                href={social.link}
                target="_blank"
              >
                <ion-icon name={social.logo}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
