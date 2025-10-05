import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white h-16 flex items-center justify-end pr-8'>
      <ul className='flex items-center gap-5'>
        <li className='text-purple-500 text-xl font-semibold'>Home</li>
        <li className='text-purple-500 text-xl font-semibold'>News</li>
      </ul>
    </div>
  )
}

export default Navbar