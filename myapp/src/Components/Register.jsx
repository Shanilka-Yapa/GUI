import React, { useState, useEffect } from 'react';
import './Register.css';
import logo from '../assets/Images/namelogo.png';
import facebook from '../assets/Images/facebook.png';
import google from '../assets/Images/search.png';
import X from '../assets/Images/twitter.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize navigation

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
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message); // Show success message
      
      // Navigate to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className='Register'>
      <header className='header'>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
      </header>
      
      <div className="Reg-container">
        <h1 className="login">Register Here</h1>
        
        <form className="form" onSubmit={handleSubmit}>
          <div className='btn-container'>
            <button type="button" onClick={() => openLink('https://www.facebook.com/login/')} className="btnapp">
              <img src={facebook} alt="Facebook Logo" className="accountlogo" />
              Facebook
            </button>

            <button type="button" onClick={() => openLink('https://accounts.google.com/')} className="btnapp">
              <img src={google} alt="Google Logo" className="accountlogo" />
              Google
            </button>

            <button type="button" onClick={() => openLink('https://x.com/i/flow/login')} className="btnapp">
              <img src={X} alt="X Logo" className="accountlogo" />
              X
            </button>
          </div>

          <label htmlFor="name">Username:</label>
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
            <button type="submit" className="regbut">Click to Register</button>
          </div>
          
          <br />
        </form>
      </div>
    </div>
  );
}
