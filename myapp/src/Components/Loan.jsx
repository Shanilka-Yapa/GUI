import React, { useState } from "react";
import homeLoanImage from "../assets/Images/loan.jpg";


const Loan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    loanAmount: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/apply-loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("The information will be sent to your email.");
        setIsModalOpen(false);
        setFormData({ fullName: "", email: "", mobile: "", loanAmount: "", address: "" });
      } else {
        alert("Failed to submit loan application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting loan application.");
    }
  };

  return (
    <div className="loan-container">
      <img src={homeLoanImage} alt="Home Loan" className="loan-image" />
      <div className="loan-content">
        <h1 className="loan-title">Home Loans</h1>
        <p className="loan-description">
          Our Home Loans provide the means by which you could build, purchase, or renovate the house or apartment you always hoped you'd own.
        </p>
        <button className="loan-button" onClick={() => setIsModalOpen(true)}>Apply Now →</button>
      </div>

      {/* Pop-up modal for loan application */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Apply for a Loan</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} required />
              <input type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleInputChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
              
              {/* Buttons in one row */}
              <div className="button-row">
                <button type="submit" className="save-btn">Submit</button>
                <button type="button" className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loan;
