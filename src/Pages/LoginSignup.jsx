import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {


  const [state, setState] = useState("Login");
  //state variable to store our input field data 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  //change handler function 
  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    console.log("Login function executed", formData);

    let responseData;
    //use fetch API
    await fetch('https://react-app-api.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    
    console.log(responseData.success);
    if(responseData.success){
      //if our username and password is correct and the token has been generated
      //then will add authentication token in the local storage
      localStorage.setItem('auth-token', responseData.token);
      //after that we will be loged in 
      //after login we will send out user to home page, for that
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("Sign Up function executed", formData);
    let responseData;
    //use fetch API
    await fetch('https://react-app-api.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    
    console.log(responseData.success);
    if(responseData.success){
      //if our username and password is correct and the token has been generated
      //then will add authentication token in the local storage
      localStorage.setItem('auth-token', responseData.token);
      //after that we will be loged in 
      //after login we will send out user to home page, for that
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange = {changeHandler} type = "text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange = {changeHandler} type = "email" placeholder='Email Address' />
          <input name = 'password' value={formData.password} onChange = {changeHandler} type = 'password' placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" 
        ? <p className='loginsignup-login'>Already have an acount? <span onClick={() => {setState("Login")}}>Login here</span></p> 
        : <p className='loginsignup-login'>Create an Account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type = "checkbox" name = '' id = '' />
          <p>By continuing, i agree to use the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}
