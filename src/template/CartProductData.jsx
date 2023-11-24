import React from "react";
import "../style/CartProductData.css";
import { useSelector } from "react-redux";
import NavBar from "./Navbar";
import CartDisplay from "./DisplayCartData";
export default function CartData() {
  const cartPdtName = useSelector((state) => state.cartPdtName);
  const totalPrice = cartPdtName.reduce(
    (total, product) => total + product.pdtPrice,
    0
  );
  console.log(cartPdtName);
  return (
    <div className="cart-mega-container">
      <NavBar />
      <div>
        {cartPdtName.map((x, i) => {
          return (
            <CartDisplay
              index={i}
              cartDisplayName={x.name}
              cartDisplayPrice={x.pdtPrice}
            />
          );
        })}
      </div>
      {totalPrice ? <div className="total-price">Total: {totalPrice}</div> : ""}
    </div>
  );
}
