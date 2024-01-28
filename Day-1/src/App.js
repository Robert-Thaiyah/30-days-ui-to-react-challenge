import shopping from './assets/shopping.jpg';
import './App.css';

function App() {
  return (
    <div className="w-full h-screen max-w-[1080px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <header className="w-full h-screen flex items-center justify-center mx-auto">
        <img src={shopping} className="h-full w-full" alt="logo" />
      </header>
      <div className='flex flex-col items-center justify-center m-5'>
        <h1 className='text-4xl uppercase font-roboto'>Sign Up to <span className='text-blue-500'>Grocery</span></h1>
        <div className=''>
        <form action="#" method="POST" class="mx-auto mt-5 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-black font-roboto">First name</label>
        <div class="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 font-roboto"/>
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-black font-roboto">Last name</label>
        <div class="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 font-roboto"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-black font-roboto">Email Address</label>
        <div class="mt-2.5">
          <input type="text" name="email" id="email"  className=" font-roboto block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-red-600 font-roboto">Password</label>
        <div class="mt-2.5">
          <input type="password" name="password" id="password"  class="font-roboto block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-red-600 font-roboto">Repeat Password</label>
        <div class="mt-2.5">
          <input type="password" name="password" id="password"  class="block font-roboto w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div class="">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="Blue" class="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                </label>
            </div>
            <span className="font-medium text-black font-roboto">
                I have read and accepted the <span className='text-blue-500 underline'>Terms of Use</span>  and <span className='text-blue-500 underline'>Privacy Policy</span> .
            </span>
        </div>
        
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-48 mx-auto rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10 font-roboto">Sign Up</button>
    </div>
  </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
