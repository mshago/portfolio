import React from 'react';

export const Section = ({ id, children, title }) => {
  return (
    <section
      id={id}
      className={
        'w-full pt-24 mb:pb-24 mb-8 px-12 md:px-32 xl:w-8/12 xl:m-auto xl:mb-36 md:min-h-screen'
      }
    >
      <div className="flex flex-row justify-center align-center md:my-6">
        <h1 className="font-light text-2xl md:text-4xl md:mb-4 text-gray-100">
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
};
