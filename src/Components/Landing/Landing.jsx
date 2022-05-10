import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Jobs from './SubComponents/Jobs'
import Hero from './SubComponents/Hero'
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
const Landing=()=>{
    return(
        <div className="relative h-max font-raleway w-full bg-gradient-to-r from-emerald-100 to-[#073428] px-10 flex flex-col  bg-white overflow-hidden">
        <div className="max-w-[1580px] w-full mx-auto overflow-x-hidden">
          <div className="relative flex flex-col items-center w-full pt-4 px-16 z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32">
            
  
            <Popover className="w-full">
              <div className="w-full relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="./temp_logo.png"
                        />
                      </a>
                      <div className="-mr-2 flex  items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden ml-auto md:block  md:pr-4 md:space-x-16">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-black hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <a href="#" className="font-medium ml-[4rem] border-2 px-8 py-2 border-black  hover:text-indigo-500">
                      Log in
                    </a>
                </nav>
              </div>
  
              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
  
            <main className=" w-full flex  items-center justify-center px-4 sm:mt-12 sm:px-6 relative ">
              <div className='bg-gradient-to-r from-[#FCF3ED] to-[#FCF1FF] opacity-[0.2] z-[-1] w-full h-full absolute'/>
              <div className='absolute w-[190px] bottom-30 left-[47%]'>
                  <img src='./assets/arrow.png'/>
              </div>
              <div className="sm:text-center w-[50%] lg:text-left lg:max-w-[50%] pt-10 sm:max-w-full">
                <h1 className="text-[5.5rem] leading-[5.5rem] flex flex-col  font-extrabold text-gray-900  ">
                  <span className="block xl:inline">Let's start </span>{' '}
                  <span className="block  xl:inline">Something big</span>{' '}

                  <span className="block  xl:inline">With us.</span>
                </h1>
                <div className="mt-16  flex justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-900 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-[50%] h-full'>
                  <img className='w-full h-full object-cover ' src='./assets/HERO.png'/>
              </div>
            </main>

            <Jobs/>
            <Hero/>
          </div>
        </div>
        </div>
    )
}

export default Landing
