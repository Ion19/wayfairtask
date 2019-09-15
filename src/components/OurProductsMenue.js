import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class OurProductsMenue extends Component {


  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="text-uppercase">
        
        <Slider {...settings}>
          <div className="slider-item">
            <a href="/#/"><span>out door</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>furniature</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>Decor</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>Bathroom</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>out door</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>furniature</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>Decor</span></a>
          </div>

          <div  className="slider-item">
          <a href="/#/"><span>Bathroom</span></a>
          </div>
        </Slider>
      </div>
    );
  }
}