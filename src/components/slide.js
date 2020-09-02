import React from "react"
import Slider from "react-slick"

import one from "../images/bg_1.jpg"
import two from "../images/bg_error_fix_2.jpg"
import three from "../images/bg_3.jpg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} color="#FFF" size="2x" />
    </div>
  )
}
const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} color="#FFF" size="2x" />
    </div>
  )
}

const settings = {
  fade: true,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const Slide = () => (
  <div className="slide">
    <div
      className="introuce"
      style={{
        position: "absolute",
        color: "white",
      }}
    >
      <h1>
        유어슈는 학생들의 편리한 생활을 위한 <br />
        서비스를 제공합니다
      </h1>
      <hr style={{ border: "solid #ffffff", borderWidth: "2px 0 0" }} />
      <p>
        숭실대학교 학생들의 더 나은 더 발전된 캠퍼스 라이프를 위해
        <br />
        유어슈는 노력합니다
      </p>
    </div>
    <Slider {...settings}>
      <div className="slide-img">
        <img src={one} />
      </div>
      <div className="slide-img">
        <img src={two} />
      </div>
      <div className="slide-img">
        <img src={three} />
      </div>
      <div className="slide-img">
        <img src={require("../images/bg_4.jpg")} />
      </div>
    </Slider>
  </div>
)

export default Slide
