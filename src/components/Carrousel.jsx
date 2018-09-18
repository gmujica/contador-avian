import React, { Component } from "react"
import Slider from "react-slick"
import Option1 from '../components/Option1.jsx'
import Option2 from '../components/Option2.jsx'
import Option3 from '../components/Option3.jsx'
import Option4 from '../components/Option4.jsx'

export default class Carrousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <Slider {...settings}>
        <div>
          <Option1 />
        </div>
        <div>
          <Option2 />
        </div>
        <div>
          <Option3 />
        </div>
      </Slider>
    );
  }
}
