import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Gym Pro Solutions",
    description:
      "Gym Pro Solution is a Gym Management System software that helps gyms run smoothly.",
    image: "/gympro.png",
    github: "https://github.com/shabanamumthaz/GymProSolutions",
    link: "https://github.com/shabanamumthaz/GymProSolutions",
  },
  {
    name: "Seedle",
    description: "Seedle is a social media application that offers users a straightforward and user-friendly interface. It includes an integrated news page to keep you updated on current events and a community page.",
    image: "/seedle.jpg",
    github: "https://github.com/cosmic007/Seedle-Social-Media-App",
    link: "https://drive.google.com/file/d/1GqJRCfSnRWBXikZ8jmB_agmglfcSsiwN/view?usp=drive_link",
  },
  {
    name: "Scatext",
    description:
      "Scatext is a sophisticated Android text recognition application, leveraging the power of Google's cutting-edge text recognition library. With Scatext, you can effortlessly extract and decipher text from images.",
    image: "/scatext.jpg",
    github: "https://github.com/shabanamumthaz/Scatext-Text-Recognition-App",
    link: "https://drive.google.com/file/d/1HaSwx_sy1iy4oCrMCbNjixkDxf0EpulV/view?usp=drive_link",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
