import React from 'react'
import NavLogo from '../assets/NavLogo.png'

const Navbar = () => {
  return (
    <div class='navbar'>
      <img src={NavLogo} alt='Hola' className='NavLogo' />
        <ul>
            <li><a href='https://www.ixigo.com/trains' target="_blank" rel="noopener noreferrer" className='hover-2'>Home</a></li>
            <li><a href='https://www.ixigo.com/trains' target="_blank" rel="noopener noreferrer" className='hover-2'>About</a></li>
            <li><a href='https://www.ixigo.com/trains' target="_blank" rel="noopener noreferrer" className='hover-2'>Works</a></li>
            <li><a href='https://www.ixigo.com/trains' target="_blank" rel="noopener noreferrer" className='hover-2'>Touch Me</a></li>

        </ul>
    </div>
  )
}

export default Navbar
