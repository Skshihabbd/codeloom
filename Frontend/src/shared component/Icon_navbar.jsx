import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Search_modal from "./Search_modal";

const Icon_navbar = ({ isScrolled, handleChildDivClick, handleDivClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Stays</a>
        </li>
        <li>
          <a href="#">Experiences</a>
        </li>
      </ul>

      <div className="search-bar">
        <div className="search-option">
          <span>Where</span>
          <p>Map area</p>
        </div>
        <div className="search-option">
          <span>Check in</span>
          <p>Add dates</p>
        </div>
        <div className="search-option">
          <span>Check out</span>
          <p>Add dates</p>
        </div>
        <div className="search-option">
          <span>Who</span>
          <p>Add guests</p>
        </div>
        <button className="search-button" onClick={handleClick}>
          <IoMdSearch size={24} />
        </button>
      </div>

      <div className="profile-options">
        <a href="#">Switch to hosting</a>
        <i className="fa fa-globe"></i>
        <div className="profile-icon">
          <span>S</span>
          <span className="notification">1</span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <Search_modal />}
    </nav>
  );
};

export default Icon_navbar;
