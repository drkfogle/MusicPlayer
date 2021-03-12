import React from 'react'
import { loginUrl } from '../spotify'
import './Login.css'


function Login() {
  return (
      <div className="login">
        <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg" alt="music-background"/>

        <a href={loginUrl}>Login with music player</a>
      </div>      
  )
}

export default Login
