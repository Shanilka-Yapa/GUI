import React, { useEffect } from 'react';
import './Login.css';
import logo from '../assets/Images/logo.jpeg';
import facebook from '../assets/Images/facebook.png';
import google from '../assets/Images/search.png';
import X from '../assets/Images/twitter.png';
export default function Login() {
    useEffect(() => {
        // Add a unique className to the body
        document.body.className = 'login-page-body';
    
        // Cleanup when component unmounts
        return () => {
          document.body.className = '';
        };
      }, []);
    const openLink = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
      };
  return (
    <div className='Log'>
        <header>
            <div className="logo-container"> 
                <img 
                    src={logo} 
                    alt="My Image" 
                    className="my-image" 
                />
                <div className="logoname"> 
                    <h1>Estate<span className="ease">Ease</span></h1>
                </div>
            </div>    
        </header>
    <div className="login-container">
        <h1 className="login">Log in</h1>
        <form className="form">
            <label htmlFor="username">Username:</label>
            <center><input type="text" id="username" name="username" required/></center>

            <label htmlFor="password">Password:</label>
            <center><input type="password" id="password" name="password" required/></center>
            
            <div className='submitcontainer'>
            <p><button type="submit" className='submit'>Log In</button></p>
            </div>

            <a>
                <button 
                    type="button" 
                    onClick={() => openLink('https://www.facebook.com/login/')} 
                    className="btn"
                >
                    <img src={facebook} alt="Facebook Logo" className="accountlogo" />
                    <b>Facebook</b>
                </button>
                </a>

                <a>
                <button
                    onClick={() => openLink('https://accounts.google.com/')}  
                    className="btn" 
                    type="button">

                    <img src={google} alt="Google Logo" className="accountlogo" />
                    <b>Google</b>
                </button>
                </a>

                <a>
                <button
                    onClick={() => openLink('https://x.com/i/flow/login')}  
                    className="btn" 
                    type="button">

                    <img src={X} alt="Xaccount Logo" className="accountlogo" />
                    <b>X</b>
                </button>
                </a>
            <center><p className="joinnow">Not a member?<a>Join Now</a></p></center>
        </form>
    </div>
    </div>
  )
};