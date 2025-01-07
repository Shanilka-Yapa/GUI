import React from 'react';
import './Login.css';
import logo from '../assets/Images/logo.jpeg';
export default function Login() {
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
        </div>
        
    </div>
  )
};