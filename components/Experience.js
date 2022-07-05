import userData from "@constants/data";
import React, { useEffect, useState } from "react";
import { Section } from "./Section";

export default function Experience() {
  const companies = userData.experience.map((item) => {
    return item.company;
  });
  const experience = userData.experience.map((item) => {
    return item;
  });
  const [currentCompany, setCurrentCompany] = useState(0);

  return (
    <Section id={"experience"} title='Experience'>
        <div className="flex xl:w-3/4 m-auto">
          <div className="flex flex-col align-start left w-1/3">
            {companies.map((company, index) => {
              return (
                <ExperienceButton
                  title={company}
                  key={index}
                  setCurrentCompany={setCurrentCompany}
                  currentCompany={currentCompany}
                />
              );
            })}
          </div>
          <div className="h-auto w-2/3 px-8">
            <ExperienceCard data={experience[currentCompany]} key={experience.findIndex((e) => e === experience[currentCompany])} />
          </div>
        </div>
    </Section>
  );
}

const ExperienceButton = ({ title, index, setCurrentCompany,currentCompany }) => {
  return (
    <button
      onClick={() => setCurrentCompany(index)}
      className={index === currentCompany?"experience-button active-button":'experience-button'}
    >
      <span>{title}</span>
    </button>
  );
};

const ExperienceCard = ({
  data: { title = "a", desc, date = "a" },
  companyLink,
}) => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-green-400">{title}</h1>
      <p href={companyLink} className="text-gray-300 text-xs my-1">
        {date}
      </p>
      <div className="py-4">
        <ul className="job-description">
          {Array.isArray(desc) ? (
            desc.map((item, key) => {
              return <li className="text-gray-300" key={key}>{item}</li>;
            })
          ) : (
            <li className="text-gray-300">{desc}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
