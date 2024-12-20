import React, { useState, useEffect, useRef } from 'react';
import './products.css';

function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);  // Track the current slide index
  const [timeRunning] = useState(2000);  // Duration for transitions
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
    </div>

      
      <div className="bgimg-1">
        <div style={{ color: 'black', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
          <h3 style={{ textAlign: 'center' }}>Flowers</h3>
        </div>
        <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bgimg-2">
        <div style={{ position: 'relative' }}>
          <div style={{ color: 'black', backgroundColor: 'white', textAlign: 'center', padding: '10px 10px', textAlign: 'justify' }}>
          <h3 style={{ textAlign: 'center' }}>Plants</h3>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

     
      <div className="bgimg-3">
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bgimg-2">
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bgimg-2">
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bgimg-2">
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bgimg-2">
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
          </div>
          <div className="caption">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Mountain" />
                <div className="overlay">
                  <h3>Mountain</h3>
                  <p>caobdn</p>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mount</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
              <div className="box">
                <img src="/assets/images/Products/img1.jpg" alt="Jersey Logo" />
                <div className="overlay">
                  <h3>Mountains</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

     

    </div>


  );
}

export default Products;
