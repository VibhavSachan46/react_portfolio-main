import React from "react";
import storyscape from "../assets/images/storyscape.png";
import paytm from "../assets/images/paytm.png";
import weather from "../assets/image/weather.png";
import todo from "../assets/image/todo.png";
import google from "../assets/image/google.png";
import rock from "../assets/image/rock.png";
import FileSharing from "../assets/image/FileSharing.png"

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: storyscape,
      name: "Story Scape",
      github_link: "https://github.com/VibhavSachan46/Blog-Completed",
      live_link: "https://story-scape.vercel.app/",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Cloudinary, Redux Toolkit",
    },
    {
      img: FileSharing,
      name: "Flick Files",
      github_link: "https://github.com/VibhavSachan46/filesharing",
      live_link: "https://flick-files.vercel.app/",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Cloudinary",
    },
    {
      img: paytm,
      name: "Paytm Wallet",
      github_link: "https://github.com/VibhavSachan46/Paytm",
      live_link: "https://paytm-frontend-two.vercel.app/signin",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJs, MongoDB, Tailwind CSS, JWT",
    },
    {
      img: weather,
      name: "Weather",
      github_link: "https://github.com/VibhavSachan46/weather1",
      live_link: "https://weather-ten-drab.vercel.app/",
      tech: "JavaScript, ReactJS",
    },
    {
      img: google,
      name: "Google Search",
      github_link: "https://github.com/VibhavSachan46/google-search-app-clone",
      live_link: "https://gooogle-search-app.netlify.app/",
      tech: "JavaScript, ReactJs, Tailwind CSS",
    },
    {
      img: todo,
      name: "todo",
      github_link: "https://github.com/VibhavSachan46/Todo-JS",
      live_link: "https://vibhavsachan46.github.io/Todo-JS/",
      tech: "HTML, CSS, JavaScript",
    },
    {
      img: rock,
      name: "Rock Paper Scissor",
      github_link: "https://github.com/VibhavSachan46/rock-paper-scissor",
      live_link: "https://vibhavsachan46.github.io/rock-paper-scissor/",
      tech: "HTML, CSS, JavaScript",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="px-32">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:px-5">
          {projects.map((project_info, i) => (
            <div key={i} className="flex flex-col bg-slate-700 p-4 rounded-xl justify-center items-center">
              <h3 className="text-3xl font-Heading my-4 ">{project_info.name}</h3>
              <img src={project_info.img} alt="" className="rounded-lg w-full" />
              <p className="p-2 font-Heading">{project_info.tech}</p>

              <div className="flex gap-3 mt-4">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded"
                >
                  Github
                </a>
                <a
                  href={project_info.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
