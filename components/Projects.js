import React from 'react';
import userData from '@constants/data';
import { Section } from './Section';
import Image from 'next/image';
import { LinkIcon } from './Icons';

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
        {userData.projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            link={project.link}
            imgUrl={project.imgUrl}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </ul>
    </Section>
  );
}

const ProjectCard = ({ title, link, imgUrl, description, techStack }) => {
  return (
    <li className="list-none shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-500 hover:bg-opacity-5 duration-500">
      <div className="bg-blue-500 justify-between">
        <div className="flex">
          <div className="w-1/2 p-4">
            <h3 className="text-gray-300 font-semibold text-bas">
              <a className="hover:cursor-pointer" target="_blank" href={link}>
                <span className="flex">
                  {title}
                  <LinkIcon />
                </span>
              </a>
            </h3>
            <p className="text-gray-400 text-sm leading-normal flex-shrink">
              {description}
            </p>
          </div>
          <div className="relative w-1/2"></div>
        </div>
        <div className="mt-4 bg-red-600">
          <ul className="flex flex-wrap p-4">
            {techStack.map((tech, idx) => (
              <li key={idx} className="mr-2 mb-2">
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const Tag = ({ children }) => {
  return (
    <span className="text-sm text-green-500 bg-gray-400 bg-opacity-10 px-2 py-1 rounded-md">
      {children}
    </span>
  );
};
