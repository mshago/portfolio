import React from "react";
import userData from "@constants/data";
import { Section } from "./Section";

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}

const ProjectCard = ({ title, link, imgUrl }) => {
  return (
    <a href={link} target='_blank'  className="w-full block shadow-lg">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="project transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
            <h1 className="absolute hide bg-green-500 bottom-10 left-10 text-gray-50 font-bold text-xl rounded-sm px-2">
              {title}
            </h1>
        </div>
      </div>
    </a>
  );
};
