import React from 'react'

const Jobs = () =>{
    const comapanies = [
        './assets/facebook.png',

        './assets/kantipur.png',
        './assets/gces.png',
        './assets/twitter.png',
        './assets/itexpo.png',
        './assets/pathao.png'

    ]
    return(
        <div className='w-full flex flex-col items-center mt-24' >
            <div className='font-extrabold uppercase text-[1.4rem]'>
                Jobs Available On
            </div>

            <div className='flex mt-8 space-x-28'>
                {
                    comapanies.map((dat)=><img className='h-14 w-auto' src={dat}/>)
                }
            </div>

        </div>
    )
}

export default Jobs