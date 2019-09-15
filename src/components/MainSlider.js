import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./slider/SliderItem";


export default class ParentSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 1,
      speed: 500, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "150px",
            slidesToShow: 1,
            speed: 500, 
           
          }
        },
        {
          breakpoint: 993,
          settings: {
            
            centerMode: false,
            infinite: true,
            slidesToShow: 1,
            speed: 500, 
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            centerMode: false,
            infinite: true,
            slidesToShow: 1,
            speed: 500, 
            slidesToShow: 1
            
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <SliderItem/>
          </div>
          <div>
          <SliderItem/>
          </div>
          <div>
          <SliderItem/>
          </div>
        </Slider>
      </div>
    );
  }
}