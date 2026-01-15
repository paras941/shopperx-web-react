import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up </h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email"placeholder='Email Adrres' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span/>Login <span></span> </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use $ privacy </p>
        </div>
      </div>
    </div>
  )
}


export default LoginSignUp