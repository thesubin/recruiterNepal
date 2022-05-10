import React from 'react'

const Hero=()=>{
    return(
        <div className='w-full mt-16 flex justify-center'>
            <div className='w-[80%] relative p-12 bg-black text-white bg-opacity-[0.1]'>
                <div className='mt-20 text-[2rem] font-bold '>
                    <span>
                        Find The Best Talents <br/> that fit your work better
                    </span>
                </div>
                <div className='mt-6 text-[1rem] font-medium '>
                    <span>
                        Work with the largest group of talents and <br/> get your work done.
                        From simple workarounds to large transformations,<br/> we make sure your work gets the best manpower.

                    </span>
                </div>
                <div className='flex space-x-16 mt-16 '>
                <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-900 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    >
                      Post a Job
                    </a>
                  </div>
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-900 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    >
                      Hire a Talent
                    </a>

                  </div>
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-900 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    >
                      Browse Jobs
                    </a>
                  </div>
                </div>
                <img className='absolute top-0 left-0  z-[-1] object-cover  w-full h-full' src='https://trainingindustry.com/content/uploads/2019/02/Employee-Engagement-Must-haves-2.19.19.jpg'/>
            </div>
        </div>
    )
}

export default Hero