import React from 'react'
import { FiPlus } from "react-icons/fi";





const Additional = () => {
  return (
    <div className='flex flex-col w-56 border-r border-gray-300 h-full'>
        <button class="relative text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
                        <span class="font-medium">
                            Additional Settings
                        </span> 
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Sort Alphabetically</a>
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                    </div>
                </button>
                <div class="flex flex-col flex-grow p-4 overflow-auto">
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span class="leading-none">Profile</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span class="leading-none">Account</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span class="leading-none">Appearance</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span class="leading-none">Notification</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span class="leading-none">Display</span>
                    </a>
                    
                    <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                        href="#">
                        <FiPlus />

                        <span class="ml-2 leading-none">Add Item</span>
                    </a>
                </div>
    </div>
  )
}

export default Additional