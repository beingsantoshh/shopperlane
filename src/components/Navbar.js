import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <img className='img-logo' src={logo} alt="logo" />
        </div>
        <div>
            <input className='input' type="text" placeholder='Search for products' />
        </div>
        <div>
            <span>Home</span>
        </div>
        <div>
            <span>About</span>
        </div>
        <div>
            <span>Login/Signup</span>
        </div>    
        <div>
            <span>Cart</span>
        </div>         
    </div>
  )
}

export default Navbar