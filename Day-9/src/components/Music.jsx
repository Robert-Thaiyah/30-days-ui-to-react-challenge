import React from 'react'
import Nelly from '../assets/nelly.jpg'
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { MdPlayCircleOutline } from "react-icons/md";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { TbMusicHeart } from "react-icons/tb";




const Music = () => {
  return (
    <div className='bg-white w-96 h-full flex flex-col items-center p-2 m-5 max-w-7xl mx-auto shadow-xl rounded-2xl border border-slate-100'>

        <div className='flex items-center justify-center gap-56 py-4 mx-2'>
            <button className='cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-sm'>
               <IoChevronBackCircleOutline  className='text-3xl'/> 
            </button>
        
        <button className='cursor-pointer focus:text-red-500 w-10 h-10 shadow-sm rounded-full flex items-center justify-center'>
             <TbMusicHeart  className='text-2xl'/>
        </button>
        </div>

    <div className='flex items-center justify-center mt-4'>
        <img src={Nelly} alt="nelly" className='w-72 h-full rounded-xl shadow-lg shadow-blue-100'/>
    </div>

    <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-4xl font-bold'>Nelly</h1>
        <p className='text-sm font-thin'>Hot in Heer</p>
    </div>

    <div className='flex items-center justify-center gap-4 mt-5 mb-6'>
        <button className='w-10 h-10 rounded-full shadow-xl flex items-center justify-center cursor-pointer'>
          <MdChevronLeft className='text-3xl' />  
        </button>
    <button className='w-20 h-20 rounded-full shadow-xl flex items-center justify-center cursor-pointer'>
<MdPlayCircleOutline className='text-5xl' />
    </button>
    <button className='w-10 h-10 rounded-full shadow-xl flex items-center justify-center cursor-pointer'>
<MdChevronRight className='text-3xl'/>
    </button>

    </div>

    <div className='flex items-center justify-center'>
       <div class="mt-6 bg-gray-200 h-2 rounded-full w-72">
      <div class="bg-black h-2 rounded-full w-1/2"></div>
    </div> 
    </div>

    
    <div class="flex items-center justify-between mt-2 text-sm text-gray-500 w-72 mb-3" >
      <span>1:57</span>
      <span>3:53</span>
    </div>
    
    </div>
  )
}

export default Music