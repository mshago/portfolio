import userData from '@constants/data';
import React, { useState } from 'react';
import { Section } from './Section';
import { Tag } from './Tag';
import { ExperienceCardMobile, ExperienceCard } from './ExperienceCards';

export default function Experience() {
  const companies = userData.experience.map((item) => {
    return item.company;
  });
  const experience = userData.experience.map((item) => {
    return item;
  });
  const [currentCompany, setCurrentCompany] = useState(0);

  return (
    <Section id={'experience'} title="Experience">
      <div className="flex xl:w-3/4 m-auto">
        <div className="hidden md:flex flex-col align-start left w-1/3">
          {companies.map((company, index) => {
            return (
              <ExperienceButton
                title={company}
                key={index}
                index={index}
                setCurrentCompany={setCurrentCompany}
                currentCompany={currentCompany}
              />
            );
          })}
        </div>
        <div className="hidden md:flex h-auto w-2/3 px-8">
          <ExperienceCard data={experience[currentCompany]} />
        </div>
        <div className="md:hidden flex flex-col w-full">
          <ul>
            {experience.map((exp, index) => {
              return (
                <ExperienceCardMobile
                  data={exp}
                  key={index}
                  companyLink={companies[index]}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const ExperienceButton = ({
  title,
  index,
  setCurrentCompany,
  currentCompany,
}) => {
  return (
    <button
      onClick={() => setCurrentCompany(index)}
      className={
        index === currentCompany
          ? 'experience-button active-button'
          : 'experience-button'
      }
    >
      <span>{title}</span>
    </button>
  );
};
