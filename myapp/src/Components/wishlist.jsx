import React from "react";
import "./wishlist.css";

export default function wishlist({ wishlist, removeFromWishlist }) {
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
