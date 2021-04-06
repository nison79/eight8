import React from 'react'
import CarouselHeader from './CarouselHeader'

import './Header.css'

const Header = () => {
  return (
    <div>
      <CarouselHeader />
      <div className='header-wrapper'>
        <div className="action">
          <h2>There is no other <br/>platforms for you as <br/>like</h2>
          <button className="header-button">TRY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Header
