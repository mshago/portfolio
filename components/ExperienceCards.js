import React from 'react';
import { Tag } from './Tag';

export const ExperienceCardMobile = ({
  data: { title, desc, date, techStack },
  companyLink,
}) => {
  return (
    <li className="mb-8 list-none rounded-lg overflow-hidden transition-transform transform shadow-lg bg-gray-500 bg-opacity-5 duration-500 flex flex-col">
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-grow">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-green-400 font-semibold text-base">{title}</h3>
            <div className="mb-3">
              <span className="text-gray-400 text-sm">
                {companyLink} - {date}
              </span>
            </div>
            <ul className="job-description">
              {Array.isArray(desc) ? (
                desc.map((item, key) => {
                  return (
                    <li className="text-gray-300" key={key}>
                      {item}
                    </li>
                  );
                })
              ) : (
                <li className="text-gray-300">{desc}</li>
              )}
            </ul>
          </div>
        </div>
        {techStack && (
          <div className="flex-shrink-0">
            <ul className="flex flex-wrap px-4 pb-4">
              {techStack.map((tech, idx) => (
                <li key={idx} className="mr-2 mb-4">
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export const ExperienceCard = ({
  data: { title, desc, date },
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
              return (
                <li className="text-gray-300" key={key}>
                  {item}
                </li>
              );
            })
          ) : (
            <li className="text-gray-300">{desc}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
