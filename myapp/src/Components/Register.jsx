import React, { useEffect } from 'react';
import './Register.css';
import logo from '../assets/Images/logo.jpeg';
import facebook from '../assets/Images/facebook.png';
import google from '../assets/Images/search.png';
import X from '../assets/Images/twitter.png';
import { Link } from 'react-router-dom';

export default function Register() {
    useEffect(() => {
        // Add a unique class to the body
        document.body.className = 'register-page-body';
    
        // Cleanup when component unmounts
        return () => {
          document.body.className = '';
        };
      }, []);
    const openLink = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
      };
  return (
    <div className='Register'>
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
        <div className="Reg-container">
            <h1 className="login">Register Here</h1>
            <form className="form">
                <div className='btn-container'>
                <a>
                <button 
                    type="button" 
                    onClick={() => openLink('https://www.facebook.com/login/')} 
                    className="btnapp"
                >
                    <img src={facebook} alt="Facebook Logo" className="accountlogo" />
                    Facebook
                </button>
                </a>

                <a>
                <button
                    onClick={() => openLink('https://accounts.google.com/')}  
                    className="btnapp" 
                    type="button">

                    <img src={google} alt="Google Logo" className="accountlogo" />
                    Google
                </button>
                </a>

                <a>
                <button
                    onClick={() => openLink('https://x.com/i/flow/login')}  
                    className="btnapp" 
                    type="button">

                    <img src={X} alt="Xaccount Logo" className="accountlogo" />
                    X
                </button>
                </a>
                </div>
                <br/>
                <label htmlFor="name">Your name:</label>
                <center><input type="text" id="name" name="name" required/></center>

                <label htmlFor="email">Email address:</label>
                <center><input type="text" id="email" name="email" required/></center>

                <label htmlFor="password">Create Password:</label>
                <center><input type="password" id="password" name="password" required/></center>
            <center>
                <p className="joinnow">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">
                <span>&nbsp;</span>I have read and accepted the <Link to="/terms">Terms and Conditions</Link>  
                </label>
                </p>

            
                <div className="join">
                    Already a member? <Link to="/login">Log in now</Link>
                    
                </div>
            </center>

            <br/>
            <div className='subcontainer'>
                <button type="submit" className="sub">Click to Register</button>
            </div>
            
            <br/>
            
            </form>
        </div>
        <Link to="/books">Books</Link>
        
    </div>
  )
};