import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HouseGallery from "./HouseGallery";
import Wishlist from "./wishlist";
import Loan from './Loan';
import ProfileIcon from './ProfileIcon';
import WelcomeImage from "../assets/Images/welcome.jpg";
import ContactsImage from "../assets/Images/longlogo.png";

library.add(fas);
import './Home.css';
import logo from '../assets/Images/namelogo.png';
export default function Home() {
const [activeSection, setActiveSection] = useState("home"); // Set "home" as default
const [wishlist, setWishlist] = useState([]); // State for wishlist
  

const toggleSection = (section) => {
  setActiveSection(activeSection === section ? null : section);
};
// Function to add a house to the wishlist
const addToWishlist = (house) => {
  setWishlist((prevWishlist) => [...prevWishlist, house]);
};
  
// Function to remove house from wishlist
const removeFromWishlist = (id) => {
  setWishlist(wishlist.filter(house => house.id !== id));
};
    
return (
  <div className="Home">
    <header> 
      <title>Home page</title>
      <div className="homecontainer">
        <div className="logo-container"> 
          <img 
            src={logo} 
            alt="My Image" 
            className="logo-image" 
           />
        </div>
          <ProfileIcon />
      </div>
    </header>

      <main> 
        <div>
          <center>
          <nav className="navbar">
            <ul>
              <li onClick={() => toggleSection("home")}><d className="icon-container"><FontAwesomeIcon icon="home" /> Home</d></li>
              <li onClick={() => toggleSection("about")}><d className="icon-container"><FontAwesomeIcon icon="info-circle"/>About us</d></li>
              <li onClick={() => toggleSection("contacts")}><d className="icon-container"><FontAwesomeIcon icon="phone"/>Contact</d></li>
              <li onClick={() => toggleSection("properties")}><d className="icon-container"><FontAwesomeIcon icon="house-user"/>Properties</d></li>
              <li onClick={() => toggleSection("loan")}><d className="icon-container"><FontAwesomeIcon icon="hand-holding-usd"/>House-loans</d></li>
              <li onClick={() => toggleSection("wishlist")}><d className="icon-container"><FontAwesomeIcon icon="shopping-cart"/>Wishlist</d></li>
            </ul>
          </nav>
          </center>
                {/* Section Content */}
        <div className="content-container">
            {activeSection === "home" && (
          <div className="loan-container">
            <img src={WelcomeImage} alt="Home Loan" className="loan-image" />
            <div className="loan-content">
              <h1 className="loan-title">Welcome to EstateEase </h1>
              <p className="loan-description" style={{fontWeight:"bold"}}>
              We're excited to help you streamline your property management. 
                  Our system is designed to be user-friendly and intuitive, allowing you to easily track tenants, manage maintenance requests, and collect rent with just a few clicks. 
                  Explore the dashboard and discover how EstateEase can simplify your property management tasks.
              </p>
            </div>
          </div>
            )}

          {activeSection === "about" && (
          <div className="section-content">
            <div className="containerhome">
                  <div className="left-sidehome">
                    <b style={{ color: "aliceblue", fontSize: "50px" }}>About Us</b>
                  </div>
                  <div className="right-sidehome">
                  <p style={{fontSize:"20px"}}>Welcome to "EstateEase", where innovation meets simplicity in real estate management.
                  Founded in 2024, we are committed to transforming the way property management works by providing a comprehensive, 
                  user-friendly platform tailored to the needs of property owners, managers, and tenants alike.
                  </p>
                  </div>
            </div><br/>
            <div className="containerhome">
                  <div className="left-sidehome">
                  <b style={{ color: "aliceblue", fontSize: "50px" }}>Our mission</b>
                  </div>
                  <div className="right-sidehome">
                  <p style={{fontSize:"20px"}}>
                  Our mission is to make real estate management seamless, efficient, and transparent for everyone involved. 
                  Whether you're a landlord managing multiple properties or a tenant seeking a hassle-free rental experience, 
                  EstateEase is here to simplify the process and ensure your success.</p>
                  </div>
            </div><br/>
            <div className="containerhome">
                  <div className="left-sidehome">
                  <b style={{ color: "aliceblue", fontSize: "50px" }}>Why Choose Us</b>
                  </div>
                  <div className="right-sidehome">
                  <p style={{fontSize:"20px"}}>
                  We stand out because of our commitment to:<br/>
                  
                    <li>Ease of Use: Our platform is designed with simplicity and efficiency in mind.<br/></li>
                    <li>Innovation: We leverage cutting-edge technology to deliver a seamless experience.<br/></li>
                    <li>Customer Support: Our dedicated team is here to help you every step of the way.<br/></li>
                    <li>Security: Your data is protected with industry-leading security protocols.<br/></li>
                  
                  </p>
                  </div>
            </div><br/>
            
            <div className="containerhome">
                  <div className="left-sidehome">
                  <b style={{ color: "aliceblue", fontSize: "50px" }}>Our Vision</b>
                  </div>
                  <div className="right-sidehome">
                  <p style={{fontSize:"20px"}}>
                  We envision a future where property management is stress-free and accessible to all. We strive to become the go-to 
                  solution for real estate professionals and tenants worldwide by continuously improving and innovating.
                  </p>
                  </div>
            </div><br/>

            <div className="containerhome">
                  <div className="left-sidehome">
                  <b style={{ color: "aliceblue", fontSize: "50px" }}>Get Started Today</b>
                  </div>
                  <div className="right-sidehome">
                  <p style={{fontSize:"20px"}}>
                  Join thousands of satisfied users who trust [Your Company Name] to handle their real estate needs. Whether you're 
                  managing a single property or a large portfolio, our platform is here to help you achieve your goals.
                  Let's build a better future for real estate management — together.
                  </p>
                  </div>
            </div>
          </div>
          )}

          {activeSection === "contacts" && (
          <div className="loan-container"style={{backgroundColor:"lightblue"}} >
            <img src={ContactsImage} alt="Contacts" className="loan-image" />
            <div className="loan-content">
              <h1 className="loan-title">Contact us through</h1>
              <p className="loan-description">
              Email     : estateease@gmail.com<br/>
              Telephone : +94712345678
              </p>
            </div>
          </div>
          
            )}

            {activeSection === "properties" && (
              <HouseGallery addToWishlist={addToWishlist} />
            )}
            {activeSection === "wishlist" && (
              <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
            )}
            {activeSection === "loan" && <Loan />}

          </div>
        </div>

        
      </main>


    </div>
  );
}