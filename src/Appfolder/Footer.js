import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-fluid">
        <div class="row footer-row">
          < div class="col-md-4 col-12">
          <h3> Subscribe to our newsletter</h3>
          <div class="input-group mb-3">
  <input type="text"  placeholder="Enter your Email adress" 
  aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-primary" type="button" id="button-addon2">Signup</button>
</div>
          {/* <input type="text" placeholder="Write your Email adress"/>
          <button class="btn btn-primary">Signup</button> */}
          </div>
          <div class="col-lg-4 col-12">
              <h4> Contact details</h4>
              <p>Phone number- 1234567890</p>
              <p>Email-adress- abc@gmail.com</p>
              <p> Adress - 123 street, Melbourne VIC 3000</p>
          </div>
          <div class="col-lg-4 col-12">
              <h3>Find us on</h3>
              <span><i class="fa fa-facebook"></i> facebook</span><br/>
              <span><i class="fa fa-twitter"></i> twitter</span><br/>
              <span><i class="fa fa-instagram"></i> instagram</span><br/>
              <span><i class="fa fa-youtube"></i> Youtube</span>
          </div>
        </div>
        <hr/>
<div class="copyright">
        <span><i class="fa fa-copyright"></i> Copyright all right reserved</span>
        </div>
        </div>
        </footer>
   
  );
};

export default Footer;
