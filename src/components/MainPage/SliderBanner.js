import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import contact_us from '../../img/contact_us.jpg'
import FoodFinder_img from '../../img/FoodFinder_img.jpg'
import './SliderBanner.css'


const SliderBanner = () => {
 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:4000,
      appendDots:dots=>(
        <div
          style={{
            backgroundColor:'#ddd',
            borderRadius:"5px",
            padding:"10px 0px",
            marginBottom:'25px'
          }}
        >
          <ul style={{margin:'0px'}}>{dots}</ul>
        </div>
      )
    };
  return (
    <div>
    
    <Slider {...settings}>
      <div>
        <Link to='/contact_us'>
          <img className="bannerImg" src={contact_us} alt="" />
        </Link>
      </div>
      <div>
        <Link to='성철이형주소'>
          <img className="bannerImg" src={FoodFinder_img} alt="" />
        </Link>
      </div>
    </Slider>
  </div>
  );
};

export default SliderBanner;