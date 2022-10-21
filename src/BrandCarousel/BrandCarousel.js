import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  brand1  from '../assets/brand1.png';
import  brand2  from '../assets/brand-2.png';


const BrandCarousel = () => {
    return (
        <div>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
            
        </div>
    );
};

export default BrandCarousel;
