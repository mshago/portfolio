import React from "react";
import userData from "@constants/data";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden min-h-screen mt-12">
      <div className="flex flex-col w-full xl:w-8/12 px-12">
        <h2 className="font-mono text-md mb-2 md:text-xl text-green-400">
          Hello there, I am
        </h2>
        <h1 className="font-bold text-4xl mb-4 md:text-8xl text-gray-200">
          {userData.name + "."}
        </h1>
        <h1 className="font-bold text-4xl mb-3 md:text-6xl text-green-400">
          {userData.about.title}
        </h1>
        <p className="my-6 mb-12 md:text-rg md:w-4/5 lg:w-3/5 text-gray-300">
          {userData.about.description}
        </p>
      </div>
    </div>
  );
}
