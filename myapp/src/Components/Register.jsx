import React, { useState, useEffect } from 'react';
import './Register.css';
import logo from '../assets/Images/logo.jpeg';
import facebook from '../assets/Images/facebook.png';
import google from '../assets/Images/search.png';
import X from '../assets/Images/twitter.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    document.body.className = 'register-page-body';
    return () => {
      document.body.className = '';
    };
  }, []);

  const openLink = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to backend using POST request
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message); // Display the success message
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className='Register'>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="my-image" />
          <div className="logoname">
            <h1>Estate<span className="ease">Ease</span></h1>
          </div>
        </div>
      </header>
      
      <div className="Reg-container">
        <h1 className="login">Register Here</h1>
        
        <form className="form" onSubmit={handleSubmit}>
          <div className='btn-container'>
            <a>
              <button type="button" onClick={() => openLink('https://www.facebook.com/login/')} className="btnapp">
                <img src={facebook} alt="Facebook Logo" className="accountlogo" />
                Facebook
              </button>
            </a>
            <a>
              <button type="button" onClick={() => openLink('https://accounts.google.com/')} className="btnapp">
                <img src={google} alt="Google Logo" className="accountlogo" />
                Google
              </button>
            </a>
            <a>
              <button type="button" onClick={() => openLink('https://x.com/i/flow/login')} className="btnapp">
                <img src={X} alt="X Logo" className="accountlogo" />
                X
              </button>
            </a>
          </div>

          <label htmlFor="name">Your name:</label>
          <center><input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /></center>

          <label htmlFor="email">Email address:</label>
          <center><input type="text" id="email" name="email" required value={formData.email} onChange={handleChange} /></center>

          <label htmlFor="password">Create Password:</label>
          <center><input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} /></center>
          
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

          <br />
          
          <div>
            <button type="submit" className="regbut"><Link to="/login" className='regbut-link'>Click to Register</Link></button>
          </div>
          
          <br />
        </form>
      </div>
      
    </div>
  );
}
