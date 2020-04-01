import React from "react"
import Slider from "react-slick"

import one from "../images/1.jpg"
import two from "../images/2.jpg"
import three from "../images/3.jpg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  fade: true,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

const Slide = () => (
  <div className="slide">
    <div className="introuce" style={{
      position: 'absolute',
      zIndex: '333',
      color: 'white'
    }}>
      <h1>유어슈는 유어슈는 학생들의 편리한 생활을 위한<br />서비스를 제공합니다</h1>
      <p>숭실대학교 학생들의 더 나은 더 발전된 캠퍼스 라이프를 위해<br />유어슈는 노력합니다</p>
    </div>
    <Slider {...settings}>
      <div>
        <img src={one} />
      </div>
      <div>
        <img src={two} />
      </div>
      <div>
        <img src={three} />
      </div>
      <div>
        <img src={one} />
      </div>
      <div>
        <img src={two} />
      </div>
      <div>
        <img src={three} />
      </div>
    </Slider>
  </div>
)

export default Slide
