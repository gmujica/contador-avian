import React from "react"
import Slider from "react-slick"
import Option1 from '../components/Option1.jsx'
import Option2 from '../components/Option2.jsx'
import Option3 from '../components/Option3.jsx'


export default class Carrousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6500,
      cssEase: "linear"

    };
    return (
      <Slider {...settings} >
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
