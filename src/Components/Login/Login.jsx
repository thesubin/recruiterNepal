import React from 'react'

const Login=()=>{
    return(
        <div class="min-h-full w-full flex items-center bg-gradient-to-r from-emerald-100 to-[#073428] justify-center ">
            <div className='flex bg-slate-100 bg-opacity-[0.7] items-center h-max rounded-[20px] overflow-hidden'>
        <div class="px-12">
          <div>
            <img class="mx-auto h-[200px] w-auto" src="./templogo.png" alt="Workflow" />
            
          </div>
          <form class="mt-[-2em] space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label for="remember-me" class="ml-2 block text-[0.8rem] text-gray-600"> Remember me </label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="ml-10 font-medium text-[0.8rem] text-emerald-800 hover:text-emerald-500"> Forgot your password? </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-emerald-100 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className='relative flex h-[70vh] min-h-[500px]  w-[30vw] min-w-[500px] '>
            <img className='w-full h-full  object-cover' src="https://images.unsplash.com/photo-1611348586755-53860f7ae57a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcm58ZW58MHx8MHx8&w=1000&q=80"/>
          <div className='absolute w-full h-full bg-emerald-100 bg-opacity-[0.15]'>

          </div>
        </div>
      </div>
      </div>
      
    )
}

export default Login