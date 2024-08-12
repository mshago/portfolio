import React from 'react';
import userData from '@constants/data';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <ul className="max-w-6xl mx-auto grid grid-cols-1 gap-8 py-20 pb-40">
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
