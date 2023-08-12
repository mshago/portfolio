import React from "react";
import { Section } from "./Section";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <Section id={"aboutMe"} title={"About Me"}>
      <div className="inner flex flex-col justify-center">
        <div className="w-72 h-auto m-auto">
          <img src={userData.picture} alt="itsme" />
        </div>
        <div className="w-full py-4" />
        <div className="lg:w-2/3 m-auto">
          <p className="text-gray-300 mb-4">
            Hey there! My name is Miguel and I enjoy creating things for fun. My
            enjoyment for web/mobile development started back when I was in
            highschool and had an assigment to develop a web page. Discovered
            all the things I can create with HTML and CSS back there, I decided
            to go for a bachelor degree in IT with focus on software
            development.
          </p>
          <p className="text-gray-300 mb-4">
            I have experience with building user interfaces and user experience,
            knowledge of languages such as Javascript, Typescript, HTML, CSS,
            Python, SQL. Right now I'm using React.js and React-Native as
            development frameworks. I also have built full-stack applications
            with Express.js and MongoDB.
          </p>
          <p className="text-gray-300 mb-4">
            I love learning new and better ways to create the things I find
            interesting. I'm always looking for opportunities to work with
            people willing to share their knowledge. My main goal is to have a
            team to create something that makes people's life easier.
          </p>
        </div>
        <div></div>
      </div>
    </Section>
  );
}
