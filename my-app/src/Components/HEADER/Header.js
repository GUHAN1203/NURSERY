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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </Link>
          </li>
          <Link to="/aboutUs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          </Link>
         
          

          <li class="nav-item dropdown">
            <Link to="/product">
          <a class="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Flowers</a>
              
              </li>
            <li><a class="dropdown-item" href="#">Plants</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </Link>
        </li>

        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Consulting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Gallery</a>
          </li>

        <Link to="/contactUs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
          </li>
          </Link>

        </ul>
      </div>
    </div>
  </nav>

    );
}
export default  Header 