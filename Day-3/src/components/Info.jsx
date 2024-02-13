import React from 'react'
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { GiCrackedGlass } from "react-icons/gi";
import { FaBatteryQuarter } from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";
import { BsMusicPlayer } from "react-icons/bs";
import { TbFaceId } from "react-icons/tb";



const Info = () => {
  return (
    <div>
        <section class="bg-white text-black">
  <div class="container mx-auto sm:px-10 sm:py-12 lg:px-8 lg:py-16 px-4">
    <div class="">
      <h2 class="text-3xl font-bold sm:text-4xl">What makes us special</h2>

      <p class="mt-4 text-black">
        To be honest, nothing. You will buy the same thing every year and we will be laughing our way to the bank every fiscal year. Intrusive thoughts for the win!.
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <MdOutlinePhonelinkLock  className='text-2xl text-blue-700'/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Titanium Case.</h2>

          <p class="mt-1 text-sm text-gray-500">
            We always say this every year but in reality it's just recycled plastic and me make it shine so that we can fool you.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <GiCrackedGlass  className='text-2xl '/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Ceramic Glass.</h2>

          <p class="mt-1 text-sm text-gray-500">
            Its just glass. But for the basis of sounding smart, we have to add the word ceramic which we know is used to make plates.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <FaBatteryQuarter  className='text-2xl text-red-500'/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Long Battery Life.</h2>

          <p class="mt-1 text-sm text-gray-500">
            In this model, we have done absolutely nothing to improve battery life. Still lasts three hours and will not change it abit.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <IoFitnessOutline  className='text-2xl text-purple-500'/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Fitness Tracking.</h2>

          <p class="mt-1 text-sm text-gray-500">
            Recent research shows that people use watches to keep track of their lifestyle. So we added this feature people will not use and charge for it.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <BsMusicPlayer  className='text-2xl text-emerald-800 '/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Music Control.</h2>

          <p class="mt-1 text-sm text-gray-500">
            With our impressive 1.5" screen, you will have a hard time strugglingto see which music you are listening to.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 shadow-xl p-3 border-solid border-2 border-gray-50 rounded-md">
        <span class="shrink-0 rounded-lg bg-white p-4 border-solid border-2 border-gray-100 shadow-md">
        <TbFaceId  className='text-2xl text-orange-500'/>

        </span>

        <div>
          <h2 class="text-lg font-bold">Face ID.</h2>

          <p class="mt-1 text-sm text-gray-500">
            With the top of the line 2MP camera, we have installed Face ID for some reason so that we can boost sales with features you will not use.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Info