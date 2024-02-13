import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";
import Model from "../assets/model.jpeg"
import Flowers from "../assets/flowers.jpeg"
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";



const profile = () => {
  return (
<div class="bg-gray-100 h-full flex items-center justify-center p-2">
	<div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
		
		<div class="relative">
			<img src={Flowers} alt="Banner" class="w-full rounded-t-lg h-48"/>
			<img src={Model} alt="Profile" class="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"/>
		</div>
		
		<div class="flex items-center mt-4">
			<h2 class="text-xl font-bold text-gray-800">Janet May</h2>
			<button class=" px-2 py-1 rounded-full">
            <LuBadgeCheck className='text-blue-600 text-xl'/>

			</button>
		</div>
		
		<p class="text-gray-800 mt-2"> Web Developer | Nature Lover | Coffee Enthusiast </p>
		
		<div class="flex items-center mt-4 space-x-4">
			<a href="https://www.twitter.com" class="text-blue-500 hover:underline"> Twitter </a>
			<a href="https://www.github.com" class="text-blue-500 hover:underline"> GitHub </a>
			<a href="https://www.linkedin.com" class="text-blue-500 hover:underline"> LinkedIn </a>
		</div>
		
		<hr class="my-4 border-t border-gray-300"/>
		
		<div class="flex justify-between text-gray-600 mx-2">
			<div class="text-center">
				<span class="block font-bold text-2xl text-black">4.5K</span>
				<span class="text-xs">Followers</span>
			</div>
			<div class="text-center">
				<span class="block font-bold text-2xl text-black">120</span>
				<span class="text-xs">Following</span>
			</div>
			<div class="text-center">
				<span class="block font-bold text-2xl text-black">350</span>
				<span class="text-xs">Posts</span>
			</div>
		</div>

        <hr class="my-4 border-t border-gray-300"/>

        <div>
        <div class="bg-white p-8 rounded-lg shadow-md max-w-md border-2 border-gray-100">
					
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center space-x-2">
							<img src={Model} alt="User Avatar" class="w-8 h-8 rounded-full"/>
							<div>
								<p class="text-gray-800 font-semibold">Janet May</p>
								<p class="text-gray-500 text-sm">Posted 2 hours ago</p>
							</div>
						</div>
						<div class="text-gray-500 cursor-pointer">
					
							<button class="hover:bg-gray-50 rounded-full p-1">
                            <BsThreeDotsVertical className='text-2xl text-black'/>

							</button>
						</div>
					</div>
					
					<div class="mb-4">
						<p class="text-gray-800">Just another day coverting UI dreams into functional websites! 🐱 <a href="" class="text-blue-600">#UIDesigner</a>
							<a href="" class="text-blue-600">#30DayUIChallenge</a>
						</p>
					</div>
					
					<div class="mb-4">
						<img src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post Image" class="w-full h-48 object-cover rounded-md"/>
					</div>
					
					<div class="flex items-center justify-between text-gray-500">
						<div class="flex items-center space-x-2">
							<button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <FaHeart className='text-red-600 text-lg'/>

								<span>1.1k Likes</span>
							</button>
						</div>
						<button class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <AiOutlineComment className='text-lg text-black' />

							<span>235 Comments</span>
						</button>
					</div>
				</div>
        </div>

	</div>
</div>

  )
}

export default profile