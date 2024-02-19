import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import './styles.css'

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className='w-full h-72 bg-gradient-to-r from-blue-300 to-violet-400 shadow-md mt-10 flex flex-col items-center justify-center rounded-2xl' >
        <div className='switch w-64 h-24 bg-white rounded-r-full rounded-l-full p-4 flex items-center justify-start mt-5 cursor-pointer' data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className='w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100'
            layout transition={spring}>
            </motion.div>
        </div> 
    </div>
  )
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export default Switch