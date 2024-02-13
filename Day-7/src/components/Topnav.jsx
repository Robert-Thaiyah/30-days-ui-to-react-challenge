import React from 'react'

const Topnav = () => {
  return (
    <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                    <h1 class="text-lg font-medium">Settings</h1>
                    <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded bg-blue-700 hover:bg-blue-300 text-white">
                        Add User
                    </button>
                    <button class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-red-600 rounded hover:bg-red-300 text-white">
                        Logout
                    </button>
                    <button class="relative ml-2 text-sm focus:outline-none group">
                        <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div class="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Change text color</a>
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Change theme</a>
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Change Everything</a>
                        </div>
                    </button>
                </div>
  )
}

export default Topnav