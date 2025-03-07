import React, { useState } from "react";
import "./wishlist.css";

export default function Wishlist({ wishlist, removeFromWishlist }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const openPopup = (house) => {
    setSelectedHouse(house);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedHouse(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { ...formData, houseId: selectedHouse.id };
    try {
      const response = await fetch("http://localhost:5000/request-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        alert("Request submitted successfully! More information will send to your email");
        closePopup();
      } else {
        alert("Failed to submit request.");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Error submitting request.");
    }
  };

  return (
    <div className="wishlist-container">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((house) => (
            <div key={house.id} className="wishlist-item">
              <img src={house.mainImage} alt={`House ${house.id}`} className="wishlist-image" />
              <button onClick={() => removeFromWishlist(house.id)} className="remove-button">
                Remove
              </button>
              <button onClick={() => openPopup(house)} className="remove-button">
                More details
              </button>
            </div>
          ))}
        </div>
      )}

      {showPopup && selectedHouse && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Request More Information</h2>
            <p>House ID: {selectedHouse.id}</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />


                            {/* Buttons in one row */}
                <div className="button-row">
                <button type="submit">Submit Request</button>
                <button type="button" onClick={closePopup}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
