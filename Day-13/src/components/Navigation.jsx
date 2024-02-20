import React from 'react'
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiDashboard2Line } from "react-icons/ri";
import { LuFolderOpen } from "react-icons/lu";
import { GrPieChart } from "react-icons/gr";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosInfinite } from "react-icons/io";
import Logo from '../assets/amtrak-31171.svg'


const Navigation = () => {
  return (
    <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div class="-mx-6 px-6 py-4">
            <a href="#" title="home" className='flex items-center space-x-3'>
            <IoIosInfinite className='text-[75px]'/>
            <span className='text-2xl'>Infinite Studios</span>
            </a>
        </div>

        <div class="mt-5 text-center">
            <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="cynthia" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
            <span class="hidden text-gray-400 lg:block">Finance</span>
        </div>

        <ul class="space-y-2 tracking-wide mt-8">
            <li>
                <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl group ">
                <RiDashboard2Line className='text-2xl group-hover:text-cyan-300'/>

                    <span class="-mr-1 text-gray-600 ">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <LuFolderOpen className='text-2xl group-hover:text-cyan-300' />

                    <span class="group-hover:text-gray-700">Categories</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group text-white bg-gradient-to-r from-sky-600 to-cyan-400 group">
                <BiMessageRoundedDetail className='text-2xl group-hover:text-cyan-300' />
                    <span class="">Inbox</span>
                    <div className='rounded-full bg-3 w-5 h-5 bg-red-400 flex items-center justify-center text-sm font-medium'>3</div>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <GrPieChart className='text-2xl group-hover:text-cyan-300' />

                    <span class="group-hover:text-gray-700">Other data</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <BsCreditCard2Front className='text-2xl group-hover:text-cyan-400' />

                    <span class="group-hover:text-gray-700">Finance</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <HiOutlineLogout className='text-2xl'/>

            <span class="group-hover:text-gray-700">Logout</span>
        </button>
    </div>
</aside>
  )
}

export default Navigation