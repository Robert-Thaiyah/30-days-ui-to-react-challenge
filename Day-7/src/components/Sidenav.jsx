import React from 'react'
import { IoHomeOutline } from "react-icons/io5"; 
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { VscSettings } from "react-icons/vsc";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineInbox } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";



const Sidenav = () => {
  return (
    <div className='flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300 h-full'>
     
                <a class="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300" href="#">
                <SiNintendogamecube className=' text-4xl'/>

                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                <IoHomeOutline className='text-lg' />


                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                <IoDocumentTextOutline className='text-lg'/>

                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                <MdOutlineInbox className='text-lg'/>

                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                <HiOutlineChartBarSquare className='text-lg'/>

                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                <VscSettings className='text-lg'/>

                </a>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300" href="#">
                <FaRegCircleUser className='text-lg'/>

                </a>
            
    </div>
  )
}

export default Sidenav