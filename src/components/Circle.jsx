import React from 'react';
import ellipse from './assets/Ellipse 21.svg';
import './style/Style.css';

function SocialIcon({icon}) {
  return (
    <div className='all'>
        <div className='ellipse'>
            <img src={ellipse} alt="container" />
        </div>
        <div className='tiktok'>
            <img src={icon} alt="container" />
        </div>
    </div>
  )
}

export default SocialIcon;