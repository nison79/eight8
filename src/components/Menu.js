import React from 'react'
import Logo from '../assets/images/logo.svg'
import '../components/Menu.css'

const Menu = () => {
  return (
    <div>
      <menu>
        <img src={Logo} alt="logo of eight8 agency"/>
        <ul>
          <li>Home</li>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
          <button className="menu-button">Login Here</button>
      </menu>
    </div>
  )
}

export default Menu
