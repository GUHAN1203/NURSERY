import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(

<nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container-fluid">
      <a id='logo'  class="navbar-brand" href="#"><img src="/assets/images/HEADER/jklogo1.png"></img></a>
      <button id='navbut' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div id="navbarNav"class="collapse navbar-collapse justify-content-end" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/">
            <a class="nav-link active" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-current="page" href="#">Home</a>
            </Link>
          </li>
          <Link to="/aboutUs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-current="page" href="#">About Us</a>
          </li>
          </Link>
            <Link to="/product">
            <li class="nav-item dropdown">
            <a class="nav-link active" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-current="page" href="#">Products</a>
          </li>
          </Link>
          
         <Link to="/consulting">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-current="page" href="#">Consulting</a>
          </li>
          </Link>

        <Link to="/contactUs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-current="page" href="#">Contact Us</a>
          </li>
          </Link>

        </ul>
      </div>
    </div>
  </nav>
  

    );
}
export default  Header 