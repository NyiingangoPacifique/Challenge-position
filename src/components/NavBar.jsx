import React from 'react';
import { ReactComponent as Rice } from './assets/rice.svg'
import { ReactComponent as Group } from './assets/Group94.svg'
import './style/Style.css';

export default function Navbar() {
    return (
      <nav className="nav">
        <div className='container'>
        <ul className="menu">
          <li className="items">
            <Rice className='rice'/>
          </li>
          <li className="items">
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#services">Services</a>
                <a href="#map">Map</a>
                <a href="#about">About</a>
            </div>
          </li>
          <li className="items">
            <Group className='respo'/>
          </li>
        </ul>
        <div class="solid"></div>
        </div>
      </nav>
 )
}