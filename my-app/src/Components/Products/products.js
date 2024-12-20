import React, { useState, useEffect, useRef } from 'react';
import './products.css';
import Hero from "../HERO/Hero";


function Products() {
  return(

      <div>
        <div>
          <Hero />
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
