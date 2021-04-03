import React from 'react'
import Logo from '../assets/images/logo-white.svg'
import Facebook from '../assets/images/face.png'
import Instagram from '../assets/images/inst.png'
import linkedIn from '../assets/images/link.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src={Logo} alt="eight8 logo"/>
      <div className="menu-again">
        <ul>
            <li>Home</li>
            <li>Key Features</li>
            <li>Pricing</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
      </div>
      <div className="social">
        <img className="facebook-icon" src={Facebook} alt="facebook icon"/>
        <img src={Instagram} alt="instagram icon"/>
        <img src={linkedIn} alt="linkedIn icon"/>
      </div>
      <div className="footer-elements">
        <p>Copyright© webagency <strong>eight8</strong>. 2020. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
