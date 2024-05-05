import React from 'react'
import Il from './assets/il.png'

const Navbar = () => {
  return (
    <div class="flex flex-row w-screen">
    <div class="flex justify-center basis-1/5  ">
      
    <img src={Il} alt="Header Image" style={{ width: '250px', height: '150px' }}/>
    </div>
    <div class="basis-5/6  ">
       
       <div class="flex justify-center text-3xl font-bold italic mt-12 text-green-800">Image Loader</div>
    
    </div>
   
  </div>
  )
}

export default Navbar