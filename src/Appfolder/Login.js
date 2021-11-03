import React, { useState } from 'react'
import Footer from './Footer';
const Login = () => {
const [passwordValue, setPasswordValue]=useState("")
const [confirmPasswordValue, setConfirmPasswordValue]=useState("")
let validate= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])(?=.{8,})");

const [error, setError]=useState("")
const [error2, setError2]=useState("")
let checkPassword = () => {
  if(!validate.test(passwordValue)){
setError(true)
  }
else{
  setError(false)
}
 if (!(passwordValue === confirmPasswordValue)){
   setError2(true)
 }
 else{
   setError2(false)
 }

}
  
    let change1= ()=>{
let x = document.getElementById("alreadyregister");
let y =document.getElementById("register");
x.style.display="block";
y.style.display="none";
    }
    
        let change2= ()=>{
    let x = document.getElementById("alreadyregister");
    let y =document.getElementById("register");
    x.style.display="none";
    y.style.display="block";
        };

    return (
      <>
        <div class="login-container conatiner-fluid">
        <div class="login-box">
  <div class="btn0 btn-group" role="group"aria-label="Basic mixed styles example">
      <button type="button" onClick={change1} class="btn1 btn">login </button>
  <button type="button"  onClick={change2} class="btn2 btn">Signup</button>
  </div>

  {/* This is login page */}
  <form>
<div id ="alreadyregister">
  <div class="form-content">
<input type="email" placeholder="E-mail" name="E-mail" required></input>
<input type="password" placeholder="Password" name="password" required></input>
<button class= "btn-primary">Submit</button>

</div>
  </div>
  </form>

  {/* This is registration page */}
<form>
  <div id="register">
  <div class="form-content">

<input type="text" placeholder="Type your name here" name="bname" required ></input>

<input type="email"placeholder="Type your E-mail here" name="E-mail" required></input>

<input type="password" placeholder="Type your password here"
onChange={(e)=>{setPasswordValue(e.target.value)
console.log(passwordValue)}} name="password" required></input>
{error && <span>Please type a strong password</span>}       

<input type="password" placeholder="Confirm your password here" name="number"
onChange={(e)=>{setConfirmPasswordValue(e.target.value)
  console.log(passwordValue)}}
required/>
{error2 && <span>This value should be equal to your password</span>}

<input type="number" placeholder="Type your Phone number here" name="number" required/>

<button type="submit" onClick={checkPassword} class="btn-primary">Submit</button>

</div>
  </div> </form>
  </div>
  </div>
  <Footer/> </>
    )
}

export default Login
