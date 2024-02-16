import React from 'react'
  import back from '../assets/backbutton.svg'
export const Navbar = () => {
  return (
    <>
       <div className='nav'>
       <button className='back-button'>
        <img src={back} alt="" />
    </button>
        <h3>Profile</h3>
        </div>    
   
    </>
  )
}
