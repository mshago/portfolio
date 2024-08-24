import { LinkIcon } from './Icons';
import { Tag } from './Tag';

export const ProjectCard = ({
  title,
  link,
  imgUrl,
  description,
  techStack,
}) => {
  return (
    <li className="list-none shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-500 hover:bg-opacity-5 duration-500 flex flex-col">
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-grow">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-gray-300 font-semibold text-base">
              <a
                aria-label={title}
                className="hover:cursor-pointer"
                target="_blank"
                href={link}
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  {title}
                  <LinkIcon className="ml-2" />
                </span>
              </a>
            </h3>
            <p className="text-gray-400 text-sm leading-normal mt-2">
              {description}
            </p>
          </div>
          <div className="hidden relative w-1/2 h-[200px] overflow-hidden md:flex justify-center items-center">
            <img
              l
              src={imgUrl}
              alt={`${title} screenshot`}
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
        <div className="flex-shrink-0">
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
