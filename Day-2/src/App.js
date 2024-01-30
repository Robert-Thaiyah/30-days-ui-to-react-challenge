import basket from './assets/basket-full-vegetables.jpg'
import './App.css';
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { SiVisa } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";




function App() {
  return (
    <div className="font-roboto flex items-center justify-center mx-auto max-w-full py-10 lg:py-20">
      <div className='container shadow-2xl rounded-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-self-center gap-10 m-4 lg:m-3 sm:m-6 p-5'>
        <div className='container mx-auto shadow-xl rounded-2xl p-4 flex flex-col items-center justify-center gap-4 border-solid border-2 border-slate-200'>
          <div>
            <h2 className='text-2xl font-bold uppercase text-blue-500'>Items in cart</h2>
          </div>
          <div className='px-10 py-10 bg-white text-black w-96 rounded-2xl flex items-center justify-between gap-3 shadow-lg cursor-pointer hover:shadow-2xl'>
            <img src={basket} alt='basket' className='w-16 h-16 rounded-md'/>
            <p className='text-sm'>Summer autumn basket</p>
            <p className='text-sm'>$49.99</p>
          </div>
          <div className='px-10 py-10 bg-white text-black w-96 rounded-2xl flex items-center justify-between gap-4 shadow-lg cursor-pointer hover:shadow-2xl'>
            <img src={basket} alt='basket' className='w-16 h-16 rounded-md'/>
            <p className='text-sm'>Summer autumn basket</p>
            <p className='text-sm'>$49:99</p>
          </div>

          <div className='px-10 py-10 bg-white text-black w-96 rounded-2xl flex items-center justify-between gap-4 shadow-lg cursor-pointer hover:shadow-2xl'>
            <img src={basket} alt='basket' className='w-16 h-16 rounded-md'/>
            <p className='text-sm'>Summer autumn basket</p>
            <p className='text-sm'>$49:99</p>
          </div>

          <div className='px-10 py-10 bg-white text-black w-96 rounded-2xl flex items-center justify-between gap-4 shadow-lg cursor-pointer hover:shadow-2xl'>
            <img src={basket} alt='basket' className='w-16 h-16 rounded-md'/>
            <p className='text-sm'>Summer autumn basket</p>
            <p className='text-sm'>$49:99</p>
          </div>
        </div>

        <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='px-10 py-10 text-black w-full h-full rounded-2xl flex flex-col before:items-center justify-center gap-4 shadow-lg border-solid border-2 border-slate-200'>
          <div className='flex items-center justify-center text-lg text-blue-500 capitalize'>
            <h2>Please choose a Payment Option</h2>
          </div>
          <div className='flex items-center justify-between'>
            <button class="p-4 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10 text-2xl">
            <FaAmazonPay />
            </button>

            <button class="p-4 rounded-lg bg-pink-400 hover:bg-pink-500 font-bold text-white shadow-lg shadow-pink-200 transition ease-in-out duration-200 translate-10 text-2xl">
            <SiVisa />
            </button>

            <button class="p-4 rounded-lg bg-black font-bold hover:bg-white hover:text-black text-white shadow-lg shadow-gray-300 transition ease-in-out duration-200 translate-10 text-2xl">
            <FaBitcoin />
            </button>

    <button class="p-4 text-2xl rounded-lg bg-green-400 hover:bg-green-500 font-bold text-white shadow-lg shadow-green-200 transition ease-in-out duration-200 translate-10">
    <FaCcMastercard />
    </button>

    <button class="p-4 text-2xl rounded-lg bg-yellow-400 hover:bg-yellow-500 font-bold text-white shadow-lg shadow-yellow-200 transition ease-in-out duration-200 translate-10">
    <FaPaypal />
    </button>
          </div>

    <div>
    <form method="POST">
        <input type="hidden" />
        <div>
          <label class="block text-sm font-medium text-gray-800 dark:text-gray-400" for="name"> Card Holder's Name </label>

          <input class="inline-block w-full p-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full" id="name" type="text" name="name" placeholder="Card Name" required="required" autofocus="autofocus" />
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-800 dark:text-gray-400" for="card_number"> Card Number </label>

          <input class="inline-block w-full p-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full" id="card_number" type="text" name="text" placeholder="Card Number" required="required" />
        </div>

      <div className='flex items-center justify-between gap-5'>
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-800 dark:text-gray-400" for="expiry"> Expiry </label>

          <input class="w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block px-3" id="expiry" type="text" name="expiry" placeholder="MM/YY" required="required" autocomplete="new-password" />
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-800 dark:text-gray-400" for="ccv"> CCV </label>

          <input class=" p-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full" id="ccv" type="text" name="expiry" placeholder="CCV" required="required" />
        </div>
      </div>
        
        <div className='flex items-center justify-center flex-col mt-5'>
          <h2>Have the app? Scan the code below</h2>
          <div className='mt-4'>
            <BsQrCode className='text-8xl' />
          </div>
          

        </div>

        <div class="mt-4 flex items-center justify-center">
          <button type="submit" class="ml-4 flex items-center rounded-lg bg-blue-300 p-5 text-sm font-bold text-white hover:bg-blue-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"> <span className='mr-4 text-2xl'><MdOutlineShoppingCartCheckout />
</span> Proceed to Checkout </button>
        </div>
      </form>
    </div>
        
            
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
