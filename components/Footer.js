import React from 'react';
import userData from '@constants/data';
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  TwitterIcon,
} from './Icons';

export default function Footer() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10 md:pt-20">
        <div className="flex flex-col items-center justify-between">
          <div className="w-1/2 flex justify-evenly pb-12 lg:w-1/4">
            <a
              href={userData.socialLinks.instagram}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <InstagramIcon />
            </a>
            <a
              href={userData.socialLinks.twitter}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <TwitterIcon />
            </a>
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href={userData.socialLinks.github}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <GithubIcon />
            </a>
            <a
              href={userData.socialLinks.spotify}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <SpotifyIcon />
            </a>
          </div>
          <p className="text-sm text-gray-200">
            &copy; MIguel Luna. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
