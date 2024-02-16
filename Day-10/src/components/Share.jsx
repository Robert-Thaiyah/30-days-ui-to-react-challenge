import React from 'react'
import { Tooltip, Button } from "@material-tailwind/react";
import Shoes from '../assets/shoes.jpg'
import { FaFacebook, FaInstagram , FaPinterest} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Share = () => {
  return (
    <div className='container mx-auto mt-20 '>
        <section>
  <div class="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
    <img class="aspect-video w-80 rounded-t-2xl object-cover object-center"  alt='shoes'src={Shoes}/>
    <div class="p-6">
      <small class="text-gray-900 text-xs">Sneakers</small>
      <h1 class="text-2xl font-medium text-gray-700 pb-2">Michael Jordan Nike XL 300</h1>
      <p class="text text-gray-500 leading-6">Top of the line Nike sneakers under the vintage line of the famous Athletes to ever play on this planet, range from basketball superstars to Football Legends.</p>
    </div>
    <div className='m-4 flex items-center justify-center gap-2 flex-wrap'>

    <Tooltip content="Share"
    animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}>
      <Button className='bg-blue-600 text-2xl'> <FaFacebook />
</Button>
    </Tooltip>
    <Tooltip content="Tweet"
    animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}>
      <Button className='text-2xl'><FaXTwitter />
</Button>
    </Tooltip>
    <Tooltip content="Reel"
    animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}>
      <Button className='bg-purple-400 text-2xl'><FaInstagram />
</Button>
    </Tooltip>
    <Tooltip content="Story" placement='bottom'
    animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: -25 },
      }}>
      <Button className='bg-red-600 text-2xl'><FaPinterest/></Button>
    </Tooltip>
    
    </div>
  </div>

</section>
    </div>
  )
}

export default Share