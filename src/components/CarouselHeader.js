import React from 'react'
import { Carousel } from 'react-bootstrap'
import Img1 from '../assets/images/image1@2x.png'
import Img2 from '../assets/images/image2@2x.png'
import Img3 from '../assets/images/image3@2x.png'

import './CarouselHeader.css'

const CarouselHeader = () => {
  return (
    <div className="page-wrapper">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 m-0"
      src={Img1}
      alt="mountains"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-0"
      src={Img2}
      alt="forest"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-0"
      src={Img3}
      alt="stars galaxy "
    />
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselHeader
