import React from 'react'
import { FaSteam } from "react-icons/fa";
import { CiCoinInsert } from "react-icons/ci";


const Receipt = () => {
  return (
<div className='max-w-7xl mx-auto p-2'>
    <section className='container mx-auto grid grid-cols-1 sm:grid-cols-2 shadow-lg rounded-lg bg-[#171a21]'>
            <div>
                <img src="https://wallpapercave.com/wp/wp2076471.jpg" alt="hell-blade" className='h-full transition-all' />
            </div>
            <div className='grid w-full h-full p-3 bg-[#171a21] text-[#c7d5e0]'>
<div className='flex items-center justify-between p-2 border-b border-gray-200' >
    <h2 className='text-3xl'>Purchase Receipt</h2>
    <div className='text-3xl'>
    <FaSteam />

    </div>
</div>

<div className='my-2 flex flex-col items-center justify-center'>
<h2 className='uppercase mb-2 text-3xl md:text-4xl'>Thank you for your purchase</h2>
<p className='text-lg'>Your order has been comfirmed and the game added to your steam library.</p>
</div>

<div className='py-6 px-3 md:py-3 md:px-2 text-[#171a21] flex items-center justify-between rounded-md shadow-lg mb-3 bg-white/90'>  
    <div className='flex flex-col items-center justify-center'>
        <h3>You have earned steam points</h3>
        <a href="https://www.steam.com" className='underline'>Vist the steam points shop</a>
    </div>
    <div className='relative z-10 flex items-center justify-center gap-3'>
    <CiCoinInsert className='text-2xl'/>
    <span>300 Coins</span>
    </div>
</div>

<div className='grid grid-cols-3 gap-2 mt-5'>
    <div className='px-3 py-2 grid col-span-2 rounded-xl shadow shadow-white text-sm'>
    <div className='flex justify-between items-center'>
        <p>Account Name</p>
        <p>Robert King</p>
    </div>
    <div className='flex justify-between items-center'>
        <p>Invoice Number</p>
        <p>1516154168154</p>
    </div>
    <div className='flex justify-between items-center'>
        <p>Date Issued</p>
        <p>12th Jan 2024 @2:22pm</p>
    </div>
    <div className='flex justify-between items-center'>
        <p>Payment Method</p>
        <p>Visa</p>
    </div>

    </div>
    <div className='px-3 py-2 flex flex-col items-center justify-center rounded-xl shadow shadow-gray-50'>
        <p className='text-2xl'>Price: <span className='font-bold'>$2.99</span> </p>
    </div>
    
</div>

<div className='mt-3 md:mt-4'>
    <p>This email message will serve as your receipt. You can also view your <a href="https:www.steam.com" className='text-blue-500'>Purchase History</a>  at any time.

Refunds and/or returns may be granted for many products on Steam. Learn more about Steam refunds <a href="https://www.steam.com" className='text-blue-500'>here</a> , or request a refund <a href="https://www.steam.com" className='text-blue-500'>here</a> .</p>
</div>
            </div>
        </section>
    </div> 
  )
}

export default Receipt