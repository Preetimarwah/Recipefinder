import React from 'react'
import './index.css';
import {  Link } from "react-router-dom";


const Navbar = () => {
    return (
        // <div>
          <nav class="navbar navbar-light bg-light fixed-top">
  <div class="nav1 container-fluid">
    <img  class="logo" alt="greatfood" src="/images/logo.png"/>
        {/* <a class="navbar-brand" href="#"></a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
     aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5> */}
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" 
        aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <button class=" nav-link active" style={{border:"none", backgroundColor:"white"}}
            aria-current="page"><Link to ='/Home'>Home</Link></button>
          </li>
          <li class="nav-item">
            <button class="nav-link" style={{border:"none", backgroundColor:"white"}}
            ><Link to ='/Search'>Search</Link></button>
          </li>
          <li class="nav-item">
            <button class="nav-link" style={{border:"none", backgroundColor:"white"}}
            ><Link to ='/Login'>Login/Signup</Link></button>
          </li>  
        
        </ul>
      </div>
    </div>
  </div>
</nav>

        // </div>
    )
}

export default Navbar
