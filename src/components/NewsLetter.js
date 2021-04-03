import React from 'react'
import Arrow from '../assets/images/arrow-nobg.png'
import Background from '../assets/images/newsletter-bg@2x.png'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter-wrapper" style={{ background: `url(${Background})` , backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
      <div className="newsletter-elements">
        <img src={Arrow} alt="arrow"/>
        <h5>Subscribe to stay in the loop</h5>
        <div className="form">
          <input type="text"/>
          <button className="newsletter-button">SEND</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
