import React, { useEffect } from 'react';
import logo from '../assets/Images/logo.jpeg';
import './Terms.css';
export default function Terms() {
        useEffect(() => {
            // Add a unique class to the body
            document.body.className = 'Terms-page-body';
        
            // Cleanup when component unmounts
            return () => {
              document.body.className = '';
            };
          }, []);
  return (
    <div>        
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
        <div className="outer-wrapper">
            <div className="container">
                <div className="left-side">
                    <h1>Terms and Conditions</h1>
                </div>
                <div className="right-side">
                    <p>
                Welcome to <b>EstateEase!</b> These Terms and Conditions govern your access to and use of our website, services, and any related content. By accessing or using our site, you agree to comply with these terms. If you do not agree, please refrain from using our services.
                Use the website only for lawful purposes and provide accurate information when listing properties. 
                We are not responsible for issues between buyers, sellers, landlords, or tenants and all use of the website is at your own risk. 
                Payments made for services are non-refundable unless stated otherwise. 
                The content on this website belongs to <b>EstateEase</b>, and you may not copy or reuse it without permission. 
                We may link to other websites, but we are not responsible for their consent.
                Keep your account informatioin secure and do not misuse our platform.
                We reserve the right to update these terms at any time, so please check for changes. 
                If you have questions, contact us through our email.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="outer-wrapper">
            <div className="container">
                <div className="left-side">
                    <h1>Privacy Policy</h1>
                </div>
                <div className="right-side">
                <p>
                    At <b>EstateEase</b>, Your privacy is important to us. 
                    We collect personal informatioin such as your name, email, phone number, and property details when you create an account or interact with our website. 
                    Additionally, we may collect usage data, like your IP address and browsing activity, to enhance our services. Your information is used to provide and improve our services, communicate with you, and analyze our website performance. 
                    We do not sell your data, but we may share it with trusted service providers or if required by law. Cookies and similar technologies are used to personalize your experience, and you can manage these through your browser settings. 
                    We use industry-standard measures to protect your data but cannot guarantee absolute security. By using our website, you agree to this policy. For question contact us via our email
                </p>
                </div>
            </div>
        </div>
        <c>We are available at 
        <ul>
            <li>Email   : estateease@gmail.com</li>
            <li>Contact : 071-2345678</li>
        </ul>
        </c>
    </div>
  )
}
