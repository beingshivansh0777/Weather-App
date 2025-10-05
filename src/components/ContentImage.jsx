import React from 'react'
import content from '../assets/content.png'
const ContentImage = () => {
  return (
    <div className='relative w-full h-[500px]'>
      <img src={content} alt="" />
      <div className='absolute inset-0 flex flex-col justify-center items-end right-20  text-white gap-7'>
        <h1 className='text-6xl font-semibold'>WeatherTrip.news</h1>
        <p className='mt-4 text-s'>Your guide to weather: Accurate forecasts, storm warnings, tips for preparing and more.</p>
      </div>
    </div>
  )
}

export default ContentImage
