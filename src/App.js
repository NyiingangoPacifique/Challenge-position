import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { ReactComponent as Path } from './img/Path 99.svg'
import left_img from './components/assets/68e08138077791.575576838de9d.png'
import right_img from './components/assets/Group 109.png'
import {ReactComponent as LeftArrow} from './components/assets/Group 107.svg';
import {ReactComponent as RightArrow} from './components/assets/Group 108.svg';
import instangram from './components/assets/instagram.svg';
import twitter from './components/assets/twitter.svg';
import facebook from './components/assets/facebook.svg';
import SocialIcon  from './components/Circle';
import tikTok from './components/assets/tiktok.svg';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <div className='top'>
            <p className='text_top'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
            sanctus est Lorem ipsum dolor sit.
            </p>
        </div>
        <div class="flex-container">
          <div class="flex-item-left">
            <div>
              <img src={right_img} alt="right image" className='rightpic' />
              <p className='upper'>lorem ipsum dolor sit amet, consetetur</p>
            </div>
          </div>
          <div class="flex-item-right">
            <div class="flex-container">
              <div class="flex-item-left">
              <div>
                <Path className='pathimg' xs={{width:'40vh'}} />
              </div>
              </div>
              <div class="flex-item-right">
                <div>
                  <img src={left_img} alt="right image" className='leftpic' />
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='under-text'>
                  
                  <h1 className='big-text'>lorem ipsum</h1>
            </div>
      </div>
      <div class="pagination">
        <div className='number'>
          <a href="#" className='active line'>01</a>
          <a href="#" className='line'>02</a>
          <a href="#" className='line'>03</a>
          <a href="#" className='line'>04</a>
          <a href="#">05</a>
          <div class="solid1"></div>
        </div>
        <div className='arrow'>
          <a href="#">
            <LeftArrow className='arr' />
          </a>
          <a href="#">
            <RightArrow className='arr' />
          </a>
        </div>
        <div className='social'>
          <a href="#">
            <SocialIcon icon={tikTok} />
          </a>
          <a href="#">
            <SocialIcon icon={instangram} />
          </a>
          <a href="#">
            <SocialIcon icon={twitter} />
          </a>
          <a href="#">
            <SocialIcon icon={facebook} />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
