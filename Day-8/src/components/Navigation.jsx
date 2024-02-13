import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { SiStackhawk } from "react-icons/si";


const Navigation = () => {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <SiStackhawk className='text-4xl' />

      <span class="ml-3 text-xl text-fuchsia-800">Navigation</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-black">
      <a class="mr-5 hover:text-fuchsia-900 cursor-pointer hover:underline transition-all duration-600">Home</a>
      <a class="mr-5 hover:text-fuchsia-900 cursor-pointer hover:underline transition-all duration-600">About Us</a>
      <a class="mr-5 hover:text-fuchsia-900 cursor-pointer hover:underline transition-all duration-600">Blog</a>
      <a class="mr-5 hover:text-fuchsia-900 cursor-pointer hover:underline transition-all duration-600">Contact</a>
    </nav>
    <button class="inline-flex items-center bg-fuchsia-600 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-800 rounded text-base mt-4 md:mt-0 text-white transition-colors duration-500 ease-in-out">Login
    <GoArrowRight className='ml-3'/>

    </button>
  </div>
</header>
    </div>
  )
}

export default Navigation