import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { FaHome , FaEnvelopeOpen } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { PiShoppingBagFill ,PiChatsCircleFill } from "react-icons/pi";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="nav"
      style={isOpen === true ? { height: "300px" } : { height: "50px" }}
    >
      <Hamburger color="white" size="20" toggled={isOpen} toggle={toggleMenu} />
      {isOpen && (
        <div className="burger-menu">
          <div className="menu">
            <div className="menu-left-part">
              <FaHome className="icon"></FaHome>
              <GoPersonFill className="icon"></GoPersonFill>
              <PiShoppingBagFill className="icon"></PiShoppingBagFill>
              <PiChatsCircleFill className="icon"></PiChatsCircleFill>
              <FaEnvelopeOpen className="icon"></FaEnvelopeOpen>
            </div>
            <div className="menu-right-part">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
