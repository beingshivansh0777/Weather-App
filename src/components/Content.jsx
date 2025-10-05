import React from 'react'
import LN1 from '../assets/LN1.png'
import SLN from '../assets/SLN.png'
import SLN1 from '../assets/SLN1.png'
import SLN2 from '../assets/SLN2.png'
import SAATW1 from '../assets/SAATW1.png'
import SAATW2 from '../assets/SAATW2.png'

const Content = () => {
  return (
    <div className='absolute left-0 flex flex-col justify-start items-start text-lg gap-6 w-full px-20'>
      
      <div className='flex items-center w-full gap-4'>
        <h1 className='font-semibold text-5xl'>LATEST NEWS</h1>
        <div className='flex-1 h-1 bg-purple-600 rounded'></div>
      </div>

      <div className='flex gap-10 w-full'>
        <img className='h-96 object-cover flex-shrink-0' src={LN1} alt="" />
        <div className='flex flex-col justify-start gap-6 flex-1'>
         
          <div className='flex items-center gap-4'>
            <div className='flex-1'>
              <h1 className='text-purple-500 text-2xl'>Heavy Rains in New Orleans</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, rerum.</p>
            </div>
            <img className='h-30 w-30 object-cover rounded' src={SLN} alt="" />
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex-1'>
              <h1 className='text-purple-500 text-2xl'>City Evacuation Update</h1>
              <p>Residents are advised to move to higher ground immediately.</p>
            </div>
            <img className='h-30 w-30 object-cover rounded' src={SLN1} alt="" />
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex-1'>
              <h1 className='text-purple-500 text-2xl'>Emergency Alert</h1>
              <p>Residents are advised to move to higher ground immediately.</p>
            </div>
            <img className='h-30 w-30 object-cover rounded' src={SLN2} alt="" />
          </div>
        </div>
      </div>
         <div className='flex items-center w-full gap-4'>
          <h1 className='text-5xl font-semibold'>All Around The World</h1>
          <div className='flex-1 h-1 bg-purple-600 rounded'></div>
         </div>
     <div className="flex justify-between gap-4">
  <div className="flex flex-col items-center w-1/2">
    <img className="w-full" src={SAATW1} alt="" />
    <h1 className="text-purple-600 mt-2">What Is Weather?</h1>
    <p className="text-center mt-1">
      Rain and dull clouds, windy blue skies, cold snow, and sticky heat are very different conditions, yet they are all weather.
    </p>
  </div>
  <div className="flex flex-col items-center w-1/2">
    <img className="w-full" src={SAATW2} alt="" />
    <h1 className="text-purple-500 mt-2">XYZ</h1>
    <p className="text-center mt-1">
    Rain and dull clouds, windy blue skies, cold snow, and sticky heat are very different conditions, yet they are all weather.
    </p>
  </div>
</div>
<footer className="w-full bg-gray-900 text-white py-4 shadow-lg">
  <div className="text-center">
    <p className="text-gray-200 font-medium">
      All Copyrights are reserved | Made with <span className="text-red-500">❤️</span> by Shivansh
    </p>
  </div>
</footer>
    </div>
  )
}

export default Content