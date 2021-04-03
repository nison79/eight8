import React from 'react'
import DigitalDesign from '../assets/images/digital-design.png'
import WebDevelopment from '../assets/images/web development.png'
import WeLoveYou from '../assets/images/we love you.png'
import Divider from '../assets/images/divider.png'
import './Services.css'

const Services = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <p>Love what you do, and you'll it well</p>
      </div>
      <div className="services">
        <div className="services-box">
          <img  src={DigitalDesign} alt="a computer"/>
          <h4>Digital Design</h4>
          <img className="divider" src={Divider} alt="a line"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo.veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo</p>
        </div>

        <div className="services-box">
          
          <img src={WebDevelopment} alt="tags"/>
          <h4>Web Development</h4>
          <img className="divider" src={Divider} alt="a line"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo.veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo</p>
        </div>

        <div className="services-box">
        
          <img src={WeLoveYou} alt="a heart"/>
          <h4>We Love You</h4>
          <img className="divider" src={Divider} alt="a line"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo.veritatis quibusdam, nesciunt nulla omnis. Necessitatibus natus porro omnis explicabo</p>
        </div>
      </div>
    </div>
  )
}

export default Services
