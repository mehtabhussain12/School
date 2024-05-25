import React from 'react'
import Hero2 from './Hero2'

const Stats = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-32 mb-4 mt-4 '>
          <div className='text-center'>
              <h1 className='text-[#96BB7C] text-3xl md:text-5xl font-bold'>15K</h1>
              <p className='text-black font-bold mt-2 '>Happy Customers</p>
          </div>
          <div className='text-center'>
              <h1 className='text-[#96BB7C] text-3xl md:text-5xl font-bold'>150K</h1>
              <p className='text-black font-bold mt-2 '>Monthly Visitors</p>
          </div>
          <div className='text-center'>
              <h1 className='text-[#96BB7C] text-3xl md:text-5xl font-bold'>15K</h1>
              <p className='text-black font-bold mt-2 '>Happy Customers</p>
          </div>
          <div className='text-center'>
              <h1 className='text-[#96BB7C] text-3xl md:text-5xl font-bold'>15</h1>
              <p className='text-black font-bold mt-2 '>Countries Worldwide</p>
          </div>
          <div className='text-center'>
              <h1 className='text-[#96BB7C] text-3xl md:text-5xl font-bold'>100+</h1>
              <p className='text-black font-bold mt-2 '>Top Partners</p>
          </div>
      </div>
      <Hero2/>
    </>
  )
}

export default Stats
