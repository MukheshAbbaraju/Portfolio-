import React from 'react'
import './body.css';
import Batman from '../assets/Batman.png'
import RAJINI from '../assets/RAJINI.png'
const Body = () => {
  return (
    <div className='bodies'>
        <div className='Body'>
            <img src={Batman} alt='batman' className='Bat'/>
            <p className='bodyText'>Hello there!! my name is mukhesh.. <br /> and i'm a batman fan.</p>
        </div>
        <div className='Body'>
            <img src={RAJINI} alt='RAJINI' className='Bat'/> 
            <p className='bodyText'>And Also for Rajini</p>
        </div>
    </div>
  )
}

export default Body
