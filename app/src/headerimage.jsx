import React from 'react'
import bikeimage from './assets/bike.jpg'
const Headerimage = () => {
  return (
    <div class="flex justify-center ml-10">
      <img src={bikeimage} alt="Header Image" style={{ width: '800px', height: '500px' }}/>
    </div>
  )
}

export default Headerimage