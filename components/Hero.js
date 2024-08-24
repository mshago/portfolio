import React, { useEffect, useState } from 'react';
import userData from '@constants/data';
import { descriptions } from '@constants/descriptions';

export default function Hero() {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    setDescription(descriptions[randomIndex]);
  }, []);

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden min-h-screen mt-12">
      <div className="flex flex-col w-full xl:w-8/12 px-12">
        <h2 className="font-mono text-sm md:mb-2 md:text-xl text-green-400">
          Hello there, I am
        </h2>
        <h1 className="font-bold text-4xl md:mb-4 md:text-8xl text-gray-200">
          {userData.name + '.'}
        </h1>
        <span className="font-bold text-lg mb-3 md:text-5xl text-green-400">
          {description ? description : 'Loading...'}
        </span>
      </div>
    </div>
  );
}
