import React from 'react'
import ScrollUP from '../assets/ScrollUP.mp4'
const Scrollup = () => {
  return (
    <div className='scroll'>
        <video 
        src={ScrollUP} 
        autoPlay 
        loop 
        muted 
        playsInline
        />
    </div>
  )
}

export default Scrollup;
