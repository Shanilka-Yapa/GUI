import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';  // Make sure to import the icon
import { Link, useNavigate } from 'react-router-dom';

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="profileicon">
      <div className="icon-container" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout"><Link to="/login">Logout</Link></a></li>
        </ul>
      )}
    </nav>
  );
};

export default ProfileIcon;
