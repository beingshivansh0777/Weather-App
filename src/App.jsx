import { useState } from 'react'
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import HeroImage from './components/HeroImage'
import Header from './components/Header'
import ContentImage from './components/ContentImage'
import Content from './components/Content'



import './App.css'
import Header2 from './components/Header2'

const App =() => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
       <HeroImage/>
         <Weather/>
           <Header/>
             <Header2/>
               <ContentImage/>
               <main className='flex-grow'>
                 <Content/>
               </main>
                  

    </div> 
  )
}

export default App
