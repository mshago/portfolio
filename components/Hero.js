import React from "react";
import userData from "@constants/data";
import { Button } from "./Button";


export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (

    <div className="flex flex-row justify-center items-start overflow-hidden px-6 mt-12 pb-38">
      <div className="flex flex-col w-full lg:w-6/12 px-12 md:px-24">
        <h2 className="font-mono text-md mb-2 md:text-xl text-green-400">Hello there, I am</h2>
        <h1 className="font-bold text-4xl mb-4 md:text-8xl text-gray-200">Miguel Luna.</h1>
        <h1 className="font-bold text-4xl mb-3 md:text-6xl text-green-400">I like to messing around with things for fun.</h1>
        <p className="my-6 mb-12 md:text-lg md:w-4/5 text-gray-400">every time i dive in my pool it's hard to be humble</p>
        <div className="inline-block flex md:justify-start md:my-4">
          <Button title='Connect with me' className={'text-lg px-7'}/>
        </div>
      </div>

      <div className="hidden lg:block md:w-5/12 px-20">
        <div className="w-full h-full p-48 bg-white">
          {/*<img src={userData.avatarUrl} alt="avatar" />*/}
        </div>
      </div>
    </div>
  );
}
