import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

function Hero(){
  const [currentSlide, setCurrentSlide] = useState(0);  // Track the current slide index
  const [timeAutoNext] = useState(5000); // Auto slide duration
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  
  const sliderItems = [
    '/assets/images/Products/img1.jpg',
    '/assets/images/Products/img2.jpg',
    '/assets/images/Products/img3.jpg',
    '/assets/images/Products/img4.jpg'
  ];
  
  // Handle the Next button click
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };
  
  // Handle the Previous button click
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderItems.length) % sliderItems.length);
  };
  
  // Auto next slide functionality
  useEffect(() => {
    const autoNext = setInterval(nextSlide, timeAutoNext);
    return () => clearInterval(autoNext);  // Cleanup the interval when the component unmounts
  }, [timeAutoNext]);

  // Reset the auto slide timer every time the slide changes
  useEffect(() => {
    const autoNext = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoNext);
  }, [currentSlide, timeAutoNext]);

  return (
    <div>
    <div className="carousel" ref={sliderRef}>
      {/* Slider Area */}
      <div className="list">
        <div className="item">
          <img src={sliderItems[currentSlide]} alt="Product Slide" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Area */}
      <div className="thumbnail" ref={thumbnailRef}>
        {sliderItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      {/* Time indicator (optional) */}
      <div className="time"></div>
    </div>
    </div>


)}
export default Hero