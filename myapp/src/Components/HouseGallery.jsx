import React, { useState } from "react";
import "./HouseGallery.css";
import house1 from "../assets/Images/house1.jpg";
import house1_2 from "../assets/Images/house12.jpg";
import house1_3 from "../assets/Images/house13.jpg";
import house1_4 from "../assets/Images/house14.jpg";
import house2 from "../assets/Images/house2.jpg";
import house2_2 from "../assets/Images/house2-2.jpg";
import house2_3 from "../assets/Images/house2-3.jpg";
import house2_4 from "../assets/Images/house2-4.jpg";
import house3 from "../assets/Images/house3.jpg";
import house3_2 from "../assets/Images/house3-2.jpg";
import house3_3 from "../assets/Images/house3-3.jpg";
import house3_4 from "../assets/Images/house3-4.jpg";
import house4 from "../assets/Images/house4.jpg";
import house4_2 from "../assets/Images/house4-2.jpg";
import house4_3 from "../assets/Images/house4-3.jpg";
import house4_4 from "../assets/Images/house4-4.jpg";
import house5 from "../assets/Images/house5.jpg";
import house5_2 from "../assets/Images/house5-2.jpg";
import house5_3 from "../assets/Images/house5-3.jpg";
import house5_4 from "../assets/Images/house5-4.jpg";

const houses = [
  {
    id: 1,
    mainImage: house1,
    thumbnails: [house1, house1_2, house1_3, house1_4],
    price: "Rs 500 lakhs",
    size: "2500 sqft",
    address: "123 main street, Kadawatha",
  },
  {
    id: 2,
    mainImage: house2,
    thumbnails: [house2, house2_2, house2_3, house2_4],
    price: "Rs 400 lakhs",
    size: "3500 sqft",
    address: "45 School road, Kaduwela",
  },
  {
    id: 3,
    mainImage: house3,
    thumbnails: [house3, house3_2, house3_3, house3_4],
    price: "Rs 650 lakhs",
    size: "2000 sqft",
    address: "78/A, lakeround road, Kurunegala",
  },
  {
    id: 4,
    mainImage: house4,
    thumbnails: [house4, house4_2, house4_3, house4_4],
    price: "Rs 450 lakhs",
    size: "2500 sqft",
    address: "56, Perera road, Gampaha",
  },
  {
    id: 5,
    mainImage: house5,
    thumbnails: [house5, house5_2, house5_3, house5_4],
    price: "Rs 500 lakhs",
    size: "2500 sqft",
    address: "23, Beach road, Negombo",
  },
];

export default function HouseGallery({ addToWishlist }) {
  const [selectedHouse, setSelectedHouse] = useState(houses[0]); // Default to first house
  const [mainImage, setMainImage] = useState(selectedHouse.mainImage);

  return (
    <div className="gallery-container">
      {/* Left Side: House List (Column View) */}
      <div className="house-list">
        {houses.map((house) => (
          <img
            key={house.id}
            src={house.mainImage}
            alt={`House ${house.id}`}
            className={selectedHouse.id === house.id ? "house-thumbnail active" : "house-thumbnail"}
            onClick={() => {
              setSelectedHouse(house);
              setMainImage(house.mainImage);
            }}
          />
        ))}
      </div>

      {/* Right Side: Selected House Display */}
      <div className="image-display">
        <img src={mainImage} alt="Main house" className="main-image" />
      </div>
      <div>
      {/* Thumbnails below the main image */}
      <div className="thumbnail-gallery">
        {selectedHouse.thumbnails.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={mainImage === img ? "thumbnail active-thumbnail" : "thumbnail"}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* House Details */}
      <div className="house-details">
        <p><strong>Address:</strong> {selectedHouse.address}</p>
        <p><strong>Price:</strong> {selectedHouse.price}</p>
        <p><strong>Size:</strong> {selectedHouse.size}</p>
      </div>

      {/* Wishlist Button */}
      <button 
        className="wishlist-button" 
        onClick={() => addToWishlist(selectedHouse)} // Use the function from props
      >
        +Wishlist
      </button>
      </div>
    </div>
  );
}
