import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Flash = () => {
  return (
    <div className='mx-auto p-10'>

<section>
  <div class=" items-center w-full py-12 mx-auto md:px-12 lg:px-16 max-w-5xl">
    <div class="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-2">

      <div className='border border-solid border-gray-200 rounded-lg shadow-lg'>
       
        <div class="p-12 mx-auto">
          <span class="mx-auto text-4xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Success!! </span>
          <div className='mx-auto mt-5 w-24 h-24 rounded-full flex items-center justify-center border border-solid border-green-500'>
            <div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center'>
            <FaCheckDouble className='text-4xl text-white' />

            </div>
          </div>
          <p class="mx-auto my-5 text-base text-gray-500 lading-relaxed">You have successfully created an account with us. Explore the options that our website provides.</p>
          

          
          <div className='flex items-center justify-center gap-10'>
          <div class="mt-6">
            <a href="#" class="w-full bg-green-600 items-center block px-10 py-3.5 text-base font-medium text-center hover:scale-110 text-white transition duration-500 ease-in-out transform shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">Accept</a>
          </div> <div class="mt-6">
            <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center hover:scale-110 text-green-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Explore</a>
          </div>
          </div>
         
        </div>
      </div>

      <div className='border border-solid border-gray-200 rounded-lg shadow-lg'>
       
       <div class="p-12 mx-auto">
         <span class="mx-auto text-4xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Error!! </span>
         <div className='mx-auto mt-5 w-24 h-24 rounded-full flex items-center justify-center border border-solid border-red-500'>
           <div className='w-20 h-20 bg-red-500 rounded-full flex items-center justify-center'>
           <IoMdClose  className='text-4xl text-white' />

           </div>
         </div>
         <p class="mx-auto my-5 text-base text-gray-500 lading-relaxed">Account creation failed. Check the details as per the guidelines and try again.</p>
         

         
         <div className='flex items-center justify-center gap-10'>
         <div class="mt-6">
           <a href="#" class="w-full bg-red-600 items-center block px-10 py-3.5 text-base font-medium text-center hover:scale-110 text-white transition duration-500 ease-in-out transform shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200">Redo</a>
         </div> <div class="mt-6">
           <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center hover:scale-110 text-red-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Exit</a>
         </div>
         </div>
        
       </div>
     </div>


    


    </div>
  </div>
</section>

    </div>
  )
}

export default Flash