import React from "react";
import "../style/Navbar.css";
import phoneimg from "../images/phoneLogo.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  function display() {
    navigate("/Cart");
  }

  const totalPrice = useSelector((state) => state.price);
  return (
    <div className="heading-parent-box">
      <div className="parentbox-left">
        <img src={phoneimg} className="phone-logo-img" alt="." />
        <div className="heading-products">Tech Geek</div>
      </div>
      <div className="search">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Search here" />
      </div>
      <div className="parentbox-right ">
        <button
          className="btn btn-primary"
          onClick={() => {
            display();
          }}
        >
          Cart
        </button>
      </div>
    </div>
  );
}
