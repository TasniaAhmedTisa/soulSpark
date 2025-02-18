import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/Home/banner.png'
import img2 from '../assets/Home/img3.jpg'
import img3 from '../assets/Home/img2.jpg'




const Banner = () => {
    return (
        <div className='w-full -mt-8'>
            <Carousel >
                <div>
                    <img src={img1}  />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                
                
            </Carousel>
            
        </div>
    );
};

export default Banner;