import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero(){
return(

<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div id="carouselmain" class="carousel-inner">
      <div class="carousel-item active">
        
        <img id="imgcarousel" class="bd-placeholder-img" src="https://media.istockphoto.com/id/164963728/photo/beautiful-summer-garden.jpg?s=612x612&w=0&k=20&c=NeQjkyBlB_0RY8vHhqPPn--4lmdtqgolsxmyp_lLQKY=" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
  
      <img id="imgcarousel" class="bd-placeholder-img" src="https://images.pexels.com/photos/80453/poppy-field-of-poppies-flower-flowers-80453.jpeg?cs=srgb&dl=pexels-pixabay-80453.jpg&fm=jpg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">

      <img id="imgcarousel" class="bd-placeholder-img" src="https://media.istockphoto.com/id/1390124540/photo/close-up-green-grass-field-with-tree-blur-park-background-spring-and-summer.jpg?s=612x612&w=0&k=20&c=P9P9vpEk3yfMcd6sxhkZaldpR_7XixI-dOVum457PXc=" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

)


}
export default Hero