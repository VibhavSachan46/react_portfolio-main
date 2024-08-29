import React from "react";
import storyscape from "../assets/images/storyscape.png";
import paytm from "../assets/images/paytm.png";
import weather from "../assets/image/weather.png";
import todo from "../assets/image/todo.png";
import google from "../assets/image/google.png";
import rock from "../assets/image/rock.png";
import FileSharing from "../assets/image/FileSharing.png"
import LinkNest from "../assets/image/LinkNest.png"

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: storyscape,
      name: "Story Scape",
      github_link: "https://github.com/VibhavSachan46/Blog-Completed",
      live_link: "https://story-scape.vercel.app/",
      tech: "JS, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Cloudinary, Redux Toolkit",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1724913613/Project%20Videos/StoryScape_s9f6js.mp4",
      status: "Completed"
    },
    {
      img: LinkNest,
      name: "Link Nest",
      github_link: "https://github.com/VibhavSachan46/Link-Nest",
      live_link: "",
      tech: "Type Script, NextJS, NodeJS, MongoDB, Tailwind CSS, Cloudinary, JWT, Shadcn",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1724915604/Project%20Videos/linbknest_demo_1_yb4fyx.mp4",
      status: "In Progress"
    },
    {
      img: FileSharing,
      name: "Flick-Files",
      github_link: "https://github.com/VibhavSachan46/filesharing",
      live_link: "https://flick-files.vercel.app/",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Cloudinary",
      status: "In Progress"
    },
    {
      img: paytm,
      name: "Digital Wallet App",
      github_link: "https://github.com/VibhavSachan46/Paytm",
      live_link: "https://paytm-frontend-two.vercel.app/signin",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJs, MongoDB, Tailwind CSS, JWT",
      status: "Completed"
    },
    {
      img: weather,
      name: "Weather",
      github_link: "https://github.com/VibhavSachan46/weather1",
      live_link: "https://weather-ten-drab.vercel.app/",
      tech: "JavaScript, ReactJS",
      status: "Completed"
    },
    {
      img: google,
      name: "Google Search",
      github_link: "https://github.com/VibhavSachan46/google-search-app-clone",
      live_link: "https://gooogle-search-app.netlify.app/",
      tech: "JavaScript, ReactJs, Tailwind CSS",
      status: "Completed"
    },
    {
      img: todo,
      name: "todo",
      github_link: "https://github.com/VibhavSachan46/Todo-JS",
      live_link: "https://vibhavsachan46.github.io/Todo-JS/",
      tech: "HTML, CSS, JavaScript",
      status: "Completed"
    },
    {
      img: rock,
      name: "Rock Paper Scissor",
      github_link: "https://github.com/VibhavSachan46/rock-paper-scissor",
      live_link: "https://vibhavsachan46.github.io/rock-paper-scissor/",
      tech: "HTML, CSS, JavaScript",
      status: "Completed"
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
            <div
              key={i}
              className="flex flex-col bg-slate-700 p-4 rounded-3xl justify-center items-center"
            >
              <h3 className="text-3xl font-Heading my-4 ">{project_info.name}</h3>
              <img src={project_info.img} alt="" className="rounded-lg w-full" />
              <p className="p-2 lg:font-Heading">{project_info.tech}</p>

              {/* Status Indicator */}
              <div className={`status-indicator ${project_info.status === 'In Progress' ? 'bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer' : 'bg-green-500 hover:bg-green-700 hover:cursor-pointer'} text-white rounded-full px-4 py-2 mt-4 mb-4`}>
                {project_info.status}
              </div>

              <div className="flex gap-3 mt-4">
                {project_info.github_link && (
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-2 py-2 inline-block rounded-2xl  hover:bg-gray-900 hover:text-cyan-600 justify-center items-center"
                  >
                    Github
                  </a>
                )}

                {project_info.live_link && (
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-2 py-2 inline-block rounded-2xl  hover:bg-gray-900 hover:text-cyan-600 justify-center items-center"
                  >
                    Live Project
                  </a>
                )}

                {project_info.videoURL && (
                  <a
                    href={project_info.videoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-2 py-2 inline-block rounded-2xl  hover:bg-gray-900 hover:text-cyan-600 justify-center items-center"
                  >
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;