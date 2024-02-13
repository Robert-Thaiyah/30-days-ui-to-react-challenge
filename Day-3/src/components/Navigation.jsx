import React from 'react'
import { IoMdWatch } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";



const Navigation = () => {
  return (
    <div>
        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-blue-600 text-2xl" href="#">
          <span className="sr-only">Home</span>
          <IoMdWatch />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-black transition hover:text-blue-500/75" href="#"> About </a>
            </li>

          

            <li>
              <a className="text-black transition hover:text-blue-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-black transition hover:text-blue-500/75" href="#"> Blog </a>
            </li>

            <li>
              <a className="text-black transition hover:text-blue-500/75" href="#"> Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-white hover:text-blue-600 transition-all duration-300"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-blue-500 p-2 text-white transition text-2xl">
          <HiBars3 />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navigation