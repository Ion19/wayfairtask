import React ,{Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slideritem1 from '../../utlites/images/slideritem1.png';
import slideritem2 from '../../utlites/images/slideritem2.png';
import slideritem3 from '../../utlites/images/slideritem3.png';


 

export default class ProductSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className="text-center product-slider container">
        
        <Slider {...settings}>
          <div className="slider-item">
          <img className="img-fluid" width="130" height="108"  src={slideritem1} alt="slider 1 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem2} alt="slider 2 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem3} alt="slider 3 "/>
          </div>

          <div className="slider-item">
          <img className="img-fluid" width="130" height="108"  src={slideritem1} alt="slider 1 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem2} alt="slider 2 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem3} alt="slider 3 "/>
          </div>

          <div className="slider-item">
          <img className="img-fluid" width="130" height="108"  src={slideritem1} alt="slider 1 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem2} alt="slider 2 "/>
          </div>
          <div className="slider-item">
          <img className="img-fluid"  width="130" height="108" src={slideritem3} alt="slider 3 "/>
          </div>

         
        </Slider>
      </div>
    );
  }
}