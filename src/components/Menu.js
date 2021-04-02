import React from 'react'
import Logo from '../assets/images/logo@2x.png'
import '../components/Menu.css'

const Menu = () => {
  return (
    <div>
      <menu>
        <img src={Logo} />
        <ul>
          <li>Home</li>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
          <button>Login Here</button>
      </menu>
    </div>
  )
}

export default Menu