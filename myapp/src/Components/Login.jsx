import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../assets/Images/logo.jpeg';
import facebook from '../assets/Images/facebook.png';
import google from '../assets/Images/search.png';
import X from '../assets/Images/twitter.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [error, setError] = useState(''); // To display any error messages
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    document.body.className = 'login-page-body';
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
      // Send data to the backend to validate login
      const response = await axios.post('http://localhost:5000/login', formData);
      
      if (response.status === 200) {
        // If login is successful, navigate to the home page
        navigate('/home');
      }
    } catch (error) {
      // If error (invalid credentials or server issue), display the error message
      setError(error.response ? error.response.data.message : 'Error logging in');
    }
  };

  return (
    <div className='Log'>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="my-image" />
          <div className="logoname">
            <h1>Estate<span className="ease">Ease</span></h1>
          </div>
        </div>    
      </header>

      <div className="login-container">
        <h1 className="login">Log in</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <center><input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} /></center>

          <label htmlFor="password">Password:</label>
          <center><input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} /></center>

          {error && <p className="error">{error}</p>} {/* Display error message if exists */}
          
          <div >
            <button type="submit" className="logbut"><Link to="/home" className='regbut-link'>Log in</Link></button>
          </div>

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

          <center>               
            <div className="join">
              Not a member? <Link to="/register">Join now</Link>
            </div>
            
          </center>
        </form>
      </div>
    </div>
  );
}
