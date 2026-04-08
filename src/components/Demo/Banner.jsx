import React from 'react'

const Banner = () => {
  return (

    <div className='bg-banner border-b border-black w-full min-h-[450px] flex items-center'>

      <div className='size py-[8rem] flex flex-col items-start gap-[1.5rem]'>
        <h1 className='font-title text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] font-normal leading-tight'>
          Stay curious.
        </h1>
        
        <p className='w-full md:w-[32rem] text-[1.3rem] md:text-[1.6rem] font-medium leading-8'>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        
        <button className='btn px-6 bg-black text-white rounded-full !text-[1.2rem] mt-[2.5rem]'>
          Start Reading
        </button>
      </div>
    </div>
  )
}

export default Banner
