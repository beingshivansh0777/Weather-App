import React from 'react'
import banner from '../assets/banner.png'

const HeroImage = () => {
  return (
    <div className='relative w-full h-[500px]'>
      <img src={banner} alt="" className="w-full h-full object-cover" />  
      <div className="absolute inset-0 flex flex-col justify-center items-start left-20  text-white gap-7">
        <h1 className="text-6xl font-semibold">Weather Trip</h1>
        <p className="mt-4 text-s">Your Weather, Your Journey: Always a Step Ahead with Our Weather Forecasting App!</p>
      </div>
      
    </div>
  )
}

export default HeroImage