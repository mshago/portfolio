import React from "react";
import { Section } from "./Section";

export default function AboutMe() {
  return (
    <Section id={"aboutMe"} title={"About Me"}>
      <div className="inner flex flex-col justify-center">
        <div className="w-52 h-auto m-auto">
          <img src="/avatar.jpg" alt="avatar" />
        </div>
        <div className="w-full py-4" />
        <div className="lg:w-2/3 m-auto">
          <p className="text-gray-300 mb-4">
            Hey there! My name is Miguel and I enjoy creating things for fun. My enjoyment 
            for web/mobile development started back when I was in highschool and had an assigment to develop a web
            page. Discovered all the things I can create with HTML and CSS back
            there, I decided to go for a bachelor degree in IT.
          </p>
          <p className="text-gray-300 mb-4">
            I have experience with building user interfaces and user experience, knowledge
            of languages such as Javascript (ES6), Typescript, HTML, CSS, Python, SQL. Right now
            I'm using React.js and React-Native as development frameworks. I also have built 
            full-stack applications with Express.js and MongoDB.
          </p>
          <p className="text-gray-300 mb-4">
            I love learning new and better ways to create the things I find interesting.
            I'm always looking for oportunities to work with people willing to share their
            knowledge and I can share mine too. My main goal have a team to create something that makes people's life easier.
          </p>
          
        </div>
        <div>
          
        </div>
      </div>
      {/* <div className="inner flex flex-row justify-center">
        <div className="left">
          <div>
            <p className="text-gray-300 mb-4">
              Hey there! My name is Miguel and I enjoy creating things for fun
              and to learn new stuff. My enjoyment for web/mobile development
              started back when I was in highschool and had an assigment to
              develop a web page of my artist and discovered all the things I
              can create with HTML and CSS.
            </p>
            <p className="text-gray-300 mb-4">
              I decided to go for a bachelor degree in IT, I learned a lot about
              the process to develop a system/app/product and had the privilege
              of working at a start-up, an investigation center.
            </p>
            <p className="text-gray-300 mb-4">
              My main goal these days is to find a team and use this extensive
              experience, training, and education with them.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:px-4"/>
        <div className="hidden lg:block">
          <div className="w-full bg-white">
            <img src="/avatar.jpg" alt="avatar" />
          </div>
        </div>
      </div> */}
    </Section>
  );
}
