import React from 'react'
import weatherTrip from '../assets/weatherTrip.png'

const Header = () => {
  return (
    <div className="absolute top-150 left-40 flex flex-col justify-center items-start text-lg gap-7">  
  <p className="text-black-600 text-lg ">
    Stay prepared for upcoming weather with <br />
    <span className="text-xl font-semibold text-purple-500">daily weather news.</span>
  </p>
  <img src={weatherTrip} alt="Weather Trip" className="object-none" />
</div>
  )
  
}

export default Header

