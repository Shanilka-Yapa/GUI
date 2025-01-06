import React from 'react';
import './Home.css';
export default function Comment() {
  return (
    <div className="Home">
      <header> 
        <title>Home page</title>
        <div className="logoname"> 
          <img src="Images/logo.png" className="logo" alt="Logo of EstateEase" /> 
          <p><h1>Estate<h1 className="ease">Ease</h1></h1></p>
        </div>
      </header>

      <main> 
        <div>
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about us">About us</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="signin.html">Register</a></li>
            </ul>
          </nav>
        </div>
      </main>

      <footer> 

      </footer>
    </div>
  );
}