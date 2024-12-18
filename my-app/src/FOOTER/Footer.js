import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

function Footer(){
    return(

        <div id='foot'>
<div  class="container " >
<footer class="py-3 my-4  ">
        
    <ul class=" justify-content-center border-bottom pb-3 mb-3">
           
        
      <ul class="nav justify-content-center d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><img class="bi" width="50" height="50" src="/assets/images/FOOTER/instagram.png"alt="INSTAGRAM"></img></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><img class="bi" width="50" height="50" src="/assets/images/FOOTER/twitter.png"alt="X"></img></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><img class="bi" width="50" height="50" src="/assets/images/FOOTER/facebook.png"alt="FACEBOOK"></img></a></li>
    </ul>
   
    
        <ul class="nav justify-content-center d-flex ">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Products</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Consulting</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Gallery</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact Us</a></li>

      </ul>
    </ul>
    
    <p class="text-center text-body-secondary">© 2025 JK FARMS, ALRIGHTS RESERVED</p>
  </footer>
  </div>
  </div>




    )
}

export default Footer
