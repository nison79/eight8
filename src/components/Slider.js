import React from 'react'
import { Slide } from 'react-slideshow-image';
import Header from '../components/Header'
import 'react-slideshow-image/dist/styles.css'
import './Slider.css'
import image1 from '../assets/images/image1@2x.png'
import image2 from '../assets/images/image2@2x.png'
import image3 from '../assets/images/image3@2x.png'


const fadeProperties = {
  duration: 2000,
  autoplay: false,
  pauseOnHover: true
};

const Slider = () => {
  return (
    <div className="slide-container"> 
      <Header />
      <Slide {...fadeProperties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image1})` }}>
          
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image2})`}}>
          
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image3})`}}>
            
            </div>
          </div>
        
        </Slide>
    </div>
  )
}

export default Slider
