import React from 'react';
import '../css/login.css';
import { loginUrl } from '../spotify';

function Login() {
    return (
      <div className='login'>
        <img src='../images/spotify.png' alt='' />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login
