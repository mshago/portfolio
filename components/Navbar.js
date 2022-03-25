import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import {Transition} from '@headlessui/react'

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const [mounted, setMounted] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col items-center w-full bg-mainBlack">
    <header className="flex flex-col items-center md:px-16 md:py-8 py-6 w-full px-6">
      <nav className="flex justify-between items-center w-full">

        {/* Logo */}
        <div className="flex flex-col">
          <a>
              <h1 className="font-semibold text-xl text-green-400">
                Miguel Luna
              </h1>
              <p className="text-base font-light text-gray-400 hidden md:flex">
                {userData.designation}
              </p>
            </a>
        </div>

        <div className=" flex flex-col items-center md:hidden">
          {/* Mobile Menu Button Responsive */}
            <button
              onClick={() => setOpenDrawer(!openDrawer)}
              type="button" 
              className="inline-flex items-center 
              justify-center p-2 rounded-md text-gray-400 
              focus:outline-none focus:ring-2 focus:ring-inset hover:bg-teal-700" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">Open Menu</span>
              {!openDrawer ? (
                <svg className="block h-8 w-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
        </div>
        

        {/* Navbar */}
        <div className="md:flex md:items-center hidden">
          <ul className="flex justify-between items-center list-none m-1">
            <li>
              <a className="text-gray-400">About Me</a>
            </li>
            <li>
              <a className="text-gray-400">Experience</a>
            </li >
            <li>
              <a className="text-gray-400">Projects</a>
            </li>
            <li>
              <a className="text-gray-400">Contact</a>
            </li>
          </ul>
          <div>
            <a className="resume-button">Resume</a>
          </div>
        </div>
      </nav>
    </header>
    <Transition 
        show={openDrawer}
        enter='transition ease-out duration-100 transform'
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className=' flex-col w-full shadow'
      >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-between">
                <ul className="flex flex-col justify-between items-center list-none m-1">
                  <li className="my-4">
                    <a className="text-gray-400 text-lg">About</a>
                  </li >
                  <li className="my-4">
                    <a className="text-gray-400 text-lg">Experience</a>
                  </li >
                  <li className="my-4">
                    <a className="text-gray-400 text-lg">Work</a>
                  </li>
                  <li className="my-4">
                    <a className="text-gray-400 text-lg">Contact</a>
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a className="resume-button">Resume</a>
                </div>
              </div>
            </div>
          )}
      </Transition>
    </div>
  )
}
