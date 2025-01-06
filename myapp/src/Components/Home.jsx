import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
import './Home.css';
import logo from '../assets/Images/logo.jpeg';
export default function Home() {
  return (
    <div className="Home">
      <header> 
        <title>Home page</title>
        <div className="container">
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
        </div>
      </header>

      <main> 
        <div>
          <nav className="navbar">
            <ul>
              <li><a href="#home"><FontAwesomeIcon icon="home" /> Home</a></li>
              <li><a href="#about us"><FontAwesomeIcon icon="info-circle"/>About us</a></li>
              <li><a href="#media"><FontAwesomeIcon icon="newspaper"/>Media</a></li>
              <li><a href="#contact"><FontAwesomeIcon icon="phone"/>Contact</a></li>
              <li><a href="#products"><FontAwesomeIcon icon="shopping-cart"/>Products</a></li>
              <li><a href="login.html"><FontAwesomeIcon icon="sign-in-alt"/>Login</a></li>
              <li><a href="signin.html"><FontAwesomeIcon icon="user-plus"/>Register</a></li>
            </ul>
          </nav>
        </div>
      </main>

      <footer> 

      </footer>
    </div>
  );
}