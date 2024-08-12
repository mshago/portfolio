import React from 'react';
import { Section } from './Section';
import userData from '@constants/data';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <Section id={'aboutMe'} title={'About Me'}>
      <div className="flex flex-row">
        <div className="w-full h-auto">
          <Image
            src={userData.picture}
            alt="user_image"
            width={2685}
            height={2685}
            className="rounded-sm"
          />
        </div>
        <div className="lg:w-2/3 mx-5">
          <p className="text-gray-300 mb-4">
            Hey there! I'm {userData.name}, a passionate software developer
            based in{' '}
            <span className="font-bold text-green-400">{userData.address}</span>
            . I specialize in building exceptional digital experiences and
            products. I have a strong foundation in front-end development and a
            keen interest in cloud technologies.
          </p>
          <p className="text-gray-300 mb-4">
            I love learning new and better ways to create the things I find
            interesting. I'm always looking for opportunities to work with
            people willing to share their knowledge. <br />
            <br /> Always eager to expand my knowledge in cloud technologies and
            take on innovative projects in dynamic development environments. My
            main goal is to have a team to create something that makes people's
            life easier.
          </p>
        </div>
        <div></div>
      </div>
    </Section>
  );
}

//
