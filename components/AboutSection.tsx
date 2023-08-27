import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JAVA" },
  { skill: "C" },
  { skill: "HTML" },
  { skill: "MySQL" },
  { skill: "Git" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Shabana Mumthaz and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software developer
              based in Kerala, India.
            </p>
            <br />
            <p>
            I earned my Bachelor of Science in Computer Science from the University Institute of Technology, Pirappancode in 2023. Since then, I have been actively engaged in honing my skills in Java Core and Spring Boot to gain valuable professional experience.
            </p>
            <br />
            <p>
            I firmly believe in the principle of  
    <span > continuous growth </span> 
    and passionately strive to uphold it. My strong dedication to technology drives me to constantly explore new possibilities and push boundaries. I look forward to my career journey with excitement and an open mind, always ready for new and exciting opportunities.😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-0 md:left-12 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
