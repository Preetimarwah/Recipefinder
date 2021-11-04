import React from 'react'
import {  Link } from "react-router-dom";
import Footer from './Footer';
const Body = () => {
    return (
    <>
    <div class="container carousel-container">

    <div class="row">
        <div class="col-lg-4 col-12">
           <h2> In this website you will find great dishes you can make with your favourite ingredients.
         so click on the button below and type in your favourite ingredient in searchbar.                
         <br/><br/>
               <button class= "browsenow"><Link to ='/Search'>Browse Now</Link></button> </h2> 
        </div>
    <div class="col-lg-7 offset-lg-1 col-12 container carousel-part mt-md-5 mt-lg-0 mr-lg-0">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="/images/image4.jpg" class="d-block w-100 carousel-image" alt="error" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/image5.jpg" class="d-block w-100 carousel-image"alt="error" />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/image6.jpg" class="d-block w-100 carousel-image" alt="error" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div> </div>
            <Footer/>
            </>

    )
}

export default Body
