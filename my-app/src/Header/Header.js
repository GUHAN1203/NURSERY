import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header(){
    return(

<nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container-fluid">
      <a id='logo'  class="navbar-brand" href="#">JK FARMS & NURSERY</a>
      <button id='navbut' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav"class="collapse navbar-collapse justify-content-end" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          

          <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Consulting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    );
}
export default  Header 