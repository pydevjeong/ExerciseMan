import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import sliderimg1 from '../../img/sliderimg1.jpg'
import sliderimg2 from '../../img/sliderimg2.jpg'
import './SliderBanner.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@mui/material';

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
            backgroundColor:'none',
            // borderRadius:"5px",
            // padding:"2px 0px",
            // marginBottom:'25px'
          }}
        >
          <ul style={{margin:'0px'}}>{dots}</ul>
        </div>
      )
    };
  return (
    <Container style={{marginTop:"3%"}} >
    <Slider {...settings}>
      <div>
        <Link to='/'>
          <img className="bannerImg" src={sliderimg2} alt=""/>
        </Link>
      </div>
      <div>
        <a href="/" target="_blank" rel="noreferrer">
          <img className="bannerImg" src={sliderimg1} alt="" />
        </a>
      </div>
    </Slider>
  </Container>
  );
};

export default SliderBanner;