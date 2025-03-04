import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HouseGallery from "./HouseGallery";

library.add(fas);
import './Home.css';
import logo from '../assets/Images/logo.jpeg';
export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
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
              className="my-image" 
            />
            <div className="logoname"> 
              <h1>Estate<span className="ease">Ease</span></h1>
            </div>
          </div>
          <nav className='profileicon'>
          <d className='round'><FontAwesomeIcon icon="user" /> </d><br/>
          <d className='round'><FontAwesomeIcon icon="bell" /> </d>
          </nav>
        </div>
      </header>

      <main> 
        <div>
          <center>
          <nav className="navbar">
            <ul>
              <li onClick={() => toggleSection("home")}><d><FontAwesomeIcon icon="home" /> Home</d></li>
              <li onClick={() => toggleSection("about")}><d><FontAwesomeIcon icon="info-circle"/>About us</d></li>
              <li onClick={() => toggleSection("contacts")}><d><FontAwesomeIcon icon="phone"/>Contact</d></li>
              <li onClick={() => toggleSection("properties")}><d><FontAwesomeIcon icon="house-user"/>Properties</d></li>
              <li onClick={() => toggleSection("loan")}><d><FontAwesomeIcon icon="hand-holding-usd"/>House-loans</d></li>
              <li onClick={() => toggleSection("wishlist")}><d><FontAwesomeIcon icon="shopping-cart"/>Wishlist</d></li>
            </ul>
          </nav>
          </center>
                {/* Section Content */}
        <div className="content-container">
            {activeSection === "home" && (
          <div className="section-content">
            <p className="wel">
              <center>
                Welcome to <b style={{ color: "rgba(8, 110, 141, 0.863)", fontSize: "50px" }}>EstateEase!</b>
                <div className="containerhome">
                  <div className="left-sidehome1" >
                  </div>
                  <div className="right-sidehome">
                  We're excited to help you streamline your property management. 
                  Our system is designed to be user-friendly and intuitive, allowing you to easily track tenants, manage maintenance requests, and collect rent with just a few clicks. 
                  Explore the dashboard and discover how EstateEase can simplify your property management tasks.
                  </div>
                </div>
              </center>
            </p>
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
          <div className="section-content">
            <p className="wel">
              <center>
                <b style={{ color: "rgba(8, 110, 141, 0.863)", fontSize: "50px" }}>EstateEase!<br/> <b>You can contact us through</b></b><br/>
              Email     : estateease@gmail.com<br/>
              Telephone : +94712345678
              </center>
            </p>
          </div>
            )}

{activeSection === "properties" && <HouseGallery />}
          </div>
        </div>

        
      </main>


    </div>
  );
}