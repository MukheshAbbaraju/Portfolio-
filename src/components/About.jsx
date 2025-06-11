import React from 'react'
import './About.css';
import Pylogo from '../assets/Pylogo.png';
import react from '../assets/react.png';
import javo from '../assets/javoo.png';
import sqlo from '../assets/Sqlo.png';
const About = () => {
  return (
    <div className='About'>
          <div>
            <h1>About me</h1>
            <p>Hello, my name is mukhesh, i'm a 21 year old computer science student at R.V.R collage 
              and i'm a fresher as of now(21 may 2025). 
              i love to know stuff that i'm intrested in. you see my intrests and other in this, my webpage</p>
          </div>
          <div>
              <h3>What i know</h3>
              <ul className='whati'>
                <li>
                  <img src={Pylogo} alt='Pylogo' className='Pylogo'/>
                  <p>python</p>
                </li>
                <li>
                  <img src={react} alt='react' className='Pylogo'/>
                  
                  <p className='adjust'>React</p>
                </li>
                <li>
                  <img src={javo} alt='java' className='Pylogo'/>
                  <p>java</p>
                </li>
                <li>
                  <img src={sqlo} alt='Sql' className='Pylogo'/>
                  <p>Sql</p>
                </li>
              </ul>
            </div>
          </div>
        
  )
}

export default About
