import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import userData from "@constants/data";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex flex-col items-center w-full bg-mainBlack sticky top-0 z-50 shadow-sm">
      <header className="flex flex-col items-center md:px-16 md:py-8 py-6 w-full px-6">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex flex-col">
            <a href="/">
              <img className="logo" src="logo.png" width={45} />
              {/* <h1 className="font-semibold text-xl text-green-400">
                Miguel Luna
              </h1>
              <p className="text-base font-light text-gray-400 hidden md:flex">
                {userData.designation}
              </p> */}
            </a>
          </div>

          <div className=" flex flex-col items-center md:hidden">
            {/* Mobile Menu Button Responsive */}
            <button
              onClick={() => setOpenDrawer(!openDrawer)}
              type="button"
              className="inline-flex items-center 
              justify-center p-2 rounded-md text-gray-400 
              focus:outline-none hover:scale-110 ease-in-out duration-300 hover:text-green-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open Menu</span>
              {!openDrawer ? (
                <svg
                  className="block h-8 w-8 stroke-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 hover:fill-green-600"
                  fill="blue"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navbar */}
          <div className="md:flex md:items-center hidden">
            <ul className="navbar flex justify-between items-center list-none m-1">
              <li>
                <a className="text-gray-400" href="#aboutMe">
                  About Me
                </a>
              </li>
              <li>
                <a className="text-gray-400" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="text-gray-400" href="#projects">
                  My Projects
                </a>
              </li>
              <li>
                <a className="text-gray-400" href={`mailto:${userData.email}`}>
                  Contact Me
                </a>
              </li>
            </ul>
            <div>
              <a className="resume-button" href="resume.pdf" target='_blank'>Resume</a>
            </div>
          </div>
        </nav>
      </header>
      <Transition
        show={openDrawer}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className=" flex-col w-full shadow"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-between"
            >
              <ul className="flex flex-col justify-between items-center list-none m-1">
                <li className="my-4">
                  <a className="text-gray-400 text-lg" href="#aboutMe">
                    About
                  </a>
                </li>
                <li className="my-4">
                  <a className="text-gray-400 text-lg" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="my-4">
                  <a className="text-gray-400 text-lg" href="#projects">
                    My Projects 
                  </a>
                </li>
                <li className="my-4">
                  <a
                    className="text-gray-400 text-lg"
                    href={`mailto:${userData.email}`}
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <a className="resume-button" href="resume.pdf" target='_blank'>Resume</a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
