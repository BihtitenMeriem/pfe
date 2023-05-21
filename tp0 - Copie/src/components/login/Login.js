import './style.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillLockFill } from 'react-icons/bs'
import {BsEnvelopeFill} from 'react-icons/bs'
import React, { useState } from 'react'

export default function Login() {
    const [s,setSwip]= useState('')
    const toswip=()=>{s?setSwip(''):setSwip('sign-up-mode');}
  return (
    <div className='body'>
        <div className={`container ${s}`}>
           
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i><BsFillPersonFill/></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i><BsFillLockFill/></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
          
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i><BsFillPersonFill/></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i><BsEnvelopeFill/></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i><BsFillLockFill/></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn" value="Sign up" />
          
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
          Enter your personal detail and start journey with us.
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={()=>toswip()}>
            Sign up
          </button>
        </div>
        <img src="img/login/log.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
          To keep connect with us please login with your account here!
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={()=>toswip()}>
            Sign in
          </button>
        </div>
        <img src="img/login/register.svg" className="image" alt="" />
      </div>
    </div>
  </div>

    </div>
  )
}
